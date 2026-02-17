import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '../screens/SettingsScreen';

// Mock i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: jest.fn(),
    },
  }),
}));

describe('SettingsScreen', () => {
  it('renders without crashing', () => {
    const { root } = render(<SettingsScreen />);
    expect(root).toBeTruthy();
  });

  it('displays Czech language option', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('Čeština')).toBeTruthy();
  });

  it('displays English language option', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('English')).toBeTruthy();
  });

  it('shows checkmark for current language', () => {
    const { UNSAFE_getAllByType } = render(<SettingsScreen />);
    const icons = UNSAFE_getAllByType(require('lucide-react-native').CheckCircle);
    // Should have at least one checkmark icon for the active language
    expect(icons.length).toBeGreaterThan(0);
  });
});

describe('SettingsScreen Property Tests', () => {
  /**
   * Feature: lines-iching-app, Property 9: Settings screen contains language selector
   * Validates: Requirements 5.2, 5.3
   * 
   * This property test verifies that the SettingsScreen always contains
   * language selection options with Czech and English available.
   */
  it('Property 9: contains language selector with available options', () => {
    const { getByText } = render(<SettingsScreen />);

    // Verify both language options are available
    expect(getByText('Čeština')).toBeTruthy();
    expect(getByText('English')).toBeTruthy();
  });
});
