import React from 'react';
import { render } from '@testing-library/react-native';
import { ActivityIndicator } from 'react-native';
import SplashScreen from '../screens/SplashScreen';

describe('SplashScreen - Property Tests', () => {
  /**
   * Feature: lines-iching-app
   * Property 2: Splash screen contains required elements
   * Validates: Requirements 1.2, 1.3
   * 
   * This property test verifies that the SplashScreen always contains
   * both a graphics element and a loading indicator element.
   */
  it('Property 2: splash screen contains both graphics and loading indicator', () => {
    const { getByTestId, UNSAFE_getByType } = render(<SplashScreen />);

    // Verify graphics element exists (logo/graphic)
    const graphicsElement = getByTestId('splash-logo');
    expect(graphicsElement).toBeTruthy();

    // Verify loading indicator exists
    const loadingIndicator = getByTestId('splash-loading');
    expect(loadingIndicator).toBeTruthy();

    // Verify the loading indicator is actually an ActivityIndicator component
    const activityIndicators = UNSAFE_getByType(ActivityIndicator);
    expect(activityIndicators).toBeTruthy();
  });
});
