// Yin and Yang data with IDs
export interface YinYangItem {
  id: number;
  translations: {
    en: string;
    cs: string;
  };
}

export const yinYangData: YinYangItem[] = [
  {
    id: 0,
    translations: {
      en: 'yin',
      cs: 'jin'
    }
  },
  {
    id: 1,
    translations: {
      en: 'yang',
      cs: 'jang'
    }
  }
];

// Helper function to get translated yin/yang by ID
export const getYinYangTranslation = (id: 0 | 1, language: 'en' | 'cs'): string => {
  return yinYangData[id].translations[language];
};

// Helper function to get ID from string (for migration)
export const getYinYangId = (type: 'yin' | 'yang'): 0 | 1 => {
  return type === 'yin' ? 0 : 1;
};