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
import SettingsScreen from './screens/SettingsScreen';
import MainNavigationBar from './components/navbars/MainNavigationBar';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

type TabType = 'dashboard' | 'hexagrams' | 'new-reading' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

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

  const renderScreen = () => {
    switch (activeTab) {
      case 'dashboard':
        return <HomeScreen />;
      case 'hexagrams':
        return <HexagramsScreen />;
      case 'new-reading':
        return <NewReadingScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        {renderScreen()}
        <MainNavigationBar activeTab={activeTab as 'dashboard' | 'hexagrams' | 'settings'} onTabChange={handleTabChange} />
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}
