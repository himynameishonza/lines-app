import React from 'react';
import { Sparkles, Eye, DraftingCompass, Activity } from 'lucide-react-native';
import { HexagramDetailTab } from '../../types/hexagramDetail';
import BottomNavigationBar, { BottomNavTab } from '../BottomNavigationBar';

interface BottomNavigationBarHexagramDetailProps {
  activeTab?: HexagramDetailTab;
  onTabChange?: (tab: HexagramDetailTab) => void;
}

export default function BottomNavigationBarHexagramDetail({
  activeTab = 'meaning',
  onTabChange,
}: BottomNavigationBarHexagramDetailProps) {
  const tabs: BottomNavTab<HexagramDetailTab>[] = [
    { id: 'meaning', Icon: Eye },
    { id: 'oracle', Icon: Sparkles },
    { id: 'anatomy', Icon: DraftingCompass },
    { id: 'evolution', Icon: Activity },
  ];

  return (
    <BottomNavigationBar
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
}
