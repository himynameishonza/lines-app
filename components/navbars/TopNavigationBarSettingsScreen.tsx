import React from 'react';
import { useTranslation } from 'react-i18next';
import TopNavigationBar from '../TopNavigationBar';

export default function TopNavigationBarSettingsScreen() {
  const { t } = useTranslation();
  
  return (
    <TopNavigationBar
      justifyContent="center"
      title={t('nav.settings')}
    />
  );
}
