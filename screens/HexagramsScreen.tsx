import React, { useState, useRef } from 'react';
import { View, FlatList, Dimensions, Image, Text, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import TopNavigationBarHexagramsScreen from '../components/navbars/TopNavigationBarHexagramsScreen';
import HexagramSymbol from '../components/HexagramSymbol';
import BodoniText from '../components/BodoniText';
import { placeholderHexagrams } from '../data/hexagrams';
import { getHexagramImage } from '../assets/hexagrams';
import GeistMonoText from '../components/GeistMonoText';

type ViewModes = "carousel" | "list" | "grid";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.8;
const CARD_HEIGHT = CARD_WIDTH * 1.5;
const SIDE_SPACING = (SCREEN_WIDTH - CARD_WIDTH) / 2;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<typeof placeholderHexagrams[0]>);

export default function HexagramsScreen() {
  const { t, i18n } = useTranslation();
  const [viewMode, setViewMode] = useState<ViewModes>("carousel");
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<typeof placeholderHexagrams[0]> | null>(null);
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
    { useNativeDriver: true }
  );

  const handleMomentumScrollEnd = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / CARD_WIDTH);
    
    if (index !== lastIndexRef.current && index >= 0 && index < placeholderHexagrams.length) {
      lastIndexRef.current = index;
      setCurrentIndex(index);
    }
  };

  const renderCarouselItem = ({ item, index }: { item: typeof placeholderHexagrams[0], index: number }) => {
    const currentLang = i18n.language as 'cs' | 'en';
    const translatedName = item.content[currentLang]?.meaning 
      ? t(`hexagrams.${item.number}`) 
      : item.chineseName;

    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.85, 1, 0.85],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: 'clamp',
    });

    return (
      <View style={{ width: CARD_WIDTH}}>
        <Animated.View
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            borderRadius: 24,
            overflow: 'hidden',
            backgroundColor: '#2A2A2A',
            transform: [{ scale }],
            opacity,
          }}
        >
          
          {/* Background image */}
          <Image
            source={getHexagramImage(item.number)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
            }}
            resizeMode="cover"
          />

          {/* Dark gradient overlay */}
          <LinearGradient
            colors={['rgba(145, 110, 82, 0.05)', 'rgba(145, 110, 82, 0.1)', 'rgba(58, 40, 26, 0.5)', 'rgba(58, 40, 26, 0.5)']}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />

          {/* Top left: Hexagram symbol and Chinese name */}
          <View
            style={{
              position: 'absolute',
              top: 32,
              left: 32,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <HexagramSymbol lines={item.lines} size={28} color="#EFDECA" />
            <Text style={{ fontSize: 18, fontWeight: '500', color: '#EFDECA' }}>
              {item.chineseName}
            </Text>
          </View>

          {/* Top right: Hexagram number */}
          <View style={{ position: 'absolute', top: 32, right: 32 }}>
            <BodoniText variant="bold" style={{ fontSize: 28, color: '#EFDECA', lineHeight: 32 }}>
              {item.number}
            </BodoniText>
          </View>

          {/* Bottom: Title and romanization */}
          <View
            style={{
              position: 'absolute',
              bottom: 40,
              left: 0,
              right: 0,
              paddingHorizontal: 32,
              alignItems: 'center',
            }}
          >
            <BodoniText
              variant="bold"
              style={{
                fontSize: 32,
                lineHeight: 40,
                color: '#EFDECA',
                textAlign: 'center',
                marginBottom: 8,
              }}
            >
              {translatedName}
            </BodoniText>
            {item.romanization && (
              <GeistMonoText
                style={{
                  fontSize: 12,
                  color: '#EFDECA',
                  opacity: 0.6,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                }}
              >
                {item.romanization}
              </GeistMonoText>
            )}
          </View>
        </Animated.View>
      </View>
    );
  };

  const currentItem = placeholderHexagrams[currentIndex];
  const currentLang = i18n.language as 'cs' | 'en';
  
  const gradientColors = (currentItem?.gradientColors || ['#834D4A', '#834D4A', '#3B2B27', '#201F20', '#201F20']) as [string, string, ...string[]];

  return (
    <View style={{ flex: 1 }}>
      {/* Simple gradient background - changes when currentIndex updates */}
      <LinearGradient
        colors={gradientColors}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <TopNavigationBarHexagramsScreen viewMode={viewMode} onViewModePress={changeViewMode} />

      {viewMode === "carousel" && (
        <View style={{ flex: 1, justifyContent: "center", paddingBottom: 100 }}>
          <View>
            <AnimatedFlatList
              ref={flatListRef}
              data={placeholderHexagrams}
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
            
            {/* Description text below carousel */}
            <View style={{ 
              paddingHorizontal: 32,
              paddingTop: 24,
            }}>
            <GeistMonoText
              style={{
                fontSize: 14,
                lineHeight: 22,
                color: 'rgba(255, 255, 255, 0.6)',
                textAlign: 'center',
                textTransform: "uppercase"
              }}
              numberOfLines={4}
            >
              {currentItem?.lines.slice().reverse().map((line, index, array) => 
                line + (index < array.length - 1 ? "→" : "")
              )}
            </GeistMonoText>
          </View>
          </View>
        </View>
      )}

      {viewMode === "list" && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#EFDECA' }}>List view - Coming soon</Text>
        </View>
      )}

      {viewMode === "grid" && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#EFDECA' }}>Grid view - Coming soon</Text>
        </View>
      )}
    </View>
  );
}
