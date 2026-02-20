import React from "react";
import { View, Switch, TouchableOpacity, Linking } from "react-native";
import { useTranslation } from "react-i18next";
import TopNavigationBarSettingsScreen from "../components/navbars/TopNavigationBarSettingsScreen";
import GeistMonoText from "../components/typography/GeistMonoText";
import Picker from "../components/Picker";
import { useSettings } from "../contexts/SettingsContext";
import { Coffee } from "lucide-react-native";
import { TLanguage, TViewMode } from "../types/generic";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const { settings, setSortBy, setEinkMode, setViewMode } = useSettings();
  const currentLanguage = i18n.language as TLanguage;

  const changeLanguage = (lang: TLanguage) => {
    i18n.changeLanguage(lang);
  };

  const handleCoffeePress = () => {
    Linking.openURL("https://buymeacoffee.com/himynameishonza");
  };

  const languages = [
    { label: "Čeština", value: "cs" },
    { label: "English", value: "en" },
  ];

  const sortingOptions = [
    { label: t("settings.sort.fuSi"), value: "fuSi" },
    { label: t("settings.sort.wen"), value: "wen" },
  ];

  const viewModeOptions = [
    { label: t("settings.viewModes.carousel"), value: "carousel" },
    { label: t("settings.viewModes.list"), value: "list" },
    { label: t("settings.viewModes.grid"), value: "grid" },
  ];

  return (
    <View className="bg-[#D8D6C3] flex-1 px-6 justify-between">
      <TopNavigationBarSettingsScreen />
      <View>
        <View className="divide-y divide-dashed divide-text/25 mt-28">
          {/* Language Picker */}
          <View className="flex flex-row w-full items-center justify-between py-6">
            <GeistMonoText className="text-sm text-text" variant="bold">
              {t("settings.language")}
            </GeistMonoText>

            <Picker
              selectedValue={currentLanguage}
              onValueChange={(value) => changeLanguage(value as TLanguage)}
              options={languages}
            />
          </View>

          {/* Sorting picker */}
          <View className="flex flex-row w-full items-center justify-between py-6">
            <GeistMonoText className="text-sm text-text" variant="bold">
              {t("settings.sortBy")}
            </GeistMonoText>

            <Picker
              selectedValue={settings.sortBy}
              onValueChange={(value) => setSortBy(value as "fuSi" | "wen")}
              options={sortingOptions}
            />
          </View>

           {/* View Modes picker */}
          <View className="flex flex-row w-full items-center justify-between py-6">
            <GeistMonoText className="text-sm text-text" variant="bold">
              {t("settings.viewMode")}
            </GeistMonoText>

            <Picker
              selectedValue={settings.viewMode}
              onValueChange={(value) => setViewMode(value as TViewMode)}
              options={viewModeOptions}
            />
          </View>

          {/* E-ink mode switch */}
          <View className="flex flex-row w-full items-center justify-between py-6">
            <GeistMonoText className="text-sm text-text" variant="bold">
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

      <View className="flex flex-col gap-y-4 rounded-lg p-4 items-center bg-text/10 mb-28">
        <Coffee size={40} strokeWidth={1.5} className="text-text" />
        <GeistMonoText
          className="text-xs text-text text-center"
          variant="regular"
        >
          {t("settings.coffee")}
        </GeistMonoText>
        <TouchableOpacity 
          className="rounded bg-text w-full p-3"
          onPress={handleCoffeePress}
          activeOpacity={0.8}
        >
          <GeistMonoText className="text-white text-center" variant="medium">
            {t("settings.contribute")}
          </GeistMonoText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
