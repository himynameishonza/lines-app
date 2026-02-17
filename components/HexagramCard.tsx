import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import HexagramSymbol from './HexagramSymbol';
import BodoniText from './BodoniText';

interface HexagramCardProps {
  hexagramNumber: number;
  chineseName: string;
  romanization?: string;
  variant: 'carousel' | 'list' | 'grid';
  lines?: ('yin' | 'yang')[];
  onPress?: (hexagram: { hexagramNumber: number }) => void;
  testID?: string;
}

export default function HexagramCard({
  hexagramNumber,
  chineseName,
  romanization = '',
  variant,
  lines,
  onPress,
  testID = 'hexagram-card',
}: HexagramCardProps) {
  const { t } = useTranslation();
  const translatedName = t(`hexagrams.${hexagramNumber}`);
  const handlePress = () => {
    if (onPress) {
      onPress({ hexagramNumber });
    }
  };
  
  // Default to all yang lines if not provided
  const hexagramLines = lines || ['yang', 'yang', 'yang', 'yang', 'yang', 'yang'];

  if (variant === 'carousel') {
    return (
      <TouchableOpacity 
        onPress={handlePress} 
        activeOpacity={0.95}
        style={{ width: '100%', aspectRatio: 0.7 }}
        testID={testID}
      >
        <View 
          style={{
            flex: 1,
            borderRadius: 24,
            overflow: 'hidden',
            backgroundColor: '#2A2A2A',
          }}
        >
          {/* Background image */}
          <Image 
            source={require('../assets/hexagram-placeholder.jpg')}
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
          
          {/* Top left: Hexagram symbol and Chinese name */}
          <View style={{ position: 'absolute', top: 20, left: 20, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <HexagramSymbol
              lines={hexagramLines}
              size={32}
              color="#FFFFFF"
            />
            <Text style={{ fontSize: 20, fontWeight: '500', color: '#FFFFFF' }}>
              {chineseName}
            </Text>
          </View>
          
          {/* Top right: Hexagram number */}
          <View style={{ position: 'absolute', top: 20, right: 20 }}>
            <BodoniText 
              variant="bold"
              style={{ fontSize: 48, color: '#FFFFFF', lineHeight: 48 }}
            >
              {hexagramNumber}
            </BodoniText>
          </View>
          
          {/* Bottom: Title and romanization */}
          <View style={{ position: 'absolute', bottom: 32, left: 0, right: 0, paddingHorizontal: 32, alignItems: 'center' }}>
            <BodoniText 
              variant="bold"
              style={{ fontSize: 36, color: '#FFFFFF', textAlign: 'center', marginBottom: 8 }}
            >
              {translatedName}
            </BodoniText>
            {romanization && (
              <Text style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.8)', letterSpacing: 2, textTransform: 'uppercase' }}>
                {romanization}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (variant === 'list') {
    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} testID={testID}>
           <HexagramSymbol
            lines={hexagramLines}
            size={40}
            color="#555555"
          />
          <View style={{ flex: 1, paddingLeft: 12 }}>            
            <Text style={{ fontSize: 12, color: '#888888' }}>{hexagramNumber}</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#1A1A1A' }}>{translatedName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (variant === 'grid') {
    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
        <View style={{ width: '100%', aspectRatio: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} testID={testID}>
          <HexagramSymbol
            lines={hexagramLines}
            size={50}
            color="#000000"
          />
          <Text style={{ fontSize: 12, fontWeight: '600', color: '#1A1A1A', textAlign: 'center', marginTop: 12, paddingHorizontal: 8 }} numberOfLines={2}>
            {translatedName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return null;
}
