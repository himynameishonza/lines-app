# Implementation Plan: Lines I-ching App - Phase 1 UI Scaffolding

## Overview

This implementation plan focuses on building the visual scaffolding for the Lines I-ching app using React Native, Expo, and NativeWind. Each task builds incrementally, starting with project setup, then creating shared components, followed by individual screens, and finally wiring everything together. All components use placeholder content and no navigation logic or state persistence is implemented in this phase.

## Tasks

- [x] 1. Set up project structure and dependencies
  - Initialize Expo project with TypeScript
  - Install and configure NativeWind with Tailwind CSS
  - Set up testing framework (Jest + React Native Testing Library)
  - Create directory structure: `/components`, `/screens`, `/types`
  - Configure `tailwind.config.js` with custom color palette and theme
  - Create placeholder data files for hexagrams and readings
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 2. Create shared UI components
  - [x] 2.1 Create HexagramCard component with three variants
    - Implement card component with props: `hexagramNumber`, `name`, `variant`
    - Support three variants: carousel, list, grid
    - Apply NativeWind styling for each variant
    - Use placeholder hexagram symbol (View with background color)
    - Add testID prop for testing
    - _Requirements: 4.6_

  - [x] 2.2 Write property test for HexagramCard
    - **Property 1: HexagramCard renders in all variants**
    - **Validates: Requirements 4.6**

  - [x] 2.3 Create ViewModeToggle component
    - Implement toggle with three buttons: carousel, list, grid
    - Add props: `activeMode`, `onModeChange`
    - Use @expo/vector-icons for view mode icons
    - Apply NativeWind styling for active/inactive states
    - _Requirements: 4.2_

  - [x] 2.4 Write unit tests for ViewModeToggle
    - Test three buttons render
    - Test a`tive state styling`
    - _Requirements: 4.2_

- [x] 3. Create NavigationBar component
  - [x] 3.1 Implement bottom navigation bar
    - Create NavigationBar with four items: Dashboard, Hexagrams, New Reading, Settings
    - Use @expo/vector-icons for navigation icons (Home, Book, PlusCircle, Settings)
    - Add prop: `activeTab` (default: "dashboard")
    - Apply NativeWind styling with safe area padding
    - Each item should have icon and label
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 3.2 Write property tests for NavigationBar
    - **Property 4: Navigation bar contains four items**
    - **Property 5: Navigation items have icons**
    - **Validates: Requirements 3.2, 3.3**

- [x] 4. Create SplashScreen
  - [x] 4.1 Implement splash screen layout
    - Create full-screen centered container
    - Add placeholder logo/graphic (View with background color or Image)
    - Add ActivityIndicator for loading state
    - Apply NativeWind styling for centered layout
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 4.2 Write property test for SplashScreen
    - **Property 2: Splash screen contains required elements**
    - **Validates: Requirements 1.2, 1.3**

- [x] 5. Create HomeScreen
  - [x] 5.1 Implement home screen with list layout
    - Create screen with header "My Readings"
    - Add ScrollView container
    - Create 3-5 placeholder list items using placeholder data
    - Each item shows: hexagram preview (colored View), title, date
    - Apply NativeWind styling for list items
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 5.2 Write property test for HomeScreen
    - **Property 3: Home screen contains list structure**
    - **Validates: Requirements 2.2, 2.3**

- [x] 6. Checkpoint - Ensure basic components render
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Create HexagramsScreen with view modes
  - [x] 7.1 Implement hexagrams screen structure
    - Create screen with header "Hexagrams"
    - Add ViewModeToggle component
    - Implement local state for view mode (useState)
    - Create content area that switches based on view mode
    - _Requirements: 4.1, 4.2_

  - [x] 7.2 Implement CarouselView
    - Use ScrollView with horizontal prop
    - Render 6-8 HexagramCard components with carousel variant
    - Apply NativeWind styling for horizontal scrolling
    - Use placeholder hexagram data
    - _Requirements: 4.3, 4.6_

  - [x] 7.3 Implement ListView
    - Use ScrollView with vertical layout
    - Render 6-8 HexagramCard components with list variant
    - Apply NativeWind styling for list layout
    - Use placeholder hexagram data
    - _Requirements: 4.4, 4.6_

  - [x] 7.4 Implement GridView
    - Use ScrollView with flexbox grid layout
    - Render 6-8 HexagramCard components with grid variant
    - Apply NativeWind styling for 2-column grid
    - Use placeholder hexagram data
    - _Requirements: 4.5, 4.6_

  - [x] 7.5 Write property tests for HexagramsScreen
    - **Property 6: Hexagrams screen has view mode toggle**
    - **Property 7: Hexagrams screen defaults to carousel view**
    - **Property 8: Hexagrams screen supports all view modes**
    - **Validates: Requirements 4.2, 4.3, 4.4, 4.5, 4.6**

- [x] 8. Create SettingsScreen
  - [x] 8.1 Implement settings screen layout
    - Create screen with header "Settings"
    - Add section label "Language"
    - Implement language selector using Picker or custom dropdown
    - Add language options: English, Chinese, Spanish (placeholder)
    - Apply NativeWind styling
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 8.2 Write property test for SettingsScreen
    - **Property 9: Settings screen contains language selector**
    - **Validates: Requirements 5.2, 5.3**

- [x] 9. Create NewReadingScreen
  - [x] 9.1 Implement new reading screen layout
    - Create screen with header "New Reading"
    - Add instructions text block with placeholder content
    - Add TextInput with placeholder "Enter your question..."
    - Add two TouchableOpacity buttons: "Random Hexagram" and "Coin Toss Method"
    - Apply NativeWind styling for form layout
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [x] 9.2 Write property test for NewReadingScreen
    - **Property 10: New reading screen contains all input elements**
    - **Validates: Requirements 6.2, 6.3, 6.4, 6.5**

- [x] 10. Create HexagramDetailsCard
  - [x] 10.1 Implement hexagram details card layout
    - Create full-screen component with ScrollView
    - Add close button (X icon) at top-right
    - Add header section with hexagram name, Chinese name, and number
    - Add scrollable content area with Lorem Ipsum placeholder text
    - Apply NativeWind styling for card layout
    - Add props: `hexagramNumber`, `name`, `chineseName`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [x] 10.2 Write property test for HexagramDetailsCard
    - **Property 11: Hexagram details card contains all information elements**
    - **Validates: Requirements 7.2, 7.3, 7.4, 7.5, 7.6**

- [x] 11. Checkpoint - Ensure all screens render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 12. Wire components together in App.tsx
  - [x] 12.1 Create main App component
    - Import all screen components
    - Create simple layout that displays all screens (stacked vertically for demo)
    - Add NavigationBar at the bottom
    - Use SafeAreaView for proper spacing
    - Apply NativeWind styling for app container
    - _Requirements: 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1_

  - [x] 12.2 Write integration property test
    - **Property 1: All core screens render**
    - **Validates: Requirements 1.1, 2.1, 4.1, 5.1, 6.1, 7.1**

- [x] 13. Final checkpoint - Complete Phase 1 validation
  - Run all tests and ensure they pass
  - Manually verify all screens render without errors
  - Verify visual consistency across screens
  - Ask the user if questions arise or if ready to proceed to Phase 2

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- No navigation logic or state persistence is implemented in Phase 1
- All content is placeholder data
- Focus is purely on visual scaffolding and component structure
