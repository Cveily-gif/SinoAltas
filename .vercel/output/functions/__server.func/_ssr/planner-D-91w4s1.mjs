import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as Bookmark, r as Trash2 } from "../_libs/lucide-react.mjs";
import { a as cn, c as usePlannerHydration, f as getDestination, o as composeItinerary, s as usePlanner, u as destinations } from "./router-CqkcaWL6.mjs";
import { t as SectionKicker } from "./section-kicker-4-DyksyX.mjs";
import { t as Button } from "./button-DXxJfoVU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planner-D-91w4s1.js
var import_jsx_runtime = require_jsx_runtime();
var DAY_OPTIONS = [
	5,
	7,
	10,
	14
];
function PlannerPage() {
	const saved = usePlanner((s) => s.saved);
	const days = usePlanner((s) => s.days);
	const notes = usePlanner((s) => s.notes);
	const toggle = usePlanner((s) => s.toggle);
	const setDays = usePlanner((s) => s.setDays);
	const setNotes = usePlanner((s) => s.setNotes);
	const clear = usePlanner((s) => s.clear);
	const ready = usePlannerHydration();
	const picked = (ready ? saved : []).map((slug) => getDestination(slug)).filter((d) => Boolean(d));
	const plan = composeItinerary(ready ? saved : [], days);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-16 sm:pt-[4.5rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink/8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
						index: "07",
						label: "Trip"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl sm:text-5xl",
						children: "行程"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-stone",
						children: "点选想去的地方，选择天数。日程按华北、江南、西南、西北、青藏的地理顺序排开，跨地带会插入一天转场。"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "选目的地"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-stone",
						children: [
							"已选 ",
							picked.length,
							" 处。建议一次不超过四站。"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: destinations.map((d) => {
							const on = ready && saved.includes(d.slug);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggle(d.slug),
								"aria-pressed": on,
								className: cn("flex min-h-16 w-full items-center gap-3 rounded-lg p-2 text-left transition-colors duration-150", on ? "bg-ink text-paper" : "bg-paper-deep hover:bg-ink/5"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: d.image,
										alt: "",
										className: "size-14 shrink-0 rounded-md object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-display text-lg leading-tight",
											children: d.nameZh
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: cn("block text-xs", on ? "text-paper/70" : "text-stone"),
											children: [
												d.province,
												" · ",
												d.days
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
										className: "mr-2 size-4 shrink-0",
										strokeWidth: 1.6,
										fill: on ? "currentColor" : "none"
									})
								]
							}) }, d.slug);
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-paper-deep p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "日程"
							}), saved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "quiet",
								size: "sm",
								onClick: clear,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
									className: "size-4",
									strokeWidth: 1.6
								}), "清空"]
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xs tracking-[0.2em] uppercase text-stone",
							children: "天数"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: DAY_OPTIONS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setDays(n),
								className: cn("inline-flex h-10 min-w-11 items-center justify-center rounded-full px-4 text-sm tabular-nums", days === n ? "bg-cinnabar text-paper" : "bg-paper text-ink hover:bg-ink/5"),
								children: [n, " 日"]
							}, n))
						}),
						plan.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-sm leading-relaxed text-stone",
							children: [
								"还没有目的地。从左侧点选，或先去",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/destinations",
									className: "mx-1 text-cinnabar",
									children: "目的地"
								}),
								"里加入。"
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 space-y-4",
							children: plan.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[3rem_1fr] gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-latin text-sm tabular-nums text-cinnabar",
									children: ["D", p.day]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg leading-tight",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-stone",
										children: p.transit ? "转场" : p.nameZh
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-ink/80",
										children: p.note
									})
								] })]
							}, `${p.day}-${p.slug}-${p.title}`))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-8 block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-[0.2em] uppercase text-stone",
								children: "给自己的备注"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: notes,
								onChange: (e) => setNotes(e.target.value),
								rows: 4,
								placeholder: "想吃的面、必须看的日出、需要预留的预约……",
								className: "mt-2 w-full rounded-lg border border-ink/10 bg-paper p-3 text-sm leading-relaxed placeholder:text-stone focus:outline-2 focus:outline-offset-2 focus:outline-cinnabar"
							})]
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { PlannerPage as component };
