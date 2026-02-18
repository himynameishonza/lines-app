import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Sparkles, Eye, DraftingCompass, Activity } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HexagramDetailTab } from '../../types/hexagramDetail';

interface BottomNavigationBarHexagramDetailProps {
  activeTab?: HexagramDetailTab;
  onTabChange?: (tab: HexagramDetailTab) => void;
}

export default function BottomNavigationBarHexagramDetail({
  activeTab = 'meaning',
  onTabChange,
}: BottomNavigationBarHexagramDetailProps) {
  const insets = useSafeAreaInsets();

  const tabs: Array<{ id: HexagramDetailTab; Icon: typeof Eye }> = [
    { id: 'meaning', Icon: Eye },
    { id: 'oracle', Icon: Sparkles },
    { id: 'anatomy', Icon: DraftingCompass },
    { id: 'evolution', Icon: Activity },
  ];

  return (
    <View
      style={{
        position: 'absolute',
        bottom: insets.bottom + 8,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          paddingVertical: 0,
          paddingHorizontal: 20,
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
                width: '25%',
                height: 44,
              }}
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
