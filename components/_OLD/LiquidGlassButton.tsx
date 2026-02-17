import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

interface LiquidGlassButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'white' | 'cyan';
  size?: number;
  testID?: string;
}

export default function LiquidGlassButton({
  onPress,
  children,
  variant = 'white',
  size = 48,
  testID,
}: LiquidGlassButtonProps) {
  const borderRadius = size / 2;

  const getOverlayStyle = () => {
    if (variant === 'cyan') {
      return styles.cyanOverlay;
    }
    return styles.whiteOverlay;
  };

  const getBlurTint = () => {
    if (variant === 'cyan') {
      return 'dark';
    }
    return 'light';
  };

  const getBlurIntensity = () => {
    if (variant === 'cyan') {
      return 40;
    }
    return 50;
  };

  return (
    <TouchableOpacity
      style={[styles.buttonWrapper, { borderRadius }]}
      onPress={onPress}
      activeOpacity={0.9}
      testID={testID}
    >
      <View style={[styles.glassContainer, { width: size, height: size, borderRadius }]}>
        {/* Layer 1: Base blur */}
        <BlurView 
          intensity={getBlurIntensity()} 
          tint={getBlurTint()} 
          style={[styles.blurLayer, { borderRadius }]}
        >
          {/* Layer 2: Color overlay */}
          <View style={[getOverlayStyle(), { borderRadius }]}>
            {/* Layer 3: Border highlight */}
            <View style={[styles.borderHighlight, { borderRadius }]}>
              {/* Layer 4: Inner content */}
              <View style={[styles.innerContent, { borderRadius }]}>
                {children}
              </View>
            </View>
          </View>
        </BlurView>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  glassContainer: {
    overflow: 'hidden',
  },
  blurLayer: {
    width: '100%',
    height: '100%',
  },
  whiteOverlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  cyanOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 188, 212, 0.2)',
  },
  borderHighlight: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
    borderLeftColor: 'rgba(255, 255, 255, 0.4)',
  },
  innerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
