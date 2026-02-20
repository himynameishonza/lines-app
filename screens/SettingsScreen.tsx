import React from "react";
import { View, Switch, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import TopNavigationBarSettingsScreen from "../components/navbars/TopNavigationBarSettingsScreen";
import GeistMonoText from "../components/GeistMonoText";
import Picker from "../components/Picker";
import { useSettings } from "../contexts/SettingsContext";
import { Coffee } from "lucide-react-native";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const { settings, setSortBy, setEinkMode } = useSettings();
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
    <View className="bg-[#D8D6C3] flex-1 px-6 justify-between">
      <View>
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
              onValueChange={(value) => setSortBy(value as "fuSi" | "wen")}
              options={sortingOptions}
            />
          </View>

          {/* E-ink mode switch */}
          <View className="flex flex-row w-full items-center justify-between py-6">
            <GeistMonoText className="text-sm text-[#06283F]" variant="bold">
              {t("settings.eink")}
            </GeistMonoText>

            <Switch
              value={settings.einkMode}
              onValueChange={setEinkMode}
              trackColor={{ false: "#D8D6C3", true: "#06283F" }}
              thumbColor={settings.einkMode ? "#FF9677" : "#D8D6C3"}
              ios_backgroundColor="#D8D6C3"
            />
          </View>
        </View>
      </View>

      <View className="flex flex-col gap-y-4 rounded-lg p-4 items-center bg-black/10 mb-32">
        <Coffee size={40} strokeWidth={1.5} color="#06283F" />
        <GeistMonoText
          className="text-xs text-[#06283F] text-center"
          variant="regular"
        >
          {t("settings.coffee")}
        </GeistMonoText>
        <TouchableOpacity className="rounded bg-[#06283F] w-full p-3">
          <GeistMonoText className="text-white text-center" variant="medium">
            {t("settings.contribute")}
          </GeistMonoText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
