export interface TrigramContent {
  name: string;
  description: string;
}

export interface Trigram {
  id: number;
  chineseName: string;
  symbol: string;
  pinyin: string;  
  element: string;
  content: {
    cs: TrigramContent;
    en: TrigramContent;
  };
}

export const trigrams:Trigram[] = [
  {
    id: 1,
    chineseName: "乾",
    pinyin: "Qián",
    symbol: "☰",
    element: "Heaven",
    content: {
      cs: {
        name: "Nebe",
        description:
          "Nebe představuje čistou tvořivou sílu a iniciativu. Je symbolem aktivity, vůle a vytrvalosti. Pohybuje se bez ustání a vyjadřuje princip jang – expanzi, světlo a vědomé jednání. V lidském kontextu znamená odpovědnost, vedení a schopnost zahájit nový cyklus."
      },
      en: {
        name: "Heaven",
        description:
          "Heaven represents pure creative force and initiative. It symbolizes activity, will, and persistence. Moving without rest, it embodies the yang principle — expansion, light, and conscious action. In human terms, it reflects leadership, responsibility, and the power to initiate a new cycle."
      }
    }
  },
  {
    id: 2,
    chineseName: "坤",
    pinyin: "Kūn",
    symbol: "☷",
    element: "Earth",
    content: {
      cs: {
        name: "Země",
        description:
          "Země je principem přijímání a podpory. Symbolizuje poddajnost, výživu a trpělivost. Není iniciátorem, ale umožňuje růst a stabilitu. V lidské rovině představuje schopnost naslouchat, spolupracovat a vytvářet prostor pro druhé."
      },
      en: {
        name: "Earth",
        description:
          "Earth is the principle of receptivity and support. It symbolizes yielding, nourishment, and patience. It does not initiate but enables growth and stability. On a human level, it reflects the capacity to listen, cooperate, and provide space for others."
      }
    }
  },
  {
    id: 3,
    chineseName: "震",
    pinyin: "Zhèn",
    symbol: "☳",
    element: "Thunder",
    content: {
      cs: {
        name: "Hrom",
        description:
          "Hrom představuje náhlý pohyb a probuzení. Je impulsem, který narušuje stagnaci a přináší změnu. Symbolizuje začátek akce, někdy i otřes, který vyvolá nový vývoj."
      },
      en: {
        name: "Thunder",
        description:
          "Thunder represents sudden movement and awakening. It is the impulse that breaks stagnation and initiates change. It symbolizes the beginning of action, sometimes as a shock that triggers new development."
      }
    }
  },
  {
    id: 4,
    chineseName: "巽",
    pinyin: "Xùn",
    symbol: "☴",
    element: "Wind",
    content: {
      cs: {
        name: "Vítr",
        description:
          "Vítr je jemná, pronikající síla. Neprosazuje se tlakem, ale vytrvalostí. Symbolizuje vliv, postupné pronikání a schopnost přizpůsobit se okolnostem."
      },
      en: {
        name: "Wind",
        description:
          "Wind is a gentle, penetrating force. It does not push through pressure but through persistence. It symbolizes influence, gradual progress, and adaptability."
      }
    }
  },
  {
    id: 5,
    chineseName: "坎",
    pinyin: "Kǎn",
    symbol: "☵",
    element: "Water",
    content: {
      cs: {
        name: "Voda",
        description:
          "Voda představuje hloubku, nebezpečí i proudění. Je symbolem přizpůsobivosti a vnitřní síly. Dokáže obejít překážky a zároveň skrývá riziko."
      },
      en: {
        name: "Water",
        description:
          "Water represents depth, danger, and flow. It symbolizes adaptability and inner resilience. It can bypass obstacles yet also contains risk."
      }
    }
  },
  {
    id: 6,
    chineseName: "離",
    pinyin: "Lí",
    symbol: "☲",
    element: "Fire",
    content: {
      cs: {
        name: "Oheň",
        description:
          "Oheň je princip světla a jasnosti. Osvětluje věci a dává jim tvar. Symbolizuje vědomí, poznání a schopnost vidět podstatu."
      },
      en: {
        name: "Fire",
        description:
          "Fire is the principle of illumination and clarity. It reveals forms and gives things definition. It symbolizes awareness, insight, and perception."
      }
    }
  },
  {
    id: 7,
    chineseName: "艮",
    pinyin: "Gèn",
    symbol: "☶",
    element: "Mountain",
    content: {
      cs: {
        name: "Hora",
        description:
          "Hora představuje klid a zastavení. Je symbolem pevnosti, hranice a schopnosti ukončit pohyb. Učí zastavit se ve správný čas."
      },
      en: {
        name: "Mountain",
        description:
          "Mountain represents stillness and restraint. It symbolizes firmness, boundaries, and the ability to bring movement to a halt. It teaches when to stop."
      }
    }
  },
  {
    id: 8,
    chineseName: "兌",
    pinyin: "Duì",
    symbol: "☱",
    element: "Lake",
    content: {
      cs: {
        name: "Jezero",
        description:
          "Jezero symbolizuje radost a otevřenost. Je spojeno s komunikací, sdílením a lehkostí. Přináší uvolnění a přitažlivost."
      },
      en: {
        name: "Lake",
        description:
          "Lake symbolizes joy and openness. It is associated with communication, sharing, and lightness. It brings relaxation and attraction."
      }
    }
  }
]
