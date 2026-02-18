import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { useTranslation } from "react-i18next";
import { Hexagram } from "../data/hexagrams";
import HexagramSymbol from "./HexagramSymbol";
import GeistMonoText from "./GeistMonoText";
import BodoniText from "./BodoniText";
import { getHexagramTranslatedName } from "../utils/hexagramHelpers";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = (SCREEN_WIDTH - 48) / 2; // Screen width minus padding (16*2) and gap (16) divided by 2 columns

interface HexagramGridCardProps {
  item: Hexagram;
  onPress?: () => void;
  testID?: string;
}

export default function HexagramGridCard({
  item,
  onPress,
  testID,
}: HexagramGridCardProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "cs" | "en";

  const translatedName = getHexagramTranslatedName(item, currentLang, t);

  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      style={{
        width: CARD_WIDTH,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.1)",
        padding: 16,
        alignItems: "center",
        aspectRatio: 1,
        justifyContent: "space-between",
      }}
    >
      {/* Hexagram Number */}
      <GeistMonoText
        style={{
          fontSize: 12,
          color: "rgba(255, 255, 255, 0.6)",
          alignSelf: "flex-start",
        }}
      >
        {item.id}
      </GeistMonoText>

      {/* Hexagram Symbol */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <HexagramSymbol lines={item.lines} size={48} color="#EFDECA" />
      </View>

      {/* Hexagram Name */}
      <BodoniText
        style={{
          fontSize: 16,
          color: "#EFDECA",
          fontWeight: "600",
          textAlign: "center",
          lineHeight: 21,
          marginTop: 0,
        }}
        numberOfLines={2}
      >
        {translatedName}
      </BodoniText>
    </TouchableOpacity>
  );
}
