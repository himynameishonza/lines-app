import React from 'react';
import { BookOpen, Bolt, GalleryHorizontalEnd } from 'lucide-react-native';
import { MainNavigationTab } from '../../types/navigation';
import BottomNavigationBar, { BottomNavTab } from '../BottomNavigationBar';

interface MainNavigationBarProps {
  activeTab?: MainNavigationTab;
  onTabChange?: (tab: MainNavigationTab) => void;
}

export default function MainNavigationBar({
  activeTab = 'dashboard',
  onTabChange,
}: MainNavigationBarProps) {
  const tabs: BottomNavTab<MainNavigationTab>[] = [
    { id: 'dashboard', Icon: BookOpen },
    { id: 'hexagrams', Icon: GalleryHorizontalEnd },
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
