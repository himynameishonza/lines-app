import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Check, ChevronDown } from 'lucide-react-native';
import GeistMonoText from './GeistMonoText';

export interface PickerOption {
  label: string;
  value: string;
}

interface PickerProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  options: PickerOption[];
  placeholder?: string;
}

export default function Picker({ selectedValue, onValueChange, options, placeholder }: PickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedOption = options.find(opt => opt.value === selectedValue);

  const handleSelect = (value: string) => {
    onValueChange(value);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <TouchableOpacity
        className="flex-row items-center justify-between gap-2"
        onPress={() => setIsOpen(true)}
        activeOpacity={0.8}
      >
        <GeistMonoText className="text-[#06283F] text-sm">
          {selectedOption?.label || placeholder || 'Select...'}
        </GeistMonoText>
        <ChevronDown size={12} color="#06283F" />
      </TouchableOpacity>

      {/* Modal Picker */}
      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-[#D8D6C3]/80 justify-center items-center"
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View className="bg-[#06283F] rounded-xl w-4/5 max-h-96 overflow-hidden">
            <ScrollView>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  className="flex-row items-center justify-between p-4 border-b border-gray-700"
                  onPress={() => handleSelect(option.value)}
                  activeOpacity={0.8}
                >
                  <GeistMonoText className="text-white text-sm">
                    {option.label}
                  </GeistMonoText>
                  {selectedValue === option.value && (
                    <Check size={20} color="#EFDECA" />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}
