# Design Document: Lines I-ching App

## Overview

The Lines I-ching application is a mobile/web app that provides users with tools for I-ching hexagram readings and consultations. This Phase 1 design focuses on establishing the visual scaffolding - creating all screen layouts, UI components, and design elements without implementing navigation logic, state management, or data persistence.

The architecture follows a React Native component-based approach using Expo and NativeWind for styling. Each screen is composed of reusable UI components that follow a consistent design system based on Tailwind CSS utility classes.

### Design Goals

1. Create all seven main screens with proper layout structure
2. Establish a consistent visual design system using NativeWind/Tailwind utilities
3. Build reusable UI components (cards, buttons, navigation elements)
4. Support multiple view modes for hexagram browsing (carousel, list, grid)
5. Use placeholder content throughout (no real data or logic)
6. Prepare the foundation for future navigation and state management

## Architecture

### Component Hierarchy

```
App
├── SplashScreen
├── HomeScreen
│   └── ReadingListItem (placeholder components)
├── HexagramsScreen
│   ├── ViewModeToggle
│   ├── CarouselView
│   │   └── HexagramCard
│   ├── ListView
│   │   └── HexagramCard
│   └── GridView
│       └── HexagramCard
├── NewReadingScreen
│   ├── QuestionInput
│   ├── InstructionsText
│   └── MethodButtons
├── SettingsScreen
│   └── LanguageSelector
├── HexagramDetailsCard
│   ├── CloseButton
│   ├── HexagramHeader
│   └── ScrollableContent
└── NavigationBar
    └── NavItem (x4)
```

### Technology Stack

**Framework**: React Native with Expo
**Styling**: NativeWind (Tailwind CSS for React Native)
**Language**: TypeScript
**Testing**: Jest + React Native Testing Library

**Key Dependencies**:
- `expo` - React Native framework
- `nativewind` - Tailwind CSS for React Native
- `react-native` - Core React Native library
- `typescript` - Type safety
- `@testing-library/react-native` - Component testing
- `jest` - Test runner

**NativeWind Configuration**:
- Tailwind utility classes applied via `className` prop
- Custom theme configuration in `tailwind.config.js`
- Design tokens (colors, spacing, typography) defined in Tailwind config
- No routing or navigation library integration in Phase 1
- No state management library in Phase 1

## Components and Interfaces

### Core Screen Components

#### SplashScreen

**Purpose**: Initial loading screen displayed when the app starts

**Visual Elements**:
- Full-screen container with centered content
- Application logo/graphics (placeholder image)
- Loading spinner or animated indicator (ActivityIndicator from React Native)
- Background color or gradient

**Props**: None (static component)

**NativeWind Styling**:
- Container: `className="flex-1 items-center justify-center bg-slate-50"`
- Logo container: `className="mb-8"`
- Loading indicator: Native ActivityIndicator component

**Layout**:
```
┌─────────────────────┐
│                     │
│                     │
│    [LOGO/GRAPHIC]   │
│                     │
│    [LOADING...]     │
│                     │
│                     │
└─────────────────────┘
```

---

#### HomeScreen

**Purpose**: Dashboard showing list of previous readings

**Visual Elements**:
- Screen title/header ("Dashboard" or "My Readings")
- ScrollView container
- 3-5 placeholder list items showing mock reading entries
- Each list item shows: hexagram preview, title, date (placeholder text)

**Props**: None (uses placeholder data)

**NativeWind Styling**:
- Container: `className="flex-1 bg-white"`
- Header: `className="text-3xl font-bold px-4 pt-6 pb-4"`
- List item: `className="flex-row items-center p-4 border-b border-gray-200"`
- Hexagram preview: `className="w-12 h-12 bg-gray-300 rounded mr-4"`

**Layout**:
```
┌─────────────────────┐
│  My Readings        │
├─────────────────────┤
│ [Hex] Reading 1     │
│       Date          │
├─────────────────────┤
│ [Hex] Reading 2     │
│       Date          │
├─────────────────────┤
│ [Hex] Reading 3     │
│       Date          │
└─────────────────────┘
```

---

#### HexagramsScreen

**Purpose**: Browse all hexagrams in different view modes

**Visual Elements**:
- Screen title/header ("Hexagrams")
- View mode toggle (3 buttons: Carousel, List, Grid)
- Content area that switches between three view modes
- Placeholder hexagram cards (6-8 cards visible)

**Props**:
- `viewMode`: string (default: "carousel")

**State** (UI only, no persistence):
- Current view mode selection

**NativeWind Styling**:
- Container: `className="flex-1 bg-white"`
- Header: `className="text-3xl font-bold px-4 pt-6 pb-4"`
- Toggle container: `className="flex-row justify-center gap-2 px-4 pb-4"`
- Toggle button: `className="px-4 py-2 rounded-lg border border-gray-300"`
- Active toggle: `className="px-4 py-2 rounded-lg bg-cyan-600 border-cyan-600"`

**Layout** (Carousel mode):
```
┌─────────────────────┐
│  Hexagrams          │
│  [≡][▦][▦]         │ ← View toggle
├─────────────────────┤
│                     │
│  ← [CARD] [CARD] →  │
│                     │
└─────────────────────┘
```

**Layout** (List mode):
```
┌─────────────────────┐
│  Hexagrams          │
│  [▦][≡][▦]         │
├─────────────────────┤
│ [Hex 1] Name        │
├─────────────────────┤
│ [Hex 2] Name        │
├─────────────────────┤
│ [Hex 3] Name        │
└─────────────────────┘
```

**Layout** (Grid mode):
```
┌─────────────────────┐
│  Hexagrams          │
│  [▦][▦][≡]         │
├─────────────────────┤
│ [Hex1] [Hex2] [Hex3]│
│ [Hex4] [Hex5] [Hex6]│
│ [Hex7] [Hex8] [Hex9]│
└─────────────────────┘
```

---

#### NewReadingScreen

**Purpose**: Interface for creating a new hexagram reading

**Visual Elements**:
- Screen title/header ("New Reading")
- Instructions text block explaining how to ask questions
- TextInput field with placeholder "Enter your question..."
- Two method buttons:
  - "Random Hexagram" button
  - "Coin Toss Method" button

**Props**: None

**NativeWind Styling**:
- Container: `className="flex-1 bg-white px-4"`
- Header: `className="text-3xl font-bold pt-6 pb-4"`
- Instructions: `className="text-base text-gray-600 mb-6"`
- TextInput: `className="border border-gray-300 rounded-lg p-4 mb-6 text-base"`
- Button: `className="bg-cyan-600 rounded-lg p-4 mb-4"`
- Button text: `className="text-white text-center text-lg font-semibold"`

**Layout**:
```
┌─────────────────────┐
│  New Reading        │
├─────────────────────┤
│ How to ask:         │
│ [Instructions text] │
│                     │
│ ┌─────────────────┐ │
│ │ Your question?  │ │
│ └─────────────────┘ │
│                     │
│ [Random Hexagram]   │
│                     │
│ [Coin Toss Method]  │
└─────────────────────┘
```

---

#### SettingsScreen

**Purpose**: Application settings and preferences

**Visual Elements**:
- Screen title/header ("Settings")
- Section label "Language"
- Language selector (Picker component or custom dropdown)
- Language options: English, Chinese, Spanish (placeholder options)

**Props**: None

**NativeWind Styling**:
- Container: `className="flex-1 bg-white px-4"`
- Header: `className="text-3xl font-bold pt-6 pb-4"`
- Section label: `className="text-lg font-semibold mb-2"`
- Picker container: `className="border border-gray-300 rounded-lg"`

**Layout**:
```
┌─────────────────────┐
│  Settings           │
├─────────────────────┤
│                     │
│ Language            │
│ ┌─────────────────┐ │
│ │ English      ▼  │ │
│ └─────────────────┘ │
│                     │
└─────────────────────┘
```

---

#### HexagramDetailsCard

**Purpose**: Display detailed information about a specific hexagram

**Visual Elements**:
- Close/back button (top-left or top-right)
- Hexagram name header (large text)
- Chinese name (smaller text below header)
- Hexagram number (e.g., "Hexagram 1")
- ScrollView content area with Lorem Ipsum placeholder text
- Visual hexagram symbol (optional, can be placeholder)

**Props**:
- `hexagramNumber`: number
- `name`: string (placeholder)
- `chineseName`: string (placeholder)

**NativeWind Styling**:
- Container: `className="flex-1 bg-white"`
- Close button: `className="absolute top-4 right-4 z-10 p-2"`
- Header container: `className="px-4 pt-16 pb-6 border-b border-gray-200"`
- Name: `className="text-3xl font-bold mb-2"`
- Chinese name: `className="text-xl text-gray-600 mb-1"`
- Number: `className="text-sm text-gray-500"`
- Content: `className="px-4 py-6 text-base leading-relaxed"`

**Layout**:
```
┌─────────────────────┐
│ [X]                 │
│                     │
│  Hexagram Name      │
│  卦名               │
│  Hexagram 1         │
├─────────────────────┤
│ Lorem ipsum dolor   │
│ sit amet...         │
│                     │
│ [Scrollable content]│
│                     │
│                     │
└─────────────────────┘
```

---

### Shared Components

#### NavigationBar

**Purpose**: Bottom navigation for main app sections

**Visual Elements**:
- Fixed bottom bar with 4 navigation items
- Each item has: icon, label
- Items: Dashboard, Hexagrams, New Reading, Settings
- Active state styling (different color/weight)

**Props**:
- `activeTab`: string (default: "dashboard")

**NativeWind Styling**:
- Container: `className="flex-row bg-white border-t border-gray-200 pb-safe"`
- Nav item: `className="flex-1 items-center justify-center py-2"`
- Icon container: `className="mb-1"`
- Label: `className="text-xs text-gray-600"`
- Active label: `className="text-xs text-cyan-600 font-semibold"`

**Note**: Use `@expo/vector-icons` for navigation icons

**Layout**:
```
┌─────────────────────┐
│ [🏠] [📖] [➕] [⚙️] │
│ Dash Hex  New  Set  │
└─────────────────────┘
```

---

#### HexagramCard

**Purpose**: Reusable card component for displaying hexagram preview

**Visual Elements**:
- Card container with border/shadow
- Hexagram symbol or placeholder
- Hexagram name
- Hexagram number

**Props**:
- `hexagramNumber`: number
- `name`: string
- `variant`: string ("carousel" | "list" | "grid")

**NativeWind Styling** (varies by variant):
- Carousel: `className="w-64 h-80 bg-white rounded-xl shadow-lg p-6 mx-2"`
- List: `className="flex-row items-center p-4 bg-white border-b border-gray-200"`
- Grid: `className="w-[48%] aspect-square bg-white rounded-lg shadow p-4 mb-4"`

**Layout** (varies by variant):
```
Carousel:          List:              Grid:
┌─────────┐       ┌──────────────┐   ┌─────┐
│  [Hex]  │       │ [Hex] Name   │   │[Hex]│
│         │       └──────────────┘   │Name │
│  Name   │                          └─────┘
│  #1     │
└─────────┘
```

---

#### ViewModeToggle

**Purpose**: Toggle between carousel, list, and grid views

**Visual Elements**:
- Three buttons in a row
- Icons representing each view mode
- Active state styling

**Props**:
- `activeMode`: string
- `onModeChange`: function (placeholder, no actual logic)

**NativeWind Styling**:
- Container: `className="flex-row justify-center gap-2"`
- Button: `className="px-4 py-2 rounded-lg border border-gray-300"`
- Active button: `className="px-4 py-2 rounded-lg bg-cyan-600 border-cyan-600"`
- Icon color: gray for inactive, white for active

**Layout**:
```
┌─────────────────┐
│ [≡] [▦] [▦]    │
└─────────────────┘
```

## Data Models

### Hexagram (Placeholder)

For Phase 1, hexagram data is represented as simple placeholder objects:

```typescript
interface Hexagram {
  number: number;          // 1-64
  name: string;            // e.g., "The Creative"
  chineseName: string;     // e.g., "乾"
  content: string;         // Lorem ipsum placeholder
}
```

**Example placeholder data**:
```typescript
const placeholderHexagrams = [
  {
    number: 1,
    name: "The Creative",
    chineseName: "乾",
    content: "Lorem ipsum dolor sit amet..."
  },
  {
    number: 2,
    name: "The Receptive",
    chineseName: "坤",
    content: "Lorem ipsum dolor sit amet..."
  },
  // ... 6-8 more for display purposes
];
```

### Reading (Placeholder)

```typescript
interface Reading {
  id: string;
  hexagramNumber: number;
  question: string;        // Placeholder text
  date: string;            // Placeholder date string
  affirmation: string;     // Placeholder text
}
```

**Example placeholder data**:
```typescript
const placeholderReadings = [
  {
    id: "1",
    hexagramNumber: 1,
    question: "Sample question 1",
    date: "2024-01-15",
    affirmation: "Sample affirmation text"
  },
  {
    id: "2",
    hexagramNumber: 5,
    question: "Sample question 2",
    date: "2024-01-14",
    affirmation: "Sample affirmation text"
  },
  // ... 3-5 items for display
];
```

### Design System

**Colors** (defined in `tailwind.config.js`):
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4', // cyan
          dark: '#6B46C1',
        },
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          600: '#718096',
          700: '#4A5568',
          900: '#1A202C',
        }
      }
    }
  }
}
```

**Typography** (NativeWind classes):
- Heading 1: `className="text-3xl font-bold"`
- Heading 2: `className="text-2xl font-semibold"`
- Heading 3: `className="text-xl font-semibold"`
- Body: `className="text-base"`
- Small: `className="text-sm"`
- Caption: `className="text-xs"`

**Spacing** (Tailwind default scale):
- xs: `p-1` (4px)
- sm: `p-2` (8px)
- md: `p-4` (16px)
- lg: `p-6` (24px)
- xl: `p-8` (32px)
- xxl: `p-12` (48px)

**Shadows** (NativeWind classes):
- Small: `className="shadow-sm"`
- Medium: `className="shadow-md"`
- Large: `className="shadow-lg"`


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system - essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

For this Phase 1 implementation, our correctness properties focus on structural validation - ensuring that all required UI components and elements are present in the rendered output. Since we're building scaffolding without logic, these are primarily existence checks and structural assertions rather than behavioral properties.

### Component Rendering Properties

**Property 1: All core screens render**
*For any* application initialization, all seven core screen components (SplashScreen, HomeScreen, HexagramsScreen, NewReadingScreen, SettingsScreen, HexagramDetailsCard, NavigationBar) should be available and renderable without errors.
**Validates: Requirements 1.1, 2.1, 4.1, 5.1, 6.1, 7.1**

### Splash Screen Properties

**Property 2: Splash screen contains required elements**
*For any* SplashScreen render, the component should contain both a graphics element and a loading indicator element.
**Validates: Requirements 1.2, 1.3**

### Home Screen Properties

**Property 3: Home screen contains list structure**
*For any* HomeScreen render, the component should contain a list layout container with placeholder list items.
**Validates: Requirements 2.2, 2.3**

### Navigation Bar Properties

**Property 4: Navigation bar contains four items**
*For any* NavigationBar render, the component should contain exactly four navigation items with the labels "Dashboard", "Hexagram list", "Create new reading", and "Settings".
**Validates: Requirements 3.2**

**Property 5: Navigation items have icons**
*For any* NavigationBar render, each of the four navigation items should contain an icon element.
**Validates: Requirements 3.3**

### Hexagrams Screen Properties

**Property 6: Hexagrams screen has view mode toggle**
*For any* HexagramsScreen render, the component should contain a view mode toggle with exactly three options: carousel, list, and grid.
**Validates: Requirements 4.2**

**Property 7: Hexagrams screen defaults to carousel view**
*For any* HexagramsScreen initial render, the component should display hexagram cards in carousel view mode.
**Validates: Requirements 4.3**

**Property 8: Hexagrams screen supports all view modes**
*For any* HexagramsScreen component, it should be capable of rendering in all three view modes (carousel, list, grid) with placeholder hexagram cards visible in each mode.
**Validates: Requirements 4.4, 4.5, 4.6**

### Settings Screen Properties

**Property 9: Settings screen contains language selector**
*For any* SettingsScreen render, the component should contain a language selection UI element with available language options.
**Validates: Requirements 5.2, 5.3**

### New Reading Screen Properties

**Property 10: New reading screen contains all input elements**
*For any* NewReadingScreen render, the component should contain a question input field, instruction text, a random hexagram button, and a coin toss method button.
**Validates: Requirements 6.2, 6.3, 6.4, 6.5**

### Hexagram Details Card Properties

**Property 11: Hexagram details card contains all information elements**
*For any* HexagramDetailsCard render with valid hexagram data, the component should display a close button, hexagram name header, Chinese name, hexagram number, and scrollable content area.
**Validates: Requirements 7.2, 7.3, 7.4, 7.5, 7.6**

## Error Handling

Since Phase 1 focuses on UI scaffolding without logic, error handling is minimal:

### Component Rendering Errors

**Missing Props**: Components should render with default/placeholder values if props are missing
- HexagramCard without hexagram data → show placeholder text
- HexagramDetailsCard without hexagram number → show "Hexagram 1" as default

**Invalid View Mode**: If an invalid view mode is passed to HexagramsScreen, default to carousel view

**Rendering Failures**: If a component fails to render, log error to console (no user-facing error UI in Phase 1)

### Future Error Handling Considerations

Phase 2 and beyond will need:
- Navigation error handling (invalid routes)
- Data loading error states
- Form validation errors
- Network request failures
- State persistence errors

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific component renders, element existence, and edge cases
- **Property tests**: Verify structural properties hold across different render scenarios

Both testing approaches are complementary and necessary for validating the UI scaffolding.

### Unit Testing

Unit tests should focus on:

1. **Component Rendering**: Each screen component renders without errors
2. **Element Existence**: Specific UI elements exist in rendered output
3. **Default States**: Components render with correct default values
4. **Placeholder Content**: Placeholder data displays correctly
5. **Styling**: NativeWind classes are applied correctly

**Example unit tests**:
```typescript
// SplashScreen
- renders without crashing
- displays graphics element
- displays ActivityIndicator

// HomeScreen
- renders without crashing
- displays ScrollView container
- displays placeholder reading items

// NavigationBar
- renders without crashing
- displays exactly 4 navigation items
- displays correct labels for each item
- displays icons for each item

// HexagramsScreen
- renders without crashing
- displays view mode toggle
- defaults to carousel view
- displays placeholder hexagram cards

// ... similar for other screens
```

### Property-Based Testing

Property-based tests should verify structural properties across multiple render scenarios. Since this is UI scaffolding, we'll use snapshot testing and structural assertions rather than traditional property-based testing with random inputs.

**Testing Library**: React Native Testing Library + Jest

**Property Test Configuration**:
- Each property test should verify the property holds across different component states
- Use descriptive test names that reference the design property
- Tag format: `Feature: lines-iching-app, Property {number}: {property_text}`

**Example property tests**:
```typescript
// Feature: lines-iching-app, Property 1: All core screens render
test('all core screens render without errors', () => {
  const screens = [
    SplashScreen,
    HomeScreen,
    HexagramsScreen,
    NewReadingScreen,
    SettingsScreen,
    HexagramDetailsCard,
    NavigationBar
  ];
  
  screens.forEach(Screen => {
    const { container } = render(<Screen />);
    expect(container).toBeTruthy();
  });
});

// Feature: lines-iching-app, Property 4: Navigation bar contains four items
test('navigation bar always contains exactly four items', () => {
  const { getAllByRole } = render(<NavigationBar />);
  const navItems = getAllByRole('button');
  expect(navItems).toHaveLength(4);
});

// Feature: lines-iching-app, Property 8: Hexagrams screen supports all view modes
test('hexagrams screen renders in all view modes', () => {
  const viewModes = ['carousel', 'list', 'grid'];
  
  viewModes.forEach(mode => {
    const { container } = render(<HexagramsScreen viewMode={mode} />);
    const cards = container.findAllByTestId('hexagram-card');
    expect(cards.length).toBeGreaterThan(0);
  });
});
```

### Testing Priorities

**High Priority** (must test):
1. All screen components render (Property 1)
2. Navigation bar structure (Properties 4, 5)
3. Hexagrams screen view modes (Properties 6, 7, 8)
4. Required elements in each screen (Properties 2, 3, 9, 10, 11)

**Medium Priority** (should test):
1. Placeholder content displays correctly
2. Component props are handled correctly
3. Default states are correct

**Low Priority** (nice to have):
1. Visual regression testing (snapshots)
2. Accessibility testing (ARIA labels, keyboard navigation)
3. Responsive layout testing

### Test Organization

```
__tests__/
├── unit/
│   ├── SplashScreen.test.tsx
│   ├── HomeScreen.test.tsx
│   ├── HexagramsScreen.test.tsx
│   ├── NewReadingScreen.test.tsx
│   ├── SettingsScreen.test.tsx
│   ├── HexagramDetailsCard.test.tsx
│   └── NavigationBar.test.tsx
└── properties/
    ├── component-rendering.test.tsx
    ├── navigation-structure.test.tsx
    ├── hexagrams-views.test.tsx
    └── screen-elements.test.tsx
```

### Manual Testing Checklist

Since this is UI scaffolding, manual visual inspection is important:

- [ ] All screens render without console errors
- [ ] Splash screen displays graphics and loading indicator
- [ ] Home screen shows list layout with placeholder items
- [ ] Navigation bar shows 4 items with icons and labels
- [ ] Hexagrams screen shows view toggle and defaults to carousel
- [ ] Hexagrams screen can display all three view modes
- [ ] Settings screen shows language selector
- [ ] New reading screen shows all input elements
- [ ] Hexagram details card shows all information sections
- [ ] Visual design is consistent across screens
- [ ] Layout is responsive (if targeting multiple screen sizes)
