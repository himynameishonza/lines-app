import React from "react";
import { TouchableOpacity } from "react-native";
import { ArrowLeft, Share2, Home } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { HexagramDetailTab } from "../../types/hexagramDetail";
import TopNavigationBar from "../TopNavigationBar";

interface TopNavigationBarHexagramDetailProps {
  onBack?: () => void;
  onShare?: () => void;
  activeTab?: HexagramDetailTab;
  showHomeButton?: boolean;
}

export default function TopNavigationBarHexagramDetail({
  onBack,
  onShare,
  activeTab = 'meaning',
  showHomeButton = false,
}: TopNavigationBarHexagramDetailProps) {
  const { t } = useTranslation();

  return (
    <TopNavigationBar
      title={t(`detail.${activeTab}`)}
      leftElement={
        <TouchableOpacity onPress={onBack} activeOpacity={0.6}>
          {showHomeButton ? (
            <Home size={28} className="text-text" strokeWidth={1.5} />
          ) : (
            <ArrowLeft size={28} className="text-text" strokeWidth={1.5} />
          )}
        </TouchableOpacity>
      }
      rightElement={
        <TouchableOpacity onPress={onShare} activeOpacity={0.6}>
          <Share2 size={28} className="text-text" strokeWidth={1.5} />
        </TouchableOpacity>
      }
    />
  );
}
