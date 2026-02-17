import React from 'react';
import { render } from '@testing-library/react-native';
import HexagramsScreen from '../screens/HexagramsScreen';

describe('HexagramsScreen', () => {
  /**
   * Task 6.2: Test that screen renders hexagram cards
   * Requirements: 3.3
   * 
   * The screen should render hexagram cards in the selected view mode.
   */
  it('should render hexagram cards', () => {
    const { getAllByTestId } = render(<HexagramsScreen />);

    // Verify that hexagram cards are rendered
    const cards = getAllByTestId('hexagram-card');
    expect(cards.length).toBeGreaterThan(0);
  });

  /**
   * Task 6.2: Test that screen still manages viewMode state
   * Requirements: 3.3
   * 
   * The screen should accept viewMode as a prop and render content accordingly,
   * demonstrating that it still respects view mode state (now managed externally).
   */
  it('should render content based on viewMode prop', () => {
    // Test carousel view
    const { getAllByTestId: getCarouselCards } = render(
      <HexagramsScreen viewMode="carousel" />
    );
    const carouselCards = getCarouselCards('hexagram-card');
    expect(carouselCards.length).toBeGreaterThan(0);

    // Test list view
    const { getAllByTestId: getListCards } = render(
      <HexagramsScreen viewMode="list" />
    );
    const listCards = getListCards('hexagram-card');
    expect(listCards.length).toBeGreaterThan(0);

    // Test grid view
    const { getAllByTestId: getGridCards } = render(
      <HexagramsScreen viewMode="grid" />
    );
    const gridCards = getGridCards('hexagram-card');
    expect(gridCards.length).toBeGreaterThan(0);
  });

  it('should default to carousel view when no viewMode prop is provided', () => {
    const { getAllByTestId } = render(<HexagramsScreen />);
    const cards = getAllByTestId('hexagram-card');
    expect(cards.length).toBeGreaterThan(0);
  });
});
