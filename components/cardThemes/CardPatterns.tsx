import React, { useMemo } from "react"
import { View } from "react-native"
import { useTranslation } from "react-i18next"
import GeistMonoText from "../typography/GeistMonoText"
import BodoniText from "../typography/BodoniText"
import HexagramSymbol from "../HexagramSymbol"
import { Hexagram } from "../../data/hexagrams"
import { buildBackground } from "../../utils/visualEngine"
import { VerticalLines } from "../patterns/VerticalLines"
import { HorizontalLines } from "../patterns/HorizontalLines"
import { Waves } from "../patterns/Waves"
import { Dots } from "../patterns/Dots"
import { DiagonalGrid } from "../patterns/DiagonalGrid"
import { Circles } from "../patterns/Circles"
import { Hexagons } from "../patterns/Hexagons"
import { Triangles } from "../patterns/Triangles"
import { trigrams } from "../../data/trigrams"

type Props = {
  item: Hexagram & { displayNumber: number }
  width: number
}

// Map each trigram ID to a specific pattern
const getPatternForTrigram = (trigramId: number) => {
  switch (trigramId) {
    case 1: // Heaven - vertical lines
      return VerticalLines
    case 2: // Earth - horizontal lines
      return HorizontalLines
    case 3: // Thunder - diagonal grid
      return DiagonalGrid
    case 4: // Wind - waves
      return Waves
    case 5: // Water - circles
      return Circles
    case 6: // Fire - triangles
      return Triangles
    case 7: // Mountain - hexagons
      return Hexagons
    case 8: // Lake - dots
      return Dots
    default:
      return VerticalLines
  }
}

export function CardPatterns({ item, width }: Props) {
  const { i18n } = useTranslation()
  const height = width * 1.4
  
  const bottomTrigramId = item.elements?.[0] ?? 1
  const topTrigramId = item.elements?.[1] ?? 1
 
  // Get patterns for bottom and top trigrams
  const BottomPattern = useMemo(() => getPatternForTrigram(bottomTrigramId), [bottomTrigramId])
  const TopPattern = useMemo(() => getPatternForTrigram(topTrigramId), [topTrigramId])

  return (
    <View
      style={{ 
        width, 
        aspectRatio: 1 / 1.4,
        backgroundColor:"#F5E9DC"
      }}
      className="border border-main/40 rounded-lg overflow-hidden"
    >
      {/* Bottom trigram pattern - lower half */}
      <BottomPattern 
        width={width} 
        height={height} 
        color="#42436B"
        opacity={0.05}
      />
      
      {/* Top trigram pattern - starts from center, extends upward (rotated 180deg) */}
          <TopPattern 
            width={width} 
            height={height} 
            color="#FF9677"
            opacity={0.15}
          />
      
      <View className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center">
        <GeistMonoText className="text-text/50 text-base">
          {item.displayNumber}
        </GeistMonoText>
      </View>

      <View className="absolute top-4 right-4 h-8 flex items-center justify-center">
        <BodoniText
          variant="medium"
          className="text-background text-xl"
        >
          {item.chineseName}
        </BodoniText>
      </View>
      
      <View className="flex-1 items-center justify-center">
        <HexagramSymbol
          lines={item.lines}
          size={100}
          color="#42436b"
        />
        
        <GeistMonoText className="text-text/60 text-base mt-2">
          {item.romanization}
        </GeistMonoText>

        <GeistMonoText
          variant="bold"
          className="text-background text-2xl px-12 text-center leading-7"
        >
          {item.content[i18n.language as "cs" | "en"].name}
        </GeistMonoText>
      </View>
    </View>
  )
}
