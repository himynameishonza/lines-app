import React from "react";
import { TouchableOpacity } from "react-native";
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
}

export default function TopNavigationBarHexagramsScreen({
  onViewModePress,
  onSearchPress,
  viewMode,
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
        <TouchableOpacity onPress={onViewModePress} activeOpacity={0.6}>
          {getViewModeIcon()}
        </TouchableOpacity>
      }
      rightElement={
        <TouchableOpacity onPress={onSearchPress} activeOpacity={0.6}>
          <Search size={28} className='text-text' strokeWidth={1.5} />
        </TouchableOpacity>
      }
    />
  );
}
