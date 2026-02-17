# Design Document: Lines I Ching App - Design Completion

## Overview

This design document outlines the technical approach for completing the design implementation of the Lines I Ching app. The app is a React Native application built with Expo, TypeScript, and i18next for internationalization. The design completion focuses on eight key areas: adding romanization data, creating unique background gradients, implementing smooth animated transitions, displaying actual hexagram content, implementing search functionality, adding menu functionality, restoring the view toggle button, and redesigning list and grid views to match the new aesthetic.

The implementation will maintain the existing architecture while enhancing the user experience with proper data, smooth animations, and complete functionality. All changes will support both Czech and English localization and maintain 60fps performance on iOS and Android.

## Architecture

### Component Structure

The app follows a component-based architecture with clear separation of concerns:

- **Screens**: Top-level views (HexagramsScreen, HomeScreen, SettingsScreen)
- **Components**: Reusable UI elements (HexagramCard, TopNavigationBar, NavigationBar, FloatingViewToggle)
- **Data**: Hexagram data and reading history (hexagrams.ts, readings.ts)
- **i18n**: Localization configuration and translation files

### Data Flow

1. Hexagram data flows from `data/hexagrams.ts` to screen components
2. User interactions trigger state changes in screen components
3. State changes update child components through props
4. Animations are driven by Animated API values
5. Localization is handled by i18next hooks

### State Management

The app uses React hooks for local state management:
- `useState` for component state (view mode, centered index, search query)
- `useRef` for animation values and scroll references
- `useTranslation` for localized strings
- No global state management library is currently used

## Components and Interfaces

### 1. Enhanced Hexagram Interface

```typescript
export interface Hexagram {
  id: number;
  number: number;
  chineseName: string;
  romanization: string;  // NEW: Pinyin romanization
  isEvolving: boolean;
  lines: ('yin' | 'yang')[];
  graphics?: string;
  content: {
    cs: HexagramContent;
    en: HexagramContent;
  };
}
```

The Hexagram interface will be extended to include a `romanization` field containing the proper pinyin representation of the Chinese name.

### 2. Gradient Configuration

```typescript
export interface GradientPair {
  start: string;  // Hex color code
  end: string;    // Hex color code
}

export const hexagramGradients: GradientPair[] = [
  // 64 unique gradient pairs
  { start: '#8B6B61', end: '#6B4F47' },  // Hexagram 1
  { start: '#7B5E57', end: '#5B3E37' },  // Hexagram 2
  // ... 62 more pairs
];
```

A new configuration file will define 64 unique gradient pairs, one for each hexagram. Colors will be in the brownish/rose tone family to match the design aesthetic.

### 3. Search Component

```typescript
interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectHexagram: (hexagram: Hexagram) => void;
  language: 'cs' | 'en';
}

export function SearchModal({
  visible,
  onClose,
  onSelectHexagram,
  language
}: SearchModalProps) {
  // Search implementation
}
```

A new SearchModal component will provide search functionality with support for:
- Searching by hexagram number
- Searching by Chinese name
- Searching by translated name
- Searching by keywords in content
- Fuzzy matching for better UX

### 4. Menu Component

```typescript
interface MenuDrawerProps {
  visible: boolean;
  onClose: () => void;
  currentLanguage: 'cs' | 'en';
  onLanguageChange: (language: 'cs' | 'en') => void;
}

export function MenuDrawer({
  visible,
  onClose,
  currentLanguage,
  onLanguageChange
}: MenuDrawerProps) {
  // Menu implementation
}
```

A new MenuDrawer component will provide:
- Language selection (Czech/English)
- App settings
- About information
- Slide-out animation from left side

### 5. Enhanced HexagramsScreen

The HexagramsScreen will be enhanced with:
- Animated background gradient interpolation
- Dynamic description text display
- Search modal integration
- Menu drawer integration
- View toggle button visibility control

## Data Models

### Romanization Data

Each hexagram will have its romanization added to the data file. The romanization follows standard pinyin conventions:

```typescript
{
  id: 1,
  number: 1,
  chineseName: "乾",
  romanization: "Qián",  // NEW
  // ... rest of hexagram data
}
```

### Gradient Color Palette

The 64 gradient pairs will follow a cohesive color scheme:
- Base tones: Browns, roses, warm earth tones
- Saturation: Medium to low for calm aesthetic
- Brightness: Varied to create visual interest
- Contrast: Sufficient for white text readability

Example palette strategy:
- Hexagrams 1-16: Warm browns (#8B6B61 to #6B4F47 range)
- Hexagrams 17-32: Rose browns (#9B7B71 to #7B5B51 range)
- Hexagrams 33-48: Deep browns (#7B5E57 to #5B3E37 range)
- Hexagrams 49-64: Mixed warm tones (varied combinations)

### Search Index

For efficient searching, we'll create a search index structure:

```typescript
interface SearchIndex {
  hexagramNumber: number;
  searchableText: string;  // Combined: number, names, keywords
}

const searchIndex: SearchIndex[] = hexagrams.map(h => ({
  hexagramNumber: h.number,
  searchableText: `${h.number} ${h.chineseName} ${h.romanization} ${h.content.cs.meaning} ${h.content.en.meaning}`.toLowerCase()
}));
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Data Integrity Properties

**Property 1: All hexagrams have romanization**
*For any* hexagram in the system, it must have a non-empty romanization field.
**Validates: Requirements 1.1, 1.3**

**Property 2: Romanization display matches data**
*For any* hexagram displayed in carousel view, the rendered romanization text must match the romanization field from the hexagram data.
**Validates: Requirements 1.2, 1.4**

**Property 3: Unique gradient pairs**
*For any* two different hexagrams, their assigned gradient pairs must be different (64 unique pairs total).
**Validates: Requirements 2.1**

**Property 4: Gradient assignment consistency**
*For any* hexagram, when displayed multiple times, it must always use the same gradient pair.
**Validates: Requirements 2.2, 2.4**

**Property 5: Gradient colors in valid range**
*For any* gradient pair, both start and end colors must be valid hex colors in the brownish/rose tone range (hue 0-40° or 340-360°, saturation 20-60%, lightness 30-70%).
**Validates: Requirements 2.3**

### Animation Properties

**Property 6: Scroll-based color interpolation**
*For any* scroll position between two hexagrams, the interpolated gradient color must be a valid blend between the two hexagram gradients, proportional to the scroll position.
**Validates: Requirements 3.1, 3.2**

**Property 7: Smooth color transitions**
*For any* two adjacent interpolation steps (e.g., scroll positions differing by 1 pixel), the color difference must be below a perceptual threshold (ΔE < 5).
**Validates: Requirements 3.4**

### Content Display Properties

**Property 8: Description matches centered hexagram**
*For any* centered hexagram in the carousel, the displayed description text must match either the meaning or oracle content from that hexagram's data in the current language.
**Validates: Requirements 4.1, 4.4**

**Property 9: No placeholder text**
*For any* hexagram displayed in carousel view, the description text must not contain "Lorem ipsum" or other placeholder text.
**Validates: Requirements 4.2**

**Property 10: Localized content display**
*For any* hexagram and language setting (Czech or English), the displayed content must match the content for that language in the hexagram data.
**Validates: Requirements 4.3**

### Search Properties

**Property 11: Multi-field search**
*For any* search query, the results must include all hexagrams where the query matches the hexagram number, Chinese name, romanization, translated name, or content keywords.
**Validates: Requirements 5.2**

**Property 12: Bilingual search support**
*For any* search query in Czech or English, the search must return relevant results based on the content in that language.
**Validates: Requirements 5.3**

**Property 13: Search results display**
*For any* non-empty search results, the UI must render a list containing all matching hexagrams.
**Validates: Requirements 5.4**

**Property 14: Search result navigation**
*For any* selected search result, the system must navigate to display that hexagram in the carousel.
**Validates: Requirements 5.5**

### Localization Properties

**Property 15: Language change updates all text**
*For any* language change (Czech ↔ English), all displayed text elements (hexagram names, descriptions, UI labels) must update to the new language.
**Validates: Requirements 6.5**

### View Toggle Properties

**Property 16: View mode cycling**
*For any* current view mode (carousel, list, or grid), tapping the toggle button must cycle to the next view mode in the sequence: carousel → list → grid → carousel.
**Validates: Requirements 7.2**

**Property 17: Icon matches view mode**
*For any* view mode, the toggle button must display the corresponding icon (albums-outline for carousel, list-outline for list, grid-outline for grid).
**Validates: Requirements 7.4**

### View Consistency Properties

**Property 18: Bodoni font in list and grid**
*For any* hexagram displayed in list or grid view, the hexagram name must use the Bodoni font family.
**Validates: Requirements 8.1**

**Property 19: List view uses correct variant**
*For any* hexagram in list view, it must be rendered using HexagramCard with variant="list".
**Validates: Requirements 8.3**

**Property 20: Grid view uses correct variant**
*For any* hexagram in grid view, it must be rendered using HexagramCard with variant="grid".
**Validates: Requirements 8.4**

## Error Handling

### Invalid Data Handling

1. **Missing Romanization**: If a hexagram lacks romanization data, display the Chinese name only and log a warning
2. **Invalid Gradient Colors**: If a gradient pair contains invalid colors, fall back to a default gradient (#8B6B61 to #6B4F47)
3. **Missing Content**: If hexagram content is missing for the current language, fall back to the other language

### Search Error Handling

1. **Empty Query**: If search query is empty or only whitespace, show all hexagrams or a prompt to enter search terms
2. **No Results**: Display a friendly message suggesting alternative search terms or showing popular hexagrams
3. **Search Timeout**: If search takes too long (>2 seconds), show a loading indicator and allow cancellation

### Animation Error Handling

1. **Performance Degradation**: If frame rate drops below 30fps, simplify animations or disable gradient interpolation
2. **Invalid Scroll Position**: Clamp scroll position to valid range [0, maxScroll] to prevent interpolation errors

### UI Error Handling

1. **Menu/Search Modal Errors**: If modal fails to open, log error and show toast notification
2. **View Toggle Errors**: If view mode change fails, revert to previous view mode and log error
3. **Language Change Errors**: If language change fails, keep current language and show error message

## Testing Strategy

### Dual Testing Approach

This feature will use both unit tests and property-based tests for comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, and error conditions
- **Property tests**: Verify universal properties across all inputs
- Both approaches are complementary and necessary

### Unit Testing Focus

Unit tests will cover:
- Specific hexagram data examples (hexagram 1, hexagram 34, hexagram 64)
- Edge cases (empty search, invalid colors, missing data)
- Error conditions (network failures, invalid state)
- Integration points (navigation, modal opening/closing)
- UI component rendering (search modal, menu drawer, view toggle)

### Property-Based Testing

We will use **fast-check** (JavaScript/TypeScript property-based testing library) for property tests.

Each property test will:
- Run minimum 100 iterations
- Generate random valid inputs (hexagrams, scroll positions, search queries)
- Verify the property holds for all generated inputs
- Include a comment tag referencing the design property

Example tag format:
```typescript
// Feature: design-completion, Property 1: All hexagrams have romanization
```

### Test Configuration

```typescript
// jest.config.js or test setup
import fc from 'fast-check';

// Configure fast-check
fc.configureGlobal({
  numRuns: 100,  // Minimum iterations per property test
  verbose: true,
  seed: Date.now()
});
```

### Property Test Examples

**Property 1: All hexagrams have romanization**
```typescript
// Feature: design-completion, Property 1: All hexagrams have romanization
it('all hexagrams have non-empty romanization', () => {
  fc.assert(
    fc.property(
      fc.integer({ min: 0, max: 63 }),
      (index) => {
        const hexagram = placeholderHexagrams[index];
        expect(hexagram.romanization).toBeDefined();
        expect(hexagram.romanization.length).toBeGreaterThan(0);
      }
    ),
    { numRuns: 100 }
  );
});
```

**Property 6: Scroll-based color interpolation**
```typescript
// Feature: design-completion, Property 6: Scroll-based color interpolation
it('interpolates colors based on scroll position', () => {
  fc.assert(
    fc.property(
      fc.integer({ min: 0, max: 62 }),  // hexagram index
      fc.double({ min: 0, max: 1 }),    // interpolation factor
      (hexagramIndex, factor) => {
        const gradient1 = hexagramGradients[hexagramIndex];
        const gradient2 = hexagramGradients[hexagramIndex + 1];
        const interpolated = interpolateColor(gradient1, gradient2, factor);
        
        // Verify interpolated color is between start and end
        expect(isColorBetween(interpolated, gradient1.end, gradient2.start)).toBe(true);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Test Coverage Goals

- Unit test coverage: >80% of lines
- Property test coverage: All 20 correctness properties
- Integration test coverage: All user flows (search, menu, view toggle)
- E2E test coverage: Critical paths (carousel navigation, search to hexagram)

