export type Copy = {
  nav: { to: string; zh: string; en: string }[];
  brand: string;
  brandEn: string;
  slogan: string;
  sloganEn: string;
  menuOpen: string;
  menuClose: string;
  back: string;
  retry: string;
  mapLoading: string;
  mapError: string;
  travel: string;
  rail: string;
  atlas: string;
  atlasTitle: string;
  atlasLine: string;
  railLine: string;
  provinces: string;
  cities: string;
  belts: string;
  belt: string;
  twentyTwo: string;
  prefectures: string;
  destsHere: string;
  destsNearby: string;
  destsEmpty: string;
  readMore: string;
  trip: string;
  clear: string;
  savedCount: (n: number) => string;
  days: (n: number) => string;
  tripHint: string;
  tripMore: (n: number) => string;
  tripFull: string;
  intensity: string;
  intensityVal: Record<string, string>;
  saveAdd: string;
  saveOn: string;
  saveOff: string;
  saveRemove: (name: string) => string;
  hkMacao: string;
  hkMacaoShort: string;
  footerWalk: string;
  footerRead: string;
  footerNote: string;
  footerBlurb: string;
  footerAbout: string;
  footerAboutLink: string;
  footerColophon: string;
  destTitle: string;
  destLead: string;
  destSearch: string;
  destSearchPh: string;
  destCount: (n: number) => string;
  destEmpty: string;
  destAll: string;
  destAllBelts: string;
  destAllSeasons: string;
  destClear: string;
  destWantRoad: string;
  destGoTrip: string;
  destMissing: string;
  destBack: string;
  destFurther: string;
  destBelt: string;
  highlights: string;
  skeleton: string;
  practical: string;
  related: string;
  alsoRead: string;
  expTitle: string;
  expLead: string;
  relatedCities: string;
  seasonTitle: string;
  seasonLead: string;
  seasonOnly: string;
  journalTitle: string;
  journalLead: string;
  journalBack: string;
  journalMissing: string;
  journalPlace: string;
  journalContinue: string;
  plannerTitle: string;
  plannerLead: string;
  plannerPick: string;
  plannerPicked: (n: number) => string;
  plannerEmpty: string;
  plannerEmptyAfter: string;
  plannerGoDest: string;
  plannerNotes: string;
  plannerNotesPh: string;
  plannerDay: (n: number) => string;
  plannerDaysLabel: string;
  plannerTransit: (from: string, to: string, province: string) => string;
  plannerTransitLabel: string;
  plannerOnward: (name: string) => string;
  plannerSlow: (name: string) => string;
  plannerFallback: (name: string) => string;
  aboutTitle: string;
  aboutLead: string;
  aboutP1: string;
  aboutP2: string;
  aboutDest: string;
  aboutJournal: string;
  notFound: string;
  notFoundSub: string;
  notFoundHome: string;
  mapAria: string;
};

const nav = [
  { to: "/", zh: "图幅", en: "Atlas" },
  { to: "/destinations", zh: "目的地", en: "Places" },
  { to: "/experiences", zh: "体验", en: "Craft" },
  { to: "/seasons", zh: "四季", en: "Seasons" },
  { to: "/journal", zh: "手记", en: "Journal" },
  { to: "/planner", zh: "行程", en: "Trip" },
] as const;

export const copy: Record<"zh" | "en", Copy> = {
  zh: {
    nav: nav.map((n) => ({ to: n.to, zh: n.zh, en: n.en })),
    brand: "华旅纪",
    brandEn: "Sino Atlas",
    slogan: "万里河山 · 一程烟火",
    sloganEn: "A continent, still being written",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    back: "返回总览",
    retry: "重试",
    mapLoading: "图幅载入中",
    mapError: "图幅未能载入",
    travel: "游历",
    rail: "高铁",
    atlas: "Atlas",
    atlasTitle: "图幅",
    atlasLine: "一省一气韵，点开便见。",
    railLine: "铁轨连山河。",
    provinces: "省区",
    cities: "城市",
    belts: "地理带",
    belt: "地理带",
    twentyTwo: "二十二座",
    prefectures: "地级市 · 州",
    destsHere: "本省目的地",
    destsNearby: "同带可走",
    destsEmpty: "本省尚未单独收录。可从同带目的地开始，或继续点选地图上的朱砂圆点。",
    readMore: "阅读全文",
    trip: "行程",
    clear: "清空",
    savedCount: (n) => `已选 ${n} 处 · 虚线按加入顺序连起`,
    days: (n) => `${n} 日`,
    tripHint: "点选朱砂圆点或下方目的地，加入行程。地图会用虚线把它们连起来。",
    tripMore: (n) => `另有 ${n} 日写在完整行程里。`,
    tripFull: "完整行程",
    intensity: "强度",
    intensityVal: { 轻: "轻", 中: "中", 深: "深" },
    saveAdd: "加入行程",
    saveOn: "已在行程",
    saveOff: "移出行程",
    saveRemove: (name) => `移出 ${name}`,
    hkMacao: "港澳附图",
    hkMacaoShort: "港澳",
    footerWalk: "走",
    footerRead: "读",
    footerNote: "记",
    footerBlurb:
      "一份关于中国风景的编辑手记。不是清单，是四季更迭的气味，是石阶被脚步磨亮的声音。",
    footerAbout: "华旅纪是一份独立编辑的旅行志。收录二十二座城市，四时，与可以放进行李的行程。",
    footerAboutLink: "关于",
    footerColophon: "华旅纪 · 中国风景编辑手记",
    destTitle: "目的地",
    destLead:
      "二十二座被认真写下的城市。从华北的都城到青藏的光，按地理、按季节，或按你此刻想起的那个字。",
    destSearch: "搜索目的地",
    destSearchPh: "搜索名字、省份或一句印象",
    destCount: (n) => `${n} 处风景`,
    destEmpty: "没有相符的目的地。换一个字，或",
    destAll: "看全部",
    destAllBelts: "全部地带",
    destAllSeasons: "全部季节",
    destClear: "清除筛选",
    destWantRoad: "想把它们排成一条路？",
    destGoTrip: "去编排行程",
    destMissing: "这座山还没有被写下",
    destBack: "目的地",
    destFurther: "延伸阅读：",
    destBelt: "地带",
    highlights: "三处",
    skeleton: "三日骨架",
    practical: "行前",
    related: "附近可走",
    alsoRead: "手记",
    expTitle: "体验",
    expLead: "风景之外，中国还有可以被喝、被吃、被写、被走进去的部分。",
    relatedCities: "相关城市",
    seasonTitle: "四季",
    seasonLead: "中国太大，不能用同一个月份去走。春天把江南写湿，秋天把西部写亮。",
    seasonOnly: "只看这一季",
    journalTitle: "手记",
    journalLead: "比攻略更慢的写法。关于云海、一碗面、一条江，和风把时间吹薄的西部。",
    journalBack: "手记",
    journalMissing: "这篇手记还没有写完",
    journalPlace: "文中的地方",
    journalContinue: "继续读",
    plannerTitle: "行程",
    plannerLead:
      "点选想去的地方，选择天数。日程按华北、江南、西南、西北、青藏的地理顺序排开，跨地带会插入一天转场。",
    plannerPick: "选目的地",
    plannerPicked: (n) => `已选 ${n} 处。建议一次不超过四站。`,
    plannerEmpty: "还没有目的地。从左侧点选，或先去",
    plannerEmptyAfter: "里加入。",
    plannerGoDest: "目的地",
    plannerNotes: "给自己的备注",
    plannerNotesPh: "想吃的面、必须看的日出、需要预留的预约……",
    plannerDay: (n) => `第 ${n} 日`,
    plannerDaysLabel: "天数",
    plannerTransit: (from, to, province) =>
      `从${from}前往${province}。把这一日写松，把身体交给交通。`,
    plannerTransitLabel: "转场",
    plannerOnward: (name) => `转赴 ${name}`,
    plannerSlow: (name) => `${name} · 慢走`,
    plannerFallback: (name) => `把这一日留给${name}没有写进攻略的角落，或补一场预约。`,
    aboutTitle: "关于华旅纪",
    aboutLead: "华旅纪是一份独立编辑的中国旅行志。它不试图穷尽，只认真写下二十二座城市。",
    aboutP1:
      "我们相信旅行的密度来自限制：季节要对，地带要连得上，日程要留出迷路的余地。每一处目的地都附有可走的三日骨架、必看的三处，以及一句不愿被扩音器说完的印象。",
    aboutP2:
      "行程页会把你点选的地方，按华北、江南、西南、西北、青藏的顺序排开。数据存在这台设备上，不需要账号。",
    aboutDest: "去看目的地",
    aboutJournal: "去读手记",
    notFound: "这一页还没有被写下",
    notFoundSub: "也许路标被风吹走了。",
    notFoundHome: "回到华旅纪",
    mapAria: "中国旅游图幅。点省份进入，点朱砂打开城市，滚轮缩放，点海面返回全国。",
  },
  en: {
    nav: nav.map((n) => ({ to: n.to, zh: n.zh, en: n.en })),
    brand: "华旅纪",
    brandEn: "Sino Atlas",
    slogan: "万里河山 · 一程烟火",
    sloganEn: "A continent, still being written",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    back: "Back to the atlas",
    retry: "Try again",
    mapLoading: "Unrolling the atlas",
    mapError: "The atlas would not open",
    travel: "Wander",
    rail: "Rail",
    atlas: "Atlas",
    atlasTitle: "Atlas",
    atlasLine: "Each province keeps a climate of its own — touch, and it unfolds.",
    railLine: "Rails bind the mountains to the rivers.",
    provinces: "Provinces",
    cities: "Cities",
    belts: "Belts",
    belt: "Belts",
    twentyTwo: "Twenty-two cities",
    prefectures: "Prefectures",
    destsHere: "Cities in this province",
    destsNearby: "Along this belt",
    destsEmpty:
      "This province is not yet given a city of its own. Begin with the belt, or the cinnabar dots on the map.",
    readMore: "Read on",
    trip: "Itinerary",
    clear: "Clear",
    savedCount: (n) =>
      n === 1
        ? "One place chosen · dashed line follows the order you added"
        : `${n} places chosen · dashed line follows the order you added`,
    days: (n) => `${n} days`,
    tripHint:
      "Touch a cinnabar dot, or a city below, to keep it. The map will thread them in the order they were chosen.",
    tripMore: (n) => `${n} more days live on the full itinerary.`,
    tripFull: "Full itinerary",
    intensity: "Pace",
    intensityVal: { 轻: "Light", 中: "Measured", 深: "Deep" },
    saveAdd: "Keep this city",
    saveOn: "Kept",
    saveOff: "Remove",
    saveRemove: (name) => `Remove ${name}`,
    hkMacao: "Hong Kong & Macao",
    hkMacaoShort: "HK · Macao",
    footerWalk: "Walk",
    footerRead: "Read",
    footerNote: "Keep",
    footerBlurb:
      "An editor’s notebook of Chinese landscape. Not a checklist — the smell of a season turning, stone steps worn bright by feet.",
    footerAbout:
      "Sino Atlas is independently edited. Twenty-two cities, four seasons, and itineraries that fit a suitcase.",
    footerAboutLink: "About",
    footerColophon: "Sino Atlas · notes on a still-writing country",
    destTitle: "Places",
    destLead:
      "Twenty-two cities written with care. From the northern capitals to the light of the plateau — by geography, by season, or by the word you happen to remember.",
    destSearch: "Search cities",
    destSearchPh: "A name, a province, an impression",
    destCount: (n) => (n === 1 ? "1 place" : `${n} places`),
    destEmpty: "Nothing matches. Try another word, or",
    destAll: "see them all",
    destAllBelts: "All belts",
    destAllSeasons: "All seasons",
    destClear: "clear filters",
    destWantRoad: "Want them as a road?",
    destGoTrip: "Compose a trip",
    destMissing: "This mountain has not yet been written",
    destBack: "Places",
    destFurther: "Further reading:",
    destBelt: "Belt",
    highlights: "Three things",
    skeleton: "Three-day spine",
    practical: "Before you go",
    related: "Nearby",
    alsoRead: "Journal",
    expTitle: "Craft",
    expLead:
      "Beyond the view, China can be drunk, eaten, written, and walked into.",
    relatedCities: "Cities that hold this",
    seasonTitle: "Seasons",
    seasonLead:
      "China is too large for a single month. Spring wets Jiangnan; autumn lights the west.",
    seasonOnly: "Only this season",
    journalTitle: "Journal",
    journalLead:
      "Slower than a guidebook. Of cloud-seas, a bowl of noodles, a river, and a west where wind thins time.",
    journalBack: "Journal",
    journalMissing: "This note is still being written",
    journalPlace: "A place in this note",
    journalContinue: "Read on",
    plannerTitle: "Itinerary",
    plannerLead:
      "Choose cities, choose days. The calendar is laid north to south, east to west; a transit day is left when you cross a belt.",
    plannerPick: "Choose cities",
    plannerPicked: (n) =>
      `${n} chosen. Four stops is plenty for one sitting.`,
    plannerEmpty: "Nothing kept yet. Pick from the left, or visit",
    plannerEmptyAfter: ".",
    plannerGoDest: "Places",
    plannerNotes: "A note to yourself",
    plannerNotesPh:
      "The noodles you mean to eat, a sunrise you will not miss, a reservation still to make…",
    plannerDay: (n) => `Day ${n}`,
    plannerDaysLabel: "Days",
    plannerTransit: (from, to, province) =>
      `From ${from} into ${province}. Keep the day loose; give the body to the journey.`,
    plannerTransitLabel: "Transit",
    plannerOnward: (name) => `Onward to ${name}`,
    plannerSlow: (name) => `${name} · at a walk`,
    plannerFallback: (name) =>
      `Leave this day to the unlisted corners of ${name}, or to an appointment you still owe the city.`,
    aboutTitle: "About Sino Atlas",
    aboutLead:
      "Sino Atlas is an independently edited notebook of travel in China. It does not try to be complete — only to write twenty-two cities with care.",
    aboutP1:
      "We believe density comes from limits: the season must be right, the belt must connect, the days must leave room to be lost. Each city carries a three-day spine, three things worth seeing, and a sentence we would not let a loudspeaker finish.",
    aboutP2:
      "The itinerary page lays your choices along North, Jiangnan, Southwest, Northwest, and the Plateau. It lives on this device. No account is required.",
    aboutDest: "See the cities",
    aboutJournal: "Read the journal",
    notFound: "This page has not been written",
    notFoundSub: "Perhaps the signpost was taken by the wind.",
    notFoundHome: "Return to Sino Atlas",
    mapAria:
      "An atlas of travel in China. Touch a province to enter, a cinnabar dot for a city; scroll to zoom, touch the sea to return.",
  },
};
