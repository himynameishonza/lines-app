import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TSort, TTheme, TViewMode } from '../types/generic';

const SETTINGS_STORAGE_KEY = '@settings';
const SESSION_VIEW_MODE_KEY = '@hexagrams_session_view_mode';

interface Settings {
  sortBy: TSort;
  viewMode: TViewMode;
  einkMode: boolean;
  theme: TTheme;
}

interface SettingsContextType {
  settings: Settings;
  sessionViewMode: TViewMode | null;
  setSortBy: (sortBy: TSort) => void;
  setViewMode: (viewMode: TViewMode) => void;
  setEinkMode: (einkMode: boolean) => void;
  setTheme: (theme: TTheme) => void;
  setSessionViewMode: (viewMode: TViewMode) => void;
}

const defaultSettings: Settings = {
  sortBy: 'fuSi',
  viewMode: "carousel",
  einkMode: false,
  theme: 'default',
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [sessionViewMode, setSessionViewModeState] = useState<TViewMode | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings and session view mode from AsyncStorage on mount
  useEffect(() => {
    loadSettings();
    loadSessionViewMode();
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
        // Merge with defaults to ensure all properties exist
        setSettings({ ...defaultSettings, ...parsed });
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

  const loadSessionViewMode = async () => {
    try {
      const stored = await AsyncStorage.getItem(SESSION_VIEW_MODE_KEY);
      if (stored) {
        setSessionViewModeState(stored as TViewMode);
      }
    } catch (error) {
      console.error('Error loading session view mode:', error);
    }
  };

  const setSessionViewMode = async (viewMode: TViewMode) => {
    try {
      await AsyncStorage.setItem(SESSION_VIEW_MODE_KEY, viewMode);
      setSessionViewModeState(viewMode);
    } catch (error) {
      console.error('Error saving session view mode:', error);
    }
  };

  const setSortBy = (sortBy: TSort) => {
    setSettings(prev => ({ ...prev, sortBy }));
  };

  const setEinkMode = (einkMode: boolean) => {
    setSettings(prev => ({ ...prev, einkMode }));
  };

  const setViewMode = (viewMode: TViewMode) => {
    setSettings(prev => ({ ...prev, viewMode }));
  };

  const setTheme = (theme: TTheme) => {
    setSettings(prev => ({ ...prev, theme }));
  };

  return (
    <SettingsContext.Provider value={{ settings, sessionViewMode, setSortBy, setEinkMode, setViewMode, setTheme, setSessionViewMode }}>
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
