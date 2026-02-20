import React from 'react';
import { View, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import GeistMonoText from '../GeistMonoText';

export default function TopNavigationBarSettingscreen(){
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  
  return (
    <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            paddingTop: insets.top,
            paddingHorizontal: 16,
            paddingBottom: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
      <GeistMonoText
        style={{
          fontSize: 16,
          color: '#06283F',
          paddingVertical: 10
        }}
        variant='medium'
      >
        {t('nav.settings')}
      </GeistMonoText>
    </View>
  );
}
