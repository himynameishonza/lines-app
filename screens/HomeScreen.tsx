import React from "react";
import { View } from "react-native";
import TopNavigationBarHomeScreen from "../components/navbars/TopNavigationBarHomeScreen";

interface HomeScreenProps {
  onAdd: () => void;
}

export default function HomeScreen({ onAdd }: HomeScreenProps) {
  return (
    <View className="bg-primary flex-1 px-6">
      <TopNavigationBarHomeScreen onAdd={onAdd} />
    </View>
  );
}
