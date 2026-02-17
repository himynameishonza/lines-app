# New Design Implementation

## Overview
Implemented the new, more polished design for the Lines I Ching app based on the provided design mockup.

## Key Changes

### 1. Top Navigation Bar
- **New Component**: `TopNavigationBar.tsx`
- Features:
  - Menu icon (left)
  - "Hexagramy" title (center)
  - Search icon (right)
  - Transparent background that sits on top of gradient
  - Respects safe area insets

### 2. Bottom Navigation
- **Updated**: `NavigationBar.tsx`
- Simplified to 3 icon-only buttons:
  - Book icon (Readings/Home)
  - Grid icon (Hexagrams)
  - Circle icon (Settings)
- No labels, just icons
- Icons are white with opacity changes for active/inactive states
- Positioned at bottom with safe area insets

### 3. Carousel Cards
- **Updated**: `HexagramCard.tsx`
- New design features:
  - Hexagram symbol + Chinese name (top left)
  - Large hexagram number in Bodoni font (top right)
  - Background image with dark overlay
  - Hexagram name in Bodoni Bold font (bottom center)
  - Romanization text below name (uppercase, letter-spaced)
  - Rounded corners (24px radius)
  - Dark background (#2A2A2A) as fallback

### 4. Background Gradient
- **Updated**: `HexagramsScreen.tsx`
- Dynamic background that changes based on centered carousel item
- Brownish/rose gradient tones matching the design
- Array of color pairs that cycle through hexagrams

### 5. Screen Layout
- **Updated**: `HexagramsScreen.tsx`
- Top navigation integrated into screen
- Carousel centered vertically
- Description text below carousel (Lorem ipsum placeholder)
- Background fills entire screen
- Proper spacing and padding

### 6. Typography
- **Added**: Bodoni Moda font family
- Used for:
  - Hexagram numbers (bold, 48px)
  - Hexagram names (bold, 36px)
  - Decorative headlines throughout

### 7. Status Bar
- **Updated**: `App.tsx`
- Changed to `style="light"` for white icons on dark backgrounds

## Components Modified

1. `App.tsx` - Removed FloatingViewToggle, updated status bar
2. `NavigationBar.tsx` - Simplified to 3 icon-only buttons
3. `HexagramCard.tsx` - Complete redesign for carousel variant
4. `HexagramsScreen.tsx` - Added top nav, background gradient, new layout
5. `TopNavigationBar.tsx` - New component
6. `BodoniText.tsx` - New component for Bodoni font usage

## Features Preserved

- View mode toggle functionality (hidden for now, only carousel implemented)
- List and grid views still functional (with old design)
- Navigation between screens
- Hexagram detail view
- Scroll position preservation
- All existing functionality

## Next Steps

To complete the design implementation:

1. **Add romanization data** - Currently hardcoded as "DAZHUANG", needs to be added to hexagram data
2. **Implement list/grid designs** - Currently using old design, need new mockups
3. **Add more background colors** - Currently only 3 color pairs, need 64 unique gradients
4. **Implement search functionality** - Search icon in top nav needs implementation
5. **Implement menu functionality** - Menu icon in top nav needs implementation
6. **Add view toggle button** - Design shows it in top right, currently hidden
7. **Refine description text** - Replace Lorem ipsum with actual hexagram descriptions
8. **Add smooth background transitions** - Animate between background colors as carousel scrolls

## Design Fidelity

The implementation closely matches the provided design:
- ✅ Top navigation layout
- ✅ Bottom navigation icons
- ✅ Carousel card design
- ✅ Background gradient
- ✅ Typography (Bodoni font)
- ✅ Spacing and proportions
- ✅ Color scheme
- ⚠️ View toggle button (hidden, needs design clarification)
- ⚠️ Romanization (hardcoded, needs data)
