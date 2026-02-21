import React from "react"
import { View } from "react-native"
import { useTranslation } from "react-i18next"
import GeistMonoText from "../typography/GeistMonoText"
import BodoniText from "../typography/BodoniText"
import HexagramSymbol from "../HexagramSymbol"
import { CardBackground } from "../CardBackground"
import { Hexagram } from "../../data/hexagrams"

type Props = {
  item: Hexagram & { displayNumber: number }
  width: number
}

export function CardDefault({ item, width }: Props) {
  const { i18n } = useTranslation()

  return (
    <View
      style={{ width, aspectRatio: 1 / 1.4 }}
      className="border border-text/10 rounded-lg overflow-hidden"
    >
      <CardBackground 
        elements={item.elements ?? [0, 0]} 
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
