import React from "react";
import { TouchableOpacity } from "react-native";
import { ArrowLeft, ChevronLeft } from "lucide-react-native";
import GeistMonoText from "../typography/GeistMonoText";
import TopNavigationBar from "../TopNavigationBar";
import { useTranslation } from "react-i18next";

interface TopNavigationBarNewReadingProps {
  onBack: () => void;
}

export default function TopNavigationBarNewReading({
  onBack,
}: TopNavigationBarNewReadingProps) {
  const { t } = useTranslation();

  return (
    <TopNavigationBar
      leftElement={
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <ArrowLeft size={28} className="text-text" strokeWidth={1.5} />
        </TouchableOpacity>
      }
      title={t("newReading.title")}
    />
  );
}
