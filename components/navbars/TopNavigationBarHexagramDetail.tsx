import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { ArrowLeft, Share2 } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { HexagramDetailTab } from "../../types/hexagramDetail";

interface TopNavigationBarHexagramDetailProps {
  onBack?: () => void;
  onShare?: () => void;
  activeTab?: HexagramDetailTab;
}

export default function TopNavigationBarHexagramDetail({
  onBack,
  onShare,
  activeTab = 'meaning',
}: TopNavigationBarHexagramDetailProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingTop: insets.top,
        paddingHorizontal: 16,
        paddingBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Back Button */}
      <TouchableOpacity
        onPress={onBack}
        activeOpacity={1}
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowLeft size={28} color="#EFDECA" strokeWidth={1.5} />
      </TouchableOpacity>

      {/* Empty center space */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#EFDECA",
          letterSpacing: 0.5,
        }}
      >
        {t(`detail.${activeTab}`)}
      </Text>

      {/* Share Button */}
      <TouchableOpacity
        onPress={onShare}
        activeOpacity={1}
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Share2 size={28} color="#EFDECA" strokeWidth={1.5} />
      </TouchableOpacity>
    </View>
  );
}
