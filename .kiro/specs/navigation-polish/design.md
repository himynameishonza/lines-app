# Design Document: Navigation Polish

## Overview

This design implements iOS-style liquid glass (blur) effects on navigation bars and creates a unified top navigation component for the React Native Expo app. The solution enhances the visual polish and user experience by:

1. Adding translucent blur effects to both top and bottom navigation bars using expo-blur
2. Creating a unified TopNavigationBar component that adapts to different screen contexts
3. Relocating the view mode toggle from screen content to the top navigation bar
4. Implementing contextual back button navigation for detail screens
5. Ensuring proper overlay positioning with safe area handling

The design maintains the existing inline styles approach (no NativeWind babel plugin) while introducing modern iOS-style visual effects.

## Architecture

### Component Hierarchy

```
App
├── TopNavigationBar (new)
│   ├── BlurView (expo-blur)
│   ├── BackButton (conditional)
│   ├── ScreenTitle
│   └── ViewModeToggle (conditional)
├── Screen Content
│   ├── HomeScreen
│   ├── HexagramsScreen
│   ├── NewReadingScreen
│   ├── SettingsScreen
│   └── HexagramDetailsCard
└── NavigationBar (enhanced with blur)
    └── BlurView (expo-blur)
```

### Navigation State Management

The app will need to track:
- Current active tab (existing)
- Current screen type (main screen vs detail screen)
- Navigation stack for back button functionality
- Screen-specific configuration (title, show back button, show view mode toggle)

### Screen Types

1. **Main Screens**: Dashboard, Hexagrams, New Reading, Settings
   - Show in bottom navigation
   - No back button in top nav
   - Only Hexagrams shows view mode toggle

2. **Detail Screens**: HexagramDetailsCard
   - Not in bottom navigation
   - Show back button in top nav
   - No view mode toggle

## Components and Interfaces

### 1. TopNavigationBar Component

A new unified component that renders the top navigation bar with blur effect and contextual controls.

```typescript
interface TopNavigationBarProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  showViewModeToggle?: boolean;
  viewMode?: 'carousel' | 'list' | 'grid';
  onViewModeChange?: (mode: 'carousel' | 'list' | 'grid') => void;
}

function TopNavigationBar({
  title,
  showBackButton = false,
  onBackPress,
  showViewModeToggle = false,
  viewMode,
  onViewModeChange
}: TopNavigationBarProps): JSX.Element
```

**Implementation Details:**
- Uses `position: 'absolute'` with `top: 0` to overlay content
- Wraps content in `BlurView` from expo-blur
- Uses `SafeAreaView` or manual safe area insets for notched devices
- Height: 88px (44px content + 44px safe area top on notched devices)
- Layout: Flexbox row with space-between alignment
- Left section: Back button (24x24 icon, 44x44 touch target)
- Center section: Title (centered, truncated if needed)
- Right section: View mode toggle (compact, 3 buttons)

### 2. Enhanced NavigationBar Component

Update existing bottom navigation bar to include blur effect.

```typescript
interface NavigationBarProps {
  activeTab: 'dashboard' | 'hexagrams' | 'new-reading' | 'settings';
  onTabChange: (tab: 'dashboard' | 'hexagrams' | 'new-reading' | 'settings') => void;
}

function NavigationBar({
  activeTab,
  onTabChange
}: NavigationBarProps): JSX.Element
```

**Implementation Details:**
- Wrap existing content in `BlurView` from expo-blur
- Maintain existing layout and functionality
- Add `position: 'absolute'` with `bottom: 0` to overlay content
- Use safe area insets for bottom padding on devices with home indicator
- Height: 64px + safe area bottom

### 3. Compact ViewModeToggle Component

Create a compact version of the view mode toggle suitable for top navigation bar.

```typescript
interface CompactViewModeToggleProps {
  activeMode: 'carousel' | 'list' | 'grid';
  onModeChange: (mode: 'carousel' | 'list' | 'grid') => void;
}

function CompactViewModeToggle({
  activeMode,
  onModeChange
}: CompactViewModeToggleProps): JSX.Element
```

**Implementation Details:**
- Smaller button size: 32x32 (vs current 40x40)
- Icon size: 18px (vs current 20px)
- Tighter spacing: 4px gap between buttons
- Same color scheme: cyan active, gray inactive
- Horizontal layout with minimal padding

### 4. BackButton Component

A simple back button component for the top navigation bar.

```typescript
interface BackButtonProps {
  onPress: () => void;
}

function BackButton({ onPress }: BackButtonProps): JSX.Element
```

**Implementation Details:**
- iOS-style chevron-left icon from Ionicons
- Icon size: 24px
- Touch target: 44x44px (iOS HIG standard)
- Color: #4A5568 (gray-700)
- Positioned with 8px left padding

## Data Models

### NavigationState

```typescript
type ScreenType = 'main' | 'detail';

interface NavigationState {
  activeTab: 'dashboard' | 'hexagrams' | 'new-reading' | 'settings';
  screenType: ScreenType;
  screenStack: ScreenConfig[];
}

interface ScreenConfig {
  type: ScreenType;
  title: string;
  showBackButton: boolean;
  showViewModeToggle: boolean;
  component: React.ComponentType;
}
```

### Screen Configurations

```typescript
const SCREEN_CONFIGS: Record<string, Omit<ScreenConfig, 'component'>> = {
  dashboard: {
    type: 'main',
    title: 'Dashboard',
    showBackButton: false,
    showViewModeToggle: false
  },
  hexagrams: {
    type: 'main',
    title: 'Hexagrams',
    showBackButton: false,
    showViewModeToggle: true
  },
  'new-reading': {
    type: 'main',
    title: 'New Reading',
    showBackButton: false,
    showViewModeToggle: false
  },
  settings: {
    type: 'main',
    title: 'Settings',
    showBackButton: false,
    showViewModeToggle: false
  },
  'hexagram-details': {
    type: 'detail',
    title: '', // Dynamic based on hexagram
    showBackButton: true,
    showViewModeToggle: false
  }
};
```

### BlurView Configuration

```typescript
interface BlurConfig {
  intensity: number;
  tint: 'light' | 'dark' | 'default';
}

const BLUR_CONFIG: BlurConfig = {
  intensity: 80,
  tint: 'light'
};
```


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Top navigation bar uses BlurView component

*For any* render of the TopNavigationBar component, it should contain a BlurView component from expo-blur as its root or wrapper element.

**Validates: Requirements 1.1, 8.1**

### Property 2: Bottom navigation bar uses BlurView component

*For any* render of the NavigationBar component, it should contain a BlurView component from expo-blur as its root or wrapper element.

**Validates: Requirements 2.1**

### Property 3: Blur intensity configuration is consistent

*For any* navigation bar component (top or bottom), the blur intensity should be set to 80 to create the frosted glass appearance.

**Validates: Requirements 1.3, 2.3, 8.2**

### Property 4: Navigation bars use absolute positioning

*For any* navigation bar component, the top navigation bar should have `position: 'absolute'` with `top: 0`, and the bottom navigation bar should have `position: 'absolute'` with `bottom: 0`.

**Validates: Requirements 1.4, 2.4, 7.1, 7.2**

### Property 5: View mode toggle only appears on Hexagrams screen

*For any* main screen other than Hexagrams (Dashboard, New Reading, Settings), the TopNavigationBar should not render the ViewModeToggle component.

**Validates: Requirements 3.2**

### Property 6: Back button only appears on detail screens

*For any* main screen (Dashboard, Hexagrams, New Reading, Settings), the TopNavigationBar should not render the BackButton component.

**Validates: Requirements 4.2**

### Property 7: Screen titles match screen configuration

*For any* screen configuration, when that screen is active, the TopNavigationBar should display the title specified in the screen's configuration.

**Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5, 6.6**

## Error Handling

### Blur Effect Fallback

If expo-blur is not available or fails to load:
- Gracefully degrade to solid background with opacity
- Log warning to console
- Maintain layout and functionality

```typescript
function SafeBlurView({ children, intensity, tint, style }) {
  try {
    return (
      <BlurView intensity={intensity} tint={tint} style={style}>
        {children}
      </BlurView>
    );
  } catch (error) {
    console.warn('BlurView not available, using fallback', error);
    return (
      <View style={[style, { backgroundColor: 'rgba(255, 255, 255, 0.9)' }]}>
        {children}
      </View>
    );
  }
}
```

### Navigation State Errors

If navigation state becomes inconsistent:
- Default to Dashboard screen
- Clear navigation stack
- Log error for debugging

```typescript
function safeNavigate(state: NavigationState): NavigationState {
  if (!state.activeTab || !SCREEN_CONFIGS[state.activeTab]) {
    console.error('Invalid navigation state, resetting to dashboard');
    return {
      activeTab: 'dashboard',
      screenType: 'main',
      screenStack: [SCREEN_CONFIGS.dashboard]
    };
  }
  return state;
}
```

### Safe Area Inset Handling

If safe area insets cannot be determined:
- Use default values (top: 44, bottom: 34 for notched devices)
- Ensure minimum touch targets are maintained

```typescript
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function useNavigationInsets() {
  try {
    const insets = useSafeAreaInsets();
    return insets;
  } catch (error) {
    console.warn('Safe area insets not available, using defaults');
    return { top: 44, bottom: 34, left: 0, right: 0 };
  }
}
```

## Testing Strategy

### Unit Testing Approach

Unit tests will verify specific component behaviors and configurations using React Native Testing Library. Focus areas:

1. **Component Rendering**
   - TopNavigationBar renders with correct props
   - NavigationBar renders with blur effect
   - BackButton renders with correct icon
   - CompactViewModeToggle renders with correct buttons

2. **Conditional Rendering**
   - Back button shows only on detail screens
   - View mode toggle shows only on Hexagrams screen
   - Screen titles update correctly

3. **User Interactions**
   - Back button press triggers onBackPress callback
   - View mode toggle buttons trigger onModeChange callback
   - Bottom navigation tab presses trigger onTabChange callback

4. **Style Verification**
   - Navigation bars have absolute positioning
   - Blur intensity is set correctly
   - Safe area insets are applied

### Property-Based Testing Approach

Property tests will verify universal behaviors across all valid inputs using a property-based testing library (fast-check for JavaScript/TypeScript). Each test should run a minimum of 100 iterations.

**Property Test Configuration:**
- Library: fast-check
- Minimum iterations: 100 per test
- Tag format: Feature: navigation-polish, Property {number}: {property_text}

**Property Test Implementation:**

1. **Property 5: View mode toggle only appears on Hexagrams screen**
   - Generate: Random main screen configurations (excluding Hexagrams)
   - Test: Render TopNavigationBar with each config
   - Assert: ViewModeToggle is not present in rendered output
   - Tag: Feature: navigation-polish, Property 5: View mode toggle only appears on Hexagrams screen

2. **Property 6: Back button only appears on detail screens**
   - Generate: Random main screen configurations
   - Test: Render TopNavigationBar with each config
   - Assert: BackButton is not present in rendered output
   - Tag: Feature: navigation-polish, Property 6: Back button only appears on detail screens

3. **Property 7: Screen titles match screen configuration**
   - Generate: Random screen configurations with titles
   - Test: Render TopNavigationBar with each config
   - Assert: Rendered title matches config title
   - Tag: Feature: navigation-polish, Property 7: Screen titles match screen configuration

### Integration Testing

Integration tests will verify the complete navigation flow:

1. **Screen Navigation Flow**
   - Navigate between all main screens
   - Verify top navigation updates correctly
   - Verify bottom navigation highlights correct tab

2. **Detail Screen Navigation**
   - Navigate from Hexagrams to HexagramDetailsCard
   - Verify back button appears
   - Press back button and verify return to Hexagrams

3. **View Mode Toggle Integration**
   - Navigate to Hexagrams screen
   - Verify toggle appears in top nav
   - Change view mode and verify screen updates

### Example Unit Tests

```typescript
describe('TopNavigationBar', () => {
  it('should render with title', () => {
    const { getByText } = render(
      <TopNavigationBar title="Dashboard" />
    );
    expect(getByText('Dashboard')).toBeTruthy();
  });

  it('should show back button when showBackButton is true', () => {
    const onBackPress = jest.fn();
    const { getByTestId } = render(
      <TopNavigationBar 
        title="Details" 
        showBackButton={true}
        onBackPress={onBackPress}
      />
    );
    expect(getByTestId('back-button')).toBeTruthy();
  });

  it('should not show back button when showBackButton is false', () => {
    const { queryByTestId } = render(
      <TopNavigationBar title="Dashboard" showBackButton={false} />
    );
    expect(queryByTestId('back-button')).toBeNull();
  });

  it('should show view mode toggle when showViewModeToggle is true', () => {
    const { getByTestId } = render(
      <TopNavigationBar 
        title="Hexagrams" 
        showViewModeToggle={true}
        viewMode="carousel"
        onViewModeChange={jest.fn()}
      />
    );
    expect(getByTestId('view-mode-toggle')).toBeTruthy();
  });

  it('should use absolute positioning', () => {
    const { getByTestId } = render(
      <TopNavigationBar title="Dashboard" />
    );
    const container = getByTestId('top-nav-container');
    expect(container.props.style).toMatchObject({
      position: 'absolute',
      top: 0
    });
  });
});

describe('NavigationBar', () => {
  it('should contain BlurView component', () => {
    const { UNSAFE_getByType } = render(
      <NavigationBar activeTab="dashboard" onTabChange={jest.fn()} />
    );
    expect(UNSAFE_getByType(BlurView)).toBeTruthy();
  });

  it('should use absolute positioning at bottom', () => {
    const { getByTestId } = render(
      <NavigationBar activeTab="dashboard" onTabChange={jest.fn()} />
    );
    const container = getByTestId('bottom-nav-container');
    expect(container.props.style).toMatchObject({
      position: 'absolute',
      bottom: 0
    });
  });
});
```

### Example Property Test

```typescript
import fc from 'fast-check';

describe('Property Tests - navigation-polish', () => {
  // Feature: navigation-polish, Property 5: View mode toggle only appears on Hexagrams screen
  it('should not show view mode toggle on non-Hexagrams main screens', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('dashboard', 'new-reading', 'settings'),
        (screenName) => {
          const { queryByTestId } = render(
            <TopNavigationBar 
              title={screenName}
              showViewModeToggle={false}
            />
          );
          expect(queryByTestId('view-mode-toggle')).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  // Feature: navigation-polish, Property 6: Back button only appears on detail screens
  it('should not show back button on main screens', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('dashboard', 'hexagrams', 'new-reading', 'settings'),
        (screenName) => {
          const { queryByTestId } = render(
            <TopNavigationBar 
              title={screenName}
              showBackButton={false}
            />
          );
          expect(queryByTestId('back-button')).toBeNull();
        }
      ),
      { numRuns: 100 }
    );
  });

  // Feature: navigation-polish, Property 7: Screen titles match screen configuration
  it('should display the title from screen configuration', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 50 }),
          showBackButton: fc.boolean(),
          showViewModeToggle: fc.boolean()
        }),
        (config) => {
          const { getByText } = render(
            <TopNavigationBar 
              title={config.title}
              showBackButton={config.showBackButton}
              showViewModeToggle={config.showViewModeToggle}
              viewMode="carousel"
              onViewModeChange={jest.fn()}
              onBackPress={jest.fn()}
            />
          );
          expect(getByText(config.title)).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Test Coverage Goals

- Unit test coverage: >80% for all new components
- Property test coverage: All universal properties (Properties 5-7)
- Integration test coverage: All navigation flows
- Manual testing: Visual blur effects, smooth transitions, safe area handling on physical devices
