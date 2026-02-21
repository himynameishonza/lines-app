import React from "react"
import Svg, { Defs, Pattern, Rect, Polygon } from "react-native-svg"

type Props = {
  width: number
  height: number
  color: string
  opacity?: number
  bottom?: number
}

export function Triangles({ width, height, color, opacity = 0.3, bottom }: Props) {
  return (
    <Svg width={width} height={height} style={{ position: 'absolute', bottom: bottom }}>
      <Defs>
        <Pattern id="triangles" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
          <Polygon 
            points="20,5 35,30 5,30" 
            stroke={color} 
            strokeWidth="1" 
            fill="none" 
            opacity={opacity} 
          />
        </Pattern>
      </Defs>
      <Rect width={width} height={height} fill="url(#triangles)" />
    </Svg>
  )
}
