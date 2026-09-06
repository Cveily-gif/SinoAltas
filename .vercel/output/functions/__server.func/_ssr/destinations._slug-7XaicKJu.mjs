import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-DXxJfoVU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations._slug-7XaicKJu.js
var import_jsx_runtime = require_jsx_runtime();
function DestinationMissing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-svh flex-col items-center justify-center px-6 pt-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl",
			children: "这座山还没有被写下"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-6",
			variant: "ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/destinations",
				children: "返回目的地"
			})
		})]
	});
}
//#endregion
export { DestinationMissing as notFoundComponent };
