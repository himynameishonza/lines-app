import React from "react";
import { View } from "react-native";
import TopNavigationBarHomeScreen from "../components/navbars/TopNavigationBarHomeScreen";
import GeistMonoText from "../components/typography/GeistMonoText";
interface HomeScreenProps {
  onAdd: () => void;
}

export default function HomeScreen({ onAdd }: HomeScreenProps) {
  return (
    <View className="bg-primary flex-1 px-6">
      <TopNavigationBarHomeScreen onAdd={onAdd} />
      <View className="my-28 flex-1 items-center justify-center border border-dashed border-text/25 rounded-lg ">
        <GeistMonoText>Todo</GeistMonoText>
      </View>      
    </View>
  );
}
