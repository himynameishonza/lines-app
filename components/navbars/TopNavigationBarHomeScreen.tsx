import React from "react";
import { TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { CircleQuestionMark, Plus } from "lucide-react-native";
import TopNavigationBar from "../TopNavigationBar";
import { useSettings } from "../../contexts/SettingsContext";

interface TopNavigationBarHomeScreenProps {
  onAdd?: () => void;
  onWizardReset?: () => void;
}

export default function TopNavigationBarHomeScreen({
  onAdd,
  onWizardReset,
}: TopNavigationBarHomeScreenProps) {
  const { t } = useTranslation();
  const {setHasCompletedWizard } = useSettings();

  function handleWizardReset(){
    setHasCompletedWizard(false);
    onWizardReset?.();
  }

  return (
    <TopNavigationBar
      justifyContent="flex-end"
      title="Čtení"
      leftElement={
        <TouchableOpacity
          className="w-full h-full flex items-center justify-center"
          onPress={handleWizardReset}
          activeOpacity={0.6}
        >
          <CircleQuestionMark size={28} className="text-text" strokeWidth={1.5} />
        </TouchableOpacity>
      }
      rightElement={
        <TouchableOpacity
          className="w-full h-full flex items-center justify-center"
          onPress={onAdd}
          activeOpacity={0.6}
        >
          <Plus size={28} className="text-text" strokeWidth={1.5} />
        </TouchableOpacity>
      }
    />
  );
}
