# Requirements Document

## Introduction

This feature enhances the navigation experience in the React Native Expo app by implementing iOS-style liquid glass (blur) effects on navigation bars and reorganizing navigation controls for a more polished, professional appearance. The enhancement focuses on creating a unified top navigation component with contextual controls and applying translucent blur effects to both top and bottom navigation bars.

## Glossary

- **Top_Navigation_Bar**: The navigation bar displayed at the top of the screen containing contextual controls (back button, title, view mode toggle)
- **Bottom_Navigation_Bar**: The tab bar displayed at the bottom of the screen for primary navigation between main screens
- **Liquid_Glass_Effect**: A translucent blur effect that creates a frosted glass appearance, allowing content to show through with reduced clarity
- **View_Mode_Toggle**: A control that switches between different display modes (grid/list) for the Hexagrams screen
- **Back_Button**: A navigation control that returns the user to the previous screen
- **Detail_Screen**: A screen that shows detailed information about a specific item (e.g., HexagramDetailsCard)
- **Main_Screen**: One of the four primary screens accessible via bottom navigation (Dashboard, Hexagrams, New Reading, Settings)
- **Blur_Component**: The expo-blur library component used to create the liquid glass effect
- **Screen_Title**: The text displayed in the center of the top navigation bar indicating the current screen name

## Requirements

### Requirement 1: Top Navigation Bar Blur Effect

**User Story:** As a user, I want the top navigation bar to have an iOS-style liquid glass effect, so that the app feels modern and polished.

#### Acceptance Criteria

1. THE Top_Navigation_Bar SHALL apply a translucent blur effect using the Blur_Component
2. WHEN content scrolls beneath the Top_Navigation_Bar, THE Top_Navigation_Bar SHALL maintain the blur effect showing underlying content with reduced clarity
3. THE Top_Navigation_Bar SHALL use a blur intensity appropriate for iOS-style frosted glass appearance
4. THE Top_Navigation_Bar SHALL overlay content rather than pushing it down

### Requirement 2: Bottom Navigation Bar Blur Effect

**User Story:** As a user, I want the bottom navigation bar to have an iOS-style liquid glass effect, so that the navigation experience is consistent and visually appealing.

#### Acceptance Criteria

1. THE Bottom_Navigation_Bar SHALL apply a translucent blur effect using the Blur_Component
2. WHEN content scrolls beneath the Bottom_Navigation_Bar, THE Bottom_Navigation_Bar SHALL maintain the blur effect showing underlying content with reduced clarity
3. THE Bottom_Navigation_Bar SHALL use a blur intensity consistent with the Top_Navigation_Bar
4. THE Bottom_Navigation_Bar SHALL overlay content rather than pushing it up

### Requirement 3: View Mode Toggle Relocation

**User Story:** As a user viewing the Hexagrams screen, I want the view mode toggle in the top navigation bar, so that it's easily accessible and doesn't clutter the screen content.

#### Acceptance Criteria

1. WHEN the Hexagrams screen is active, THE Top_Navigation_Bar SHALL display the View_Mode_Toggle on the right side
2. WHEN any other Main_Screen is active, THE Top_Navigation_Bar SHALL NOT display the View_Mode_Toggle
3. THE View_Mode_Toggle SHALL be removed from the Hexagrams screen content area
4. THE View_Mode_Toggle SHALL maintain its functionality after relocation

### Requirement 4: Back Button for Detail Screens

**User Story:** As a user viewing a detail screen, I want a back button in the top navigation bar, so that I can easily return to the previous screen.

#### Acceptance Criteria

1. WHEN a Detail_Screen is active, THE Top_Navigation_Bar SHALL display a Back_Button on the left side
2. WHEN a Main_Screen is active, THE Top_Navigation_Bar SHALL NOT display a Back_Button
3. WHEN the Back_Button is pressed, THE system SHALL navigate to the previous screen
4. THE Back_Button SHALL use iOS-style chevron icon and styling

### Requirement 5: Unified Top Navigation Component

**User Story:** As a developer, I want a unified top navigation component, so that navigation behavior is consistent across all screens.

#### Acceptance Criteria

1. THE system SHALL provide a single Top_Navigation_Bar component used across all screens
2. THE Top_Navigation_Bar SHALL display the Screen_Title in the center position
3. WHERE a Back_Button is applicable, THE Top_Navigation_Bar SHALL display it on the left side
4. WHERE a View_Mode_Toggle is applicable, THE Top_Navigation_Bar SHALL display it on the right side
5. THE Top_Navigation_Bar SHALL accept configuration props to control which elements are displayed

### Requirement 6: Screen Title Display

**User Story:** As a user, I want to see the current screen name in the top navigation bar, so that I always know where I am in the app.

#### Acceptance Criteria

1. THE Top_Navigation_Bar SHALL display the Screen_Title for the current screen in the center position
2. WHEN on the Dashboard screen, THE Screen_Title SHALL display "Dashboard"
3. WHEN on the Hexagrams screen, THE Screen_Title SHALL display "Hexagrams"
4. WHEN on the New Reading screen, THE Screen_Title SHALL display "New Reading"
5. WHEN on the Settings screen, THE Screen_Title SHALL display "Settings"
6. WHEN on the HexagramDetailsCard screen, THE Screen_Title SHALL display the hexagram name or number

### Requirement 7: Navigation Bar Positioning and Layout

**User Story:** As a user, I want navigation bars to overlay content smoothly, so that the app feels fluid and modern.

#### Acceptance Criteria

1. THE Top_Navigation_Bar SHALL be positioned at the top of the screen with absolute positioning
2. THE Bottom_Navigation_Bar SHALL be positioned at the bottom of the screen with absolute positioning
3. THE system SHALL ensure content can scroll beneath both navigation bars
4. THE system SHALL apply appropriate safe area insets to navigation bars for notched devices
5. THE Top_Navigation_Bar SHALL have sufficient height to accommodate all controls and safe area insets

### Requirement 8: Blur Effect Implementation

**User Story:** As a developer, I want to use expo-blur for the blur effect, so that the implementation is performant and platform-appropriate.

#### Acceptance Criteria

1. THE system SHALL use the expo-blur library's BlurView component for all blur effects
2. THE system SHALL configure blur intensity to create a frosted glass appearance
3. THE system SHALL use platform-appropriate blur styles (iOS: "light" or "dark" based on theme)
4. THE system SHALL ensure blur effects perform smoothly during scrolling and transitions

### Requirement 9: Transition Smoothness

**User Story:** As a user, I want smooth transitions when navigating between screens, so that the app feels responsive and polished.

#### Acceptance Criteria

1. WHEN navigating between screens, THE Top_Navigation_Bar SHALL smoothly transition between different control configurations
2. WHEN the Back_Button appears or disappears, THE transition SHALL be smooth and not jarring
3. WHEN the View_Mode_Toggle appears or disappears, THE transition SHALL be smooth and not jarring
4. THE Screen_Title SHALL update smoothly when navigating between screens
