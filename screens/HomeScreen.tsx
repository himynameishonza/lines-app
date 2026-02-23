import React, { useRef, useState } from "react";
import { View, ScrollView, Platform } from "react-native";
import TopNavigationBarHomeScreen from "../components/navbars/TopNavigationBarHomeScreen";
import EmptyState from "../components/readingList/EmptyState";
import LoadingState from "../components/readingList/LoadingState";
import ReadingListItem from "../components/readingList/ReadingListItem";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import { useReadings } from "../contexts/ReadingsContext";
import { hexagrams } from "../data/hexagrams";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/config";
import ReadingListDateHeader from "../components/readingList/ReadingListDateHeader";
import { LinearGradient } from "expo-linear-gradient";

interface HomeScreenProps {
  onAdd: () => void;
  onCoinToss: () => void;
  onReadingPress: (readingId: string) => void;
}

export default function HomeScreen({ onAdd, onCoinToss, onReadingPress }: HomeScreenProps) {
  const { t } = useTranslation();
  const { readings, isLoading, deleteReading } = useReadings();
  const closeSwipeCallbacks = useRef<{ [key: string]: () => void }>({});
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [readingToDelete, setReadingToDelete] = useState<string | null>(null);

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

  const registerCloseCallback = (id: string, callback: () => void) => {
    closeSwipeCallbacks.current[id] = callback;
  };

  const unregisterCloseCallback = (id: string) => {
    delete closeSwipeCallbacks.current[id];
  };

  const hasAnyOpen = () => {
    return Object.keys(closeSwipeCallbacks.current).length > 0;
  };

  const handleDeleteRequest = (readingId: string) => {
    setReadingToDelete(readingId);
    setDeleteModalVisible(true);
  };

  const handleConfirmDelete = () => {
    setDeleteModalVisible(false);
    if (readingToDelete) {
      deleteReading(readingToDelete);
    }
    setReadingToDelete(null);
    // Close all open swipes
    Object.values(closeSwipeCallbacks.current).forEach(callback => callback());
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false);
    setReadingToDelete(null);
    // Close all open swipes
    Object.values(closeSwipeCallbacks.current).forEach(callback => callback());
  };

  return (
    <View className="bg-primary flex-1">
      <TopNavigationBarHomeScreen onAdd={onCoinToss} />
      
      {isLoading ? (
        <LoadingState />
      ) : readings.length === 0 ? (
        <EmptyState  />
      ) : (
        <ScrollView 
          className="flex-1 px-6 pt-32" 
          contentContainerStyle={{ paddingBottom: Platform.OS === 'android' ? 180 : 80 }}
        >
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
                    onPress={() => onReadingPress(reading.id)}
                    onDelete={() => handleDeleteRequest(reading.id)}
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
      )}
      <LinearGradient
              colors={[
                "rgba(245, 232, 220, 1)",
                "rgba(245, 232, 220, 1)",
                "rgba(245, 232, 220, 0)",
              ]}
              className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
            />

      <ConfirmDeleteModal
        visible={deleteModalVisible}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </View>
  );
}
