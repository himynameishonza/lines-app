import React from "react";
import { TouchableOpacity } from "react-native";
import { ArrowLeft, HelpCircle, HomeIcon, X } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import TopNavigationBar from "../TopNavigationBar";

interface TopNavigationBarCoinTossProps {
  onBack?: () => void;
  onHelp?: () => void;
}

export default function TopNavigationBarCoinToss({
  onBack,
  onHelp,
}: TopNavigationBarCoinTossProps) {
  const { t } = useTranslation();

  return (
    <TopNavigationBar
      title={t("coinToss.title")}
      leftElement={
        <TouchableOpacity onPress={onBack} activeOpacity={0.6}>
          <X size={28} className="text-text" strokeWidth={1.5} />
        </TouchableOpacity>
      }
      
    />
  );
}
