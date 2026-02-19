# NativeWind Setup - Proof of Concept

## What was done

### 1. Updated Tailwind Config
Added app-specific colors to `tailwind.config.js`:
- `background` color (#201F20)
- Extended gray palette with app-specific shades

### 2. Updated Text Components
Both `BodoniText` and `GeistMonoText` now support NativeWind's `className` prop:
- Added `styled()` wrapper from NativeWind
- Added `className` prop to TypeScript interfaces
- Components now accept both `style` and `className` props

### 3. Converted HomeScreen
Replaced all StyleSheet styles with Tailwind classes:
- `flex-1`, `bg-background` for layout
- `px-6`, `pt-8`, `pb-6` for spacing
- `text-4xl`, `text-white` for typography
- `rounded-full`, `shadow-lg` for button styling
- Custom color with `bg-[#EFDECA]` for the button

## Usage Example

```tsx
<BodoniText variant="bold" className="text-4xl text-white">
  {greeting}
</BodoniText>

<View className="px-6 pt-8 pb-6">
  {/* content */}
</View>
```

## Benefits
- Faster styling with utility classes
- Consistent design system
- Smaller bundle size (no StyleSheet objects)
- Better developer experience with autocomplete
- Easy responsive design with breakpoints

## Next Steps
- Convert other screens to use NativeWind
- Add custom utilities to tailwind.config.js if needed
- Consider adding dark mode support
