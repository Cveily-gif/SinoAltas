import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as Bookmark } from "../_libs/lucide-react.mjs";
import { a as cn, c as usePlannerHydration, s as usePlanner } from "./router-CqkcaWL6.mjs";
import { t as Button } from "./button-DXxJfoVU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/save-button-D6voWDjD.js
var import_jsx_runtime = require_jsx_runtime();
function SaveButton({ slug, tone = "light" }) {
	const saved = usePlanner((s) => s.saved.includes(slug));
	const toggle = usePlanner((s) => s.toggle);
	const on = usePlannerHydration() && saved;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: tone === "dark" ? "ghost" : "outline",
		size: "sm",
		onClick: () => toggle(slug),
		"aria-pressed": on,
		"aria-label": on ? "移出行程" : "加入行程",
		className: cn("min-w-11", on && "border-cinnabar text-cinnabar"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
			className: "size-4",
			strokeWidth: 1.6,
			fill: on ? "currentColor" : "none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: on ? "已在行程" : "加入行程" })]
	});
}
//#endregion
export { SaveButton as t };
