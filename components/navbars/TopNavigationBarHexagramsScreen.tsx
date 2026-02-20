import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  GalleryHorizontal,
  LayoutGrid,
  Rows3,
  Search,
} from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { HexagramsViewMode } from "../../types/navigation";
import GeistMonoText from "../GeistMonoText";

interface TopNavigationBarHexagramsScreenProps {
  onViewModePress?: () => void;
  onSearchPress?: () => void;
  viewMode: HexagramsViewMode;
}

export default function TopNavigationBarHexagramsScreen({
  onViewModePress,
  onSearchPress,
  viewMode,
}: TopNavigationBarHexagramsScreenProps) {
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
      {/* Toggle View Icon */}
      <TouchableOpacity
        onPress={onViewModePress}
        activeOpacity={1}
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {viewMode === "carousel" && (
          <GalleryHorizontal size={28} color="#06283F" strokeWidth={1.5} />
        )}

        {viewMode === "grid" && (
          <LayoutGrid size={28} color="#06283F" strokeWidth={1.5} />
        )}

        {viewMode === "list" && (
          <Rows3 size={28} color="#06283F" strokeWidth={1.5} />
        )}
      </TouchableOpacity>

      {/* Title */}
      <GeistMonoText
        style={{
          fontSize: 16,
          color: "#06283F",
        }}
        variant="medium"
      >
        {t("nav.hexagrams")}
      </GeistMonoText>

      {/* Search Icon */}
      <TouchableOpacity
        onPress={onSearchPress}
        activeOpacity={1}
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search size={28} color="#06283F" strokeWidth={1.5} />
      </TouchableOpacity>
    </View>
  );
}
