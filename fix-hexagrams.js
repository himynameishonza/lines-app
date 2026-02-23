const fs = require('fs');

// Correct elements from Wikipedia
const correctElements = {
  1: [1, 1],
  2: [2, 2],
  3: [3, 5],
  4: [5, 7],
  5: [1, 5],
  6: [5, 1],
  7: [5, 2],
  8: [2, 5],
  9: [1, 4],
  10: [8, 1],
  11: [1, 2],
  12: [2, 1],
  13: [6, 1],
  14: [1, 6],
  15: [7, 2],
  16: [2, 3],
  17: [3, 8],
  18: [4, 7],
  19: [8, 2],
  20: [2, 4],
  21: [3, 6],
  22: [6, 7],
  23: [2, 7],
  24: [3, 2],
  25: [3, 1],
  26: [1, 7],
  27: [3, 7],
  28: [4, 8],
  29: [5, 5],
  30: [6, 6],
  31: [7, 8],
  32: [4, 3],
  33: [7, 1],
  34: [1, 3],
  35: [2, 6],
  36: [6, 2],
  37: [6, 4],
  38: [8, 6],
  39: [7, 5],
  40: [5, 3],
  41: [8, 7],
  42: [3, 4],
  43: [1, 8],
  44: [4, 1],
  45: [2, 8],
  46: [4, 2],
  47: [5, 8],
  48: [4, 5],
  49: [6, 8],
  50: [4, 6],
  51: [3, 3],
  52: [7, 7],
  53: [7, 4],
  54: [8, 3],
  55: [6, 3],
  56: [7, 6],
  57: [4, 4],
  58: [8, 8],
  59: [5, 4],
  60: [8, 5],
  61: [8, 4],
  62: [7, 3],
  63: [6, 5],
  64: [5, 6]
};

// Trigram to lines mapping
const trigramLines = {
  1: [1, 1, 1], // Heaven ☰
  2: [0, 0, 0], // Earth ☷
  3: [1, 0, 0], // Thunder ☳
  4: [0, 1, 1], // Wind ☴
  5: [0, 1, 0], // Water ☵
  6: [1, 0, 1], // Fire ☲
  7: [0, 0, 1], // Mountain ☶
  8: [1, 1, 0]  // Lake ☱
};

// Generate lines from elements
function generateLines(lower, upper) {
  return [...trigramLines[lower], ...trigramLines[upper]];
}

// Read the file
let content = fs.readFileSync('data/hexagrams.ts', `utf8`);

// For each hexagram, replace elements and lines
for (let num = 1; num <= 64; num++) {
  const [lower, upper] = correctElements[num];
  const lines = generateLines(lower, upper);
  
  // Find the hexagram block
  const regex = new RegExp(
    `(\\{\\s*id:\\s*${num},\\s*number:\\s*${num},\\s*chineseName:[^}]*?elements:\\s*)\\[[^\\]]*\\]([^}]*?lines:\\s*)\\[[^\\]]*\\]`,
    's'
  );
  
  content = content.replace(regex, 
    `$1[${lower}, ${upper}]$2[${lines.join(', ')}]`
  );
}

// Write back
fs.writeFileSync('data/hexagrams.ts', content, 'utf8');

console.log(`✅ Fixed all hexagram elements and lines!`);
console.log('\nVerifying...');

// Verify
const elementMatches = content.match(/elements:\s*\[(\d+),\s*(\d+)\]/g);
console.log(`Found ${elementMatches.length} hexagrams`);

// Check for duplicates
const pairs = elementMatches.map(m => m.match(/\[(\d+),\s*(\d+)\]/)[0]);
const uniquePairs = new Set(pairs);
console.log(`Unique element pairs: ${uniquePairs.size}`);

if (uniquePairs.size === 64) {
  console.log('✅ All 64 hexagrams have unique element combinations!');
} else {
  console.log('⚠️  Still have duplicates');
}
