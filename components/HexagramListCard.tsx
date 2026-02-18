import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Hexagram } from "../data/hexagrams";
import HexagramSymbol from "./HexagramSymbol";
import BodoniText from "./BodoniText";
import { useTranslation } from "react-i18next";
import GeistMonoText from "./GeistMonoText";

interface HexagramListCardProps {
  item: Hexagram;
  onPress?: () => void;
  testID?: string;
}

export default function HexagramListCard({
  item,
  onPress,
  testID,
}: HexagramListCardProps) {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language as "cs" | "en";

  const translatedName = item.content[currentLang]?.meaning
    ? t(`hexagrams.${item.number}`)
    : item.chineseName;

  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        marginHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginVertical: 8,
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        {/* Hexagram Number */}
        <GeistMonoText
          style={{
            fontSize: 12,
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          {item.id}
        </GeistMonoText>

        {/* Hexagram Name */}
        <BodoniText
          style={{
            fontSize: 16,
            color: "#EFDECA",
            fontWeight: "600",
            textAlign: "center",
            marginTop: 0,
          }}
          numberOfLines={2}
        >
          {translatedName}
        </BodoniText>
      </View>
    </TouchableOpacity>
  );
}
