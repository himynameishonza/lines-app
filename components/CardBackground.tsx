import React, { useMemo } from "react"
import { View, StyleSheet, Image } from "react-native"
import { buildBackground } from "../utils/visualEngine"
import { LinearGradient } from "expo-linear-gradient"

type Props = {
  elements: [number, number]
  style?: any
}

export function CardBackground({ elements, style }: Props) {
  const background = useMemo(() => buildBackground(elements[0], elements[1]), [elements])

  // Bottom trigram colors - desaturated
  const bottomColors = useMemo(() => [
    `hsl(${background.baseHue}, ${Math.min(background.saturation * 0.6, 35)}%, ${background.lightness + 5}%)`,
    `hsl(${background.baseHue}, ${Math.min(background.saturation * 0.5, 30)}%, ${background.lightness - 2}%)`,
    `hsl(${background.baseHue}, ${Math.min(background.saturation * 0.4, 25)}%, ${background.lightness - 10}%)`
  ], [background])

  // Top trigram colors - desaturated
  const topColors = useMemo(() => [
    `hsl(${background.topHue}, ${Math.max(background.topSaturation - 5, 15)}%, ${Math.min(background.topLightness + 20, 90)}%)`,
    `hsl(${background.topHue}, ${background.topSaturation}%, ${background.topLightness + 5}%)`,
    `hsl(${background.topHue}, ${Math.min(background.topSaturation + 5, 59)}%, ${background.topLightness - 5}%)`
  ], [background])

  // Combine colors for smooth transition
  const allColors = useMemo(() => [
    ...topColors,
    ...bottomColors
  ], [topColors, bottomColors])

  // Determine gradient direction based on composition
  const gradientPoints = useMemo(() => {
    switch (background.composition) {
      case "vertical":
        return { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } }
      case "horizontal":
        return { start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } }
      case "diagonal":
        return { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } }
      case "radial":
        // Radial approximation with center focus
        return { start: { x: 0.5, y: 0.5 }, end: { x: 0.5, y: 1 } }
      case "diffused":
        // Soft vertical with slight offset
        return { start: { x: 0.3, y: 0 }, end: { x: 0.7, y: 1 } }
      case "deep":
        // Strong vertical from dark to darker
        return { start: { x: 0.5, y: 0.3 }, end: { x: 0.5, y: 1 } }
      case "still":
        // Minimal gradient, mostly flat
        return { start: { x: 0.5, y: 0.4 }, end: { x: 0.5, y: 0.6 } }
      case "mist":
        // Soft horizontal
        return { start: { x: 0, y: 0.3 }, end: { x: 1, y: 0.7 } }
      default:
        return { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } }
    }
  }, [background.composition])

  return (
    <View style={[StyleSheet.absoluteFill, style]}>
      <LinearGradient
        colors={allColors as any}
        start={gradientPoints.start}
        end={gradientPoints.end}
        style={[StyleSheet.absoluteFill, { opacity: 0.4 }]}
      />
      <Image
        source={require("../assets/textures/mountain.jpg")}
        style={[StyleSheet.absoluteFill, { opacity: 0.4 }]}
        resizeMode="cover"
      />
    </View>
  )
}

export default React.memo(CardBackground)
