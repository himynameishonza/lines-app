import React from "react";
import { TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { CircleQuestionMarkIcon, Plus } from "lucide-react-native";
import TopNavigationBar from "../TopNavigationBar";

interface TopNavigationBarHomeScreenProps {
  onAdd?: () => void;
}

export default function TopNavigationBarHomeScreen({
  onAdd,
}: TopNavigationBarHomeScreenProps) {
  const { t } = useTranslation();

  return (
    <TopNavigationBar
      justifyContent="flex-end"
      leftElement={
        <TouchableOpacity
          className="w-full h-full flex items-center justify-center"
          onPress={onAdd}
          activeOpacity={0.6}
        >
          <CircleQuestionMarkIcon size={28} className="text-text" strokeWidth={1.5} />
        </TouchableOpacity>
      }
      title="Čtení"
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
