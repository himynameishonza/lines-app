# Requirements Document

## Introduction

Lines is a mobile/web application for I-ching hexagram readings and affirmations. This Phase 1 implementation focuses exclusively on creating the visual scaffolding - the screen layouts, UI components, and design elements - without implementing navigation logic, data persistence, or interactive behaviors. The goal is to establish the foundational UI structure that will be enhanced with functionality in subsequent phases.

## Glossary

- **Application**: The Lines I-ching hexagram mobile/web application
- **Screen**: A distinct visual layout representing one view in the application
- **Hexagram**: One of the 64 symbols from the I-ching consisting of six stacked horizontal lines
- **Splash_Screen**: Initial loading screen with graphics and loading indicator
- **Home_Screen**: Dashboard screen showing a list layout for reading history
- **Navigation_Bar**: Bottom navigation component with four items
- **Hexagrams_Screen**: Screen displaying hexagram cards with view mode toggle
- **Settings_Screen**: Screen with language selection UI
- **New_Reading_Screen**: Screen with question prompt and method selection options
- **Hexagram_Details_Card**: Modal or screen showing detailed hexagram information
- **Carousel_View**: Horizontal scrolling card layout
- **List_View**: Vertical list layout
- **Grid_View**: Grid layout with multiple columns

## Requirements

### Requirement 1: Splash Screen Layout

**User Story:** As a user, I want to see a splash screen when the app loads, so that I have a polished first impression.

#### Acceptance Criteria

1. THE Application SHALL render a Splash_Screen component
2. THE Splash_Screen SHALL display graphics
3. THE Splash_Screen SHALL display a loading state indicator

### Requirement 2: Home Screen Layout

**User Story:** As a user, I want to see a home screen with a list layout, so that I can view my reading history in a structured format.

#### Acceptance Criteria

1. THE Application SHALL render a Home_Screen component
2. THE Home_Screen SHALL display a list layout for affirmations and readings
3. THE Home_Screen SHALL include placeholder content for list items

### Requirement 3: Bottom Navigation Bar

**User Story:** As a user, I want to see a bottom navigation bar, so that I understand the main sections of the app.

#### Acceptance Criteria

1. THE Application SHALL render a Navigation_Bar component at the bottom of the screen
2. THE Navigation_Bar SHALL display four navigation items with labels: Dashboard, Hexagram list, Create new reading, and Settings
3. THE Navigation_Bar SHALL display icons for each navigation item

### Requirement 4: Hexagrams Screen Layout

**User Story:** As a user, I want to see a hexagrams browsing screen with different view options, so that I can explore hexagrams in various layouts.

#### Acceptance Criteria

1. THE Application SHALL render a Hexagrams_Screen component
2. THE Hexagrams_Screen SHALL display a view mode toggle with three options: carousel, list, and grid
3. THE Hexagrams_Screen SHALL render hexagram cards in Carousel_View by default
4. THE Hexagrams_Screen SHALL support rendering hexagram cards in List_View
5. THE Hexagrams_Screen SHALL support rendering hexagram cards in Grid_View
6. THE Hexagrams_Screen SHALL display placeholder hexagram cards

### Requirement 5: Settings Screen Layout

**User Story:** As a user, I want to see a settings screen with language options, so that I can configure my preferences.

#### Acceptance Criteria

1. THE Application SHALL render a Settings_Screen component
2. THE Settings_Screen SHALL display a language selection UI element
3. THE Settings_Screen SHALL display available language options

### Requirement 6: New Reading Screen Layout

**User Story:** As a user, I want to see a new reading screen with method options, so that I can initiate a hexagram reading.

#### Acceptance Criteria

1. THE Application SHALL render a New_Reading_Screen component
2. THE New_Reading_Screen SHALL display a question input field with prompt text
3. THE New_Reading_Screen SHALL display instructions on how to formulate questions
4. THE New_Reading_Screen SHALL display a button for random hexagram selection
5. THE New_Reading_Screen SHALL display a button for coin toss method

### Requirement 7: Hexagram Details Card Layout

**User Story:** As a user, I want to see a hexagram details card with structured information, so that I can read hexagram content clearly.

#### Acceptance Criteria

1. THE Application SHALL render a Hexagram_Details_Card component
2. THE Hexagram_Details_Card SHALL display a close/back button at the top
3. THE Hexagram_Details_Card SHALL display a header with the hexagram name
4. THE Hexagram_Details_Card SHALL display the original Chinese name
5. THE Hexagram_Details_Card SHALL display the hexagram number
6. THE Hexagram_Details_Card SHALL display a scrollable body section with placeholder content

### Requirement 8: Visual Design System

**User Story:** As a user, I want consistent visual styling across all screens, so that the app feels cohesive and professional.

#### Acceptance Criteria

1. THE Application SHALL use consistent typography styles across all screens
2. THE Application SHALL use consistent color schemes across all screens
3. THE Application SHALL use consistent spacing and padding across all screens
4. THE Application SHALL use consistent component styling patterns across all screens
