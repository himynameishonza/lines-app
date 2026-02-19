import React, { useRef } from 'react';
import { View, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { Trash2 } from 'lucide-react-native';
import BodoniText from './BodoniText';
import GeistMonoText from './GeistMonoText';

interface SwipeableReadingCardProps {
  hexagramNumber: number;
  hexagramName: string;
  question?: string;
  date: string;
  method: string;
  hasChangingLines: boolean;
  changingLabel: string;
  onPress: () => void;
  onDelete: () => void;
}

const SWIPE_THRESHOLD = -80;

export default function SwipeableReadingCard({
  hexagramNumber,
  hexagramName,
  question,
  date,
  method,
  hasChangingLines,
  changingLabel,
  onPress,
  onDelete,
}: SwipeableReadingCardProps) {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Only respond to horizontal swipes
        return Math.abs(gestureState.dx) > 10 && Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
      },
      onPanResponderMove: (_, gestureState) => {
        // Only allow left swipe (negative dx)
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < SWIPE_THRESHOLD) {
          // Swipe far enough - show delete button
          Animated.spring(translateX, {
            toValue: SWIPE_THRESHOLD,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
          }).start();
        } else {
          // Snap back
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
          }).start();
        }
      },
    })
  ).current;

  const handleDelete = () => {
    // Animate out before deleting
    Animated.timing(translateX, {
      toValue: -400,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onDelete();
    });
  };

  return (
    <View className="mb-4 relative">
      {/* Delete button background */}
      <View className="absolute right-0 top-0 bottom-0 w-20 bg-red-600 rounded-2xl flex items-center justify-center">
        <TouchableOpacity
          onPress={handleDelete}
          className="w-full h-full items-center justify-center"
          activeOpacity={0.8}
        >
          <Trash2 size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Swipeable card */}
      <Animated.View
        style={{
          transform: [{ translateX }],
        }}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity
          className="bg-gray-900 border border-gray-700 rounded-2xl p-4 active:opacity-80"
          activeOpacity={0.8}
          onPress={onPress}
        >
          <View className="flex-row justify-between items-start mb-2">
            <View className="flex-1 mr-3">
              <BodoniText variant="semibold" className="text-white text-lg mb-1">
                {hexagramNumber}. {hexagramName}
              </BodoniText>
              {question && (
                <GeistMonoText className="text-gray-400 text-xs mb-2" numberOfLines={2}>
                  {question}
                </GeistMonoText>
              )}
            </View>
            <GeistMonoText className="text-gray-500 text-[10px]">
              {date}
            </GeistMonoText>
          </View>

          <View className="flex-row items-center gap-2">
            <GeistMonoText className="text-gray-500 text-[10px]">
              {method}
            </GeistMonoText>
            {hasChangingLines && (
              <View className="bg-[#EFDECA] px-2 py-0.5 rounded-full">
                <GeistMonoText className="text-background text-[9px]">
                  {changingLabel}
                </GeistMonoText>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
