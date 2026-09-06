import type { Destination, RegionId, SeasonId } from "./types";

export const destinations: Destination[] = [
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
    excerpt:
      "三千石英砂岩柱，被雾气反复擦亮。张家界不是为了被走完，而是为了被仰望。",
    body: "武陵源的石峰并非突然出现在电影里。它们在湘西的雨里站了三亿年，薄膜一样的云从柱间穿过，把人的尺度轻轻拆掉。袁家界的观景台、杨家界的天波府、金鞭溪的谷底——同一座山，三种高度。去张家界，最好把日程写松一点：云海来不来，由山自己决定。",
    image: "/images/zhangjiajie.jpg",
    highlights: [
      {
        title: "袁家界 · 阿凡达取景",
        text: "南天一柱与乾坤柱在云海中轮流出场，是这座山最被传颂的面孔。",
      },
      {
        title: "金鞭溪",
        text: "谷底的溪流把石峰从根部读一遍，适合把脚步放慢到水的速度。",
      },
      {
        title: "天子山",
        text: "黄昏时石峰被侧光切开，像一排沉默的兵。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "武陵源 · 上山",
        text: "入园乘百龙电梯或索道上袁家界，沿石栈道走完迷魂台与战豆台，把云海留给偶然。",
      },
      {
        day: "第二日",
        title: "金鞭溪与十里画廊",
        text: "从水绕四门沿溪下行，午后转十里画廊观峰林侧影，傍晚回武陵源市区。",
      },
      {
        day: "第三日",
        title: "天门山（可选）",
        text: "若体力尚余，去天门山玻璃栈道与天门洞。否则把上午留给索溪峪的安静。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "四月雾薄，九至十一月色层最干净" },
      { label: "如何抵达", value: "张家界荷花机场，或高铁至张家界西" },
      { label: "建议停留", value: "武陵源三天，天门山另加一天" },
      { label: "节奏", value: "索道与电梯可省力，栈道仍需稳妥的鞋" },
    ],
  },
  {
    slug: "guilin",
    nameZh: "桂林阳朔",
    nameEn: "Guilin",
    province: "广西",
    region: "southwest",
    seasons: ["spring", "autumn", "winter"],
    days: "3–5 日",
    intensity: "轻",
    featured: true,
    tagline: "水把山写成倒影",
    excerpt:
      "漓江并不是一条河，是一条被喀斯特反复折叠的镜子。竹筏比游轮更接近它的脾气。",
    body: "从桂林到阳朔，山峰像一排被水磨过的印章。二十元人民币背面的黄布倒影仍在，但真正动人的是兴坪到杨堤那段不被扩音器打扰的江面。阳朔的西街早已喧闹，可骑行十里之外的遇龙河，还能听见水牛把蹄子放进浅滩的声音。",
    image: "/images/guilin.jpg",
    highlights: [
      {
        title: "漓江竹筏",
        text: "杨堤至兴坪一段，山从水里长出来，又被水轻轻托住。",
      },
      {
        title: "遇龙河骑行",
        text: "沿田埂骑向旧县，稻田、桥、水牛，构成最日常的风景。",
      },
      {
        title: "兴坪古镇",
        text: "游轮停靠之外的巷子里，豆浆与石板还按自己的钟点走。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "桂林入城",
        text: "象鼻山与东巷作开场，晚上把身体交给漓江边的夜色，不必赶两江四湖。",
      },
      {
        day: "第二日",
        title: "漓江下行",
        text: "上午竹筏或游轮至阳朔，下午在西街外围找一处能看见山的客栈。",
      },
      {
        day: "第三日",
        title: "遇龙河",
        text: "租自行车沿河骑行，在遇龙桥或旧县停下吃一碗米粉，傍晚看山变墨色。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "三至五月新绿，十至十一月江水清" },
      { label: "如何抵达", value: "桂林两江国际机场 / 桂林站，阳朔有高铁" },
      { label: "建议停留", value: "桂林一夜，阳朔两至三夜" },
      { label: "节奏", value: "避开西街核心区的夜，风景就回来了" },
    ],
  },
  {
    slug: "huangshan",
    nameZh: "黄山",
    nameEn: "Huangshan",
    province: "安徽",
    region: "jiangnan",
    seasons: ["spring", "autumn", "winter"],
    days: "2–3 日",
    intensity: "深",
    featured: true,
    tagline: "云海之上，松还在守着",
    excerpt:
      "迎客松被拍过无数次。真正的黄山，是夜里被冻醒、清晨推开窗看见整座山浮在云上。",
    body: "黄山把中国山水画的全部词汇放在一座山上：奇松、怪石、云海、温泉、冬雪。过夜是必要的。只有住在北海或白鹅岭，才能赶在游客索道开动之前，看见光明顶被第一线日出切开。下山后，把脚步交给屯溪老街和呈坎，山的余温会在徽州的木雕里再停留一夜。",
    image: "/images/huangshan.jpg",
    highlights: [
      {
        title: "北海日出",
        text: "清凉台是经典机位，但任何一处朝东的石沿，都可能成为你的。",
      },
      {
        title: "西海大峡谷",
        text: "向下走入峰林内部，黄山从明信片变成可以呼吸的地质。",
      },
      {
        title: "徽州余韵",
        text: "呈坎、宏村或屯溪，把山的垂直换成民居的水平。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "上山过夜",
        text: "云谷寺索道至白鹅岭，沿途经始信峰至北海住宿，黄昏走一圈西海栈道。",
      },
      {
        day: "第二日",
        title: "日出与下山",
        text: "黎明看日出，午前走西海大峡谷，下午索道下山，夜宿屯溪。",
      },
      {
        day: "第三日",
        title: "徽州",
        text: "呈坎或宏村半日，把马头墙当作黄山的注脚。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "十月色层最稳，冬季雪后需冰爪" },
      { label: "如何抵达", value: "黄山屯溪机场 / 黄山北站，转景区班车" },
      { label: "建议停留", value: "山上务必一夜，山下再留一夜" },
      { label: "节奏", value: "住宿需提前，旺季步道拥挤，日出值得早起" },
    ],
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
    excerpt:
      "断桥、苏堤、雷峰塔——名字已经太熟。清晨七点的湖面，仍能把熟识的句子重新写湿。",
    body: "西湖的困难不在于找不到风景，而在于如何把风景从拥挤里捞出来。答案几乎总是同一个：去得早。白堤还没有被打开，柳丝贴着水，保俶塔只是一个淡墨点。龙井的茶室在山里，灵隐的香在谷中。杭州把宋的审美活成了可以散步的市政公园，这本身就是一种文明的自信。",
    image: "/images/hangzhou.jpg",
    highlights: [
      {
        title: "苏堤春晓",
        text: "六座桥把湖分成可以慢慢读的句子，清晨没有扩音器。",
      },
      {
        title: "龙井问茶",
        text: "狮峰一带的茶园在清明前后最嫩，坐下来比买茶更重要。",
      },
      {
        title: "杨公堤西线",
        text: "游客较少的一面，茅家埠与浴鹄湾还保留着湖的呼吸。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "环湖",
        text: "清晨白堤至断桥，沿苏堤向南，午后翻到杨公堤，傍晚在湖滨看灯慢慢亮。",
      },
      {
        day: "第二日",
        title: "山与茶",
        text: "上午灵隐与飞来峰，下午龙井村，把一盏茶喝到见杯底。",
      },
      {
        day: "第三日",
        title: "城里",
        text: "南宋御街或中国美院象山，作为西湖之外的另一种杭州。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "三月至四月，或十月桂花时节" },
      { label: "如何抵达", value: "杭州东站 / 萧山机场，地铁至龙翔桥" },
      { label: "建议停留", value: "两日够湖，三日才有茶与寺" },
      { label: "节奏", value: "七点前出门，把拥挤留给别人" },
    ],
  },
  {
    slug: "forbidden-city",
    nameZh: "紫禁城",
    nameEn: "Forbidden City",
    province: "北京",
    region: "north",
    seasons: ["autumn", "winter", "spring"],
    days: "1–2 日",
    intensity: "中",
    featured: true,
    tagline: "中轴线把时间摆正",
    excerpt:
      "九千间房屋，一条看不见的线。走进午门，声音先被院子吞掉，然后才是屋顶的金。",
    body: "故宫不是一张可以拍完的明信片。它是一套关于权力、礼仪与季节的空间语法：前朝的开阔，后廷的紧凑，御花园忽然变得像人。东华门一侧的文物馆把器物从墙上放回手里。冬天初雪时，朱红与白最干净；秋天的琉璃瓦会把整座城映成一种克制的暖。出神武门，景山正好把这条中轴线收成一幅。",
    image: "/images/forbidden-city.jpg",
    highlights: [
      {
        title: "中轴线",
        text: "午门、太和门、太和殿，空间一次次被放大，人一次次被缩小。",
      },
      {
        title: "珍宝馆与钟表馆",
        text: "东西两路比中路安静，器物比宫殿更接近日常的帝国。",
      },
      {
        title: "景山俯瞰",
        text: "出北门即上山，是理解整座城布局的唯一高度。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "故宫全日",
        text: "早场入园走中路，午后转东路珍宝馆，出神武门上景山看黄昏。",
      },
      {
        day: "第二日",
        title: "皇城外围",
        text: "天安门、太庙或北海，把故宫放回一座活着的北京。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "十月至十一月，或雪后的清晨" },
      { label: "如何抵达", value: "地铁天安门东 / 天安门西，需预约门票" },
      { label: "建议停留", value: "闭园前四小时仍嫌不够" },
      { label: "节奏", value: "周中早场，少在太和殿广场停留过久" },
    ],
  },
  {
    slug: "great-wall",
    nameZh: "长城",
    nameEn: "Great Wall",
    province: "北京",
    region: "north",
    seasons: ["autumn", "winter", "spring"],
    days: "1 日",
    intensity: "中",
    featured: true,
    tagline: "墙在山脊上呼吸",
    excerpt:
      "长城不是一道墙，是一条随着山势思考的线。去金山岭或慕田峪，把八达岭留给明信片。",
    body: "从北京出发，长城有许多入口。八达岭最便利，也最拥挤。金山岭把墙写成可以走路的书法：敌楼的节奏、包砖的起伏、山谷里的风。秋天，山变成铜与铁锈；冬天，墙成为一条白线。走长城需要的不是征服，而是承认：这条线比任何王朝都更耐心。",
    image: "/images/great-wall.jpg",
    highlights: [
      {
        title: "金山岭",
        text: "摄影者的长城，敌楼密集，秋色与墙体互相成就。",
      },
      {
        title: "慕田峪",
        text: "索道完善，适合不想把一天交给交通的人，仍能看见真的山。",
      },
      {
        title: "司马台（可选）",
        text: "更陡，更安静，夜场灯光是另一种长城。",
      },
    ],
    itinerary: [
      {
        day: "一日",
        title: "金山岭往返",
        text: "清晨出城，走西五眼至东五眼中最美的一段，下午返回北京，把腿交给晚饭。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "十月红叶，或雪后工作日" },
      { label: "如何抵达", value: "旅游专线或包车，自驾需早出" },
      { label: "建议停留", value: "一天足够，不必两段都走" },
      { label: "节奏", value: "徒步段选好退路，风大时加一层" },
    ],
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
    excerpt:
      "五花海把树干沉在玻璃下面。秋天的九寨不是风景，是一次关于颜色的教育。",
    body: "藏族村寨、钙化湖、彩林——九寨沟把三种本来不该如此靠近的东西叠在一起。五花海、五彩池、诺日朗瀑布是被说得最多的名字，但真正让人停住的是水的透明度：它让湖底的木头成为画的一部分。去九寨要服从季节。十月中下旬的彩林值得为此改机票。",
    image: "/images/jiuzhaigou.jpg",
    highlights: [
      {
        title: "五花海",
        text: "湖水把森林画进自己身体里，是九寨最不容错过的一处。",
      },
      {
        title: "长海与五彩池",
        text: "沟的尽端，长海沉静，五彩池小而饱和。",
      },
      {
        title: "诺日朗",
        text: "瀑布的宽度比高度更惊人，像一封被展开的白色信。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "入沟",
        text: "早班车进沟，先走则查洼沟至长海，折返五彩池，下午看诺日朗。",
      },
      {
        day: "第二日",
        title: "日则沟",
        text: "五花海、珍珠滩、熊猫海一线，把最饱和的颜色留给光线最好的午前。",
      },
      {
        day: "第三日",
        title: "黄龙或返程",
        text: "若体力允许，去黄龙看钙化彩池；否则把上午留给沟口的藏寨。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "十月中下旬彩林，需提前预约" },
      { label: "如何抵达", value: "九寨黄龙机场，或成都大巴 / 高铁转车" },
      { label: "建议停留", value: "沟内两日，勿一日走完" },
      { label: "节奏", value: "高原走得慢，防晒与水比装备清单更重要" },
    ],
  },
  {
    slug: "lijiang",
    nameZh: "丽江",
    nameEn: "Lijiang",
    province: "云南",
    region: "southwest",
    seasons: ["spring", "autumn", "winter"],
    days: "3–4 日",
    intensity: "轻",
    tagline: "玉龙在城的尽头",
    excerpt:
      "古城的灯已经太亮。可黎明的石板路、纳西的井、远处那座不化的雪山，仍是原来的丽江。",
    body: "丽江被写过、被唱过、被通宵过。要看见它，需要换一个钟点：早上七点的四方街里，水流还走在游客前面。束河比大研安静一寸。白沙的壁画把纳西的宇宙画在墙上。玉龙雪山不必登顶，在蓝月谷或云杉坪，山已经把规模说清楚了。晚上若不想被酒吧吞掉，去看一场纳西古乐——它比灯更接近这座城的骨头。",
    image: "/images/lijiang.jpg",
    highlights: [
      {
        title: "黎明大研",
        text: "在四方街被打开之前走进去，水与石还按自己的时间走。",
      },
      {
        title: "玉龙雪山",
        text: "蓝月谷的水是雪山的注脚，云杉坪把山放到可以平视的距离。",
      },
      {
        title: "白沙古镇",
        text: "壁画与田野，丽江还没有被写成夜生活之前的样子。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "大研与束河",
        text: "午后到，黄昏在大研迷路一次，夜里改去束河睡觉。",
      },
      {
        day: "第二日",
        title: "雪山",
        text: "蓝月谷或云杉坪，量力索道。高原反应比风景更需要被尊重。",
      },
      {
        day: "第三日",
        title: "白沙",
        text: "壁画、田野、一顿纳西午饭，把丽江从夜色里赎回来。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "三至五月，或九至十一月" },
      { label: "如何抵达", value: "丽江三义机场 / 丽江站" },
      { label: "建议停留", value: "三夜起，雪山单独一天" },
      { label: "节奏", value: "缓进高原，酒和昼夜颠倒都不是朋友" },
    ],
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
    excerpt:
      "布达拉宫不是一座宫殿，是一座被信仰举起来的山。在拉萨，先学会走得慢。",
    body: "拉萨的光比内地更硬，影子更短，转经的人把八廓街走成一条河。布达拉宫需要预约，也需要氧气一样的耐心：红宫、白宫、金顶，层层把人从尘世里抽离。大昭寺的觉沃佛前，酥油灯把时间熬成一种气味。去拉萨不是打卡，是把自己交给高原——第一天只散步，第二天再进宫，第三天去色拉寺看辩经。山南与纳木错都在不远处，但拉萨本身已经足够。",
    image: "/images/lhasa.jpg",
    highlights: [
      {
        title: "布达拉宫",
        text: "必须预约。红宫的灵塔殿是整座建筑的心脏。",
      },
      {
        title: "八廓与大昭寺",
        text: "顺时针走，让转经筒和脚步成为同一件事。",
      },
      {
        title: "色拉寺辩经",
        text: "下午的辩经场，掌声与佛理同时落下。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "适应",
        text: "只在八廓街慢走，喝水，早睡。不要安排布达拉。",
      },
      {
        day: "第二日",
        title: "布达拉宫",
        text: "午前入宫，下午在公园里看它的侧面被光慢慢移动。",
      },
      {
        day: "第三日",
        title: "大昭寺与色拉",
        text: "清晨大昭寺，下午色拉寺辩经，晚上把海拔交给睡眠。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "五至十月，日照长、路况稳" },
      { label: "如何抵达", value: "拉萨贡嘎机场，或青藏 / 川藏铁路" },
      { label: "建议停留", value: "至少四夜，勿第一天进宫" },
      { label: "节奏", value: "缓进缓出，防晒、保湿、不饮酒" },
    ],
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
    excerpt:
      "兵马俑只是开始。西安把周秦汉唐叠在同一张城墙上，而面要配一碗羊肉。",
    body: "临潼的俑坑把两千年前的军阵留在原位。一号坑的冲击力仍无法被照片代替：每一张脸都不重复。回到城里，明城墙是可以骑行的时间环，碑林把书法变成一座森林，回民街之外的永兴坊或老菜场更接近西安人的胃。大雁塔与大明宫则提醒你：这座城曾经是世界的首都，而现在它只是把那份气度，做成一碗加了蒜水的羊肉泡馍。",
    image: "/images/xian.jpg",
    highlights: [
      {
        title: "兵马俑",
        text: "一号坑全日，二号坑的彩绘跪射俑是容易被忽略的细节。",
      },
      {
        title: "城墙骑行",
        text: "永宁门上墙，顺时针或逆时针，把西安看成一个完整的方。",
      },
      {
        title: "碑林",
        text: "石上的字比博物馆的说明更接近长安的精神。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "俑坑",
        text: "早班车临潼，一号二号三号坑与铜车马，下午回城吃一碗泡馍。",
      },
      {
        day: "第二日",
        title: "城内",
        text: "碑林午前，城墙骑行黄昏，夜里避开最闹的回民街主路。",
      },
      {
        day: "第三日",
        title: "唐的影子",
        text: "大雁塔与陕西历史博物馆，把兵马俑放回更长的时间里。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "四至五月，或九至十月" },
      { label: "如何抵达", value: "西安咸阳机场 / 西安北站" },
      { label: "建议停留", value: "两日核心，三日才从容" },
      { label: "节奏", value: "俑坑单独一天，勿与城墙挤在上午" },
    ],
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
    excerpt:
      "拙政园把一座山放进一亩池塘。苏州的园林不是风景，是可以走进去的哲学。",
    body: "江南的园林是一种以小见大的技术：漏窗、廊、桥、石，把视线一次次折返。拙政园最开阔，留园最精巧，网师园在夜晚有时会把评弹放进水里。平江路的河道比狮子林的假山更接近苏州人的日常。若还有一日，去周庄或同里并不是必须——苏州城里，已经有足够的水。",
    image: "/images/suzhou.jpg",
    highlights: [
      {
        title: "拙政园",
        text: "春日杜鹃与荷，是园林里最接近山水画的一处。",
      },
      {
        title: "网师园",
        text: "小而完整，夜园若开放，灯把廊柱写成另一种园。",
      },
      {
        title: "平江路",
        text: "住进河道边的旅馆，早晨听船从窗下过去。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "园",
        text: "拙政园与狮子林在同一带，午后平江路喝茶，把园从拥挤里救出来。",
      },
      {
        day: "第二日",
        title: "另一种园",
        text: "留园或沧浪亭，傍晚去博物馆看吴门的画如何与园互相解释。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "三月至四月，或十月" },
      { label: "如何抵达", value: "苏州站 / 苏州北，上海虹桥约半小时" },
      { label: "建议停留", value: "两日看园，三日把水也走完" },
      { label: "节奏", value: "开园即入，十点后的拙政园是另一种体验" },
    ],
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
    excerpt:
      "莫高窟把颜色藏在崖壁里。鸣沙山把太阳放得很低。敦煌是丝绸之路还活着的一段。",
    body: "去敦煌，先预约莫高窟。数字展示中心把洞窟讲清楚，再到实地看那几座被分配到的窟——飞天、莲花、被风吹淡的颜料。鸣沙山的月牙泉是地理上的奇迹：沙没有把水填掉。夜里的星比内地更密。若有余力，去雅丹看地质把大地写成另一种文字。敦煌让人意识到：中国的西部不是边缘，是文明曾经走过的路。",
    image: "/images/dunhuang.jpg",
    highlights: [
      {
        title: "莫高窟",
        text: "必须预约。数字馆与实体窟是一套完整的观看。",
      },
      {
        title: "鸣沙山 · 月牙泉",
        text: "黄昏最美。沙丘的脊线会把人变成一个很小的点。",
      },
      {
        title: "夜空",
        text: "远离城区的戈壁，银河有时会老实出现。",
      },
    ],
    itinerary: [
      {
        day: "第一日",
        title: "莫高窟",
        text: "按预约时段参观，下午在市区博物馆把没看完的脉络补上。",
      },
      {
        day: "第二日",
        title: "沙与泉",
        text: "午后进鸣沙山，留下看日落，夜里若天气好，找一处能看见星的空地。",
      },
      {
        day: "第三日",
        title: "雅丹（可选）",
        text: "西线雅丹地质公园，把敦煌从洞窟扩展成一整片大地。",
      },
    ],
    practical: [
      { label: "最佳季节", value: "四至六月，或九至十月，避开盛夏" },
      { label: "如何抵达", value: "敦煌机场 / 柳园站转车" },
      { label: "建议停留", value: "两夜核心，三夜从容" },
      { label: "节奏", value: "洞窟预约是硬门槛，沙山要防晒与防沙" },
    ],
  },
];

export const regions: {
  id: RegionId;
  nameZh: string;
  nameEn: string;
  blurb: string;
}[] = [
  {
    id: "north",
    nameZh: "华北",
    nameEn: "North",
    blurb: "城墙、宫殿、一条还在呼吸的边防。",
  },
  {
    id: "jiangnan",
    nameZh: "江南",
    nameEn: "Jiangnan",
    blurb: "湖、园、山。被写得最多，仍能被重新走湿。",
  },
  {
    id: "southwest",
    nameZh: "西南",
    nameEn: "Southwest",
    blurb: "喀斯特、彩林、古城。地形在这里把人的尺度拆掉。",
  },
  {
    id: "northwest",
    nameZh: "西北",
    nameEn: "Northwest",
    blurb: "俑坑与洞窟。丝绸之路还没有走完。",
  },
  {
    id: "plateau",
    nameZh: "青藏",
    nameEn: "Plateau",
    blurb: "光更硬，脚步必须更慢。",
  },
];

export const seasons: {
  id: SeasonId;
  nameZh: string;
  nameEn: string;
  months: string;
  blurb: string;
  image: string;
}[] = [
  {
    id: "spring",
    nameZh: "春",
    nameEn: "Spring",
    months: "三 — 五 月",
    blurb: "西湖的柳、苏州的杜鹃、桂林的新绿。江南在这一季把自己写得最满。",
    image: "/images/hangzhou.jpg",
  },
  {
    id: "summer",
    nameZh: "夏",
    nameEn: "Summer",
    months: "六 — 八 月",
    blurb: "高原的窗口打开。拉萨的光最稳，丽江的山还没有被雨季完全打湿。",
    image: "/images/lhasa.jpg",
  },
  {
    id: "autumn",
    nameZh: "秋",
    nameEn: "Autumn",
    months: "九 — 十一 月",
    blurb: "九寨的彩林、黄山的云、长城的铜。这是中国风景最慷慨的三个月。",
    image: "/images/jiuzhaigou.jpg",
  },
  {
    id: "winter",
    nameZh: "冬",
    nameEn: "Winter",
    months: "十二 — 二 月",
    blurb: "故宫初雪，敦煌空旷。人少下来，城与沙都露出骨头。",
    image: "/images/forbidden-city.jpg",
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export function destinationsByRegion(id: RegionId) {
  return destinations.filter((d) => d.region === id);
}

export function destinationsBySeason(id: SeasonId) {
  return destinations.filter((d) => d.seasons.includes(id));
}

export function relatedDestinations(slug: string, n = 3) {
  const current = getDestination(slug);
  if (!current) return destinations.slice(0, n);
  const same = destinations.filter(
    (d) => d.slug !== slug && d.region === current.region,
  );
  const rest = destinations.filter(
    (d) => d.slug !== slug && d.region !== current.region,
  );
  return [...same, ...rest].slice(0, n);
}
