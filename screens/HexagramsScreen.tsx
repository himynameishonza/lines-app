import React, { useState, useRef } from "react";
import {
  View,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CircleOff, X } from "lucide-react-native";
import TopNavigationBarHexagramsScreen from "../components/navbars/TopNavigationBarHexagramsScreen";
import GeistMonoText from "../components/typography/GeistMonoText";
import HexagramSymbol from "../components/HexagramSymbol";
import { TViewMode } from "../types/generic";
import { hexagrams } from "../data/hexagrams";
import BodoniText from "../components/typography/BodoniText";
import { useSettings } from "../contexts/SettingsContext";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DashedLine from "../components/DashedLine";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Fu Xi sequence (binary order)
const fuXiSequence = [
  1, 43, 14, 34, 9, 5, 26, 11, 10, 58, 38, 54, 61, 60, 41, 19, 13, 49, 30, 55,
  37, 63, 22, 36, 25, 17, 21, 51, 42, 3, 27, 24, 44, 28, 50, 32, 57, 48, 18, 46,
  6, 47, 64, 40, 59, 29, 4, 7, 33, 31, 56, 62, 53, 39, 52, 15, 12, 45, 35, 16,
  20, 8, 23, 2,
];

interface HexagramsScreenProps {
  onViewModeChange?: (viewMode: TViewMode) => void;
}

export default function HexagramsScreen({
  onViewModeChange,
}: HexagramsScreenProps) {
  const { settings, sessionViewMode, setSessionViewMode } = useSettings();
  // Use session view mode if it exists, otherwise use default from settings
  const [viewMode, setViewMode] = useState<TViewMode>(
    sessionViewMode || settings.viewMode,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const searchInputRef = useRef<TextInput>(null);

  const { t, i18n } = useTranslation();

  const CARD_WIDTH = SCREEN_WIDTH * 0.8;
  const CARD_SPACING = 16;
  const SIDE_PADDING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

  // Sort hexagrams based on settings
  const sortedHexagrams =
    settings.sortBy === "fuSi"
      ? fuXiSequence.map((num, index) => {
          const hexagram = hexagrams.find((h) => h.number === num)!;
          return { ...hexagram, displayNumber: index + 1 };
        })
      : hexagrams.map((h) => ({ ...h, displayNumber: h.number }));

  // Filter hexagrams based on search query
  const filteredHexagrams = searchQuery
    ? sortedHexagrams.filter((hexagram) => {
        const query = searchQuery.toLowerCase();
        const localizedName =
          hexagram.content[i18n.language as "cs" | "en"].name.toLowerCase();
        const chineseName = hexagram.chineseName.toLowerCase();
        const romanization = hexagram.romanization.toLowerCase();
        const number = hexagram.displayNumber.toString();

        return (
          localizedName.includes(query) ||
          chineseName.includes(query) ||
          romanization.includes(query) ||
          number.includes(query)
        );
      })
    : sortedHexagrams;

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
    setSessionViewMode(newViewMode);
    onViewModeChange?.(newViewMode);
  }

  function handleSearchPress() {
    setShowSearchInput(true);
  }

  function handleSearchSubmit() {
    if (searchQuery.trim()) {
      setShowSearchInput(false);
    }
  }

  function handleClearSearch() {
    setSearchQuery("");
    searchInputRef.current?.focus();
  }

  function handleCloseSearch() {
    setShowSearchInput(false);
  }

  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-[#D8D6C3]">
      <TopNavigationBarHexagramsScreen
        viewMode={viewMode}
        onViewModePress={changeViewMode}
        onSearchPress={handleSearchPress}
        isSearchActive={!!searchQuery}
      />
      {showSearchInput && (
        <Pressable
          className="absolute top-0 left-0 right-0 bottom-0 z-10 flex-row items-center px-4 pb-3"
          onPress={handleCloseSearch}
        >
          <Pressable
            className="absolute top-0 left-0 right-0 z-10 flex-row items-center px-4 pb-3 bg-[#D8D6C3]"
            onPress={(e) => e.stopPropagation()}
            style={{
              paddingTop: insets.top,
              height: insets.top + 56,
            }}
          >
            <View className="flex flex-row w-full rounded bg-text">
              <TextInput
                ref={searchInputRef}
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearchSubmit}
                placeholder={t("hexagrams.search")}
                autoFocus
                returnKeyType="search"
                className="text-[#D8D6C3] flex-1 px-4 pb-1 h-11 text-sm"
                placeholderTextColor="#a3a293"
                style={{ fontFamily: "GeistMono_500Medium" }}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity
                  onPress={handleClearSearch}
                  className="h-11 w-11 flex items-center justify-center"
                  activeOpacity={1}
                >
                  <X size={28} className="text-[#D8D6C3]" strokeWidth={1.5} />
                </TouchableOpacity>
              )}
            </View>
          </Pressable>
        </Pressable>
      )}
      {viewMode === "carousel" && (
        <View className="flex-1 justify-center items-center">
          <FlatList
            data={filteredHexagrams}
            keyExtractor={(item) => item.id.toString()}
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
            initialNumToRender={3}
            maxToRenderPerBatch={5}
            windowSize={5}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center gap-1">
                <CircleOff
                  strokeWidth={1.5}
                  size={48}
                  className="text-main mb-4"
                />
                <GeistMonoText variant="medium" className="text-text text-lg">
                  {t("hexagrams.noResultsTitle")}
                </GeistMonoText>
                <GeistMonoText className="text-background text-sm">
                  {t("hexagrams.noResultsDescription")}
                </GeistMonoText>
              </View>
            }
            renderItem={({ item }) => (
              <View
                style={{ width: CARD_WIDTH, aspectRatio: 1 / 1.4 }}
                className="border border-dashed border-text/25 rounded-lg p-4 bg-[#D8D6C3] items-center justify-center"
              >
                <View className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center">
                  <GeistMonoText className="text-text/50 text-base">
                    {item.displayNumber}
                  </GeistMonoText>
                </View>

                <View className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center">
                  <HexagramSymbol
                    lines={item.lines}
                    size={32}
                    color="#42436b"
                  />
                </View>
                <View className="items-center">
                  <View className="items-center">
                    <BodoniText
                      variant="bold"
                      className="text-background text-9xl pt-8"
                    >
                      {item.chineseName}
                    </BodoniText>
                    <GeistMonoText className="text-text/60 text-lg">
                      {item.romanization}
                    </GeistMonoText>
                    <GeistMonoText
                      variant="bold"
                      className="text-text text-2xl"
                    >
                      {item.content[i18n.language as "cs" | "en"].name}
                    </GeistMonoText>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
      {viewMode !== "carousel" && (
        <View className="flex-1">
          {viewMode === "list" && (
            <FlatList
              data={filteredHexagrams}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{
                paddingVertical: 112,
                paddingHorizontal: 12,
                flexGrow: 1,
              }}
              ItemSeparatorComponent={() => <DashedLine />}
              ListEmptyComponent={
                <View className="flex-1 items-center justify-center gap-1">
                  <CircleOff
                    strokeWidth={1.5}
                    size={48}
                    className="text-main mb-4"
                  />
                  <GeistMonoText variant="medium" className="text-text text-lg">
                    {t("hexagrams.noResultsTitle")}
                  </GeistMonoText>
                  <GeistMonoText className="text-background text-sm">
                    {t("hexagrams.noResultsDescription")}
                  </GeistMonoText>
                </View>
              }
              renderItem={({ item }) => (
                <View className="flex px-2 py-4 w-full flex-row items-center">
                  <View className="w-8 flex items-center">
                    <GeistMonoText className="text-text/50 text-xs">
                      {item.displayNumber}
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
              )}
            />
          )}
          {viewMode === "grid" && (
            <FlatList
              data={filteredHexagrams}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              contentContainerStyle={{
                paddingVertical: 112,
                paddingHorizontal: 12,
                flexGrow: 1,
              }}
              columnWrapperStyle={{ gap: 0 }}
              ListEmptyComponent={
                <View className="flex-1 items-center justify-center gap-1">
                  <CircleOff
                    strokeWidth={1.5}
                    size={48}
                    className="text-main mb-4"
                  />
                  <GeistMonoText variant="medium" className="text-text text-lg">
                    {t("hexagrams.noResultsTitle")}
                  </GeistMonoText>
                  <GeistMonoText className="text-background text-sm">
                    {t("hexagrams.noResultsDescription")}
                  </GeistMonoText>
                </View>
              }
              renderItem={({ item }) => (
                <View className="flex-1 p-1.5">
                  <View
                    className="border border-dashed border-text/25 rounded-sm p-4"
                    style={{ aspectRatio: 1.2 / 1 }}
                  >
                    <View className="w-4 flex items-center absolute top-2 left-2 rounded-full">
                      <GeistMonoText className="text-text/50 text-xs">
                        {item.displayNumber}
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
              )}
            />
          )}
        </View>
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
