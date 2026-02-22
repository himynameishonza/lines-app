import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reading } from '../types/reading';

const STORAGE_KEY = '@readings';

// Sandbox data for development
const SANDBOX_READINGS: Reading[] = [
  {
    id: '1',
    hexagramId: 1,
    question: 'What should I focus on in my career?',
    method: 'random',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
  {
    id: '2',
    hexagramId: 34,
    question: 'How can I improve my relationships?',
    method: 'randomWithChanging',
    changingLines: [false, true, false, false, true, false],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
  },
  {
    id: '3',
    hexagramId: 11,
    question: 'What is the best approach to my current challenge?',
    method: 'coinToss',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
  },
  {
    id: '4',
    hexagramId: 25,
    question: 'Should I pursue this new opportunity?',
    method: 'random',
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
  },
];

interface ReadingsContextType {
  readings: Reading[];
  isLoading: boolean;
  addReading: (reading: Omit<Reading, 'id' | 'createdAt'>) => void;
  deleteReading: (id: string) => void;
  getReading: (id: string) => Reading | undefined;
  clearAndReloadSandbox: () => Promise<void>;
}

const ReadingsContext = createContext<ReadingsContextType | undefined>(undefined);

export function ReadingsProvider({ children }: { children: ReactNode }) {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load readings from AsyncStorage on mount
  useEffect(() => {
    loadReadings();
  }, []);

  // Save readings to AsyncStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      saveReadings();
    }
  }, [readings, isLoaded]);

  const loadReadings = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setReadings(parsed);
      } else {
        // Use sandbox data if no stored readings
        setReadings(SANDBOX_READINGS);
      }
    } catch (error) {
      console.error('Error loading readings:', error);
      // Fallback to sandbox data on error
      setReadings(SANDBOX_READINGS);
    } finally {
      setIsLoaded(true);
    }
  };

  const saveReadings = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
    } catch (error) {
      console.error('Error saving readings:', error);
    }
  };

  const addReading = (reading: Omit<Reading, 'id' | 'createdAt'>) => {
    const newReading: Reading = {
      ...reading,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setReadings(prev => [newReading, ...prev]); // Add to beginning (newest first)
  };

  const deleteReading = (id: string) => {
    setReadings(prev => prev.filter(r => r.id !== id));
  };

  const getReading = (id: string) => {
    return readings.find(r => r.id === id);
  };

  const clearAndReloadSandbox = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setReadings(SANDBOX_READINGS);
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  };

  return (
    <ReadingsContext.Provider value={{ readings, isLoading: !isLoaded, addReading, deleteReading, getReading, clearAndReloadSandbox }}>
      {children}
    </ReadingsContext.Provider>
  );
}

export function useReadings() {
  const context = useContext(ReadingsContext);
  if (!context) {
    throw new Error('useReadings must be used within ReadingsProvider');
  }
  return context;
}
