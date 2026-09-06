import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    slug: "tea",
    nameZh: "茶事",
    nameEn: "Tea",
    image: "/images/tea.jpg",
    related: ["hangzhou", "suzhou"],
    excerpt: "一盏龙井，把一座山收进杯子里。",
    body: "中国的茶不是饮料，是一套关于水、火、时间的礼仪。杭州狮峰的明前龙井，叶形扁平，香气像刚被太阳晒过的豆子。在苏州，碧螺春把果香藏进绒毛。不必追逐稀有的年份——找一位愿意把第一泡给你的人，看汤色从浅到深，已经足够。",
  },
  {
    slug: "sichuan",
    nameZh: "川味",
    nameEn: "Sichuan",
    image: "/images/sichuan.jpg",
    related: ["chengdu", "chongqing"],
    excerpt: "花椒不是辣，是一种让舌头睁开的麻。",
    body: "去四川，先承认自己会被红油说服。火锅是社交，冒菜是一个人的火锅，担担面是可以走在路上的记忆。九寨归来经过成都，把一天交给宽窄巷子之外的苍蝇馆子：蒜泥白肉、红油抄手、一碗冰粉。辣只是入口，回甘才是目的。",
  },
  {
    slug: "night-market",
    nameZh: "夜市",
    nameEn: "Night Market",
    image: "/images/night-market.jpg",
    related: ["xian", "lijiang"],
    excerpt: "灯亮起来，城才把胃打开。",
    body: "西安的夜从一串烤肉和一碗胡辣汤开始。丽江的夜容易被歌声占据，但在束河，还可以找到一盘乳扇被烤到起泡的声音。夜市是中国旅游最不需要攻略的部分：跟着香走，坐在最挤的那一桌旁边。",
  },
  {
    slug: "calligraphy",
    nameZh: "笔墨",
    nameEn: "Ink",
    image: "/images/calligraphy.jpg",
    related: ["xian", "suzhou", "hangzhou"],
    excerpt: "墨在纸上的速度，决定一座城被记住的方式。",
    body: "西安碑林把书法从帖变成可以绕行的森林。苏州的园把同一支笔用石头写了一遍。若有半日空闲，找一处可以试笔的工作室：不必写得好，只要听见毛笔与纸的摩擦——那是比任何讲解更准确的中国。",
  },
  {
    slug: "garden",
    nameZh: "园冶",
    nameEn: "Gardens",
    image: "/images/suzhou.jpg",
    related: ["suzhou", "hangzhou"],
    excerpt: "一扇月洞门，把世界缩小到可以坐下的尺寸。",
    body: "中国园林是一种观看的技术。漏窗先让你看见一半，廊再把你的脚步折返，石让你以为山就在池对岸。苏州把这门技术练到极致，杭州则把园的围墙拆掉，让一座湖成为所有人的园。",
  },
  {
    slug: "silk-road",
    nameZh: "丝路",
    nameEn: "Silk Road",
    image: "/images/dunhuang.jpg",
    related: ["dunhuang", "xian"],
    excerpt: "从长安出发的路，在敦煌还没有走完。",
    body: "兵马俑是出发之前的军阵，莫高窟是路上的经卷。两者中间隔着一千年的风。走这段路不必真的骑骆驼——但需要把日程写得像旅行，而不是像清单：给洞窟留出安静，给沙丘留出黄昏。",
  },
];

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}
