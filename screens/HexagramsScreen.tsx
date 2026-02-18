import React, { useState, useRef } from "react";
import { View, FlatList, Dimensions, Text, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import TopNavigationBarHexagramsScreen from "../components/navbars/TopNavigationBarHexagramsScreen";
import HexagramCarouselCard from "../components/HexagramCarouselCard";
import HexagramListCard from "../components/HexagramListCard";
import HexagramGridCard from "../components/HexagramGridCard";
import { hexagrams } from "../data/hexagrams";
import { trigrams } from "../data/trigrams";
import GeistMonoText from "../components/GeistMonoText";
import { ArrowUpFromLine, ArrowUpToLine } from "lucide-react-native";

type ViewModes = "carousel" | "list" | "grid";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = SCREEN_WIDTH * 0.8;
const CARD_HEIGHT = CARD_WIDTH * 1.5;
const SIDE_SPACING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList<(typeof hexagrams)[0]>,
);

export const getTrigramName = (
  trigramId: number,
  language: "en" | "cs",
): string => {
  const trigram = trigrams.find((t) => t.id === trigramId);
  return trigram ? trigram.content[language].name : "";
};

export default function HexagramsScreen() {
  const { t, i18n } = useTranslation();
  const [viewMode, setViewMode] = useState<ViewModes>("carousel");
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<(typeof hexagrams)[0]> | null>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const lastIndexRef = useRef(0);

  function changeViewMode() {
    if (viewMode === "carousel") {
      setViewMode("list");
    } else if (viewMode === "list") {
      setViewMode("grid");
    } else if (viewMode === "grid") {
      setViewMode("carousel");
      // Reset to first item when returning to carousel
      setCurrentIndex(0);
      lastIndexRef.current = 0;
      scrollX.setValue(0);
      // Scroll to beginning
      setTimeout(() => {
        flatListRef.current?.scrollToOffset({ offset: 0, animated: false });
      }, 0);
    }
  }

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true },
  );

  const handleMomentumScrollEnd = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / CARD_WIDTH);

    if (
      index !== lastIndexRef.current &&
      index >= 0 &&
      index < hexagrams.length
    ) {
      lastIndexRef.current = index;
      setCurrentIndex(index);
    }
  };

  const renderListItem = ({ item }: { item: (typeof hexagrams)[0] }) => {
    return (
      <HexagramListCard
        item={item}
        onPress={() => {
          // TODO: Navigate to hexagram detail or handle selection
          console.log("Selected hexagram:", item.id);
        }}
        testID="hexagram-list-item"
      />
    );
  };

  const renderGridItem = ({ item }: { item: (typeof hexagrams)[0] }) => {
    return (
      <HexagramGridCard
        item={item}
        onPress={() => {
          // TODO: Navigate to hexagram detail or handle selection
          console.log("Selected hexagram:", item.id);
        }}
        testID="hexagram-grid-item"
      />
    );
  };

  const renderCarouselItem = ({
    item,
    index,
  }: {
    item: (typeof hexagrams)[0];
    index: number;
  }) => {
    return (
      <HexagramCarouselCard
        item={item}
        index={index}
        scrollX={scrollX}
        cardWidth={CARD_WIDTH}
        cardHeight={CARD_HEIGHT}
        testID="hexagram-card"
      />
    );
  };

  const currentItem = hexagrams[currentIndex];
  const gradientColors = (currentItem?.gradientColors || [
    "#834D4A",
    "#834D4A",
    "#3B2B27",
    "#201F20",
    "#201F20",
  ]) as [string, string, ...string[]];

  return (
    <View style={{ flex: 1 }}>
      {viewMode === "carousel" ? (
        <LinearGradient
          colors={gradientColors}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      ) : (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#201F20",
          }}
        />
      )}

      <TopNavigationBarHexagramsScreen
        viewMode={viewMode}
        onViewModePress={changeViewMode}
      />

      {viewMode === "carousel" && (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View>
            <AnimatedFlatList
              ref={flatListRef}
              data={hexagrams}
              renderItem={renderCarouselItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              pagingEnabled={false}
              showsHorizontalScrollIndicator={false}
              snapToInterval={CARD_WIDTH}
              snapToAlignment="start"
              decelerationRate="fast"
              onScroll={handleScroll}
              onMomentumScrollEnd={handleMomentumScrollEnd}
              scrollEventThrottle={16}
              contentContainerStyle={{
                paddingHorizontal: SIDE_SPACING,
              }}
            />

            {/* Trigram Description */}
            <View
              style={{
                paddingHorizontal: 32,
                paddingTop: 24,
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                gap: 12,
              }}
            >
              {currentItem?.elements &&
                [
                  { icon: ArrowUpFromLine, trigramId: currentItem.elements[0] },
                  { icon: ArrowUpToLine, trigramId: currentItem.elements[1] },
                ].map(({ icon: Icon, trigramId }, index) => (
                  <View
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      gap: 4,
                    }}
                  >
                    <Icon size={16} color="#EFDECA" strokeWidth={2} />
                    <GeistMonoText
                      style={{
                        fontSize: 12,
                        lineHeight: 22,
                        color: "rgba(255, 255, 255, 0.6)",
                        textAlign: "center",
                        textTransform: "uppercase",
                      }}
                      numberOfLines={4}
                    >
                      {getTrigramName(trigramId, i18n.language as "en" | "cs")}
                    </GeistMonoText>
                  </View>
                ))}
            </View>
          </View>
        </View>
      )}

      {viewMode === "list" && (
        <View style={{ flex: 1 }}>
          <FlatList
            data={hexagrams}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 120,
              paddingBottom: 120,
            }}
          />
        </View>
      )}

      {viewMode === "grid" && (
        <View style={{ flex: 1 }}>
          <FlatList
            data={hexagrams}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 120,
              paddingBottom: 120,
              paddingHorizontal: 16,
            }}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          />
        </View>
      )}
    </View>
  );
}
