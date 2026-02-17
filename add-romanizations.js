const fs = require('fs');

// Romanizations for all 64 hexagrams
const romanizations = {
  "乾": "Qián",
  "坤": "Kūn",
  "屯": "Zhūn",
  "蒙": "Méng",
  "需": "Xū",
  "訟": "Sòng",
  "師": "Shī",
  "比": "Bǐ",
  "小畜": "Xiǎo Chù",
  "履": "Lǚ",
  "泰": "Tài",
  "否": "Pǐ",
  "同人": "Tóng Rén",
  "大有": "Dà Yǒu",
  "謙": "Qiān",
  "豫": "Yù",
  "隨": "Suí",
  "蠱": "Gǔ",
  "臨": "Lín",
  "觀": "Guān",
  "噬嗑": "Shì Kè",
  "賁": "Bì",
  "剝": "Bō",
  "復": "Fù",
  "無妄": "Wú Wàng",
  "大畜": "Dà Chù",
  "頤": "Yí",
  "大過": "Dà Guò",
  "坎": "Kǎn",
  "離": "Lí",
  "咸": "Xián",
  "恆": "Héng",
  "遯": "Dùn",
  "大壯": "Dà Zhuàng",
  "晉": "Jìn",
  "明夷": "Míng Yí",
  "家人": "Jiā Rén",
  "睽": "Kuí",
  "蹇": "Jiǎn",
  "解": "Xiè",
  "損": "Sǔn",
  "益": "Yì",
  "夬": "Guài",
  "姤": "Gòu",
  "萃": "Cuì",
  "升": "Shēng",
  "困": "Kùn",
  "井": "Jǐng",
  "革": "Gé",
  "鼎": "Dǐng",
  "震": "Zhèn",
  "艮": "Gèn",
  "漸": "Jiàn",
  "歸妹": "Guī Mèi",
  "豐": "Fēng",
  "旅": "Lǚ",
  "巽": "Xùn",
  "兌": "Duì",
  "渙": "Huàn",
  "節": "Jié",
  "中孚": "Zhōng Fú",
  "小過": "Xiǎo Guò",
  "既濟": "Jì Jì",
  "未濟": "Wèi Jì"
};

// Read the file
let content = fs.readFileSync('data/hexagrams.ts', 'utf8');

// For each Chinese name, add romanization if not already present
Object.entries(romanizations).forEach(([chinese, pinyin]) => {
  // Pattern to match hexagram object without romanization
  const pattern = new RegExp(
    `("chineseName":\\s*"${chinese.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")(,\\s*"isEvolving")`,
    'g'
  );
  
  // Replace with romanization added
  content = content.replace(pattern, `$1,\n    "romanization": "${pinyin}"$2`);
});

// Write back
fs.writeFileSync('data/hexagrams.ts', content, 'utf8');
console.log('Romanizations added successfully!');
