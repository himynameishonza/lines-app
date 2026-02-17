import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BookOpen, Bolt, GalleryHorizontalEnd } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MainNavigationBarProps {
  activeTab?: 'dashboard' | 'hexagrams' | 'settings';
  onTabChange?: (tab: 'dashboard' | 'hexagrams' | 'settings') => void;
}

export default function MainNavigationBar({
  activeTab = 'dashboard',
  onTabChange,
}: MainNavigationBarProps) {
  const insets = useSafeAreaInsets();

  const tabs = [
    { id: 'dashboard' as const, Icon: BookOpen },
    { id: 'hexagrams' as const, Icon: GalleryHorizontalEnd },
    { id: 'settings' as const, Icon: Bolt },
  ];

  return (
    <View
      style={{
        position: 'absolute',
        bottom: insets.bottom + 8,
        left: 0,
        right: 0,
        alignItems: 'center',
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
                color={activeTab === tab.id ? '#EFDECA' : 'rgba(239, 222, 205, 0.4)'}
                strokeWidth={1.5}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
