import React from "react";
import { TouchableOpacity, View } from "react-native";
import GeistMonoText from "./typography/GeistMonoText";

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  marginTop?: number;
}

export default function Button({
  label,
  marginTop = 0,
  onPress,
  disabled,
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`rounded py-5 px-3 ${!disabled ? `bg-text` : "bg-text/20"}`}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={{ marginTop: marginTop }}
    >
      <GeistMonoText className={`text-center ${!disabled ? `text-primary` : "text-text/50"}`} variant="medium">
        {label}
      </GeistMonoText>
    </TouchableOpacity>
  );
}
