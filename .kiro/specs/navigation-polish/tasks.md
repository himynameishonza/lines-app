# Implementation Plan: Navigation Polish

## Overview

This implementation plan adds iOS-style liquid glass blur effects to navigation bars and creates a unified top navigation component. The approach focuses on:

1. Installing and configuring expo-blur
2. Creating new navigation components with blur effects
3. Refactoring existing components to support the new navigation structure
4. Integrating components into the app with proper state management
5. Testing the implementation with unit and property-based tests

## Tasks

- [x] 1. Install and configure expo-blur
  - Run `npx expo install expo-blur` to add the blur library
  - Verify installation in package.json
  - _Requirements: 1.1, 2.1, 8.1_

- [x] 2. Create BackButton component
  - [x] 2.1 Implement BackButton component
    - Create `components/BackButton.tsx`
    - Use Ionicons chevron-back icon (24px)
    - Implement 44x44px touch target with 8px left padding
    - Use gray-700 color (#4A5568)
    - Accept onPress callback prop
    - Add testID="back-button" for testing
    - _Requirements: 4.1, 4.3, 4.4_
  
  - [x] 2.2 Write unit tests for BackButton
    - Test component renders with correct icon
    - Test onPress callback is invoked when pressed
    - Test touch target size is 44x44px
    - _Requirements: 4.3, 4.4_

- [x] 3. Create CompactViewModeToggle component
  - [x] 3.1 Implement CompactViewModeToggle component
    - Create `components/CompactViewModeToggle.tsx`
    - Use 32x32px buttons with 18px icons
    - Use 4px gap between buttons
    - Maintain cyan active (#06b6d4) and gray inactive (#718096) colors
    - Accept activeMode and onModeChange props
    - Add testID="view-mode-toggle" for testing
    - _Requirements: 3.1, 3.4_
  
  - [x] 3.2 Write unit tests for CompactViewModeToggle
    - Test all three mode buttons render
    - Test active mode is highlighted correctly
    - Test onModeChange callback is invoked with correct mode
    - _Requirements: 3.4_

- [x] 4. Create TopNavigationBar component
  - [x] 4.1 Implement TopNavigationBar component with blur effect
    - Create `components/TopNavigationBar.tsx`
    - Wrap content in BlurView with intensity 80 and tint "light"
    - Use absolute positioning with top: 0
    - Use SafeAreaView or useSafeAreaInsets for notched devices
    - Implement flexbox row layout with space-between
    - Add testID="top-nav-container" for testing
    - _Requirements: 1.1, 1.3, 1.4, 5.1, 5.5, 7.1, 7.4, 7.5, 8.1, 8.2, 8.3_
  
  - [x] 4.2 Add conditional BackButton rendering
    - Render BackButton on left when showBackButton prop is true
    - Pass onBackPress callback to BackButton
    - _Requirements: 4.1, 5.3_
  
  - [x] 4.3 Add screen title display
    - Render title text in center with truncation
    - Use appropriate font size and weight
    - Center align the title
    - _Requirements: 5.2, 6.1_
  
  - [x] 4.4 Add conditional CompactViewModeToggle rendering
    - Render CompactViewModeToggle on right when showViewModeToggle prop is true
    - Pass viewMode and onViewModeChange props
    - _Requirements: 3.1, 5.4_
  
  - [x] 4.5 Write unit tests for TopNavigationBar
    - Test component renders with title
    - Test BlurView is present with correct intensity
    - Test absolute positioning styles
    - Test back button shows when showBackButton is true
    - Test back button hidden when showBackButton is false
    - Test view mode toggle shows when showViewModeToggle is true
    - Test view mode toggle hidden when showViewModeToggle is false
    - Test safe area insets are applied
    - _Requirements: 1.1, 1.3, 1.4, 4.1, 4.2, 5.2, 5.3, 5.4, 7.1, 7.4, 7.5_
  
  - [x] 4.6 Write property test for view mode toggle visibility
    - **Property 5: View mode toggle only appears on Hexagrams screen**
    - **Validates: Requirements 3.2**
    - Generate random non-Hexagrams screen configs
    - Test that view mode toggle is not rendered
    - Run 100 iterations minimum
  
  - [x] 4.7 Write property test for back button visibility
    - **Property 6: Back button only appears on detail screens**
    - **Validates: Requirements 4.2**
    - Generate random main screen configs
    - Test that back button is not rendered
    - Run 100 iterations minimum
  
  - [x] 4.8 Write property test for screen titles
    - **Property 7: Screen titles match screen configuration**
    - **Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5, 6.6**
    - Generate random screen configs with titles
    - Test that rendered title matches config title
    - Run 100 iterations minimum

- [x] 5. Update NavigationBar component with blur effect
  - [x] 5.1 Add BlurView wrapper to NavigationBar
    - Import BlurView from expo-blur
    - Wrap existing content in BlurView with intensity 80 and tint "light"
    - Update positioning to absolute with bottom: 0
    - Add safe area insets for bottom padding
    - Add testID="bottom-nav-container" for testing
    - _Requirements: 2.1, 2.3, 2.4, 7.2, 7.4, 8.1, 8.2, 8.3_
  
  - [x] 5.2 Write unit tests for updated NavigationBar
    - Test BlurView is present
    - Test blur intensity is 80
    - Test absolute positioning at bottom
    - Test safe area insets are applied
    - Test existing tab functionality still works
    - _Requirements: 2.1, 2.3, 2.4, 7.2, 7.4_

- [x] 6. Update HexagramsScreen to remove inline ViewModeToggle
  - [x] 6.1 Remove ViewModeToggle from HexagramsScreen content
    - Remove ViewModeToggle import and rendering
    - Keep viewMode state management (will be passed to TopNavigationBar)
    - _Requirements: 3.3_
  
  - [x] 6.2 Write unit test for HexagramsScreen
    - Test that ViewModeToggle is not rendered in screen content
    - Test that screen still manages viewMode state
    - _Requirements: 3.3_

- [x] 7. Integrate TopNavigationBar into App.tsx
  - [x] 7.1 Add navigation state management
    - Create state for current screen config
    - Create screen configuration constants
    - Implement navigation stack for back button functionality
    - _Requirements: 5.1, 6.1_
  
  - [x] 7.2 Add TopNavigationBar to App component
    - Import and render TopNavigationBar above screen content
    - Pass appropriate props based on current screen
    - Wire up back button handler
    - Wire up view mode toggle for Hexagrams screen
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.2, 6.3, 6.4, 6.5_
  
  - [x] 7.3 Update screen rendering to support detail screens
    - Add state for showing HexagramDetailsCard
    - Implement navigation to detail screen from HexagramCard
    - Update screen config when navigating to details
    - Pass hexagram data to details screen for dynamic title
    - _Requirements: 4.1, 6.6_
  
  - [x] 7.4 Adjust content layout for overlaying navigation bars
    - Ensure main content can scroll beneath navigation bars
    - Add appropriate padding/margins if needed
    - Test that content is not obscured by navigation bars
    - _Requirements: 7.3_

- [x] 8. Update HexagramCard to support navigation
  - [x] 8.1 Add onPress handler to HexagramCard
    - Accept onPress callback prop
    - Trigger callback when card is pressed
    - Pass hexagram data to callback
    - _Requirements: 4.1_
  
  - [x] 8.2 Write unit test for HexagramCard navigation
    - Test onPress callback is invoked when card is pressed
    - Test hexagram data is passed to callback
    - _Requirements: 4.1_

- [x] 9. Checkpoint - Ensure all tests pass
  - Run all unit tests and verify they pass
  - Run all property tests and verify they pass
  - Manually test navigation flows on iOS simulator
  - Verify blur effects appear correctly
  - Test on device with notch to verify safe area handling
  - Ask the user if questions arise

- [x] 10. Write integration tests for navigation flows
  - [x] 10.1 Test main screen navigation
    - Test navigating between all main screens
    - Verify top navigation updates correctly
    - Verify bottom navigation highlights correct tab
    - _Requirements: 5.1, 6.2, 6.3, 6.4, 6.5_
  
  - [x] 10.2 Test detail screen navigation
    - Test navigating from Hexagrams to HexagramDetailsCard
    - Verify back button appears
    - Test pressing back button returns to Hexagrams
    - _Requirements: 4.1, 4.3, 6.6_
  
  - [x] 10.3 Test view mode toggle integration
    - Navigate to Hexagrams screen
    - Verify toggle appears in top nav
    - Change view mode and verify screen updates
    - _Requirements: 3.1, 3.4_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- expo-blur must be installed before creating components that use it
- Property tests require fast-check library (install with `npm install --save-dev fast-check`)
- Manual testing on physical devices is important for verifying blur effects and safe area handling
- The blur effect may not render correctly in some simulators - test on real devices when possible
