import React from "react";
import { View, TouchableOpacity } from "react-native";
import GeistMonoText from "../typography/GeistMonoText";
import { useTranslation } from "react-i18next";
import { CircleOff } from "lucide-react-native";

export default function EmptyState() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center px-6">
      <View className="items-center gap-2">
        <CircleOff className="text-main mb-4" size={48} strokeWidth={1.5}/>
        <GeistMonoText variant="medium" className="text-text text-base text-center">
          {t('home.empty.title')}
        </GeistMonoText>
        <GeistMonoText className="text-background text-sm text-center">
          {t('home.empty.subtitle')}
        </GeistMonoText>
      </View>
    </View>
  );
}
