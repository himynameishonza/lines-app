import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HexagramCard from '../components/HexagramCard';

describe('HexagramCard', () => {
  /**
   * Feature: lines-iching-app, Property 1: HexagramCard renders in all variants
   * Validates: Requirements 4.6
   * 
   * This property test verifies that HexagramCard can render successfully
   * in all three supported variants: carousel, list, and grid.
   */
  it('Property 1: renders in all variants (carousel, list, grid)', () => {
    const variants: Array<'carousel' | 'list' | 'grid'> = ['carousel', 'list', 'grid'];
    const testHexagram = {
      hexagramNumber: 1,
      name: 'The Creative',
    };

    variants.forEach(variant => {
      const { getByTestId, getByText } = render(
        <HexagramCard
          hexagramNumber={testHexagram.hexagramNumber}
          name={testHexagram.name}
          variant={variant}
        />
      );

      // Verify the card renders
      const card = getByTestId('hexagram-card');
      expect(card).toBeTruthy();

      // Verify the name is displayed
      const nameElement = getByText(testHexagram.name);
      expect(nameElement).toBeTruthy();

      // Verify the hexagram number is displayed (format varies by variant)
      const numberText = variant === 'list' 
        ? `#${testHexagram.hexagramNumber}`
        : `Hexagram ${testHexagram.hexagramNumber}`;
      const numberElement = getByText(numberText);
      expect(numberElement).toBeTruthy();
    });
  });

  it('should invoke onPress callback when card is pressed', () => {
    const onPressMock = jest.fn();
    const testHexagram = {
      hexagramNumber: 1,
      name: 'The Creative',
    };

    const { getByTestId } = render(
      <HexagramCard
        hexagramNumber={testHexagram.hexagramNumber}
        name={testHexagram.name}
        variant="carousel"
        onPress={onPressMock}
      />
    );

    const card = getByTestId('hexagram-card');
    fireEvent.press(card);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should pass hexagram data to onPress callback', () => {
    const onPressMock = jest.fn();
    const testHexagram = {
      hexagramNumber: 42,
      name: 'Increase',
    };

    const { getByTestId } = render(
      <HexagramCard
        hexagramNumber={testHexagram.hexagramNumber}
        name={testHexagram.name}
        variant="grid"
        onPress={onPressMock}
      />
    );

    const card = getByTestId('hexagram-card');
    fireEvent.press(card);

    expect(onPressMock).toHaveBeenCalledWith({
      hexagramNumber: testHexagram.hexagramNumber,
      name: testHexagram.name,
    });
  });
});
