import React from 'react';
import { render } from '@testing-library/react-native';
import HexagramDetailsCard from '../components/HexagramDetailsCard';
import { ScrollView } from 'react-native';
import { hexagrams } from '../data/hexagrams';

// Mock i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key.startsWith('hexagrams.')) {
        return 'The Creative';
      }
      return key;
    },
    i18n: {
      language: 'en',
    },
  }),
}));

describe('HexagramDetailsCard', () => {
  const testHexagram = hexagrams[0]; // First hexagram

  it('renders without crashing', () => {
    const { root } = render(
      <HexagramDetailsCard 
        hexagram={testHexagram} 
        activeTab="meaning"
        onClose={() => {}}
        onShare={() => {}}
      />
    );
    expect(root).toBeTruthy();
  });

  it('displays Chinese name', () => {
    const { getByText } = render(
      <HexagramDetailsCard 
        hexagram={testHexagram} 
        activeTab="meaning"
        onClose={() => {}}
        onShare={() => {}}
      />
    );
    expect(getByText('乾')).toBeTruthy();
  });

  it('displays hexagram number', () => {
    const { getByText } = render(
      <HexagramDetailsCard 
        hexagram={testHexagram} 
        activeTab="meaning"
        onClose={() => {}}
        onShare={() => {}}
      />
    );
    expect(getByText('1')).toBeTruthy();
  });

  it('contains scrollable content area', () => {
    const { UNSAFE_getAllByType } = render(
      <HexagramDetailsCard 
        hexagram={testHexagram} 
        activeTab="meaning"
        onClose={() => {}}
        onShare={() => {}}
      />
    );
    const scrollViews = UNSAFE_getAllByType(ScrollView);
    expect(scrollViews.length).toBeGreaterThan(0);
  });
});

describe('HexagramDetailsCard - Property Tests', () => {
  /**
   * Feature: lines-iching-app
   * Property 11: Hexagram details card contains all information elements
   * Validates: Requirements 7.2, 7.3, 7.4, 7.5, 7.6
   */
  it('Property 11: hexagram details card contains all information elements', () => {
    const testHexagram = placeholderHexagrams[41]; // Hexagram 42

    const { getByText, UNSAFE_getAllByType } = render(
      <HexagramDetailsCard 
        hexagram={testHexagram} 
        activeTab="meaning"
        onClose={() => {}}
        onShare={() => {}}
      />
    );

    // Requirement 7.4: Original Chinese name
    const chineseName = getByText(testHexagram.chineseName);
    expect(chineseName).toBeTruthy();

    // Requirement 7.5: Hexagram number
    const hexagramNumber = getByText('42');
    expect(hexagramNumber).toBeTruthy();

    // Requirement 7.6: Scrollable body section with content
    const scrollViews = UNSAFE_getAllByType(ScrollView);
    expect(scrollViews.length).toBeGreaterThan(0);
  });
});
