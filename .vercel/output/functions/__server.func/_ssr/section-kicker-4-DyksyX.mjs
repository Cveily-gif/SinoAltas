import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as cn } from "./router-CqkcaWL6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-kicker-4-DyksyX.js
var import_jsx_runtime = require_jsx_runtime();
function SectionKicker({ index, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-stone", className),
		children: [index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-latin tabular-nums text-cinnabar",
			children: index
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-sans",
			children: label
		})]
	});
}
//#endregion
export { SectionKicker as t };
