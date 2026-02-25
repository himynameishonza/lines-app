import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TSort, TTheme, TViewMode } from '../types/generic';

const SETTINGS_STORAGE_KEY = '@settings';
const SESSION_VIEW_MODE_KEY = '@hexagrams_session_view_mode';
const WIZARD_COMPLETED_KEY = '@wizard_completed';

interface Settings {
  sortBy: TSort;
  viewMode: TViewMode;
  theme: TTheme;
  hasCompletedWizard: boolean;
}

interface SettingsContextType {
  settings: Settings;
  sessionViewMode: TViewMode | null;
  setSortBy: (sortBy: TSort) => void;
  setViewMode: (viewMode: TViewMode) => void;
  setTheme: (theme: TTheme) => void;
  setSessionViewMode: (viewMode: TViewMode) => void;
  setHasCompletedWizard: (completed: boolean) => void;
  isLoading: boolean;
}

const defaultSettings: Settings = {
  sortBy: 'fuSi',
  viewMode: "carousel",
  theme: 'minimal',
  hasCompletedWizard: false,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [sessionViewMode, setSessionViewModeState] = useState<TViewMode | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
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

  const setViewMode = (viewMode: TViewMode) => {
    setSettings(prev => ({ ...prev, viewMode }));
  };

  const setTheme = (theme: TTheme) => {
    setSettings(prev => ({ ...prev, theme }));
  };

  const setHasCompletedWizard = (completed: boolean) => {
    setSettings(prev => ({ ...prev, hasCompletedWizard: completed }));
  };

  return (
    <SettingsContext.Provider value={{ settings, sessionViewMode, setSortBy, setViewMode, setTheme, setSessionViewMode, setHasCompletedWizard, isLoading }}>
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
