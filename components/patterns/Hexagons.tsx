import React from "react"
import Svg, { Defs, Pattern, Rect, Polygon } from "react-native-svg"

type Props = {
  width: number
  height: number
  color: string
  opacity?: number
  bottom?: number
}

export function Hexagons({ width, height, color, opacity = 0.3, bottom }: Props) {
  return (
    <Svg width={width} height={height} style={{ position: 'absolute', bottom: bottom }}>
      <Defs>
        <Pattern id="hexagons" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
          <Polygon 
            points="15,2 25,8 25,18 15,24 5,18 5,8" 
            stroke={color} 
            strokeWidth="1" 
            fill="none" 
            opacity={opacity} 
          />
        </Pattern>
      </Defs>
      <Rect width={width} height={height} fill="url(#hexagons)" />
    </Svg>
  )
}
