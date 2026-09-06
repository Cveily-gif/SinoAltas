import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as cn } from "./router-CqkcaWL6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destination-card-C44SzWHc.js
var import_jsx_runtime = require_jsx_runtime();
function DestinationCard({ dest, index, size = "regular" }) {
	const tall = size === "feature";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/destinations/$slug",
		params: { slug: dest.slug },
		className: cn("group relative block overflow-hidden bg-ink text-paper", tall ? "min-h-[28rem] md:min-h-[36rem]" : "min-h-[22rem]", size === "compact" && "min-h-[18rem]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: dest.image,
				alt: `${dest.nameZh} ${dest.nameEn}`,
				className: "absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 text-[11px] tracking-[0.22em] uppercase text-paper/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-latin",
							children: dest.nameEn
						}), index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-latin tabular-nums",
							children: index
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: cn("font-display tracking-wide", tall ? "text-3xl sm:text-4xl" : "text-2xl"),
						children: dest.nameZh
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-sm leading-relaxed text-paper/80",
						children: dest.tagline
					})
				]
			})
		]
	});
}
//#endregion
export { DestinationCard as t };
