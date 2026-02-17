import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function NewReadingScreen() {
  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ paddingTop: 60, paddingBottom: 80 }}>
      <View className="px-4">
        <Text className="text-3xl font-bold">New Reading</Text>
        
        <Text className="text-base text-gray-600 mb-6">
          How to ask your question:{'\n\n'}
          Focus on open-ended questions that invite reflection rather than yes/no answers. 
          Frame your question with clarity and intention. The I Ching responds best to 
          questions about understanding situations, timing, and personal growth.
        </Text>

        <TextInput
          className="border border-gray-300 rounded-lg p-4 mb-6 text-base"
          placeholder="Enter your question..."
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <TouchableOpacity className="bg-cyan-600 rounded-lg p-4 mb-4">
          <Text className="text-white text-center text-lg font-semibold">
            Random Hexagram
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-cyan-600 rounded-lg p-4 mb-4">
          <Text className="text-white text-center text-lg font-semibold">
            Coin Toss Method
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
