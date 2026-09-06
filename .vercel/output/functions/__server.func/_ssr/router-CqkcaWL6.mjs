import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as notFound, _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Menu, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as string, i as object, n as literal, o as union, r as number, t as _enum } from "../_libs/zod.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations-DFfK8J0A.js
var destinations = [
	{
		slug: "zhangjiajie",
		nameZh: "张家界",
		nameEn: "Zhangjiajie",
		province: "湖南",
		region: "southwest",
		seasons: ["spring", "autumn"],
		days: "3–4 日",
		intensity: "中",
		featured: true,
		tagline: "石峰从云里长出来",
		excerpt: "三千石英砂岩柱，被雾气反复擦亮。张家界不是为了被走完，而是为了被仰望。",
		body: "武陵源的石峰并非突然出现在电影里。它们在湘西的雨里站了三亿年，薄膜一样的云从柱间穿过，把人的尺度轻轻拆掉。袁家界的观景台、杨家界的天波府、金鞭溪的谷底——同一座山，三种高度。去张家界，最好把日程写松一点：云海来不来，由山自己决定。",
		image: "/images/zhangjiajie.jpg",
		highlights: [
			{
				title: "袁家界 · 阿凡达取景",
				text: "南天一柱与乾坤柱在云海中轮流出场，是这座山最被传颂的面孔。"
			},
			{
				title: "金鞭溪",
				text: "谷底的溪流把石峰从根部读一遍，适合把脚步放慢到水的速度。"
			},
			{
				title: "天子山",
				text: "黄昏时石峰被侧光切开，像一排沉默的兵。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "武陵源 · 上山",
				text: "入园乘百龙电梯或索道上袁家界，沿石栈道走完迷魂台与战豆台，把云海留给偶然。"
			},
			{
				day: "第二日",
				title: "金鞭溪与十里画廊",
				text: "从水绕四门沿溪下行，午后转十里画廊观峰林侧影，傍晚回武陵源市区。"
			},
			{
				day: "第三日",
				title: "天门山（可选）",
				text: "若体力尚余，去天门山玻璃栈道与天门洞。否则把上午留给索溪峪的安静。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "四月雾薄，九至十一月色层最干净"
			},
			{
				label: "如何抵达",
				value: "张家界荷花机场，或高铁至张家界西"
			},
			{
				label: "建议停留",
				value: "武陵源三天，天门山另加一天"
			},
			{
				label: "节奏",
				value: "索道与电梯可省力，栈道仍需稳妥的鞋"
			}
		]
	},
	{
		slug: "guilin",
		nameZh: "桂林阳朔",
		nameEn: "Guilin",
		province: "广西",
		region: "southwest",
		seasons: [
			"spring",
			"autumn",
			"winter"
		],
		days: "3–5 日",
		intensity: "轻",
		featured: true,
		tagline: "水把山写成倒影",
		excerpt: "漓江并不是一条河，是一条被喀斯特反复折叠的镜子。竹筏比游轮更接近它的脾气。",
		body: "从桂林到阳朔，山峰像一排被水磨过的印章。二十元人民币背面的黄布倒影仍在，但真正动人的是兴坪到杨堤那段不被扩音器打扰的江面。阳朔的西街早已喧闹，可骑行十里之外的遇龙河，还能听见水牛把蹄子放进浅滩的声音。",
		image: "/images/guilin.jpg",
		highlights: [
			{
				title: "漓江竹筏",
				text: "杨堤至兴坪一段，山从水里长出来，又被水轻轻托住。"
			},
			{
				title: "遇龙河骑行",
				text: "沿田埂骑向旧县，稻田、桥、水牛，构成最日常的风景。"
			},
			{
				title: "兴坪古镇",
				text: "游轮停靠之外的巷子里，豆浆与石板还按自己的钟点走。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "桂林入城",
				text: "象鼻山与东巷作开场，晚上把身体交给漓江边的夜色，不必赶两江四湖。"
			},
			{
				day: "第二日",
				title: "漓江下行",
				text: "上午竹筏或游轮至阳朔，下午在西街外围找一处能看见山的客栈。"
			},
			{
				day: "第三日",
				title: "遇龙河",
				text: "租自行车沿河骑行，在遇龙桥或旧县停下吃一碗米粉，傍晚看山变墨色。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "三至五月新绿，十至十一月江水清"
			},
			{
				label: "如何抵达",
				value: "桂林两江国际机场 / 桂林站，阳朔有高铁"
			},
			{
				label: "建议停留",
				value: "桂林一夜，阳朔两至三夜"
			},
			{
				label: "节奏",
				value: "避开西街核心区的夜，风景就回来了"
			}
		]
	},
	{
		slug: "huangshan",
		nameZh: "黄山",
		nameEn: "Huangshan",
		province: "安徽",
		region: "jiangnan",
		seasons: [
			"spring",
			"autumn",
			"winter"
		],
		days: "2–3 日",
		intensity: "深",
		featured: true,
		tagline: "云海之上，松还在守着",
		excerpt: "迎客松被拍过无数次。真正的黄山，是夜里被冻醒、清晨推开窗看见整座山浮在云上。",
		body: "黄山把中国山水画的全部词汇放在一座山上：奇松、怪石、云海、温泉、冬雪。过夜是必要的。只有住在北海或白鹅岭，才能赶在游客索道开动之前，看见光明顶被第一线日出切开。下山后，把脚步交给屯溪老街和呈坎，山的余温会在徽州的木雕里再停留一夜。",
		image: "/images/huangshan.jpg",
		highlights: [
			{
				title: "北海日出",
				text: "清凉台是经典机位，但任何一处朝东的石沿，都可能成为你的。"
			},
			{
				title: "西海大峡谷",
				text: "向下走入峰林内部，黄山从明信片变成可以呼吸的地质。"
			},
			{
				title: "徽州余韵",
				text: "呈坎、宏村或屯溪，把山的垂直换成民居的水平。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "上山过夜",
				text: "云谷寺索道至白鹅岭，沿途经始信峰至北海住宿，黄昏走一圈西海栈道。"
			},
			{
				day: "第二日",
				title: "日出与下山",
				text: "黎明看日出，午前走西海大峡谷，下午索道下山，夜宿屯溪。"
			},
			{
				day: "第三日",
				title: "徽州",
				text: "呈坎或宏村半日，把马头墙当作黄山的注脚。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "十月色层最稳，冬季雪后需冰爪"
			},
			{
				label: "如何抵达",
				value: "黄山屯溪机场 / 黄山北站，转景区班车"
			},
			{
				label: "建议停留",
				value: "山上务必一夜，山下再留一夜"
			},
			{
				label: "节奏",
				value: "住宿需提前，旺季步道拥挤，日出值得早起"
			}
		]
	},
	{
		slug: "hangzhou",
		nameZh: "杭州西湖",
		nameEn: "West Lake",
		province: "浙江",
		region: "jiangnan",
		seasons: ["spring", "autumn"],
		days: "2–3 日",
		intensity: "轻",
		tagline: "一湖被写了千年",
		excerpt: "断桥、苏堤、雷峰塔——名字已经太熟。清晨七点的湖面，仍能把熟识的句子重新写湿。",
		body: "西湖的困难不在于找不到风景，而在于如何把风景从拥挤里捞出来。答案几乎总是同一个：去得早。白堤还没有被打开，柳丝贴着水，保俶塔只是一个淡墨点。龙井的茶室在山里，灵隐的香在谷中。杭州把宋的审美活成了可以散步的市政公园，这本身就是一种文明的自信。",
		image: "/images/hangzhou.jpg",
		highlights: [
			{
				title: "苏堤春晓",
				text: "六座桥把湖分成可以慢慢读的句子，清晨没有扩音器。"
			},
			{
				title: "龙井问茶",
				text: "狮峰一带的茶园在清明前后最嫩，坐下来比买茶更重要。"
			},
			{
				title: "杨公堤西线",
				text: "游客较少的一面，茅家埠与浴鹄湾还保留着湖的呼吸。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "环湖",
				text: "清晨白堤至断桥，沿苏堤向南，午后翻到杨公堤，傍晚在湖滨看灯慢慢亮。"
			},
			{
				day: "第二日",
				title: "山与茶",
				text: "上午灵隐与飞来峰，下午龙井村，把一盏茶喝到见杯底。"
			},
			{
				day: "第三日",
				title: "城里",
				text: "南宋御街或中国美院象山，作为西湖之外的另一种杭州。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "三月至四月，或十月桂花时节"
			},
			{
				label: "如何抵达",
				value: "杭州东站 / 萧山机场，地铁至龙翔桥"
			},
			{
				label: "建议停留",
				value: "两日够湖，三日才有茶与寺"
			},
			{
				label: "节奏",
				value: "七点前出门，把拥挤留给别人"
			}
		]
	},
	{
		slug: "forbidden-city",
		nameZh: "紫禁城",
		nameEn: "Forbidden City",
		province: "北京",
		region: "north",
		seasons: [
			"autumn",
			"winter",
			"spring"
		],
		days: "1–2 日",
		intensity: "中",
		featured: true,
		tagline: "中轴线把时间摆正",
		excerpt: "九千间房屋，一条看不见的线。走进午门，声音先被院子吞掉，然后才是屋顶的金。",
		body: "故宫不是一张可以拍完的明信片。它是一套关于权力、礼仪与季节的空间语法：前朝的开阔，后廷的紧凑，御花园忽然变得像人。东华门一侧的文物馆把器物从墙上放回手里。冬天初雪时，朱红与白最干净；秋天的琉璃瓦会把整座城映成一种克制的暖。出神武门，景山正好把这条中轴线收成一幅。",
		image: "/images/forbidden-city.jpg",
		highlights: [
			{
				title: "中轴线",
				text: "午门、太和门、太和殿，空间一次次被放大，人一次次被缩小。"
			},
			{
				title: "珍宝馆与钟表馆",
				text: "东西两路比中路安静，器物比宫殿更接近日常的帝国。"
			},
			{
				title: "景山俯瞰",
				text: "出北门即上山，是理解整座城布局的唯一高度。"
			}
		],
		itinerary: [{
			day: "第一日",
			title: "故宫全日",
			text: "早场入园走中路，午后转东路珍宝馆，出神武门上景山看黄昏。"
		}, {
			day: "第二日",
			title: "皇城外围",
			text: "天安门、太庙或北海，把故宫放回一座活着的北京。"
		}],
		practical: [
			{
				label: "最佳季节",
				value: "十月至十一月，或雪后的清晨"
			},
			{
				label: "如何抵达",
				value: "地铁天安门东 / 天安门西，需预约门票"
			},
			{
				label: "建议停留",
				value: "闭园前四小时仍嫌不够"
			},
			{
				label: "节奏",
				value: "周中早场，少在太和殿广场停留过久"
			}
		]
	},
	{
		slug: "great-wall",
		nameZh: "长城",
		nameEn: "Great Wall",
		province: "北京",
		region: "north",
		seasons: [
			"autumn",
			"winter",
			"spring"
		],
		days: "1 日",
		intensity: "中",
		featured: true,
		tagline: "墙在山脊上呼吸",
		excerpt: "长城不是一道墙，是一条随着山势思考的线。去金山岭或慕田峪，把八达岭留给明信片。",
		body: "从北京出发，长城有许多入口。八达岭最便利，也最拥挤。金山岭把墙写成可以走路的书法：敌楼的节奏、包砖的起伏、山谷里的风。秋天，山变成铜与铁锈；冬天，墙成为一条白线。走长城需要的不是征服，而是承认：这条线比任何王朝都更耐心。",
		image: "/images/great-wall.jpg",
		highlights: [
			{
				title: "金山岭",
				text: "摄影者的长城，敌楼密集，秋色与墙体互相成就。"
			},
			{
				title: "慕田峪",
				text: "索道完善，适合不想把一天交给交通的人，仍能看见真的山。"
			},
			{
				title: "司马台（可选）",
				text: "更陡，更安静，夜场灯光是另一种长城。"
			}
		],
		itinerary: [{
			day: "一日",
			title: "金山岭往返",
			text: "清晨出城，走西五眼至东五眼中最美的一段，下午返回北京，把腿交给晚饭。"
		}],
		practical: [
			{
				label: "最佳季节",
				value: "十月红叶，或雪后工作日"
			},
			{
				label: "如何抵达",
				value: "旅游专线或包车，自驾需早出"
			},
			{
				label: "建议停留",
				value: "一天足够，不必两段都走"
			},
			{
				label: "节奏",
				value: "徒步段选好退路，风大时加一层"
			}
		]
	},
	{
		slug: "jiuzhaigou",
		nameZh: "九寨沟",
		nameEn: "Jiuzhaigou",
		province: "四川",
		region: "southwest",
		seasons: ["autumn"],
		days: "2–3 日",
		intensity: "中",
		tagline: "水比天空更蓝",
		excerpt: "五花海把树干沉在玻璃下面。秋天的九寨不是风景，是一次关于颜色的教育。",
		body: "藏族村寨、钙化湖、彩林——九寨沟把三种本来不该如此靠近的东西叠在一起。五花海、五彩池、诺日朗瀑布是被说得最多的名字，但真正让人停住的是水的透明度：它让湖底的木头成为画的一部分。去九寨要服从季节。十月中下旬的彩林值得为此改机票。",
		image: "/images/jiuzhaigou.jpg",
		highlights: [
			{
				title: "五花海",
				text: "湖水把森林画进自己身体里，是九寨最不容错过的一处。"
			},
			{
				title: "长海与五彩池",
				text: "沟的尽端，长海沉静，五彩池小而饱和。"
			},
			{
				title: "诺日朗",
				text: "瀑布的宽度比高度更惊人，像一封被展开的白色信。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "入沟",
				text: "早班车进沟，先走则查洼沟至长海，折返五彩池，下午看诺日朗。"
			},
			{
				day: "第二日",
				title: "日则沟",
				text: "五花海、珍珠滩、熊猫海一线，把最饱和的颜色留给光线最好的午前。"
			},
			{
				day: "第三日",
				title: "黄龙或返程",
				text: "若体力允许，去黄龙看钙化彩池；否则把上午留给沟口的藏寨。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "十月中下旬彩林，需提前预约"
			},
			{
				label: "如何抵达",
				value: "九寨黄龙机场，或成都大巴 / 高铁转车"
			},
			{
				label: "建议停留",
				value: "沟内两日，勿一日走完"
			},
			{
				label: "节奏",
				value: "高原走得慢，防晒与水比装备清单更重要"
			}
		]
	},
	{
		slug: "lijiang",
		nameZh: "丽江",
		nameEn: "Lijiang",
		province: "云南",
		region: "southwest",
		seasons: [
			"spring",
			"autumn",
			"winter"
		],
		days: "3–4 日",
		intensity: "轻",
		tagline: "玉龙在城的尽头",
		excerpt: "古城的灯已经太亮。可黎明的石板路、纳西的井、远处那座不化的雪山，仍是原来的丽江。",
		body: "丽江被写过、被唱过、被通宵过。要看见它，需要换一个钟点：早上七点的四方街里，水流还走在游客前面。束河比大研安静一寸。白沙的壁画把纳西的宇宙画在墙上。玉龙雪山不必登顶，在蓝月谷或云杉坪，山已经把规模说清楚了。晚上若不想被酒吧吞掉，去看一场纳西古乐——它比灯更接近这座城的骨头。",
		image: "/images/lijiang.jpg",
		highlights: [
			{
				title: "黎明大研",
				text: "在四方街被打开之前走进去，水与石还按自己的时间走。"
			},
			{
				title: "玉龙雪山",
				text: "蓝月谷的水是雪山的注脚，云杉坪把山放到可以平视的距离。"
			},
			{
				title: "白沙古镇",
				text: "壁画与田野，丽江还没有被写成夜生活之前的样子。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "大研与束河",
				text: "午后到，黄昏在大研迷路一次，夜里改去束河睡觉。"
			},
			{
				day: "第二日",
				title: "雪山",
				text: "蓝月谷或云杉坪，量力索道。高原反应比风景更需要被尊重。"
			},
			{
				day: "第三日",
				title: "白沙",
				text: "壁画、田野、一顿纳西午饭，把丽江从夜色里赎回来。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "三至五月，或九至十一月"
			},
			{
				label: "如何抵达",
				value: "丽江三义机场 / 丽江站"
			},
			{
				label: "建议停留",
				value: "三夜起，雪山单独一天"
			},
			{
				label: "节奏",
				value: "缓进高原，酒和昼夜颠倒都不是朋友"
			}
		]
	},
	{
		slug: "lhasa",
		nameZh: "拉萨",
		nameEn: "Lhasa",
		province: "西藏",
		region: "plateau",
		seasons: ["summer", "autumn"],
		days: "4–6 日",
		intensity: "深",
		featured: true,
		tagline: "海拔把心声放慢",
		excerpt: "布达拉宫不是一座宫殿，是一座被信仰举起来的山。在拉萨，先学会走得慢。",
		body: "拉萨的光比内地更硬，影子更短，转经的人把八廓街走成一条河。布达拉宫需要预约，也需要氧气一样的耐心：红宫、白宫、金顶，层层把人从尘世里抽离。大昭寺的觉沃佛前，酥油灯把时间熬成一种气味。去拉萨不是打卡，是把自己交给高原——第一天只散步，第二天再进宫，第三天去色拉寺看辩经。山南与纳木错都在不远处，但拉萨本身已经足够。",
		image: "/images/lhasa.jpg",
		highlights: [
			{
				title: "布达拉宫",
				text: "必须预约。红宫的灵塔殿是整座建筑的心脏。"
			},
			{
				title: "八廓与大昭寺",
				text: "顺时针走，让转经筒和脚步成为同一件事。"
			},
			{
				title: "色拉寺辩经",
				text: "下午的辩经场，掌声与佛理同时落下。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "适应",
				text: "只在八廓街慢走，喝水，早睡。不要安排布达拉。"
			},
			{
				day: "第二日",
				title: "布达拉宫",
				text: "午前入宫，下午在公园里看它的侧面被光慢慢移动。"
			},
			{
				day: "第三日",
				title: "大昭寺与色拉",
				text: "清晨大昭寺，下午色拉寺辩经，晚上把海拔交给睡眠。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "五至十月，日照长、路况稳"
			},
			{
				label: "如何抵达",
				value: "拉萨贡嘎机场，或青藏 / 川藏铁路"
			},
			{
				label: "建议停留",
				value: "至少四夜，勿第一天进宫"
			},
			{
				label: "节奏",
				value: "缓进缓出，防晒、保湿、不饮酒"
			}
		]
	},
	{
		slug: "xian",
		nameZh: "西安",
		nameEn: "Xi'an",
		province: "陕西",
		region: "northwest",
		seasons: ["spring", "autumn"],
		days: "2–4 日",
		intensity: "中",
		tagline: "地下还有一支军队",
		excerpt: "兵马俑只是开始。西安把周秦汉唐叠在同一张城墙上，而面要配一碗羊肉。",
		body: "临潼的俑坑把两千年前的军阵留在原位。一号坑的冲击力仍无法被照片代替：每一张脸都不重复。回到城里，明城墙是可以骑行的时间环，碑林把书法变成一座森林，回民街之外的永兴坊或老菜场更接近西安人的胃。大雁塔与大明宫则提醒你：这座城曾经是世界的首都，而现在它只是把那份气度，做成一碗加了蒜水的羊肉泡馍。",
		image: "/images/xian.jpg",
		highlights: [
			{
				title: "兵马俑",
				text: "一号坑全日，二号坑的彩绘跪射俑是容易被忽略的细节。"
			},
			{
				title: "城墙骑行",
				text: "永宁门上墙，顺时针或逆时针，把西安看成一个完整的方。"
			},
			{
				title: "碑林",
				text: "石上的字比博物馆的说明更接近长安的精神。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "俑坑",
				text: "早班车临潼，一号二号三号坑与铜车马，下午回城吃一碗泡馍。"
			},
			{
				day: "第二日",
				title: "城内",
				text: "碑林午前，城墙骑行黄昏，夜里避开最闹的回民街主路。"
			},
			{
				day: "第三日",
				title: "唐的影子",
				text: "大雁塔与陕西历史博物馆，把兵马俑放回更长的时间里。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "四至五月，或九至十月"
			},
			{
				label: "如何抵达",
				value: "西安咸阳机场 / 西安北站"
			},
			{
				label: "建议停留",
				value: "两日核心，三日才从容"
			},
			{
				label: "节奏",
				value: "俑坑单独一天，勿与城墙挤在上午"
			}
		]
	},
	{
		slug: "suzhou",
		nameZh: "苏州",
		nameEn: "Suzhou",
		province: "江苏",
		region: "jiangnan",
		seasons: ["spring", "autumn"],
		days: "2–3 日",
		intensity: "轻",
		tagline: "园是缩小的宇宙",
		excerpt: "拙政园把一座山放进一亩池塘。苏州的园林不是风景，是可以走进去的哲学。",
		body: "江南的园林是一种以小见大的技术：漏窗、廊、桥、石，把视线一次次折返。拙政园最开阔，留园最精巧，网师园在夜晚有时会把评弹放进水里。平江路的河道比狮子林的假山更接近苏州人的日常。若还有一日，去周庄或同里并不是必须——苏州城里，已经有足够的水。",
		image: "/images/suzhou.jpg",
		highlights: [
			{
				title: "拙政园",
				text: "春日杜鹃与荷，是园林里最接近山水画的一处。"
			},
			{
				title: "网师园",
				text: "小而完整，夜园若开放，灯把廊柱写成另一种园。"
			},
			{
				title: "平江路",
				text: "住进河道边的旅馆，早晨听船从窗下过去。"
			}
		],
		itinerary: [{
			day: "第一日",
			title: "园",
			text: "拙政园与狮子林在同一带，午后平江路喝茶，把园从拥挤里救出来。"
		}, {
			day: "第二日",
			title: "另一种园",
			text: "留园或沧浪亭，傍晚去博物馆看吴门的画如何与园互相解释。"
		}],
		practical: [
			{
				label: "最佳季节",
				value: "三月至四月，或十月"
			},
			{
				label: "如何抵达",
				value: "苏州站 / 苏州北，上海虹桥约半小时"
			},
			{
				label: "建议停留",
				value: "两日看园，三日把水也走完"
			},
			{
				label: "节奏",
				value: "开园即入，十点后的拙政园是另一种体验"
			}
		]
	},
	{
		slug: "dunhuang",
		nameZh: "敦煌",
		nameEn: "Dunhuang",
		province: "甘肃",
		region: "northwest",
		seasons: ["spring", "autumn"],
		days: "2–3 日",
		intensity: "中",
		tagline: "风把时间吹薄了",
		excerpt: "莫高窟把颜色藏在崖壁里。鸣沙山把太阳放得很低。敦煌是丝绸之路还活着的一段。",
		body: "去敦煌，先预约莫高窟。数字展示中心把洞窟讲清楚，再到实地看那几座被分配到的窟——飞天、莲花、被风吹淡的颜料。鸣沙山的月牙泉是地理上的奇迹：沙没有把水填掉。夜里的星比内地更密。若有余力，去雅丹看地质把大地写成另一种文字。敦煌让人意识到：中国的西部不是边缘，是文明曾经走过的路。",
		image: "/images/dunhuang.jpg",
		highlights: [
			{
				title: "莫高窟",
				text: "必须预约。数字馆与实体窟是一套完整的观看。"
			},
			{
				title: "鸣沙山 · 月牙泉",
				text: "黄昏最美。沙丘的脊线会把人变成一个很小的点。"
			},
			{
				title: "夜空",
				text: "远离城区的戈壁，银河有时会老实出现。"
			}
		],
		itinerary: [
			{
				day: "第一日",
				title: "莫高窟",
				text: "按预约时段参观，下午在市区博物馆把没看完的脉络补上。"
			},
			{
				day: "第二日",
				title: "沙与泉",
				text: "午后进鸣沙山，留下看日落，夜里若天气好，找一处能看见星的空地。"
			},
			{
				day: "第三日",
				title: "雅丹（可选）",
				text: "西线雅丹地质公园，把敦煌从洞窟扩展成一整片大地。"
			}
		],
		practical: [
			{
				label: "最佳季节",
				value: "四至六月，或九至十月，避开盛夏"
			},
			{
				label: "如何抵达",
				value: "敦煌机场 / 柳园站转车"
			},
			{
				label: "建议停留",
				value: "两夜核心，三夜从容"
			},
			{
				label: "节奏",
				value: "洞窟预约是硬门槛，沙山要防晒与防沙"
			}
		]
	}
];
var regions = [
	{
		id: "north",
		nameZh: "华北",
		nameEn: "North",
		blurb: "城墙、宫殿、一条还在呼吸的边防。"
	},
	{
		id: "jiangnan",
		nameZh: "江南",
		nameEn: "Jiangnan",
		blurb: "湖、园、山。被写得最多，仍能被重新走湿。"
	},
	{
		id: "southwest",
		nameZh: "西南",
		nameEn: "Southwest",
		blurb: "喀斯特、彩林、古城。地形在这里把人的尺度拆掉。"
	},
	{
		id: "northwest",
		nameZh: "西北",
		nameEn: "Northwest",
		blurb: "俑坑与洞窟。丝绸之路还没有走完。"
	},
	{
		id: "plateau",
		nameZh: "青藏",
		nameEn: "Plateau",
		blurb: "光更硬，脚步必须更慢。"
	}
];
var seasons = [
	{
		id: "spring",
		nameZh: "春",
		nameEn: "Spring",
		months: "三 — 五 月",
		blurb: "西湖的柳、苏州的杜鹃、桂林的新绿。江南在这一季把自己写得最满。",
		image: "/images/hangzhou.jpg"
	},
	{
		id: "summer",
		nameZh: "夏",
		nameEn: "Summer",
		months: "六 — 八 月",
		blurb: "高原的窗口打开。拉萨的光最稳，丽江的山还没有被雨季完全打湿。",
		image: "/images/lhasa.jpg"
	},
	{
		id: "autumn",
		nameZh: "秋",
		nameEn: "Autumn",
		months: "九 — 十一 月",
		blurb: "九寨的彩林、黄山的云、长城的铜。这是中国风景最慷慨的三个月。",
		image: "/images/jiuzhaigou.jpg"
	},
	{
		id: "winter",
		nameZh: "冬",
		nameEn: "Winter",
		months: "十二 — 二 月",
		blurb: "故宫初雪，敦煌空旷。人少下来，城与沙都露出骨头。",
		image: "/images/forbidden-city.jpg"
	}
];
function getDestination(slug) {
	return destinations.find((d) => d.slug === slug);
}
function destinationsBySeason(id) {
	return destinations.filter((d) => d.seasons.includes(id));
}
function relatedDestinations(slug, n = 3) {
	const current = getDestination(slug);
	if (!current) return destinations.slice(0, n);
	const same = destinations.filter((d) => d.slug !== slug && d.region === current.region);
	const rest = destinations.filter((d) => d.slug !== slug && d.region !== current.region);
	return [...same, ...rest].slice(0, n);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/journal-C4EZO_Gb.js
var journal = [
	{
		slug: "huangshan-hours",
		title: "云海之前：黄山的四个时辰",
		kicker: "手记",
		date: "十月",
		read: "8 分钟",
		image: "/images/huangshan.jpg",
		destination: "huangshan",
		excerpt: "过夜的人，才能看见这座山如何把自己从墨色里慢慢洗出来。",
		paragraphs: [
			"索道在四点十分停运。山上的旅馆把热水限制在一个暖壶里，走廊里都是提前调好闹钟的呼吸。黄山的夜不是为了睡，是为了把人从白日的拥挤里拿出来，交给一种更古老的等待。",
			"四点四十分，清凉台已经有人。头灯像一条断断续续的河。云还在谷里睡着，光明顶只是一块更黑的剪影。有人开始架三脚架，有人把手套咬在嘴里。没有人说话。山不允许这个时候被解释。",
			"日出并不是一个瞬间。它是一条从铅到铜、从铜到薄金的变化。松先被照亮，然后是石，然后是你自己的手。云海若来，整座山会变成群岛；若不来，你仍会记得风如何把衣领翻开。",
			"下山的路把高度还给膝盖。屯溪的老街在黄昏时亮起灯，徽州的木雕把白天的垂直收成水平。黄山教人的不是征服，是承认：有些风景，只对愿意在山上过夜的人出现。"
		]
	},
	{
		slug: "xian-bowl",
		title: "一碗面里的长安",
		kicker: "食味",
		date: "四月",
		read: "6 分钟",
		image: "/images/xian.jpg",
		destination: "xian",
		excerpt: "俑坑把军队留在地下。面上的蒜水，把一座古都留在舌尖。",
		paragraphs: [
			"从临潼回到城里，第一件事不是洗尘，是找一碗羊肉泡馍。掰馍是一种把时间揉碎的动作：块要匀，才能让汤把每一面都走一遍。蒜、辣椒、粉丝、木耳，一碗里的结构并不比一号坑简单。",
			"西安的好吃并不集中在回民街的主路上。那些被拍照的招牌下面，是给外地人准备的西安。真正的胃在侧巷：铁锅炖、葫芦头、一笼只在早上出现的石子馍。",
			"碑林闭馆之后，城墙上还有骑行的人。灯把垛口写成一排重复的字。你开始理解，为什么这么多朝代把都城放在这里——关中的平原足够喂养一支军队，也足够喂养一碗面。"
		]
	},
	{
		slug: "li-river-south",
		title: "顺着漓江往南",
		kicker: "水路",
		date: "三月",
		read: "7 分钟",
		image: "/images/guilin.jpg",
		destination: "guilin",
		excerpt: "竹筏比游轮更接近江的脾气。山在水里，比在岸上更真。",
		paragraphs: [
			"游轮上的解说词把每一座山都命名。竹筏上没有解说词。撑筏的人偶尔用竹竿点一下水，山就在你的膝盖旁边倒立一次。黄布倒影被拍过太多次，可当你自己的筏进入那片静水，你还是会把手机放下。",
			"阳朔的西街在晚上把自己变成一条喉咙。要听见漓江，需要骑到遇龙河。田里的水比江更浅，水牛比人更有主权。旧县的桥还在，米粉店的老板把辣椒放在桌子中间，问都不问。",
			"喀斯特是一种被水写了很久的地质。它让人意识到：中国南方的美，往往不是高峰，而是高峰被水反复修改之后，剩下的那种圆。"
		]
	},
	{
		slug: "jiuzhai-water",
		title: "在九寨，水比天空更蓝",
		kicker: "秋色",
		date: "十月",
		read: "7 分钟",
		image: "/images/jiuzhaigou.jpg",
		destination: "jiuzhaigou",
		excerpt: "五花海把树干沉在玻璃下面。颜色在这里不是修辞。",
		paragraphs: [
			"飞机降落在高原边缘。空气先薄下来，然后才是风景。九寨沟的车票被预约系统管得很紧，这未必是坏事——它逼你把两天都交给沟，而不是把沟交给一天。",
			"五花海的水把湖底的木头保存成标本。你看见的蓝色不是天空的反射，是矿物质与阳光的合谋。旁边的人会发出一种短促的声音，像是语言忽然不够用。",
			"藏寨的经幡在风里拍打。你走在木栈道上，听见自己的呼吸。秋天的九寨教人一件简单的事：有些地方，值得为了一个月份改机票。"
		]
	},
	{
		slug: "dunhuang-wind",
		title: "敦煌的风把时间吹薄了",
		kicker: "西部",
		date: "九月",
		read: "9 分钟",
		image: "/images/dunhuang.jpg",
		destination: "dunhuang",
		excerpt: "颜料在洞窟里躲过一千年。沙丘上，太阳只需要一个黄昏。",
		paragraphs: [
			"莫高窟不让拍照。这是对的。眼睛被迫工作，记忆才开始生长。飞天的飘带、莲花的座、被氧化成深褐的颜料——讲解员的手电筒每停一次，你就丢失一次二十世纪。",
			"数字展示中心事先把结构讲清楚，实地才不会慌。可当那扇门打开，你仍会发现准备是无效的。颜色的饱和度、空间的低、空气里的土，都无法被屏幕模拟。",
			"鸣沙山的黄昏把人变成沙脊上的一个点。月牙泉还在。骆驼的铃在很远的地方。夜里星比城更密。你忽然明白，丝绸之路从来不是一条路，是一连串愿意在沙漠里停下来的人。"
		]
	}
];
function getArticle(slug) {
	return journal.find((a) => a.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CqkcaWL6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl tracking-wide",
						children: "华旅纪"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-latin mt-2 text-sm tracking-[0.28em] uppercase text-stone-light",
						children: "Sino Atlas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-stone-light",
						children: "一份关于中国风景的编辑手记。不是清单，是四季更迭的气味，是石阶被脚步磨亮的声音。"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.24em] uppercase text-stone-light",
						children: "走"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/destinations",
								className: "hover:text-paper",
								children: "目的地"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/seasons",
								className: "hover:text-paper",
								children: "四季"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/planner",
								className: "hover:text-paper",
								children: "行程"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.24em] uppercase text-stone-light",
						children: "读"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal",
								className: "hover:text-paper",
								children: "手记"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/experiences",
								className: "hover:text-paper",
								children: "体验"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-paper",
								children: "关于"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 md:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.24em] uppercase text-stone-light",
							children: "记"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-stone-light",
							children: "华旅纪是一份独立编辑的旅行志。收录十二处风景，四时，与可以放进行李的行程。"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-stone-light sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "华旅纪 · 中国风景编辑手记" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-latin tracking-[0.18em] uppercase",
					children: "Sino Atlas · China, still being written"
				})]
			})
		})]
	});
}
var REGION_ORDER = [
	"north",
	"jiangnan",
	"southwest",
	"northwest",
	"plateau"
];
var usePlanner = create()(persist((set, get) => ({
	saved: [],
	days: 7,
	notes: "",
	toggle: (slug) => {
		const saved = get().saved;
		set({ saved: saved.includes(slug) ? saved.filter((x) => x !== slug) : [...saved, slug] });
	},
	setDays: (n) => set({ days: n }),
	setNotes: (notes) => set({ notes }),
	clear: () => set({
		saved: [],
		notes: ""
	})
}), {
	name: "shanhe-planner",
	skipHydration: true
}));
function usePlannerHydration() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		Promise.resolve(usePlanner.persist.rehydrate()).then(() => setReady(true));
	}, []);
	return ready;
}
function composeItinerary(slugs, totalDays) {
	const dests = slugs.map((slug) => getDestination(slug)).filter((d) => Boolean(d)).sort((a, b) => REGION_ORDER.indexOf(a.region) - REGION_ORDER.indexOf(b.region) || destinations.findIndex((d) => d.slug === a.slug) - destinations.findIndex((d) => d.slug === b.slug));
	if (dests.length === 0) return [];
	let transits = 0;
	for (let i = 1; i < dests.length; i++) if (dests[i]?.region !== dests[i - 1]?.region) transits += 1;
	const stayBudget = Math.max(dests.length, totalDays - transits);
	const count = dests.length;
	const base = Math.max(1, Math.floor(stayBudget / count));
	let leftover = Math.max(0, stayBudget - base * count);
	const allotment = dests.map(() => base);
	for (let i = 0; i < leftover; i++) {
		const idx = i % count;
		allotment[idx] = (allotment[idx] ?? 1) + 1;
	}
	const plan = [];
	let day = 1;
	dests.forEach((dest, index) => {
		const prev = dests[index - 1];
		if (index > 0 && prev && prev.region !== dest.region) {
			plan.push({
				day,
				slug: dest.slug,
				nameZh: dest.nameZh,
				title: `转赴 ${dest.nameZh}`,
				note: `从${prev.nameZh}前往${dest.province}。把这一日写松，把身体交给交通。`,
				transit: true
			});
			day += 1;
		}
		const stay = allotment[index] ?? 1;
		for (let i = 0; i < stay; i++) {
			const piece = dest.itinerary[i];
			plan.push({
				day,
				slug: dest.slug,
				nameZh: dest.nameZh,
				title: piece?.title ?? `${dest.nameZh} · 慢走`,
				note: piece?.text ?? `把这一日留给${dest.nameZh}没有写进攻略的角落，或补一场预约。`
			});
			day += 1;
		}
	});
	return plan.slice(0, totalDays);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var NAV = [
	{
		to: "/",
		label: "图幅",
		en: "Atlas"
	},
	{
		to: "/destinations",
		label: "目的地",
		en: "Places"
	},
	{
		to: "/experiences",
		label: "体验",
		en: "Craft"
	},
	{
		to: "/seasons",
		label: "四季",
		en: "Seasons"
	},
	{
		to: "/journal",
		label: "手记",
		en: "Journal"
	},
	{
		to: "/planner",
		label: "行程",
		en: "Trip"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isHome = pathname === "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const savedCount = usePlanner((s) => s.saved.length);
	const hydrated = usePlannerHydration();
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	const dark = isHome;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-300", dark ? "bg-ink/80 text-paper border-b border-paper/10 backdrop-blur-md" : "bg-paper/92 text-ink border-b border-ink/8 backdrop-blur-md"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex h-16 items-center justify-between px-4 sm:h-[4.5rem] sm:px-6", isHome ? "max-w-none" : "max-w-7xl"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-wide",
						children: "华旅纪"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-latin text-[11px] tracking-[0.22em] uppercase", dark ? "text-paper/60" : "text-stone"),
						children: "Sino Atlas"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: NAV.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("relative flex min-h-11 items-center gap-2 py-2 text-sm tracking-wide transition-colors duration-150", active ? dark ? "text-paper" : "text-ink" : dark ? "text-paper/65 hover:text-paper" : "text-stone hover:text-ink"),
							children: [
								item.label,
								item.to === "/planner" && hydrated && savedCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-5 items-center justify-center rounded-full bg-cinnabar text-[10px] text-paper tabular-nums",
									children: savedCount
								}) : null,
								active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 -bottom-0.5 h-px bg-cinnabar" }) : null
							]
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center lg:hidden",
								"aria-label": "打开菜单",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "size-5",
									strokeWidth: 1.5
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-paper text-ink shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex h-16 items-center justify-between px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
										className: "font-display text-lg",
										children: "华旅纪"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "inline-flex size-11 items-center justify-center",
											"aria-label": "关闭菜单",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
												className: "size-5",
												strokeWidth: 1.5
											})
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "flex flex-1 flex-col gap-1 px-4 pt-4",
									children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: item.to,
										className: "flex min-h-12 items-baseline justify-between border-b border-ink/8 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-xl",
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 text-latin text-xs tracking-[0.2em] uppercase text-stone",
											children: [item.en, item.to === "/planner" && hydrated && savedCount > 0 ? ` · ${savedCount}` : ""]
										})]
									}, item.to))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-4 py-6 text-xs tracking-wide text-stone",
									children: "万里河山 · 一程烟火"
								})
							]
						})] })]
					})
				})
			]
		})
	});
}
function SiteShell({ children }) {
	const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(isHome ? "scheme-ink h-svh overflow-hidden overscroll-none bg-ink text-paper" : "min-h-svh bg-paper text-ink"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: isHome ? "h-svh" : void 0,
				children
			}),
			isHome ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-go_UvhK0.css";
var APP_NAME = "华旅纪 Sino Atlas";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "华旅纪 Sino Atlas — 可交互的中国旅游图幅。点选省份与目的地，把风景放进行程。"
			},
			{
				name: "theme-color",
				content: "#1a1612"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Noto+Sans+SC:wght@400;500;600&family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[70svh] flex-col items-center justify-center px-6 pt-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl",
				children: "这一页还没有被写下"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-stone",
				children: "也许路标被风吹走了。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 text-sm text-cinnabar",
				children: "回到华旅纪"
			})
		]
	});
}
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "zh-CN",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-xMn47Ct6.mjs");
var Route$8 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./about-cAWu0AId.mjs");
var Route$7 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./experiences-KMawvJsn.mjs");
var Route$6 = createFileRoute("/experiences")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./planner-D-91w4s1.mjs");
var Route$5 = createFileRoute("/planner")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./seasons-vGrLHMxi.mjs");
var Route$4 = createFileRoute("/seasons")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./destinations.index-BDdYMnEW.mjs");
var searchSchema = object({
	region: _enum([
		"north",
		"jiangnan",
		"southwest",
		"northwest",
		"plateau"
	]).optional(),
	season: _enum([
		"spring",
		"summer",
		"autumn",
		"winter"
	]).optional()
});
var Route$3 = createFileRoute("/destinations/")({
	validateSearch: searchSchema,
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitNotFoundComponentImporter$1 = () => import("./destinations._slug-7XaicKJu.mjs");
var $$splitComponentImporter$2 = () => import("./destinations._slug-H6YIzZ1M.mjs");
var Route$2 = createFileRoute("/destinations/$slug")({
	loader: ({ params }) => {
		const dest = getDestination(params.slug);
		if (!dest) throw notFound();
		return { dest };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
var $$splitComponentImporter$1 = () => import("./journal.index-BY8sbejL.mjs");
var Route$1 = createFileRoute("/journal/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitNotFoundComponentImporter = () => import("./journal._slug-CuN0TBZp.mjs");
var $$splitComponentImporter = () => import("./journal._slug-lPhPBu6h.mjs");
var Route = createFileRoute("/journal/$slug")({
	loader: ({ params }) => {
		const article = getArticle(params.slug);
		if (!article) throw notFound();
		return { article };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var ExperiencesRoute = Route$6.update({
	id: "/experiences",
	path: "/experiences",
	getParentRoute: () => Route$9
});
var PlannerRoute = Route$5.update({
	id: "/planner",
	path: "/planner",
	getParentRoute: () => Route$9
});
var SeasonsRoute = Route$4.update({
	id: "/seasons",
	path: "/seasons",
	getParentRoute: () => Route$9
});
var DestinationsIndexRoute = Route$3.update({
	id: "/destinations/",
	path: "/destinations/",
	getParentRoute: () => Route$9
});
var DestinationsSlugRoute = Route$2.update({
	id: "/destinations/$slug",
	path: "/destinations/$slug",
	getParentRoute: () => Route$9
});
var JournalIndexRoute = Route$1.update({
	id: "/journal/",
	path: "/journal/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ExperiencesRoute,
	PlannerRoute,
	SeasonsRoute,
	DestinationsSlugRoute,
	JournalSlugRoute: Route.update({
		id: "/journal/$slug",
		path: "/journal/$slug",
		getParentRoute: () => Route$9
	}),
	DestinationsIndexRoute,
	JournalIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { cn as a, usePlannerHydration as c, destinationsBySeason as d, getDestination as f, seasons as h, Route$3 as i, journal as l, relatedDestinations as m, Route as n, composeItinerary as o, regions as p, Route$2 as r, usePlanner as s, router_exports as t, destinations as u };
