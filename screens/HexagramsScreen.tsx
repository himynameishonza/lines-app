import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Dimensions, Text, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import TopNavigationBarHexagramsScreen from "../components/navbars/TopNavigationBarHexagramsScreen";
import HexagramCarouselCard from "../components/HexagramCarouselCard";
import HexagramListCard from "../components/HexagramListCard";
import HexagramGridCard from "../components/HexagramGridCard";
import { hexagrams, Hexagram } from "../data/hexagrams";
import { trigrams } from "../data/trigrams";
import GeistMonoText from "../components/GeistMonoText";
import { ArrowUpFromLine, ArrowUpToLine } from "lucide-react-native";
import { HexagramsViewMode } from "../types/navigation";

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

interface HexagramsScreenProps {
  onHexagramPress?: (hexagram: Hexagram) => void;
  initialCarouselIndex?: number;
  initialListScrollOffset?: number;
  initialGridScrollOffset?: number;
  onScrollPositionChange?: (viewMode: HexagramsViewMode, position: number) => void;
  initialViewMode?: HexagramsViewMode;
  onViewModeChange?: (viewMode: HexagramsViewMode) => void;
}

export default function HexagramsScreen({ 
  onHexagramPress,
  initialCarouselIndex = 0,
  initialListScrollOffset = 0,
  initialGridScrollOffset = 0,
  onScrollPositionChange,
  initialViewMode = 'carousel',
  onViewModeChange,
}: HexagramsScreenProps) {
  const { t, i18n } = useTranslation();
  const [viewMode, setViewMode] = useState<HexagramsViewMode>(initialViewMode);
  const [currentIndex, setCurrentIndex] = useState(initialCarouselIndex);
  const flatListRef = useRef<FlatList<(typeof hexagrams)[0]> | null>(null);
  const listFlatListRef = useRef<FlatList<(typeof hexagrams)[0]> | null>(null);
  const gridFlatListRef = useRef<FlatList<(typeof hexagrams)[0]> | null>(null);
  const scrollX = useRef(new Animated.Value(initialCarouselIndex * CARD_WIDTH)).current;
  const lastIndexRef = useRef(initialCarouselIndex);
  const listScrollOffsetRef = useRef(initialListScrollOffset);
  const gridScrollOffsetRef = useRef(initialGridScrollOffset);

  function changeViewMode() {
    let newViewMode: HexagramsViewMode;
    
    if (viewMode === "carousel") {
      newViewMode = "list";
    } else if (viewMode === "list") {
      newViewMode = "grid";
    } else {
      newViewMode = "carousel";
      // Reset to first item when returning to carousel
      setCurrentIndex(0);
      lastIndexRef.current = 0;
      scrollX.setValue(0);
      // Scroll to beginning
      setTimeout(() => {
        flatListRef.current?.scrollToOffset({ offset: 0, animated: false });
      }, 0);
    }
    
    setViewMode(newViewMode);
    onViewModeChange?.(newViewMode);
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
      onScrollPositionChange?.('carousel', index);
    }
  };

  const handleListScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    listScrollOffsetRef.current = offsetY;
  };

  const handleGridScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    gridScrollOffsetRef.current = offsetY;
  };

  const handleListScrollEnd = () => {
    onScrollPositionChange?.('list', listScrollOffsetRef.current);
  };

  const handleGridScrollEnd = () => {
    onScrollPositionChange?.('grid', gridScrollOffsetRef.current);
  };

  const renderListItem = ({ item }: { item: (typeof hexagrams)[0] }) => {
    return (
      <HexagramListCard
        item={item}
        onPress={() => onHexagramPress?.(item)}
        testID="hexagram-list-item"
      />
    );
  };

  const renderGridItem = ({ item }: { item: (typeof hexagrams)[0] }) => {
    return (
      <HexagramGridCard
        item={item}
        onPress={() => onHexagramPress?.(item)}
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
        onPress={() => onHexagramPress?.(item)}
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
        <View className="bg-[#D8D6C3] flex-1">
     <TopNavigationBarHexagramsScreen
        viewMode={viewMode}
        onViewModePress={changeViewMode}
      />
    {/* <View style={{ flex: 1 }}>
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
              initialScrollIndex={initialCarouselIndex}
              getItemLayout={(data, index) => ({
                length: CARD_WIDTH,
                offset: CARD_WIDTH * index,
                index,
              })}
            />

           
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
            ref={listFlatListRef}
            data={hexagrams}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 120,
              paddingBottom: 120,
            }}
            onScroll={handleListScroll}
            onMomentumScrollEnd={handleListScrollEnd}
            scrollEventThrottle={16}
          />
        </View>
      )}

      {viewMode === "grid" && (
        <View style={{ flex: 1 }}>
          <FlatList
            ref={gridFlatListRef}
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
            onScroll={handleGridScroll}
            onMomentumScrollEnd={handleGridScrollEnd}
            scrollEventThrottle={16}
          />
        </View>
      )}
    </View>*/}
    </View>
  );
}
