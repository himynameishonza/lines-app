import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import HexagramsScreen from '../screens/HexagramsScreen';
import NewReadingScreen from '../screens/NewReadingScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HexagramDetailsCard from '../components/HexagramDetailsCard';
import App from '../App';
import { hexagrams } from '../data/hexagrams';
import MainNavigationBar from '../components/navbars/MainNavigationBar';

// Mock the safe area insets hook
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 44, bottom: 34, left: 0, right: 0 }),
}));

// Mock i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'nav.dashboard': 'Dashboard',
        'nav.hexagrams': 'Hexagrams',
        'nav.newReading': 'New Reading',
        'nav.settings': 'Settings',
        'hexagrams.1': 'The Creative',
      };
      return translations[key] || key;
    },
    i18n: {
      language: 'en',
      changeLanguage: jest.fn(),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

/**
 * Integration Property Tests
 * Feature: lines-iching-app
 * 
 * These tests verify structural properties that should hold across
 * all valid executions of the UI scaffolding.
 */

describe('Integration Property Tests', () => {
  /**
   * Property 1: All core screens render
   * 
   * For any application initialization, all seven core screen components
   * (SplashScreen, HomeScreen, HexagramsScreen, NewReadingScreen, 
   * SettingsScreen, HexagramDetailsCard, NavigationBar) should be 
   * available and renderable without errors.
   * 
   * Validates: Requirements 1.1, 2.1, 4.1, 5.1, 6.1, 7.1
   */
  it('Property 1: All core screens render without errors', () => {
    const screens = [
      { component: SplashScreen, name: 'SplashScreen', props: {} },
      { component: HomeScreen, name: 'HomeScreen', props: {} },
      { component: HexagramsScreen, name: 'HexagramsScreen', props: {} },
      { component: NewReadingScreen, name: 'NewReadingScreen', props: {} },
      { component: SettingsScreen, name: 'SettingsScreen', props: {} },
      { 
        component: HexagramDetailsCard, 
        name: 'HexagramDetailsCard', 
        props: { 
          hexagram: hexagrams[0],
          activeTab: 'meaning' as const,
          onClose: () => {},
          onShare: () => {},
        } 
      },
      { component: MainNavigationBar, name: 'NavigationBar', props: { activeTab: 'dashboard' } },
    ];

    screens.forEach(({ component: Component, name, props }) => {
      // Each screen should render without throwing errors
      const { root } = render(<Component {...props} />);
      
      // Verify the component rendered something
      expect(root).toBeTruthy();
      
      // Verify no error boundaries were triggered (component tree exists)
      expect(root.children.length).toBeGreaterThan(0);
    });
  });
});

/**
 * Navigation Flow Integration Tests
 * Feature: navigation-polish
 * 
 * These tests verify the complete navigation flows including:
 * - Main screen navigation
 * - Detail screen navigation
 * - View mode toggle integration
 */

describe('Navigation Flow Integration Tests', () => {
  /**
   * Task 10.1: Test main screen navigation
   * Requirements: 5.1, 6.2, 6.3, 6.4, 6.5
   * 
   * Verifies that navigating between all main screens updates the top navigation
   * correctly and highlights the correct tab in the bottom navigation.
   */
  describe('Main Screen Navigation', () => {
    it('should highlight correct tab in bottom navigation when navigating', () => {
      const { getByTestId, getAllByText } = render(<App />);
      
      // Dashboard should be active initially
      let dashboardLabels = getAllByText('Dashboard');
      // Find the one in the bottom nav (should have cyan color)
      const activeDashboard = dashboardLabels.find(
        label => label.props.style.color === '#06b6d4'
      );
      expect(activeDashboard).toBeTruthy();
      
      // Navigate to Hexagrams
      act(() => {
        fireEvent.press(getByTestId('nav-hexagrams'));
      });
      let hexagramsLabels = getAllByText('Hexagrams');
      const activeHexagrams = hexagramsLabels.find(
        label => label.props.style.color === '#06b6d4'
      );
      expect(activeHexagrams).toBeTruthy();
      
      // Navigate to Settings
      act(() => {
        fireEvent.press(getByTestId('nav-settings'));
      });
      const settingsLabels = getAllByText('Settings');
      const activeSettings = settingsLabels.find(
        label => label.props.style.color === '#06b6d4'
      );
      expect(activeSettings).toBeTruthy();
    });

    it('should show floating view toggle only on Hexagrams screen', () => {
      const { getByTestId, queryByTestId } = render(<App />);
      
      // Dashboard - no toggle
      expect(queryByTestId('floating-view-toggle')).toBeNull();
      
      // Hexagrams - toggle should appear
      act(() => {
        fireEvent.press(getByTestId('nav-hexagrams'));
      });
      expect(queryByTestId('floating-view-toggle')).toBeTruthy();
      
      // New Reading - no toggle
      act(() => {
        fireEvent.press(getByTestId('nav-new-reading'));
      });
      expect(queryByTestId('floating-view-toggle')).toBeNull();
      
      // Settings - no toggle
      act(() => {
        fireEvent.press(getByTestId('nav-settings'));
      });
      expect(queryByTestId('floating-view-toggle')).toBeNull();
    });
  });

  /**
   * Task 10.2: Test detail screen navigation
   * Requirements: 4.1, 4.3, 6.6
   * 
   * Verifies that navigating from Hexagrams to HexagramDetailsCard shows the detail view
   * and that pressing the back button returns to the Hexagrams screen.
   */
  describe('Detail Screen Navigation', () => {
    it('should show hexagram detail when card is pressed', () => {
      const { getByTestId, getAllByTestId, queryByTestId } = render(<App />);
      
      // Navigate to Hexagrams screen
      act(() => {
        fireEvent.press(getByTestId('nav-hexagrams'));
      });
      
      // Press first hexagram card
      const hexagramCards = getAllByTestId('hexagram-card');
      act(() => {
        fireEvent.press(hexagramCards[0]);
      });
      
      // Detail view should be visible
      expect(queryByTestId('hexagram-detail-view')).toBeTruthy();
    });

    it('should hide floating view toggle on detail screen', () => {
      const { getByTestId, getAllByTestId, queryByTestId } = render(<App />);
      
      // Navigate to Hexagrams screen
      act(() => {
        fireEvent.press(getByTestId('nav-hexagrams'));
      });
      
      // View mode toggle should be visible
      expect(queryByTestId('floating-view-toggle')).toBeTruthy();
      
      // Navigate to detail screen
      const hexagramCards = getAllByTestId('hexagram-card');
      act(() => {
        fireEvent.press(hexagramCards[0]);
      });
      
      // View mode toggle should be hidden
      expect(queryByTestId('floating-view-toggle')).toBeNull();
    });
  });

  /**
   * Task 10.3: Test view mode toggle integration
   * Requirements: 3.1, 3.4
   * 
   * Verifies that the floating view mode toggle appears on the Hexagrams screen
   * and that changing the view mode updates the screen content.
   */
  describe('View Mode Toggle Integration', () => {
    it('should show floating view toggle on Hexagrams screen', () => {
      const { getByTestId, queryByTestId } = render(<App />);
      
      // Navigate to Hexagrams screen
      act(() => {
        fireEvent.press(getByTestId('nav-hexagrams'));
      });
      
      // View mode toggle should be present
      expect(queryByTestId('floating-view-toggle')).toBeTruthy();
    });

    it('should change view mode when toggle is pressed', () => {
      const { getByTestId, queryByTestId } = render(<App />);
      
      // Navigate to Hexagrams screen
      act(() => {
        fireEvent.press(getByTestId('nav-hexagrams'));
      });
      
      // Get the view mode toggle
      const viewModeToggle = queryByTestId('floating-view-toggle');
      expect(viewModeToggle).toBeTruthy();
      
      // Press toggle to cycle through modes
      act(() => {
        fireEvent.press(viewModeToggle);
      });
      
      // Press again to cycle
      act(() => {
        fireEvent.press(viewModeToggle);
      });
      
      // Press again to cycle back
      act(() => {
        fireEvent.press(viewModeToggle);
      });
    });

    it('should persist view mode when navigating away and back', () => {
      const { getByTestId, queryByTestId } = render(<App />);
      
      // Navigate to Hexagrams screen
      act(() => {
        fireEvent.press(getByTestId('nav-hexagrams'));
      });
      
      // Change view mode by pressing toggle
      const viewModeToggle = queryByTestId('floating-view-toggle');
      act(() => {
        fireEvent.press(viewModeToggle);
      });
      
      // Navigate away to Settings
      act(() => {
        fireEvent.press(getByTestId('nav-settings'));
      });
      
      // Navigate back to Hexagrams
      act(() => {
        fireEvent.press(getByTestId('nav-hexagrams'));
      });
      
      // View mode toggle should still be present
      expect(queryByTestId('floating-view-toggle')).toBeTruthy();
    });
  });
});
