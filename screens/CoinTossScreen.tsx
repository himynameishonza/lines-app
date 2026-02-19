import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import BodoniText from '../components/BodoniText';
import GeistMonoText from '../components/GeistMonoText';
import WizardNavigationBar from '../components/navbars/WizardNavigationBar';
import { hexagrams, Hexagram } from '../data/hexagrams';

interface CoinTossScreenProps {
  onClose: () => void;
  onComplete: (hexagram: Hexagram, changingLines: boolean[]) => void;
}

type LineValue = 0 | 1; // 0 = yin, 1 = yang
type LineType = 'yin' | 'yang' | 'oldYin' | 'oldYang';

interface Line {
  value: LineValue;
  type: LineType;
  changing: boolean;
}

export default function CoinTossScreen({ onClose, onComplete }: CoinTossScreenProps) {
  const { t } = useTranslation();
  const [lines, setLines] = useState<Line[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastToss, setLastToss] = useState<{ coins: number[], sum: number } | null>(null);

  const tossCoins = () => {
    if (isAnimating || lines.length >= 6) return;

    setIsAnimating(true);

    // Simulate coin toss - each coin is either 2 (tails) or 3 (heads)
    const coin1 = Math.random() < 0.5 ? 2 : 3;
    const coin2 = Math.random() < 0.5 ? 2 : 3;
    const coin3 = Math.random() < 0.5 ? 2 : 3;
    const sum = coin1 + coin2 + coin3;

    setLastToss({ coins: [coin1, coin2, coin3], sum });

    // Determine line type based on sum
    // 6 = Old Yin (changing to Yang)
    // 7 = Young Yang
    // 8 = Young Yin
    // 9 = Old Yang (changing to Yin)
    let lineValue: LineValue;
    let lineType: LineType;
    let changing: boolean;

    if (sum === 6) {
      lineValue = 0; // Yin
      lineType = 'oldYin';
      changing = true;
    } else if (sum === 7) {
      lineValue = 1; // Yang
      lineType = 'yang';
      changing = false;
    } else if (sum === 8) {
      lineValue = 0; // Yin
      lineType = 'yin';
      changing = false;
    } else { // sum === 9
      lineValue = 1; // Yang
      lineType = 'oldYang';
      changing = true;
    }

    setTimeout(() => {
      setLines([...lines, { value: lineValue, type: lineType, changing }]);
      setIsAnimating(false);
    }, 600);
  };

  const handleComplete = () => {
    if (lines.length !== 6) return;

    // Build hexagram from lines (bottom to top)
    const hexagramLines: (0 | 1)[] = lines.map(l => l.value);
    const changingLinesArray: boolean[] = lines.map(l => l.changing);
    
    // Find matching hexagram
    const hexagram = hexagrams.find(h => 
      h.lines.every((line, index) => line === hexagramLines[index])
    );

    if (hexagram) {
      onComplete(hexagram, changingLinesArray);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'bottom']}>
      <WizardNavigationBar 
        onBack={undefined}
        onClose={onClose}
        showBack={false}
      />

      <View className="flex-1 px-6">
        {/* Title */}
        <View className="pt-6 pb-8">
          <BodoniText variant="bold" className="text-3xl text-white mb-2">
            {t('coinToss.title')}
          </BodoniText>
          <GeistMonoText className="text-sm text-gray-800">
            {t('coinToss.instruction')}
          </GeistMonoText>
        </View>

        {/* Hexagram Display */}
        <View className="flex-1 justify-center items-center mb-8">
          <View className="w-full max-w-[200px]">
            {[...Array(6)].map((_, index) => {
              // Reverse index to draw from bottom to top
              const reverseIndex = 5 - index;
              const line = lines[reverseIndex];
              const lineNumber = reverseIndex + 1;
              
              return (
                <View key={index} className="mb-4">
                  {line ? (
                    <View>
                      <View className="flex-row items-center justify-center mb-1">
                        {line.value === 1 ? (
                          // Yang line (solid)
                          <View className={`h-2 flex-1 rounded-full ${line.changing ? 'bg-[#EFDECA]' : 'bg-white'}`} />
                        ) : (
                          // Yin line (broken)
                          <View className="flex-row flex-1 gap-2">
                            <View className={`h-2 flex-1 rounded-full ${line.changing ? 'bg-[#EFDECA]' : 'bg-white'}`} />
                            <View className={`h-2 flex-1 rounded-full ${line.changing ? 'bg-[#EFDECA]' : 'bg-white'}`} />
                          </View>
                        )}
                      </View>
                      {line.changing && (
                        <GeistMonoText className="text-[10px] text-[#EFDECA] text-center">
                          {t('coinToss.changingLine')}
                        </GeistMonoText>
                      )}
                    </View>
                  ) : (
                    <View className="h-2 flex-1 bg-gray-800 rounded-full opacity-30" />
                  )}
                </View>
              );
            })}
          </View>

          {/* Line counter */}
          <GeistMonoText className="text-gray-500 text-sm mt-6">
            {t('coinToss.line')} {lines.length}/6
          </GeistMonoText>
        </View>

        {/* Coin Display */}
        {lastToss && (
          <View className="mb-6 bg-gray-900 border border-gray-700 rounded-2xl p-4">
            <GeistMonoText className="text-gray-400 text-xs text-center mb-3">
              {t('coinToss.lastToss')}
            </GeistMonoText>
            <View className="flex-row justify-center items-center gap-3 mb-3">
              {lastToss.coins.map((coin, idx) => (
                <View key={idx} className="items-center flex-1">
                  <View className={`w-16 h-16 rounded-full ${coin === 3 ? 'bg-[#EFDECA]' : 'bg-gray-700'} items-center justify-center px-2`}>
                    <GeistMonoText variant="medium" className={`text-[10px] ${coin === 3 ? 'text-background' : 'text-gray-400'} text-center`}>
                      {coin === 3 ? t('coinToss.heads') : t('coinToss.tails')}
                    </GeistMonoText>
                  </View>
                  <GeistMonoText className="text-gray-500 text-[10px] mt-1">
                    {coin}
                  </GeistMonoText>
                </View>
              ))}
            </View>
            <GeistMonoText className="text-gray-400 text-xs text-center">
              {t('coinToss.sum')}: {lastToss.sum}
            </GeistMonoText>
          </View>
        )}

        {/* Action Button */}
        <View className="pb-6">
          {lines.length < 6 ? (
            <TouchableOpacity 
              className={`bg-[#EFDECA] rounded-full py-4 ${isAnimating ? 'opacity-50' : 'active:opacity-80'}`}
              activeOpacity={0.8}
              onPress={tossCoins}
              disabled={isAnimating}
            >
              <GeistMonoText variant="medium" className="text-background text-center text-sm tracking-wide">
                {t('coinToss.tossCoins')}
              </GeistMonoText>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity 
              className="bg-[#EFDECA] rounded-full py-4 active:opacity-80"
              activeOpacity={0.8}
              onPress={handleComplete}
            >
              <GeistMonoText variant="medium" className="text-background text-center text-sm tracking-wide">
                {t('coinToss.complete')}
              </GeistMonoText>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
