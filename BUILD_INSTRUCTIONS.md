# Build Instructions for v0.4.0

## Version Information
- **Version**: 0.4.0
- **iOS Build Number**: 8
- **Android Version Code**: 7

## Changes in this Release
- First-launch onboarding wizard
- Language selection during onboarding
- Wizard completion tracking

---

## Prerequisites

Make sure you have:
- EAS CLI installed: `npm install -g eas-cli`
- Logged into your Expo account: `eas login`
- All dependencies installed: `npm install`

---

## Build Commands

### iOS Production Build
```bash
eas build --platform ios --profile production
```

### Android Production Build
```bash
eas build --platform android --profile production
```

### Build Both Platforms
```bash
eas build --platform all --profile production
```

---

## Preview/Internal Builds (for testing)

### iOS Preview Build
```bash
eas build --platform ios --profile preview
```

### Android Preview Build (APK)
```bash
eas build --platform android --profile preview
```

---

## Local Development Builds

### iOS (requires macOS with Xcode)
```bash
npx expo run:ios
```

### Android (requires Android Studio)
```bash
npx expo run:android
```

---

## Build Status

Check build status:
```bash
eas build:list
```

View specific build:
```bash
eas build:view [BUILD_ID]
```

---

## Submission to Stores

### Submit to App Store (iOS)
```bash
eas submit --platform ios
```

### Submit to Google Play (Android)
```bash
eas submit --platform android
```

---

## Notes

- **autoIncrement** is enabled in production profile, so build numbers will auto-increment
- iOS builds require Apple Developer account
- Android builds can be downloaded as APK or AAB
- Preview builds are for internal testing only
- Production builds are optimized and ready for store submission

---

## Testing the Wizard

To test the onboarding wizard:
1. Install the build on a fresh device/simulator
2. Or use the "Reset Wizard (Dev)" button in Settings (dev builds only)
3. Or clear app data/storage

---

## Troubleshooting

### Build fails with "credentials" error
```bash
eas credentials
```

### Clear build cache
```bash
eas build --platform [ios|android] --clear-cache
```

### Check project configuration
```bash
eas build:configure
```
