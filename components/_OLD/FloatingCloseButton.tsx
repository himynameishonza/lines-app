import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LiquidGlassButton from './LiquidGlassButton';

interface FloatingCloseButtonProps {
  onClose: () => void;
  onShare?: () => void;
}

export default function FloatingCloseButton({ onClose, onShare }: FloatingCloseButtonProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { top: insets.top + 8 }]}>
      {/* Back button - left */}
      <LiquidGlassButton
        onPress={onClose}
        variant="white"
        size={48}
        testID="floating-back-button"
      >
        <Ionicons name="chevron-back" size={24} color="#1a1a1a" />
      </LiquidGlassButton>

      {/* Share button - right */}
      {onShare && (
        <LiquidGlassButton
          onPress={onShare}
          variant="cyan"
          size={48}
          testID="floating-share-button"
        >
          <Ionicons name="share-outline" size={22} color="#fff" />
        </LiquidGlassButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
