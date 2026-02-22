import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Hexagram, hexagrams } from "../data/hexagrams";
import { HexagramDetailTab, TLanguage } from "../types/generic";
import TopNavigationBarHexagramDetail from "../components/navbars/TopNavigationBarHexagramDetail";
import BottomNavigationBarHexagramDetail from "../components/navbars/BottomNavigationBarHexagramDetail";
import GeistMonoText from "../components/typography/GeistMonoText";
import HexagramSymbol from "../components/HexagramSymbol";
import { trigrams } from "../data/trigrams";
import i18n from "../i18n/config";
import { getYinYangTranslation } from "../data/yinyang";

interface HexagramDetailScreenProps {
  hexagram: Hexagram;
  onBack: () => void;
  onShare?: () => void;
  showHomeButton?: boolean;
  changingLines?: boolean[];
}

export default function HexagramDetailScreen({
  hexagram,
  onBack,
  onShare,
  showHomeButton = false,
  changingLines = [],
}: HexagramDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<HexagramDetailTab>("meaning");
  const scrollViewRef = useRef<ScrollView>(null);

  // Reset scroll position when tab changes
  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "meaning":
        return (
          <View className="p-6">
            <GeistMonoText className="text-text text-sm leading-6">
              {hexagram.content[i18n.language as TLanguage].meaning}
            </GeistMonoText>
          </View>
        );
      case "oracle":
        const oracleContent =
          hexagram.content[i18n.language as TLanguage].oracle;
        return (
          <View className="p-6 space-y-10">
            <View className="divide-y divide-dashed divide-text/25">
              <GeistMonoText
                variant="bold"
                className="text-text text-base py-2"
              >
                Výklad
              </GeistMonoText>
              {oracleContent.interpretation.map((text, index) => (
                <GeistMonoText key={index} className="text-text text-sm leading-5 py-4">
                  {text}
                </GeistMonoText>
              ))}
            </View>
            {oracleContent.introspection.length > 0 && (
              <View className="divide-y divide-dashed divide-text/25">
                <GeistMonoText
                  variant="bold"
                  className="text-text text-base py-2"
                >
                  Introspekce
                </GeistMonoText>
                {oracleContent.introspection.map((text, index) => (
                  <GeistMonoText
                    key={index}
                    className="text-text text-sm leading-5 py-4"
                  >
                    {text}
                  </GeistMonoText>
                ))}
              </View>
            )}
          </View>
        );
      case "anatomy":
        const lowerTrigramLines = hexagram.lines.slice(0, 3);
        const upperTrigramLines = hexagram.lines.slice(3, 6);

        const lowerTrigram = trigrams.find(
          (t) =>
            (t.id === 1 && lowerTrigramLines.every((l) => l === 1)) ||
            (t.id === 2 && lowerTrigramLines.every((l) => l === 0)) ||
            (t.id === 3 &&
              lowerTrigramLines[0] === 1 &&
              lowerTrigramLines[1] === 0 &&
              lowerTrigramLines[2] === 0) ||
            (t.id === 4 &&
              lowerTrigramLines[0] === 1 &&
              lowerTrigramLines[1] === 1 &&
              lowerTrigramLines[2] === 0) ||
            (t.id === 5 &&
              lowerTrigramLines[0] === 0 &&
              lowerTrigramLines[1] === 1 &&
              lowerTrigramLines[2] === 0) ||
            (t.id === 6 &&
              lowerTrigramLines[0] === 1 &&
              lowerTrigramLines[1] === 0 &&
              lowerTrigramLines[2] === 1) ||
            (t.id === 7 &&
              lowerTrigramLines[0] === 0 &&
              lowerTrigramLines[1] === 0 &&
              lowerTrigramLines[2] === 1) ||
            (t.id === 8 &&
              lowerTrigramLines[0] === 0 &&
              lowerTrigramLines[1] === 1 &&
              lowerTrigramLines[2] === 1),
        );

        const upperTrigram = trigrams.find(
          (t) =>
            (t.id === 1 && upperTrigramLines.every((l) => l === 1)) ||
            (t.id === 2 && upperTrigramLines.every((l) => l === 0)) ||
            (t.id === 3 &&
              upperTrigramLines[0] === 1 &&
              upperTrigramLines[1] === 0 &&
              upperTrigramLines[2] === 0) ||
            (t.id === 4 &&
              upperTrigramLines[0] === 1 &&
              upperTrigramLines[1] === 1 &&
              upperTrigramLines[2] === 0) ||
            (t.id === 5 &&
              upperTrigramLines[0] === 0 &&
              upperTrigramLines[1] === 1 &&
              upperTrigramLines[2] === 0) ||
            (t.id === 6 &&
              upperTrigramLines[0] === 1 &&
              upperTrigramLines[1] === 0 &&
              upperTrigramLines[2] === 1) ||
            (t.id === 7 &&
              upperTrigramLines[0] === 0 &&
              upperTrigramLines[1] === 0 &&
              upperTrigramLines[2] === 1) ||
            (t.id === 8 &&
              upperTrigramLines[0] === 0 &&
              upperTrigramLines[1] === 1 &&
              upperTrigramLines[2] === 1),
        );

        return (
          <View className="p-6 space-y-8  divide-y divide-dashed divide-text/25">
            {/* Hexagram */}
            <View className="items-center pt-10 pb-4">
              <HexagramSymbol
                lines={hexagram.lines}
                size={128}
                color="#06283F"
              />
            </View>

            {/* Trigrams */}

            {/* Lower Trigram */}
            {lowerTrigram && (
              <View className="space-y-3 pt-8">
                <GeistMonoText
                  variant="bold"
                  className="text-text text-base py-2"
                >
                  Spodní trigram
                </GeistMonoText>
                <View className="flex-row items-center space-x-4">
                  <HexagramSymbol
                    lines={lowerTrigramLines}
                    size={60}
                    color="#42436b"
                  />
                  <View className="flex-1">
                    <GeistMonoText variant="bold" className="text-text text-sm">
                      {lowerTrigram.content[i18n.language as TLanguage].name}
                    </GeistMonoText>
                    <GeistMonoText className="text-text/50 text-sm">
                      {lowerTrigram.chineseName} · {lowerTrigram.pinyin}
                    </GeistMonoText>
                  </View>
                </View>
                <GeistMonoText className="text-text text-sm leading-5">
                  {lowerTrigram.content[i18n.language as TLanguage].description}
                </GeistMonoText>
              </View>
            )}

            {/* Upper Trigram */}
            {upperTrigram && (
              <View className="space-y-3 pt-8">
                <GeistMonoText
                  variant="bold"
                  className="text-text text-base py-2"
                >
                  Horní trigram
                </GeistMonoText>
                <View className="flex-row items-center space-x-4">
                  <HexagramSymbol
                    lines={upperTrigramLines}
                    size={60}
                    color="#42436b"
                  />
                  <View className="flex-1">
                    <GeistMonoText variant="bold" className="text-text text-sm">
                      {upperTrigram.content[i18n.language as TLanguage].name}
                    </GeistMonoText>
                    <GeistMonoText className="text-text/50 text-sm">
                      {upperTrigram.chineseName} · {upperTrigram.pinyin}
                    </GeistMonoText>
                  </View>
                </View>
                <GeistMonoText className="text-text text-sm leading-5">
                  {upperTrigram.content[i18n.language as TLanguage].description}
                </GeistMonoText>
              </View>
            )}
          </View>
        );
      case "evolution":
        const hasChangingLines = changingLines.some((line) => line === true);

        // Calculate transformed hexagram if there are changing lines
        let transformedHexagram = null;
        if (hasChangingLines) {
          const transformedLines = hexagram.lines.map((line, index) =>
            changingLines[index] ? ((line === 1 ? 0 : 1) as 0 | 1) : line,
          );
          transformedHexagram = hexagrams.find((h) =>
            h.lines.every((line, index) => line === transformedLines[index]),
          );
        }

        return (
          <View className="p-6 divide-y divide-dashed divide-text/25">
            {hasChangingLines && (
              <View className="mb-6">
                <GeistMonoText
                  variant="bold"
                  className="text-text text-base mb-4"
                >
                  Proměnné čáry
                </GeistMonoText>

                <GeistMonoText className="text-text text-sm">
                  Hexagram obsahuje měnící se čáry. Zvýrazněné čáry představují body transformace v tomto čtení.
                </GeistMonoText>
              </View>
            )}

            {/* Present Situation */}
            <View>
              {hasChangingLines && <GeistMonoText
                variant="bold"
                className="text-text text-base mb-4 pt-6"
              >
                Současná situace
              </GeistMonoText>}
              {hexagram.content[i18n.language as "cs" | "en"].evolution.map(
                (item) => {
                  const isChanging = changingLines[item.position - 1];

                  return (
                    <View
                      key={item.type + "-" + item.name}
                      className={`py-4 flex gap-1 ${isChanging ? "bg-main/10 -mx-6 px-6 rounded-lg" : ""}`}
                    >
                      <View
                        className={`w-10 rounded p-0.5 mb-1 ${isChanging ? "bg-main" : "bg-main/50"}`}
                      >
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
                        className="text-text text-sm"
                        variant="bold"
                      >
                        {item.position}. linie - {item.name}
                      </GeistMonoText>

                      <GeistMonoText className="text-text text-sm leading-7">
                        {item.description}{" "}
                      </GeistMonoText>
                    </View>
                  );
                },
              )}
            </View>

            {/* Transformation Arrow & Future Hexagram */}
            {hasChangingLines && transformedHexagram && (
              <View className="mt-6 pt-6">
                <View className="mb-4">
                  <GeistMonoText
                    variant="bold"
                    className="text-text text-base mb-4"
                  >
                    Budoucnost
                  </GeistMonoText>
                </View>

                <View className="items-center space-y-4 p-6 bg-background/5 rounded-lg">
                  <HexagramSymbol
                    lines={transformedHexagram.lines}
                    size={120}
                    color="#06283F"
                  />
                  <View className="items-center">
                    <GeistMonoText className="text-text/50 text-sm">
                      {transformedHexagram.chineseName} ·{" "}
                      {transformedHexagram.romanization}
                    </GeistMonoText>
                    <GeistMonoText
                      variant="bold"
                      className="text-text text-lg mt-1"
                    >
                      {
                        transformedHexagram.content[i18n.language as TLanguage]
                          .name
                      }
                    </GeistMonoText>
                  </View>
                  <GeistMonoText className="text-text text-sm leading-5 text-center">
                    {
                      transformedHexagram.content[
                        i18n.language as TLanguage
                      ].meaning.split("\n\n")[0]
                    }
                  </GeistMonoText>
                </View>
              </View>
            )}
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
        showHomeButton={showHomeButton}
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
        ref={scrollViewRef}
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
