// Mapping of trigram symbols to IDs based on your trigrams.ts
const trigramMap = {
  '☰': 1, // 乾 Qián - Heaven
  '☷': 2, // 坤 Kūn - Earth  
  '☳': 3, // 震 Zhèn - Thunder
  '☴': 4, // 巽 Xùn - Wind
  '☵': 5, // 坎 Kǎn - Water
  '☲': 6, // 離 Lí - Fire
  '☶': 7, // 艮 Gèn - Mountain
  '☱': 8, // 兌 Duì - Lake
};

// Correct hexagrams from Wikipedia (King Wen sequence)
const correctHexagrams = [
  { num: 1, lower: '☰', upper: '☰' },  // 乾 Force
  { num: 2, lower: '☷', upper: '☷' },  // 坤 Field
  { num: 3, lower: '☳', upper: '☵' },  // 屯 Sprouting
  { num: 4, lower: '☵', upper: '☶' },  // 蒙 Enveloping
  { num: 5, lower: '☰', upper: '☵' },  // 需 Attending
  { num: 6, lower: '☵', upper: '☰' },  // 訟 Arguing
  { num: 7, lower: '☵', upper: '☷' },  // 師 Leading
  { num: 8, lower: '☷', upper: '☵' },  // 比 Grouping
  { num: 9, lower: '☰', upper: '☴' },  // 小畜 Small Accumulating
  { num: 10, lower: '☱', upper: '☰' }, // 履 Treading
  { num: 11, lower: '☰', upper: '☷' }, // 泰 Pervading
  { num: 12, lower: '☷', upper: '☰' }, // 否 Obstruction
  { num: 13, lower: '☲', upper: '☰' }, // 同人 Concording People
  { num: 14, lower: '☰', upper: '☲' }, // 大有 Great Possessing
  { num: 15, lower: '☶', upper: '☷' }, // 謙 Humbling
  { num: 16, lower: '☷', upper: '☳' }, // 豫 Providing-For
  { num: 17, lower: '☳', upper: '☱' }, // 隨 Following
  { num: 18, lower: '☴', upper: '☶' }, // 蠱 Correcting
  { num: 19, lower: '☱', upper: '☷' }, // 臨 Nearing
  { num: 20, lower: '☷', upper: '☴' }, // 觀 Viewing
  { num: 21, lower: '☳', upper: '☲' }, // 噬嗑 Gnawing Bite
  { num: 22, lower: '☲', upper: '☶' }, // 賁 Adorning
  { num: 23, lower: '☷', upper: '☶' }, // 剝 Stripping
  { num: 24, lower: '☳', upper: '☷' }, // 復 Returning
  { num: 25, lower: '☳', upper: '☰' }, // 無妄 Without Embroiling
  { num: 26, lower: '☰', upper: '☶' }, // 大畜 Great Accumulating
  { num: 27, lower: '☳', upper: '☶' }, // 頤 Swallowing
  { num: 28, lower: '☴', upper: '☱' }, // 大過 Great Exceeding
  { num: 29, lower: '☵', upper: '☵' }, // 坎 Gorge
  { num: 30, lower: '☲', upper: '☲' }, // 離 Radiance
  { num: 31, lower: '☶', upper: '☱' }, // 咸 Conjoining
  { num: 32, lower: '☴', upper: '☳' }, // 恆 Persevering
  { num: 33, lower: '☶', upper: '☰' }, // 遯 Retiring
  { num: 34, lower: '☰', upper: '☳' }, // 大壯 Great Invigorating
  { num: 35, lower: '☷', upper: '☲' }, // 晉 Prospering
  { num: 36, lower: '☲', upper: '☷' }, // 明夷 Darkening
  { num: 37, lower: '☲', upper: '☴' }, // 家人 Dwelling People
  { num: 38, lower: '☱', upper: '☲' }, // 睽 Polarising
  { num: 39, lower: '☶', upper: '☵' }, // 蹇 Limping
  { num: 40, lower: '☵', upper: '☳' }, // 解 Taking-Apart
  { num: 41, lower: '☱', upper: '☶' }, // 損 Diminishing
  { num: 42, lower: '☳', upper: '☴' }, // 益 Augmenting
  { num: 43, lower: '☰', upper: '☱' }, // 夬 Displacement
  { num: 44, lower: '☴', upper: '☰' }, // 姤 Coupling
  { num: 45, lower: '☷', upper: '☱' }, // 萃 Clustering
  { num: 46, lower: '☴', upper: '☷' }, // 升 Ascending
  { num: 47, lower: '☵', upper: '☱' }, // 困 Confining
  { num: 48, lower: '☴', upper: '☵' }, // 井 Welling
  { num: 49, lower: '☲', upper: '☱' }, // 革 Skinning
  { num: 50, lower: '☴', upper: '☲' }, // 鼎 Holding
  { num: 51, lower: '☳', upper: '☳' }, // 震 Shake
  { num: 52, lower: '☶', upper: '☶' }, // 艮 Bound
  { num: 53, lower: '☶', upper: '☴' }, // 漸 Infiltrating
  { num: 54, lower: '☱', upper: '☳' }, // 歸妹 Converting Maiden
  { num: 55, lower: '☲', upper: '☳' }, // 豐 Abounding
  { num: 56, lower: '☶', upper: '☲' }, // 旅 Sojourning
  { num: 57, lower: '☴', upper: '☴' }, // 巽 Ground
  { num: 58, lower: '☱', upper: '☱' }, // 兌 Open
  { num: 59, lower: '☵', upper: '☴' }, // 渙 Dispersing
  { num: 60, lower: '☱', upper: '☵' }, // 節 Articulating
  { num: 61, lower: '☱', upper: '☴' }, // 中孚 Center Returning
  { num: 62, lower: '☶', upper: '☳' }, // 小過 Small Exceeding
  { num: 63, lower: '☲', upper: '☵' }, // 既濟 Already Fording
  { num: 64, lower: '☵', upper: '☲' }, // 未濟 Not Yet Fording
];

// Convert to element IDs
const correctElements = correctHexagrams.map(h => ({
  num: h.num,
  elements: [trigramMap[h.lower], trigramMap[h.upper]]
}));

console.log('Correct hexagram elements (lower, upper):');
console.log(JSON.stringify(correctElements, null, 2));
