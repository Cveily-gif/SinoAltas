import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as ArrowLeft } from "../_libs/lucide-react.mjs";
import { f as getDestination, l as journal, n as Route } from "./router-CqkcaWL6.mjs";
import { t as SaveButton } from "./save-button-D6voWDjD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal._slug-lPhPBu6h.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { article } = Route.useLoaderData();
	const dest = article.destination ? getDestination(article.destination) : void 0;
	const more = journal.filter((a) => a.slug !== article.slug).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pt-16 sm:pt-[4.5rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto max-w-3xl px-4 pb-10 pt-12 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/journal",
						className: "inline-flex min-h-11 items-center gap-2 text-sm text-stone hover:text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-4",
							strokeWidth: 1.6
						}), "手记"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-xs tracking-[0.24em] uppercase text-stone",
						children: [
							article.kicker,
							" · ",
							article.date,
							" · ",
							article.read
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl leading-snug sm:text-5xl",
						children: article.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-relaxed text-stone",
						children: article.excerpt
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: article.image,
					alt: article.title,
					className: "aspect-16/9 w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl px-4 py-12 sm:px-6",
				children: [article.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-6 text-base leading-[1.85]",
					children: p
				}, p.slice(0, 12))), dest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] uppercase text-stone",
						children: "文中的地方"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/destinations/$slug",
						params: { slug: dest.slug },
						className: "mt-1 inline-block font-display text-2xl hover:text-cinnabar",
						children: dest.nameZh
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, { slug: dest.slug })]
				}) : null]
			}),
			more.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "border-t border-ink/8 bg-paper-deep/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2",
					children: more.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/journal/$slug",
						params: { slug: a.slug },
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] uppercase text-stone",
								children: "继续读"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl group-hover:text-cinnabar",
								children: a.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-stone",
								children: a.excerpt
							})
						]
					}, a.slug))
				})
			}) : null
		]
	});
}
//#endregion
export { ArticlePage as component };
