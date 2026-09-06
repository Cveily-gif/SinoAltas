import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SectionKicker } from "./section-kicker-4-DyksyX.mjs";
import { t as Button } from "./button-DXxJfoVU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-cAWu0AId.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 sm:pt-[4.5rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[50svh] overflow-hidden bg-ink text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/calligraphy.jpg",
					alt: "笔墨",
					className: "absolute inset-0 size-full object-cover opacity-70"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[50svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "00",
						label: "About",
						className: "text-stone-light"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-5xl sm:text-6xl",
						children: "关于华旅纪"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-2xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl leading-snug",
					children: "华旅纪是一份独立编辑的中国旅行志。它不试图穷尽，只认真写下十二处风景。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-stone",
					children: "我们相信旅行的密度来自限制：季节要对，地带要连得上，日程要留出迷路的余地。每一处目的地都附有可走的三日骨架、必看的三处，以及一句不愿被扩音器说完的印象。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-stone",
					children: "行程页会把你点选的地方，按华北、江南、西南、西北、青藏的顺序排开。数据存在这台设备上，不需要账号。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/destinations",
							children: "去看目的地"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journal",
							children: "去读手记"
						})
					})]
				})
			]
		})]
	});
}
//#endregion
export { AboutPage as component };
