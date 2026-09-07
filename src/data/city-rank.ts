/** Municipalities and SARs have no prefecture split — the province is the city. */
export const NO_CITY_SPLIT = new Set(["11", "12", "31", "50", "81", "82"]);

/** Provincial / regional seats, keyed by atlas province id. */
export const CAPITAL_CITY: Record<string, string> = {
  "11": "北京",
  "12": "天津",
  "13": "石家庄",
  "14": "太原",
  "15": "呼和浩特",
  "21": "沈阳",
  "22": "长春",
  "23": "哈尔滨",
  "31": "上海",
  "32": "南京",
  "33": "杭州",
  "34": "合肥",
  "35": "福州",
  "36": "南昌",
  "37": "济南",
  "41": "郑州",
  "42": "武汉",
  "43": "长沙",
  "44": "广州",
  "45": "南宁",
  "46": "海口",
  "50": "重庆",
  "51": "成都",
  "52": "贵阳",
  "53": "昆明",
  "54": "拉萨",
  "61": "西安",
  "62": "兰州",
  "63": "西宁",
  "64": "银川",
  "65": "乌鲁木齐",
  "71": "台北",
  "81": "香港",
  "82": "澳门",
};

/**
 * Cities that already sit on the national atlas: sub-provincial /
 * separately-listed ports, plus the editorial twenty-two.
 */
const MAJOR_CITIES = new Set([
  "深圳",
  "大连",
  "宁波",
  "厦门",
  "青岛",
  "苏州",
  "无锡",
  "佛山",
  "东莞",
  "温州",
  "高雄",
  "桂林",
  "丽江",
  "张家界",
  "敦煌",
  "喀什",
  "三亚",
]);

/** Capitals and large cities belong on the national map; others only inside the province. */
export function isNationalCity(provinceId: string, cityName: string) {
  if (NO_CITY_SPLIT.has(provinceId)) return true;
  if (CAPITAL_CITY[provinceId] === cityName) return true;
  return MAJOR_CITIES.has(cityName);
}
