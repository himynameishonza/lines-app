import React from "react";
import { View, TouchableOpacity, Linking } from "react-native";
import { useTranslation } from "react-i18next";
import Constants from "expo-constants";
import TopNavigationBarSettingsScreen from "../components/navbars/TopNavigationBarSettingsScreen";
import GeistMonoText from "../components/typography/GeistMonoText";
import Picker from "../components/Picker";
import { useSettings } from "../contexts/SettingsContext";
import { Coffee } from "lucide-react-native";
import { TLanguage, TTheme, TViewMode } from "../types/generic";
import Button from "../components/Button";

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const { settings, setSortBy, setViewMode, setTheme, setHasCompletedWizard } = useSettings();
  const currentLanguage = i18n.language as TLanguage;

  const appVersion = Constants.expoConfig?.version || "1.0.0";
  const buildNumber =
    Constants.expoConfig?.ios?.buildNumber ||
    Constants.expoConfig?.android?.versionCode ||
    "1";

  const changeLanguage = (lang: TLanguage) => {
    i18n.changeLanguage(lang);
  };

  const handleCoffeePress = () => {
    Linking.openURL("https://buymeacoffee.com/himynameishonza");
  };

  const handleResetWizard = () => {
    setHasCompletedWizard(false);
    // Optionally reload the app or show a message
    alert("Wizard reset! Please restart the app to see the onboarding again.");
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

  const themeOptions = [
    { label: t("settings.themes.default"), value: "default" },
    { label: t("settings.themes.minimal"), value: "minimal" },
    { label: t("settings.themes.patterns"), value: "patterns" },
  ];

  return (
    <View className="bg-primary flex-1 px-6 justify-between">
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

          {/* Theme picker */}
          <View className="flex flex-row w-full items-center justify-between py-6">
            <GeistMonoText className="text-sm text-text" variant="bold">
              {t("settings.theme")}
            </GeistMonoText>

            <Picker
              selectedValue={settings.theme}
              onValueChange={(value) => setTheme(value as TTheme)}
              options={themeOptions}
            />
          </View>

          <View className="flex flex-row w-full items-center justify-between py-6">
            <GeistMonoText className="text-sm text-text" variant="bold">
              {t("settings.version")}
            </GeistMonoText>

            <GeistMonoText className="text-sm text-text">
              {appVersion} (build {buildNumber})
            </GeistMonoText>
          </View>

          {/* DEV: Reset Wizard Button */}
          {__DEV__ && (
            <View className="flex flex-row w-full items-center justify-between py-6">
              <GeistMonoText className="text-sm text-text" variant="bold">
                Reset Wizard (Dev)
              </GeistMonoText>

              <TouchableOpacity
                onPress={handleResetWizard}
                className="bg-text/10 px-4 py-2 rounded"
                activeOpacity={0.7}
              >
                <GeistMonoText className="text-sm text-text" variant="medium">
                  Reset
                </GeistMonoText>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View className="flex flex-col gap-y-4 rounded-lg p-4 items-center border border-dashed border-text/25 mb-28">
        <Coffee size={40} strokeWidth={1.5} className="text-text" />
        <GeistMonoText
          className="text-xs text-text text-center"
          variant="regular"
        >
          {t("settings.coffee")}
        </GeistMonoText>

        <View className="w-full">
          <Button onPress={handleCoffeePress} label={t("settings.contribute")} />
        </View>
      </View>
    </View>
  );
}
