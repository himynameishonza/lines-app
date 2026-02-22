import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, Animated, PanResponder } from "react-native";
import GeistMonoText from "../typography/GeistMonoText";
import HexagramSymbol from "../HexagramSymbol";
import { Trash2 } from "lucide-react-native";
import i18n from "../../i18n/config";
import { TLanguage } from "../../types/generic";
import { Hexagram } from "../../data/hexagrams";
import { Reading } from "../../types/reading";

interface ReadingListItemProps {
  reading: Reading;
  hexagram: Hexagram;
  onPress: () => void;
  onDelete: () => void;
  onRegisterClose: (callback: () => void) => void;
  onUnregisterClose: () => void;
  onCloseOthers: () => void;
  hasAnyOpen: () => boolean;
  t: any;
}

export default function ReadingListItem({
  reading,
  hexagram,
  onPress,
  onDelete,
  onRegisterClose,
  onUnregisterClose,
  onCloseOthers,
  hasAnyOpen,
  t,
}: ReadingListItemProps) {
  const translateX = useRef(new Animated.Value(0)).current;
  const lastOffset = useRef(0);

  const closeSwipe = () => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: true,
      tension: 100,
      friction: 10,
    }).start();
    lastOffset.current = 0;
    onUnregisterClose();
  };

  const openSwipe = () => {
    onRegisterClose(closeSwipe);
  };

  const handleCardPress = () => {
    // Check if any item is open
    if (hasAnyOpen()) {
      // Close all open items first
      onCloseOthers();
      closeSwipe();
    } else {
      // No items open, proceed with opening detail
      onPress();
    }
  };

  useEffect(() => {
    return () => {
      onUnregisterClose();
    };
  }, []);

  const DELETE_BUTTON_WIDTH = 100;
  const GAP = 8;
  const SWIPE_DISTANCE = DELETE_BUTTON_WIDTH + GAP;
  const SNAP_THRESHOLD = SWIPE_DISTANCE * 0.5;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        onCloseOthers();
        return false;
      },
      onMoveShouldSetPanResponder: (_, gestureState) => {
        const isHorizontalSwipe = Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
        return isHorizontalSwipe && Math.abs(gestureState.dx) > 10;
      },
      onPanResponderGrant: () => {
        // Capture the gesture
        return true;
      },
      onPanResponderMove: (_, gestureState) => {
        const newValue = lastOffset.current + gestureState.dx;
        if (newValue <= 0) {
          translateX.setValue(Math.max(newValue, -SWIPE_DISTANCE));
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const currentPosition = lastOffset.current + gestureState.dx;
        
        if (Math.abs(currentPosition) > SNAP_THRESHOLD) {
          // Snap open - reveal delete button
          Animated.spring(translateX, {
            toValue: -SWIPE_DISTANCE,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
          }).start();
          lastOffset.current = -SWIPE_DISTANCE;
          openSwipe();
        } else {
          // Snap closed
          closeSwipe();
        }
      },
      onPanResponderTerminate: () => {
        // If gesture is interrupted (e.g., by scroll), snap to nearest position
        const currentValue = lastOffset.current;
        if (Math.abs(currentValue) > SNAP_THRESHOLD) {
          Animated.spring(translateX, {
            toValue: -SWIPE_DISTANCE,
            useNativeDriver: true,
            tension: 100,
            friction: 10,
          }).start();
          lastOffset.current = -SWIPE_DISTANCE;
          openSwipe();
        } else {
          closeSwipe();
        }
      },
    }),
  ).current;

  const handleDelete = () => {
    onDelete();
  };

  return (
    <View className="mb-6 relative">
      {/* Delete button background */}
      <View className="absolute right-0 top-0 bottom-0 w-[100px] flex items-center justify-center pl-2">
        <TouchableOpacity
          onPress={handleDelete}
          activeOpacity={1}
          className="w-full h-full bg-main rounded-lg items-center justify-center"
        >
          <Trash2 size={24} className="text-text" strokeWidth={1.5} />
        </TouchableOpacity>
      </View>

      {/* Swipeable content */}
      <Animated.View
        style={{ transform: [{ translateX }] }}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity
          onPress={handleCardPress}
          activeOpacity={1}
          disabled={hasAnyOpen()}
          className="bg-primary border border-text/25 border-dashed rounded-lg p-4"
        >
          <View className="flex-row items-center gap-x-3 pl-3 mb-2">
            <HexagramSymbol
              lines={hexagram.lines}
              size={48}
              color="#06283F"
              changingLines={reading.changingLines}
            />

            <View className="flex-1 flex-row items-center justify-between">
              <View className="flex-1 mr-2">
                <GeistMonoText variant="bold" className="text-base leading-5">
                  {hexagram.content[i18n.language as TLanguage].name}
                </GeistMonoText>
                <GeistMonoText className="text-sm text-background">
                  {hexagram.chineseName} {hexagram.romanization}
                </GeistMonoText>
              </View>
            </View>
          </View>

          <GeistMonoText className="text-sm leading-5 text-text/70">
            {/* {reading.question} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, quibusdam temporibus aut ducimus corporis neque.
          </GeistMonoText>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
