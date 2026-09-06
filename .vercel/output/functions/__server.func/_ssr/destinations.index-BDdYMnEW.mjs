import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as Search } from "../_libs/lucide-react.mjs";
import { a as cn, h as seasons, i as Route$3, p as regions, u as destinations } from "./router-CqkcaWL6.mjs";
import { t as SectionKicker } from "./section-kicker-4-DyksyX.mjs";
import { t as DestinationCard } from "./destination-card-C44SzWHc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations.index-BDdYMnEW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DestinationsPage() {
	const { region, season } = Route$3.useSearch();
	const navigate = Route$3.useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return destinations.filter((d) => {
			if (region && d.region !== region) return false;
			if (season && !d.seasons.includes(season)) return false;
			if (!query) return true;
			return d.nameZh.includes(query) || d.nameEn.toLowerCase().includes(query) || d.province.includes(query) || d.tagline.includes(query);
		});
	}, [
		q,
		region,
		season
	]);
	function setRegion(id) {
		navigate({
			search: (prev) => ({
				...prev,
				region: id
			}),
			replace: true
		});
	}
	function setSeason(id) {
		navigate({
			search: (prev) => ({
				...prev,
				season: id
			}),
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 sm:pt-[4.5rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink/8 bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "12",
						label: "Destinations",
						className: "text-stone-light"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl sm:text-5xl",
						children: "目的地"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-stone-light",
						children: "十二处被认真写下的风景。从华北的城墙到青藏的光，按地理、按季节，或按你此刻想起的那个字。"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative block w-full max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "搜索目的地"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone",
								strokeWidth: 1.6
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "搜索名字、省份或一句印象",
								className: "h-12 w-full rounded-lg border border-ink/12 bg-paper pl-10 pr-4 text-sm text-ink placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-stone",
						children: [list.length, " 处风景"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: !region,
						onClick: () => setRegion(void 0),
						label: "全部地带"
					}), regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: region === r.id,
						onClick: () => setRegion(r.id),
						label: r.nameZh
					}, r.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: !season,
						onClick: () => setSeason(void 0),
						label: "全部季节"
					}), seasons.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: season === s.id,
						onClick: () => setSeason(s.id),
						label: s.nameZh
					}, s.id))]
				}),
				list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "py-24 text-center text-stone",
					children: [
						"没有相符的目的地。换一个字，或",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mx-1 text-cinnabar underline-offset-4 hover:underline",
							onClick: () => {
								setQ("");
								navigate({
									search: {},
									replace: true
								});
							},
							children: "清除筛选"
						}),
						"。"
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: list.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DestinationCard, {
						dest: d,
						index: String(i + 1).padStart(2, "0")
					}, d.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-12 text-center text-sm text-stone",
					children: ["想把它们排成一条路？", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/planner",
						className: "ml-1 text-cinnabar",
						children: "去编排行程"
					})]
				})
			]
		})]
	});
}
function FilterChip({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("inline-flex h-10 min-w-11 items-center rounded-full px-4 text-sm transition-colors duration-150", active ? "bg-ink text-paper" : "bg-paper-deep text-ink hover:bg-ink/8"),
		children: label
	});
}
//#endregion
export { DestinationsPage as component };
