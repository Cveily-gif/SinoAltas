import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { destGeo } from "@/data/dest-geo";
import { destinations } from "@/data/destinations";
import { hsrLines, hsrStations } from "@/data/hsr-lines";
import { shortProvinceName, toQuantized } from "@/lib/geo";
import { cn } from "@/lib/utils";

export type MapDots = {
  q: number;
  gap: number;
  bounds: [number, number, number, number];
  provinces: {
    id: string;
    name: string;
    cp: [number, number];
    borders: [number, number][][];
    cities?: { name: string; cp: [number, number]; borders: [number, number][][] }[];
    cityLines?: [number, number][][];
  }[];
  china: [number, number, number][];
  neighbors: [number, number][][];
  nation: [number, number][][];
  coast?: [number, number][][];
  coastDots?: [number, number][];
  internal: [number, number][][];
  lattice?: { cx: number; cy: number; rot: number; gap: number };
};

export type AtlasMode = "travel" | "rail";

export type DestPin = {
  slug: string;
  nameZh: string;
  x: number;
  y: number;
  provinceIndex: number;
};

export type ChinaMapHandle = {
  flyTo: (x: number, y: number, kind?: "dest" | "province") => void;
  reset: () => void;
  zoomBy: (factor: number) => void;
};

type View = { scale: number; tx: number; ty: number };
type RingBBox = { minx: number; miny: number; maxx: number; maxy: number };
type InsetBox = {
  id: string;
  index: number;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rings: [number, number][][];
  dots: [number, number][];
  bb: RingBBox;
};

const NO_CITY_SPLIT = new Set(["11", "12", "31", "50", "81", "82"]);

type Props = {
  data: MapDots;
  hoverIndex: number | null;
  selectedIndex: number | null;
  selectedSlug: string | null;
  saved: string[];
  mode?: AtlasMode;
  onHoverProvince: (index: number | null) => void;
  onSelectProvince: (index: number | null) => void;
  onSelectDest: (slug: string | null) => void;
  onHoverDest?: (slug: string | null) => void;
};

function token(name: string, fallback: string) {
	if (typeof document === "undefined") return fallback;
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
function withAlpha(hex: string, alpha: number) {
	const h = hex.replace("#", "");
	const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
	const n = Number.parseInt(full, 16);
	return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${alpha})`;
}
function easeInOutCubic(t: number) {
	return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}
function pointInRing(x: number, y: number, ring: [number, number][]) {
	let inside = false;
	const n = ring.length;
	let j = n - 1;
	for (let i = 0; i < n; i++) {
		const pi = ring[i];
		const pj = ring[j];
		if (!pi || !pj) {
			j = i;
			continue;
		}
		const xi = pi[0];
		const yi = pi[1];
		const xj = pj[0];
		const yj = pj[1];
		if (yi > y !== yj > y) {
			if (x < (xj - xi) * (y - yi) / (yj - yi || 1e-12) + xi) inside = !inside;
		}
		j = i;
	}
	return inside;
}
function bboxOfRings(rings: [number, number][][]): RingBBox {
	let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
	for (const ring of rings) for (const pt of ring) {
		if (pt[0] < minx) minx = pt[0];
		if (pt[0] > maxx) maxx = pt[0];
		if (pt[1] < miny) miny = pt[1];
		if (pt[1] > maxy) maxy = pt[1];
	}
	return {
		minx,
		miny,
		maxx,
		maxy
	};
}
function hexFillRings(rings: [number, number][][], gap: number) {
	const bb = bboxOfRings(rings);
	const dx = gap;
	const dy = gap * Math.sqrt(3) / 2;
	const out: [number, number][] = [];
	const iy0 = Math.floor(bb.miny / dy) - 1;
	const iy1 = Math.ceil(bb.maxy / dy) + 1;
	const ix0 = Math.floor(bb.minx / dx) - 1;
	const ix1 = Math.ceil(bb.maxx / dx) + 1;
	for (let iy = iy0; iy <= iy1; iy++) {
		const y = iy * dy;
		const ox = iy % 2 ? dx / 2 : 0;
		for (let ix = ix0; ix <= ix1; ix++) {
			const x = ix * dx + ox;
			for (const ring of rings) if (pointInRing(x, y, ring)) {
				out.push([x, y]);
				break;
			}
		}
	}
	return out;
}
function dist2seg(px: number, py: number, ax: number, ay: number, bx: number, by: number) {
	const dx = bx - ax;
	const dy = by - ay;
	const l2 = dx * dx + dy * dy;
	const t = l2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / l2));
	const x = ax + t * dx;
	const y = ay + t * dy;
	return (px - x) ** 2 + (py - y) ** 2;
}
function nearPolyline(x: number, y: number, lines: [number, number][][], tol2: number) {
	for (const line of lines) for (let i = 0; i < line.length - 1; i++) {
		const a = line[i];
		const b = line[i + 1];
		if (!a || !b) continue;
		if (dist2seg(x, y, a[0], a[1], b[0], b[1]) <= tol2) return true;
	}
	return false;
}
function cityInteriorLines(cities: { borders: [number, number][][] }[], provinceBorders: [number, number][][]) {
	const tol2 = 121;
	const lines: [number, number][][] = [];
	for (const city of cities) for (const ring of city.borders) {
		let cur: [number, number][] = [];
		const flush = () => {
			if (cur.length >= 2) lines.push(cur);
			cur = [];
		};
		for (let i = 0; i < ring.length - 1; i++) {
			const a = ring[i];
			const b = ring[i + 1];
			if (!a || !b) {
				flush();
				continue;
			}
			if (nearPolyline((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, provinceBorders, tol2)) {
				flush();
				continue;
			}
			if (!cur.length) cur.push(a);
			cur.push(b);
		}
		flush();
	}
	return lines;
}

export const ChinaMap = forwardRef<ChinaMapHandle, Props>(function ChinaMap(
	{
		data,
		hoverIndex,
		selectedIndex,
		selectedSlug,
		saved,
		mode = "travel",
		onHoverProvince,
		onSelectProvince,
		onSelectDest,
		onHoverDest,
	},
	ref,
) {
	const wrapRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const viewRef = useRef<View>({
		scale: 1,
		tx: 0,
		ty: 0
	});
	const fitRef = useRef<View>({
		scale: 1,
		tx: 0,
		ty: 0
	});
	const focusFitRef = useRef<View | null>(null);
	const sizeRef = useRef({
		w: 0,
		h: 0
	});
	const fadeRef = useRef(0);
	const focusIndexRef = useRef<number | null>(null);
	const lingerIndexRef = useRef<number | null>(null);
	const savedViewRef = useRef<View | null>(null);
	const denseCache = useRef(new Map<number, [number, number][]>());
	const animatingRef = useRef(false);
	const animRaf = useRef(0);
	useRef(0);
	const hoverDest = useRef<string | null>(null);
	const hoverCity = useRef<string | null>(null);
	const pointer0 = useRef<{ x: number; y: number } | null>(null);
	const dragging = useRef(false);
	const pointers = useRef(new Map<number, { x: number; y: number }>());
	const pinch0 = useRef<number | null>(null);
	const raf = useRef(0);
	const drawRef = useRef<() => void>(() => {});
	const exitFocusRef = useRef<() => void>(() => {});
	const insetLayoutRef = useRef<InsetBox[]>([]);
	const [cursor, setCursor] = useState<"crosshair" | "pointer" | "grab" | "grabbing">("crosshair");
	const [cityBadge, setCityBadge] = useState<string | null>(null);
	const MAX_Z = 7;
	if (selectedIndex != null) {
		focusIndexRef.current = selectedIndex;
		lingerIndexRef.current = selectedIndex;
	} else {
		focusIndexRef.current = null;
	}
	exitFocusRef.current = () => {
		onSelectDest(null);
		onSelectProvince(null);
	};
	const pins = useMemo(() => {
		return destinations.map((d) => {
			const g = destGeo[d.slug];
			if (!g) return null;
			const pidx = data.provinces.findIndex((p) => p.id === g.provinceId);
			const q = toQuantized(g.lon, g.lat, data.bounds, data.q);
			return {
				slug: d.slug,
				nameZh: d.nameZh,
				x: q.x,
				y: q.y,
				provinceIndex: pidx
			};
		}).filter((p): p is DestPin => Boolean(p));
	}, [
		data.bounds,
		data.provinces,
		data.q
	]);
	const railPaths = useMemo(() => {
		const spanMax = 0.55;
		return hsrLines.map((line) => {
			const dense: [number, number][] = [];
			for (let i = 0; i < line.length; i++) {
				const a = line[i];
				if (!a) continue;
				dense.push(a);
				const b = line[i + 1];
				if (!b) continue;
				const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
				const n = Math.max(1, Math.ceil(d / spanMax));
				for (let s = 1; s < n; s++) {
					const t = s / n;
					dense.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
				}
			}
			return dense.map((pt) => {
				const q = toQuantized(pt[0], pt[1], data.bounds, data.q);
				return [q.x, q.y] as [number, number];
			});
		});
	}, [data.bounds, data.q]);
	const railStops = useMemo(() => {
		return hsrStations.map((st) => {
			const q = toQuantized(st.lon, st.lat, data.bounds, data.q);
			return { name: st.name, x: q.x, y: q.y };
		});
	}, [data.bounds, data.q]);
	const landBox = useMemo(() => {
		let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
		for (const d of data.china) {
			if (d[0] < minx) minx = d[0];
			if (d[0] > maxx) maxx = d[0];
			if (d[1] < miny) miny = d[1];
			if (d[1] > maxy) maxy = d[1];
		}
		return {
			minx,
			miny,
			maxx,
			maxy
		};
	}, [data.china]);
	const provMeta = useMemo(() => {
		return data.provinces.map((p, index) => {
			let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
			for (const ring of p.borders) for (const pt of ring) {
				if (pt[0] < minx) minx = pt[0];
				if (pt[0] > maxx) maxx = pt[0];
				if (pt[1] < miny) miny = pt[1];
				if (pt[1] > maxy) maxy = pt[1];
			}
			const area = Math.max(1, (maxx - minx) * (maxy - miny));
			return {
				index,
				minx,
				miny,
				maxx,
				maxy,
				area
			};
		});
	}, [data.provinces]);
	const hitOrder = useMemo(() => [...provMeta].sort((a, b) => a.area - b.area), [provMeta]);
	const insetSpecs = useMemo(() => {
		const specs: Omit<InsetBox, "x" | "y" | "w" | "h">[] = [];
		for (const id of ["82", "81"]) {
			const index = data.provinces.findIndex((p) => p.id === id);
			if (index < 0) continue;
			const prov = data.provinces[index];
			if (!prov) continue;
			const bb = bboxOfRings(prov.borders);
			specs.push({
				id,
				index,
				label: id === "81" ? "香港" : "澳门",
				rings: prov.borders,
				dots: [],
				bb
			});
		}
		return specs;
	}, [data.provinces]);
	const cityInteriors = useMemo(() => data.provinces.map((p) => {
		if (!p.cities?.length || NO_CITY_SPLIT.has(p.id)) return [];
		return cityInteriorLines(p.cities, p.borders);
	}), [data.provinces]);
	const hitProvince = useCallback((x: number, y: number) => {
		for (const meta of hitOrder) {
			if (x < meta.minx - 12 || x > meta.maxx + 12 || y < meta.miny - 12 || y > meta.maxy + 12) continue;
			const rings = data.provinces[meta.index]?.borders;
			if (!rings) continue;
			let inside = false;
			for (const ring of rings) if (pointInRing(x, y, ring)) inside = !inside;
			if (inside) return meta.index;
		}
		return -1;
	}, [data.provinces, hitOrder]);
	const computeFit = useCallback((w: number, h: number): View => {
		const { minx, miny, maxx, maxy } = landBox;
		const pad = Math.min(w, h) * .1;
		const cw = maxx - minx || 1;
		const ch = maxy - miny || 1;
		const scale = Math.min((w - pad * 2) / cw, (h - pad * 2) / ch);
		return {
			scale,
			tx: w / 2 - (minx + maxx) / 2 * scale,
			ty: h / 2 + (miny + maxy) / 2 * scale
		};
	}, [landBox]);
	const provinceFit = useCallback((index: number, w: number, h: number): View => {
		const prov = data.provinces[index];
		let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
		if (prov) for (const ring of prov.borders) for (const pt of ring) {
			if (pt[0] < minx) minx = pt[0];
			if (pt[0] > maxx) maxx = pt[0];
			if (pt[1] < miny) miny = pt[1];
			if (pt[1] > maxy) maxy = pt[1];
		}
		if (!Number.isFinite(minx)) return computeFit(w, h);
		const pad = Math.min(w, h) * .16;
		const cw = maxx - minx || 1;
		const ch = maxy - miny || 1;
		const scale = Math.min((w - pad * 2) / cw, (h - pad * 2) / ch);
		return {
			scale,
			tx: w / 2 - (minx + maxx) / 2 * scale,
			ty: h / 2 + (miny + maxy) / 2 * scale
		};
	}, [computeFit, data.provinces]);
	const buildDenseDots = useCallback((index: number) => {
		const cached = denseCache.current.get(index);
		if (cached) return cached;
		const prov = data.provinces[index];
		if (!prov) return [];
		const testRings = [];
		if (prov.cities && prov.cities.length > 0 && !NO_CITY_SPLIT.has(prov.id)) for (const city of prov.cities) testRings.push(...city.borders);
		else testRings.push(...prov.borders);
		if (!testRings.length) return [];
		const lat = data.lattice;
		const cx = lat?.cx ?? (landBox.minx + landBox.maxx) / 2;
		const cy = lat?.cy ?? (landBox.miny + landBox.maxy) / 2;
		const rot = (lat?.rot ?? 18) * Math.PI / 180;
		const gap = (lat?.gap ?? data.gap) / 2;
		const cosA = Math.cos(rot);
		const sinA = Math.sin(rot);
		const unrot = (x: number, y: number) => {
			const dxr = x - cx;
			const dyr = y - cy;
			return {
				x: cx + dxr * cosA + dyr * sinA,
				y: cy - dxr * sinA + dyr * cosA
			};
		};
		let uminx = Infinity, uminy = Infinity, umaxx = -Infinity, umaxy = -Infinity;
		for (const ring of testRings) for (const pt of ring) {
			const u = unrot(pt[0], pt[1]);
			if (u.x < uminx) uminx = u.x;
			if (u.x > umaxx) umaxx = u.x;
			if (u.y < uminy) uminy = u.y;
			if (u.y > umaxy) umaxy = u.y;
		}
		const dx = gap;
		const dy = gap * Math.sqrt(3) / 2;
		const pad = gap * 4;
		const ix0 = Math.floor((uminx - pad - cx) / dx) - 2;
		const ix1 = Math.ceil((umaxx + pad - cx) / dx) + 2;
		const iy0 = Math.floor((uminy - pad - cy) / dy) - 2;
		const iy1 = Math.ceil((umaxy + pad - cy) / dy) + 2;
		const out: [number, number][] = [];
		for (let iy = iy0; iy <= iy1; iy++) {
			const y0 = cy + iy * dy;
			const ox = iy % 2 ? dx / 2 : 0;
			for (let ix = ix0; ix <= ix1; ix++) {
				const x0 = cx + ix * dx + ox;
				const x = cx + (x0 - cx) * cosA - (y0 - cy) * sinA;
				const y = cy + (x0 - cx) * sinA + (y0 - cy) * cosA;
				let inside = false;
				for (const ring of testRings) if (pointInRing(x, y, ring)) {
					inside = true;
					break;
				}
				if (inside) out.push([x, y]);
			}
		}
		denseCache.current.set(index, out);
		return out;
	}, [
		data.gap,
		data.lattice,
		data.provinces,
		landBox.maxx,
		landBox.maxy,
		landBox.minx,
		landBox.miny
	]);
	const toWorld = (sx: number, sy: number) => {
		const { scale, tx, ty } = viewRef.current;
		return {
			x: (sx - tx) / scale,
			y: (ty - sy) / scale
		};
	};
	const applyView = (next: View) => {
		if (animatingRef.current) {
			viewRef.current = next;
			return 0;
		}
		const wrap = wrapRef.current;
		const bound = focusFitRef.current ?? fitRef.current;
		if (!wrap) {
			viewRef.current = next;
			return 0;
		}
		if (next.scale <= bound.scale * 1.002) {
			const dx = next.tx - bound.tx;
			const dy = next.ty - bound.ty;
			viewRef.current = { ...bound };
			return Math.hypot(dx, dy);
		}
		const w = wrap.clientWidth;
		const h = wrap.clientHeight;
		const x0 = -bound.tx / bound.scale;
		const x1 = (w - bound.tx) / bound.scale;
		const y0 = (bound.ty - h) / bound.scale;
		const y1 = bound.ty / bound.scale;
		const { scale } = next;
		let { tx, ty } = next;
		if (-tx / scale < x0) tx = -x0 * scale;
		if ((w - tx) / scale > x1) tx = w - x1 * scale;
		if ((ty - h) / scale < y0) ty = h + y0 * scale;
		if (ty / scale > y1) ty = y1 * scale;
		const rejected = Math.hypot(next.tx - tx, next.ty - ty);
		viewRef.current = {
			scale,
			tx,
			ty
		};
		return rejected;
	};
	const zoomAt = (sx: number, sy: number, factor: number) => {
		if (animatingRef.current) return;
		const bound = focusFitRef.current ?? fitRef.current;
		const minS = bound.scale;
		const maxS = fitRef.current.scale * MAX_Z;
		const view = viewRef.current;
		if (focusIndexRef.current != null && view.scale <= minS * 1.015 && factor < .97) {
			exitFocusRef.current();
			return;
		}
		const next = Math.min(maxS, Math.max(minS, view.scale * factor));
		if (next <= minS * 1.002) {
			viewRef.current = { ...bound };
			return;
		}
		const wr = {
			x: (sx - view.tx) / view.scale,
			y: (view.ty - sy) / view.scale
		};
		applyView({
			scale: next,
			tx: sx - wr.x * next,
			ty: sy + wr.y * next
		});
	};
	const animateTo = (target: View, fadeTo: number, ms = 640) => {
		if (animRaf.current) cancelAnimationFrame(animRaf.current);
		const startV = { ...viewRef.current };
		const startF = fadeRef.current;
		const t0 = performance.now();
		animatingRef.current = true;
		const step = (now: number) => {
			const t = easeInOutCubic(Math.min(1, (now - t0) / ms));
			viewRef.current = {
				scale: startV.scale + (target.scale - startV.scale) * t,
				tx: startV.tx + (target.tx - startV.tx) * t,
				ty: startV.ty + (target.ty - startV.ty) * t
			};
			fadeRef.current = startF + (fadeTo - startF) * t;
			scheduleDraw();
			if (t < 1) animRaf.current = requestAnimationFrame(step);
			else {
				animatingRef.current = false;
				animRaf.current = 0;
				viewRef.current = { ...target };
				fadeRef.current = fadeTo;
				if (fadeTo === 0) lingerIndexRef.current = null;
				scheduleDraw();
			}
		};
		animRaf.current = requestAnimationFrame(step);
	};
	const draw = useCallback(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const w = wrap.clientWidth;
		const h = wrap.clientHeight;
		if (w < 8 || h < 8) return;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
		}
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		const fit = computeFit(w, h);
		fitRef.current = fit;
		if (sizeRef.current.w !== w || sizeRef.current.h !== h) {
			sizeRef.current = {
				w,
				h
			};
			if (!animatingRef.current) {
				if (selectedIndex != null) {
					const pf = provinceFit(selectedIndex, w, h);
					focusFitRef.current = pf;
					viewRef.current = { ...pf };
					fadeRef.current = 1;
				} else {
					focusFitRef.current = null;
					viewRef.current = { ...fit };
					fadeRef.current = 0;
				}
			}
		} else if (!animatingRef.current && viewRef.current.scale < fit.scale) viewRef.current = { ...fit };
		const ink = token("--color-ink", "#1a1612");
		const paper = token("--color-paper", "#f3eee4");
		token("--color-cinnabar", "#9e2b22");
		const paperHex = "#f3eee4";
		const cinnabarHex = "#9e2b22";
		const inkHex = "#1a1612";
		const seaHex = "#7d97a6";
		ctx.fillStyle = ink;
		ctx.fillRect(0, 0, w, h);
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "high";
		const { scale, tx, ty } = viewRef.current;
		const toS = (x: number, y: number) => ({
			sx: tx + x * scale,
			sy: ty - y * scale
		});
		const strokePolylines = (lines: [number, number][][], color: string, width: number) => {
			ctx.strokeStyle = color;
			ctx.lineWidth = width;
			ctx.lineJoin = "round";
			ctx.lineCap = "round";
			ctx.beginPath();
			for (const line of lines) {
				if (line.length < 2) continue;
				const p0 = line[0];
				if (!p0) continue;
				const s0 = toS(p0[0], p0[1]);
				ctx.moveTo(s0.sx, s0.sy);
				for (let i = 1; i < line.length; i++) {
					const p = line[i];
					if (!p) continue;
					const s = toS(p[0], p[1]);
					ctx.lineTo(s.sx, s.sy);
				}
			}
			ctx.stroke();
		};
		const fade = fadeRef.current;
		const focusedIdx = selectedIndex ?? lingerIndexRef.current;
		strokePolylines(data.neighbors, withAlpha(paperHex, .12 * (1 - fade * .65)), 1);
		strokePolylines(data.internal, withAlpha(paperHex, .28 * (1 - fade)), 1);
		const rDot = .95;
		const paintDots = (fill: string, predicate: (pidx: number) => boolean) => {
			ctx.fillStyle = fill;
			ctx.beginPath();
			for (const d of data.china) {
				if (!predicate(d[2])) continue;
				const { sx, sy } = toS(d[0], d[1]);
				ctx.moveTo(sx + rDot, sy);
				ctx.arc(sx, sy, rDot, 0, Math.PI * 2);
			}
			ctx.fill();
		};
		const dense = fade > .12 && focusedIdx != null ? denseCache.current.get(focusedIdx) : undefined;
		const paintDense = (fill: string) => {
			if (!dense || !dense.length) return;
			ctx.fillStyle = fill;
			ctx.beginPath();
			const r = .88;
			for (const d of dense) {
				const { sx, sy } = toS(d[0], d[1]);
				ctx.moveTo(sx + r, sy);
				ctx.arc(sx, sy, r, 0, Math.PI * 2);
			}
			ctx.fill();
		};
		paintDots(withAlpha(paperHex, .58 * (1 - fade * .48)), (pidx: number) => {
			if (pidx === hoverIndex) return false;
			if (pidx === focusedIdx) return false;
			return true;
		});
		if (focusedIdx != null && focusedIdx !== hoverIndex) {
			if (dense && dense.length) paintDense(withAlpha(paperHex, .62 + fade * .18));
			else paintDots(withAlpha(paperHex, .62 + fade * .2), (pidx: number) => pidx === focusedIdx);
		}
		if (hoverIndex != null) {
			if (hoverIndex === focusedIdx && dense && dense.length) paintDense(withAlpha(cinnabarHex, .92));
			else paintDots(withAlpha(cinnabarHex, .92), (pidx: number) => pidx === hoverIndex);
		}
		const foam = data.coastDots ?? [];
		if (foam.length) {
			ctx.fillStyle = withAlpha(seaHex, .72 * (1 - fade * .35));
			ctx.beginPath();
			const rFoam = 1.05;
			for (const d of foam) {
				const { sx, sy } = toS(d[0], d[1]);
				ctx.moveTo(sx + rFoam, sy);
				ctx.arc(sx, sy, rFoam, 0, Math.PI * 2);
			}
			ctx.fill();
		}
		strokePolylines(data.coast ?? [], withAlpha(paperHex, .5 * (1 - fade * .55)), 1.15);
		strokePolylines(data.nation, withAlpha(paperHex, .78 * (1 - fade * .55)), 1.6);
		if (fade > .02 && focusedIdx != null) {
			const focused = data.provinces[focusedIdx];
			if (focused) {
				strokePolylines(cityInteriors[focusedIdx] ?? [], withAlpha(paperHex, .5 * fade), 1.05);
				strokePolylines(focused.borders, withAlpha(paperHex, .92 * fade), 1.7);
			}
		}
		if (hoverIndex != null && hoverIndex !== focusedIdx) {
			const prov = data.provinces[hoverIndex];
			if (prov) strokePolylines(prov.borders, withAlpha(cinnabarHex, .55), 1.15);
		}
		if (mode === "rail") {
			ctx.lineJoin = "round";
			ctx.lineCap = "round";
			strokePolylines(railPaths, withAlpha(paperHex, .18 * (1 - fade * .4)), 2.6);
			strokePolylines(railPaths, withAlpha(cinnabarHex, .9 * (1 - fade * .3)), 1.2);
			const zoomed = viewRef.current.scale > fit.scale * 1.45;
			const placed: { x: number; y: number }[] = [];
			ctx.textBaseline = "middle";
			ctx.font = zoomed ? "500 12px \"Noto Serif SC\", serif" : "500 11px \"Noto Serif SC\", serif";
			ctx.textAlign = "left";
			for (const st of railStops) {
				const { sx, sy } = toS(st.x, st.y);
				const a = 1 - fade * .28;
				ctx.beginPath();
				ctx.fillStyle = withAlpha(cinnabarHex, a);
				ctx.arc(sx, sy, zoomed ? 2.6 : 2.15, 0, Math.PI * 2);
				ctx.fill();
				ctx.beginPath();
				ctx.strokeStyle = withAlpha(paperHex, a);
				ctx.lineWidth = 1;
				ctx.arc(sx, sy, zoomed ? 4 : 3.4, 0, Math.PI * 2);
				ctx.stroke();
				const minGap = zoomed ? 26 : 38;
				if (placed.some((p) => Math.hypot(p.x - sx, p.y - sy) < minGap)) continue;
				placed.push({ x: sx, y: sy });
				ctx.fillStyle = withAlpha(paperHex, a);
				ctx.fillText(st.name, sx + 7, sy - 1);
			}
		} else {
			const savedPins = pins.filter((p) => saved.includes(p.slug)).slice().sort((a, b) => destinations.findIndex((d) => d.slug === a.slug) - destinations.findIndex((d) => d.slug === b.slug));
			if (savedPins.length > 1) {
				ctx.beginPath();
				ctx.strokeStyle = withAlpha(cinnabarHex, .7);
				ctx.setLineDash([5, 6]);
				ctx.lineWidth = 1.25;
				savedPins.forEach((p, i) => {
					const { sx, sy } = toS(p.x, p.y);
					if (i === 0) ctx.moveTo(sx, sy);
					else ctx.lineTo(sx, sy);
				});
				ctx.stroke();
				ctx.setLineDash([]);
			}
			ctx.textBaseline = "middle";
			ctx.font = "500 12px \"Noto Serif SC\", serif";
			ctx.textAlign = "left";
			for (const pin of pins) {
				const { sx, sy } = toS(pin.x, pin.y);
				const pinA = focusedIdx == null || pin.provinceIndex === focusedIdx ? 1 : 1 - fade * .72;
				const active = pin.slug === selectedSlug || saved.includes(pin.slug);
				const r = active ? 5 : 3.6;
				if (pin.slug === selectedSlug) {
					ctx.beginPath();
					ctx.strokeStyle = withAlpha(cinnabarHex, .5 * pinA);
					ctx.lineWidth = 1;
					ctx.arc(sx, sy, r + 7, 0, Math.PI * 2);
					ctx.stroke();
				}
				ctx.beginPath();
				ctx.fillStyle = withAlpha(cinnabarHex, pinA);
				ctx.arc(sx, sy, r, 0, Math.PI * 2);
				ctx.fill();
				ctx.beginPath();
				ctx.strokeStyle = withAlpha(paperHex, pinA);
				ctx.lineWidth = 1.15;
				ctx.arc(sx, sy, r + 2, 0, Math.PI * 2);
				ctx.stroke();
				if (pin.slug === selectedSlug || pin.slug === hoverDest.current || active) {
					ctx.fillStyle = withAlpha(paperHex, pinA);
					ctx.fillText(pin.nameZh, sx + 9, sy - 1);
				}
			}
		}
		const labelIndex = hoverIndex ?? selectedIndex;
		if (labelIndex != null) {
			const prov = data.provinces[labelIndex];
			if (prov) {
				const { sx, sy } = toS(prov.cp[0], prov.cp[1]);
				const name = shortProvinceName(prov.name);
				ctx.font = "500 14px \"Noto Serif SC\", serif";
				const tw = ctx.measureText(name).width;
				ctx.fillStyle = withAlpha(inkHex, .78);
				ctx.fillRect(sx - tw / 2 - 8, sy - 26, tw + 16, 22);
				ctx.fillStyle = paper;
				ctx.textAlign = "center";
				ctx.fillText(name, sx, sy - 15);
				ctx.textAlign = "left";
			}
		}
		if (fade > .35 && hoverCity.current && selectedIndex != null) {
			const city = data.provinces[selectedIndex]?.cities?.find((c) => c.name === hoverCity.current);
			if (city) {
				const { sx, sy } = toS(city.cp[0], city.cp[1]);
				ctx.font = "500 13px \"Noto Serif SC\", serif";
				const tw = ctx.measureText(city.name).width;
				ctx.fillStyle = withAlpha(inkHex, .78);
				ctx.fillRect(sx - tw / 2 - 8, sy - 26, tw + 16, 22);
				ctx.fillStyle = paper;
				ctx.textAlign = "center";
				ctx.fillText(city.name, sx, sy - 15);
				ctx.textAlign = "left";
			}
		}
		if (fade < .42 && insetSpecs.length) {
			const compact = w < 560;
			const boxW = compact
				? Math.min(62, Math.max(52, w * 0.15))
				: Math.min(86, Math.max(68, w * 0.082));
			const boxH = boxW * (compact ? 0.8 : 0.84);
			const gap = compact ? 5 : 8;
			const margin = compact ? 8 : 14;
			const stacked = compact;
			const pairW = boxW * 2 + gap;
			const x0 = stacked ? w - margin - boxW : w - margin - pairW;
			const y0 = stacked ? h - margin - (boxH * 2 + gap) : h - margin - boxH;
			const alpha = 1 - fade * 1.15;
			const boxes: InsetBox[] = insetSpecs.map((spec, i) => ({
				...spec,
				x: stacked ? x0 : x0 + i * (boxW + gap),
				y: stacked ? y0 + i * (boxH + gap) : y0,
				w: boxW,
				h: boxH
			}));
			insetLayoutRef.current = boxes;
			ctx.save();
			ctx.font = compact ? "500 9px \"Noto Serif SC\", serif" : "500 10px \"Noto Serif SC\", serif";
			ctx.textAlign = "left";
			ctx.fillStyle = withAlpha(paperHex, .42 * alpha);
			ctx.fillText(compact ? "港澳" : "港澳附图 · 南海", x0, y0 - (compact ? 5 : 7));
			for (const box of boxes) {
				const active = hoverIndex === box.index || selectedIndex === box.index;
				ctx.beginPath();
				if (typeof ctx.roundRect === "function") ctx.roundRect(box.x, box.y, box.w, box.h, 3);
				else ctx.rect(box.x, box.y, box.w, box.h);
				ctx.fillStyle = withAlpha(inkHex, .94 * alpha);
				ctx.fill();
				ctx.strokeStyle = withAlpha(active ? cinnabarHex : paperHex, (active ? .9 : .42) * alpha);
				ctx.lineWidth = active ? 1.45 : 1;
				ctx.stroke();
				const labelH = 18;
				const cw = box.bb.maxx - box.bb.minx || 1;
				const ch = box.bb.maxy - box.bb.miny || 1;
				const s = Math.min((box.w - 20) / cw, (box.h - 20 - labelH) / ch);
				const ox = box.x + (box.w - cw * s) / 2 - box.bb.minx * s;
				const oy = box.y + 6 + (box.h - labelH - 6 - ch * s) / 2 + box.bb.maxy * s;
				ctx.save();
				ctx.beginPath();
				if (typeof ctx.roundRect === "function") ctx.roundRect(box.x + 1, box.y + 1, box.w - 2, box.h - 2, 2);
				else ctx.rect(box.x + 1, box.y + 1, box.w - 2, box.h - 2);
				ctx.clip();
				ctx.strokeStyle = withAlpha(active ? cinnabarHex : paperHex, (active ? .95 : .82) * alpha);
				ctx.lineWidth = compact ? 1.05 : 1.2;
				ctx.lineJoin = "round";
				ctx.lineCap = "round";
				ctx.beginPath();
				for (const ring of box.rings) {
					if (ring.length < 2) continue;
					const p0 = ring[0];
					if (!p0) continue;
					ctx.moveTo(ox + p0[0] * s, oy - p0[1] * s);
					for (let i = 1; i < ring.length; i++) {
						const p = ring[i];
						if (!p) continue;
						ctx.lineTo(ox + p[0] * s, oy - p[1] * s);
					}
				}
				ctx.stroke();
				ctx.restore();
				ctx.font = compact ? "500 10px \"Noto Serif SC\", serif" : "500 11px \"Noto Serif SC\", serif";
				ctx.textAlign = "center";
				ctx.fillStyle = withAlpha(active ? cinnabarHex : paperHex, .88 * alpha);
				ctx.fillText(box.label, box.x + box.w / 2, box.y + box.h - (compact ? 6 : 7));
				ctx.textAlign = "left";
			}
			ctx.restore();
		} else insetLayoutRef.current = [];
	}, [
		computeFit,
		provinceFit,
		data.china,
		data.coast,
		data.coastDots,
		data.internal,
		data.nation,
		data.neighbors,
		data.provinces,
		hoverIndex,
		insetSpecs,
		cityInteriors,
		pins,
		railPaths,
		railStops,
		mode,
		saved,
		selectedIndex,
		selectedSlug
	]);
	drawRef.current = draw;
	const scheduleDraw = () => {
		if (raf.current) return;
		raf.current = requestAnimationFrame(() => {
			raf.current = 0;
			drawRef.current();
		});
	};
	const bootRef = useRef(true);
	useEffect(() => {
		const wrap = wrapRef.current;
		if (!wrap) return;
		if (bootRef.current) {
			bootRef.current = false;
			return;
		}
		const w = wrap.clientWidth;
		const h = wrap.clientHeight;
		if (w < 8 || h < 8) return;
		if (selectedIndex == null) {
			focusFitRef.current = null;
			const back = savedViewRef.current ?? computeFit(w, h);
			savedViewRef.current = null;
			animateTo(back, 0, 640);
		} else {
			if (!savedViewRef.current) savedViewRef.current = { ...viewRef.current };
			buildDenseDots(selectedIndex);
			const pf = provinceFit(selectedIndex, w, h);
			focusFitRef.current = pf;
			const cur = viewRef.current;
			const dpan = Math.hypot(pf.tx - cur.tx, pf.ty - cur.ty);
			const ds = Math.abs(Math.log((pf.scale + 1e-6) / (cur.scale + 1e-6)));
			const ms = Math.min(900, Math.max(560, 480 + dpan * .28 + ds * 280));
			animateTo(pf, 1, ms);
		}
	}, [
		selectedIndex,
		computeFit,
		provinceFit,
		buildDenseDots
	]);
	useImperativeHandle(ref, (): ChinaMapHandle => ({
		flyTo: () => {},
		reset: () => {
			viewRef.current = { ...fitRef.current };
			scheduleDraw();
		},
		zoomBy: (factor) => {
			const wrap = wrapRef.current;
			if (!wrap) return;
			zoomAt(wrap.clientWidth / 2, wrap.clientHeight / 2, factor);
			scheduleDraw();
		}
	}), []);
	useEffect(() => {
		draw();
	}, [draw]);
	useEffect(() => {
		let frames = 0;
		let id = 0;
		const tick = () => {
			drawRef.current();
			const wrap = wrapRef.current;
			frames += 1;
			if (wrap && wrap.clientWidth < 8 && frames < 90) id = requestAnimationFrame(tick);
		};
		id = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(id);
	}, []);
	useEffect(() => {
		const wrap = wrapRef.current;
		if (!wrap) return;
		const onWheel = (e: WheelEvent) => {
			e.preventDefault();
			const rect = wrap.getBoundingClientRect();
			const factor = Math.min(1.08, Math.max(.93, Math.exp(-e.deltaY * .0011)));
			zoomAt(e.clientX - rect.left, e.clientY - rect.top, factor);
			scheduleDraw();
		};
		wrap.addEventListener("wheel", onWheel, { passive: false });
		return () => wrap.removeEventListener("wheel", onWheel);
	}, []);
	useEffect(() => {
		const wrap = wrapRef.current;
		if (!wrap) return;
		const ro = new ResizeObserver(() => {
			drawRef.current();
		});
		ro.observe(wrap);
		return () => ro.disconnect();
	}, []);
	useEffect(() => {
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
			if (animRaf.current) cancelAnimationFrame(animRaf.current);
		};
	}, []);
	const hitCity = (x: number, y: number) => {
		if (selectedIndex == null) return null;
		const prov = data.provinces[selectedIndex];
		if (!prov || NO_CITY_SPLIT.has(prov.id)) return null;
		const cities = prov.cities;
		if (!cities) return null;
		let found = null;
		let best = Infinity;
		for (const city of cities) {
			let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
			for (const ring of city.borders) for (const pt of ring) {
				if (pt[0] < minx) minx = pt[0];
				if (pt[0] > maxx) maxx = pt[0];
				if (pt[1] < miny) miny = pt[1];
				if (pt[1] > maxy) maxy = pt[1];
			}
			const area = Math.max(1, (maxx - minx) * (maxy - miny));
			if (x < minx - 8 || x > maxx + 8 || y < miny - 8 || y > maxy + 8) continue;
			let inside = false;
			for (const ring of city.borders) if (pointInRing(x, y, ring)) inside = !inside;
			if (inside && area < best) {
				best = area;
				found = city.name;
			}
		}
		return found;
	};
	const hit = (sx: number, sy: number) => {
		for (const box of insetLayoutRef.current) if (sx >= box.x && sx <= box.x + box.w && sy >= box.y && sy <= box.y + box.h) return {
			dest: null,
			province: box.index,
			city: null
		};
		const wr = toWorld(sx, sy);
		const destR = 18 / viewRef.current.scale;
		let dest = null;
		let destD = destR * destR;
		if (mode === "travel") for (const p of pins) {
			const dd = (p.x - wr.x) ** 2 + (p.y - wr.y) ** 2;
			if (dd < destD) {
				destD = dd;
				dest = p;
			}
		}
		const province = hitProvince(wr.x, wr.y);
		const city = hitCity(wr.x, wr.y);
		return {
			dest,
			province,
			city
		};
	};
	const onPointerDown = (e: React.PointerEvent) => {
		pointer0.current = {
			x: e.clientX,
			y: e.clientY
		};
		dragging.current = false;
		pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (pointers.current.size === 2) {
			const pts = [...pointers.current.values()];
			const a = pts[0];
			const b = pts[1];
			if (a && b) pinch0.current = Math.hypot(a.x - b.x, a.y - b.y);
		}
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {
			/* ignore */
		}
	};
	const onPointerMove = (e: React.PointerEvent) => {
		const rect = wrapRef.current?.getBoundingClientRect();
		if (!rect) return;
		if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (pointers.current.size === 2 && pinch0.current) {
			const pts = [...pointers.current.values()];
			const a = pts[0];
			const b = pts[1];
			if (a && b) {
				const dist = Math.hypot(a.x - b.x, a.y - b.y);
				const factor = dist / pinch0.current;
				pinch0.current = dist;
				const sx = (a.x + b.x) / 2 - rect.left;
				const sy = (a.y + b.y) / 2 - rect.top;
				zoomAt(sx, sy, factor);
				scheduleDraw();
			}
			return;
		}
		const start = pointer0.current;
		const zoomed = viewRef.current.scale > fitRef.current.scale * 1.02;
		if (start && e.buttons & 1 && zoomed) {
			const dx = e.clientX - start.x;
			const dy = e.clientY - start.y;
			if (dragging.current || Math.hypot(dx, dy) > 4) {
				dragging.current = true;
				applyView({
					scale: viewRef.current.scale,
					tx: viewRef.current.tx + dx,
					ty: viewRef.current.ty + dy
				});
				pointer0.current = {
					x: e.clientX,
					y: e.clientY
				};
				setCursor("grabbing");
				scheduleDraw();
				return;
			}
		}
		const sx = e.clientX - rect.left;
		const sy = e.clientY - rect.top;
		const result = hit(sx, sy);
		const nextDest = result.dest?.slug ?? null;
		if (hoverDest.current !== nextDest) {
			hoverDest.current = nextDest;
			onHoverDest?.(nextDest);
			scheduleDraw();
		}
		if (hoverCity.current !== (result.city ?? null)) {
			hoverCity.current = result.city ?? null;
			setCityBadge(result.city ?? null);
			scheduleDraw();
		}
		onHoverProvince(result.dest ? result.dest.provinceIndex : result.province >= 0 ? result.province : null);
		setCursor(result.dest || result.province >= 0 ? "pointer" : zoomed ? "grab" : "crosshair");
	};
	const onPointerUp = (e: React.PointerEvent) => {
		pointers.current.delete(e.pointerId);
		pinch0.current = null;
		const rect = wrapRef.current?.getBoundingClientRect();
		const start = pointer0.current;
		const wasDrag = dragging.current;
		pointer0.current = null;
		dragging.current = false;
		if (!rect || !start || wasDrag) return;
		if (Math.hypot(e.clientX - start.x, e.clientY - start.y) > 8) return;
		const result = hit(e.clientX - rect.left, e.clientY - rect.top);
		if (result.dest) {
			onSelectDest(result.dest.slug);
			return;
		}
		if (result.province >= 0) {
			onSelectDest(null);
			onSelectProvince(result.province);
			return;
		}
		onSelectDest(null);
		onSelectProvince(null);
	};
	const onPointerLeave = () => {
		hoverDest.current = null;
		hoverCity.current = null;
		setCityBadge(null);
		onHoverDest?.(null);
		onHoverProvince(null);
	};
	const onDoubleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (focusIndexRef.current != null) {
			exitFocusRef.current();
			return;
		}
		viewRef.current = { ...fitRef.current };
		scheduleDraw();
	};
	const hoverName = cityBadge
		? cityBadge
		: hoverIndex != null
			? shortProvinceName(data.provinces[hoverIndex]?.name ?? "")
			: "";

	return (
		<div
			ref={wrapRef}
			role="application"
			aria-label="中国旅游图幅。点省份进入，点朱砂打开城市，滚轮缩放，点海面返回全国。"
			className={cn("relative h-full min-h-[52svh] w-full touch-none overflow-hidden bg-ink select-none lg:min-h-0")}
			style={{ cursor }}
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={onPointerUp}
			onPointerCancel={onPointerUp}
			onPointerLeave={onPointerLeave}
			onDoubleClick={onDoubleClick}
		>
			<canvas ref={canvasRef} className="block size-full" />
			{hoverName ? (
				<div className="pointer-events-none absolute left-4 top-4 rounded-md bg-ink/80 px-3 py-1.5 text-sm text-paper sm:left-5">
					{hoverName}
				</div>
			) : null}
		</div>
	);
});
