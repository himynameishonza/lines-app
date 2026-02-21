import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Hexagram } from "../data/hexagrams";
import { HexagramDetailTab, TLanguage } from "../types/generic";
import TopNavigationBarHexagramDetail from "../components/navbars/TopNavigationBarHexagramDetail";
import BottomNavigationBarHexagramDetail from "../components/navbars/BottomNavigationBarHexagramDetail";
import GeistMonoText from "../components/typography/GeistMonoText";
import i18n from "../i18n/config";
import { getYinYangTranslation } from "../data/yinyang";

interface HexagramDetailScreenProps {
  hexagram: Hexagram;
  onBack: () => void;
  onShare?: () => void;
}

export default function HexagramDetailScreen({
  hexagram,
  onBack,
  onShare,
}: HexagramDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<HexagramDetailTab>("meaning");

  const renderTabContent = () => {
    switch (activeTab) {
      case "meaning":
        return (
          <View className="p-6">
            <GeistMonoText className="text-text text-base leading-7">
              {hexagram.content[i18n.language as TLanguage].meaning}
            </GeistMonoText>
          </View>
        );
      case "oracle":
        return (
          <View className="p-6">
            <GeistMonoText className="text-text text-base leading-7">
              {hexagram.content[i18n.language as TLanguage].oracle}
            </GeistMonoText>
          </View>
        );
      case "anatomy":
        return (
          <View className="p-6">
            <View className="divide-y divide-dashed divide-text/25">
              {hexagram.content[i18n.language as "cs" | "en"].anatomy.map(
                (item) => {
                  return (
                    <View
                      key={item.type + "-" + item.name}
                      className="py-4 flex gap-1"
                    >
                      <View className="w-10 rounded bg-main p-0.5 mb-1">
                        <GeistMonoText
                          variant="medium"
                          className="text-text text-xs text-center"
                        >
                          {getYinYangTranslation(
                            item.type,
                            i18n.language as TLanguage,
                          )}
                        </GeistMonoText>
                      </View>
                      <GeistMonoText
                        className="text-text text-base"
                        variant="bold"
                      >
                        {item.position}. linie - {item.name}
                      </GeistMonoText>

                      <GeistMonoText className="text-text text-base leading-7">
                        {item.description}{" "}
                      </GeistMonoText>
                    </View>
                  );
                },
              )}
            </View>
          </View>
        );
      case "evolution":
        return (
          <View className="p-6">
            <GeistMonoText className="text-text text-base leading-7">
              {hexagram.content[i18n.language as TLanguage].evolution}
            </GeistMonoText>
          </View>
        );
    }
  };

  return (
    <View className="flex-1 bg-primary">
      <TopNavigationBarHexagramDetail
        onBack={onBack}
        onShare={onShare}
        activeTab={activeTab}
      />
      <View className="bg-main relative h-64 flex justify-center items-center pt-20 px-6 text-center">
        <GeistMonoText className="text-xl text-background">
          {hexagram.chineseName}
        </GeistMonoText>
        <GeistMonoText className="text-base text-background" variant="medium">
          {hexagram.romanization}
        </GeistMonoText>
        <GeistMonoText variant="bold" className="text-3xl text-text pt-1 -mt-1">
          {hexagram.content[i18n.language as TLanguage].name}
        </GeistMonoText>
      </View>
      <ScrollView
        className="flex-1 z-1 bg-primary"
        contentContainerStyle={{ paddingTop: 0, paddingBottom: 100 }}
      >
        <View className="bg-primary absolute w-full h-full z-0" />

        {renderTabContent()}
      </ScrollView>

      <BottomNavigationBarHexagramDetail
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </View>
  );
}
