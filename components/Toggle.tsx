import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Animated, View } from 'react-native';

interface ToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  trackColor?: { false: string; true: string };
  thumbColor?: string;
  activeThumbColor?: string;
  disabled?: boolean;
}

export default function Toggle({
  value,
  onValueChange,
  trackColor = { false: 'transparent', true: '#06283F' },
  thumbColor = '#06283F',
  activeThumbColor = '#FF9677',
  disabled = false,
}: ToggleProps) {
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 28],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [trackColor.false, trackColor.true],
  });

  const currentThumbColor = value ? activeThumbColor : thumbColor;

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handlePress}
      disabled={disabled}
      className="justify-center"
    >
      <Animated.View 
        className="w-16 rounded-full p-1 border border-text/20"
        style={{ backgroundColor }}
      >
        <Animated.View
          className="w-[27px] h-[27px] rounded-full"
          style={{
            backgroundColor: currentThumbColor,
            transform: [{ translateX }],
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
