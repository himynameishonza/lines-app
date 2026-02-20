import React from "react";
import { View } from "react-native";
import GeistMonoText from "../components/GeistMonoText";
import { useReadings } from "../contexts/ReadingsContext";

import TopNavigationBarHomeScreen from "../components/navbars/TopNavigationBarHomeScreen";
interface HomeScreenProps {
  onAdd: () => void;
}

export default function HomeScreen({ onAdd }: HomeScreenProps) {
  const { readings } = useReadings();

  return (
    <View className="bg-[#D8D6C3] flex-1 px-6 justify-between">
      <TopNavigationBarHomeScreen onAdd={onAdd} />
      <View className="pt-24">
        <View className="divide-y divide-dashed divide-[#06283F]/25">
          {readings.map((reading) => {
            return (
              <View className="flex flex-row w-full items-center justify-between py-6">
                <GeistMonoText
                  className="text-sm text-[#06283F]"
                  variant="bold"
                >
                  {reading.question}
                </GeistMonoText>
                <GeistMonoText
                  className="text-sm text-[#06283F]"
                  variant="bold"
                >
                  {reading.createdAt}
                </GeistMonoText>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
