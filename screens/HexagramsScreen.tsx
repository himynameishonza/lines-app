import React, { useState } from "react";
import { View } from "react-native";
import TopNavigationBarHexagramsScreen from "../components/navbars/TopNavigationBarHexagramsScreen";
import GeistMonoText from "../components/typography/GeistMonoText";
import { TViewMode } from "../types/generic";

interface HexagramsScreenProps {
  initialViewMode?: TViewMode;
  onViewModeChange?: (viewMode: TViewMode) => void;
}

export default function HexagramsScreen({
  initialViewMode = "carousel",
  onViewModeChange,
}: HexagramsScreenProps) {
  const [viewMode, setViewMode] = useState<TViewMode>(initialViewMode);

  function changeViewMode() {
    let newViewMode: TViewMode;

    if (viewMode === "carousel") {
      newViewMode = "list";
    } else if (viewMode === "list") {
      newViewMode = "grid";
    } else {
      newViewMode = "carousel";
    }

    setViewMode(newViewMode);
    onViewModeChange?.(newViewMode);
  }

  return (
    <View className="bg-[#D8D6C3] px-6 flex-1">
      <TopNavigationBarHexagramsScreen
        viewMode={viewMode}
        onViewModePress={changeViewMode}
      />
      <View className="my-28 flex-1 items-center justify-center border border-dashed border-text/25 rounded-lg ">
        <GeistMonoText>Todo {viewMode}</GeistMonoText>
      </View>
    </View>
  );
}
