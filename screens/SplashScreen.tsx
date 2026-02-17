import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50">
      <View className="mb-8 w-32 h-32 bg-cyan-600 rounded-2xl" testID="splash-logo" />
      <ActivityIndicator size="large" color="#06b6d4" testID="splash-loading" />
    </View>
  );
}
