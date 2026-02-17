# Implementation Plan: Lines I Ching App - Design Completion

## Overview

This implementation plan breaks down the design completion into discrete, incremental coding tasks. Each task builds on previous work and includes testing sub-tasks to validate functionality. The implementation follows the order: data updates, UI components, animations, search/menu functionality, and view redesigns.

## Tasks

- [-] 1. Add romanization data to hexagrams
  - [x] 1.1 Update Hexagram interface to include romanization field
    - Modify `data/hexagrams.ts` interface definition
    - Add TypeScript type for romanization (string)
    - _Requirements: 1.1_
  
  - [ ] 1.2 Add romanization data for all 64 hexagrams
    - Research and add proper pinyin romanization for each Chinese hexagram name
    - Update all 64 hexagram objects in `placeholderHexagrams` array
    - _Requirements: 1.3_
  
  - [ ]* 1.3 Write property test for romanization data
    - **Property 1: All hexagrams have romanization**
    - **Validates: Requirements 1.1, 1.3**
  
  - [ ] 1.4 Update HexagramCard to display romanization
    - Modify `components/HexagramCard.tsx` carousel variant
    - Display romanization below translated name
    - Remove hardcoded "DAZHUANG" text
    - _Requirements: 1.2, 1.4_
  
  - [ ]* 1.5 Write property test for romanization display
    - **Property 2: Romanization display matches data**
    - **Validates: Requirements 1.2, 1.4**

- [ ] 2. Create unique background gradients for all hexagrams
  - [ ] 2.1 Create gradient configuration file
    - Create `data/hexagramGradients.ts`
    - Define GradientPair interface
    - Export hexagramGradients array with 64 pairs
    - _Requirements: 2.1_
  
  - [ ] 2.2 Generate 64 unique gradient color pairs
    - Create brownish/rose tone gradients
    - Ensure sufficient contrast for white text
    - Follow design aesthetic (warm earth tones)
    - _Requirements: 2.1, 2.3_
  
  - [ ]* 2.3 Write property tests for gradient data
    - **Property 3: Unique gradient pairs**
    - **Property 5: Gradient colors in valid range**
    - **Validates: Requirements 2.1, 2.3**
  
  - [ ] 2.4 Update HexagramsScreen to use gradient configuration
    - Import hexagramGradients in `screens/HexagramsScreen.tsx`
    - Replace hardcoded backgroundColors array
    - Map hexagram index to gradient pair
    - _Requirements: 2.2, 2.4_
  
  - [ ]* 2.5 Write property test for gradient assignment
    - **Property 4: Gradient assignment consistency**
    - **Validates: Requirements 2.2, 2.4**

- [ ] 3. Implement smooth animated background transitions
  - [ ] 3.1 Install expo-linear-gradient package
    - Run `npx expo install expo-linear-gradient`
    - Update imports in HexagramsScreen
    - _Requirements: 3.1_
  
  - [ ] 3.2 Create color interpolation utility function
    - Create `utils/colorInterpolation.ts`
    - Implement interpolateColor function (hex to RGB to hex)
    - Handle edge cases (invalid colors, out of range values)
    - _Requirements: 3.1, 3.2_
  
  - [ ]* 3.3 Write property tests for color interpolation
    - **Property 6: Scroll-based color interpolation**
    - **Property 7: Smooth color transitions**
    - **Validates: Requirements 3.1, 3.2, 3.4**
  
  - [ ] 3.4 Implement animated gradient background in carousel
    - Use Animated.Value to drive gradient interpolation
    - Calculate interpolation factor from scroll position
    - Apply LinearGradient with interpolated colors
    - _Requirements: 3.1, 3.2, 3.4_
  
  - [ ]* 3.5 Write unit tests for gradient animation
    - Test interpolation at key scroll positions (0%, 50%, 100%)
    - Test edge cases (first hexagram, last hexagram)
    - _Requirements: 3.1, 3.2, 3.4_

- [ ] 4. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Replace Lorem ipsum with actual hexagram descriptions
  - [ ] 5.1 Update description text display logic
    - Modify `screens/HexagramsScreen.tsx` carousel view
    - Get current hexagram from centeredIndex
    - Display hexagram.content[language].meaning or oracle
    - _Requirements: 4.1, 4.2, 4.4_
  
  - [ ]* 5.2 Write property tests for description display
    - **Property 8: Description matches centered hexagram**
    - **Property 9: No placeholder text**
    - **Property 10: Localized content display**
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4**
  
  - [ ]* 5.3 Write unit tests for description edge cases
    - Test with missing content
    - Test language switching
    - Test first and last hexagrams
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ] 6. Implement search functionality
  - [ ] 6.1 Create SearchModal component
    - Create `components/SearchModal.tsx`
    - Implement modal UI with search input
    - Add close button and result list
    - Style with liquid glass aesthetic
    - _Requirements: 5.1_
  
  - [ ] 6.2 Implement search logic
    - Create search index from hexagram data
    - Implement fuzzy search function
    - Support searching by number, name, romanization, keywords
    - Support both Czech and English
    - _Requirements: 5.2, 5.3_
  
  - [ ]* 6.3 Write property tests for search functionality
    - **Property 11: Multi-field search**
    - **Property 12: Bilingual search support**
    - **Property 13: Search results display**
    - **Property 14: Search result navigation**
    - **Validates: Requirements 5.2, 5.3, 5.4, 5.5**
  
  - [ ] 6.4 Integrate SearchModal into HexagramsScreen
    - Add search modal state to HexagramsScreen
    - Connect TopNavigationBar search button
    - Handle search result selection (navigate to hexagram)
    - _Requirements: 5.1, 5.5_
  
  - [ ]* 6.5 Write unit tests for search integration
    - Test modal opening/closing
    - Test empty search results
    - Test navigation to selected hexagram
    - _Requirements: 5.1, 5.5, 5.6_

- [ ] 7. Implement menu functionality
  - [ ] 7.1 Create MenuDrawer component
    - Create `components/MenuDrawer.tsx`
    - Implement slide-out drawer UI
    - Add language selector
    - Add settings section
    - Add about section
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [ ] 7.2 Implement language switching logic
    - Connect language selector to i18next
    - Update all displayed text on language change
    - Persist language preference
    - _Requirements: 6.5_
  
  - [ ]* 7.3 Write property test for language switching
    - **Property 15: Language change updates all text**
    - **Validates: Requirements 6.5**
  
  - [ ] 7.4 Integrate MenuDrawer into HexagramsScreen
    - Add menu drawer state to HexagramsScreen
    - Connect TopNavigationBar menu button
    - Handle menu close action
    - _Requirements: 6.1, 6.6_
  
  - [ ]* 7.5 Write unit tests for menu integration
    - Test menu opening/closing
    - Test language change
    - Test settings navigation
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [ ] 8. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Add view toggle button back
  - [ ] 9.1 Update HexagramsScreen to show FloatingViewToggle
    - Remove conditional hiding of FloatingViewToggle
    - Ensure it's only shown on Hexagrams screen
    - Position in top right corner
    - _Requirements: 7.1_
  
  - [ ] 9.2 Implement view mode cycling logic
    - Update toggle button onPress handler
    - Cycle through: carousel → list → grid → carousel
    - Update viewMode state
    - _Requirements: 7.2_
  
  - [ ]* 9.3 Write property tests for view toggle
    - **Property 16: View mode cycling**
    - **Property 17: Icon matches view mode**
    - **Validates: Requirements 7.2, 7.4**
  
  - [ ] 9.4 Update FloatingViewToggle icon logic
    - Ensure correct icon for each view mode
    - Use albums-outline, list-outline, grid-outline
    - _Requirements: 7.4_
  
  - [ ]* 9.5 Write unit tests for view toggle
    - Test button visibility
    - Test view mode cycling
    - Test icon updates
    - _Requirements: 7.1, 7.2, 7.4, 7.5_

- [ ] 10. Redesign list and grid views
  - [ ] 10.1 Update HexagramCard list variant
    - Use BodoniText for hexagram name
    - Update styling to match new design
    - Ensure proper spacing and alignment
    - _Requirements: 8.1, 8.3_
  
  - [ ] 10.2 Update HexagramCard grid variant
    - Use BodoniText for hexagram name
    - Update styling to match new design
    - Ensure proper spacing and alignment
    - _Requirements: 8.1, 8.4_
  
  - [ ]* 10.3 Write property tests for view consistency
    - **Property 18: Bodoni font in list and grid**
    - **Property 19: List view uses correct variant**
    - **Property 20: Grid view uses correct variant**
    - **Validates: Requirements 8.1, 8.3, 8.4**
  
  - [ ] 10.4 Update list view layout in HexagramsScreen
    - Ensure consistent styling with carousel
    - Update background colors if needed
    - Test scrolling performance
    - _Requirements: 8.3, 8.5_
  
  - [ ] 10.5 Update grid view layout in HexagramsScreen
    - Ensure consistent styling with carousel
    - Update background colors if needed
    - Test scrolling performance
    - _Requirements: 8.4, 8.5_
  
  - [ ]* 10.6 Write unit tests for list and grid views
    - Test rendering all 64 hexagrams
    - Test card styling
    - Test navigation from list/grid to detail
    - _Requirements: 8.1, 8.3, 8.4_

- [ ] 11. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The implementation order ensures each task builds on previous work
- All changes must support both Czech and English localization
- All animations must maintain 60fps performance

