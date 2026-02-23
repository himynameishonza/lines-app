import { StatusBar } from 'expo-status-bar';
import { View, Share, Alert } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useFonts, BodoniModa_400Regular, BodoniModa_500Medium, BodoniModa_600SemiBold, BodoniModa_700Bold } from '@expo-google-fonts/bodoni-moda';
import {GeistMono_400Regular, GeistMono_500Medium, GeistMono_700Bold} from "@expo-google-fonts/geist-mono"
import * as SplashScreen from 'expo-splash-screen';
import './i18n/config';
import i18n from './i18n/config';
import HomeScreen from './screens/HomeScreen';
import HexagramsScreen from './screens/HexagramsScreen';
import HexagramDetailScreen from './screens/HexagramDetailScreen';
import SettingsScreen from './screens/SettingsScreen';
import CoinTossScreen from './screens/CoinTossScreen';
import NewReadingScreen from './screens/NewReadingScreen';
import MainNavigationBar from './components/navbars/MainNavigationBar';
import { TMainNavigationTab, TViewMode } from './types/generic';
import { ReadingsProvider, useReadings } from './contexts/ReadingsContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { Hexagram, hexagrams } from './data/hexagrams';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

type TabType = 'dashboard' | 'hexagrams' | 'new-reading' | 'settings';

function AppContent() {
  const { addReading, getReading } = useReadings();
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [selectedHexagram, setSelectedHexagram] = useState<Hexagram | null>(null);
  const [changingLines, setChangingLines] = useState<boolean[]>([]);
  const [showCoinToss, setShowCoinToss] = useState(false);
  const [showNewReading, setShowNewReading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [navigationSource, setNavigationSource] = useState<'dashboard' | 'hexagrams'>('dashboard');
  
  // Track scroll positions for hexagrams screen
  const [hexagramsViewMode, setHexagramsViewMode] = useState<TViewMode>('carousel');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleViewModeChange = (viewMode: TViewMode) => {
    setHexagramsViewMode(viewMode);
  };

  const handleHexagramPress = (hexagram: Hexagram) => {
    setSelectedHexagram(hexagram);
    setChangingLines([]);
    setNavigationSource('hexagrams');
  };

  const handleCoinTossComplete = (hexagram: Hexagram, lines: boolean[]) => {
    // Save the reading
    addReading({
      hexagramId: hexagram.id,
      question: currentQuestion,
      method: 'coinToss',
      changingLines: lines,
    });
    
    setSelectedHexagram(hexagram);
    setChangingLines(lines);
    setShowCoinToss(false);
    setCurrentQuestion('');
  };

  const handleStartNewReading = () => {
    setShowNewReading(true);
  };

  const handleNewReadingContinue = (question: string) => {
    setCurrentQuestion(question);
    setShowNewReading(false);
    setShowCoinToss(true);
  };

  const handleReadingPress = (readingId: string) => {
    const reading = getReading(readingId);
    if (reading) {
      const hexagram = hexagrams.find(h => h.id === reading.hexagramId);
      if (hexagram) {
        setSelectedHexagram(hexagram);
        setChangingLines(reading.changingLines || []);
        setNavigationSource('dashboard');
      }
    }
  };

  const handleHomeFromDetail = () => {
    setSelectedHexagram(null);
    if (navigationSource === 'dashboard') {
      setActiveTab('dashboard');
    } else {
      setActiveTab('hexagrams');
    }
  };

  const handleShare = async () => {
    console.log('handleShare called');
    if (!selectedHexagram) {
      console.log('No hexagram selected');
      return;
    }

    const hasChangingLines = changingLines.some(line => line === true);
    const language = i18n.language as 'en' | 'cs';
    console.log('About to share:', { hasChangingLines, language });
    
    // Build share text
    let shareText = `${selectedHexagram.content[language].name}\n`;
    shareText += `${selectedHexagram.chineseName} · ${selectedHexagram.romanization}\n\n`;
    shareText += `${selectedHexagram.content[language].meaning}\n`;
    
    if (hasChangingLines) {
      shareText += `\n--- ${i18n.t('evolution.changingLines')} ---\n`;
      selectedHexagram.content[language].evolution.forEach((line) => {
        if (changingLines[line.position - 1]) {
          shareText += `\n${line.position}. ${i18n.t('detail.line')} - ${line.name}\n${line.description}\n`;
        }
      });
    }

    try {
      const result = await Share.share({
        message: shareText,
      });
      
      if (result.action === Share.dismissedAction) {
        // User dismissed the share dialog
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Share error:', error);
      Alert.alert(i18n.t('share.error'), error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const renderScreen = () => {
    // Show new reading screen
    if (showNewReading) {
      return (
        <NewReadingScreen
          onBack={() => setShowNewReading(false)}
          onCoinToss={handleNewReadingContinue}
        />
      );
    }

    // Show coin toss screen
    if (showCoinToss) {
      return (
        <CoinTossScreen
          onBack={() => {
            setShowCoinToss(false);
            setCurrentQuestion('');
          }}
          onComplete={handleCoinTossComplete}
        />
      );
    }

    // Show hexagram detail if one is selected
    if (selectedHexagram) {
      return (
        <HexagramDetailScreen
          hexagram={selectedHexagram}
          onBack={handleHomeFromDetail}
          onShare={handleShare}
          showHomeButton={navigationSource === 'dashboard'}
          changingLines={changingLines}
        />
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <HomeScreen onAdd={() => {}} onCoinToss={handleStartNewReading} onReadingPress={handleReadingPress} />;
      case 'hexagrams':
        return (
          <HexagramsScreen 
            initialViewMode={hexagramsViewMode}
            onViewModeChange={handleViewModeChange}
            onHexagramPress={handleHexagramPress}
          />
        );
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen onAdd={() => {}} onCoinToss={handleStartNewReading} onReadingPress={handleReadingPress} />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
      {!selectedHexagram && !showCoinToss && !showNewReading && (
        <MainNavigationBar activeTab={activeTab as TMainNavigationTab} onTabChange={handleTabChange} />
      )}
      <StatusBar />
    </View>
  );
}

export default function App() {
  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    BodoniModa_400Regular,
    BodoniModa_500Medium,
    BodoniModa_600SemiBold,
    BodoniModa_700Bold,
    GeistMono_400Regular,
    GeistMono_500Medium,
    GeistMono_700Bold
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SettingsProvider>
      <ReadingsProvider>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </ReadingsProvider>
    </SettingsProvider>
  );
}
