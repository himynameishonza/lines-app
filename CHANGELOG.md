# Changelog

## [0.5.0] - 2026-02-25

### Added
- Android hardware back button support with intelligent navigation
- Reset wizard option in home screen navigation (skips language selection)

### Changed
- Wizard now skips language selection when reset from home screen
- Onboarding progress indicators now correctly reflect number of screens

### Fixed
- Removed sandbox data from production builds - app now starts with empty storage
- Fixed wizard "Get Started" button not appearing on last screen when skipping language selection
- Fixed Android back button exiting app instead of navigating back through screens

## [0.4.0] - 2026-02-24

### Added
- First-launch onboarding wizard with 5 screens
  - Language selection (English/Czech)
  - Welcome screen with app logo
  - What is I Ching explanation
  - What is a Hexagram explanation
  - How it works guide
- Wizard completion tracking in settings
- Dev-only "Reset Wizard" button in Settings

### Changed
- App now shows onboarding on first launch only
- Language can be selected during onboarding

## [0.3.0] - 2026-02-23

### Added
- Share hexagram details as text via native share sheet

## [0.2.0] - 2026-02-23

### Added
- Android APK build configuration
- Android simulator build support

### Changed
- Updated build scripts for Android deployment

### Fixed

## [0.1.0] - 2026-02-22

### Added
- Initial release of Lines app
- I Ching hexagram readings with full texts
- Coin toss reading method
- Reading list with history
- Trigram information and display
- Multiple card themes (Default, Minimal, Patterns)
- Pattern backgrounds (Circles, Dots, Hexagons, Triangles, Waves, etc.)
- Home screen with navigation
- Hexagram detail screens
- Settings screen
- Top and bottom navigation bars
- Internationalization support
- Custom typography (Bodoni, Geist Mono)

### Fixed
- Trigram display issues
- Gap and spacing fixes in UI
- Navigation improvements
