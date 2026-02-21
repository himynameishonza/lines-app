import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LucideIcon } from "lucide-react-native";

export interface BottomNavTab<T extends string> {
  id: T;
  Icon: LucideIcon;
}

interface BottomNavigationBarProps<T extends string> {
  tabs: BottomNavTab<T>[];
  activeTab: T;
  onTabChange?: (tab: T) => void;
}

export default function BottomNavigationBar<T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: BottomNavigationBarProps<T>) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute left-8 right-8 items-center z-10 bg-[#D8D6C3]/95 rounded-full py-4"
      style={{ bottom: insets.bottom - 10 }}
    >
      <View className="flex-row items-center justify-center px-0">
        {tabs.map((tab) => {
          const IconComponent = tab.Icon;
          return (
            <TouchableOpacity
              key={tab.id}
              className="items-center justify-center flex-1 h-11"
              onPress={() => onTabChange?.(tab.id)}
              activeOpacity={1}
            >
              <IconComponent
                size={28}
                color={activeTab === tab.id ? "#06283F" : "#87A5A6"}
                strokeWidth={1.5}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
