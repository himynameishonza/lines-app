import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import BodoniText from '../components/BodoniText';
import GeistMonoText from '../components/GeistMonoText';
import WizardNavigationBar from '../components/navbars/WizardNavigationBar';
import CoinTossScreen from './CoinTossScreen';
import HexagramDetail from '../components/HexagramDetail';
import { hexagrams, Hexagram } from '../data/hexagrams';
import { useReadings } from '../contexts/ReadingsContext';
import { ReadingMethod } from '../types/reading';

interface NewReadingWizardScreenProps {
  onClose: () => void;
}

export default function NewReadingWizardScreen({ onClose }: NewReadingWizardScreenProps) {
  const { t } = useTranslation();
  const { addReading } = useReadings();
  const [currentStep, setCurrentStep] = useState(1);
  const [question, setQuestion] = useState('');
  const [showCoinToss, setShowCoinToss] = useState(false);
  const [selectedHexagram, setSelectedHexagram] = useState<Hexagram | null>(null);
  const [changingLines, setChangingLines] = useState<boolean[] | undefined>(undefined);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRandomHexagram = () => {
    const randomIndex = Math.floor(Math.random() * hexagrams.length);
    const hexagram = hexagrams[randomIndex];
    
    setSelectedHexagram(hexagram);
    setChangingLines(undefined);
    
    // Save reading
    addReading({
      hexagramId: hexagram.id,
      question: question || '',
      method: 'random',
      changingLines: undefined,
    });
  };

  const handleRandomWithChanging = () => {
    const randomIndex = Math.floor(Math.random() * hexagrams.length);
    const hexagram = hexagrams[randomIndex];
    
    // Generate random changing lines (20% chance per line)
    const randomChangingLines = Array.from({ length: 6 }, () => Math.random() < 0.2);
    
    // Only set changing lines if at least one line is changing
    const hasChangingLines = randomChangingLines.some(line => line);
    const finalChangingLines = hasChangingLines ? randomChangingLines : undefined;
    
    setSelectedHexagram(hexagram);
    setChangingLines(finalChangingLines);
    
    // Save reading
    addReading({
      hexagramId: hexagram.id,
      question: question || '',
      method: 'randomWithChanging',
      changingLines: finalChangingLines,
    });
  };

  const handleCoinToss = () => {
    setShowCoinToss(true);
  };

  const handleCoinTossComplete = (hexagram: Hexagram, lines: boolean[]) => {
    setSelectedHexagram(hexagram);
    setChangingLines(lines);
    setShowCoinToss(false);
    
    // Save reading
    addReading({
      hexagramId: hexagram.id,
      question: question || '',
      method: 'coinToss',
      changingLines: lines,
    });
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Share hexagram:', selectedHexagram?.id);
  };

  // Show hexagram detail if selected
  if (selectedHexagram) {
    return (
      <HexagramDetail
        hexagram={selectedHexagram}
        onBack={onClose} // Go directly to home instead of back to wizard
        onShare={handleShare}
        changingLines={changingLines}
        showHomeButton={true} // Show home icon instead of back arrow
      />
    );
  }

  // Show coin toss screen
  if (showCoinToss) {
    return (
      <CoinTossScreen 
        onClose={() => setShowCoinToss(false)}
        onComplete={handleCoinTossComplete}
      />
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Guide onNext={handleNext} />;
      case 2:
        return <Step2Question question={question} setQuestion={setQuestion} onNext={handleNext} />;
      case 3:
        return <Step3Method onRandomHexagram={handleRandomHexagram} onRandomWithChanging={handleRandomWithChanging} onCoinToss={handleCoinToss} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
      <WizardNavigationBar 
        onBack={handleBack}
        onClose={onClose}
        showBack={currentStep > 1}
      />
      {renderStep()}
    </SafeAreaView>
  );
}

// Step 1: Guide
function Step1Guide({ onNext }: { onNext: () => void }) {
  const { t } = useTranslation();

  return (
    <View className="flex-1 px-6 pt-12">
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <BodoniText variant="bold" className="text-3xl text-white">
          {t('newReading.step1.title')}
        </BodoniText>
        
        <GeistMonoText className="text-sm text-main/50 mb-8">
          {t('newReading.step1.subtitle')}
        </GeistMonoText>

        <GeistMonoText className="text-base text-main mb-12 leading-6">
          {t('newReading.guideText')}
        </GeistMonoText>

        <GeistMonoText className="text-sm text-red-400 mb-2 leading-6">
          {t('newReading.exampleBad1')}
        </GeistMonoText>

          <GeistMonoText className="text-sm text-emerald-400 border-dashed border-main/50 border-b pb-4 mb-4 leading-6">
          {t('newReading.exampleGood1')}
        </GeistMonoText>

             <GeistMonoText className="text-sm text-red-400 mb-2 leading-6">
          {t('newReading.exampleBad2')}
        </GeistMonoText>

          <GeistMonoText className="text-sm text-emerald-400 mb-2 leading-6">
          {t('newReading.exampleGood2')}
        </GeistMonoText>
      </ScrollView>

      <View className="pb-6">
        <TouchableOpacity 
          className="bg-main rounded-full py-4 active:opacity-80"
          activeOpacity={0.8}
          onPress={onNext}
        >
          <GeistMonoText variant="medium" className="text-background text-center text-sm tracking-wide">
            {t('newReading.next')}
          </GeistMonoText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Step 2: Question Input
function Step2Question({ 
  question, 
  setQuestion, 
  onNext 
}: { 
  question: string; 
  setQuestion: (q: string) => void; 
  onNext: () => void;
}) {
  const { t } = useTranslation();

  return (
    <View className="flex-1 px-6 pt-12">
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <BodoniText variant="bold" className="text-3xl text-white">
          {t('newReading.step2.title')}
        </BodoniText>
        
        <GeistMonoText className="text-sm text-main/50 mb-8">
          {t('newReading.step2.subtitle')}
        </GeistMonoText>

        <TextInput
          className="bg-background border border-main rounded-xl p-4 text-white text-base h-full"
          placeholder={t('newReading.placeholder')}
          placeholderTextColor="#666666"
          value={question}
          onChangeText={setQuestion}
          multiline
          textAlignVertical="top"
          style={{ fontFamily: 'GeistMono_400Regular' }}
        />
      </ScrollView>

      <View className="pb-6">
        <TouchableOpacity 
          className="bg-[#EFDECA] rounded-full py-4 active:opacity-80"
          activeOpacity={0.8}
          onPress={onNext}
        >
          <GeistMonoText variant="medium" className="text-background text-center text-sm tracking-wide">
            {t('newReading.next')}
          </GeistMonoText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Step 3: Method Selection
function Step3Method({ 
  onRandomHexagram, 
  onRandomWithChanging, 
  onCoinToss 
}: { 
  onRandomHexagram: () => void; 
  onRandomWithChanging: () => void; 
  onCoinToss: () => void 
}) {
  const { t } = useTranslation();

  return (
    <View className="flex-1 px-6 pt-12">
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingTop: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <BodoniText variant="bold" className="text-3xl text-white">
          {t('newReading.step3.title')}
        </BodoniText>
        
        <GeistMonoText className="text-sm text-main/50 mb-8">
          {t('newReading.step3.subtitle')}
        </GeistMonoText>

        <TouchableOpacity 
          className="bg-main rounded-2xl p-6 mb-4 active:opacity-80"
          activeOpacity={0.8}
          onPress={onRandomHexagram}
        >
          <BodoniText variant="semibold" className="text-background text-xl mb-2">
            {t('newReading.randomHexagram')}
          </BodoniText>
          <GeistMonoText className="text-background text-xs opacity-70">
            {t('newReading.step3.randomDescription')}
          </GeistMonoText>
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-main rounded-2xl p-6 mb-4 active:opacity-80"
          activeOpacity={0.8}
          onPress={onRandomWithChanging}
        >
          <BodoniText variant="semibold" className="text-background text-xl mb-2">
            {t('newReading.randomWithChanging')}
          </BodoniText>
          <GeistMonoText className="text-background text-xs opacity-70">
            {t('newReading.step3.randomWithChangingDescription')}
          </GeistMonoText>
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-main rounded-2xl p-6 active:opacity-80"
          activeOpacity={0.8}
          onPress={onCoinToss}
        >
          <BodoniText variant="semibold" className="text-background text-xl mb-2">
            {t('newReading.coinToss')}
          </BodoniText>
          <GeistMonoText className="text-background text-xs opacity-70">
            {t('newReading.step3.coinTossDescription')}
          </GeistMonoText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
