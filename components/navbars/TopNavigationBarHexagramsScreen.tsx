import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  GalleryHorizontal,
  LayoutGrid,
  Rows3,
  Search,
} from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { TViewMode } from "../../types/generic";
import TopNavigationBar from "../TopNavigationBar";

interface TopNavigationBarHexagramsScreenProps {
  onViewModePress?: () => void;
  onSearchPress?: () => void;
  viewMode: TViewMode;
  isSearchActive?: boolean;
}

export default function TopNavigationBarHexagramsScreen({
  onViewModePress,
  onSearchPress,
  viewMode,
  isSearchActive = false,
}: TopNavigationBarHexagramsScreenProps) {
  const { t } = useTranslation();

  const getViewModeIcon = () => {
    switch (viewMode) {
      case "carousel":
        return <GalleryHorizontal size={28}  className='text-text' strokeWidth={1.5} />;
      case "grid":
        return <LayoutGrid size={28} className='text-text'strokeWidth={1.5} />;
      case "list":
        return <Rows3 size={28} className='text-text' strokeWidth={1.5} />;
    }
  };

  return (
    <TopNavigationBar
      title={t("nav.hexagrams")}
      leftElement={
        <TouchableOpacity className="w-full h-full flex items-center justify-center" onPress={onViewModePress} activeOpacity={0.6}>
          {getViewModeIcon()}
        </TouchableOpacity>
      }
      rightElement={
        <TouchableOpacity className="w-full h-full flex items-center justify-center" onPress={onSearchPress} activeOpacity={0.6}>
          <View>
            <Search size={28} className='text-text' strokeWidth={1.5} />
            {isSearchActive && (
              <View className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-main rounded-full" />
            )}
          </View>
        </TouchableOpacity>
      }
    />
  );
}
