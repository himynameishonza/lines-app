import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ArrowLeft, X } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface WizardNavigationBarProps {
  onBack?: () => void;
  onClose: () => void;
  showBack?: boolean;
}

export default function WizardNavigationBar({ 
  onBack, 
  onClose, 
  showBack = false 
}: WizardNavigationBarProps) {

    const insets = useSafeAreaInsets();
  
    
  return (
    <View 
     style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingTop: insets.top,
        paddingHorizontal: 16,
        paddingBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      >
      {/* Back Button */}
      <TouchableOpacity
             onPress={onBack}
             activeOpacity={1}
             style={{
               width: 44,
               height: 44,
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
             }}
           >
        {showBack ? (
        <ArrowLeft size={28} color="#EFDECA" strokeWidth={1.5} />
        ) : (
          <View style={{ width: 24, height: 24 }} />
        )}
      </TouchableOpacity>

      {/* Close Button */}
      <TouchableOpacity onPress={onClose}
      style={{
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <X size={28} color="#EFDECA" strokeWidth={1.5} />
      </TouchableOpacity>
    </View>
  );
}
