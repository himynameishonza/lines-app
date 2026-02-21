import React, { useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import i18n from "../i18n/config";
import TopNavigationBarHexagramsScreen from "../components/navbars/TopNavigationBarHexagramsScreen";
import GeistMonoText from "../components/typography/GeistMonoText";
import HexagramSymbol from "../components/HexagramSymbol";
import { TViewMode } from "../types/generic";
import { hexagrams } from "../data/hexagrams";
import BodoniText from "../components/typography/BodoniText";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface HexagramsScreenProps {
  initialViewMode?: TViewMode;
  onViewModeChange?: (viewMode: TViewMode) => void;
}

export default function HexagramsScreen({
  initialViewMode = "carousel",
  onViewModeChange,
}: HexagramsScreenProps) {
  const [viewMode, setViewMode] = useState<TViewMode>(initialViewMode);

  const CARD_WIDTH = SCREEN_WIDTH * 0.8;
  const CARD_SPACING = 16;
  const SIDE_PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

  function changeViewMode() {
    let newViewMode: TViewMode;

    if (viewMode === "carousel") {
      newViewMode = "list";
    } else if (viewMode === "list") {
      newViewMode = "grid";
    } else {
      newViewMode = "carousel";
    }

    setViewMode(newViewMode);
    onViewModeChange?.(newViewMode);
  }

  return (
    <View className="flex-1 bg-[#D8D6C3]">
      <TopNavigationBarHexagramsScreen
        viewMode={viewMode}
        onViewModePress={changeViewMode}
      />
      {viewMode === "carousel" && (
        <View className="flex-1 justify-center items-center">
          <ScrollView
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + CARD_SPACING}
            decelerationRate="fast"
            contentContainerStyle={{
              paddingHorizontal: SIDE_PADDING,
              gap: CARD_SPACING,
              alignItems: "center",
            }}
            style={{ flexGrow: 0 }}
          >
            {hexagrams.map((item) => (
              <View
                key={item.id}
                style={{ width: CARD_WIDTH, aspectRatio: 1 / 1.5 }}
                className="border border-dashed border-text/25 rounded-lg bg-[#D8D6C3] flex items-center justify-center"
              >
                <View className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center">
                  <GeistMonoText className="text-text/50 text-base">
                    {item.number}
                  </GeistMonoText>
                </View>

                <View className="absolute top-4 right-4 w-8 h-8">
                  <HexagramSymbol
                    lines={item.lines}
                    size={32}
                    color="#42436b"
                  />
                </View>

                <View className="px-4">
                    <BodoniText variant="bold" className="text-background text-9xl pt-8 text-center">
                      {item.chineseName}
                    </BodoniText>                    
                    <GeistMonoText className="text-text/50 text-lg text-center">
                      {item.romanization}
                    </GeistMonoText>
                    <GeistMonoText
                      variant="bold"
                      className="text-text text-center text-2xl"
                    >
                      {item.content[i18n.language as "cs" | "en"].name}
                    </GeistMonoText>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      {viewMode !== "carousel" && (
        <ScrollView className="flex-1">
          {viewMode === "list" && (
            <View className="my-28 items-center justify-center">
              <View className="w-full px-2 divide-y divide-dashed divide-text/25 py-2">
                {hexagrams.map((item) => {
                  return (
                    <View
                      key={item.id}
                      className="flex px-2 py-4 w-full flex-row items-center"
                    >
                      <View className="w-8 flex items-center">
                        <GeistMonoText className="text-text/50 text-xs">
                          {item.number}
                        </GeistMonoText>
                      </View>
                      <View>
                        <HexagramSymbol
                          lines={item.lines}
                          size={32}
                          color="#42436b"
                        />
                      </View>
                      <View className="px-4">
                        <GeistMonoText variant="bold" className="text-text">
                          {item.content[i18n.language as "cs" | "en"].name}
                        </GeistMonoText>
                        <GeistMonoText
                          className="text-xs text-text/60"
                          variant="regular"
                        >
                          {item.romanization}
                        </GeistMonoText>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
          {viewMode === "grid" && (
            <View className="my-28 items-center justify-center">
              <View className="w-full flex-wrap flex-row px-4">
                {hexagrams.map((item) => {
                  return (
                    <View key={item.id} className="p-1.5 w-1/2">
                      <View
                        className="border border-dashed border-text/25 rounded-sm p-4"
                        style={{ aspectRatio: 1.2 / 1 }}
                      >
                        <View className="w-4 flex items-center absolute top-2 left-2 rounded-full">
                          <GeistMonoText className="text-text/50 text-xs">
                            {item.number}
                          </GeistMonoText>
                        </View>

                        <View className="flex items-center justify-center gap-y-2 flex-1">
                          <View>
                            <HexagramSymbol
                              lines={item.lines}
                              size={42}
                              color="#42436b"
                            />
                          </View>

                          <View className="px-4">
                            <GeistMonoText
                              variant="bold"
                              className="text-center text-text text-xs"
                            >
                              {item.content[i18n.language as "cs" | "en"].name}
                            </GeistMonoText>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
      )}
      <LinearGradient
        colors={[
          "rgba(216, 214, 195, 1)",
          "rgba(216, 214, 195, 1)",
          "rgba(216, 214, 195, 0)",
        ]}
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
      />
    </View>
  );
}
