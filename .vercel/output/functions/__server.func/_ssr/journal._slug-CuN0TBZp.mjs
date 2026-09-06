import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-DXxJfoVU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal._slug-CuN0TBZp.js
var import_jsx_runtime = require_jsx_runtime();
function Missing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-svh flex-col items-center justify-center px-6 pt-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl",
			children: "这篇手记还没有写完"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			variant: "ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/journal",
				children: "返回手记"
			})
		})]
	});
}
//#endregion
export { Missing as notFoundComponent };
