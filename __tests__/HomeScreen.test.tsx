import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

describe('HomeScreen', () => {
  /**
   * Feature: lines-iching-app, Property 3: Home screen contains list structure
   * Validates: Requirements 2.2, 2.3
   * 
   * This property test verifies that HomeScreen contains a list layout
   * container with placeholder list items.
   */
  it('Property 3: contains list structure with placeholder items', () => {
    const { getByText, getAllByText } = render(<HomeScreen />);

    // Verify the screen header is present
    const header = getByText('My Readings');
    expect(header).toBeTruthy();

    // Verify that placeholder reading items are rendered
    // Based on the data/readings.ts, there should be 5 placeholder readings
    const datePattern = /\d{4}-\d{2}-\d{2}/;
    const dateElements = getAllByText(datePattern);
    expect(dateElements.length).toBeGreaterThan(0);

    // Verify that hexagram names or numbers are displayed in the list
    // Each reading should display either a hexagram name or "Hexagram X"
    const hexagramPattern = /Hexagram \d+|The Creative|The Receptive|Waiting|Conflict|The Army/;
    const hexagramElements = getAllByText(hexagramPattern);
    expect(hexagramElements.length).toBeGreaterThan(0);
  });
});
