# Lines - I Ching App

A mobile application for I Ching hexagram readings built with React Native and Expo.

## Prerequisites

Before building the app, ensure you have the following installed:

### Required for All Platforms
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI**: `npm install -g expo-cli`

### For iOS Development
- **macOS** (required for iOS builds)
- **Xcode** (latest version from Mac App Store)
- **Xcode Command Line Tools**: `xcode-select --install`
- **CocoaPods**: `sudo gem install cocoapods`
- **iOS Simulator** (included with Xcode)

### For Android Development
- **Android Studio** (latest version)
- **Android SDK** (API level 33 or higher)
- **Android Emulator** or physical Android device
- **Java Development Kit (JDK)** 17 or higher

### For Physical Devices
- **iOS**: Apple Developer account (free or paid)
- **Android**: Enable Developer Mode and USB Debugging on your device

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lines-app
```

2. Install dependencies:
```bash
npm install
```

3. Generate native projects (first time only):
```bash
npx expo prebuild
```

## Running the App

### Development Mode

Start the Expo development server:
```bash
npm start
```

Then press:
- `i` for iOS simulator
- `a` for Android emulator
- `w` for web browser

### iOS Simulator
```bash
npm run ios
```

### Android Emulator
```bash
npm run android
```

### Physical Devices

#### iOS Device
```bash
npx expo run:ios --device
```

#### Android Device
```bash
npx expo run:android --device
```

## Building for Production

### iOS (Release Build)
```bash
npx expo run:ios --configuration Release --device
```

### Android (Release Build)
```bash
npx expo run:android --variant release
```

### Using EAS Build (Recommended for Distribution)
```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo account
eas login

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## Project Structure

```
lines-app/
├── components/          # Reusable UI components
│   ├── navbars/        # Navigation bar components
│   ├── patterns/       # Background pattern components
│   ├── readingList/    # Reading list components
│   └── typography/     # Text components
├── screens/            # Screen components
├── contexts/           # React Context providers
├── data/               # Hexagram and trigram data
├── i18n/               # Internationalization
│   └── locales/        # Translation files (cs, en)
├── types/              # TypeScript type definitions
├── assets/             # Images and static assets
└── App.tsx             # Main application entry point
```

## Tech Stack

- **Framework**: React Native with Expo
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Language**: TypeScript
- **State Management**: React Context API
- **Storage**: AsyncStorage
- **Internationalization**: i18next
- **Icons**: Lucide React Native

## Features

- Traditional I Ching coin toss method
- 64 hexagrams with detailed interpretations
- Changing lines and transformations
- Reading history with swipe-to-delete
- Multiple languages (Czech, English)
- Customizable themes and view modes
- Offline-first architecture

## Version Management

Build numbers are automatically incremented on each commit using git hooks. To manually increment:
```bash
npm run increment-build
```

## Troubleshooting

### iOS Icon Not Updating
```bash
rm -rf ios
rm -rf ~/Library/Developer/Xcode/DerivedData
npx expo prebuild --clean
```

### Android Build Issues
```bash
cd android
./gradlew clean
cd ..
npx expo prebuild --clean
```

### Clear Cache
```bash
npx expo start --clear
```

## License

[Add your license here]

## Contact

[Add contact information here]
