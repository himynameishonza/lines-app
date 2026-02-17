declare module 'react-native-animated-linear-gradient' {
  import { Component } from 'react';
  import { ViewStyle } from 'react-native';

  interface AnimatedLinearGradientProps {
    customColors: string[];
    speed?: number;
    points?: {
      start: { x: number; y: number };
      end: { x: number; y: number };
    };
    style?: ViewStyle;
  }

  export default class AnimatedLinearGradient extends Component<AnimatedLinearGradientProps> {}
}
