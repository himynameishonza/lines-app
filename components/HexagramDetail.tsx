import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Hexagram } from "../data/hexagrams";
import TopNavigationBarHexagramDetail from "./navbars/TopNavigationBarHexagramDetail";
import BottomNavigationBarHexagramDetail from "./navbars/BottomNavigationBarHexagramDetail";
import BodoniText from "./BodoniText";
import { getHexagramTranslatedName } from "../utils/hexagramHelpers";
import { useTranslation } from "react-i18next";
import { HexagramDetailTab } from "../types/hexagramDetail";

interface HexagramDetailProps {
  hexagram: Hexagram;
  onBack?: () => void;
  onShare?: () => void;
}

export default function HexagramDetail({
  hexagram,
  onBack,
  onShare,
}: HexagramDetailProps) {
  const insets = useSafeAreaInsets();


  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "cs" | "en";
  const translatedName = getHexagramTranslatedName(hexagram, currentLang, t);
  
  const [activeTab, setActiveTab] = useState<HexagramDetailTab>("meaning");

  const handleTabChange = (tab: HexagramDetailTab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "meaning":
        return <MeaningContent hexagram={hexagram} />;
      case "oracle":
        return <OracleContent hexagram={hexagram} />;
      case "anatomy":
        return <AnatomyContent hexagram={hexagram} />;
      case "evolution":
        return <EvolutionContent hexagram={hexagram} />;
      default:
        return null;
    }
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#1A1A1A" }}>
      <TopNavigationBarHexagramDetail 
        onBack={onBack} 
        onShare={onShare} 
        activeTab={activeTab}
      />

      <View style={{ paddingTop: insets.top + 56 }}>
        <BodoniText
          style={{ fontSize: 40, color: "white", textAlign: "center" }}
        >
          {translatedName}
        </BodoniText>
      </View>

      {/* Content Area */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: insets.bottom + 60,
        }}
      >
        {renderContent()}
      </ScrollView>

      <BottomNavigationBarHexagramDetail
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </View>
  );
}

// Content Components for each tab
function MeaningContent({ hexagram }: { hexagram: Hexagram }) {
  const { t } = useTranslation();

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ color: "#EFDECA", fontSize: 16, lineHeight: 24 }}>
        {t(`detail.meaning`)}
      </Text>
    </View>
  );
}

function OracleContent({ hexagram }: { hexagram: Hexagram }) {
  const { t } = useTranslation();

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ color: "#EFDECA", fontSize: 16, lineHeight: 24 }}>
        {t(`detail.oracle`)}
      </Text>
    </View>
  );
}

function AnatomyContent({ hexagram }: { hexagram: Hexagram }) {
  const { t } = useTranslation();

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ color: "#EFDECA", fontSize: 16, lineHeight: 24 }}>
        {t(`detail.anatomy`)}
      </Text>
    </View>
  );
}

function EvolutionContent({ hexagram }: { hexagram: Hexagram }) {
  const { t } = useTranslation();

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ color: "#EFDECA", fontSize: 16, lineHeight: 24 }}>
        {t(`detail.evolution`)}
      </Text>
    </View>
  );
}
