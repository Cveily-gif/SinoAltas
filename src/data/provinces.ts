import type { RegionId } from "./types";
import { destinations } from "./destinations";
import { destGeo } from "./dest-geo";

export type ProvinceMeta = {
  id: string;
  short: string;
  region: RegionId;
  blurb: string;
};

export const provinceMeta: Record<string, Omit<ProvinceMeta, "id">> = {
  "11": { short: "北京", region: "north", blurb: "中轴线、宫殿与城墙。把一座都城当成可以走完的礼仪。" },
  "12": { short: "天津", region: "north", blurb: "海河与租界的折中。从北京顺路南下的另一张北方面孔。" },
  "13": { short: "河北", region: "north", blurb: "长城最能走的段落在这里。山脊比城楼更值得被记住。" },
  "14": { short: "山西", region: "north", blurb: "寺庙与窑洞。平遥、五台把时间叠得很厚。" },
  "15": { short: "内蒙古", region: "north", blurb: "草原把地平线放得很低。夏季是唯一需要认真挑选的季节。" },
  "21": { short: "辽宁", region: "north", blurb: "滨海与工业遗迹并存。沈阳故宫是另一座较小的紫禁城。" },
  "22": { short: "吉林", region: "north", blurb: "长白山的天池只在云开时出现。雾比攻略更有主权。" },
  "23": { short: "黑龙江", region: "north", blurb: "冬天把城市变成冰。哈尔滨是为严寒准备的节日。" },
  "31": { short: "上海", region: "jiangnan", blurb: "外滩的天际线是中国进入二十世纪的切口。夜比昼更像上海。" },
  "32": { short: "江苏", region: "jiangnan", blurb: "园、水、运河。苏州把一座山放进一亩池塘。" },
  "33": { short: "浙江", region: "jiangnan", blurb: "西湖被写了千年。龙井与灵隐把湖从拥挤里救出来。" },
  "34": { short: "安徽", region: "jiangnan", blurb: "黄山过夜，徽州醒来。云海只对住在山上的人出现。" },
  "35": { short: "福建", region: "jiangnan", blurb: "土楼、海岸、一碗面线。厦门把海风写进巷子。" },
  "36": { short: "江西", region: "jiangnan", blurb: "庐山与景德镇。山和瓷，都需要把脚步放慢。" },
  "37": { short: "山东", region: "north", blurb: "泰山把高度写成一种朝圣。青岛把海交给红瓦与风。" },
  "41": { short: "河南", region: "north", blurb: "洛阳与开封把王朝留在中原。少林只是其中一个注脚。" },
  "42": { short: "湖北", region: "jiangnan", blurb: "长江在这里变宽。神农架把雾留给愿意走林道的人。" },
  "43": { short: "湖南", region: "southwest", blurb: "张家界的石峰从云里长出来。湘西比门票更值得迷路。" },
  "44": { short: "广东", region: "southwest", blurb: "早茶是一种制度。海岸与城，都走得很快。" },
  "45": { short: "广西", region: "southwest", blurb: "漓江把山写成倒影。竹筏比游轮更接近江的脾气。" },
  "46": { short: "海南", region: "southwest", blurb: "冬季的海。三亚之外还有更安静的海湾。" },
  "50": { short: "重庆", region: "southwest", blurb: "山城把江写成楼梯。雾与火锅是同一件事的两面。" },
  "51": { short: "四川", region: "southwest", blurb: "盆地里的闲，与九寨的蓝。辣只是入口。" },
  "52": { short: "贵州", region: "southwest", blurb: "黄果树与苗寨。喀斯特在这里比广西更密。" },
  "53": { short: "云南", region: "southwest", blurb: "一座省的海拔可以换三次季节。丽江只是入口。" },
  "54": { short: "西藏", region: "plateau", blurb: "先学会走得慢。布达拉宫需要预约，也需要氧气一样的耐心。" },
  "61": { short: "陕西", region: "northwest", blurb: "地下还有一支军队。面上的蒜水把长安留在舌尖。" },
  "62": { short: "甘肃", region: "northwest", blurb: "敦煌的风把时间吹薄。河西走廊是还活着的路。" },
  "63": { short: "青海", region: "northwest", blurb: "青海湖把天空放得很低。入藏之前的高原预习。" },
  "64": { short: "宁夏", region: "northwest", blurb: "贺兰山与黄河。西夏陵把一座消失的国留在风里。" },
  "65": { short: "新疆", region: "northwest", blurb: "南疆的喀什，北疆的伊犁。距离本身就是风景。" },
  "71": { short: "台湾", region: "jiangnan", blurb: "岛屿把山和海压得很近。季节与大陆错开半拍。" },
  "81": { short: "香港", region: "southwest", blurb: "维多利亚港的密度。山与城叠在同一条天际线上。" },
  "82": { short: "澳门", region: "southwest", blurb: "半岛把葡式与粤语叠在一起。比灯火更值得走的是小巷。" },
};

export function destsForProvince(provinceId: string) {
  return destinations.filter((d) => destGeo[d.slug]?.provinceId === provinceId);
}

export function destsForRegion(region: RegionId) {
  return destinations.filter((d) => d.region === region);
}
