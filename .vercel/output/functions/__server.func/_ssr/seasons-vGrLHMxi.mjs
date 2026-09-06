import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as destinationsBySeason, h as seasons } from "./router-CqkcaWL6.mjs";
import { t as SectionKicker } from "./section-kicker-4-DyksyX.mjs";
import { t as DestinationCard } from "./destination-card-C44SzWHc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seasons-vGrLHMxi.js
var import_jsx_runtime = require_jsx_runtime();
function SeasonsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 sm:pt-[4.5rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink/8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "04",
						label: "Seasons"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl sm:text-5xl",
						children: "四季"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-stone",
						children: "中国太大，不能用同一个月份去走。春天把江南写湿，秋天把西部写亮。"
					})
				]
			})
		}), seasons.map((s, i) => {
			const list = destinationsBySeason(s.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: s.id,
				className: "scroll-mt-20 border-b border-ink/8 last:border-b-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-latin text-xs tracking-[0.28em] uppercase text-stone",
								children: [
									String(i + 1).padStart(2, "0"),
									" / ",
									s.nameEn
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-5xl",
								children: s.nameZh
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-cinnabar",
								children: s.months
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-stone",
								children: s.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/destinations",
								search: { season: s.id },
								className: "mt-6 inline-flex min-h-11 items-center text-sm text-cinnabar",
								children: "只看这一季"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2 md:col-span-8",
						children: list.slice(0, 4).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DestinationCard, {
							dest: d,
							size: "compact"
						}, d.slug))
					})]
				})
			}, s.id);
		})]
	});
}
//#endregion
export { SeasonsPage as component };
