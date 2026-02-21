import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react';
import { useFonts, BodoniModa_400Regular, BodoniModa_500Medium, BodoniModa_600SemiBold, BodoniModa_700Bold } from '@expo-google-fonts/bodoni-moda';
import {GeistMono_400Regular, GeistMono_500Medium, GeistMono_700Bold} from "@expo-google-fonts/geist-mono"
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import './i18n/config';
import HomeScreen from './screens/HomeScreen';
import HexagramsScreen from './screens/HexagramsScreen';
import HexagramDetailScreen from './screens/HexagramDetailScreen';
import SettingsScreen from './screens/SettingsScreen';
import MainNavigationBar from './components/navbars/MainNavigationBar';
import { TMainNavigationTab, TViewMode } from './types/generic';
import { ReadingsProvider } from './contexts/ReadingsContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { Hexagram } from './data/hexagrams';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

type TabType = 'dashboard' | 'hexagrams' | 'new-reading' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [showWizard, setShowWizard] = useState(false);
  const [selectedHexagram, setSelectedHexagram] = useState<Hexagram | null>(null);
  
  // Track scroll positions for hexagrams screen
  const [hexagramsViewMode, setHexagramsViewMode] = useState<TViewMode>('carousel');

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

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleViewModeChange = (viewMode: TViewMode) => {
    setHexagramsViewMode(viewMode);
  };

  const handleHexagramPress = (hexagram: Hexagram) => {
    setSelectedHexagram(hexagram);
  };

  const handleBackFromDetail = () => {
    setSelectedHexagram(null);
  };

  const renderScreen = () => {
    // Show hexagram detail if one is selected
    if (selectedHexagram) {
      return (
        <HexagramDetailScreen
          hexagram={selectedHexagram}
          onBack={handleBackFromDetail}
        />
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return <HomeScreen onAdd={() => setShowWizard(true)}/>;
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
        return <HomeScreen onAdd={() => setShowWizard(true)}  />;
    }
  };

  return (
    <SettingsProvider>
      <ReadingsProvider>
        <SafeAreaProvider>
          <View style={{ flex: 1 }}>
                {renderScreen()}
                {!selectedHexagram && (
                  <MainNavigationBar activeTab={activeTab as TMainNavigationTab} onTabChange={handleTabChange} />
                )}
            <StatusBar />
          </View>
        </SafeAreaProvider>
      </ReadingsProvider>
    </SettingsProvider>
  );
}
