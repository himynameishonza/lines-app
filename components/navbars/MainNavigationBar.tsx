import React from 'react';
import { BookOpen, Bolt, Home } from 'lucide-react-native';
import BottomNavigationBar, { BottomNavTab } from '../BottomNavigationBar';
import { TMainNavigationTab } from '../../types/generic';

interface MainNavigationBarProps {
  activeTab?: TMainNavigationTab;
  onTabChange?: (tab: TMainNavigationTab) => void;
}

export default function MainNavigationBar({
  activeTab = 'dashboard',
  onTabChange,
}: MainNavigationBarProps) {
  const tabs: BottomNavTab<TMainNavigationTab>[] = [
    { id: 'dashboard', Icon: Home },
    { id: 'hexagrams', Icon: BookOpen },
    { id: 'settings', Icon: Bolt },
  ];

  return (
    <BottomNavigationBar
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
}
