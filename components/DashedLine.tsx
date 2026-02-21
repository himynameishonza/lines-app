import React from "react";
import { View } from "react-native";
import Svg, { Line } from "react-native-svg";

interface DashedLineProps {
  color?: string;
  dashLength?: number;
  dashGap?: number;
  strokeWidth?: number;
}

export default function DashedLine({
  color = "#42436b40",
  dashLength = 3,
  dashGap = 3,
  strokeWidth = 1,
}: DashedLineProps) {
  return (
    <View style={{ height: strokeWidth, marginHorizontal: 8 }}>
      <Svg height={strokeWidth} width="100%">
        <Line
          x1="0"
          y1={strokeWidth / 2}
          x2="100%"
          y2={strokeWidth / 2}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLength} ${dashGap}`}
        />
      </Svg>
    </View>
  );
}
