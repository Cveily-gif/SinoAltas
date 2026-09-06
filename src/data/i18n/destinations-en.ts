import type { Destination } from "@/data/types";

export type DestEn = Pick<
  Destination,
  "tagline" | "excerpt" | "body" | "days" | "highlights" | "itinerary" | "practical"
> & { intensity: string };

export const destEn: Record<string, DestEn> = {
  beijing: {
    tagline: "Walk a capital into a single axis",
    excerpt:
      "Hutongs, city walls, a bowl of zhajiang noodles. Beijing is not a collection of palaces — it is a civic rite still in motion.",
    body: "Begin on the axis: from Yongding Gate toward the Drum and Bell, the city is held together by a line you cannot see. Hutongs are closer to daily life than any hall — beyond the postcard lanes, courtyards the loudspeakers have not yet claimed. Winter wind thins every sound; autumn ginkgo lays the ground in copper. Night markets, opera, a plate of duck: the city’s way of translating itself into stomach and ear. Leave an afternoon to be lost in a lane that has no itinerary.",
    days: "4–6 days",
    intensity: "Measured",
    highlights: [
      { title: "Axis and city", text: "Yongding Gate to the Drum Tower. Walk the skeleton once; no guide is clearer." },
      { title: "Hutongs", text: "Beyond Nanluoguxiang, sit down in a lane that has not hung a sign." },
      { title: "Hills to the north", text: "Xiangshan or Badachu — set the capital back into the folds of the Yan mountains." },
    ],
    itinerary: [
      { day: "Day 1", title: "The axis", text: "Enter by Qianmen and the square; hutongs after noon; Jingshan at dusk for the roofs." },
      { day: "Day 2", title: "City and appetite", text: "A morning in an old quarter; noodles or duck for the afternoon; a play at night." },
      { day: "Day 3", title: "Out of the plain", text: "Xiangshan, the Summer Palace, or a northern hill — lift Beijing off the flat." },
    ],
    practical: [
      { label: "Season", value: "Ginkgo in October, or the dry cold after snow" },
      { label: "Arrive", value: "Capital or Daxing; the metro reaches almost every inner destination" },
      { label: "Stay", value: "Four days just loosen the axis and the hutongs" },
      { label: "Pace", value: "Go midweek. Keep half a day for a lane no guide has written" },
    ],
  },
  shanghai: {
    tagline: "The Bund unfolds the twentieth century",
    excerpt:
      "Shikumen, the Huangpu, noodles at midnight. Shanghai is the incision where China entered the modern; night resembles it more than day.",
    body: "Shanghai is to be walked, not gazed at from afar. Stone on the Bund and glass on the far bank are two pages of one river. Wukang and Yuyuan write plane trees as a way of living, not a backdrop. Begin with shengjian in the morning; a bowl of noodles at night slows the city down. Give a day to a street you can finish on foot — closer to the city than three towers in three days.",
    days: "3–5 days",
    intensity: "Light",
    highlights: [
      { title: "Bund and river", text: "Dawn or night. A boat delivers the time-lag between the two banks." },
      { title: "Plane-tree quarters", text: "Wukang, Anfu, Yuyuan — walk the concession at the scale of a stroll." },
      { title: "The city’s stomach", text: "Shengjian at morning, Yangchun noodles after midnight." },
    ],
    itinerary: [
      { day: "Day 1", title: "The river", text: "The Bund at first light or last; a ferry; the far bank after dark." },
      { day: "Day 2", title: "A walkable road", text: "One plane-tree street, end to end, with lunch wherever the smell is best." },
      { day: "Day 3", title: "Another tempo", text: "A gallery, a bathhouse, or a lane in the former walled city." },
    ],
    practical: [
      { label: "Season", value: "Spring blossom, or a dry autumn" },
      { label: "Arrive", value: "Hongqiao or Pudong; the metro is a city in itself" },
      { label: "Stay", value: "Three days if you walk; five if you mean to linger" },
      { label: "Pace", value: "Night is half the itinerary" },
    ],
  },
  hangzhou: {
    tagline: "A city that treats a lake as civic work",
    excerpt:
      "West Lake has been written for a thousand years. Longjing and Lingyin still rescue it from the crowd.",
    body: "Hangzhou’s lake is not scenery hung on a wall — it is a public room. Walk the causeway before the loudspeakers wake. Climb toward Longjing and the tea takes the lake back from the postcard. Lingyin is busy, but the hill behind it is not. Give the city a morning of mist and an evening of no plan.",
    days: "3–4 days",
    intensity: "Light",
    highlights: [
      { title: "The lake at an off hour", text: "Before nine, or after the lights have been overpraised." },
      { title: "Tea hills", text: "Longjing in the morning; the smell of roasted beans after sun." },
      { title: "Lingyin, then further", text: "Pass the temple; keep walking until the noise thins." },
    ],
    itinerary: [
      { day: "Day 1", title: "Causeway", text: "Bai or Su causeway at dawn; a boat only if the water is quiet." },
      { day: "Day 2", title: "Leaves", text: "Longjing village; watch a first infusion; return by a slower road." },
      { day: "Day 3", title: "Hill", text: "Lingyin, then the path that does not sell tickets." },
    ],
    practical: [
      { label: "Season", value: "Willow in spring; osmanthus in autumn" },
      { label: "Arrive", value: "Hangzhou East, or a short hop from Shanghai" },
      { label: "Stay", value: "Three days, if one is given to tea" },
      { label: "Pace", value: "The lake is best when the city has not yet arrived" },
    ],
  },
  suzhou: {
    tagline: "A mountain placed in an acre of pond",
    excerpt:
      "Gardens, water, canal. Suzhou is a technology of looking — moon gates, leaking windows, a mountain you are meant to imagine.",
    body: "A Suzhou garden is not a park. A leaking window shows you half; a corridor folds your step back; a stone lets you believe a mountain sits across the pond. Walk two gardens, not six. Between them, a bowl of noodles and a lane the water still owns.",
    days: "2–4 days",
    intensity: "Light",
    highlights: [
      { title: "One garden, slowly", text: "Zhuozheng or Liu Yuan — an afternoon, not a circuit." },
      { title: "Canals", text: "Pingjiang Road before the shops have fully woken." },
      { title: "A mountain of stone", text: "Tiger Hill, if only for the leaning pagoda and the quiet behind it." },
    ],
    itinerary: [
      { day: "Day 1", title: "Garden", text: "One classical garden in the morning; the canal in the late day." },
      { day: "Day 2", title: "Water", text: "A lesser-known garden, or a boat that is not a performance." },
      { day: "Day 3", title: "Out of the city", text: "Tongli or a hill to the west, if the gardens have already spoken." },
    ],
    practical: [
      { label: "Season", value: "Spring rain; autumn osmanthus" },
      { label: "Arrive", value: "Suzhou Station, thirty minutes from Shanghai" },
      { label: "Stay", value: "Two days is enough if you refuse the checklist" },
      { label: "Pace", value: "Two gardens. Not six." },
    ],
  },
  nanjing: {
    tagline: "Walls that still enclose six dynasties",
    excerpt:
      "Plane trees, a river, a city that remembers being a capital and does not boast about it.",
    body: "Nanjing wears its past without a megaphone. The wall still holds; the plane trees still make a ceiling. Walk the wall, sit by Xuanwu Lake, eat ducks that do not need to be explained. The Ming tombs are a forest more than a monument.",
    days: "3–4 days",
    intensity: "Measured",
    highlights: [
      { title: "The wall", text: "A stretch you can walk, not a gate you photograph." },
      { title: "Xuanwu", text: "The lake as a civic room, like Hangzhou’s, with less performance." },
      { title: "Purple Mountain", text: "Tombs in trees. Go for the shade as much as the stone." },
    ],
    itinerary: [
      { day: "Day 1", title: "Wall and lake", text: "A morning on the rampart; Xuanwu in the afternoon." },
      { day: "Day 2", title: "Mountain", text: "Ming tombs and a slow descent into the city for duck." },
      { day: "Day 3", title: "The river", text: "The Yangtze bank, or a museum if the weather turns." },
    ],
    practical: [
      { label: "Season", value: "Late spring, or the plane trees of autumn" },
      { label: "Arrive", value: "Nanjing South; the metro is patient" },
      { label: "Stay", value: "Three days" },
      { label: "Pace", value: "Leave room for the wall at an hour without tour groups" },
    ],
  },
  xiamen: {
    tagline: "Sea-wind written into the lanes",
    excerpt:
      "Gulangyu, a bowl of noodles, a coast that still belongs to walking.",
    body: "Xiamen is a city the sea has edited. Gulangyu is most itself before the ferries thicken. In the lanes, the wind does the talking. Eat satay noodles; take the coastal road without a destination. The island is a pause, not a performance.",
    days: "3–4 days",
    intensity: "Light",
    highlights: [
      { title: "Gulangyu off-peak", text: "The first ferry, or the last." },
      { title: "Noodles", text: "Shaxian is a system; satay noodles are a memory." },
      { title: "The ring road", text: "Walk or ride until the hotels thin out." },
    ],
    itinerary: [
      { day: "Day 1", title: "Island", text: "Gulangyu at an unfashionable hour; piano rooms optional." },
      { day: "Day 2", title: "Coast", text: "The island ring; a beach that is not a set." },
      { day: "Day 3", title: "Across the water", text: "Quanzhou if you want stone and incense; or simply another bowl." },
    ],
    practical: [
      { label: "Season", value: "Spring and autumn; summer is a crowd" },
      { label: "Arrive", value: "Xiamen Gaoqi, or the high-speed rail" },
      { label: "Stay", value: "Three days, four if Quanzhou is added" },
      { label: "Pace", value: "The island rewards those who miss the second ferry on purpose" },
    ],
  },
  qingdao: {
    tagline: "Red tiles that give the sea to the wind",
    excerpt:
      "A coastal city that wears its concession lightly, and its beer honestly.",
    body: "Qingdao is best taken as a slope: red roofs, a bay, a wind that does not ask permission. Walk from the pier toward the old town; eat seafood that has not been renamed for visitors. The sea here is a working neighbour, not a backdrop.",
    days: "3–4 days",
    intensity: "Light",
    highlights: [
      { title: "The old town", text: "Tiles, spires, and a bay that still works." },
      { title: "The pier", text: "Morning, before the flags have a schedule." },
      { title: "Beer and fish", text: "A hall or a stall — both tell the truth." },
    ],
    itinerary: [
      { day: "Day 1", title: "Slope", text: "Pier to old town, on foot, with pauses for the view you did not plan." },
      { day: "Day 2", title: "Coast", text: "A farther beach, or Laoshan if the weather is kind." },
      { day: "Day 3", title: "Table", text: "Seafood at noon; nothing heroic after." },
    ],
    practical: [
      { label: "Season", value: "May to October; August is a festival of other people" },
      { label: "Arrive", value: "Qingdao Station sits almost on the sea" },
      { label: "Stay", value: "Three days" },
      { label: "Pace", value: "Walk. The city is built as a descent to water." },
    ],
  },
  chengdu: {
    tagline: "A city that made ease into an institution",
    excerpt:
      "Teahouses, heat, a basin that refuses to hurry. Spice is only the door.",
    body: "Chengdu’s gift is not a skyline. It is the right to sit. A teahouse is civic furniture; a hotpot is a social contract. Walk wide and narrow alleys only to leave them. The real city is a table without a queue, and an afternoon that does not apologise.",
    days: "3–5 days",
    intensity: "Light",
    highlights: [
      { title: "A teahouse", text: "Not a reconstructed one. Stay until the light changes." },
      { title: "Heat as grammar", text: "Hotpot, dan dan, a cold sweet soup after." },
      { title: "Out of the basin", text: "Jiuzhaigou or the hills — only if ease has already been learned." },
    ],
    itinerary: [
      { day: "Day 1", title: "Sit", text: "A teahouse, a lunch that stings, a walk with no museum." },
      { day: "Day 2", title: "Eat further", text: "A neighbourhood that is not on the first page of anyone’s list." },
      { day: "Day 3", title: "A little height", text: "Qingcheng or a park; return for supper that does not require courage." },
    ],
    practical: [
      { label: "Season", value: "Spring and autumn; summer is a steam bath you may enjoy" },
      { label: "Arrive", value: "Chengdu East, or two airports" },
      { label: "Stay", value: "Four days, unless the mountains are calling" },
      { label: "Pace", value: "Refuse the urge to fill the afternoon" },
    ],
  },
  chongqing: {
    tagline: "A mountain city writing rivers as stairs",
    excerpt:
      "Fog and hotpot are two faces of one thing. The city stands on its own weather.",
    body: "Chongqing does not flatten for anyone. Rivers become staircases; fog is a civic material. Ride a cable, walk a bridge, eat in a room that hangs over the water. Do not try to understand the map in one sitting — the city will teach you by making you climb.",
    days: "3–4 days",
    intensity: "Measured",
    highlights: [
      { title: "The two rivers", text: "Where they meet, the city explains itself." },
      { title: "Stairs and cables", text: "Let elevation do the talking." },
      { title: "Hotpot in fog", text: "The weather and the table are one climate." },
    ],
    itinerary: [
      { day: "Day 1", title: "Junction", text: "Chaotianmen, a cable, a night that does not pretend to be daylight." },
      { day: "Day 2", title: "Climbs", text: "A hill neighbourhood; a bridge at dusk." },
      { day: "Day 3", title: "Out", text: "Dazu if you want stone; or simply another river." },
    ],
    practical: [
      { label: "Season", value: "Spring and autumn; summer is a furnace" },
      { label: "Arrive", value: "Chongqing North; the metro is a mountain goat" },
      { label: "Stay", value: "Three days to learn the stairs" },
      { label: "Pace", value: "Budget the climbs. The city will collect them anyway." },
    ],
  },
  kunming: {
    tagline: "A province’s spring has stopped here",
    excerpt:
      "Altitude that is kind, flowers that do not wait for a season, a city used as a threshold.",
    body: "Kunming is the gentlest height in the southwest. Use it as a breath before Dali or Lijiang. Walk Green Lake; eat crossing-the-bridge noodles without ceremony. The city’s gift is that it does not insist on being the point.",
    days: "2–3 days",
    intensity: "Light",
    highlights: [
      { title: "Green Lake", text: "A civic park that still belongs to the city." },
      { title: "A threshold", text: "Stay just long enough to loosen the lungs." },
      { title: "Noodles", text: "The broth is a journey; you need not make it one." },
    ],
    itinerary: [
      { day: "Day 1", title: "Lake", text: "Green Lake, a long lunch, an early night." },
      { day: "Day 2", title: "Onward", text: "West toward Dali, or a day in the hills if you are not yet leaving." },
    ],
    practical: [
      { label: "Season", value: "Most months are kind; summer rain is a rhythm, not a disaster" },
      { label: "Arrive", value: "The gateway of the southwest" },
      { label: "Stay", value: "Two days, then go higher or west" },
      { label: "Pace", value: "Do not force Kunming to be a climax" },
    ],
  },
  lijiang: {
    tagline: "An old town with Jade Dragon as its weather",
    excerpt:
      "Naxi lanes, a mountain that refuses to be a backdrop, a night that is easily stolen by song.",
    body: "Lijiang’s old town is a stage if you let it be. Walk out toward Shuhe; look up until the mountain is not a logo. The altitude is modest but real. Morning is the town’s honest hour; night is a negotiation.",
    days: "3–4 days",
    intensity: "Measured",
    highlights: [
      { title: "Shuhe", text: "A quieter script of the same stone." },
      { title: "The mountain", text: "See it. Do not require it to perform." },
      { title: "Morning lanes", text: "Before the shops have decided who you are." },
    ],
    itinerary: [
      { day: "Day 1", title: "Stone", text: "Old town at dawn; Shuhe by afternoon." },
      { day: "Day 2", title: "Height", text: "A view of Jade Dragon; a slow return." },
      { day: "Day 3", title: "Water", text: "Tiger Leaping if the legs agree; otherwise a village that still farms." },
    ],
    practical: [
      { label: "Season", value: "Spring and autumn; winter is clear and cold" },
      { label: "Arrive", value: "Lijiang Sanyi, or the road from Dali" },
      { label: "Stay", value: "Three nights, to let the altitude settle" },
      { label: "Pace", value: "Protect the morning. Give the night away if you must." },
    ],
  },
  guilin: {
    tagline: "Water writing mountains as reflection",
    excerpt:
      "A bamboo raft is closer to the river’s temper than any cruise. Karst is geology that has been edited by water for a very long time.",
    body: "The Li River has been named to death from the deck of a cruise. A raft has no script. Karst is not a peak so much as a peak revised, again and again, until it is round. Ride south; eat rice noodles; let Yangshuo’s night street be optional.",
    days: "3–4 days",
    intensity: "Light",
    highlights: [
      { title: "A raft", text: "On the Yulong or a quiet stretch of the Li." },
      { title: "Reflections", text: "The photograph is famous; the silence is not.", },
      { title: "Noodles", text: "Chili in the middle of the table, no questions asked." },
    ],
    itinerary: [
      { day: "Day 1", title: "River", text: "Guilin to Yangshuo by water, if you can bear the company; a raft the next morning if not." },
      { day: "Day 2", title: "Fields", text: "Yulong River, a bicycle, a bridge that has earned its age." },
      { day: "Day 3", title: "Karst", text: "A hill you climb for yourself, not for a name." },
    ],
    practical: [
      { label: "Season", value: "April mist, or a dry autumn" },
      { label: "Arrive", value: "Guilin; the high-speed rail has made it easy — keep the river slow" },
      { label: "Stay", value: "Three days in Yangshuo, not the city" },
      { label: "Pace", value: "The cruise is optional. The raft is not." },
    ],
  },
  zhangjiajie: {
    tagline: "Stone peaks growing out of cloud",
    excerpt:
      "Pillars, mist, a park that is best taken as weather rather than a list of platforms.",
    body: "Zhangjiajie is a forest of stone. The platforms are crowded; the paths between them are less so. Walk more than you ride. Cloud is not an obstacle — it is the medium in which the peaks were meant to be seen.",
    days: "3–4 days",
    intensity: "Measured",
    highlights: [
      { title: "A ridge in mist", text: "Stay until the cloud moves; it will." },
      { title: "Tianmen, or not", text: "The road is a spectacle. The forest is the point." },
      { title: "Xiangxi nearby", text: "If the park has been enough, the west of Hunan is still a country." },
    ],
    itinerary: [
      { day: "Day 1", title: "Park", text: "One loop, on foot where possible; refuse the second cable." },
      { day: "Day 2", title: "Weather", text: "Return to a ridge you liked; wait on the cloud." },
      { day: "Day 3", title: "Out", text: "Tianmen if you must; a quieter valley if you can." },
    ],
    practical: [
      { label: "Season", value: "April to November; mist is a gift" },
      { label: "Arrive", value: "Zhangjiajie Hehua; the rail has arrived too" },
      { label: "Stay", value: "Three days inside the park’s rhythm" },
      { label: "Pace", value: "Buy time, not platforms" },
    ],
  },
  xian: {
    tagline: "Walls that still hold Chang’an",
    excerpt:
      "An army underground; garlic-water on noodles that keeps a capital on the tongue.",
    body: "Xi’an is a city that never quite stopped being a capital. Walk the wall; break bread into lamb broth as if it were a craft. The warriors are a morning; the city is the rest of the days. Night belongs to streets that are not the main road of the Muslim quarter.",
    days: "3–5 days",
    intensity: "Measured",
    highlights: [
      { title: "The wall", text: "Bicycle or foot — a circuit that still means something." },
      { title: "A bowl", text: "Yangrou paomo, torn by hand, is a way of keeping time." },
      { title: "Underground", text: "The pits. Then leave them, so the city can begin." },
    ],
    itinerary: [
      { day: "Day 1", title: "Wall and broth", text: "The rampart in the morning; a bowl that takes an hour to prepare." },
      { day: "Day 2", title: "The army", text: "Lintong, then back for a side street that does not sell costumes." },
      { day: "Day 3", title: "Stele and night", text: "The Forest of Steles; the wall again after dark." },
    ],
    practical: [
      { label: "Season", value: "Spring and autumn; summer is a kiln" },
      { label: "Arrive", value: "Xi'an North; the metro is civil" },
      { label: "Stay", value: "Four days if the warriors are only one of them" },
      { label: "Pace", value: "Do not give the pits the whole trip" },
    ],
  },
  dunhuang: {
    tagline: "Wind that thins time",
    excerpt:
      "Pigment hid a thousand years in the caves. On the dunes, the sun needs only a dusk.",
    body: "The Mogao Caves do not allow photographs, and they are right. The eye is forced to work; memory begins to grow. The digital centre explains the structure; the door still undoes every preparation. Dusk on Mingsha turns a person into a point on a ridge. The Silk Road was never a single road — it was a chain of people willing to stop in a desert.",
    days: "2–4 days",
    intensity: "Measured",
    highlights: [
      { title: "The caves", text: "No camera. Take the hours they give you." },
      { title: "Mingsha at dusk", text: "The dune, the spring, a sky denser than the town." },
      { title: "The corridor", text: "Dunhuang is a stop. The Hexi road is the sentence." },
    ],
    itinerary: [
      { day: "Day 1", title: "Caves", text: "Digital centre, then Mogao. Nothing else that day." },
      { day: "Day 2", title: "Sand", text: "Mingsha at the hour the sun becomes copper." },
      { day: "Day 3", title: "West or back", text: "Yumenguan if the wind allows; or a second, quieter look." },
    ],
    practical: [
      { label: "Season", value: "May to October; September is the kindest" },
      { label: "Arrive", value: "Dunhuang airport, or the long rail in" },
      { label: "Stay", value: "Two full days, three if the desert has caught you" },
      { label: "Pace", value: "Book the caves early. Leave dusk unscheduled." },
    ],
  },
  lhasa: {
    tagline: "Learn first to walk slowly",
    excerpt:
      "The Potala needs a reservation, and a patience like oxygen. Light is harder here; the step must be slower.",
    body: "Lhasa is not a prize. It is an altitude that rewrites the day. Rest on arrival; walk the Barkhor before you climb anything. The Potala is a mountain of rooms; the Jokhang is a current of people. Drink tea; refuse the urge to see everything. The plateau will not be collected.",
    days: "4–6 days",
    intensity: "Deep",
    highlights: [
      { title: "Barkhor", text: "Clockwise, without a list." },
      { title: "The Potala", text: "Book it. Then walk it as slowly as the air requires." },
      { title: "Light", text: "Mornings are thinner, and more exact." },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive and sit", text: "No monuments. Tea, sleep, a short walk." },
      { day: "Day 2", title: "Circuit", text: "Barkhor at an hour the light is still pale." },
      { day: "Day 3", title: "Palace", text: "The Potala, then nothing heroic." },
    ],
    practical: [
      { label: "Season", value: "May to October; winter is a different country" },
      { label: "Arrive", value: "By air, or the train if you want the height to arrive gradually" },
      { label: "Stay", value: "Five days, the first of them almost empty" },
      { label: "Pace", value: "Altitude is the itinerary. Honour it." },
    ],
  },
  harbin: {
    tagline: "Winter turning a city to ice",
    excerpt:
      "A festival prepared for the cold. In other months, a Russian grain in the streets, and a river.",
    body: "Harbin is honest in winter. Ice is not decoration; it is the city’s working season. If you come for the sculptures, also walk the old streets when your hands still hurt. In warmer months the city is a different, quieter northern face.",
    days: "3–4 days",
    intensity: "Measured",
    highlights: [
      { title: "Ice", text: "Go in season, or not at all for this." },
      { title: "Central Street", text: "Stone and bread; a northern concession of another kind." },
      { title: "The river", text: "The Songhua, frozen or flowing, is the city’s spine." },
    ],
    itinerary: [
      { day: "Day 1", title: "Street", text: "Zhongyang Dajie, a bakery, a church that is now a room for echoes." },
      { day: "Day 2", title: "Ice", text: "The festival after dark, if it is winter; a museum if it is not." },
      { day: "Day 3", title: "River", text: "The bank, and a meal that takes the cold seriously." },
    ],
    practical: [
      { label: "Season", value: "January for ice; September if you want a city, not a spectacle" },
      { label: "Arrive", value: "Harbin West" },
      { label: "Stay", value: "Three days" },
      { label: "Pace", value: "Dress as if the city means it. It does." },
    ],
  },
  guangzhou: {
    tagline: "Morning tea as an institution",
    excerpt:
      "A southern capital of appetite. Coast and city both move fast; dim sum is how the day is convened.",
    body: "Guangzhou is best entered at the table. Morning tea is not breakfast — it is a sitting of the city. Walk Shamian; eat along the river; refuse the idea that the skyline is the point. The heat is part of the grammar.",
    days: "3–4 days",
    intensity: "Light",
    highlights: [
      { title: "Yum cha", text: "A house that still wheels the carts, if you can find one." },
      { title: "The river", text: "The Pearl at an hour that is not a light show." },
      { title: "Shamian", text: "A small island of another century, taken at a walk." },
    ],
    itinerary: [
      { day: "Day 1", title: "Table", text: "Morning tea that lasts until you are late for everything else." },
      { day: "Day 2", title: "River", text: "Shamian, then the bank, then another meal." },
      { day: "Day 3", title: "South", text: "A ferry of thought toward the sea, or simply more of the city." },
    ],
    practical: [
      { label: "Season", value: "November to March; summer is a steam room" },
      { label: "Arrive", value: "Guangzhou South; the metro is a city of its own" },
      { label: "Stay", value: "Three days" },
      { label: "Pace", value: "Protect the morning sitting. It is the point." },
    ],
  },
  sanya: {
    tagline: "A sea that belongs to winter",
    excerpt:
      "Beyond the resort names, quieter bays remain. Come when the north is ice.",
    body: "Sanya is easy to spend without seeing. Leave the first bay; look for a stretch of coast that still has a fishing hour. Winter is the season this island was waiting for. Swim, then eat as if the sea were a neighbour, not a product.",
    days: "4–6 days",
    intensity: "Light",
    highlights: [
      { title: "A quieter bay", text: "Not the first name on the map." },
      { title: "Winter light", text: "This is when the island is for you." },
      { title: "The other Hainan", text: "A loop inland, if the beach has said enough." },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive and float", text: "No itinerary. Salt, sleep." },
      { day: "Day 2", title: "Another shore", text: "A bay with fewer stages." },
      { day: "Day 3", title: "Inland", text: "Rainforest or a town that is not a resort." },
    ],
    practical: [
      { label: "Season", value: "November to March" },
      { label: "Arrive", value: "Sanya Phoenix" },
      { label: "Stay", value: "Four days, or the trip becomes a weekend with extra humidity" },
      { label: "Pace", value: "Leave one day without a booking" },
    ],
  },
  wuhan: {
    tagline: "Two rivers making a city",
    excerpt:
      "The Yangtze widens; a city of crossing, breakfast, and heat.",
    body: "Wuhan is three towns taught to live as one. Cross the river; eat hot-dry noodles standing up; walk a university avenue of plane trees. The city is a junction — treat it as a pause with character, not a corridor.",
    days: "2–3 days",
    intensity: "Measured",
    highlights: [
      { title: "The crossing", text: "A bridge or a ferry; see the width." },
      { title: "Breakfast", text: "Hot-dry noodles, early, in a place that does not wait for you." },
      { title: "East Lake", text: "A civic expanse, if the heat allows." },
    ],
    itinerary: [
      { day: "Day 1", title: "Rivers", text: "One bank, then the other; noodles in between." },
      { day: "Day 2", title: "Lake", text: "East Lake, or a museum if the weather is a furnace." },
    ],
    practical: [
      { label: "Season", value: "Spring and autumn; summer is famous for a reason" },
      { label: "Arrive", value: "Wuhan Station; it is the knot of the high-speed net" },
      { label: "Stay", value: "Two days, three if you like junctions" },
      { label: "Pace", value: "Breakfast is not optional" },
    ],
  },
  kashgar: {
    tagline: "A city still standing in the road",
    excerpt:
      "South Xinjiang: lanes, a Sunday market, distance itself as landscape.",
    body: "Kashgar is farther than the map admits. The old lanes are a negotiation between what remains and what is rebuilt. Go to the market; eat as the city eats; look west as if the road had not ended. Distance here is not a complaint — it is the scenery.",
    days: "3–5 days",
    intensity: "Deep",
    highlights: [
      { title: "The lanes", text: "Walk them in the morning, before the day has an opinion." },
      { title: "The market", text: "Sunday, if you can. Livestock and spice, not a souvenir hour." },
      { title: "West", text: "The Pamir, if time and permits allow — or simply the knowledge of them." },
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive slowly", text: "The old town at a walk; tea; an early night after the flight." },
      { day: "Day 2", title: "Market or mosque", text: "Id Kah, a courtyard, a long lunch." },
      { day: "Day 3", title: "Out", text: "A day toward the mountains, or a second circuit of the lanes." },
    ],
    practical: [
      { label: "Season", value: "Spring and autumn; summer is a glare" },
      { label: "Arrive", value: "A long flight, or a longer train — both are part of the meaning" },
      { label: "Stay", value: "Four days, after coming this far" },
      { label: "Pace", value: "Do not treat Kashgar as a day-trip from anywhere" },
    ],
  },
  hongkong: {
    tagline: "Hill and city sharing one skyline",
    excerpt:
      "The density of the harbour. A mountain tram, a bowl of noodles, a city that changes languages in a single elevator.",
    body: "Hong Kong is vertical weather. Ride up for the air; come down for the table. The harbour is not a view — it is the city’s working interval. Walk a market street; take a tram that still thinks in two storeys. The hills are not a park at the edge; they are the other half of the same island.",
    days: "3–5 days",
    intensity: "Measured",
    highlights: [
      { title: "The harbour", text: "A Star Ferry at an ordinary hour." },
      { title: "A ridge", text: "The Peak if you must; a quieter hill if you can." },
      { title: "A table", text: "Noodles, tea, a stall that does not care who you are." },
    ],
    itinerary: [
      { day: "Day 1", title: "Harbour", text: "Ferry, an old street, night from a level that is not a sky bar." },
      { day: "Day 2", title: "Height", text: "A hill walk; descent by whatever is slowest." },
      { day: "Day 3", title: "Outlying", text: "An island that still has a village hour." },
    ],
    practical: [
      { label: "Season", value: "November to March; summer is a typhoon grammar" },
      { label: "Arrive", value: "The airport is a city; the MTR is a promise kept" },
      { label: "Stay", value: "Four days" },
      { label: "Pace", value: "Alternate altitude with appetite" },
    ],
  },
};
