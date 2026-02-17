import React, { useRef } from 'react';
import { View, Text, ScrollView, Image, Dimensions, Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Hexagram } from '../data/hexagrams';
import HexagramSymbol from './HexagramSymbol';
import BodoniText from './BodoniText';

interface HexagramDetailsCardProps {
  hexagram: Hexagram;
  activeTab: 'meaning' | 'oracle' | 'anatomy' | 'evolution';
}

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function HexagramDetailsCard({
  hexagram,
  activeTab,
}: HexagramDetailsCardProps) {
  const { t, i18n } = useTranslation();
  const translatedName = t(`hexagrams.${hexagram.number}`);
  const currentLang = i18n.language as 'cs' | 'en';
  
  // Get the content for the active tab in the current language
  const content = hexagram.content[currentLang][activeTab];
  
  const heroHeight = SCREEN_HEIGHT * 0.4; // 40% of screen height for hero section
  const scrollY = useRef(new Animated.Value(0)).current;
  
  // Expand the hero height when pulling down
  const heroHeightAnimated = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [heroHeight + 200, heroHeight],
    extrapolate: 'clamp',
  });
  
  // Scale the hero image when pulling down
  const imageScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [1.5, 1],
    extrapolate: 'clamp',
  });
  
  const imageTranslateY = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [-50, 0],
    extrapolate: 'clamp',
  });
  
  return (
    <View className="flex-1">
      
      {/* Fixed hero section with background image */}
      <Animated.View style={{ height: heroHeightAnimated, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1, overflow: 'hidden' }}>
        {/* Background image with parallax */}
        <Animated.Image 
          source={require('../assets/hexagram-placeholder.jpg')}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            transform: [
              { scale: imageScale },
              { translateY: imageTranslateY },
            ],
          }}
          resizeMode="cover"
        />
        
        {/* Dark overlay for better text readability */}
        <View 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        />
        
        {/* Content overlay */}
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 24, paddingBottom: 32 }}>
          {/* Hexagram number (large) */}
          <Text 
            style={{ 
              fontSize: 120,
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 0.4)',
              position: 'absolute',
              bottom: 60,
              right: 20,
              lineHeight: 120,
            }}
          >
            {hexagram.number}
          </Text>
          
          {/* Hexagram symbol (lines) */}
          <View style={{ marginBottom: 16, position:"absolute", right:20, bottom: 32 }}>
            <HexagramSymbol
              lines={hexagram.lines}
              size={48}
              color="#FFFFFF"
            />
          </View>
          
          {/* Chinese name and romanization */}
          <Text style={{ fontSize: 32, fontWeight: '300', color: '#FFFFFF', marginBottom: 4 }}>
            {hexagram.chineseName}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: '300', color: '#FFFFFF', marginBottom: 12, opacity: 0.9 }}>
            Ta-čuang
          </Text>
          
          {/* Czech/English name */}
          <BodoniText 
            variant="medium" 
            style={{ fontSize: 42, color: '#FFFFFF', marginBottom: 8 }}
          >
            {translatedName}
          </BodoniText>
          
          {/* Evolving badge */}
          {hexagram.isEvolving && (
            <View 
              style={{ 
                alignSelf: 'flex-start',
                backgroundColor: 'rgba(139, 69, 19, 0.8)',
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 12,
                marginTop: 8,
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: '600', letterSpacing: 1 }}>
                MĚNÍ SE
              </Text>
            </View>
          )}
        </View>
      </Animated.View>

      {/* Scrollable white content card */}
      <Animated.ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingTop: heroHeight - 24 }}
        showsVerticalScrollIndicator={false}
        style={{ zIndex: 2 }}
        scrollEnabled={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View 
          style={{ 
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingHorizontal: 24,
            paddingTop: 32,
            paddingBottom: 100,
            shadowRadius: 8,
            elevation: 5,
          }}
          pointerEvents="box-none"
        >
          <Text style={{ fontSize: 16, lineHeight: 26, color: '#374151' }}>
            {content}
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
