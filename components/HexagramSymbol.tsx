import React from "react";
import Svg, { Rect } from "react-native-svg";

interface HexagramSymbolProps {
  lines: (0 | 1 | null)[]; // null = unknown/placeholder
  size?: number;
  color?: string;
  changingLines?: boolean[]; // Mark which lines are changing
  highlightColor?: string; // Color for changing lines
}

export default function HexagramSymbol({
  lines,
  size = 40,
  color = "#000000",
  changingLines = [],
  highlightColor = "#FF9677"
}: HexagramSymbolProps) {
  const lineHeight = size / 12;
  const lineSpacing = size / 6;
  const gapWidth = size / 12;
  
  // Calculate actual height needed (5 spaces between 6 lines + 1 line height)
  const actualHeight = (lines.length - 1) * lineSpacing + lineHeight;

  return (
    <Svg width={size} height={actualHeight} viewBox={`0 0 ${size} ${actualHeight}`}>
      {[...lines].reverse().map((line, index) => {
        const y = index * lineSpacing;
        const originalIndex = lines.length - 1 - index;
        const isChanging = changingLines[originalIndex];
        const lineColor = isChanging ? highlightColor : color;
        
        if (line === null) {
          // Unknown/placeholder line - show as dashed outline
          const segmentWidth = (size - gapWidth) / 2;
          return (
            <React.Fragment key={index}>
              <Rect
                x={0}
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill="none"
                stroke={color}
                strokeWidth={1}
                strokeDasharray="4,4"
                opacity={0.3}
              />
              <Rect
                x={segmentWidth + gapWidth}
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill="none"
                stroke={color}
                strokeWidth={1}
                strokeDasharray="4,4"
                opacity={0.3}
              />
            </React.Fragment>
          );
        } else if (line === 1) {
          // Yang line - solid
          return (
            <Rect
              key={index}
              x={0}
              y={y}
              width={size}
              height={lineHeight}
              fill={lineColor}
            />
          );
        } else {
          // Yin line - broken
          const segmentWidth = (size - gapWidth) / 2;
          return (
            <React.Fragment key={index}>
              <Rect
                x={0}
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill={lineColor}
              />
              <Rect
                x={segmentWidth + gapWidth}
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill={lineColor}
              />
            </React.Fragment>
          );
        }
      })}
    </Svg>
  );
}
