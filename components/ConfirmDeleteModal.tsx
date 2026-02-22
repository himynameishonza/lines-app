import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import GeistMonoText from "./typography/GeistMonoText";
import { useTranslation } from "react-i18next";

interface ConfirmDeleteModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDeleteModal({
  visible,
  onConfirm,
  onCancel,
}: ConfirmDeleteModalProps) {
  const { t } = useTranslation();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View className="flex-1 bg-text/50 items-center justify-center px-6">
        <View className="bg-primary rounded-lg p-6 w-full max-w-sm border border-text/20">
          <GeistMonoText variant="bold" className="text-xl mb-2">
            {t("deleteModal.title")}
          </GeistMonoText>
          <GeistMonoText className="text-text/70 mb-6">
            {t("deleteModal.message")}
          </GeistMonoText>

          <View className="flex-row gap-x-3">
            <TouchableOpacity
              onPress={onCancel}
              className="flex-1 bg-primary border-dashed border border-text/25 rounded py-3"
              activeOpacity={0.8}
            >
              <GeistMonoText className="text-text text-center" variant="medium">
                {t("deleteModal.cancel")}
              </GeistMonoText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onConfirm}
              className="flex-1 bg-main rounded py-3"
              activeOpacity={0.8}
            >
              <GeistMonoText className="text-text text-center" variant="medium">
                {t("deleteModal.confirm")}
              </GeistMonoText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
