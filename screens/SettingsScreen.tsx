import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import TopNavigationBarSettingsScreen from '../components/navbars/TopNavigationBarSettingsScreen';

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
     <View style={{ flex: 1, backgroundColor: '#201F20' }}>
            <TopNavigationBarSettingsScreen/>
        </View>
    // <ScrollView className="flex-1 bg-white" contentContainerStyle={{ paddingTop: 8, paddingBottom: 80 }}>
    //   <View className="px-4 py-6">
       
    //     {/* Language Section */}
    //     <View className="mb-6">
    //       {/* Czech Option */}
    //       <TouchableOpacity
    //         onPress={() => changeLanguage('cs')}
    //         className="flex-row items-center justify-between p-4 bg-gray-50 rounded-lg mb-2"
    //         activeOpacity={0.7}
    //       >
    //         <View className="flex-row items-center">
    //           <Text className="text-base font-medium">Čeština</Text>
    //         </View>
    //         {currentLanguage === 'cs' && (
    //           <CheckCircle size={24} color="#06b6d4" />
    //         )}
    //       </TouchableOpacity>
          
    //       {/* English Option */}
    //       <TouchableOpacity
    //         onPress={() => changeLanguage('en')}
    //         className="flex-row items-center justify-between p-4 bg-gray-50 rounded-lg"
    //         activeOpacity={0.7}
    //       >
    //         <View className="flex-row items-center">
    //           <Text className="text-base font-medium">English</Text>
    //         </View>
    //         {currentLanguage === 'en' && (
    //           <CheckCircle size={24} color="#06b6d4" />
    //         )}
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </ScrollView>
  );
}
