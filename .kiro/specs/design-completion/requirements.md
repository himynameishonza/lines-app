# Requirements Document

## Introduction

This document specifies the requirements for completing the design implementation of the Lines I Ching app. The app has undergone a major redesign with a new top navigation bar, redesigned bottom navigation, completely redesigned carousel cards with Bodoni font, and dynamic background gradients. This specification covers the remaining incomplete features that need to be implemented to finalize the design.

## Glossary

- **Hexagram**: One of the 64 symbols from the I Ching, consisting of six lines (yin or yang)
- **Carousel_View**: The main scrollable horizontal view displaying hexagram cards
- **List_View**: A vertical list view displaying all hexagrams
- **Grid_View**: A 3-column grid view displaying all hexagrams
- **Romanization**: The pinyin representation of Chinese hexagram names
- **Gradient_Pair**: Two colors used to create a background gradient
- **Localization**: Support for multiple languages (Czech and English)
- **View_Toggle**: A button that switches between carousel, list, and grid views
- **Search_Modal**: An overlay interface for searching hexagrams
- **Menu_Drawer**: A slide-out panel containing app settings and information

## Requirements

### Requirement 1: Hexagram Romanization Data

**User Story:** As a user, I want to see the proper pinyin romanization for each hexagram name, so that I can understand the pronunciation of the Chinese characters.

#### Acceptance Criteria

1. THE System SHALL add a "romanization" field to the Hexagram interface
2. WHEN displaying a hexagram in carousel view, THE System SHALL show the romanization below the translated name
3. THE System SHALL provide proper pinyin romanization for all 64 hexagrams
4. WHEN a hexagram is displayed, THE System SHALL use the romanization from the data instead of hardcoded text

### Requirement 2: Unique Background Gradients

**User Story:** As a user, I want each hexagram to have its own unique background gradient, so that the visual experience is rich and varied.

#### Acceptance Criteria

1. THE System SHALL define 64 unique gradient color pairs
2. WHEN displaying a hexagram, THE System SHALL use its assigned gradient pair
3. THE System SHALL use brownish and rose tones matching the design aesthetic
4. WHEN scrolling through hexagrams, THE System SHALL display the correct gradient for each hexagram

### Requirement 3: Animated Background Transitions

**User Story:** As a user, I want smooth background color transitions as I scroll through hexagrams, so that the experience feels fluid and polished.

#### Acceptance Criteria

1. WHEN a user scrolls the carousel, THE System SHALL smoothly interpolate between gradient colors
2. THE System SHALL base color interpolation on scroll position
3. THE System SHALL maintain 60fps performance during animations
4. WHEN transitioning between hexagrams, THE System SHALL blend colors smoothly without jarring changes

### Requirement 4: Hexagram Description Display

**User Story:** As a user, I want to see the actual hexagram content below the carousel, so that I can read meaningful information about each hexagram.

#### Acceptance Criteria

1. WHEN a hexagram is centered in the carousel, THE System SHALL display its meaning or oracle text
2. THE System SHALL replace Lorem ipsum placeholder text with actual hexagram content
3. THE System SHALL display content in the user's selected language (Czech or English)
4. WHEN the centered hexagram changes, THE System SHALL update the displayed text

### Requirement 5: Search Functionality

**User Story:** As a user, I want to search for hexagrams by name, number, or keywords, so that I can quickly find specific hexagrams.

#### Acceptance Criteria

1. WHEN a user taps the search icon, THE System SHALL display a search interface
2. THE System SHALL allow searching by hexagram number, Chinese name, translated name, or keywords
3. THE System SHALL support search in both Czech and English
4. WHEN search results are found, THE System SHALL display them in a list or modal
5. WHEN a user selects a search result, THE System SHALL navigate to that hexagram
6. WHEN no results are found, THE System SHALL display a helpful message

### Requirement 6: Menu Functionality

**User Story:** As a user, I want to access app settings and information through a menu, so that I can configure the app and learn more about it.

#### Acceptance Criteria

1. WHEN a user taps the menu icon, THE System SHALL display a menu interface
2. THE System SHALL include language selection in the menu
3. THE System SHALL include app settings in the menu
4. THE System SHALL include about information in the menu
5. WHEN a user changes language, THE System SHALL update all displayed text
6. WHEN a user closes the menu, THE System SHALL return to the previous view

### Requirement 7: View Toggle Button

**User Story:** As a user, I want to switch between carousel, list, and grid views, so that I can browse hexagrams in my preferred format.

#### Acceptance Criteria

1. WHEN on the Hexagrams screen, THE System SHALL display a view toggle button in the top right corner
2. WHEN a user taps the toggle button, THE System SHALL cycle through carousel, list, and grid views
3. THE System SHALL use the liquid glass design aesthetic for the toggle button
4. THE System SHALL display an appropriate icon for the current view mode
5. WHEN switching views, THE System SHALL maintain smooth transitions

### Requirement 8: Redesigned List and Grid Views

**User Story:** As a user, I want list and grid views that match the new design aesthetic, so that the entire app feels cohesive.

#### Acceptance Criteria

1. THE System SHALL use Bodoni font for hexagram names in list and grid views
2. THE System SHALL maintain consistent visual language across all views
3. WHEN displaying hexagrams in list view, THE System SHALL use the new card design
4. WHEN displaying hexagrams in grid view, THE System SHALL use the new card design
5. THE System SHALL ensure proper spacing and alignment in all views

