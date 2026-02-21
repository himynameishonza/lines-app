import React from "react"
import Svg, { Defs, Pattern, Rect, Circle } from "react-native-svg"

type Props = {
  width: number
  height: number
  color: string
  opacity?: number
  bottom?: number
}

export function Circles({ width, height, color, opacity = 0.3,bottom }: Props) {
  return (
    <Svg width={width} height={height} style={{ position: 'absolute', bottom: bottom }}>
      <Defs>
        <Pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <Circle cx="20" cy="20" r="15" stroke={color} strokeWidth="1" fill="none" opacity={opacity} />
        </Pattern>
      </Defs>
      <Rect width={width} height={height} fill="url(#circles)" />
    </Svg>
  )
}
