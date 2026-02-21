import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ArrowLeft, Share2, Home } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { HexagramDetailTab } from "../../types/hexagramDetail";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GeistMonoText from "../typography/GeistMonoText";

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
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute top-0 left-0 right-0 z-10 flex-row items-center justify-between px-4 pb-3"
      style={{
        paddingTop: insets.top,
        height: insets.top + 56,
      }}
    >
      <View className="w-12 h-12 items-center justify-center">
        <TouchableOpacity onPress={onBack} activeOpacity={1}>
          {showHomeButton ? (
            <Home size={28} color="#EFDECA" strokeWidth={1.5} />
          ) : (
            <ArrowLeft size={28} color="#EFDECA" strokeWidth={1.5} />
          )}
        </TouchableOpacity>
      </View>

      <View className="items-center">
        <GeistMonoText className="text-base text-[#EFDECA]" variant="medium">
          {t(`detail.${activeTab}`)}
        </GeistMonoText>
      </View>

      <View className="w-12 h-12 items-center justify-center">
        <TouchableOpacity onPress={onShare} activeOpacity={1}>
          <Share2 size={28} color="#EFDECA" strokeWidth={1.5} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
