import React from "react";
import { View, TouchableOpacity } from "react-native";
import GeistMonoText from "../typography/GeistMonoText";
import { useTranslation } from "react-i18next";
import { CircleOff } from "lucide-react-native";
import Button from "../Button";

export default function EmptyState({ onAdd }: { onAdd: () => void }) {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center px-6 gap-y-6 w-full">
      <View className="items-center gap-y-2">
        <CircleOff className="text-main mb-4" size={64} strokeWidth={1.5} />
        <GeistMonoText
          variant="bold"
          className="text-text text-base text-center"
        >
          {t("home.empty.title")}
        </GeistMonoText>
        <GeistMonoText className="text-background text-sm text-center">
          {t("home.empty.subtitle")}
        </GeistMonoText>
      </View>
      <View className="w-full">
        <Button onPress={() => onAdd()} label={t("home.empty.addNew")} />
      </View>
    </View>
  );
}
