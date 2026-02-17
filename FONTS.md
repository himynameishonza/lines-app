# Fonts in Lines App

## Bodoni Moda Font

The app uses **Bodoni Moda** from Google Fonts as the primary decorative and headline font. This elegant serif font is perfect for the I Ching app's aesthetic.

### Available Variants

- `BodoniModa_400Regular` - Regular weight
- `BodoniModa_500Medium` - Medium weight
- `BodoniModa_600SemiBold` - Semi-bold weight
- `BodoniModa_700Bold` - Bold weight

### Using the BodoniText Component

We've created a convenient `BodoniText` component for easy use:

```tsx
import BodoniText from './components/BodoniText';

// Usage examples:
<BodoniText variant="regular">Regular text</BodoniText>
<BodoniText variant="medium">Medium text</BodoniText>
<BodoniText variant="semibold">Semi-bold text</BodoniText>
<BodoniText variant="bold">Bold text</BodoniText>

// With custom styles:
<BodoniText 
  variant="bold" 
  style={{ fontSize: 36, color: '#FFFFFF' }}
>
  Headline Text
</BodoniText>
```

### Direct Font Usage

You can also use the fonts directly in your styles:

```tsx
<Text style={{ fontFamily: 'BodoniModa_700Bold', fontSize: 24 }}>
  Direct font usage
</Text>
```

### Where Bodoni is Used

Currently, Bodoni Moda is used for:
- Hexagram names in the detail view (bold variant)
- Headlines and decorative text throughout the app

### Adding More Fonts

To add additional fonts from Google Fonts:

1. Install the font package:
   ```bash
   npm install @expo-google-fonts/[font-name]
   ```

2. Import and load in `App.tsx`:
   ```tsx
   import { FontName_400Regular } from '@expo-google-fonts/font-name';
   
   const [fontsLoaded] = useFonts({
     FontName_400Regular,
     // ... other fonts
   });
   ```

3. Use in your components:
   ```tsx
   <Text style={{ fontFamily: 'FontName_400Regular' }}>Text</Text>
   ```
