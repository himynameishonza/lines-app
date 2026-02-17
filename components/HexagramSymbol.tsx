import React from 'react';
import { View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface HexagramSymbolProps {
  lines: ('yin' | 'yang')[]; // Array of 6 lines, bottom to top
  size?: number; // Height and width (square aspect ratio)
  color?: string;
}

export default function HexagramSymbol({
  lines,
  size = 60,
  color = '#000000',
}: HexagramSymbolProps) {
  // Validate that we have exactly 6 lines
  if (lines.length !== 6) {
    console.warn('HexagramSymbol requires exactly 6 lines');
    return null;
  }

  // Make the symbol more square by adjusting proportions
  const lineHeight = size * 0.08; // Height of each line
  const totalLinesHeight = lineHeight * 6; // Total height of all lines
  const totalSpacing = size * 0.5; // Use only 50% of size for vertical space
  const lineSpacing = totalSpacing / 7; // Space above, below, and between lines
  const yinGap = size * 0.12; // Gap in the middle of yin lines
  const lineWidth = size * 0.9; // Width of lines (90% of size)
  const startX = size * 0.05; // Left margin (5% on each side)
  
  // Center the lines vertically
  const totalHeight = totalLinesHeight + lineSpacing * 5; // 5 gaps between 6 lines
  const startY = (size - totalHeight) / 2;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {lines.map((lineType, index) => {
          // Lines are drawn from bottom to top (index 0 = bottom)
          const y = startY + (5 - index) * (lineHeight + lineSpacing);

          if (lineType === 'yang') {
            // Yang line: solid (—)
            return (
              <Rect
                key={index}
                x={startX}
                y={y}
                width={lineWidth}
                height={lineHeight}
                fill={color}
                rx={lineHeight / 4}
              />
            );
          } else {
            // Yin line: broken (- -)
            const segmentWidth = (lineWidth - yinGap) / 2;
            return (
              <React.Fragment key={index}>
                <Rect
                  x={startX}
                  y={y}
                  width={segmentWidth}
                  height={lineHeight}
                  fill={color}
                  rx={lineHeight / 4}
                />
                <Rect
                  x={startX + segmentWidth + yinGap}
                  y={y}
                  width={segmentWidth}
                  height={lineHeight}
                  fill={color}
                  rx={lineHeight / 4}
                />
              </React.Fragment>
            );
          }
        })}
      </Svg>
    </View>
  );
}
