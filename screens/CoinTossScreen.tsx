import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import TopNavigationBarCoinToss from "../components/navbars/TopNavigationBarCoinToss";
import GeistMonoText from "../components/typography/GeistMonoText";
import HexagramSymbol from "../components/HexagramSymbol";
import { trigrams } from "../data/trigrams";
import { hexagrams, Hexagram } from "../data/hexagrams";
import { TLanguage } from "../types/generic";
import i18n from "../i18n/config";

interface CoinTossScreenProps {
  onBack: () => void;
  onComplete?: (hexagram: Hexagram) => void;
}

export default function CoinTossScreen({
  onBack,
  onComplete,
}: CoinTossScreenProps) {
  const { t } = useTranslation();
  const [currentLine, setCurrentLine] = useState(0);
  const [lines, setLines] = useState<(0 | 1)[]>([]);
  const [changingLines, setChangingLines] = useState<boolean[]>([]);
  const [coinValues, setCoinValues] = useState<number[]>([]);

  const tossCoins = () => {
    // Generate 3 random coin values (2 = heads, 3 = tails)
    const newCoins = [
      Math.random() < 0.5 ? 2 : 3,
      Math.random() < 0.5 ? 2 : 3,
      Math.random() < 0.5 ? 2 : 3,
    ];
    const newSum = newCoins.reduce((a, b) => a + b, 0);

    setCoinValues(newCoins);

    // Determine line type based on sum
    // 6 = old yin (changing), 7 = young yang, 8 = young yin, 9 = old yang (changing)
    let lineType: 0 | 1;
    let isChanging = false;

    if (newSum === 6) {
      lineType = 0; // old yin
      isChanging = true;
    } else if (newSum === 7) {
      lineType = 1; // young yang
    } else if (newSum === 8) {
      lineType = 0; // young yin
    } else {
      lineType = 1; // old yang (9)
      isChanging = true;
    }

    const newLines = [...lines, lineType];
    const newChangingLines = [...changingLines, isChanging];

    setLines(newLines);
    setChangingLines(newChangingLines);
    setCurrentLine(currentLine + 1);
  };

  const handleExploreHexagram = () => {
    if (lines.length === 6 && onComplete && hexagram) {
      onComplete(hexagram);
    }
  };

  const getLowerTrigram = () => {
    if (lines.length < 3) return null;
    const trigramLines = lines.slice(0, 3);
    return trigrams.find(
      (t) =>
        t.id ===
        parseInt(trigramLines.map((l) => (l === 1 ? "1" : "0")).join(""), 2) +
          1,
    );
  };

  const getUpperTrigram = () => {
    if (lines.length < 6) return null;
    const trigramLines = lines.slice(3, 6);
    return trigrams.find(
      (t) =>
        t.id ===
        parseInt(trigramLines.map((l) => (l === 1 ? "1" : "0")).join(""), 2) +
          1,
    );
  };

  const lowerTrigram = getLowerTrigram();
  const upperTrigram = getUpperTrigram();

  // Get hexagram by lines
  const getHexagram = () => {
    if (lines.length < 6) return null;
    return hexagrams.find(h => 
      h.lines.every((line, index) => line === lines[index])
    );
  };

  const hexagram = getHexagram();

  // Get line name for display
  const getLineName = (lineIndex: number) => {
    if (lineIndex >= lines.length) return "???";
    const lineType = lines[lineIndex];
    const isChanging = changingLines[lineIndex];
    
    if (lineType === 1) {
      return isChanging ? t("coinToss.oldYang") : t("coinToss.yang");
    } else {
      return isChanging ? t("coinToss.oldYin") : t("coinToss.yin");
    }
  };

  // Get badge styling for line
  const getLineBadgeStyle = (lineIndex: number) => {
    if (lineIndex >= lines.length) {
      return {
        bgClass: 'bg-text/5',
        textClass: 'text-text/30'
      };
    }
    const isChanging = changingLines[lineIndex];
    return {
      bgClass: isChanging ? 'bg-main/20' : 'bg-background/5',
      textClass: isChanging ? 'text-text' : 'text-text'
    };
  };

  // Build hexagram lines array with nulls for unknown lines
  const hexagramLines: (0 | 1 | null)[] = [
    ...lines,
    ...Array(6 - lines.length).fill(null)
  ];

  return (
    <View className="bg-primary flex-1 px-6">
      <TopNavigationBarCoinToss onBack={onBack} onHelp={() => {}} />
      <View className="pt-40 pb-12 flex-1 justify-between">
        <View className="flex gap-y-10">
          <View className="flex items-center justify-center gap-y-5">
            <HexagramSymbol 
              size={170} 
              lines={hexagramLines}
              changingLines={[...changingLines, ...Array(6 - changingLines.length).fill(false)]}
              color="#06283F"
            />
            <View className="flex flex-col items-center justify-between">
              <View className="flex flex-row items-center gap-x-3 mb-3 pt-5">
                <View className={`w-auto px-1 py-0.5 rounded ${getLineBadgeStyle(0).bgClass}`}>
                  <GeistMonoText className={`text-xs ${getLineBadgeStyle(0).textClass}`}>
                    {getLineName(0)}
                  </GeistMonoText>
                </View>
                <View className={`w-auto px-1 py-0.5 rounded ${getLineBadgeStyle(1).bgClass}`}>
                  <GeistMonoText className={`text-xs ${getLineBadgeStyle(1).textClass}`}>
                    {getLineName(1)}
                  </GeistMonoText>
                </View>
                <View className={`w-auto px-1 py-0.5 rounded ${getLineBadgeStyle(2).bgClass}`}>
                  <GeistMonoText className={`text-xs ${getLineBadgeStyle(2).textClass}`}>
                    {getLineName(2)}
                  </GeistMonoText>
                </View>
              </View>
              <View className="flex flex-row items-center gap-x-3">
                <View className={`w-auto px-1 py-0.5 rounded ${getLineBadgeStyle(3).bgClass}`}>
                  <GeistMonoText className={`text-xs ${getLineBadgeStyle(3).textClass}`}>
                    {getLineName(3)}
                  </GeistMonoText>
                </View>
                <View className={`w-auto px-1 py-0.5 rounded ${getLineBadgeStyle(4).bgClass}`}>
                  <GeistMonoText className={`text-xs ${getLineBadgeStyle(4).textClass}`}>
                    {getLineName(4)}
                  </GeistMonoText>
                </View>
                <View className={`w-auto px-1 py-0.5 rounded ${getLineBadgeStyle(5).bgClass}`}>
                  <GeistMonoText className={`text-xs ${getLineBadgeStyle(5).textClass}`}>
                    {getLineName(5)}
                  </GeistMonoText>
                </View>
              </View>
            </View>
          </View>

          <View className="flex flex-row justify-center gap-x-12">
            <View className="flex items-center">
              <GeistMonoText className="pb-2 text-text/50" variant="medium">
                Dolní trigram
              </GeistMonoText>
              <HexagramSymbol 
                size={64} 
                lines={lines.length >= 3 ? lines.slice(0, 3) : [...lines, ...Array(3 - lines.length).fill(null)]}
                changingLines={changingLines.slice(0, 3)}
                color="#06283F"
              />
              <GeistMonoText className="pt-2 text-background">
                {lowerTrigram ? lowerTrigram.content[i18n.language as TLanguage].name : "???"}
              </GeistMonoText>
            </View>
            <View className="flex items-center">
              <GeistMonoText className="pb-2 text-text/50" variant="medium">
                Horní trigram
              </GeistMonoText>
              <HexagramSymbol 
                size={64} 
                lines={lines.length >= 6 
                  ? lines.slice(3, 6) 
                  : lines.length > 3 
                    ? [...lines.slice(3), ...Array(6 - lines.length).fill(null)]
                    : [null, null, null]
                }
                changingLines={lines.length >= 6 ? changingLines.slice(3, 6) : []}
                color="#06283F"
              />
              <GeistMonoText className="pt-2 text-background">
                {upperTrigram ? upperTrigram.content[i18n.language as TLanguage].name : "???"}
              </GeistMonoText>
            </View>
          </View>
        </View>
        <View className="flex gap-y-6">
          {/* <View className="flex items-center flex-row justify-between px-4">
            <View className="flex flex-col gap-y-2">
              <View className="w-20 h-20 rounded-full border border-text/20 bg-text/5 items-center justify-center">
                {coinValues.length > 0 && (
                  <GeistMonoText variant="bold" className="text-text text-2xl">
                    {coinValues[0]}
                  </GeistMonoText>
                )}
              </View>
              <GeistMonoText variant="bold" className="text-center text-lg text-text/50">
                {coinValues.length > 0 ? (coinValues[0] === 2 ? t("coinToss.heads") : t("coinToss.tails")) : "???"}
              </GeistMonoText>
            </View>
            
            <View className="flex flex-col gap-y-2">
              <View className="w-20 h-20 rounded-full border border-text/20 bg-text/5 items-center justify-center">
                {coinValues.length > 0 && (
                  <GeistMonoText variant="bold" className="text-text text-2xl">
                    {coinValues[1]}
                  </GeistMonoText>
                )}
              </View>
              <GeistMonoText variant="bold" className="text-center text-lg text-text/50">
                {coinValues.length > 0 ? (coinValues[1] === 2 ? t("coinToss.heads") : t("coinToss.tails")) : "???"}
              </GeistMonoText>
            </View>
            <View className="flex flex-col gap-y-2">
              <View className="w-20 h-20 rounded-full border border-text/20 bg-text/5 items-center justify-center">
                {coinValues.length > 0 && (
                  <GeistMonoText variant="bold" className="text-text text-2xl">
                    {coinValues[2]}
                  </GeistMonoText>
                )}
              </View>
              <GeistMonoText variant="bold" className="text-center text-lg text-text/50">
                {coinValues.length > 0 ? (coinValues[2] === 2 ? t("coinToss.heads") : t("coinToss.tails")) : "???"}
              </GeistMonoText>
            </View>
          </View> */}
          {currentLine >= 6 && hexagram ? (
            // Show hexagram name when complete
            <View className="items-center py-8">
              <GeistMonoText variant="bold" className="text-text text-2xl text-center">
                {hexagram.content[i18n.language as TLanguage].name}
              </GeistMonoText>
              <GeistMonoText className="text-text/50 text-base text-center mt-2">
                {hexagram.chineseName} · {hexagram.romanization}
              </GeistMonoText>
            </View>
          ) : (
            // Show coin toss interface
            <View className="flex items-center flex-row justify-between px-4">
              <View className="flex flex-col gap-y-2">
                <View className="w-20 h-20 rounded-full border border-text/20 bg-background/5 border-dashed items-center justify-center">
                  {coinValues.length > 0 && (
                    <GeistMonoText variant="bold" className="text-background text-2xl">
                      {coinValues[0]}
                    </GeistMonoText>
                  )}
                </View>
                <GeistMonoText variant="bold" className="text-center text-lg text-text/50">
                  {coinValues.length > 0 ? (coinValues[0] === 2 ? t("coinToss.heads") : t("coinToss.tails")) : "???"}
                </GeistMonoText>
              </View>
              <View className="flex flex-col gap-y-2">
                <View className="w-20 h-20 rounded-full border border-text/20 bg-background/5 border-dashed items-center justify-center">
                  {coinValues.length > 0 && (
                    <GeistMonoText variant="bold" className="text-background text-2xl">
                      {coinValues[1]}
                    </GeistMonoText>
                  )}
                </View>
                <GeistMonoText variant="bold" className="text-center text-lg text-text/50">
                  {coinValues.length > 0 ? (coinValues[1] === 2 ? t("coinToss.heads") : t("coinToss.tails")) : "???"}
                </GeistMonoText>
              </View>
              <View className="flex flex-col gap-y-2">
                <View className="w-20 h-20 rounded-full border border-text/20 bg-background/5 border-dashed items-center justify-center">
                  {coinValues.length > 0 && (
                    <GeistMonoText variant="bold" className="text-background text-2xl">
                      {coinValues[2]}
                    </GeistMonoText>
                  )}
                </View>
                <GeistMonoText variant="bold" className="text-center text-lg text-text/50">
                  {coinValues.length > 0 ? (coinValues[2] === 2 ? t("coinToss.heads") : t("coinToss.tails")) : "???"}
                </GeistMonoText>
              </View>
            </View>
          )}

          <TouchableOpacity
            className="rounded bg-text w-full px-3 py-5"
            activeOpacity={0.8}
            onPress={currentLine >= 6 ? handleExploreHexagram : tossCoins}
          >
            <GeistMonoText className="text-white text-center" variant="medium">
              {currentLine >= 6 ? t("coinToss.exploreHexagram") : t("coinToss.tossCoins")}
            </GeistMonoText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
