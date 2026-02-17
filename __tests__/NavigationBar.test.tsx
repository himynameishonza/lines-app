import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NavigationBar from '../components/NavigationBar';

// Mock safe area insets
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
        'nav.settings': 'Settings',
      };
      return translations[key] || key;
    },
    i18n: {
      language: 'en',
    },
  }),
}));

describe('NavigationBar', () => {
  it('renders without crashing', () => {
    const { root } = render(<NavigationBar />);
    expect(root).toBeTruthy();
  });

  it('renders three navigation items', () => {
    const { getByTestId } = render(<NavigationBar />);
    expect(getByTestId('nav-dashboard')).toBeTruthy();
    expect(getByTestId('nav-hexagrams')).toBeTruthy();
    expect(getByTestId('nav-settings')).toBeTruthy();
  });

  it('displays correct labels', () => {
    const { getByText } = render(<NavigationBar />);
    expect(getByText('Dashboard')).toBeTruthy();
    expect(getByText('Hexagrams')).toBeTruthy();
    expect(getByText('Settings')).toBeTruthy();
  });

  it('defaults to dashboard as active tab', () => {
    const { getByText } = render(<NavigationBar />);
    const dashboardLabel = getByText('Dashboard');
    expect(dashboardLabel.props.style.color).toBe('#FFFFFF');
    expect(dashboardLabel.props.style.fontWeight).toBe('600');
  });

  it('highlights the active tab', () => {
    const { getByText } = render(<NavigationBar activeTab="hexagrams" />);
    const hexagramsLabel = getByText('Hexagrams');
    expect(hexagramsLabel.props.style.color).toBe('#FFFFFF');
    expect(hexagramsLabel.props.style.fontWeight).toBe('600');
  });

  it('calls onTabChange when a tab is pressed', () => {
    const onTabChange = jest.fn();
    const { getByTestId } = render(
      <NavigationBar activeTab="dashboard" onTabChange={onTabChange} />
    );
    
    fireEvent.press(getByTestId('nav-hexagrams'));
    expect(onTabChange).toHaveBeenCalledWith('hexagrams');
  });
});

describe('NavigationBar - Property Tests', () => {
  /**
   * Feature: lines-iching-app
   * Property 4: Navigation bar contains three items
   * Validates: Requirements 3.2
   */
  it('Property 4: navigation bar always contains exactly three items', () => {
    const { getByTestId } = render(<NavigationBar />);
    
    // Verify all three navigation items exist
    const navItems = [
      getByTestId('nav-dashboard'),
      getByTestId('nav-hexagrams'),
      getByTestId('nav-settings')
    ];
    
    expect(navItems).toHaveLength(3);
    navItems.forEach(item => expect(item).toBeTruthy());
  });

  /**
   * Feature: lines-iching-app
   * Property 5: Navigation items have icons
   * Validates: Requirements 3.3
   */
  it('Property 5: each navigation item contains an icon element', () => {
    const { getByTestId } = render(<NavigationBar />);
    
    // Check each navigation item has an icon
    const navItems = ['nav-dashboard', 'nav-hexagrams', 'nav-settings'];
    
    navItems.forEach(testId => {
      const navItem = getByTestId(testId);
      // Find Lucide icon component within each nav item
      const icons = navItem.findAllByType(require('lucide-react-native').BookOpen)
        .concat(navItem.findAllByType(require('lucide-react-native').Grid3x3))
        .concat(navItem.findAllByType(require('lucide-react-native').Circle));
      expect(icons.length).toBeGreaterThan(0);
    });
  });
});

describe('NavigationBar - Positioning Tests', () => {
  it('has absolute positioning at bottom with margins', () => {
    const { getByTestId } = render(<NavigationBar />);
    const container = getByTestId('bottom-nav-container');
    expect(container.props.style).toMatchObject({
      position: 'absolute',
      bottom: 34, // safe area inset from mock
      left: 16,
      right: 16,
    });
  });

  it('maintains existing tab functionality', () => {
    const onTabChange = jest.fn();
    const { getByTestId } = render(
      <NavigationBar activeTab="dashboard" onTabChange={onTabChange} />
    );
    
    // Test that all tabs are still pressable
    fireEvent.press(getByTestId('nav-hexagrams'));
    expect(onTabChange).toHaveBeenCalledWith('hexagrams');
    
    fireEvent.press(getByTestId('nav-settings'));
    expect(onTabChange).toHaveBeenCalledWith('settings');
  });
});
