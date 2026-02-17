# Lines I-ching App

A mobile/web application for I-ching hexagram readings and affirmations built with React Native, Expo, and NativeWind.

## Project Structure

```
lines-app/
├── components/     # Reusable UI components
├── screens/        # Screen components
├── types/          # TypeScript type definitions
├── data/           # Placeholder data files
├── assets/         # Images and static assets
└── App.tsx         # Main application entry point
```

## Tech Stack

- **Framework**: React Native with Expo
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Language**: TypeScript
- **Testing**: Jest + React Native Testing Library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

Dependencies are already installed. To reinstall:

```bash
npm install
```

### Running the App

```bash
# Start the development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web
npm run web
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## Development Status

Currently in Phase 1: UI Scaffolding
- Project structure and dependencies ✓
- Shared UI components (in progress)
- Screen layouts (pending)
- Navigation wiring (pending)

## Design System

The app uses a custom Tailwind configuration with the following color palette:

- **Primary**: cyan (#06b6d4)
- **Gray Scale**: 50, 100, 200, 300, 600, 700, 900

See `tailwind.config.js` for the complete theme configuration.
