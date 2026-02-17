import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GalleryHorizontal, LayoutGrid, Menu, Rows3, Search } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

interface TopNavigationBarHexagramsScreenProps {
  onViewModePress?: () => void;
  onSearchPress?: () => void;
  viewMode: 'carousel' | 'list' | 'grid';
}

export default function TopNavigationBarHexagramsScreen({
  onViewModePress,
  onSearchPress,
  viewMode
}: TopNavigationBarHexagramsScreenProps) {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingHorizontal: 16,
        paddingBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Toggle View Icon */}
      <TouchableOpacity
        onPress={onViewModePress}
        activeOpacity={1}
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
        }}
      >
       {viewMode === "carousel" && <GalleryHorizontal 
          size={28} 
          color="#EFDECA"
          strokeWidth={1.5}
        />}

        {viewMode === "list" && <LayoutGrid 
          size={28} 
          color="#EFDECA"
          strokeWidth={1.5}
        />}

        {viewMode === "grid" && <Rows3 
          size={28} 
          color="#EFDECA"
          strokeWidth={1.5}
        />}

      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: '#EFDECA',
          letterSpacing: 0.5,
        }}
      >
        {t('nav.hexagrams')}
      </Text>

      {/* Search Icon */}
      <TouchableOpacity
        onPress={onSearchPress}
        activeOpacity={1}
        style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent:"center"
        }}
      >
        <Search 
          size={28} 
          color="#EFDECA"
          strokeWidth={1.5}
        />
      </TouchableOpacity>
    </View>
  );
}
