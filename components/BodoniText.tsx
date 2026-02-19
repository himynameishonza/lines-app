import React from 'react';
import { Text, TextProps } from 'react-native';
import { styled } from 'nativewind';

interface BodoniTextProps extends TextProps {
  variant?: 'regular' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
  className?: string;
}

const StyledText = styled(Text);

/**
 * BodoniText component for headlines and decorative text
 * Uses Bodoni Moda font from Google Fonts
 */
export default function BodoniText({ 
  variant = 'regular', 
  style, 
  className,
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
    <StyledText style={[{ fontFamily }, style]} className={className} {...props}>
      {children}
    </StyledText>
  );
}
