import React from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import HexagramSymbol from './HexagramSymbol';
import BodoniText from './BodoniText';
import GeistMonoText from './GeistMonoText';
import { Hexagram } from '../data/hexagrams';
import { getHexagramImage } from '../assets/hexagrams';
import { getHexagramTranslatedName } from '../utils/hexagramHelpers';

interface HexagramCarouselCardProps {
  item: Hexagram;
  index: number;
  scrollX: Animated.Value;
  cardWidth: number;
  cardHeight: number;
  onPress?: () => void;
}

export default function HexagramCarouselCard({
  item,
  index,
  scrollX,
  cardWidth,
  cardHeight,
  onPress,
}: HexagramCarouselCardProps) {
  const { t, i18n } = useTranslation();
  
  const currentLang = i18n.language as 'cs' | 'en';
  const translatedName = getHexagramTranslatedName(item, currentLang, t);

  const inputRange = [
    (index - 1) * cardWidth,
    index * cardWidth,
    (index + 1) * cardWidth,
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
    <View style={{ width: cardWidth }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
      >
        <Animated.View
          style={{
            width: cardWidth,
            height: cardHeight,
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
      </TouchableOpacity>
    </View>
  );
}