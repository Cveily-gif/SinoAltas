import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as journal } from "./router-CqkcaWL6.mjs";
import { t as SectionKicker } from "./section-kicker-4-DyksyX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal.index-BY8sbejL.js
var import_jsx_runtime = require_jsx_runtime();
function JournalPage() {
	const [lead, ...rest] = journal;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 sm:pt-[4.5rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-ink/8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: "05",
							label: "Journal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl sm:text-5xl",
							children: "手记"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-sm leading-relaxed text-stone",
							children: "比攻略更慢的写法。关于云海、一碗面、一条江，和风把时间吹薄的西部。"
						})
					]
				})
			}),
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/journal/$slug",
				params: { slug: lead.slug },
				className: "group grid border-b border-ink/8 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[18rem] overflow-hidden md:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: lead.image,
						alt: lead.title,
						className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-4 py-10 sm:px-8 md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-[0.22em] uppercase text-stone",
							children: [
								lead.kicker,
								" · ",
								lead.read
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl leading-snug group-hover:text-cinnabar",
							children: lead.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-stone",
							children: lead.excerpt
						})
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2",
				children: rest.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/journal/$slug",
					params: { slug: article.slug },
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: article.image,
								alt: article.title,
								className: "aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs tracking-[0.22em] uppercase text-stone",
							children: [
								article.kicker,
								" · ",
								article.date,
								" · ",
								article.read
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl leading-snug group-hover:text-cinnabar",
							children: article.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-stone",
							children: article.excerpt
						})
					]
				}, article.slug))
			})
		]
	});
}
//#endregion
export { JournalPage as component };
