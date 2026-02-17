import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

type DetailTabType = 'meaning' | 'oracle' | 'anatomy' | 'evolution';

interface HexagramDetailNavigationProps {
  activeTab?: DetailTabType;
  onTabChange?: (tab: DetailTabType) => void;
}

export default function HexagramDetailNavigation({
  activeTab = 'meaning',
  onTabChange,
}: HexagramDetailNavigationProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const tabs = [
    { id: 'meaning' as DetailTabType, label: t('detail.meaning') },
    { id: 'oracle' as DetailTabType, label: t('detail.oracle') },
    { id: 'anatomy' as DetailTabType, label: t('detail.anatomy') },
    { id: 'evolution' as DetailTabType, label: t('detail.evolution') },
  ];

  return (
    <View
      style={{
        position: 'absolute',
        bottom: insets.bottom,
        left: 16,
        right: 16,
        alignItems: 'center',
        zIndex: 999,
        elevation: 999,
      }}
      testID="hexagram-detail-nav"
      pointerEvents="box-none"
    >
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#E0F7FA',
          borderRadius: 100,
          padding: 4,
          elevation: 5,
          borderWidth: 1,
          borderColor: "rgba(6, 182, 212, 0.05)"
        }}
        pointerEvents="auto"
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              paddingHorizontal: 16,
              backgroundColor: activeTab === tab.id ? '#00BCD4' : 'transparent',
              borderRadius: 100,
            }}
            testID={`detail-nav-${tab.id}`}
            onPress={() => onTabChange?.(tab.id)}
            activeOpacity={0.7}
          >
            <Text
              style={{
                fontSize: 11,
                color: activeTab === tab.id ? '#FFFFFF' : '#00838F',
                fontWeight: activeTab === tab.id ? '600' : '500',
              }}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
