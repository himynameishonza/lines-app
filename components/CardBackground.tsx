import React from "react"
import { Image, StyleSheet } from "react-native"

type Props = {
  elements: [number, number]
  style?: any
}

export function CardBackground({ elements, style }: Props) {
  return (
    <Image
      source={require("../assets/hexagram.png")}
      style={[StyleSheet.absoluteFill, style]}
      resizeMode="cover"
    />
  )
}
