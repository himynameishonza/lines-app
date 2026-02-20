import React from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import TopNavigationBarSettingsScreen from "../components/navbars/TopNavigationBarSettingsScreen";
import GeistMonoText from "../components/GeistMonoText";
import Picker from "../components/Picker";
import { useSettings } from "../contexts/SettingsContext";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const { settings, setSortBy } = useSettings();
  const currentLanguage = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages = [
    { label: "Čeština", value: "cs" },
    { label: "English", value: "en" },
  ];

  const sortingOptions = [
    { label: t("settings.sort.fuSi"), value: "fuSi" },
    { label: t("settings.sort.wen"), value: "wen" },
  ];

  return (
    <View className="bg-[#D8D6C3] flex-1 px-6">
      <TopNavigationBarSettingsScreen />
      <View className="py-8 divide-y divide-dashed divide-[#06283F]/25">
        {/* Language Picker */}
        <View className="flex flex-row w-full items-center justify-between py-6">
          <GeistMonoText className="text-sm text-[#06283F]" variant="bold">
            {t("settings.language")}
          </GeistMonoText>

          <Picker
            selectedValue={currentLanguage}
            onValueChange={changeLanguage}
            options={languages}
          />
        </View>

        {/* Sorting picker */}
        <View className="flex flex-row w-full items-center justify-between py-6">
          <GeistMonoText className="text-sm text-[#06283F]" variant="bold">
            {t("settings.sortBy")}
          </GeistMonoText>

          <Picker
            selectedValue={settings.sortBy}
            onValueChange={(value) => setSortBy(value as 'fuSi' | 'wen')}
            options={sortingOptions}
          />
        </View>
      </View>
    </View>
  );
}
