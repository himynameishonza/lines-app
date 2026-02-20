import React from 'react';
import { Text, TextProps } from 'react-native';
import { styled } from 'nativewind';

interface GeistMonoTextProps extends TextProps {
  variant?: 'regular' | 'medium' | 'bold';
  children: React.ReactNode;
  className?: string;
}

const StyledText = styled(Text);

/**
 * GeistMonoText component for headlines and decorative text
 * Uses Geist Mono font from Google Fonts
 */
export default function GeistMonoText({ 
  variant = 'regular', 
  style, 
  className,
  children, 
  ...props 
}: GeistMonoTextProps) {
  const fontFamily = {
    regular: 'GeistMono_400Regular',
    medium: 'GeistMono_500Medium',
    bold: 'GeistMono_700Bold'
  }[variant];

  return (
    <StyledText style={[{ fontFamily }, style]} className={className} {...props}>
      {children}
    </StyledText>
  );
}
