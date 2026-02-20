import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SETTINGS_STORAGE_KEY = '@settings';

export type SortOption = 'fuSi' | 'wen';

interface Settings {
  sortBy: SortOption;
  einkMode: boolean;
}

interface SettingsContextType {
  settings: Settings;
  setSortBy: (sortBy: SortOption) => void;
  setEinkMode: (einkMode: boolean) => void;
}

const defaultSettings: Settings = {
  sortBy: 'fuSi',
  einkMode: false,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from AsyncStorage on mount
  useEffect(() => {
    loadSettings();
  }, []);

  // Save settings to AsyncStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      saveSettings();
    }
  }, [settings, isLoaded]);

  const loadSettings = async () => {
    try {
      const stored = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setSettings(parsed);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setIsLoaded(true);
    }
  };

  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  const setSortBy = (sortBy: SortOption) => {
    setSettings(prev => ({ ...prev, sortBy }));
  };

  const setEinkMode = (einkMode: boolean) => {
    setSettings(prev => ({ ...prev, einkMode }));
  };

  return (
    <SettingsContext.Provider value={{ settings, setSortBy, setEinkMode }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
}
