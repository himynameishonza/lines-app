import React, { useRef } from "react";
import { View, ScrollView } from "react-native";
import TopNavigationBarHomeScreen from "../components/navbars/TopNavigationBarHomeScreen";
import GeistMonoText from "../components/typography/GeistMonoText";
import EmptyState from "../components/readingList/EmptyState";
import ReadingListItem from "../components/readingList/ReadingListItem";
import { useReadings } from "../contexts/ReadingsContext";
import { hexagrams } from "../data/hexagrams";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";
import ReadingListDateHeader from "../components/readingList/ReadingListDateHeader";

interface HomeScreenProps {
  onAdd: () => void;
  onCoinToss: () => void;
  onReadingPress: (readingId: string) => void;
}

export default function HomeScreen({ onAdd, onCoinToss, onReadingPress }: HomeScreenProps) {
  const { t } = useTranslation();
  const { readings, deleteReading } = useReadings();
  const closeSwipeCallbacks = useRef<{ [key: string]: () => void }>({});

  // Group readings by date
  const groupedReadings = readings.reduce((groups, reading) => {
    const date = new Date(reading.createdAt);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let label = '';
    if (date.toDateString() === today.toDateString()) {
      label = t('home.today');
    } else if (date.toDateString() === yesterday.toDateString()) {
      label = t('home.yesterday');
    } else {
      label = date.toLocaleDateString(i18n.language, { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      });
    }

    if (!groups[label]) {
      groups[label] = [];
    }
    groups[label].push(reading);
    return groups;
  }, {} as Record<string, typeof readings>);

  const getHexagram = (hexagramId: number) => {
    return hexagrams.find(h => h.id === hexagramId);
  };

  const hasChangingLines = (reading: typeof readings[0]) => {
    return reading.changingLines?.some(line => line === true);
  };

  const handleOutsideTap = () => {
    Object.values(closeSwipeCallbacks.current).forEach(callback => callback());
  };

  const registerCloseCallback = (id: string, callback: () => void) => {
    closeSwipeCallbacks.current[id] = callback;
  };

  const unregisterCloseCallback = (id: string) => {
    delete closeSwipeCallbacks.current[id];
  };

  const hasAnyOpen = () => {
    return Object.keys(closeSwipeCallbacks.current).length > 0;
  };

  return (
    <View className="bg-primary flex-1">
      <TopNavigationBarHomeScreen onAdd={onCoinToss} />
      
      {readings.length === 0 ? (
        <EmptyState  />
      ) : (
        <View className="flex-1" onStartShouldSetResponder={() => true} onResponderRelease={handleOutsideTap}>
          <ScrollView className="flex-1 px-6 pt-32">
            {Object.entries(groupedReadings).map(([dateLabel, dateReadings]) => (
              <View key={dateLabel} className="mb-6">
                <ReadingListDateHeader dateLabel={dateLabel}/>
                
                {dateReadings.map((reading) => {
                  const hexagram = getHexagram(reading.hexagramId);
                  if (!hexagram) return null;

                  return (
                    <ReadingListItem
                      key={reading.id}
                      reading={reading}
                      hexagram={hexagram}
                      hasChangingLines={hasChangingLines(reading) || false}
                      onPress={() => onReadingPress(reading.id)}
                      onDelete={() => deleteReading(reading.id)}
                      onRegisterClose={(callback) => registerCloseCallback(reading.id, callback)}
                      onUnregisterClose={() => unregisterCloseCallback(reading.id)}
                      onCloseOthers={() => {
                        Object.entries(closeSwipeCallbacks.current).forEach(([id, callback]) => {
                          if (id !== reading.id) callback();
                        });
                      }}
                      hasAnyOpen={hasAnyOpen}
                      t={t}
                    />
                  );
                })}
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
