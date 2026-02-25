import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reading } from '../types/reading';

const STORAGE_KEY = '@readings';

interface ReadingsContextType {
  readings: Reading[];
  isLoading: boolean;
  addReading: (reading: Omit<Reading, 'id' | 'createdAt'>) => void;
  deleteReading: (id: string) => void;
  getReading: (id: string) => Reading | undefined;
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
        // Start with empty readings
        setReadings([]);
      }
    } catch (error) {
      console.error('Error loading readings:', error);
      // Start with empty readings on error
      setReadings([]);
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

  return (
    <ReadingsContext.Provider value={{ readings, isLoading: !isLoaded, addReading, deleteReading, getReading }}>
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
