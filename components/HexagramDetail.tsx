import React, { useState } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Hexagram } from "../data/hexagrams";
import TopNavigationBarHexagramDetail from "./navbars/TopNavigationBarHexagramDetail";
import BottomNavigationBarHexagramDetail from "./navbars/BottomNavigationBarHexagramDetail";
import BodoniText from "./BodoniText";
import { getHexagramTranslatedName } from "../utils/hexagramHelpers";
import { getHexagramImage } from "../assets/hexagrams";
import { useTranslation } from "react-i18next";
import { HexagramDetailTab } from "../types/hexagramDetail";

interface HexagramDetailProps {
  hexagram: Hexagram;
  onBack?: () => void;
  onShare?: () => void;
  changingLines?: boolean[]; // Array of 6 booleans, true if line is changing
  showHomeButton?: boolean; // Show home icon instead of back arrow
}

export default function HexagramDetail({
  hexagram,
  onBack,
  onShare,
  changingLines,
  showHomeButton = false,
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
        return <EvolutionContent hexagram={hexagram} changingLines={changingLines} />;
      default:
        return null;
    }
  };

  const HEADER_HEIGHT = 180;

  return (
    <View style={{ flex: 1, backgroundColor: "#1A1A1A" }}>
      <TopNavigationBarHexagramDetail 
        onBack={onBack} 
        onShare={onShare}
        activeTab={activeTab}
        showHomeButton={showHomeButton}
      />

      {/* Header with background image */}
      <View 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_HEIGHT + insets.top,
          zIndex: 0,
        }}
      >
        <Image
          source={getHexagramImage(hexagram.number)}
          style={{
            width: '100%',
            height: '120%',
          }}
          resizeMode="cover"
        />

        {/* Hexagram name */}
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            left: 0,
            right: 0,
            paddingHorizontal: 32,
            alignItems: 'center',
          }}
        >
          <BodoniText
            variant="bold"
            style={{
              fontSize: 48,
              lineHeight: 56,
              color: '#EFDECA',
              textAlign: 'center',
            }}
          >
            {translatedName}
          </BodoniText>
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT + insets.top,
          paddingBottom: insets.bottom + 90,
        }}
      >
        {/* Body container with background */}
        <View
          style={{
            backgroundColor: '#1A1A1A',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            minHeight: 400,
            paddingTop: 32,
          }}
        >
          {renderContent()}
        </View>
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
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "cs" | "en";

  return (
    <View style={{ paddingHorizontal: 24 }}>
      <Text 
        style={{ 
          color: "rgba(239, 222, 205, 0.8)", 
          fontSize: 16, 
          lineHeight: 28,
          fontFamily: 'System',
        }}
      >
        {hexagram.content[currentLang]?.meaning || t(`detail.meaning`)}
      </Text>
    </View>
  );
}

function OracleContent({ hexagram }: { hexagram: Hexagram }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "cs" | "en";

  return (
    <View style={{ paddingHorizontal: 24 }}>
      <Text 
        style={{ 
          color: "rgba(239, 222, 205, 0.8)", 
          fontSize: 16, 
          lineHeight: 28,
          fontFamily: 'System',
        }}
      >
        {hexagram.content[currentLang]?.oracle || t(`detail.oracle`)}
      </Text>
    </View>
  );
}

function AnatomyContent({ hexagram }: { hexagram: Hexagram }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "cs" | "en";

  return (
    <View style={{ paddingHorizontal: 24 }}>
      <Text 
        style={{ 
          color: "rgba(239, 222, 205, 0.8)", 
          fontSize: 16, 
          lineHeight: 28,
          fontFamily: 'System',
        }}
      >
        {hexagram.content[currentLang]?.anatomy || t(`detail.anatomy`)}
      </Text>
    </View>
  );
}

function EvolutionContent({ hexagram, changingLines }: { hexagram: Hexagram; changingLines?: boolean[] }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "cs" | "en";

  // Calculate transformed hexagram if there are changing lines
  let transformedHexagram: Hexagram | null = null;
  if (changingLines && changingLines.some(line => line)) {
    const transformedLines = hexagram.lines.map((line, index) => 
      changingLines[index] ? (line === 0 ? 1 : 0) as (0 | 1) : line
    );
    
    // Find the transformed hexagram
    const { hexagrams } = require('../data/hexagrams');
    transformedHexagram = hexagrams.find((h: Hexagram) => 
      h.lines.every((line, index) => line === transformedLines[index])
    ) || null;
  }

  return (
    <View style={{ paddingHorizontal: 24 }}>
      {/* Original evolution text */}
      <Text 
        style={{ 
          color: "rgba(239, 222, 205, 0.8)", 
          fontSize: 16, 
          lineHeight: 28,
          fontFamily: 'System',
          marginBottom: 24,
        }}
      >
        {hexagram.content[currentLang]?.evolution || t(`detail.evolution`)}
      </Text>

      {/* Changing Lines Section */}
      {changingLines && changingLines.some(line => line) && (
        <View style={{ marginTop: 24 }}>
          <BodoniText 
            variant="semibold"
            style={{ 
              color: "#EFDECA", 
              fontSize: 20, 
              marginBottom: 16 
            }}
          >
            {t('evolution.changingLines')}
          </BodoniText>

          {/* Current Hexagram */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ color: "rgba(239, 222, 205, 0.6)", fontSize: 12, marginBottom: 8, fontFamily: 'GeistMono_400Regular' }}>
              {t('evolution.present')}
            </Text>
            <View style={{ alignItems: 'center' }}>
              {[...Array(6)].map((_, index) => {
                const reverseIndex = 5 - index;
                const line = hexagram.lines[reverseIndex];
                const isChanging = changingLines[reverseIndex];
                
                return (
                  <View key={index} style={{ marginBottom: 12, width: 120 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      {line === 1 ? (
                        // Yang line (solid)
                        <View style={{ 
                          height: 6, 
                          flex: 1, 
                          borderRadius: 3,
                          backgroundColor: isChanging ? '#EFDECA' : '#FFFFFF'
                        }} />
                      ) : (
                        // Yin line (broken)
                        <View style={{ flexDirection: 'row', flex: 1, gap: 8 }}>
                          <View style={{ 
                            height: 6, 
                            flex: 1, 
                            borderRadius: 3,
                            backgroundColor: isChanging ? '#EFDECA' : '#FFFFFF'
                          }} />
                          <View style={{ 
                            height: 6, 
                            flex: 1, 
                            borderRadius: 3,
                            backgroundColor: isChanging ? '#EFDECA' : '#FFFFFF'
                          }} />
                        </View>
                      )}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Transformation Arrow */}
          {transformedHexagram && (
            <>
              <Text style={{ 
                color: "#EFDECA", 
                fontSize: 24, 
                textAlign: 'center', 
                marginVertical: 16 
              }}>
                ↓
              </Text>

              {/* Transformed Hexagram */}
              <View style={{ marginBottom: 24 }}>
                <Text style={{ color: "rgba(239, 222, 205, 0.6)", fontSize: 12, marginBottom: 8, fontFamily: 'GeistMono_400Regular' }}>
                  {t('evolution.future')}
                </Text>
                <View style={{ alignItems: 'center' }}>
                  {[...Array(6)].map((_, index) => {
                    const reverseIndex = 5 - index;
                    const line = transformedHexagram!.lines[reverseIndex];
                    
                    return (
                      <View key={index} style={{ marginBottom: 12, width: 120 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                          {line === 1 ? (
                            // Yang line (solid)
                            <View style={{ 
                              height: 6, 
                              flex: 1, 
                              borderRadius: 3,
                              backgroundColor: '#EFDECA'
                            }} />
                          ) : (
                            // Yin line (broken)
                            <View style={{ flexDirection: 'row', flex: 1, gap: 8 }}>
                              <View style={{ 
                                height: 6, 
                                flex: 1, 
                                borderRadius: 3,
                                backgroundColor: '#EFDECA'
                              }} />
                              <View style={{ 
                                height: 6, 
                                flex: 1, 
                                borderRadius: 3,
                                backgroundColor: '#EFDECA'
                              }} />
                            </View>
                          )}
                        </View>
                      </View>
                    );
                  })}
                </View>

                <BodoniText 
                  variant="semibold"
                  style={{ 
                    color: "#EFDECA", 
                    fontSize: 18, 
                    textAlign: 'center',
                    marginTop: 16
                  }}
                >
                  {transformedHexagram.number}. {getHexagramTranslatedName(transformedHexagram, currentLang, t)}
                </BodoniText>
              </View>
            </>
          )}
        </View>
      )}
    </View>
  );
}
