import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
} from "react-native";
import { useTranslation } from "react-i18next";
import GeistMonoText from "../components/typography/GeistMonoText";
import Button from "../components/Button";
import {
  Activity,
  ArrowDown,
  CheckIcon,
  DraftingCompass,
  Eye,
  Sparkles,
} from "lucide-react-native";
import HexagramSymbol from "../components/HexagramSymbol";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

interface OnboardingScreenProps {
  onComplete: (language: string) => void;
}

export default function OnboardingScreen({
  onComplete,
}: OnboardingScreenProps) {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / SCREEN_WIDTH);
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < 6) {
      scrollViewRef.current?.scrollTo({
        x: SCREEN_WIDTH * (currentPage + 1),
        animated: true,
      });
    } else {
      handleComplete();
    }
  };

  const handleSkip = () => {
    onComplete(selectedLanguage);
  };

  const handleComplete = () => {
    onComplete(selectedLanguage);
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Screen 1: Language Selection */}
        <View className="flex-1" style={{ width: SCREEN_WIDTH }}>
          <LanguageScreen
            selectedLanguage={selectedLanguage}
            onLanguageSelect={handleLanguageSelect}
            t={t}
          />
        </View>
        {/* Screen 2: Welcome */}
        <View className="flex-1" style={{ width: SCREEN_WIDTH }}>
          <WelcomeScreen onSkip={handleSkip} t={t} />
        </View>

        {/* Screen 3: What is I Ching */}
        <View className="flex-1" style={{ width: SCREEN_WIDTH }}>
          <AboutScreen onSkip={handleSkip} t={t} />
        </View>

        {/* Screen 4: What is Hexagram */}
        <View className="flex-1" style={{ width: SCREEN_WIDTH }}>
          <HexagramScreen onSkip={handleSkip} t={t} />
        </View>

        {/* Screen 5: Chaning lines */}
        <View className="flex-1" style={{ width: SCREEN_WIDTH }}>
          <ChangingLinesScreen onSkip={handleSkip} t={t} />
        </View>

        {/* Screen 6: How It Works */}
        <View className="flex-1" style={{ width: SCREEN_WIDTH }}>
          <HowToScreen onSkip={handleSkip} t={t} />
        </View>

        {/* Screen 7: Hexagram Navigation */}
        <View className="flex-1" style={{ width: SCREEN_WIDTH }}>
          <HexagramNavigation onSkip={handleSkip} t={t} />
        </View>
      </ScrollView>

      {/* Progress Dots */}
      <View className="absolute bottom-32 left-0 right-0 flex-row justify-center items-center gap-2">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => {
          const dotClass =
            index === currentPage
              ? "w-2 h-2 rounded-full bg-text"
              : "w-2 h-2 rounded-full bg-text/20";
          return <View key={index} className={dotClass} />;
        })}
      </View>

      {/* Bottom Button */}
      <View className="absolute bottom-0 left-0 right-0 px-6 pb-12">
        <Button
          label={
            currentPage === 6
              ? t("wizard.actions.getStarted")
              : t("wizard.actions.continue")
          }
          onPress={goToNextPage}
        />
      </View>
    </View>
  );
}

// Screen 1: Language Selection
function LanguageScreen({
  selectedLanguage,
  onLanguageSelect,
  t,
}: {
  selectedLanguage: string;
  onLanguageSelect: (lang: string) => void;
  t: any;
}) {
  return (
    <View className="flex-1 px-6 pt-20 pb-40">
      {/* Content */}
      <View className="flex-1 justify-center">
        {/* Title */}
        <GeistMonoText
          variant="bold"
          className="text-2xl text-text text-center mb-12"
        >
          {t("wizard.language.title")}
        </GeistMonoText>

        {/* Language Options */}
        <View className="gap-y-4 mb-4">
          <LanguageOption
            label="English"
            value="en"
            selected={selectedLanguage === "en"}
            onSelect={onLanguageSelect}
          />
          <LanguageOption
            label="Čeština"
            value="cs"
            selected={selectedLanguage === "cs"}
            onSelect={onLanguageSelect}
          />
        </View>

        {/* Hint */}
        <GeistMonoText className="text-sm text-background text-center">
          {t("wizard.language.hint")}
        </GeistMonoText>
      </View>
    </View>
  );
}

function LanguageOption({
  label,
  value,
  selected,
  onSelect,
}: {
  label: string;
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
}) {
  const buttonClass = selected
    ? "rounded-lg py-5 px-6 border bg-text border-text my-2"
    : "rounded-lg py-5 px-6 border bg-transparent border-text/20 border-dashed my-2";

  const textClass = selected ? "text-sm text-primary" : "text-sm text-text";

  return (
    <TouchableOpacity
      onPress={() => onSelect(value)}
      className={buttonClass}
      activeOpacity={0.8}
    >
      <View className="flex-row items-center justify-between">
        <GeistMonoText variant="medium" className={textClass}>
          {label}
        </GeistMonoText>
        {selected && <CheckIcon size={16} className="text-white" />}
      </View>
    </TouchableOpacity>
  );
}

// Screen 2: Welcome
function WelcomeScreen({ onSkip, t }: { onSkip: () => void; t: any }) {
  return (
    <View className="flex-1 px-6 pt-20 pb-40">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={onSkip}
        className="self-end mb-8"
        activeOpacity={0.6}
      >
        <GeistMonoText className="text-background">
          {t("wizard.actions.skip")}
        </GeistMonoText>
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 justify-center items-center">
        {/* Logo */}
        <View className="mb-12">
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 164, height: 164 }}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <GeistMonoText
          variant="bold"
          className="text-2xl text-text text-center mb-4"
        >
          {t("wizard.welcome.title")}
        </GeistMonoText>

        {/* Subtitle */}
        <GeistMonoText className="text-base text-background text-center leading-6">
          {t("wizard.welcome.subtitle")}
        </GeistMonoText>
      </View>
    </View>
  );
}

// Screen 3: About I Ching
function AboutScreen({ onSkip, t }: { onSkip: () => void; t: any }) {
  return (
    <View className="flex-1 px-6 pt-20 pb-40">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={onSkip}
        className="self-end mb-8"
        activeOpacity={0.6}
      >
        <GeistMonoText className="text-background">
          {t("wizard.actions.skip")}
        </GeistMonoText>
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 justify-center items-center">
        {/* Title */}
        <GeistMonoText
          variant="bold"
          className="text-2xl text-text text-center mb-8"
        >
          {t("wizard.about.title")}
        </GeistMonoText>

        {/* Body */}
        <GeistMonoText className="text-base text-background text-center leading-6">
          {t("wizard.about.body")}
        </GeistMonoText>
      </View>
    </View>
  );
}

// Screen 4: What is Hexagram
function HexagramScreen({ onSkip, t }: { onSkip: () => void; t: any }) {
  return (
    <View className="flex-1 px-6 pt-20 pb-40">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={onSkip}
        className="self-end mb-8"
        activeOpacity={0.6}
      >
        <GeistMonoText className="text-background">
          {t("wizard.actions.skip")}
        </GeistMonoText>
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 justify-center items-center">
        {/* Hexagram Visual */}
        <View className="mb-12">
          <HexagramSymbol size={128} lines={[0, 1, 1, 0, 1, 0]} />
        </View>

        {/* Title */}
        <GeistMonoText
          variant="bold"
          className="text-2xl text-text text-center mb-8"
        >
          {t("wizard.hexagram.title")}
        </GeistMonoText>

        {/* Body */}
        <GeistMonoText className="text-base text-background text-center leading-6 px-4">
          {t("wizard.hexagram.body")}
        </GeistMonoText>
      </View>
    </View>
  );
}

// Screen 5: Changing lines
function ChangingLinesScreen({ onSkip, t }: { onSkip: () => void; t: any }) {
  return (
    <View className="flex-1 px-6 pt-20 pb-40">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={onSkip}
        className="self-end mb-8"
        activeOpacity={0.6}
      >
        <GeistMonoText className="text-background">
          {t("wizard.actions.skip")}
        </GeistMonoText>
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 justify-center items-center">
        <View className="mb-12">
          <HexagramSymbol
            size={128}
            lines={[0, 1, 1, 0, 1, 0]}
            changingLines={[false, true, false, true, false, false]}
          />
        </View>

        {/* Title */}
        <GeistMonoText
          variant="bold"
          className="text-2xl text-text text-center mb-8"
        >
          {t("wizard.changingLines.title")}
        </GeistMonoText>

        {/* Steps */}
        <View className="gap-4 px-4">
          <GeistMonoText className="text-base text-center text-background">
            {t("wizard.changingLines.body")}
          </GeistMonoText>
        </View>
      </View>
    </View>
  );
}

// Screen 6: How It Works
function HowToScreen({ onSkip, t }: { onSkip: () => void; t: any }) {
  return (
    <View className="flex-1 px-6 pt-20 pb-40">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={onSkip}
        className="self-end mb-8"
        activeOpacity={0.6}
      >
        <GeistMonoText className="text-background">
          {t("wizard.actions.skip")}
        </GeistMonoText>
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 justify-center items-center">
        {/* Title */}
        <GeistMonoText
          variant="bold"
          className="text-2xl text-text text-center mb-8"
        >
          {t("wizard.howTo.title")}
        </GeistMonoText>

        {/* Steps */}
        <View className="gap-4 px-4">
          <GeistMonoText className="text-base text-center text-background">
            {t("wizard.howTo.step1")}
          </GeistMonoText>
          <View className="flex items-center justify-center">
            <ArrowDown size={32} className="text-main" />
          </View>
          <GeistMonoText className="text-base text-center text-background">
            {t("wizard.howTo.step2")}
          </GeistMonoText>
          <View className="flex items-center justify-center text-background">
            <ArrowDown size={32} className="text-main" />
          </View>
          <GeistMonoText className="text-base text-center text-background">
            {t("wizard.howTo.step3")}
          </GeistMonoText>
        </View>
      </View>
    </View>
  );
}

// Screen 7: Hexagram navigation
function HexagramNavigation({ onSkip, t }: { onSkip: () => void; t: any }) {
  return (
    <View className="flex-1 px-6 pt-20 pb-40">
      {/* Skip Button */}
      <TouchableOpacity
        onPress={onSkip}
        className="self-end mb-8"
        activeOpacity={0.6}
      >
        <GeistMonoText className="text-background">
          {t("wizard.actions.skip")}
        </GeistMonoText>
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 justify-center items-center">
        {/* Title */}
        <GeistMonoText
          variant="bold"
          className="text-2xl text-text text-center mb-8"
        >
          {t("wizard.hexagramNavigation.title")}
        </GeistMonoText>

        {/* Steps */}
        <View className="gap-y-8 px-4">
          <View className="flex items-center gap-y-1">
            <View className="flex items-center gap-x-2 flex-row">
              <Eye size={24} className="text-main" />
              <GeistMonoText
                variant="medium"
                className="text-base text-center text-background"
              >
                {t("wizard.hexagramNavigation.meaning")}
              </GeistMonoText>
            </View>
            <GeistMonoText className="text-sm text-center text-background">
              {t("wizard.hexagramNavigation.meaningBody")}
            </GeistMonoText>
          </View>

          <View className="flex items-center gap-y-1">
            <View className="flex items-center gap-x-2 flex-row">
              <Sparkles size={24} className="text-main" />
              <GeistMonoText
                variant="medium"
                className="text-base text-center text-background"
              >
                {t("wizard.hexagramNavigation.oracle")}
              </GeistMonoText>
            </View>
            <GeistMonoText className="text-sm text-center text-background">
              {t("wizard.hexagramNavigation.oracleBody")}
            </GeistMonoText>
          </View>

          <View className="flex items-center gap-y-1">
            <View className="flex items-center gap-x-2 flex-row">
              <DraftingCompass size={24} className="text-main" />
              <GeistMonoText
                variant="medium"
                className="text-base text-center text-background"
              >
                {t("wizard.hexagramNavigation.anatomy")}
              </GeistMonoText>
            </View>
            <GeistMonoText className="text-sm text-center text-background">
              {t("wizard.hexagramNavigation.anatomyBody")}
            </GeistMonoText>
          </View>

          <View className="flex items-center gap-y-1">
            <View className="flex items-center gap-x-2 flex-row">
              <Activity size={24} className="text-main" />
              <GeistMonoText
                variant="medium"
                className="text-base text-center text-background"
              >
                {t("wizard.hexagramNavigation.evolution")}
              </GeistMonoText>
            </View>
            <GeistMonoText className="text-sm text-center text-background">
              {t("wizard.hexagramNavigation.evolutionBody")}
            </GeistMonoText>
          </View>
        </View>
      </View>
    </View>
  );
}
