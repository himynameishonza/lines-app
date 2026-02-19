import React, { useMemo, useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import BodoniText from '../components/BodoniText';
import GeistMonoText from '../components/GeistMonoText';
import HexagramDetail from '../components/HexagramDetail';
import SwipeableReadingCard from '../components/SwipeableReadingCard';
import { useReadings } from '../contexts/ReadingsContext';
import { hexagrams, Hexagram } from '../data/hexagrams';
import { getHexagramTranslatedName } from '../utils/hexagramHelpers';

interface HomeScreenProps {
  onOpenWizard: () => void;
  onShowDetail: (show: boolean) => void;
}

export default function HomeScreen({ onOpenWizard, onShowDetail }: HomeScreenProps) {
  const { t, i18n } = useTranslation();
  const { readings, deleteReading } = useReadings();
  const currentLang = i18n.language as 'cs' | 'en';
  const [selectedReadingId, setSelectedReadingId] = useState<string | null>(null);

  // Block 1: Greeting based on daytime
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return t('home.greeting.morning');
    if (hour < 18) return t('home.greeting.afternoon');
    return t('home.greeting.evening');
  }, [t]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return t('home.today');
    } else if (date.toDateString() === yesterday.toDateString()) {
      return t('home.yesterday');
    } else {
      return date.toLocaleDateString(currentLang, { month: 'short', day: 'numeric' });
    }
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Share reading');
  };

  const handleOpenReading = (readingId: string) => {
    setSelectedReadingId(readingId);
    onShowDetail(true);
  };

  const handleBackFromDetail = () => {
    setSelectedReadingId(null);
    onShowDetail(false);
  };

  // Show hexagram detail if a reading is selected
  if (selectedReadingId) {
    const reading = readings.find(r => r.id === selectedReadingId);
    if (reading) {
      const hexagram = hexagrams.find(h => h.id === reading.hexagramId);
      if (hexagram) {
        return (
          <HexagramDetail
            hexagram={hexagram}
            onBack={handleBackFromDetail}
            onShare={handleShare}
            changingLines={reading.changingLines}
          />
        );
      }
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      {/* Block 1: Greeting */}
      <View className="p-6">
        <BodoniText variant="bold" className="text-3xl text-main pt-1">
          {greeting}
        </BodoniText>
        <GeistMonoText className="text-sm text-main/50">
          {t('home.subtitle')}
        </GeistMonoText>
      </View>

      {/* Block 2: Scrollable area with past readings */}
      <ScrollView 
        className="flex-1 pb-32"
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      >
        {readings.length === 0 ? (
          <View className="flex-1 justify-center items-center py-20">
            <GeistMonoText className="text-base text-main">
              {t('home.empty.title')}
            </GeistMonoText>
            <GeistMonoText className="text-xs text-main/50 text-center">
              {t('home.empty.subtitle')}
            </GeistMonoText>
          </View>
        ) : (
          readings.map((reading) => {
            const hexagram = hexagrams.find(h => h.id === reading.hexagramId);
            if (!hexagram) return null;

            const translatedName = getHexagramTranslatedName(hexagram, currentLang, t);
            const hasChangingLines = reading.changingLines?.some(line => line);

            return (
              <SwipeableReadingCard
                key={reading.id}
                hexagramNumber={hexagram.number}
                hexagramName={translatedName}
                question={reading.question}
                date={formatDate(reading.createdAt)}
                method={t(`home.method.${reading.method}`)}
                hasChangingLines={hasChangingLines || false}
                changingLabel={t('home.changing')}
                onPress={() => handleOpenReading(reading.id)}
                onDelete={() => deleteReading(reading.id)}
              />
            );
          })
        )}
      </ScrollView>

      {/* Block 3: Floating button - New reading */}
      <TouchableOpacity 
        className="absolute bottom-32 right-6 left-6 bg-[#EFDECA] px-6 py-4 rounded-full shadow-lg active:opacity-80"
        activeOpacity={0.8}
        onPress={onOpenWizard}
      >
        <GeistMonoText variant="medium" className="text-sm text-background tracking-wide text-center">
          {t('home.newReading')}
        </GeistMonoText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
