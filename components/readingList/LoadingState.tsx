import React from "react";
import { View, ActivityIndicator } from "react-native";
import GeistMonoText from "../typography/GeistMonoText";
import { useTranslation } from "react-i18next";

export default function LoadingState() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center px-6">
      <View className="items-center gap-2">
        <ActivityIndicator size="large" color="#FF9677" className="mb-4" />
        <GeistMonoText variant="medium" className="text-text text-base text-center">
          {t('home.loading.title')}
        </GeistMonoText>
        <GeistMonoText className="text-background text-sm text-center">
          {t('home.loading.subtitle')}
        </GeistMonoText>
      </View>
    </View>
  );
}
