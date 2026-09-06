import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn } from "./router-CqkcaWL6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DXxJfoVU.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-[color,background-color,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnabar", {
	variants: {
		variant: {
			primary: "bg-cinnabar text-paper hover:bg-cinnabar-deep",
			ink: "bg-ink text-paper hover:bg-ink-soft",
			paper: "bg-paper text-ink hover:bg-paper-deep",
			ghost: "bg-transparent text-paper hover:bg-paper/10 border border-paper/20",
			outline: "bg-transparent text-ink border border-ink/15 hover:bg-ink/5",
			quiet: "bg-transparent text-ink hover:text-cinnabar"
		},
		size: {
			sm: "h-10 px-3.5 text-sm rounded-md",
			md: "h-11 px-5 text-sm rounded-md",
			lg: "h-12 px-6 text-sm rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
