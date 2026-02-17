export interface HexagramContent {
  meaning: string;
  oracle: string;
  anatomy: string;
  evolution: string;
}

export interface Hexagram {
  id: number;
  number: number;
  chineseName: string;
  romanization: string;
  isEvolving: boolean;
  lines: ('yin' | 'yang')[]; // Array of 6 lines, bottom to top
  graphics?: string; // Path to image file
  content: {
    cs: HexagramContent;
    en: HexagramContent;
  };
}

export const placeholderHexagrams: Hexagram[] = [
  {
    "id": 1,
    "number": 1,
    "chineseName": "乾",
    "romanization": "Qián",
    "isEvolving": false,
    "lines": ["yang", "yang", "yang", "yang", "yang", "yang"],
    "content": {
      "cs": {
        "meaning": "Hexagram 1 představuje princip Nebe – čistou tvořivou sílu. Je to energie počátku, vzestupu a nepřetržitého pohybu. Tvořivé symbolizuje vědomou aktivitu, schopnost zahájit dění a nést odpovědnost za směr. Není to impulzivní síla, ale vytrvalý, jasně zaměřený proud.\n\nTento hexagram ukazuje okamžik plného potenciálu. Pravá tvořivost vyrůstá z vnitřní integrity a souladu s vyšším řádem. Nebe se pohybuje bez ustání — člověk, který jej následuje, rozvíjí charakter skrze neustálé sebezdokonalování. Hexagram 1 představuje princip Nebe – čistou tvořivou sílu. Je to energie počátku, vzestupu a nepřetržitého pohybu. Tvořivé symbolizuje vědomou aktivitu, schopnost zahájit dění a nést odpovědnost za směr. Není to impulzivní síla, ale vytrvalý, jasně zaměřený proud.\n\nTento hexagram ukazuje okamžik plného potenciálu. Pravá tvořivost vyrůstá z vnitřní integrity a souladu s vyšším řádem. Nebe se pohybuje bez ustání — člověk, který jej následuje, rozvíjí charakter skrze neustálé sebezdokonalování.",
        "oracle": "Úspěch přichází skrze vytrvalost a správné načasování. Jednej z jasného úmyslu a věci se budou přirozeně rozvíjet.\n\nPozor na pýchu. Síla, která překročí míru, se obrací proti sobě.",
        "anatomy": "Dva trigramy Nebe nad sebou tvoří obraz čisté jangové energie. Šest plných čar vyjadřuje jednotu směru a soustředěnou aktivitu.\n\nV hexagramu není žádná poddajnost — pouze pohyb a síla.",
        "evolution": "Vývoj probíhá ve stupních růstu. Od skrytého potenciálu až po vrcholné naplnění.\n\nPo dosažení vrcholu je nutné umět ustoupit. Překročení míry přináší obrat."
      },
      "en": {
        "meaning": "Hexagram 1 represents the principle of Heaven — pure creative force. It is the energy of initiation, ascent, and continuous movement. The Creative symbolizes conscious action and the capacity to set events into motion with responsibility and clarity.\n\nThis hexagram marks a moment of full potential. True creativity arises from inner integrity and alignment with a higher order. Heaven moves without rest — one who follows it strengthens character through constant self-cultivation.",
        "oracle": "Success comes through perseverance and proper timing. Act from clarity and development will unfold naturally.\n\nBeware of pride. When strength exceeds its measure, reversal begins.",
        "anatomy": "Heaven over Heaven forms six solid yang lines. The structure expresses unity of purpose and concentrated activity.\n\nThere is no yielding element — only pure motion.",
        "evolution": "The Creative develops through stages of maturation, from hidden potential to full manifestation.\n\nAt the peak, one must know how to withdraw. Excess leads to decline."
      }
    }
  },
  {
    "id": 2,
    "number": 2,
    "chineseName": "坤",
    "romanization": "Kūn",
    "isEvolving": false,
    "lines": ["yin", "yin", "yin", "yin", "yin", "yin"],
    "content": {
      "cs": {
        "meaning": "Hexagram 2 ztělesňuje princip Země – poddajnost, výživu a podporu. Přijímající umožňuje růst a poskytuje prostor. Nezahajuje, ale doprovází a stabilizuje.\n\nJe to síla trpělivosti a hluboké oddanosti. V jeho tichosti spočívá schopnost nést odpovědnost a umožnit druhým rozvinout jejich potenciál.",
        "oracle": "Úspěch přichází skrze věrnost a schopnost následovat správné vedení. Přijmi svou roli a jednej v souladu s okolnostmi.\n\nPasivita se nesmí změnit v lhostejnost.",
        "anatomy": "Země nad Zemí tvoří šest přerušovaných jinových čar. Obraz čisté receptivity.\n\nStruktura vyjadřuje stabilitu a nosnou sílu.",
        "evolution": "Přijímající roste skrze službu a podporu.\n\nVelikost Země spočívá v její schopnosti dát prostor jiným silám."
      },
      "en": {
        "meaning": "Hexagram 2 embodies the principle of Earth — yielding, nourishment, and support. The Receptive enables growth and provides space. It does not initiate but sustains and stabilizes.\n\nIt is the power of patience and deep devotion. In its quietness lies the strength to carry responsibility and allow others to unfold.",
        "oracle": "Success comes through loyalty and the ability to follow proper guidance. Accept your role and act in harmony with circumstances.\n\nReceptivity must not turn into indifference.",
        "anatomy": "Earth over Earth forms six broken yin lines — an image of pure receptivity.\n\nThe structure expresses steadiness and endurance.",
        "evolution": "The Receptive develops through sustaining and supporting.\n\nEarth achieves greatness by giving space to other forces."
      }
    }
  },
  {
    "id": 3,
    "number": 3,
    "chineseName": "屯",
    "romanization": "Zhūn",
    "isEvolving": false,
    "lines": ["yang", "yin", "yin", "yin", "yin", "yang"],
    "content": {
      "cs": {
        "meaning": "Hexagram 3 představuje počátek, kdy se nové teprve rodí. Je to stav napětí mezi možností a skutečností. Chaos není chyba, ale přirozený stav vzniku.\n\nZrání vyžaduje trpělivost a ochotu projít nejistotou. V této fázi je důležitější vytrvat než spěchat.",
        "oracle": "Vyhledej radu a nepodléhej ukvapenosti. Začátky potřebují vedení.\n\nVytrvalost přináší postupné vyjasnění.",
        "anatomy": "Voda nad Hromem vytváří napětí mezi pohybem a překážkou.\n\nTato struktura symbolizuje porodní bolest růstu.",
        "evolution": "Z chaosu postupně vzniká řád.\n\nTrpělivé uspořádání vede k pevnějším základům."
      },
      "en": {
        "meaning": "Hexagram 3 represents the birth of the new. It is tension between possibility and reality. Chaos is not failure, but a natural condition of emergence.\n\nGrowth requires patience and the willingness to endure uncertainty. At this stage, perseverance matters more than speed.",
        "oracle": "Seek guidance and avoid haste. Beginnings require careful leadership.\n\nSteady effort gradually brings clarity.",
        "anatomy": "Water above Thunder creates tension between movement and obstruction.\n\nThis structure symbolizes the labor pains of growth.",
        "evolution": "From confusion, order gradually forms.\n\nPatient organization leads to stronger foundations."
      }
    }
  },
  {
  "id": 4,
  "number": 4,
  "chineseName": "蒙",
  "romanization": "Méng",
  "isEvolving": false,
  "lines": ["yin", "yin", "yang", "yin", "yin", "yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 4, Meng – Nezralost, představuje stav počáteční nevědomosti. Je to obraz mládí, které hledá vedení, a mysli, která ještě není ustálena. Nezralost není nedostatek, ale přirozená fáze vývoje.\n\nTento hexagram upozorňuje na potřebu učení, trpělivosti a správného vedení. Moudrost nepřichází sama – rodí se ze vztahu mezi otázkou a odpovědí.",
      "oracle": "Je příznivé hledat učitele, ale ne vnucovat otázky bez připravenosti naslouchat. Odpověď přichází tehdy, když je mysl otevřená.\n\nVytrvalost v učení přináší postupné dozrávání.",
      "anatomy": "Hora nad Vodou vytváří obraz zdroje skrytého pod povrchem. Hora zastavuje proud a vytváří podmínky k soustředění.\n\nStruktura vyjadřuje napětí mezi impulzem poznání a potřebou klidu.",
      "evolution": "Nezralost se proměňuje skrze vedení a disciplínu. Postupné vyjasňování přináší stabilitu.\n\nBez ochoty učit se zůstává mysl zablokovaná."
    },
    "en": {
      "meaning": "Hexagram 4, Youthful Folly, represents the state of initial ignorance. It is the image of youth seeking guidance and a mind not yet settled. Folly is not deficiency, but a natural stage of growth.\n\nThis hexagram points to the need for learning, patience, and proper instruction. Wisdom arises through the relationship between question and response.",
      "oracle": "It is favorable to seek a teacher, but not to demand answers without readiness to listen. Insight comes when the mind is open.\n\nPerseverance in learning brings gradual maturity.",
      "anatomy": "Mountain above Water forms the image of a spring hidden beneath stillness. The mountain halts the flow, creating conditions for reflection.\n\nThe structure expresses tension between impulse and restraint.",
      "evolution": "Folly transforms through discipline and guidance. Gradual clarification leads to stability.\n\nWithout willingness to learn, confusion remains."
    }
  }
},
{
  "id": 5,
  "number": 5,
  "chineseName": "需",
    "romanization": "Xū",
  "isEvolving": false,
  "lines": ["yin", "yang", "yin", "yang", "yang", "yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 5, Čekání, vyjadřuje napětí před naplněním. Síla je přítomná, ale čas ještě nenastal. Čekání není pasivita, nýbrž vědomé spočinutí v přípravě.\n\nV tomto stavu se učíme důvěře. Správné načasování je stejně důležité jako samotná akce.",
      "oracle": "Je příznivé vytrvat a zachovat jasnost mysli. Nepředbíhej události.\n\nTen, kdo umí čekat, jedná ve správný okamžik.",
      "anatomy": "Voda nad Nebem vytváří obraz mraků shromažďujících se na obloze. Napětí je přítomné, ale déšť ještě nepřichází.\n\nStruktura vyjadřuje přípravu a koncentraci energie.",
      "evolution": "Čekání dozrává v čin, když je čas zralý.\n\nNetrpělivost přináší oslabení, trpělivost sílu."
    },
    "en": {
      "meaning": "Hexagram 5, Waiting, expresses tension before fulfillment. Strength is present, but the time has not yet come. Waiting is not passivity, but conscious preparation.\n\nIn this state, we learn trust. Proper timing is as important as action itself.",
      "oracle": "It is favorable to persevere and maintain clarity. Do not force events.\n\nOne who knows how to wait acts at the right moment.",
      "anatomy": "Water above Heaven forms the image of clouds gathering in the sky. Tension builds, yet rain has not fallen.\n\nThe structure expresses concentration of energy before release.",
      "evolution": "Waiting matures into action when the moment ripens.\n\nImpatience weakens; patience strengthens."
    }
  }
},
{
  "id": 6,
  "number": 6,
  "chineseName": "訟",
    "romanization": "Sòng",
  "isEvolving": false,
  "lines": ["yang", "yang", "yang", "yin", "yang", "yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 6, Spor, představuje střet dvou sil, které nejsou v souladu. Konflikt vzniká z rozdílných směrů a neochoty ustoupit.\n\nSpor nemusí být destruktivní, pokud vede k vyjasnění. Vyžaduje však nestrannost a schopnost rozlišovat podstatné od osobního.",
      "oracle": "Je příznivé hledat spravedlivé řešení, nikoli vítězství za každou cenu.\n\nVytrvalý spor bez ochoty ke smíru přináší vyčerpání.",
      "anatomy": "Nebe nad Vodou vytváří napětí mezi vzestupem a hloubkou. Směry se rozcházejí.\n\nStruktura vyjadřuje rozpor bez jednoty.",
      "evolution": "Konflikt se může proměnit v porozumění.\n\nPokud však přetrvává tvrdohlavost, následuje ztráta."
    },
    "en": {
      "meaning": "Hexagram 6, Conflict, represents a clash between forces that move in opposing directions. Dispute arises from divergence and unwillingness to yield.\n\nConflict need not be destructive if it leads to clarity. It requires fairness and discernment.",
      "oracle": "It is favorable to seek justice rather than victory at any cost.\n\nPersistent struggle without compromise leads to exhaustion.",
      "anatomy": "Heaven above Water creates tension between ascent and depth. The directions diverge.\n\nThe structure expresses division without harmony.",
      "evolution": "Conflict can transform into understanding.\n\nIf stubbornness prevails, loss follows."
    }
  }
},
{
  "id": 7,
  "number": 7,
  "chineseName": "師",
    "romanization": "Shī",
  "isEvolving": false,
  "lines": ["yin", "yang", "yin", "yin", "yin", "yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 7, Vojsko, symbolizuje organizovanou sílu a disciplínu. Energie je soustředěná a řízená. Úspěch závisí na vedení a jasném řádu.\n\nVojsko zde neznamená boj, ale schopnost jednat jednotně.",
      "oracle": "Je příznivé mít zkušeného vůdce a zachovat disciplínu.\n\nSíla bez řádu vede k chaosu.",
      "anatomy": "Voda nad Zemí vytváří obraz energie shromážděné pod povrchem.\n\nStruktura naznačuje potřebu organizace.",
      "evolution": "Správně vedená síla přináší stabilitu.\n\nBez vedení se rozpadá."
    },
    "en": {
      "meaning": "Hexagram 7, The Army, symbolizes organized force and discipline. Energy is concentrated and directed. Success depends on leadership and clear structure.\n\nThe Army here does not imply aggression, but unified action.",
      "oracle": "It is favorable to have experienced leadership and maintain discipline.\n\nStrength without order leads to chaos.",
      "anatomy": "Water above Earth forms the image of energy gathered beneath the surface.\n\nThe structure suggests organization and control.",
      "evolution": "Properly directed strength creates stability.\n\nWithout guidance, it disperses."
    }
  }
},
{
  "id": 8,
  "number": 8,
  "chineseName": "比",
    "romanization": "Bǐ",
  "isEvolving": false,
  "lines": ["yin", "yin", "yin", "yin", "yang", "yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 8, Sblížení, představuje spojení a vzájemnou podporu. Jednota vzniká z důvěry a společného cíle.\n\nSblížení je dobrovolné a vyžaduje upřímnost.",
      "oracle": "Je příznivé hledat spojení s těmi, kdo sdílejí hodnoty.\n\nPovrchní spojenectví nemá trvání.",
      "anatomy": "Voda nad Zemí vytváří obraz proudů spojujících se v jeden celek.\n\nStruktura symbolizuje sjednocení.",
      "evolution": "Spojení se upevňuje skrze věrnost.\n\nBez důvěry se rozpadá."
    },
    "en": {
      "meaning": "Hexagram 8, Holding Together, represents union and mutual support. Unity arises from trust and shared purpose.\n\nConnection must be voluntary and sincere.",
      "oracle": "It is favorable to align with those who share your values.\n\nSuperficial alliances do not endure.",
      "anatomy": "Water above Earth forms the image of streams joining into one.\n\nThe structure symbolizes cohesion.",
      "evolution": "Union strengthens through loyalty.\n\nWithout trust, it dissolves."
    }
  }
},
{
  "id": 9,
  "number": 9,
  "chineseName": "小畜",
    "romanization": "Xiǎo Chù",
  "isEvolving": false,
  "lines": ["yang","yang","yang","yang","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 9, Malé zkrocení, vyjadřuje situaci, kdy je síla omezena drobnými překážkami. Energie je přítomná, ale nemůže se plně projevit. Malé omezení učí trpělivosti a jemné práci.\n\nTento hexagram ukazuje, že i malý vliv může mít význam. Ne vše je možné prosadit silou.",
      "oracle": "Je příznivé postupovat pomalu a věnovat pozornost detailům.\n\nVelké věci dozrávají skrze malé kroky.",
      "anatomy": "Vítr nad Nebem – jemný vliv působí na silný základ.\n\nStruktura ukazuje omezení bez potlačení.",
      "evolution": "Malé překážky připravují půdu pro větší rozvoj.\n\nVytrvalost přináší postupné uvolnění."
    },
    "en": {
      "meaning": "Hexagram 9, The Taming Power of the Small, represents a situation where strength is restrained by minor obstacles. Energy is present but cannot fully express itself. Small limitations teach patience and subtlety.\n\nThis hexagram shows that even gentle influence can be effective.",
      "oracle": "It is favorable to proceed slowly and attend to details.\n\nGreat outcomes mature through small steps.",
      "anatomy": "Wind above Heaven — gentle influence acting upon strength.\n\nThe structure shows restraint without suppression.",
      "evolution": "Minor constraints prepare the way for greater expansion.\n\nPersistence gradually releases tension."
    }
  }
},
{
  "id": 10,
  "number": 10,
  "chineseName": "履",
    "romanization": "Lǚ",
  "isEvolving": false,
  "lines": ["yang","yang","yang","yin","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 10, Krokování, představuje vědomé jednání v náročné situaci. Je třeba kráčet opatrně, s respektem k silám kolem sebe.\n\nJedná se o zkoušku charakteru – odvaha musí být spojena s pokorou.",
      "oracle": "Je příznivé jednat správně i v přítomnosti nebezpečí.\n\nBezohlednost přináší riziko.",
      "anatomy": "Nebe nad Jezerem – pevnost nad radostí.\n\nStruktura ukazuje napětí mezi lehkostí a autoritou.",
      "evolution": "Správné kroky upevňují důvěru.\n\nNeopatrnost vede k pádu."
    },
    "en": {
      "meaning": "Hexagram 10, Treading, represents conscious conduct in a delicate situation. One must walk carefully and respectfully among powerful forces.\n\nIt is a test of character where courage must be joined with humility.",
      "oracle": "It is favorable to act correctly even in the presence of danger.\n\nRecklessness brings risk.",
      "anatomy": "Heaven above Lake — firmness above joy.\n\nThe structure reflects tension between lightness and authority.",
      "evolution": "Correct steps build trust.\n\nCarelessness leads to downfall."
    }
  }
},
{
  "id": 11,
  "number": 11,
  "chineseName": "泰",
    "romanization": "Tài",
  "isEvolving": false,
  "lines": ["yang","yang","yang","yin","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 11, Mír, představuje harmonii mezi Nebem a Zemí. Síly jsou v rovnováze a výměna probíhá bez překážek.\n\nJe to období rozkvětu a vzájemného porozumění.",
      "oracle": "Je příznivé podporovat spolupráci a otevřenost.\n\nMír vyžaduje péči.",
      "anatomy": "Země nad Nebem – proudění mezi dvěma principy.\n\nStruktura ukazuje vyváženost.",
      "evolution": "Harmonie přináší růst.\n\nNedbalost může rovnováhu narušit."
    },
    "en": {
      "meaning": "Hexagram 11, Peace, represents harmony between Heaven and Earth. Forces are balanced and exchange flows freely.\n\nIt marks a period of flourishing and mutual understanding.",
      "oracle": "It is favorable to encourage cooperation and openness.\n\nPeace requires care.",
      "anatomy": "Earth above Heaven — circulation between principles.\n\nThe structure expresses equilibrium.",
      "evolution": "Harmony supports growth.\n\nNeglect can disturb balance."
    }
  }
},
{
  "id": 12,
  "number": 12,
  "chineseName": "否",
    "romanization": "Pǐ",
  "isEvolving": false,
  "lines": ["yin","yin","yin","yang","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 12, Úpadek, představuje období uzavření a neporozumění. Spojení mezi silami je přerušeno.\n\nJe to čas trpělivosti a zachování integrity.",
      "oracle": "Není příznivé tlačit na změnu.\n\nZachovej vnitřní stabilitu.",
      "anatomy": "Nebe nad Zemí – oddělení principů.\n\nStruktura ukazuje zastavení proudění.",
      "evolution": "Úpadek není trvalý.\n\nZ vytrvalosti se rodí obrat."
    },
    "en": {
      "meaning": "Hexagram 12, Standstill, represents obstruction and separation. Communication between forces is blocked.\n\nIt is a time to preserve integrity.",
      "oracle": "It is not favorable to force change.\n\nMaintain inner stability.",
      "anatomy": "Heaven above Earth — separation of principles.\n\nThe structure expresses stagnation.",
      "evolution": "Standstill is temporary.\n\nPerseverance prepares renewal."
    }
  }
},
{
  "id": 13,
  "number": 13,
  "chineseName": "同人",
    "romanization": "Tóng Rén",
  "isEvolving": false,
  "lines": ["yang","yang","yang","yang","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 13, Společenství lidí, symbolizuje jednotu založenou na sdíleném cíli.\n\nOtevřenost a jasnost přinášejí sílu.",
      "oracle": "Je příznivé spojit se s druhými na základě pravdivosti.\n\nJednota vyžaduje upřímnost.",
      "anatomy": "Nebe nad Ohněm – světlo pod vedením.\n\nStruktura vyjadřuje spolupráci.",
      "evolution": "Sdílený záměr upevňuje vztahy.\n\nPovrchnost oslabuje spojení."
    },
    "en": {
      "meaning": "Hexagram 13, Fellowship with Men, symbolizes unity based on shared purpose.\n\nOpenness brings strength.",
      "oracle": "It is favorable to unite with others through sincerity.\n\nUnity requires honesty.",
      "anatomy": "Heaven above Fire — clarity under guidance.\n\nThe structure expresses cooperation.",
      "evolution": "Shared intention strengthens bonds.\n\nSuperficiality weakens them."
    }
  }
},
{
  "id": 14,
  "number": 14,
  "chineseName": "大有",
    "romanization": "Dà Yǒu",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yang","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 14, Velké vlastnictví, představuje hojnost a vnitřní bohatství.\n\nSkutečné vlastnictví spočívá ve schopnosti správně nakládat s tím, co máme.",
      "oracle": "Je příznivé sdílet a jednat velkoryse.\n\nPýcha ohrožuje hojnost.",
      "anatomy": "Oheň nad Nebem – jasnost nad silou.\n\nStruktura ukazuje plnost.",
      "evolution": "Hojnost roste skrze odpovědnost.\n\nZneužití vede ke ztrátě."
    },
    "en": {
      "meaning": "Hexagram 14, Possession in Great Measure, represents abundance and inner wealth.\n\nTrue possession lies in responsible stewardship.",
      "oracle": "It is favorable to share and act generously.\n\nPride endangers abundance.",
      "anatomy": "Fire above Heaven — clarity over strength.\n\nThe structure expresses fullness.",
      "evolution": "Abundance grows through responsibility.\n\nMisuse leads to decline."
    }
  }
},
{
  "id": 15,
  "number": 15,
  "chineseName": "謙",
    "romanization": "Qiān",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yin","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 15, Skromnost, symbolizuje vyváženost a nenápadnou sílu.\n\nSkromnost přináší respekt a dlouhodobý úspěch.",
      "oracle": "Je příznivé zůstat uměřený.\n\nPřehnanost narušuje harmonii.",
      "anatomy": "Hora nad Zemí – výška spočívající na pevnosti.\n\nStruktura ukazuje stabilní základ.",
      "evolution": "Skromnost přináší trvalý růst.\n\nPýcha vede k pádu."
    },
    "en": {
      "meaning": "Hexagram 15, Modesty, symbolizes balance and quiet strength.\n\nHumility brings lasting success.",
      "oracle": "It is favorable to remain moderate.\n\nExcess disrupts harmony.",
      "anatomy": "Mountain above Earth — height resting on solidity.\n\nThe structure shows stable grounding.",
      "evolution": "Modesty supports enduring growth.\n\nArrogance leads to decline."
    }
  }
},
{
  "id": 16,
  "number": 16,
  "chineseName": "豫",
    "romanization": "Yù",
  "isEvolving": false,
  "lines": ["yin","yin","yin","yang","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 16, Nadšení, představuje radostnou energii, která probouzí pohyb.\n\nSprávně vedené nadšení inspiruje druhé.",
      "oracle": "Je příznivé sdílet radost, ale zachovat řád.\n\nBez směru se energie rozptýlí.",
      "anatomy": "Hrom nad Zemí – pohyb probouzí klid.\n\nStruktura vyjadřuje vzrušení.",
      "evolution": "Nadšení se mění v čin.\n\nBez disciplíny rychle vyhasne."
    },
    "en": {
      "meaning": "Hexagram 16, Enthusiasm, represents joyful energy that awakens movement.\n\nWhen guided properly, enthusiasm inspires others.",
      "oracle": "It is favorable to share joy while maintaining order.\n\nWithout direction, energy scatters.",
      "anatomy": "Thunder above Earth — movement stirring stillness.\n\nThe structure expresses arousal.",
      "evolution": "Enthusiasm transforms into action.\n\nWithout discipline, it fades quickly."
    }
  }
},
{
  "id": 17,
  "number": 17,
  "chineseName": "隨",
    "romanization": "Suí",
  "isEvolving": false,
  "lines": ["yang","yin","yin","yang","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 17, Následování, vyjadřuje schopnost přizpůsobit se správnému vedení.\n\nNásledovat neznamená podřídit se bez rozmyslu, ale jednat v souladu s vyšším řádem.",
      "oracle": "Je příznivé následovat to, co je pravdivé.\n\nSlepé následování přináší ztrátu.",
      "anatomy": "Jezero nad Hromem – radost reaguje na pohyb.\n\nStruktura ukazuje odezvu.",
      "evolution": "Správné následování vede k harmonii.\n\nBez rozlišování vzniká chaos."
    },
    "en": {
      "meaning": "Hexagram 17, Following, expresses the ability to adapt to rightful guidance.\n\nTo follow does not mean blind submission, but alignment with a higher order.",
      "oracle": "It is favorable to follow what is true.\n\nBlind following brings loss.",
      "anatomy": "Lake above Thunder — joy responding to movement.\n\nThe structure expresses responsiveness.",
      "evolution": "Proper following leads to harmony.\n\nWithout discernment, confusion arises."
    }
  }
},
{
  "id": 18,
  "number": 18,
  "chineseName": "蠱",
    "romanization": "Gǔ",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 18, Oprava zkaženého, symbolizuje potřebu napravit to, co bylo zanedbáno.\n\nJe to čas očisty a obnovy.",
      "oracle": "Je příznivé řešit problémy přímo.\n\nOdkládání prohlubuje rozklad.",
      "anatomy": "Hora nad Větrem – zastavení nad pronikáním.\n\nStruktura ukazuje stagnaci vyžadující zásah.",
      "evolution": "Náprava přináší nový začátek.\n\nIgnorování vede k úpadku."
    },
    "en": {
      "meaning": "Hexagram 18, Work on What Has Been Spoiled, symbolizes the need to correct what has been neglected.\n\nIt is a time of cleansing and renewal.",
      "oracle": "It is favorable to confront problems directly.\n\nDelay deepens decay.",
      "anatomy": "Mountain above Wind — obstruction over penetration.\n\nThe structure suggests stagnation requiring action.",
      "evolution": "Correction restores vitality.\n\nNeglect leads to decline."
    }
  }
},
{
  "id": 19,
  "number": 19,
  "chineseName": "臨",
    "romanization": "Lín",
  "isEvolving": false,
  "lines": ["yin","yin","yin","yin","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 19, Přiblížení, představuje blížící se růst a příležitost.\n\nJe to období otevřenosti a vstřícnosti.",
      "oracle": "Je příznivé jednat s laskavostí.\n\nPříležitost má svůj čas.",
      "anatomy": "Země nad Jezerem – otevřenost pod stabilitou.\n\nStruktura naznačuje vzestup.",
      "evolution": "Růst je přirozený.\n\nJe třeba být připraven na změnu."
    },
    "en": {
      "meaning": "Hexagram 19, Approach, represents approaching growth and opportunity.\n\nIt marks a time of openness.",
      "oracle": "It is favorable to act with kindness.\n\nOpportunity has its season.",
      "anatomy": "Earth above Lake — openness beneath stability.\n\nThe structure suggests ascent.",
      "evolution": "Growth unfolds naturally.\n\nPreparation is essential."
    }
  }
},
{
  "id": 20,
  "number": 20,
  "chineseName": "觀",
    "romanization": "Guān",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yin","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 20, Nazírání, symbolizuje pozorování a hluboké vnímání.\n\nSkutečné porozumění přichází z ticha.",
      "oracle": "Je příznivé zastavit se a dívat.\n\nUnáhlenost zkresluje pohled.",
      "anatomy": "Vítr nad Zemí – jemný vliv nad stabilitou.\n\nStruktura vyjadřuje pozorování.",
      "evolution": "Z nazírání se rodí moudrost.\n\nBez reflexe nelze růst."
    },
    "en": {
      "meaning": "Hexagram 20, Contemplation, symbolizes observation and deep perception.\n\nTrue understanding arises from stillness.",
      "oracle": "It is favorable to pause and observe.\n\nHaste distorts perception.",
      "anatomy": "Wind above Earth — subtle influence over stability.\n\nThe structure expresses observation.",
      "evolution": "From contemplation, wisdom emerges.\n\nWithout reflection, growth is impossible."
    }
  }
},
{
  "id": 21,
  "number": 21,
  "chineseName": "噬嗑",
    "romanization": "Shì Kè",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yin","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 21, Prokousnutí, symbolizuje potřebu odstranit překážku, která brání průchodu. Něco stojí mezi záměrem a jeho uskutečněním.\n\nJde o rozhodné jednání, které musí být spravedlivé a přiměřené.",
      "oracle": "Je příznivé jednat pevně, ale nestranně.\n\nPřílišná tvrdost vyvolá odpor.",
      "anatomy": "Oheň nad Hromem – jasnost nad pohybem.\n\nStruktura ukazuje napětí vyžadující zásah.",
      "evolution": "Odstranění překážky přináší průchod.\n\nNespravedlivý zásah vytváří nové problémy."
    },
    "en": {
      "meaning": "Hexagram 21, Biting Through, represents the need to remove an obstruction. Something blocks the path between intention and fulfillment.\n\nIt calls for decisive yet fair action.",
      "oracle": "It is favorable to act firmly and impartially.\n\nExcessive severity provokes resistance.",
      "anatomy": "Fire above Thunder — clarity above movement.\n\nThe structure suggests intervention.",
      "evolution": "Removing the obstacle restores flow.\n\nUnjust action creates new obstacles."
    }
  }
},
{
  "id": 22,
  "number": 22,
  "chineseName": "賁",
    "romanization": "Bì",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yin","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 22, Půvab, vyjadřuje krásu a zdobnost. Forma zde doplňuje obsah.\n\nKrása má smysl tehdy, když podporuje pravdivost.",
      "oracle": "Je příznivé dbát na vnější úpravu, ale nezapomínat na podstatu.\n\nPrázdná okázalost je nestálá.",
      "anatomy": "Oheň nad Horou – světlo osvětluje pevnost.\n\nStruktura zdůrazňuje výraz.",
      "evolution": "Půvab přitahuje pozornost.\n\nBez obsahu ztrácí hodnotu."
    },
    "en": {
      "meaning": "Hexagram 22, Grace, represents beauty and refinement. Form enhances substance.\n\nBeauty serves truth when it reflects authenticity.",
      "oracle": "It is favorable to cultivate outward expression while preserving essence.\n\nEmpty display is fleeting.",
      "anatomy": "Fire above Mountain — illumination over stability.\n\nThe structure emphasizes expression.",
      "evolution": "Grace draws attention.\n\nWithout substance, it fades."
    }
  }
},
{
  "id": 23,
  "number": 23,
  "chineseName": "剝",
    "romanization": "Bō",
  "isEvolving": false,
  "lines": ["yin","yin","yin","yin","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 23, Rozpad, symbolizuje úbytek a postupné oslabování.\n\nJe to čas zjednodušení a návratu k podstatě.",
      "oracle": "Není příznivé zahajovat nové věci.\n\nJe vhodné chránit jádro.",
      "anatomy": "Hora nad Zemí – pevnost oslabena podkladem.\n\nStruktura ukazuje postupné odlupování.",
      "evolution": "Rozpad odhaluje základ.\n\nZ prázdna vzniká možnost obnovy."
    },
    "en": {
      "meaning": "Hexagram 23, Splitting Apart, symbolizes decline and gradual erosion.\n\nIt is a time of simplification.",
      "oracle": "It is not favorable to begin new ventures.\n\nProtect what is essential.",
      "anatomy": "Mountain above Earth — firmness losing support.\n\nThe structure suggests erosion.",
      "evolution": "Decline reveals foundations.\n\nFrom emptiness comes renewal."
    }
  }
},
{
  "id": 24,
  "number": 24,
  "chineseName": "復",
    "romanization": "Fù",
  "isEvolving": false,
  "lines": ["yang","yin","yin","yin","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 24, Návrat, představuje nový začátek po období útlumu.\n\nMalý pohyb směrem k obnově přináší naději.",
      "oracle": "Je příznivé vrátit se ke správnému směru.\n\nVytrvalost upevňuje obnovu.",
      "anatomy": "Hrom pod Zemí – nový pohyb pod povrchem.\n\nStruktura naznačuje obrat.",
      "evolution": "Návrat je začátkem růstu.\n\nPravidelnost podporuje stabilitu."
    },
    "en": {
      "meaning": "Hexagram 24, Return, represents renewal after decline.\n\nA small movement toward correction brings hope.",
      "oracle": "It is favorable to return to the right path.\n\nPerseverance strengthens renewal.",
      "anatomy": "Thunder beneath Earth — movement beneath stillness.\n\nThe structure signals reversal.",
      "evolution": "Return marks the beginning of growth.\n\nConsistency stabilizes progress."
    }
  }
},
{
  "id": 25,
  "number": 25,
  "chineseName": "無妄",
    "romanization": "Wú Wàng",
  "isEvolving": false,
  "lines": ["yang","yang","yang","yin","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 25, Nevinnost, představuje spontánní pravdivost.\n\nJednání bez postranních úmyslů přináší čistotu.",
      "oracle": "Je příznivé jednat přirozeně.\n\nZáměrná manipulace přináší ztrátu.",
      "anatomy": "Nebe nad Hromem – síla nad impulsem.\n\nStruktura vyjadřuje přímost.",
      "evolution": "Upřímnost podporuje důvěru.\n\nZtráta autenticity vede k potížím."
    },
    "en": {
      "meaning": "Hexagram 25, Innocence, represents natural sincerity.\n\nAction without hidden motive brings clarity.",
      "oracle": "It is favorable to act naturally.\n\nManipulation leads to loss.",
      "anatomy": "Heaven above Thunder — strength over impulse.\n\nThe structure expresses straightforwardness.",
      "evolution": "Sincerity builds trust.\n\nLoss of authenticity brings trouble."
    }
  }
},
{
  "id": 26,
  "number": 26,
  "chineseName": "大畜",
    "romanization": "Dà Chù",
  "isEvolving": false,
  "lines": ["yang","yin","yin","yang","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 26, Velké zkrocení, symbolizuje nahromaděnou sílu pod kontrolou.\n\nOvládání energie přináší stabilitu.",
      "oracle": "Je příznivé zadržet sílu do správného času.\n\nNeuvážené uvolnění oslabuje.",
      "anatomy": "Hora nad Nebem – omezení síly.\n\nStruktura ukazuje kontrolu.",
      "evolution": "Zadržení posiluje.\n\nPřipravenost vede k úspěchu."
    },
    "en": {
      "meaning": "Hexagram 26, The Taming Power of the Great, represents stored strength under control.\n\nRestraint creates stability.",
      "oracle": "It is favorable to hold strength until the proper time.\n\nPremature release weakens.",
      "anatomy": "Mountain above Heaven — containment of force.\n\nThe structure expresses control.",
      "evolution": "Restraint builds power.\n\nPreparedness leads to success."
    }
  }
},
{
  "id": 27,
  "number": 27,
  "chineseName": "頤",
    "romanization": "Yí",
  "isEvolving": false,
  "lines": ["yang","yin","yin","yin","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 27, Výživa, představuje péči o tělo i ducha.\n\nTo, co přijímáme, nás utváří.",
      "oracle": "Je příznivé dbát na to, čím se živíš.\n\nNesprávná výživa oslabuje.",
      "anatomy": "Hora nad Hromem – klid nad pohybem.\n\nStruktura zdůrazňuje podporu.",
      "evolution": "Správná péče přináší sílu.\n\nZanedbání vede k úbytku."
    },
    "en": {
      "meaning": "Hexagram 27, Nourishment, represents care for body and spirit.\n\nWhat we take in shapes us.",
      "oracle": "It is favorable to be mindful of what you nourish yourself with.\n\nImproper nourishment weakens.",
      "anatomy": "Mountain above Thunder — stillness over movement.\n\nThe structure emphasizes support.",
      "evolution": "Proper care builds strength.\n\nNeglect leads to decline."
    }
  }
},
{
  "id": 28,
  "number": 28,
  "chineseName": "大過",
    "romanization": "Dà Guò",
  "isEvolving": false,
  "lines": ["yin","yang","yang","yang","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 28, Přetížení, symbolizuje situaci, kdy zátěž přesahuje únosnost.\n\nJe nutné jednat rozhodně.",
      "oracle": "Je příznivé rychle napravit nerovnováhu.\n\nOtálení zvyšuje tlak.",
      "anatomy": "Jezero nad Větrem – tlak nad pronikáním.\n\nStruktura naznačuje křehkost.",
      "evolution": "Rozhodný zásah přináší úlevu.\n\nIgnorování vede k zlomu."
    },
    "en": {
      "meaning": "Hexagram 28, Preponderance of the Great, symbolizes excessive burden.\n\nDecisive action is required.",
      "oracle": "It is favorable to correct imbalance swiftly.\n\nDelay increases strain.",
      "anatomy": "Lake above Wind — pressure over penetration.\n\nThe structure suggests fragility.",
      "evolution": "Timely intervention relieves tension.\n\nNeglect leads to breakdown."
    }
  }
},
{
  "id": 29,
  "number": 29,
  "chineseName": "坎",
    "romanization": "Kǎn",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 29, Propast, představuje opakované nebezpečí.\n\nOdvaha a bdělost jsou nezbytné.",
      "oracle": "Je příznivé zachovat vnitřní světlo.\n\nStrach oslabuje úsudek.",
      "anatomy": "Voda nad Vodou – hluboká propast.\n\nStruktura zdůrazňuje riziko.",
      "evolution": "Vytrvalost vede k bezpečí.\n\nZtráta pozornosti ohrožuje."
    },
    "en": {
      "meaning": "Hexagram 29, The Abysmal, represents repeated danger.\n\nCourage and vigilance are essential.",
      "oracle": "It is favorable to maintain inner light.\n\nFear clouds judgment.",
      "anatomy": "Water above Water — deep abyss.\n\nThe structure emphasizes risk.",
      "evolution": "Perseverance leads to safety.\n\nCarelessness endangers."
    }
  }
},
{
  "id": 30,
  "number": 30,
  "chineseName": "離",
    "romanization": "Lí",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yang","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 30, Přilnutí, představuje světlo a jasnost.\n\nJasné poznání přináší orientaci.",
      "oracle": "Je příznivé držet se pravdy.\n\nBez středu světlo oslepuje.",
      "anatomy": "Oheň nad Ohněm – zdvojené světlo.\n\nStruktura symbolizuje jasnost.",
      "evolution": "Světlo vede cestu.\n\nZtráta rovnováhy vede k chaosu."
    },
    "en": {
      "meaning": "Hexagram 30, The Clinging, represents light and clarity.\n\nClear perception provides direction.",
      "oracle": "It is favorable to hold to truth.\n\nWithout balance, light blinds.",
      "anatomy": "Fire above Fire — doubled brightness.\n\nThe structure symbolizes illumination.",
      "evolution": "Light guides the way.\n\nImbalance leads to confusion."
    }
  }
},
{
  "id": 31,
  "number": 31,
  "chineseName": "咸",
    "romanization": "Xián",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yang","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 31, Vliv, symbolizuje přitažlivost a vzájemné působení.\n\nCitlivost otevírá spojení.",
      "oracle": "Je příznivé reagovat s upřímností.\n\nManipulace narušuje vztahy.",
      "anatomy": "Jezero nad Horou – radost nad klidem.\n\nStruktura vyjadřuje přitažlivost.",
      "evolution": "Vliv se prohlubuje skrze důvěru.\n\nBez respektu slábne."
    },
    "en": {
      "meaning": "Hexagram 31, Influence, represents attraction and mutual impact.\n\nSensitivity creates connection.",
      "oracle": "It is favorable to respond sincerely.\n\nManipulation weakens bonds.",
      "anatomy": "Lake above Mountain — joy over stillness.\n\nThe structure expresses attraction.",
      "evolution": "Influence deepens through trust.\n\nWithout respect, it fades."
    }
  }
},
{
  "id": 32,
  "number": 32,
  "chineseName": "恆",
    "romanization": "Héng",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yang","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 32, Trvání, představuje stálost a vytrvalost.\n\nPravidelnost přináší sílu.",
      "oracle": "Je příznivé držet se osvědčené cesty.\n\nNestálost oslabuje důvěru.",
      "anatomy": "Hrom nad Větrem – pohyb a průnik.\n\nStruktura vyjadřuje rytmus.",
      "evolution": "Stálost buduje stabilitu.\n\nPřerušení přináší oslabení."
    },
    "en": {
      "meaning": "Hexagram 32, Duration, represents endurance and constancy.\n\nConsistency creates strength.",
      "oracle": "It is favorable to remain steady.\n\nInconsistency weakens trust.",
      "anatomy": "Thunder above Wind — movement and penetration.\n\nThe structure expresses rhythm.",
      "evolution": "Endurance builds stability.\n\nInterruption brings weakness."
    }
  }
},
{
  "id": 33,
  "number": 33,
  "chineseName": "遯",
    "romanization": "Dùn",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yang","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 33, Ústup, představuje moudré stažení.\n\nNěkdy je ustoupení silou.",
      "oracle": "Je příznivé vyhnout se zbytečnému střetu.\n\nTvrdohlavost přináší ztrátu.",
      "anatomy": "Hora nad Nebem – omezení síly.\n\nStruktura symbolizuje ústup.",
      "evolution": "Včasný ústup zachovává sílu.\n\nSetrvání vede k vyčerpání."
    },
    "en": {
      "meaning": "Hexagram 33, Retreat, represents wise withdrawal.\n\nSometimes retreat is strength.",
      "oracle": "It is favorable to avoid unnecessary confrontation.\n\nStubbornness leads to loss.",
      "anatomy": "Mountain above Heaven — restraining strength.\n\nThe structure symbolizes withdrawal.",
      "evolution": "Timely retreat preserves energy.\n\nPersistence leads to exhaustion."
    }
  }
},
{
  "id": 34,
  "number": 34,
  "chineseName": "大壯",
    "romanization": "Dà Zhuàng",
  "isEvolving": false,
  "lines": ["yang","yang","yang","yang","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 34, Velká síla, symbolizuje silný vzestup energie.\n\nSíla musí být řízena moudrostí.",
      "oracle": "Je příznivé jednat pevně, ale spravedlivě.\n\nNásilí přináší odpor.",
      "anatomy": "Hrom nad Nebem – pohyb nad silou.\n\nStruktura vyjadřuje mohutnost.",
      "evolution": "Síla roste odpovědností.\n\nBez kontroly vede k pádu."
    },
    "en": {
      "meaning": "Hexagram 34, Great Power, represents rising strength.\n\nPower must be guided by wisdom.",
      "oracle": "It is favorable to act firmly yet justly.\n\nForce invites resistance.",
      "anatomy": "Thunder above Heaven — movement over strength.\n\nThe structure expresses vigor.",
      "evolution": "Power grows through responsibility.\n\nWithout control, it declines."
    }
  }
},
{
  "id": 35,
  "number": 35,
  "chineseName": "晉",
    "romanization": "Jìn",
  "isEvolving": false,
  "lines": ["yin","yin","yin","yang","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 35, Pokrok, představuje vzestup a zviditelnění.\n\nSprávné světlo přináší uznání.",
      "oracle": "Je příznivé vystoupit vpřed.\n\nPýcha ohrožuje úspěch.",
      "anatomy": "Oheň nad Zemí – světlo nad stabilitou.\n\nStruktura symbolizuje růst.",
      "evolution": "Pokrok přichází skrze jasnost.\n\nBez skromnosti se zastaví."
    },
    "en": {
      "meaning": "Hexagram 35, Progress, represents advancement and visibility.\n\nRight illumination brings recognition.",
      "oracle": "It is favorable to step forward.\n\nPride endangers success.",
      "anatomy": "Fire above Earth — light over stability.\n\nThe structure symbolizes ascent.",
      "evolution": "Progress arises through clarity.\n\nWithout humility, it halts."
    }
  }
},
{
  "id": 36,
  "number": 36,
  "chineseName": "明夷",
    "romanization": "Míng Yí",
  "isEvolving": false,
  "lines": ["yang","yang","yang","yin","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 36, Zatemnění světla, představuje období, kdy jasnost je skrytá.\n\nVnitřní světlo je třeba chránit.",
      "oracle": "Je příznivé zůstat nenápadný.\n\nOdhalení přináší riziko.",
      "anatomy": "Země nad Ohněm – světlo pod povrchem.\n\nStruktura symbolizuje utajení.",
      "evolution": "Trpělivost uchovává sílu.\n\nČas přinese návrat světla."
    },
    "en": {
      "meaning": "Hexagram 36, Darkening of the Light, represents a time when clarity is concealed.\n\nInner light must be protected.",
      "oracle": "It is favorable to remain inconspicuous.\n\nExposure invites danger.",
      "anatomy": "Earth above Fire — light hidden beneath.\n\nThe structure symbolizes concealment.",
      "evolution": "Patience preserves strength.\n\nTime restores illumination."
    }
  }
},
{
  "id": 37,
  "number": 37,
  "chineseName": "家人",
    "romanization": "Jiā Rén",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 37, Rodina, symbolizuje řád ve vztazích.\n\nSprávné uspořádání vytváří harmonii.",
      "oracle": "Je příznivé udržovat jasné role.\n\nNejasnost narušuje jednotu.",
      "anatomy": "Vítr nad Ohněm – vliv nad světlem.\n\nStruktura vyjadřuje vztah.",
      "evolution": "Řád přináší stabilitu.\n\nBez pravidel vzniká chaos."
    },
    "en": {
      "meaning": "Hexagram 37, The Family, represents order in relationships.\n\nProper structure creates harmony.",
      "oracle": "It is favorable to maintain clear roles.\n\nAmbiguity disrupts unity.",
      "anatomy": "Wind above Fire — influence over clarity.\n\nThe structure expresses relationship.",
      "evolution": "Order builds stability.\n\nWithout structure, chaos arises."
    }
  }
},
{
  "id": 38,
  "number": 38,
  "chineseName": "睽",
    "romanization": "Kuí",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yang","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 38, Protiklad, představuje rozdílnost pohledů.\n\nRozdíl nemusí znamenat nepřátelství.",
      "oracle": "Je příznivé hledat společný základ.\n\nTvrdé lpění vede ke sporu.",
      "anatomy": "Oheň nad Jezerem – světlo nad radostí.\n\nStruktura symbolizuje odlišnost.",
      "evolution": "Respekt umožňuje soužití.\n\nNesnášenlivost rozděluje."
    },
    "en": {
      "meaning": "Hexagram 38, Opposition, represents differing perspectives.\n\nDifference does not imply hostility.",
      "oracle": "It is favorable to seek common ground.\n\nRigid attachment creates conflict.",
      "anatomy": "Fire above Lake — clarity over joy.\n\nThe structure symbolizes divergence.",
      "evolution": "Respect allows coexistence.\n\nIntolerance divides."
    }
  }
},
{
  "id": 39,
  "number": 39,
  "chineseName": "蹇",
    "romanization": "Jiǎn",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 39, Překážka, symbolizuje obtížnou cestu.\n\nJe třeba hledat podporu.",
      "oracle": "Je příznivé obrátit se o pomoc.\n\nIzolace prohlubuje obtíže.",
      "anatomy": "Voda nad Horou – proud proti pevnosti.\n\nStruktura vyjadřuje zablokování.",
      "evolution": "Spolupráce přináší řešení.\n\nTvrdohlavost prodlužuje cestu."
    },
    "en": {
      "meaning": "Hexagram 39, Obstruction, represents difficulty and blocked progress.\n\nSupport is necessary.",
      "oracle": "It is favorable to seek assistance.\n\nIsolation deepens hardship.",
      "anatomy": "Water above Mountain — flow against firmness.\n\nThe structure expresses blockage.",
      "evolution": "Cooperation brings resolution.\n\nStubbornness prolongs struggle."
    }
  }
},
{
  "id": 40,
  "number": 40,
  "chineseName": "解",
    "romanization": "Xiè",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yang","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 40, Uvolnění, představuje rozptýlení napětí.\n\nPo obtížích přichází úleva.",
      "oracle": "Je příznivé odpustit a pustit.\n\nZbytečné setrvávání prodlužuje bolest.",
      "anatomy": "Hrom nad Vodou – pohyb nad nebezpečím.\n\nStruktura symbolizuje rozvázání.",
      "evolution": "Uvolnění přináší nový začátek.\n\nBez odpuštění nelze pokračovat."
    },
    "en": {
      "meaning": "Hexagram 40, Deliverance, represents release from tension.\n\nAfter difficulty comes relief.",
      "oracle": "It is favorable to forgive and let go.\n\nHolding on prolongs suffering.",
      "anatomy": "Thunder above Water — movement over danger.\n\nThe structure symbolizes resolution.",
      "evolution": "Release opens a new beginning.\n\nWithout forgiveness, progress stalls."
    }
  }
},
{
  "id": 41,
  "number": 41,
  "chineseName": "損",
    "romanization": "Sǔn",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yin","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 41, Úbytek, představuje vědomé zmenšení. Někdy je nutné něco obětovat, aby celek zesílil.\n\nZjednodušení přináší jasnost.",
      "oracle": "Je příznivé omezit nadbytečné.\n\nOběť má smysl, pokud je dobrovolná.",
      "anatomy": "Hora nad Jezerem – pevnost nad radostí.\n\nStruktura symbolizuje omezení.",
      "evolution": "Úbytek vytváří prostor.\n\nZtráta může vést k růstu."
    },
    "en": {
      "meaning": "Hexagram 41, Decrease, represents conscious reduction. Sometimes something must be sacrificed for the whole to strengthen.\n\nSimplification brings clarity.",
      "oracle": "It is favorable to reduce excess.\n\nSacrifice has meaning when voluntary.",
      "anatomy": "Mountain above Lake — restraint over joy.\n\nThe structure symbolizes limitation.",
      "evolution": "Decrease creates space.\n\nLoss can lead to growth."
    }
  }
},
{
  "id": 42,
  "number": 42,
  "chineseName": "益",
    "romanization": "Yì",
  "isEvolving": false,
  "lines": ["yang","yang","yin","yang","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 42, Přínos, symbolizuje rozšíření a podporu.\n\nRůst je výsledkem sdílení.",
      "oracle": "Je příznivé jednat ve prospěch druhých.\n\nSobectví omezuje rozvoj.",
      "anatomy": "Vítr nad Hromem – pronikání nad pohybem.\n\nStruktura naznačuje zesílení.",
      "evolution": "Podpora přináší hojnost.\n\nNerovnováha vede k úbytku."
    },
    "en": {
      "meaning": "Hexagram 42, Increase, represents expansion and support.\n\nGrowth arises from generosity.",
      "oracle": "It is favorable to act for the benefit of others.\n\nSelfishness limits development.",
      "anatomy": "Wind above Thunder — penetration over movement.\n\nThe structure suggests amplification.",
      "evolution": "Support creates abundance.\n\nImbalance leads to decline."
    }
  }
},
{
  "id": 43,
  "number": 43,
  "chineseName": "夬",
    "romanization": "Guài",
  "isEvolving": false,
  "lines": ["yang","yang","yang","yang","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 43, Rozhodnutí, představuje průlom.\n\nJe nutné vyjádřit pravdu otevřeně.",
      "oracle": "Je příznivé jednat odvážně.\n\nZbytečné otálení oslabuje.",
      "anatomy": "Nebe nad Jezerem – síla nad radostí.\n\nStruktura symbolizuje rozhodnost.",
      "evolution": "Jasné rozhodnutí přináší změnu.\n\nBez činu zůstává napětí."
    },
    "en": {
      "meaning": "Hexagram 43, Breakthrough, represents decisive action.\n\nTruth must be expressed openly.",
      "oracle": "It is favorable to act boldly.\n\nHesitation weakens resolve.",
      "anatomy": "Heaven above Lake — strength over joy.\n\nThe structure symbolizes determination.",
      "evolution": "Clear decision creates change.\n\nWithout action, tension persists."
    }
  }
},
{
  "id": 44,
  "number": 44,
  "chineseName": "姤",
    "romanization": "Gòu",
  "isEvolving": false,
  "lines": ["yin","yang","yang","yang","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 44, Setkání, představuje náhlý vliv.\n\nJe třeba rozlišovat, co přijmout.",
      "oracle": "Je příznivé zachovat bdělost.\n\nNe každý vliv je vhodný.",
      "anatomy": "Vítr nad Nebem – pronikání nad silou.\n\nStruktura vyjadřuje náhlost.",
      "evolution": "Rozpoznání chrání stabilitu.\n\nBez pozornosti vzniká narušení."
    },
    "en": {
      "meaning": "Hexagram 44, Coming to Meet, represents sudden influence.\n\nDiscernment is required.",
      "oracle": "It is favorable to remain alert.\n\nNot every influence is beneficial.",
      "anatomy": "Wind above Heaven — penetration over strength.\n\nThe structure expresses suddenness.",
      "evolution": "Recognition preserves stability.\n\nWithout awareness, disruption follows."
    }
  }
},
{
  "id": 45,
  "number": 45,
  "chineseName": "萃",
    "romanization": "Cuì",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yin","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 45, Shromáždění, symbolizuje sjednocení kolem společného cíle.\n\nJednota vyžaduje vedení.",
      "oracle": "Je příznivé podporovat spolupráci.\n\nBez směru se skupina rozpadá.",
      "anatomy": "Jezero nad Zemí – radost nad stabilitou.\n\nStruktura vyjadřuje shlukování.",
      "evolution": "Sjednocení posiluje.\n\nNejednota oslabuje."
    },
    "en": {
      "meaning": "Hexagram 45, Gathering Together, symbolizes union around a shared purpose.\n\nUnity requires leadership.",
      "oracle": "It is favorable to foster cooperation.\n\nWithout direction, groups dissolve.",
      "anatomy": "Lake above Earth — joy over stability.\n\nThe structure expresses assembly.",
      "evolution": "Unity strengthens.\n\nDivision weakens."
    }
  }
},
{
  "id": 46,
  "number": 46,
  "chineseName": "升",
    "romanization": "Shēng",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 46, Vzestup, představuje postupné stoupání.\n\nPokrok je výsledkem vytrvalosti.",
      "oracle": "Je příznivé pokračovat krok za krokem.\n\nNetrpělivost narušuje rytmus.",
      "anatomy": "Země nad Větrem – stabilita nad pronikáním.\n\nStruktura naznačuje růst.",
      "evolution": "Vytrvalý postup přináší úspěch.\n\nSpěch vede k zakolísání."
    },
    "en": {
      "meaning": "Hexagram 46, Pushing Upward, represents gradual ascent.\n\nProgress results from perseverance.",
      "oracle": "It is favorable to advance step by step.\n\nImpatience disrupts rhythm.",
      "anatomy": "Earth above Wind — stability over penetration.\n\nThe structure suggests growth.",
      "evolution": "Steady progress brings success.\n\nHaste causes imbalance."
    }
  }
},
{
  "id": 47,
  "number": 47,
  "chineseName": "困",
    "romanization": "Kùn",
  "isEvolving": false,
  "lines": ["yin","yang","yang","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 47, Tíseň, symbolizuje omezení a tlak.\n\nVnitřní síla je klíčem k vytrvání.",
      "oracle": "Je příznivé zachovat důstojnost.\n\nZoufalství oslabuje.",
      "anatomy": "Jezero nad Vodou – radost nad nebezpečím.\n\nStruktura vyjadřuje napětí.",
      "evolution": "Vytrvalost přináší úlevu.\n\nRezignace vede k pádu."
    },
    "en": {
      "meaning": "Hexagram 47, Oppression, represents constraint and pressure.\n\nInner strength ensures endurance.",
      "oracle": "It is favorable to preserve dignity.\n\nDespair weakens resolve.",
      "anatomy": "Lake above Water — joy over danger.\n\nThe structure expresses tension.",
      "evolution": "Perseverance brings relief.\n\nResignation leads to decline."
    }
  }
},
{
  "id": 48,
  "number": 48,
  "chineseName": "井",
    "romanization": "Jǐng",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 48, Studna, představuje zdroj, který je stále dostupný.\n\nHodnota spočívá v péči o základ.",
      "oracle": "Je příznivé udržovat zdroj čistý.\n\nZanedbání vede k úbytku.",
      "anatomy": "Voda nad Větrem – zdroj pod povrchem.\n\nStruktura symbolizuje hloubku.",
      "evolution": "Obnova zdroje přináší trvalost.\n\nIgnorování vede k vyschnutí."
    },
    "en": {
      "meaning": "Hexagram 48, The Well, represents a constant source.\n\nValue lies in maintaining the foundation.",
      "oracle": "It is favorable to keep the source pure.\n\nNeglect leads to depletion.",
      "anatomy": "Water above Wind — depth beneath penetration.\n\nThe structure symbolizes depth.",
      "evolution": "Restoring the source ensures continuity.\n\nIgnoring it causes decline."
    }
  }
},
{
  "id": 49,
  "number": 49,
  "chineseName": "革",
    "romanization": "Gé",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yang","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 49, Proměna, symbolizuje zásadní změnu.\n\nZměna musí být oprávněná.",
      "oracle": "Je příznivé jednat ve správný čas.\n\nUnáhlená revoluce přináší chaos.",
      "anatomy": "Jezero nad Ohněm – radost nad světlem.\n\nStruktura vyjadřuje obrat.",
      "evolution": "Oprávněná změna přináší obnovu.\n\nBez přípravy vzniká nestabilita."
    },
    "en": {
      "meaning": "Hexagram 49, Revolution, represents fundamental change.\n\nChange must be justified.",
      "oracle": "It is favorable to act at the right moment.\n\nPremature upheaval causes chaos.",
      "anatomy": "Lake above Fire — joy over light.\n\nThe structure expresses transformation.",
      "evolution": "Legitimate change brings renewal.\n\nWithout preparation, instability follows."
    }
  }
},
{
  "id": 50,
  "number": 50,
  "chineseName": "鼎",
    "romanization": "Dǐng",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yang","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 50, Kotlík, představuje přeměnu skrze kultivaci.\n\nVnitřní proměna vytváří hodnotu.",
      "oracle": "Je příznivé zušlechťovat to, co je hrubé.\n\nBez péče zůstává surovost.",
      "anatomy": "Oheň nad Větrem – světlo nad pronikáním.\n\nStruktura vyjadřuje přetvoření.",
      "evolution": "Kultivace přináší růst.\n\nZanedbání vede k úpadku."
    },
    "en": {
      "meaning": "Hexagram 50, The Cauldron, represents transformation through cultivation.\n\nInner refinement creates value.",
      "oracle": "It is favorable to refine what is raw.\n\nWithout care, coarseness remains.",
      "anatomy": "Fire above Wind — light over penetration.\n\nThe structure symbolizes transformation.",
      "evolution": "Cultivation brings growth.\n\nNeglect causes decline."
    }
  }
},
{
  "id": 51,
  "number": 51,
  "chineseName": "震",
    "romanization": "Zhèn",
  "isEvolving": false,
  "lines": ["yang","yin","yin","yang","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 51, Hrom, symbolizuje náhlý otřes.\n\nŠok probouzí vědomí.",
      "oracle": "Je příznivé zachovat klid.\n\nPanika vede k chybám.",
      "anatomy": "Hrom nad Hromem – zdvojený pohyb.\n\nStruktura vyjadřuje náhlost.",
      "evolution": "Otřes přináší uvědomění.\n\nBez vyrovnání zůstává strach."
    },
    "en": {
      "meaning": "Hexagram 51, The Arousing, represents sudden shock.\n\nShock awakens awareness.",
      "oracle": "It is favorable to remain calm.\n\nPanic leads to mistakes.",
      "anatomy": "Thunder above Thunder — doubled movement.\n\nThe structure expresses suddenness.",
      "evolution": "Shock brings realization.\n\nWithout composure, fear persists."
    }
  }
},
{
  "id": 52,
  "number": 52,
  "chineseName": "艮",
    "romanization": "Gèn",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yin","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 52, Klid, představuje zastavení.\n\nZastavení přináší soustředění.",
      "oracle": "Je příznivé spočinout.\n\nNepokoj rozptyluje.",
      "anatomy": "Hora nad Horou – zdvojená pevnost.\n\nStruktura symbolizuje nehybnost.",
      "evolution": "Klid přináší jasno.\n\nBez zastavení nelze pochopit."
    },
    "en": {
      "meaning": "Hexagram 52, Keeping Still, represents stillness.\n\nStopping brings focus.",
      "oracle": "It is favorable to pause.\n\nRestlessness scatters attention.",
      "anatomy": "Mountain above Mountain — doubled stillness.\n\nThe structure symbolizes immobility.",
      "evolution": "Stillness brings clarity.\n\nWithout pause, understanding fails."
    }
  }
},
{
  "id": 53,
  "number": 53,
  "chineseName": "漸",
    "romanization": "Jiàn",
  "isEvolving": false,
  "lines": ["yin","yin","yang","yin","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 53, Postupný vývoj, symbolizuje pomalý růst.\n\nTrpělivost vytváří pevné základy.",
      "oracle": "Je příznivé postupovat pomalu.\n\nSpěch narušuje vývoj.",
      "anatomy": "Vítr nad Horou – pohyb nad klidem.\n\nStruktura vyjadřuje postup.",
      "evolution": "Postupné zrání přináší stabilitu.\n\nNedůslednost vede k oslabení."
    },
    "en": {
      "meaning": "Hexagram 53, Gradual Development, represents slow progress.\n\nPatience builds solid foundations.",
      "oracle": "It is favorable to advance gradually.\n\nHaste disrupts development.",
      "anatomy": "Wind above Mountain — movement over stillness.\n\nThe structure expresses gradual growth.",
      "evolution": "Steady maturation ensures stability.\n\nInconsistency weakens progress."
    }
  }
},
{
  "id": 54,
  "number": 54,
  "chineseName": "歸妹",
    "romanization": "Guī Mèi",
  "isEvolving": false,
  "lines": ["yang","yin","yin","yang","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 54, Provdaná dívka, představuje vstup do nové situace bez plné kontroly.\n\nJe nutné přijmout dané okolnosti.",
      "oracle": "Je příznivé zachovat důstojnost.\n\nNerealistická očekávání přinášejí zklamání.",
      "anatomy": "Hrom nad Jezerem – pohyb nad radostí.\n\nStruktura vyjadřuje nerovnováhu.",
      "evolution": "Přijetí přináší vyrovnání.\n\nVzdor vede k potížím."
    },
    "en": {
      "meaning": "Hexagram 54, The Marrying Maiden, represents entering a new situation without full control.\n\nAcceptance of circumstances is required.",
      "oracle": "It is favorable to preserve dignity.\n\nUnrealistic expectations bring disappointment.",
      "anatomy": "Thunder above Lake — movement over joy.\n\nThe structure expresses imbalance.",
      "evolution": "Acceptance restores equilibrium.\n\nResistance creates difficulty."
    }
  }
},
{
  "id": 55,
  "number": 55,
  "chineseName": "豐",
    "romanization": "Fēng",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yang","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 55, Hojnost, symbolizuje vrchol naplnění.\n\nJe to období světla a plnosti.",
      "oracle": "Je příznivé jednat otevřeně.\n\nPřehnanost ohrožuje rovnováhu.",
      "anatomy": "Hrom nad Ohněm – pohyb nad světlem.\n\nStruktura vyjadřuje intenzitu.",
      "evolution": "Hojnost vyžaduje rozvahu.\n\nBez umírněnosti rychle pomine."
    },
    "en": {
      "meaning": "Hexagram 55, Abundance, represents fullness and peak development.\n\nIt is a time of brightness.",
      "oracle": "It is favorable to act openly.\n\nExcess threatens balance.",
      "anatomy": "Thunder above Fire — movement over light.\n\nThe structure expresses intensity.",
      "evolution": "Abundance requires prudence.\n\nWithout moderation, it fades."
    }
  }
},
{
  "id": 56,
  "number": 56,
  "chineseName": "旅",
    "romanization": "Lǚ",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yang","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 56, Poutník, symbolizuje přechodné období.\n\nJe třeba zachovat lehkost.",
      "oracle": "Je příznivé být zdvořilý a opatrný.\n\nDomýšlivost vede k potížím.",
      "anatomy": "Oheň nad Horou – světlo nad pevností.\n\nStruktura vyjadřuje dočasnost.",
      "evolution": "Přizpůsobení přináší bezpečí.\n\nTvrdost vyvolává odpor."
    },
    "en": {
      "meaning": "Hexagram 56, The Wanderer, represents a temporary state.\n\nLightness is necessary.",
      "oracle": "It is favorable to remain courteous and cautious.\n\nArrogance brings trouble.",
      "anatomy": "Fire above Mountain — light over stability.\n\nThe structure expresses transience.",
      "evolution": "Adaptation ensures safety.\n\nRigidity creates resistance."
    }
  }
},
{
  "id": 57,
  "number": 57,
  "chineseName": "巽",
    "romanization": "Xùn",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 57, Jemnost, představuje pronikavý vliv.\n\nMírnost má sílu.",
      "oracle": "Je příznivé působit nenápadně.\n\nNátlak vyvolává odpor.",
      "anatomy": "Vítr nad Větrem – zdvojené pronikání.\n\nStruktura symbolizuje vliv.",
      "evolution": "Trvalý jemný vliv přináší změnu.\n\nPřehnanost oslabuje účinek."
    },
    "en": {
      "meaning": "Hexagram 57, The Gentle, represents penetrating influence.\n\nGentleness holds power.",
      "oracle": "It is favorable to act subtly.\n\nForce provokes resistance.",
      "anatomy": "Wind above Wind — doubled penetration.\n\nThe structure symbolizes influence.",
      "evolution": "Persistent subtle action creates change.\n\nExcess weakens effect."
    }
  }
},
{
  "id": 58,
  "number": 58,
  "chineseName": "兌",
    "romanization": "Duì",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yang","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 58, Radost, symbolizuje otevřenost a sdílení.\n\nRadost spojuje.",
      "oracle": "Je příznivé komunikovat upřímně.\n\nPovrchnost vede k nedůvěře.",
      "anatomy": "Jezero nad Jezerem – zdvojená radost.\n\nStruktura vyjadřuje sdílení.",
      "evolution": "Radost posiluje vztahy.\n\nBez pravdivosti slábne."
    },
    "en": {
      "meaning": "Hexagram 58, The Joyous, represents openness and shared happiness.\n\nJoy unites.",
      "oracle": "It is favorable to communicate sincerely.\n\nSuperficiality erodes trust.",
      "anatomy": "Lake above Lake — doubled joy.\n\nThe structure expresses communication.",
      "evolution": "Joy strengthens bonds.\n\nWithout truth, it fades."
    }
  }
},
{
  "id": 59,
  "number": 59,
  "chineseName": "渙",
    "romanization": "Huàn",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yang","yin","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 59, Rozptýlení, představuje uvolnění napětí a rozptýlení překážek.\n\nJe čas rozpustit zatvrdlost.",
      "oracle": "Je příznivé otevřít srdce.\n\nUzavřenost brání spojení.",
      "anatomy": "Vítr nad Vodou – pronikání nad hloubkou.\n\nStruktura symbolizuje rozptýlení.",
      "evolution": "Uvolnění přináší obnovu.\n\nBez otevřenosti stagnace přetrvává."
    },
    "en": {
      "meaning": "Hexagram 59, Dispersion, represents dissolving rigidity.\n\nIt is time to release tension.",
      "oracle": "It is favorable to open the heart.\n\nClosedness prevents connection.",
      "anatomy": "Wind above Water — penetration over depth.\n\nThe structure symbolizes dispersal.",
      "evolution": "Release renews vitality.\n\nWithout openness, stagnation remains."
    }
  }
},
{
  "id": 60,
  "number": 60,
  "chineseName": "節",
    "romanization": "Jié",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 60, Omezení, symbolizuje hranice.\n\nSprávné míry vytvářejí svobodu.",
      "oracle": "Je příznivé stanovit jasná pravidla.\n\nPřehnané omezení dusí.",
      "anatomy": "Voda nad Jezerem – hloubka nad radostí.\n\nStruktura vyjadřuje míru.",
      "evolution": "Mírnost přináší rovnováhu.\n\nExtrémy vedou k nerovnováze."
    },
    "en": {
      "meaning": "Hexagram 60, Limitation, represents boundaries.\n\nProper limits create freedom.",
      "oracle": "It is favorable to set clear standards.\n\nExcessive restriction suffocates.",
      "anatomy": "Water above Lake — depth over joy.\n\nThe structure expresses measure.",
      "evolution": "Moderation ensures balance.\n\nExtremes create imbalance."
    }
  }
},
{
  "id": 61,
  "number": 61,
  "chineseName": "中孚",
    "romanization": "Zhōng Fú",
  "isEvolving": false,
  "lines": ["yang","yin","yin","yin","yang","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 61, Vnitřní pravdivost, symbolizuje hlubokou upřímnost.\n\nDůvěra vzniká zevnitř.",
      "oracle": "Je příznivé jednat pravdivě.\n\nFaleš oslabuje vztahy.",
      "anatomy": "Vítr nad Jezerem – vliv nad radostí.\n\nStruktura vyjadřuje otevřenost.",
      "evolution": "Upřímnost posiluje spojení.\n\nBez integrity nelze budovat."
    },
    "en": {
      "meaning": "Hexagram 61, Inner Truth, represents deep sincerity.\n\nTrust begins within.",
      "oracle": "It is favorable to act honestly.\n\nFalsehood weakens bonds.",
      "anatomy": "Wind above Lake — influence over joy.\n\nThe structure expresses openness.",
      "evolution": "Sincerity strengthens connection.\n\nWithout integrity, nothing endures."
    }
  }
},
{
  "id": 62,
  "number": 62,
  "chineseName": "小過",
    "romanization": "Xiǎo Guò",
  "isEvolving": false,
  "lines": ["yin","yang","yang","yin","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 62, Malé přetížení, symbolizuje potřebu věnovat pozornost detailům.\n\nMalé věci mají význam.",
      "oracle": "Je příznivé zaměřit se na drobnosti.\n\nPřehlížení detailů vede k chybám.",
      "anatomy": "Hrom nad Horou – pohyb nad klidem.\n\nStruktura naznačuje jemnou nerovnováhu.",
      "evolution": "Opatrnost přináší úspěch.\n\nVelké ambice mohou být předčasné."
    },
    "en": {
      "meaning": "Hexagram 62, Preponderance of the Small, represents attention to detail.\n\nSmall matters carry weight.",
      "oracle": "It is favorable to focus on minor tasks.\n\nOverlooking details leads to error.",
      "anatomy": "Thunder above Mountain — movement over stillness.\n\nThe structure suggests delicate imbalance.",
      "evolution": "Carefulness ensures success.\n\nGrand ambitions may be premature."
    }
  }
},
{
  "id": 63,
  "number": 63,
  "chineseName": "既濟",
    "romanization": "Jì Jì",
  "isEvolving": false,
  "lines": ["yang","yin","yang","yin","yang","yin"],
  "content": {
    "cs": {
      "meaning": "Hexagram 63, Po dokončení, symbolizuje stav po úspěchu.\n\nDokončení není konec bdělosti.",
      "oracle": "Je příznivé zachovat opatrnost.\n\nSebejistota vede k obratu.",
      "anatomy": "Voda nad Ohněm – nebezpečí nad světlem.\n\nStruktura vyjadřuje křehkou rovnováhu.",
      "evolution": "Udržení vyžaduje péči.\n\nBez pozornosti dochází k poklesu."
    },
    "en": {
      "meaning": "Hexagram 63, After Completion, represents a state after success.\n\nCompletion does not end vigilance.",
      "oracle": "It is favorable to remain cautious.\n\nOverconfidence invites reversal.",
      "anatomy": "Water above Fire — danger above light.\n\nThe structure expresses delicate balance.",
      "evolution": "Maintenance requires care.\n\nNeglect leads to decline."
    }
  }
},
{
  "id": 64,
  "number": 64,
  "chineseName": "未濟",
    "romanization": "Wèi Jì",
  "isEvolving": false,
  "lines": ["yin","yang","yin","yang","yin","yang"],
  "content": {
    "cs": {
      "meaning": "Hexagram 64, Před dokončením, představuje stav těsně před naplněním.\n\nCesta ještě není završena.",
      "oracle": "Je příznivé dokončit začaté.\n\nUnáhlenost přináší nezdar.",
      "anatomy": "Oheň nad Vodou – světlo nad nebezpečím.\n\nStruktura symbolizuje napětí před završení.",
      "evolution": "Pečlivé dokončení přináší úspěch.\n\nBez trpělivosti se cíl vzdálí."
    },
    "en": {
      "meaning": "Hexagram 64, Before Completion, represents a state just before fulfillment.\n\nThe journey is not yet complete.",
      "oracle": "It is favorable to finish what has begun.\n\nHaste leads to failure.",
      "anatomy": "Fire above Water — light over danger.\n\nThe structure symbolizes tension before completion.",
      "evolution": "Careful completion brings success.\n\nWithout patience, the goal recedes."
    }
  }
}
]