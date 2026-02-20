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
        paddingTop: insets.top + 12.5,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GeistMonoText
        style={{
          fontSize: 16,
          color: '#06283F',
        }}
        variant='medium'
      >
        {t('nav.settings')}
      </GeistMonoText>
    </View>
  );
}
