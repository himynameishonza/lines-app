import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { Plus } from "lucide-react-native";

interface TopNavigationBarHomeScreeProps {
  onAdd?: () => void;
}

export default function TopNavigationBarHomeScreen({
  onAdd,
}: TopNavigationBarHomeScreeProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingTop: insets.top,
        paddingHorizontal: 16,
        paddingBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      {/* Search Icon */}
      <TouchableOpacity
        onPress={onAdd}
        activeOpacity={0.6}
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Plus size={28} color="#06283F" strokeWidth={1.5} />
      </TouchableOpacity>
    </View>
  );
}
