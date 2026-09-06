import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as ArrowLeft, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { l as journal, m as relatedDestinations, p as regions, r as Route$2 } from "./router-CqkcaWL6.mjs";
import { t as SectionKicker } from "./section-kicker-4-DyksyX.mjs";
import { t as Button } from "./button-DXxJfoVU.mjs";
import { t as DestinationCard } from "./destination-card-C44SzWHc.mjs";
import { t as SaveButton } from "./save-button-D6voWDjD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations._slug-H6YIzZ1M.js
var import_jsx_runtime = require_jsx_runtime();
function DestinationPage() {
	const { dest } = Route$2.useLoaderData();
	const region = regions.find((r) => r.id === dest.region);
	const related = relatedDestinations(dest.slug, 3);
	const article = journal.find((a) => a.destination === dest.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate min-h-[70svh] overflow-hidden bg-ink text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: dest.image,
						alt: `${dest.nameZh} ${dest.nameEn}`,
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/destinations",
								className: "mb-8 inline-flex min-h-11 w-fit items-center gap-2 text-sm text-paper/75 hover:text-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
									className: "size-4",
									strokeWidth: 1.6
								}), "目的地"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-latin text-xs tracking-[0.32em] uppercase text-paper/70",
								children: [
									dest.nameEn,
									" · ",
									dest.province
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-5xl tracking-wide sm:text-6xl md:text-7xl",
								children: dest.nameZh
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl font-display text-xl text-paper/90 sm:text-2xl",
								children: dest.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, {
									slug: dest.slug,
									tone: "dark"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-paper/70",
									children: [
										dest.days,
										" · 强度",
										dest.intensity
									]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: "01",
							label: "Read"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg leading-relaxed text-ink/90",
							children: dest.body
						}),
						article ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-sm text-stone",
							children: ["延伸阅读：", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal/$slug",
								params: { slug: article.slug },
								className: "ml-1 text-cinnabar",
								children: article.title
							})]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "md:col-span-4 md:col-start-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "space-y-5 border-t border-ink/10 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8",
						children: [dest.practical.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-[0.2em] uppercase text-stone",
							children: p.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm leading-relaxed",
							children: p.value
						})] }, p.label)), region ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs tracking-[0.2em] uppercase text-stone",
							children: "地带"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/destinations",
								search: { region: dest.region },
								className: "text-cinnabar",
								children: region.nameZh
							})
						})] }) : null]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-ink/8 bg-paper-deep/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
							index: "02",
							label: "Highlights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl",
							children: "三处必看"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-8 md:grid-cols-3",
							children: dest.highlights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-ink/10 pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-latin text-xs tabular-nums text-cinnabar",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-xl",
										children: h.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-stone",
										children: h.text
									})
								]
							}, h.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "03",
						label: "Itinerary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl",
						children: "可以这样走"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 divide-y divide-ink/10 border-y border-ink/10",
						children: dest.itinerary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-3 py-8 md:grid-cols-12 md:items-baseline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm tracking-wide text-cinnabar md:col-span-2",
								children: item.day
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-2xl text-sm leading-relaxed text-stone",
									children: item.text
								})]
							})]
						}, item.day))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, { slug: dest.slug }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/planner",
								children: ["去编排行程", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink py-16 text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "顺路还可以去"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-3 md:grid-cols-3",
						children: related.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DestinationCard, {
							dest: d,
							size: "compact"
						}, d.slug))
					})]
				})
			})
		]
	});
}
//#endregion
export { DestinationPage as component };
