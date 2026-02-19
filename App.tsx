import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react';
import { useFonts, BodoniModa_400Regular, BodoniModa_500Medium, BodoniModa_600SemiBold, BodoniModa_700Bold } from '@expo-google-fonts/bodoni-moda';
import {GeistMono_400Regular, GeistMono_500Medium} from "@expo-google-fonts/geist-mono"
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import './i18n/config';
import HomeScreen from './screens/HomeScreen';
import HexagramsScreen from './screens/HexagramsScreen';
import NewReadingScreen from './screens/NewReadingScreen';
import NewReadingWizardScreen from './screens/NewReadingWizardScreen';
import SettingsScreen from './screens/SettingsScreen';
import MainNavigationBar from './components/navbars/MainNavigationBar';
import HexagramDetail from './components/HexagramDetail';
import { Hexagram } from './data/hexagrams';
import { MainNavigationTab, HexagramsViewMode } from './types/navigation';
import { ReadingsProvider } from './contexts/ReadingsContext';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

type TabType = 'dashboard' | 'hexagrams' | 'new-reading' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [selectedHexagram, setSelectedHexagram] = useState<Hexagram | null>(null);
  const [showWizard, setShowWizard] = useState(false);
  const [homeShowingDetail, setHomeShowingDetail] = useState(false);
  
  // Track scroll positions for hexagrams screen
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [listScrollOffset, setListScrollOffset] = useState(0);
  const [gridScrollOffset, setGridScrollOffset] = useState(0);
  const [hexagramsViewMode, setHexagramsViewMode] = useState<HexagramsViewMode>('carousel');

  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    BodoniModa_400Regular,
    BodoniModa_500Medium,
    BodoniModa_600SemiBold,
    BodoniModa_700Bold,
    GeistMono_400Regular,
    GeistMono_500Medium
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

  const handleHexagramPress = (hexagram: Hexagram) => {
    setSelectedHexagram(hexagram);
  };

  const handleBackFromDetail = () => {
    setSelectedHexagram(null);
  };

  const handleScrollPositionChange = (viewMode: HexagramsViewMode, position: number) => {
    if (viewMode === 'carousel') {
      setCarouselIndex(position);
    } else if (viewMode === 'list') {
      setListScrollOffset(position);
    } else if (viewMode === 'grid') {
      setGridScrollOffset(position);
    }
  };

  const handleViewModeChange = (viewMode: HexagramsViewMode) => {
    setHexagramsViewMode(viewMode);
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Share hexagram:', selectedHexagram?.id);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'dashboard':
        return <HomeScreen onOpenWizard={() => setShowWizard(true)} onShowDetail={setHomeShowingDetail} />;
      case 'hexagrams':
        return (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, display: selectedHexagram ? 'none' : 'flex' }}>
              <HexagramsScreen 
                onHexagramPress={handleHexagramPress}
                initialCarouselIndex={carouselIndex}
                initialListScrollOffset={listScrollOffset}
                initialGridScrollOffset={gridScrollOffset}
                onScrollPositionChange={handleScrollPositionChange}
                initialViewMode={hexagramsViewMode}
                onViewModeChange={handleViewModeChange}
              />
            </View>
            {selectedHexagram && (
              <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                <HexagramDetail
                  hexagram={selectedHexagram}
                  onBack={handleBackFromDetail}
                  onShare={handleShare}
                />
              </View>
            )}
          </View>
        );
      case 'new-reading':
        return <NewReadingScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen onOpenWizard={() => setShowWizard(true)} onShowDetail={setHomeShowingDetail} />;
    }
  };

  return (
    <ReadingsProvider>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          {showWizard ? (
            <NewReadingWizardScreen onClose={() => setShowWizard(false)} />
          ) : (
            <>
              {renderScreen()}
              {!selectedHexagram && !homeShowingDetail && (
                <MainNavigationBar activeTab={activeTab as MainNavigationTab} onTabChange={handleTabChange} />
              )}
            </>
          )}
          <StatusBar style="light" />
        </View>
      </SafeAreaProvider>
    </ReadingsProvider>
  );
}
