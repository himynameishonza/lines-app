import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useTranslation } from "react-i18next";
import GeistMonoText from "../components/typography/GeistMonoText";
import TopNavigationBarNewReading from "../components/navbars/TopNavigationBarNewReading";
import Button from "../components/Button";

interface NewReadingScreenProps {
  onBack: () => void;
  onCoinToss: (question: string) => void;
}

export default function NewReadingScreen({
  onBack,
  onCoinToss,
}: NewReadingScreenProps) {
  const { t } = useTranslation();
  const [question, setQuestion] = useState("");

  const handleContinue = () => {
    if (question.trim()) {
      onCoinToss(question.trim());
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-primary"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1">
        <TopNavigationBarNewReading onBack={onBack} />

        <ScrollView
          className="flex-1 px-6 pt-32"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {/* Guide Section */}
          <View className="mb-6">
            <GeistMonoText variant="bold" className="text-base text-text mb-3">
              {t("newReading.guide")}
            </GeistMonoText>
            <GeistMonoText className="text-background text-sm leading-6">
              {t("newReading.guideText")}
            </GeistMonoText>
          </View>

          {/* Question Input */}
          <View className="flex-1 mb-6">
            <GeistMonoText variant="bold" className="text-base text-text mb-3">
              {t("newReading.question")}
            </GeistMonoText>
            <TextInput
              value={question}
              onChangeText={setQuestion}
              placeholder={t("newReading.placeholder")}
              placeholderTextColor="rgba(6, 40, 63, 0.3)"
              multiline
              className="rounded-lg py-3 px-4 text-text border border-dashed border-text/25 flex-1"
              style={{
                fontFamily: "GeistMono",
                fontWeight: 500,
                letterSpacing: 1,
                fontSize: 14,
                lineHeight: 24,
                textAlignVertical: "top",
              }}
            />
          </View>
        </ScrollView>

        {/* Bottom Button */}
        <View className="px-6 pb-12">
          <Button
            disabled={!question.trim()}
            onPress={handleContinue}
            label={t("newReading.coinToss")}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
