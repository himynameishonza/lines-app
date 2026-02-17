import React from 'react';
import { Text, TextProps } from 'react-native';

interface BodoniTextProps extends TextProps {
  variant?: 'regular' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
}

/**
 * BodoniText component for headlines and decorative text
 * Uses Bodoni Moda font from Google Fonts
 */
export default function BodoniText({ 
  variant = 'regular', 
  style, 
  children, 
  ...props 
}: BodoniTextProps) {
  const fontFamily = {
    regular: 'BodoniModa_400Regular',
    medium: 'BodoniModa_500Medium',
    semibold: 'BodoniModa_600SemiBold',
    bold: 'BodoniModa_700Bold',
  }[variant];

  return (
    <Text style={[{ fontFamily }, style]} {...props}>
      {children}
    </Text>
  );
}
