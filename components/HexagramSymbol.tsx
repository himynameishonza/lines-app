import React from "react";
import Svg, { Rect } from "react-native-svg";

interface HexagramSymbolProps {
  lines: (0 | 1)[];
  size?: number;
  color?: string;
}

export default function HexagramSymbol({
  lines,
  size = 40,
  color = "#000000"
}: HexagramSymbolProps) {
  const lineHeight = size / 12;
  const lineSpacing = size / 6;
  const gapWidth = size / 12;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[...lines].reverse().map((line, index) => {
        const y = index * lineSpacing;
        
        if (line === 1) {
          // Yang line - solid
          return (
            <Rect
              key={index}
              x={0}
              y={y}
              width={size}
              height={lineHeight}
              fill={color}
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
                fill={color}
              />
              <Rect
                x={segmentWidth + gapWidth}
                y={y}
                width={segmentWidth}
                height={lineHeight}
                fill={color}
              />
            </React.Fragment>
          );
        }
      })}
    </Svg>
  );
}
