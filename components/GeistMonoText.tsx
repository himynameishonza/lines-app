import React from 'react';
import { Text, TextProps } from 'react-native';

interface GeistMonoTextProps extends TextProps {
  variant?: 'regular' | 'medium';
  children: React.ReactNode;
}

/**
 * GeistMonoText component for headlines and decorative text
 * Uses Geist Mono font from Google Fonts
 */
export default function BodoniText({ 
  variant = 'regular', 
  style, 
  children, 
  ...props 
}: GeistMonoTextProps) {
  const fontFamily = {
    regular: 'GeistMono_400Regular',
    medium: 'GeistMono_500Medium',
  }[variant];

  return (
    <Text style={[{ fontFamily }, style]} {...props}>
      {children}
    </Text>
  );
}
