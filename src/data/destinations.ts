import type { Destination, RegionId, SeasonId } from "./types";

export const destinations: Destination[] = [
  {
    slug: "beijing",
    nameZh: "北京",
    nameEn: "Beijing",
    province: "北京",
    region: "north",
    seasons: ["autumn", "winter", "spring"],
    days: "4–6 日",
    intensity: "中",
    featured: true,
    tagline: "把一座都城走成一条中轴线",
    excerpt:
      "胡同、城墙、一碗炸酱面。北京不是宫殿的集合，是一套还在运转的城市礼仪。",
    body: "去北京，先把脚步放在中轴线上：从永定门想到钟鼓楼，城是被一条看不见的线组织起来的。胡同比殿宇更接近日常——烟袋斜街之外，还有没有被扩音器占领的院子。冬天的风把声音削薄，秋天的银杏把地铺成铜。夜市、京剧、一盘烤鸭，都是这座城把自己翻译成胃与耳朵的方式。不必把日程写成打卡清单，给一条胡同留出迷路的下午。",
    image: "/images/beijing.jpg",
    highlights: [
      {
        title: "中轴与城",
        text: "永定门到钟鼓楼，把都城的骨架走一遍，比任何讲解更清楚。",
      },
      {
        title: "胡同",
        text: "南锣与烟袋之外，找一条没有招牌的巷子坐下来。",
      },
      {
        title: "城北的山",
        text: "香山或八大处，把平原上的都城放回燕山的褶皱里。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "中轴",
        text: "前门、天安门广场一带入城，午后转胡同，傍晚景山看城的屋顶。",
      },
      {
        day: "第二日",
        title: "城与胃",
        text: "上午走一条老街区，下午交给炸酱面或烤鸭，夜听一出戏。",
      },
      {
        day: "第三日",
        title: "出城一线",
        text: "香山、颐和园或城北的一处山，把北京从平原里拎起来。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "十月银杏，或雪后的干冷" },
      { label: "如何抵达", value: "首都 / 大兴机场，地铁几乎能到所有城内目的地" },
      { label: "建议停留", value: "四日才刚够把中轴和胡同都走松" },
      { label: "节奏", value: "周中出门，给一条没有攻略的巷子留半天" }
    ],
  },
  {
    slug: "shanghai",
    nameZh: "上海",
    nameEn: "Shanghai",
    province: "上海",
    region: "jiangnan",
    seasons: ["spring", "autumn", "winter"],
    days: "3–5 日",
    intensity: "轻",
    featured: true,
    tagline: "外滩把二十世纪摊开",
    excerpt:
      "石库门、黄浦江、通宵的面。上海是中国进入现代的切口，夜比昼更像它自己。",
    body: "上海要被走，而不是被远眺。外滩的石材与对岸的玻璃是同一条河的两页。武康路与愚园路把梧桐写成一种生活，而不是打卡背景。早餐从生煎开始，夜里一碗阳春面把城市的速度降下来。去上海，把一天交给一条可以走完的马路，比把三天交给三座塔更接近这座城。",
    image: "/images/shanghai.jpg",
    highlights: [
      {
        title: "外滩与浦江",
        text: "晨或夜，船把两岸的时间差送到眼前。",
      },
      {
        title: "梧桐区",
        text: "武康、安福、愚园，把租界的尺度走成散步。",
      },
      {
        title: "小馆",
        text: "本帮菜不必豪华。一条马路里的生煎，往往更准确。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "浦江",
        text: "清晨外滩，午后豫园一带的城厢，夜里再看一次灯。",
      },
      {
        day: "第二日",
        title: "西区",
        text: "武康路到愚园路，咖啡馆与旧公寓之间找一家本帮小馆。",
      },
      {
        day: "第三日",
        title: "另一面",
        text: "张园或沿苏州河走一段，把上海从天际线里放回河里。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "四至五月，或十月干爽" },
      { label: "如何抵达", value: "虹桥 / 浦东，地铁是这座城的语法" },
      { label: "建议停留", value: "三日够骨架，五日才有闲" },
      { label: "节奏", value: "少排队网红店，多走没有滤镜的马路" }
    ],
  },
  {
    slug: "hangzhou",
    nameZh: "杭州",
    nameEn: "Hangzhou",
    province: "浙江",
    region: "jiangnan",
    seasons: ["spring", "autumn"],
    days: "3–4 日",
    intensity: "轻",
    featured: true,
    tagline: "一座把湖当成市政的城",
    excerpt:
      "西湖被写了千年。杭州真正动人的是：湖在城里，茶在山里，人可以走着抵达。",
    body: "杭州不是湖的附属，湖是杭州的呼吸。清晨白堤还没有被打开，柳丝贴着水。龙井的茶室在山里，灵隐的香在谷中。南宋御街与象山把宋的审美接到可以买一杯咖啡的现在。去杭州，把日程写松：湖要早，茶要坐，城里要留一夜。",
    image: "/images/hangzhou.jpg",
    highlights: [
      {
        title: "环湖",
        text: "苏堤与杨公堤把湖分成可以慢慢读的句子。",
      },
      {
        title: "龙井",
        text: "狮峰一带坐下来，比买茶更重要。",
      },
      {
        title: "城里",
        text: "南宋御街或象山，作为湖之外的杭州。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "湖",
        text: "清晨白堤至断桥，沿苏堤向南，傍晚湖滨看灯。",
      },
      {
        day: "第二日",
        title: "山与茶",
        text: "上午灵隐，下午龙井村，把一盏茶喝到见杯底。",
      },
      {
        day: "第三日",
        title: "城",
        text: "城里走走市井与书院，把杭州从明信片里领回来。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "三月至四月，或十月桂花" },
      { label: "如何抵达", value: "杭州东站 / 萧山机场" },
      { label: "建议停留", value: "两日够湖，三日才有茶与城" },
      { label: "节奏", value: "七点前到湖，把拥挤留给别人" }
    ],
  },
  {
    slug: "suzhou",
    nameZh: "苏州",
    nameEn: "Suzhou",
    province: "江苏",
    region: "jiangnan",
    seasons: ["spring", "autumn"],
    days: "2–4 日",
    intensity: "轻",
    tagline: "把一座山放进一亩池塘",
    excerpt:
      "园、水、评弹。苏州把观看练成一种可以坐下的技术。",
    body: "苏州不是园的目录。它是一条被运河反复折叠的城：评弹在茶馆里把声音放慢，巷子把脚底板走潮。拙政、留园之外，还有没有被讲解词写完的小园。去苏州，选两座园，再把一天交给平江路之外的水巷。",
    image: "/images/suzhou.jpg",
    highlights: [
      {
        title: "园",
        text: "一座大园加一座小园，漏窗比门票更值得被记住。",
      },
      {
        title: "水巷",
        text: "平江路之外还有更安静的河。",
      },
      {
        title: "评弹",
        text: "下午的茶馆，把苏州从眼睛还给耳朵。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "园与巷",
        text: "上午一座园，下午平江或山塘，夜听一曲。",
      },
      {
        day: "第二日",
        title: "另一座园",
        text: "换一座更安静的园，把观看的速度降到廊的转折。",
      },
      {
        day: "第三日",
        title: "出城",
        text: "同里或周庄若去，早去早回，把夜留给苏州城里。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "四月杜鹃，或十月干爽" },
      { label: "如何抵达", value: "高铁苏州站，距上海约半小时" },
      { label: "建议停留", value: "两日园与城，三日才不赶" },
      { label: "节奏", value: "开园即入，避开周末游线" }
    ],
  },
  {
    slug: "nanjing",
    nameZh: "南京",
    nameEn: "Nanjing",
    province: "江苏",
    region: "jiangnan",
    seasons: ["spring", "autumn"],
    days: "3–4 日",
    intensity: "中",
    tagline: "城墙还在把六朝围住",
    excerpt:
      "梧桐、城砖、一碗鸭。南京把几个朝代叠在同一条马路上。",
    body: "南京的美是沉的。明城墙可以骑，玄武湖把城放进水里，中山陵把山写成一种朝圣。去南京，不必把所有陵与馆走完——选一段墙、一座山、一条梧桐道，再找一碗盐水鸭。雨花石与新街口之间，是一座还在呼吸的古都。",
    image: "/images/nanjing.jpg",
    highlights: [
      {
        title: "城墙",
        text: "从中华门走一段，砖比解说更厚。",
      },
      {
        title: "湖与山",
        text: "玄武湖或紫金山，选一个高度看城。",
      },
      {
        title: "滋味",
        text: "鸭、汤、一碟小笼，把六朝放进胃里。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "城",
        text: "中华门至一段城墙，午后夫子庙一带，夜走老门东之外的巷。",
      },
      {
        day: "第二日",
        title: "山",
        text: "紫金山或中山陵，把城市从墙内拎到林里。",
      },
      {
        day: "第三日",
        title: "湖",
        text: "玄武湖环一圈，把剩下的时间交给梧桐与一家小馆。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "三月至四月，或十月至十一月" },
      { label: "如何抵达", value: "南京南站 / 禄口机场" },
      { label: "建议停留", value: "三日刚好" },
      { label: "节奏", value: "城墙与山不要排在同一天" }
    ],
  },
  {
    slug: "xiamen",
    nameZh: "厦门",
    nameEn: "Xiamen",
    province: "福建",
    region: "jiangnan",
    seasons: ["spring", "autumn", "winter"],
    days: "3–4 日",
    intensity: "轻",
    tagline: "海风被写进巷子",
    excerpt:
      "鼓浪屿、沙茶面、一条被榕树撑开的路。厦门把海放得很近。",
    body: "厦门是可以走着遇见海的城。鼓浪屿要早，否则钢琴与人声会把岛填满。城内的巷子比沙滩更像厦门：沙茶面、海蛎煎、被盐风吹旧的阳台。去厦门，把一半时间给岛，一半给没有攻略的小路。",
    image: "/images/xiamen.jpg",
    highlights: [
      {
        title: "鼓浪屿",
        text: "清晨上岛，走没有店铺的坡。",
      },
      {
        title: "巷与面",
        text: "沙茶面比海滩更准确。",
      },
      {
        title: "环岛",
        text: "一条可以把风灌进袖口的路。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "岛",
        text: "早船鼓浪屿，避开龙头路主街，走别墅与坡。",
      },
      {
        day: "第二日",
        title: "城",
        text: "中山路之外找一家面店，下午环岛或白城。",
      },
      {
        day: "第三日",
        title: "海",
        text: "一座沙滩或一座炮台，把厦门从明信片里走松。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "十月至次年四月，台风季避开" },
      { label: "如何抵达", value: "高崎机场 / 厦门站" },
      { label: "建议停留", value: "三日含岛" },
      { label: "节奏", value: "鼓浪屿开船第一班" }
    ],
  },
  {
    slug: "qingdao",
    nameZh: "青岛",
    nameEn: "Qingdao",
    province: "山东",
    region: "north",
    seasons: ["summer", "autumn"],
    days: "3–4 日",
    intensity: "轻",
    tagline: "红瓦把海交给风",
    excerpt:
      "啤酒、栈桥、被潮气浸透的山坡。青岛是一座被海风吹斜的北方。",
    body: "青岛的城从八大关的别墅开始变软。红瓦、石滩、被松树切开的海。栈桥上的人很多，金沙滩与老城的坡道更接近日常。去青岛，把一天给海，一天给老城的路，夜里一盘蛤蜊。",
    image: "/images/qingdao.jpg",
    highlights: [
      {
        title: "八大关",
        text: "别墅与松把海隔成可以散步的句子。",
      },
      {
        title: "老城坡",
        text: "中山路之外，上山的台阶更像青岛。",
      },
      {
        title: "海",
        text: "选一处不拥挤的岸，把脚放进水里。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "岸",
        text: "栈桥一带看一眼，然后把时间交给八大关。",
      },
      {
        day: "第二日",
        title: "城",
        text: "老城的坡与馆，午后一座啤酒小馆即可。",
      },
      {
        day: "第三日",
        title: "更远的海",
        text: "金沙滩或崂山一线，早出晚归。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "六月至九月海，十月城最干净" },
      { label: "如何抵达", value: "青岛胶东机场 / 青岛站" },
      { label: "建议停留", value: "三日" },
      { label: "节奏", value: "海与老城不要挤在同一上午" }
    ],
  },
  {
    slug: "chengdu",
    nameZh: "成都",
    nameEn: "Chengdu",
    province: "四川",
    region: "southwest",
    seasons: ["spring", "autumn", "winter"],
    days: "3–5 日",
    intensity: "轻",
    featured: true,
    tagline: "一座把闲练成制度的城",
    excerpt:
      "火锅、茶馆、竹。成都不催人。辣只是入口，回甘才是目的。",
    body: "成都是为停下来准备的。宽窄巷子是给外地人的封面，真正的闲在街边的茶馆、一碗担担面、下午两点还没有散场的火锅。熊猫基地要早。若再往外走，青城或都江堰把水的脾气讲清楚。去成都，把日程里的「必须」划掉一半。",
    image: "/images/chengdu.jpg",
    highlights: [
      {
        title: "茶馆",
        text: "人民公园或街边，盖碗把时间从钟上拿下来。",
      },
      {
        title: "辣",
        text: "火锅、冒菜、一碗面，选一种就够。",
      },
      {
        title: "水",
        text: "都江堰把一座城的闲与一条江的工程放在一起。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "城",
        text: "上午茶馆，下午小馆，夜火锅。宽窄只看一眼。",
      },
      {
        day: "第二日",
        title: "熊猫或水",
        text: "早场熊猫基地，或都江堰半日。",
      },
      {
        day: "第三日",
        title: "再闲一天",
        text: "把地图收起来，跟着香走。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "三至五月，或十至十一月" },
      { label: "如何抵达", value: "天府 / 双流，地铁已很全" },
      { label: "建议停留", value: "三日城内，五日才出得去" },
      { label: "节奏", value: "不要把火锅和早场熊猫排在同一天" }
    ],
  },
  {
    slug: "chongqing",
    nameZh: "重庆",
    nameEn: "Chongqing",
    province: "重庆",
    region: "southwest",
    seasons: ["spring", "autumn"],
    days: "3–4 日",
    intensity: "中",
    featured: true,
    tagline: "山城把江写成楼梯",
    excerpt:
      "雾、火锅、轨道穿楼。重庆不是平面的，是被两江折叠过的立体。",
    body: "重庆要被爬，被过江，被雾打湿。洪崖洞是封面，十八梯与山城巷才是正文。轻轨从楼里穿过，江在脚下换成另一条。去重庆，穿一双能走台阶的鞋，把夜留给两江的灯，把胃交给一顿足够辣的火锅。",
    image: "/images/chongqing.jpg",
    highlights: [
      {
        title: "台阶",
        text: "山城巷、十八梯，把高度走进膝盖。",
      },
      {
        title: "两江",
        text: "索道或夜船，城市在水上被重排。",
      },
      {
        title: "火锅",
        text: "选一家本地人排队的，而不是江景最贵的。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "上城",
        text: "解放碑到山城巷，夜看两江。",
      },
      {
        day: "第二日",
        title: "过江",
        text: "索道或南岸看朝天门，下午一座博物馆或老街。",
      },
      {
        day: "第三日",
        title: "再下一层",
        text: "一条你没有查过的巷，把重庆从灯光里领回来。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "三至五月，或十至十一月，避开盛夏" },
      { label: "如何抵达", value: "江北机场 / 重庆北站" },
      { label: "建议停留", value: "三日" },
      { label: "节奏", value: "每天只安排一座山城的「一层」" }
    ],
  },
  {
    slug: "kunming",
    nameZh: "昆明",
    nameEn: "Kunming",
    province: "云南",
    region: "southwest",
    seasons: ["spring", "autumn", "winter"],
    days: "2–4 日",
    intensity: "轻",
    tagline: "一座省的春天停在这里",
    excerpt:
      "滇池、鲜花、不冷不热的风。昆明是云南的门厅，也是可以住下来的城。",
    body: "昆明被叫做春城，不是修辞。翠湖的海鸥只在冬天来，滇池把风放得很宽。去昆明，不必急着转机去大理丽江——给这座城两天：一碗过桥米线，一场花市，一次看海一样看滇池。",
    image: "/images/kunming.jpg",
    highlights: [
      {
        title: "滇池",
        text: "傍晚的风比市区的花市更像云南。",
      },
      {
        title: "翠湖",
        text: "冬日海鸥，其余季节是一座可以绕的园。",
      },
      {
        title: "米线",
        text: "过桥是仪式，日常的小碗往往更好。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "城",
        text: "翠湖与老街，夜一碗米线。",
      },
      {
        day: "第二日",
        title: "海一样的湖",
        text: "滇池沿岸选一段走，把昆明从中转里救出来。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "几乎全年，冬日有海鸥" },
      { label: "如何抵达", value: "长水机场是云南的枢纽" },
      { label: "建议停留", value: "两日，若入滇则当作门厅" },
      { label: "节奏", value: "不要把昆明写成一晚的过路" }
    ],
  },
  {
    slug: "lijiang",
    nameZh: "丽江",
    nameEn: "Lijiang",
    province: "云南",
    region: "southwest",
    seasons: ["spring", "autumn"],
    days: "3–4 日",
    intensity: "中",
    tagline: "古城把玉龙写成背景",
    excerpt:
      "石板、水渠、被改写成酒吧的院子。丽江要早起，才还是一座城。",
    body: "丽江的夜容易被歌声占据。清晨的石板还是湿的，水渠还听得见。束河比大研更像可以住的村子。去丽江，把酒吧街当成路过，把玉龙当成天气，把一盘乳扇当成早餐。",
    image: "/images/lijiang.jpg",
    highlights: [
      {
        title: "清晨大研",
        text: "八点前的巷子，还没有被扩音器打开。",
      },
      {
        title: "束河",
        text: "更适合住一晚的尺度。",
      },
      {
        title: "山",
        text: "玉龙在云开时出现，不要为它改所有日程。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "大研",
        text: "早走巷，午后出主街，夜早睡。",
      },
      {
        day: "第二日",
        title: "束河",
        text: "换到束河住，把节奏放慢。",
      },
      {
        day: "第三日",
        title: "山或湖",
        text: "天气好则看山，否则泸沽太远，选近处的田。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "三至五月，或九至十一月" },
      { label: "如何抵达", value: "三义机场，昆明高铁也可接" },
      { label: "建议停留", value: "三日" },
      { label: "节奏", value: "不住主街中心，早起是关键" }
    ],
  },
  {
    slug: "guilin",
    nameZh: "桂林",
    nameEn: "Guilin",
    province: "广西",
    region: "southwest",
    seasons: ["spring", "autumn", "winter"],
    days: "3–5 日",
    intensity: "轻",
    featured: true,
    tagline: "水把山写成倒影",
    excerpt:
      "漓江、米粉、一座被喀斯特围住的城。竹筏比游轮更接近它的脾气。",
    body: "桂林是城，阳朔是它南面的句子。两江四湖把喀斯特放进城里的夜。真正动人的是兴坪到杨堤那段江面。去桂林，吃一碗米粉，走一段江，把西街的喧闹留给路过。",
    image: "/images/guilin.jpg",
    highlights: [
      {
        title: "漓江",
        text: "杨堤至兴坪，山从水里长出来。",
      },
      {
        title: "米粉",
        text: "城里每一碗都在争论正宗，跟着香走即可。",
      },
      {
        title: "遇龙河",
        text: "骑行比游船更日常。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "城里",
        text: "两江四湖或象山，一碗米粉。",
      },
      {
        day: "第二日",
        title: "江",
        text: "竹筏或骑行，夜宿阳朔但不困在西街。",
      },
      {
        day: "第三日",
        title: "田",
        text: "遇龙河沿岸，把速度降到水牛。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "四至十一月，冬日山形更清楚" },
      { label: "如何抵达", value: "两江机场 / 桂林站" },
      { label: "建议停留", value: "三日含阳朔" },
      { label: "节奏", value: "江上的那天不要再排夜游" }
    ],
  },
  {
    slug: "zhangjiajie",
    nameZh: "张家界",
    nameEn: "Zhangjiajie",
    province: "湖南",
    region: "southwest",
    seasons: ["spring", "autumn"],
    days: "3–4 日",
    intensity: "中",
    tagline: "石峰从云里长出来",
    excerpt:
      "一座以山为姓的城。武陵源在门外，米粉与夜在城里。",
    body: "张家界是湘西的入口。峰林在园里，城在谷底。去张家界，把园的日程写松：云海来不来，由山自己决定。晚上回到武陵源或市区，一碗米粉把膝盖还给人。",
    image: "/images/zhangjiajie.jpg",
    highlights: [
      {
        title: "武陵源",
        text: "同一座山，栈道、谷底、观景台三种高度。",
      },
      {
        title: "城里",
        text: "把夜留给馆子，而不是园里的灯。",
      },
      {
        title: "云",
        text: "过夜的人，才有机会看见峰林从墨里洗出来。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "上山",
        text: "入园选一条线走完，不住赶。",
      },
      {
        day: "第二日",
        title: "谷底",
        text: "金鞭溪把石峰从根部读一遍。",
      },
      {
        day: "第三日",
        title: "出园",
        text: "天门山可选。否则把上午留给一座安静的馆。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "四月雾薄，九至十一月最干净" },
      { label: "如何抵达", value: "荷花机场 / 张家界西" },
      { label: "建议停留", value: "园内三日" },
      { label: "节奏", value: "门票与交通都要提前，脚步仍需慢" }
    ],
  },
  {
    slug: "xian",
    nameZh: "西安",
    nameEn: "Xi'an",
    province: "陕西",
    region: "northwest",
    seasons: ["spring", "autumn"],
    days: "3–4 日",
    intensity: "中",
    featured: true,
    tagline: "城墙把长安还围着",
    excerpt:
      "面、城砖、地下还有一支军队。西安把几个朝代叠在同一碗汤里。",
    body: "西安是为胃和脚准备的古都。城墙上可以骑行，回民街的主路是封面，侧巷才是正文。兵马俑在城外，碑林在城里。去西安，先承认自己会被一碗泡馍说服，再决定要不要去临潼。",
    image: "/images/xian.jpg",
    highlights: [
      {
        title: "城墙",
        text: "黄昏骑一圈，垛口把灯写成重复的字。",
      },
      {
        title: "面",
        text: "泡馍、肉夹馍、葫芦头，选一种认真吃。",
      },
      {
        title: "碑林",
        text: "把书法从帖变成可以绕行的森林。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "城里",
        text: "城墙、碑林、一碗面。回民街只穿侧巷。",
      },
      {
        day: "第二日",
        title: "城外",
        text: "临潼半日，回来仍要吃一顿。",
      },
      {
        day: "第三日",
        title: "再走一走",
        text: "书院门或一条没有出现在攻略里的街。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "四至五月，或十至十一月" },
      { label: "如何抵达", value: "咸阳机场 / 西安北" },
      { label: "建议停留", value: "三日" },
      { label: "节奏", value: "俑坑与城墙不要排在同一天" }
    ],
  },
  {
    slug: "dunhuang",
    nameZh: "敦煌",
    nameEn: "Dunhuang",
    province: "甘肃",
    region: "northwest",
    seasons: ["autumn", "spring"],
    days: "2–4 日",
    intensity: "中",
    tagline: "风把时间吹薄了",
    excerpt:
      "洞窟、沙丘、一座还停在河西走廊上的城。",
    body: "敦煌很小，风很大。白天进窟，黄昏上沙。城里的夜空比灯密。去敦煌，把数字展示中心当成预习，把莫高窟当成无法拍照的记忆，把月牙泉当成一个愿意停下来的理由。",
    image: "/images/dunhuang.jpg",
    highlights: [
      {
        title: "窟",
        text: "不让拍照是对的。眼睛被迫工作。",
      },
      {
        title: "沙",
        text: "鸣沙山的黄昏把人变成一个点。",
      },
      {
        title: "城",
        text: "一夜的星，比任何夜市更值得。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "窟",
        text: "上午数字中心，下午实地。",
      },
      {
        day: "第二日",
        title: "沙与泉",
        text: "傍晚鸣沙山，夜里早睡，星会来。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "五月，或九至十月，避开盛夏" },
      { label: "如何抵达", value: "敦煌机场 / 柳园接驳" },
      { label: "建议停留", value: "两日紧，三日松" },
      { label: "节奏", value: "洞窟预约是第一件事" }
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
    tagline: "先学会走得慢",
    excerpt:
      "光更硬，空气更薄。拉萨要求预约，也要求耐心。",
    body: "拉萨不是被看完的，是被走慢的。八廓的转经与布达拉的轮廓是这座城的呼吸。去拉萨，头两天不要安排高。酥油茶、一圈转经、一场黄昏。高原会自己决定你能不能再往外走。",
    image: "/images/lhasa.jpg",
    highlights: [
      {
        title: "八廓",
        text: "顺时针走，把速度交给转经的人。",
      },
      {
        title: "布达拉",
        text: "预约，慢上。远看有时比进去更完整。",
      },
      {
        title: "光",
        text: "下午的影子很长，这是拉萨的钟。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "适应",
        text: "不爬高，喝水，转一圈八廓。",
      },
      {
        day: "第二日",
        title: "宫",
        text: "布达拉或大昭，只排一件。",
      },
      {
        day: "第三日",
        title: "再慢一天",
        text: "若头不疼，再考虑外线。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "六至九月，十月天高" },
      { label: "如何抵达", value: "贡嘎机场，进藏需合规手续" },
      { label: "建议停留", value: "五日含适应" },
      { label: "节奏", value: "头两日不做剧烈行程" }
    ],
  },
  {
    slug: "harbin",
    nameZh: "哈尔滨",
    nameEn: "Harbin",
    province: "黑龙江",
    region: "north",
    seasons: ["winter"],
    days: "3–4 日",
    intensity: "中",
    featured: true,
    tagline: "冬天把城市变成冰",
    excerpt:
      "面包、雪、被俄语写过的街。哈尔滨是为严寒准备的节日。",
    body: "哈尔滨的正季是冬。冰灯把松花江岸变成可以走的晶体，中央大街的石板被雪填平。去哈尔滨，要一件真正的羽绒服，一上面包，一场在零下仍愿意出门的夜。其余季节，它是一座安静的北方。",
    image: "/images/harbin.jpg",
    highlights: [
      {
        title: "冰",
        text: "冰雪大世界或江上的晶体，选一场夜。",
      },
      {
        title: "中央大街",
        text: "石板与面包，把俄式的壳走成散步。",
      },
      {
        title: "雪",
        text: "圣索菲亚的黄昏，雪比灯更亮。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "街",
        text: "中央大街到教堂，夜上面包。",
      },
      {
        day: "第二日",
        title: "冰",
        text: "把晚上交给冰灯，白天少排。",
      },
      {
        day: "第三日",
        title: "江",
        text: "松花江岸走一段，把冻疮留给回忆。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "十二月至二月" },
      { label: "如何抵达", value: "哈尔滨太平机场 / 哈尔滨站" },
      { label: "建议停留", value: "三日" },
      { label: "节奏", value: "夜活动，昼补眠，注意保暖" }
    ],
  },
  {
    slug: "guangzhou",
    nameZh: "广州",
    nameEn: "Guangzhou",
    province: "广东",
    region: "southwest",
    seasons: ["autumn", "winter", "spring"],
    days: "3–4 日",
    intensity: "轻",
    tagline: "早茶是一种制度",
    excerpt:
      "珠江、骑楼、一笼点心。广州把南中国的密度煮进一壶茶里。",
    body: "广州要从早茶开始。点单是社交，虾饺是语法。沿江的骑楼与沙面把几种世纪叠在一起。去广州，不要只为了一座塔——把两顿早茶写进日程，比任何夜游更接近这座城。",
    image: "/images/guangzhou.jpg",
    highlights: [
      {
        title: "早茶",
        text: "老字号要早，或找一家没有排队的街边。",
      },
      {
        title: "沿江",
        text: "沙面与骑楼，把热风走成散步。",
      },
      {
        title: "夜",
        text: "珠江的船是封面，小馆才是正文。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "茶与江",
        text: "早茶，下午沙面，夜沿江。",
      },
      {
        day: "第二日",
        title: "城",
        text: "永庆坊之外找一条更日常的骑楼。",
      },
      {
        day: "第三日",
        title: "再一顿早茶",
        text: "换一家，比较两种虾饺，这就是广州。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "十一至四月，避开湿热盛夏" },
      { label: "如何抵达", value: "白云机场 / 广州南" },
      { label: "建议停留", value: "三日" },
      { label: "节奏", value: "把最好的胃口留给早上" }
    ],
  },
  {
    slug: "sanya",
    nameZh: "三亚",
    nameEn: "Sanya",
    province: "海南",
    region: "southwest",
    seasons: ["winter", "spring"],
    days: "4–6 日",
    intensity: "轻",
    tagline: "冬天的海",
    excerpt:
      "沙滩、礁、被盐风吹开的椰子。三亚之外还有更安静的湾。",
    body: "三亚是海南的南端，也是冬天的出口。亚龙湾与天涯是封面，落笔洞之外的小湾更适合把书放下。去三亚，选一段岸住下来，少换酒店，把海看成日程本身。",
    image: "/images/sanya.jpg",
    highlights: [
      {
        title: "岸",
        text: "选一个湾住满，比每天换沙滩更值。",
      },
      {
        title: "早",
        text: "七点的海还没有被音响打开。",
      },
      {
        title: "城外",
        text: "往西或往山，人会少下来。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "抵达",
        text: "入住一处岸，下午只走路。",
      },
      {
        day: "第二日",
        title: "海",
        text: "游泳或什么都不做。",
      },
      {
        day: "第三日",
        title: "再往外",
        text: "一座更安静的湾或一座山。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "十一至四月" },
      { label: "如何抵达", value: "凤凰机场" },
      { label: "建议停留", value: "四日以上才像度假" },
      { label: "节奏", value: "少排景点，多留在同一片水" }
    ],
  },
  {
    slug: "wuhan",
    nameZh: "武汉",
    nameEn: "Wuhan",
    province: "湖北",
    region: "jiangnan",
    seasons: ["spring", "autumn"],
    days: "2–4 日",
    intensity: "中",
    tagline: "两江在这里汇成一座城",
    excerpt:
      "热干面、桥、被长江撑开的三镇。武汉是中国的十字路口。",
    body: "武汉被两江分成三镇，桥把它们重新缝上。去武汉，一碗热干面是入城礼，黄鹤楼是远望，江滩是散步。户部巷是封面，老城区的小馆更准。",
    image: "/images/wuhan.jpg",
    highlights: [
      {
        title: "面",
        text: "早餐的热干面，芝麻酱要够。",
      },
      {
        title: "江",
        text: "一座桥、一段江滩，看水把城分开。",
      },
      {
        title: "楼",
        text: "黄鹤楼看一眼即可，江面比楼更长。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "过江",
        text: "一碗面，一座桥，夜江滩。",
      },
      {
        day: "第二日",
        title: "一镇",
        text: "选武昌或汉口走透，不要三镇都赶。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "三至五月，或九至十一月" },
      { label: "如何抵达", value: "天河机场 / 武汉站" },
      { label: "建议停留", value: "两日骨架，四日才闲" },
      { label: "节奏", value: "热干面必须是早餐" }
    ],
  },
  {
    slug: "kashgar",
    nameZh: "喀什",
    nameEn: "Kashgar",
    province: "新疆",
    region: "northwest",
    seasons: ["autumn", "spring"],
    days: "3–5 日",
    intensity: "中",
    featured: true,
    tagline: "一座还停在路上的城",
    excerpt:
      "土巷、巴扎、烤馕的香。喀什把丝绸之路写成可以迷路的街区。",
    body: "喀什是南疆的门。老城的土墙把声音吸住，巴扎把葡萄干和铜器摊在同一块布上。去喀什，把一天交给没有地图的巷子，把一顿交给抓饭，把黄昏交给土巷的金。",
    image: "/images/kashgar.jpg",
    highlights: [
      {
        title: "老城",
        text: "土巷比任何博物馆更完整。",
      },
      {
        title: "巴扎",
        text: "跟着香走，买一块馕当午餐。",
      },
      {
        title: "黄昏",
        text: "墙的颜色只在那一小时出现。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "巷",
        text: "老城迷路，夜一盘抓饭。",
      },
      {
        day: "第二日",
        title: "巴扎",
        text: "把上午交给市场，下午再走一条巷。",
      },
      {
        day: "第三日",
        title: "再停一天",
        text: "喀什不适合赶。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "九至十月，或四至五月" },
      { label: "如何抵达", value: "喀什机场，乌鲁木齐转机" },
      { label: "建议停留", value: "三日起" },
      { label: "节奏", value: "防晒、尊重当地习俗，少赶景点" }
    ],
  },
  {
    slug: "hongkong",
    nameZh: "香港",
    nameEn: "Hong Kong",
    province: "香港",
    region: "southwest",
    seasons: ["autumn", "winter", "spring"],
    days: "3–5 日",
    intensity: "中",
    tagline: "山与城叠在同一条天际线上",
    excerpt:
      "维多利亚港的密度。一碗车仔面，一场从山上看到的夜。",
    body: "香港是垂直的。山在城的肩膀上，海在楼下。去香港，把一天给港岛的坡，一天给九龙的胃，一场黄昏给山顶或太平山以外的岭。茶餐厅比任何夜景都更接近日常。",
    image: "/images/hongkong.jpg",
    highlights: [
      {
        title: "港",
        text: "天星小轮把两岸的密度送到风里。",
      },
      {
        title: "坡与山",
        text: "一条可以走上去的岭，比观景台更真。",
      },
      {
        title: "茶餐",
        text: "一碗面、一杯奶茶，把速度降下来。",
      }
    ],
    itinerary: [
      {
        day: "第一日",
        title: "港岛",
        text: "中环到山，夜看一次海。",
      },
      {
        day: "第二日",
        title: "九龙",
        text: "胃交给街头，下午一座博物馆或庙。",
      },
      {
        day: "第三日",
        title: "再往外",
        text: "一座离岛或一条没有电梯的坡。",
      }
    ],
    practical: [
      { label: "最佳季节", value: "十至十二月最干爽" },
      { label: "如何抵达", value: "香港国际机场，附图可点入" },
      { label: "建议停留", value: "三日起" },
      { label: "节奏", value: "少排网红店，多走坡" }
    ],
  }
];

export const regions: { id: RegionId; nameZh: string; nameEn: string; blurb: string }[] = [
  { id: "north", nameZh: "华北", nameEn: "North", blurb: "都城、海与冰。风把声音削薄。" },
  { id: "jiangnan", nameZh: "江南", nameEn: "Jiangnan", blurb: "湖、园、一碗面。水把城写软。" },
  { id: "southwest", nameZh: "西南", nameEn: "Southwest", blurb: "山城、喀斯特、一座把闲练成制度的盆地。" },
  { id: "northwest", nameZh: "西北", nameEn: "Northwest", blurb: "城墙、洞窟、还停在路上的巷子。" },
  { id: "plateau", nameZh: "青藏", nameEn: "Plateau", blurb: "光更硬，脚步必须更慢。" },
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
    blurb: "杭州的柳、苏州的园、昆明的风。江南和西南在这一季把自己写得最满。",
    image: "/images/hangzhou.jpg",
  },
  {
    id: "summer",
    nameZh: "夏",
    nameEn: "Summer",
    months: "六 — 八 月",
    blurb: "青岛的海、拉萨的光、哈尔滨之外的北方短暂地柔软。",
    image: "/images/lhasa.jpg",
  },
  {
    id: "autumn",
    nameZh: "秋",
    nameEn: "Autumn",
    months: "九 — 十一 月",
    blurb: "北京的银杏、喀什的巷、成都的闲。这是把城市走松的三个月。",
    image: "/images/beijing.jpg",
  },
  {
    id: "winter",
    nameZh: "冬",
    nameEn: "Winter",
    months: "十二 — 二 月",
    blurb: "哈尔滨的冰、三亚的海、敦煌的空。人少下来，城才露出骨头。",
    image: "/images/harbin.jpg",
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
