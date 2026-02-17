import React from 'react';
import { View, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

export default function TopNavigationBarSettingscreen(){
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  
  return (
    <View
      style={{
        paddingTop: insets.top + 12.5,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: '#EFDECA',
          letterSpacing: 0.5,
        }}
      >
        {t('nav.settings')}
      </Text>
    </View>
  );
}
