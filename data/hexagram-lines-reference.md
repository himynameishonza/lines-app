# Hexagram Lines Reference

This document provides the line configurations for all 64 hexagrams in the I Ching.

Lines are listed from **bottom to top** (line 1 is the bottom, line 6 is the top).

## Format
- `yang` = solid line (—)
- `yin` = broken line (- -)

## All 64 Hexagrams

```typescript
const hexagramLines = {
  1: ['yang', 'yang', 'yang', 'yang', 'yang', 'yang'],  // ䷀ Qian - The Creative
  2: ['yin', 'yin', 'yin', 'yin', 'yin', 'yin'],        // ䷁ Kun - The Receptive
  3: ['yang', 'yin', 'yin', 'yin', 'yin', 'yang'],      // ䷂ Zhun - Difficulty at the Beginning
  4: ['yin', 'yang', 'yin', 'yin', 'yin', 'yang'],      // ䷃ Meng - Youthful Folly
  5: ['yang', 'yang', 'yang', 'yin', 'yang', 'yin'],    // ䷄ Xu - Waiting
  6: ['yin', 'yang', 'yin', 'yang', 'yang', 'yang'],    // ䷅ Song - Conflict
  7: ['yin', 'yang', 'yin', 'yin', 'yin', 'yin'],       // ䷆ Shi - The Army
  8: ['yin', 'yin', 'yin', 'yin', 'yang', 'yin'],       // ䷇ Bi - Holding Together
  9: ['yang', 'yang', 'yin', 'yang', 'yang', 'yang'],   // ䷈ Xiao Chu - Small Taming
  10: ['yang', 'yang', 'yang', 'yin', 'yang', 'yang'],  // ䷉ Lü - Treading
  11: ['yang', 'yang', 'yang', 'yin', 'yin', 'yin'],    // ䷊ Tai - Peace
  12: ['yin', 'yin', 'yin', 'yang', 'yang', 'yang'],    // ䷋ Pi - Standstill
  13: ['yang', 'yin', 'yang', 'yang', 'yang', 'yang'],  // ䷌ Tong Ren - Fellowship
  14: ['yang', 'yang', 'yang', 'yang', 'yin', 'yang'],  // ䷍ Da You - Great Possession
  15: ['yin', 'yin', 'yang', 'yin', 'yin', 'yin'],      // ䷎ Qian - Modesty
  16: ['yin', 'yin', 'yin', 'yang', 'yin', 'yin'],      // ䷏ Yu - Enthusiasm
  17: ['yang', 'yin', 'yin', 'yang', 'yang', 'yin'],    // ䷐ Sui - Following
  18: ['yin', 'yang', 'yang', 'yin', 'yin', 'yang'],    // ䷑ Gu - Work on the Decayed
  19: ['yang', 'yang', 'yin', 'yin', 'yin', 'yin'],     // ䷒ Lin - Approach
  20: ['yin', 'yin', 'yin', 'yin', 'yang', 'yang'],     // ䷓ Guan - Contemplation
  21: ['yang', 'yin', 'yin', 'yang', 'yin', 'yang'],    // ䷔ Shi He - Biting Through
  22: ['yang', 'yin', 'yang', 'yin', 'yin', 'yang'],    // ䷕ Bi - Grace
  23: ['yin', 'yin', 'yin', 'yin', 'yin', 'yang'],      // ䷖ Bo - Splitting Apart
  24: ['yang', 'yin', 'yin', 'yin', 'yin', 'yin'],      // ䷗ Fu - Return
  25: ['yang', 'yin', 'yin', 'yang', 'yang', 'yang'],   // ䷘ Wu Wang - Innocence
  26: ['yang', 'yang', 'yang', 'yin', 'yin', 'yang'],   // ䷙ Da Chu - Great Taming
  27: ['yang', 'yin', 'yin', 'yin', 'yin', 'yang'],     // ䷚ Yi - Nourishment
  28: ['yin', 'yang', 'yang', 'yang', 'yang', 'yin'],   // ䷛ Da Guo - Great Exceeding
  29: ['yin', 'yang', 'yin', 'yin', 'yang', 'yin'],     // ䷜ Kan - The Abysmal Water
  30: ['yang', 'yin', 'yang', 'yang', 'yin', 'yang'],   // ䷝ Li - The Clinging Fire
  31: ['yin', 'yin', 'yang', 'yang', 'yang', 'yin'],    // ䷞ Xian - Influence
  32: ['yin', 'yang', 'yang', 'yang', 'yin', 'yin'],    // ䷟ Heng - Duration
  33: ['yin', 'yin', 'yang', 'yang', 'yang', 'yang'],   // ䷠ Dun - Retreat
  34: ['yang', 'yang', 'yang', 'yang', 'yin', 'yin'],   // ䷡ Da Zhuang - Great Power
  35: ['yin', 'yin', 'yin', 'yang', 'yin', 'yang'],     // ䷢ Jin - Progress
  36: ['yang', 'yin', 'yang', 'yin', 'yin', 'yin'],     // ䷣ Ming Yi - Darkening of the Light
  37: ['yang', 'yin', 'yang', 'yin', 'yang', 'yang'],   // ䷤ Jia Ren - The Family
  38: ['yang', 'yang', 'yin', 'yang', 'yin', 'yang'],   // ䷥ Kui - Opposition
  39: ['yin', 'yin', 'yang', 'yin', 'yang', 'yin'],     // ䷦ Jian - Obstruction
  40: ['yin', 'yang', 'yin', 'yang', 'yin', 'yin'],     // ䷧ Jie - Deliverance
  41: ['yang', 'yang', 'yin', 'yin', 'yin', 'yang'],    // ䷨ Sun - Decrease
  42: ['yang', 'yin', 'yin', 'yin', 'yang', 'yang'],    // ䷩ Yi - Increase
  43: ['yang', 'yang', 'yang', 'yang', 'yang', 'yin'],  // ䷪ Guai - Breakthrough
  44: ['yin', 'yang', 'yang', 'yang', 'yang', 'yang'],  // ䷫ Gou - Coming to Meet
  45: ['yin', 'yin', 'yin', 'yang', 'yang', 'yin'],     // ䷬ Cui - Gathering Together
  46: ['yin', 'yang', 'yang', 'yin', 'yin', 'yin'],     // ䷭ Sheng - Pushing Upward
  47: ['yin', 'yang', 'yin', 'yang', 'yang', 'yin'],    // ䷮ Kun - Oppression
  48: ['yin', 'yang', 'yang', 'yin', 'yang', 'yin'],    // ䷯ Jing - The Well
  49: ['yang', 'yin', 'yang', 'yang', 'yang', 'yin'],   // ䷰ Ge - Revolution
  50: ['yin', 'yang', 'yang', 'yang', 'yin', 'yang'],   // ䷱ Ding - The Cauldron
  51: ['yang', 'yin', 'yin', 'yang', 'yin', 'yin'],     // ䷲ Zhen - The Arousing Thunder
  52: ['yin', 'yin', 'yang', 'yin', 'yin', 'yang'],     // ䷳ Gen - Keeping Still Mountain
  53: ['yin', 'yin', 'yang', 'yin', 'yang', 'yang'],    // ䷴ Jian - Development
  54: ['yang', 'yang', 'yin', 'yang', 'yin', 'yin'],    // ䷵ Gui Mei - The Marrying Maiden
  55: ['yang', 'yin', 'yang', 'yang', 'yin', 'yin'],    // ䷶ Feng - Abundance
  56: ['yin', 'yin', 'yang', 'yang', 'yin', 'yang'],    // ䷷ Lü - The Wanderer
  57: ['yang', 'yang', 'yin', 'yang', 'yang', 'yin'],   // ䷸ Xun - The Gentle Wind
  58: ['yin', 'yang', 'yang', 'yin', 'yang', 'yang'],   // ䷹ Dui - The Joyous Lake
  59: ['yang', 'yang', 'yin', 'yin', 'yang', 'yin'],    // ䷺ Huan - Dispersion
  60: ['yin', 'yang', 'yin', 'yin', 'yang', 'yang'],    // ䷻ Jie - Limitation
  61: ['yang', 'yang', 'yin', 'yin', 'yang', 'yang'],   // ䷼ Zhong Fu - Inner Truth
  62: ['yin', 'yin', 'yang', 'yang', 'yin', 'yin'],     // ䷽ Xiao Guo - Small Exceeding
  63: ['yang', 'yin', 'yang', 'yin', 'yang', 'yin'],    // ䷾ Ji Ji - After Completion
  64: ['yin', 'yang', 'yin', 'yang', 'yin', 'yang'],    // ䷿ Wei Ji - Before Completion
};
```

## Usage Example

```typescript
import HexagramSymbol from './components/HexagramSymbol';

// Render Hexagram 1 (The Creative)
<HexagramSymbol
  lines={['yang', 'yang', 'yang', 'yang', 'yang', 'yang']}
  size={60}
  color="#7C3AED"
/>
```
