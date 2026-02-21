import React from "react"
import Svg, { Defs, Pattern, Rect, Line } from "react-native-svg"

type Props = {
  width: number
  height: number
  color: string
  opacity?: number
  bottom?: number
}

export function HorizontalLines({ width, height, color, opacity = 0.3, bottom }: Props) {
  return (
    <Svg width={width} height={height} style={{ position: 'absolute', bottom: bottom }}>
      <Defs>
        <Pattern id="horizontalLines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <Line x1="0" y1="10" x2="20" y2="10" stroke={color} strokeWidth="1" opacity={opacity} />
        </Pattern>
      </Defs>
      <Rect width={width} height={height} fill="url(#horizontalLines)" />
    </Svg>
  )
}
