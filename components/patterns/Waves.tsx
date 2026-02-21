import React from "react"
import Svg, { Defs, Pattern, Rect, Path } from "react-native-svg"

type Props = {
  width: number
  height: number
  color: string
  opacity?: number
  bottom?: number
}

export function Waves({ width, height, color, opacity = 0.3, bottom}: Props) {
  return (
    <Svg width={width} height={height} style={{ position: 'absolute', top:bottom? 1/2 : 0}}>
      <Defs>
        <Pattern id="waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <Path 
            d="M0 10 Q10 5, 20 10 T40 10" 
            stroke={color} 
            strokeWidth="1.5" 
            fill="none" 
            opacity={opacity} 
          />
        </Pattern>
      </Defs>
      <Rect width={width} height={height} fill="url(#waves)" />
    </Svg>
  )
}
