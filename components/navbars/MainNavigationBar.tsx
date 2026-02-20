import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BookOpen, Bolt, GalleryHorizontalEnd } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MainNavigationTab } from '../../types/navigation';

interface MainNavigationBarProps {
  activeTab?: MainNavigationTab;
  onTabChange?: (tab: MainNavigationTab) => void;
}

export default function MainNavigationBar({
  activeTab = 'dashboard',
  onTabChange,
}: MainNavigationBarProps) {
  const insets = useSafeAreaInsets();

  const tabs: Array<{ id: MainNavigationTab; Icon: typeof BookOpen }> = [
    { id: 'dashboard', Icon: BookOpen },
    { id: 'hexagrams', Icon: GalleryHorizontalEnd },
    { id: 'settings', Icon: Bolt },
  ];

  return (
    <View
      style={{
        position: 'absolute',
        bottom: insets.bottom + 8,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 10
      }}
      testID="bottom-nav-container"
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          paddingVertical: 0,
          paddingHorizontal: 20
        }}
      >
        {tabs.map((tab) => {
          const IconComponent = tab.Icon;
          return (
            <TouchableOpacity
              key={tab.id}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: "33%",
                height: 44,
              }}
              testID={`nav-${tab.id}`}
              onPress={() => onTabChange?.(tab.id)}
              activeOpacity={1}
            >
              <IconComponent
                size={28}
                color={activeTab === tab.id ? '#06283F' : '#87A5A6'}
                strokeWidth={1.5}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
