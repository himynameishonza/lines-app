import React, { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GeistMonoText from "./typography/GeistMonoText";

interface TopNavigationBarProps {
  leftElement?: ReactNode;
  title?: string;
  rightElement?: ReactNode;
  justifyContent?: "space-between" | "center" | "flex-start" | "flex-end";
}

export default function TopNavigationBar({
  leftElement,
  title,
  rightElement,
  justifyContent = "space-between",
}: TopNavigationBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute top-0 left-0 right-0 z-10 flex-row items-center px-3 pb-3"
      style={{
        paddingTop: insets.top,
        height: insets.top + 56,
        justifyContent,
      }}
    >
      {leftElement ? (
        <View className="w-12 h-12 items-center justify-center">
          {leftElement}
        </View>
      ):<View className="w-12 h-12 items-center justify-center"/>}

      {title && (
        <View
          className="items-center"
          style={{ flex: justifyContent === "space-between" ? 0 : 1 }}
        >
          <GeistMonoText className="text-base text-text" variant="medium">
            {title}
          </GeistMonoText>
        </View>
      )}

      {rightElement ? (
        <View className="w-12 h-12 items-center justify-center">
          {rightElement}
        </View>
      ) : <View className="w-12 h-12 items-center justify-center"/>}
    </View>
  );
}
