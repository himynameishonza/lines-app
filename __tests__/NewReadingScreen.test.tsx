import React from 'react';
import { render } from '@testing-library/react-native';
import NewReadingScreen from '../screens/NewReadingScreen';

describe('NewReadingScreen Property Tests', () => {
  /**
   * Feature: lines-iching-app, Property 10: New reading screen contains all input elements
   * Validates: Requirements 6.2, 6.3, 6.4, 6.5
   * 
   * This property test verifies that the NewReadingScreen always contains
   * all required input elements: question input field, instruction text,
   * random hexagram button, and coin toss method button.
   */
  it('Property 10: contains all input elements', () => {
    const { getByPlaceholderText, getByText } = render(<NewReadingScreen />);

    // Verify question input field exists (Requirement 6.2)
    const questionInput = getByPlaceholderText('Enter your question...');
    expect(questionInput).toBeTruthy();

    // Verify instructions text exists (Requirement 6.3)
    const instructionsText = getByText(/How to ask your question:/);
    expect(instructionsText).toBeTruthy();

    // Verify random hexagram button exists (Requirement 6.4)
    const randomButton = getByText('Random Hexagram');
    expect(randomButton).toBeTruthy();

    // Verify coin toss method button exists (Requirement 6.5)
    const coinTossButton = getByText('Coin Toss Method');
    expect(coinTossButton).toBeTruthy();
  });
});
