import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LiquidGlassButton from './LiquidGlassButton';

interface FloatingViewToggleProps {
  viewMode: 'carousel' | 'list' | 'grid';
  onToggle: () => void;
}

export default function FloatingViewToggle({ viewMode, onToggle }: FloatingViewToggleProps) {
  const insets = useSafeAreaInsets();

  const getIcon = () => {
    switch (viewMode) {
      case 'carousel':
        return 'albums-outline';
      case 'list':
        return 'list-outline';
      case 'grid':
        return 'grid-outline';
    }
  };

  return <View style={[styles.container, { top: insets.top + 8 }]}>
    <LiquidGlassButton
      onPress={onToggle}
      variant="cyan"
      size={48}
      testID="floating-view-toggle"
    >
      <Ionicons name={getIcon()} size={24} color="#FFFFFF" />
    </LiquidGlassButton>
  </View>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    zIndex: 1000,
  },
});
