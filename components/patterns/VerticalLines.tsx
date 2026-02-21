import React from "react"
import Svg, { Defs, Pattern, Rect, Line } from "react-native-svg"

type Props = {
  width: number
  height: number
  color: string
  opacity?: number
  bottom?: number
}

export function VerticalLines({ width, height, color, opacity = 0.3,bottom }: Props) {
  return (
    <Svg width={width} height={height} style={{ position: 'absolute',bottom:bottom }}>
      <Defs>
        <Pattern id="verticalLines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <Line x1="10" y1="0" x2="10" y2="20" stroke={color} strokeWidth="1" opacity={opacity} />
        </Pattern>
      </Defs>
      <Rect width={width} height={height} fill="url(#verticalLines)" />
    </Svg>
  )
}
