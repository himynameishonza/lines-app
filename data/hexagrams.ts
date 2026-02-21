export interface HexagramContent {
  name: string;
  meaning: string;
  oracle: {
    interpretation: string[];
    introspection: string[];
  };
  anatomy: string;
  evolution: {
    position: number;
    name: string;
    description: string;
    type: 0 | 1;
  }[];
}

export interface Hexagram {
  id: number;
  number: number;
  chineseName: string;
  romanization: string;
  elements?: [number, number]; // [bottom trigram, top trigram]
  lines: (0 | 1)[]; // Array of 6 lines, bottom to top (0 = yin, 1 = yang)
  graphics?: string; // Path to image file
  content: {
    cs: HexagramContent;
    en: HexagramContent;
  };
}

export const hexagrams: Hexagram[] = [
  {
    id: 1,
    number: 1,
    chineseName: "乾",
    romanization: "Qián",
    elements: [1, 1],
    lines: [1, 1, 1, 1, 1, 1],
    content: {
      cs: {
        name: "Tvořivý",
        meaning:
          "Tvořivý představuje čistý impulz začátku. Je to energie, která říká: „Teď je čas jednat.“ Nečeká na potvrzení ani na jistotu. Vychází z vnitřní jasnosti – z pocitu, že směr je správný. Tento hexagram symbolizuje schopnost převzít iniciativu a nést důsledky vlastního rozhodnutí.\n\nPsychologicky je to stav, kdy člověk přestává reagovat na okolnosti a začíná je vytvářet. Nejde o agresivní prosazování vůle, ale o soustředěnou, stabilní energii. Tvořivé je vytrvalost bez zbytečného hluku. Síla, která nepotřebuje dokazovat sama sebe.\n\nZároveň však upozorňuje na hranici. Každý vzestup má svůj vrchol. Pokud se síla oddělí od pokory, mění se v pýchu – a pýcha vede k obratu. Skutečná tvořivost spočívá v rovnováze mezi odvahou a sebekázní.\n\nTento hexagram tě vede k tomu, abys jednal vědomě, ne impulzivně. Pokud cítíš jasnost, postupuj vpřed. Pokud ji necítíš, pracuj nejprve na sobě. Tvořivé začíná uvnitř.",
        oracle: {
          interpretation: [
            "Jednej z jasnosti, ne z netrpělivosti. Síla je na tvé straně, pokud víš, proč ji používáš.",
            "Vytrvalost přináší úspěch. Každý krok dělej vědomě a bez okázalosti.",
            "Pozor na pýchu. Když síla překročí míru, začíná obrat.",
            "Vytvářej, ale zůstávej bdělý. Největší moc je ta, která zná své hranice.",
          ],
          introspection: [
            "Kde ve svém životě právě stojíš na začátku?",
            "Jednáš z vnitřní jasnosti, nebo z tlaku okolí?",
            "Víš, kdy je čas pokračovat – a kdy je čas ustoupit?",
          ],
        },
        anatomy:
          "Vývoj Tvořivého probíhá jako vzestup energie od skrytého potenciálu k plnému projevu. Začíná tiše – ve fázi přípravy, kdy síla ještě není viditelná. Postupně se však objevuje ve světě, získává vliv a dosahuje vrcholu.\n\nKaždý stupeň vyžaduje jiný druh vědomí. Nejprve trpělivost, poté odvahu, následně vytrvalost a nakonec schopnost nést odpovědnost za vlastní moc. Nejvyšší bod není konec cesty, ale zkouška charakteru.\n\nTvořivé ukazuje, že skutečný růst není jen expanze, ale i schopnost zastavit se ve správný okamžik. Pokud energie pokračuje bez míry, začíná její obrat. Udržet rovnováhu ve vrcholu je největší výzva.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Skrytý drak",
            description:
              "Energie je přítomná, ale ještě není čas ji ukazovat. Toto je fáze přípravy, tichého zrání a sbírání sil. Není třeba jednat navenek. Největší růst se nyní odehrává uvnitř.",
          },
          {
            position: 2,
            type: 1,
            name: "Drak na poli",
            description:
              "Potenciál se začíná projevovat. Je vhodný čas vystoupit z ústraní a převzít první odpovědnost. Stále je však důležitá pokora a ochota učit se.",
          },
          {
            position: 3,
            type: 1,
            name: "Bdělá vytrvalost",
            description:
              "Aktivita sílí. Člověk je celý den činný a večer zůstává ostražitý. Je třeba vytrvat, ale zároveň se nenechat pohltit tlakem. Rovnováha mezi výkonem a vědomím je klíčová.",
          },
          {
            position: 4,
            type: 1,
            name: "Možnost vzletu",
            description:
              "Přichází okamžik rozhodnutí. Energie je připravena k většímu kroku. Odvaha je nutná, ale neměla by být bezhlavá. Je čas zvážit, zda vystoupit výš, nebo ještě chvíli vyčkat.",
          },
          {
            position: 5,
            type: 1,
            name: "Létající drak",
            description:
              "Vrchol síly a vlivu. Energie je vyvážená, přirozená a respektovaná. V této fázi se tvořivost projevuje nejčistěji. Vedení vychází z integrity, nikoli z potřeby dominance.",
          },
          {
            position: 6,
            type: 1,
            name: "Povýšený drak",
            description:
              "Síla překročila svou míru. Když chybí pokora, přichází obrat. Tento stupeň upozorňuje na riziko pýchy a přehnané sebedůvěry. Nejvyšší pozice vyžaduje největší sebekontrolu.",
          },
        ],
      },
      en: {
        name: "The Creative",
        meaning:
          "The Creative represents the principle of Heaven — pure creative force. It is the energy of initiation, ascent, and continuous movement. The Creative symbolizes conscious action and the capacity to set events into motion with responsibility and clarity.\n\nThis hexagram marks a moment of full potential. True creativity arises from inner integrity and alignment with a higher order. Heaven moves without rest — one who follows it strengthens character through constant self-cultivation.",
        oracle: {
          interpretation: [
            "Success comes through perseverance and proper timing. Act from clarity and development will unfold naturally.",
            "Beware of pride. When strength exceeds its measure, reversal begins.",
          ],
          introspection: [],
        },
        anatomy:
          "The development of the Creative unfolds as a gradual ascent of energy from hidden potential to full expression. It begins quietly — in preparation and inner consolidation. Over time, strength becomes visible, influence grows, and the movement reaches its peak.\n\nEach stage requires a different kind of awareness: patience at the beginning, courage in emergence, perseverance in action, and responsibility at the height of power. The highest point is not an end, but a test of character.\n\nThe Creative teaches that true growth is not only expansion, but also the wisdom to stop at the right moment. When force continues beyond its measure, reversal begins. Maintaining balance at the summit is the greatest challenge.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Hidden Dragon",
            description:
              "The energy is present, but it is not yet time to reveal it. This is a phase of preparation, quiet maturation, and gathering strength. There is no need to act outwardly. The most important growth is happening within.",
          },
          {
            position: 2,
            type: 1,
            name: "Dragon in the Field",
            description:
              "Potential begins to manifest. It is the right moment to step forward and assume initial responsibility. Humility and openness to learning remain essential.",
          },
          {
            position: 3,
            type: 1,
            name: "Vigilant Effort",
            description:
              "Activity intensifies. One works diligently throughout the day and remains aware at night. Perseverance is required, but so is balance. Do not let pressure consume clarity.",
          },
          {
            position: 4,
            type: 1,
            name: "Possible Ascent",
            description:
              "A moment of decision approaches. The energy is ready for a greater step. Courage is needed, yet it should not become recklessness. Consider whether to rise higher or wait a little longer.",
          },
          {
            position: 5,
            type: 1,
            name: "Flying Dragon",
            description:
              "The peak of strength and influence. Power is balanced, visible, and naturally respected. Creativity expresses itself in its purest form. Leadership flows from integrity, not from the need to dominate.",
          },
          {
            position: 6,
            type: 1,
            name: "Arrogant Dragon",
            description:
              "Strength has exceeded its proper measure. When humility is lost, reversal begins. This stage warns against pride and excessive self-confidence. The highest position demands the greatest self-restraint.",
          },
        ],
      },
    },
  },
  {
    id: 2,
    number: 2,
    chineseName: "坤",
    romanization: "Kūn",
    elements: [2, 2],
    lines: [0, 0, 0, 0, 0, 0],
    content: {
      cs: {
        name: "Přijetí",
        meaning:
          "Přijetí představuje princip Země – sílu, která neprosazuje, ale nese. Je to energie podpory, prostoru a výživy. Na rozdíl od Tvořivého nezačíná pohyb, ale umožňuje mu růst. Přijetí není slabost. Je to stabilita, která dává tvar tomu, co vzniká.\n\nPsychologicky je tento hexagram stavem otevřenosti. Schopnost naslouchat, spolupracovat a reagovat místo toho, abychom tlačili vlastní směr. Přijetí znamená důvěřovat procesu a rozpoznat, kdy je správné vést – a kdy následovat.\n\nZemě je plodná právě proto, že neklade odpor. Skutečná síla spočívá v pružnosti a vytrvalosti. Pokud se však otevřenost změní v pasivitu nebo ztrátu směru, vzniká stagnace. Přijetí vyžaduje vědomé rozhodnutí být oporou.",
        oracle: {
          interpretation: [
            "Neusiluj o kontrolu. Naslouchej tomu, co situace potřebuje.",
            "Stabilita přináší úspěch. Jednej trpělivě a bez potřeby okamžitého výsledku.",
            "Následování není slabost, pokud víš, komu a čemu důvěřuješ.",
          ],
          introspection: [
            "Kde můžeš být oporou místo toho, abys tlačil vlastní směr?",
            "Kde si pleteš trpělivost s pasivitou?",
          ],
        },
        anatomy:
          "Vývoj Přijetí neprobíhá jako vzestup, ale jako prohlubování. Energie se usazuje, stabilizuje a vytváří prostor pro růst druhých.\n\nOd prvních jemných signálů až po plnou stabilitu jde o proces zrání důvěry. Síla se zde neprojevuje navenek, ale ve schopnosti nést a podporovat.\n\nPokud však stabilita přejde v nehybnost, vzniká napětí. Přijetí učí, že pružnost je silnější než odpor.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Chůze po jinovatce",
            description:
              "První známky změny jsou sotva patrné. Situace je křehká a vyžaduje pozornost. Vnímavost je důležitější než akce.",
          },
          {
            position: 2,
            type: 0,
            name: "Přímá otevřenost",
            description:
              "Jednoduchost a upřímnost přinášejí stabilitu. Není třeba komplikovat. Pevnost vzniká z autenticity.",
          },
          {
            position: 3,
            type: 0,
            name: "Skrytá schopnost",
            description:
              "Síla je přítomná, ale zůstává nenápadná. Je čas podporovat druhé bez potřeby uznání.",
          },
          {
            position: 4,
            type: 0,
            name: "Uzavřený vak",
            description:
              "Zdrženlivost chrání před chybou. Mlčení a opatrnost mohou být moudřejší než otevřený postoj.",
          },
          {
            position: 5,
            type: 0,
            name: "Žlutá sukně",
            description:
              "Vyváženost a přirozená důstojnost. Přijetí dosahuje svého vrcholu v tiché stabilitě a harmonii.",
          },
          {
            position: 6,
            type: 0,
            name: "Draci bojují na poli",
            description:
              "Když se poddajnost změní v odpor, vzniká konflikt. Ztráta rovnováhy vede ke střetu sil.",
          },
        ],
      },
      en: {
        name: "The Receptive",
        meaning:
          "The Receptive represents the principle of Earth — a force that supports rather than initiates. It is the energy of nourishment, space, and stability. Unlike the Creative, it does not begin movement but allows it to grow. Receptivity is not weakness; it is the ground that makes development possible.\n\nPsychologically, this hexagram reflects openness. The capacity to listen, to cooperate, and to respond instead of imposing direction. It teaches trust in the process and the wisdom to recognize when to lead and when to follow.\n\nEarth is fertile because it does not resist. True strength lies in patience and resilience. When openness turns into passivity or loss of direction, stagnation arises. The Receptive calls for conscious support, not withdrawal.",
        oracle: {
          interpretation: [
            "Do not strive to control. Listen to what the situation requires.",
            "Stability brings success. Act with patience and without the need for immediate results.",
            "Following is not weakness when you know whom and what you trust.",
          ],
          introspection: [
            "Where can you become support instead of pushing your own direction?",
            "Where might patience be turning into passivity?",
          ],
        },
        anatomy:
          "The development of the Receptive is not an ascent but a deepening. Energy settles, stabilizes, and creates space for others to grow.\n\nFrom subtle beginnings to full steadiness, the process is one of maturing trust. Strength here does not manifest through dominance, but through the capacity to sustain and support.\n\nWhen stability hardens into immobility, tension appears. The Receptive teaches that flexibility is stronger than resistance.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Treading on Frost",
            description:
              "The first signs of change are subtle. The situation is delicate and requires awareness. Sensitivity is more important than action.",
          },
          {
            position: 2,
            type: 0,
            name: "Direct Openness",
            description:
              "Simplicity and sincerity create stability. There is no need for complication. Strength emerges from authenticity.",
          },
          {
            position: 3,
            type: 0,
            name: "Hidden Capability",
            description:
              "Strength is present but remains understated. This is a time to support others without seeking recognition.",
          },
          {
            position: 4,
            type: 0,
            name: "The Closed Sack",
            description:
              "Restraint prevents error. Silence and caution may be wiser than open expression.",
          },
          {
            position: 5,
            type: 0,
            name: "Yellow Garment",
            description:
              "Balance and natural dignity. Receptivity reaches its peak in quiet harmony and centered presence.",
          },
          {
            position: 6,
            type: 0,
            name: "Dragons Fighting in the Field",
            description:
              "When yielding turns into resistance, conflict emerges. Loss of balance leads to confrontation.",
          },
        ],
      },
    },
  },
  {
    id: 3,
    number: 3,
    chineseName: "屯",
    romanization: "Zhūn",
    elements: [3, 5],
    lines: [1, 0, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Počáteční obtíže",
        meaning:
          "Počáteční obtíže představují okamžik zrodu, kdy se nové snaží prorazit do světa. Je to energie začátku, která však naráží na odpor prostředí. Chaos, nejistota a zmatek nejsou chybou – jsou přirozenou součástí vzniku.\n\nPsychologicky jde o fázi, kdy cítíš impuls ke změně, ale podmínky ještě nejsou stabilní. Směr existuje, ale forma je nejasná. Tento hexagram učí trpělivosti, vytrvalosti a schopnosti vyhledat podporu.\n\nObtíže nejsou znamením selhání. Jsou známkou toho, že něco skutečně vzniká. Pokud však tlak vede k ukvapenosti, může se proces zadrhnout. Začátky vyžadují vedení a strukturu.",
        oracle: {
          interpretation: [
            "Začátky jsou křehké. Nespěchej.",

            "Vyhledej podporu a buduj pevné základy místo rychlého postupu.",

            "Obtíže jsou součástí cesty, nikoli jejím koncem.",
          ],

          introspection: [
            "Kde ve svém životě právě něco začíná? Snažíš se prorazit silou, nebo buduješ postupně?",
          ],
        },
        anatomy:
          "Vývoj tohoto hexagramu připomíná klíčení semene. Nejprve tlak půdy, odpor a nejistota. Postupně však vzniká tvar a směr.\n\nObtíže nejsou překážkou růstu, ale jeho podmínkou. Pokud je proces veden trpělivě a s podporou, vzniká pevný základ.\n\nUspěchat počátek znamená oslabit budoucnost. Správné tempo je důležitější než rychlost.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Zdržení na počátku",
            description:
              "Energie je připravena, ale okolnosti ještě nejsou uspořádané. Vytrvalost přináší postupný pokrok.",
          },
          {
            position: 2,
            type: 0,
            name: "Obtížné spojení",
            description:
              "Spolupráce je komplikovaná. Je třeba trpělivosti a ochoty hledat správné spojence.",
          },
          {
            position: 3,
            type: 0,
            name: "Ztracený ve zmatku",
            description:
              "Bez vedení vzniká bloudění. Samostatný postup může vést k chybám. Vyhledej radu.",
          },
          {
            position: 4,
            type: 0,
            name: "Postup s oporou",
            description:
              "S podporou druhých je možné překonat překážky. Sdílený směr přináší stabilitu.",
          },
          {
            position: 5,
            type: 0,
            name: "Obtíže v růstu",
            description:
              "Růst je pomalý, ale smysluplný. Přehnaná očekávání mohou proces narušit.",
          },
          {
            position: 6,
            type: 1,
            name: "Zmatek vrcholí",
            description:
              "Když napětí dosáhne maxima, je nutné zastavit se a znovu uspořádat směr. Bez struktury vzniká chaos.",
          },
        ],
      },
      en: {
        name: "Initial Difficulty",
        meaning:
          "Initial Difficulty represents the moment of emergence, when something new attempts to take form in the world. It is the energy of beginning confronted by resistance. Confusion, uncertainty, and tension are not mistakes — they are natural aspects of birth.\n\nPsychologically, this hexagram reflects the phase when you feel the impulse for change but conditions are not yet stable. Direction exists, but structure is unclear. It teaches patience, perseverance, and the wisdom to seek guidance.\n\nDifficulties do not indicate failure. They signal that something real is coming into being. When pressure leads to haste, the process may stall. Beginnings require structure and support.",
        oracle: {
          interpretation: [
            "Beginnings are fragile. Do not rush.",

            "Seek support and build strong foundations instead of forcing rapid progress.",

            "Obstacles are part of the path, not its end.",
          ],

          introspection: [
            "Where in your life is something trying to emerge? Are you forcing it, or allowing it to develop steadily?",
          ],
        },
        anatomy:
          "The development of this hexagram resembles a seed pushing through soil. At first there is pressure, resistance, and uncertainty. Gradually, form and direction emerge.\n\nDifficulty is not the enemy of growth but its condition. With patience and support, a solid foundation forms.\n\nRushing the beginning weakens the future. Proper timing matters more than speed.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Hesitation at the Beginning",
            description:
              "Energy is ready, but circumstances are not yet ordered. Perseverance gradually brings progress.",
          },
          {
            position: 2,
            type: 0,
            name: "Difficult Union",
            description:
              "Cooperation is complicated. Patience and careful choice of allies are required.",
          },
          {
            position: 3,
            type: 0,
            name: "Lost in Confusion",
            description:
              "Without guidance, wandering occurs. Acting alone may lead to mistakes. Seek advice.",
          },
          {
            position: 4,
            type: 0,
            name: "Advancing with Support",
            description:
              "With the help of others, obstacles can be overcome. Shared direction creates stability.",
          },
          {
            position: 5,
            type: 0,
            name: "Growth under Strain",
            description:
              "Growth is slow but meaningful. Unrealistic expectations may disrupt the process.",
          },
          {
            position: 6,
            type: 1,
            name: "Chaos at the Peak",
            description:
              "When tension reaches its height, it is necessary to pause and reorganize. Without structure, disorder spreads.",
          },
        ],
      },
    },
  },
  {
    id: 4,
    number: 4,
    chineseName: "蒙",
    romanization: "Méng",
    elements: [5, 7],
    lines: [0, 1, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Nezralost",
        meaning:
          "Nezralost představuje stav, kdy člověk ještě nevidí jasně, ale je připraven učit se. Není to hloupost, nýbrž počáteční fáze poznání. Zmatek a nejistota zde nejsou překážkou, ale vstupní branou k pochopení.\n\nPsychologicky jde o moment, kdy si uvědomuješ, že nevíš. To je první krok k moudrosti. Hexagram učí pokoře a ochotě přijmout vedení. Učení však musí být dobrovolné – vnucené poučení nevede k růstu.\n\nNezralost je přirozená fáze každého začátku. Pokud je však doprovázena tvrdohlavostí nebo odmítáním rady, proměňuje se ve stagnaci. Otevřenost je zde klíčem.",
        oracle: {
          interpretation: [
            "Hledej radu, ale ptej se upřímně.",

            "Učení přichází, když jsi připraven naslouchat.",

            "Nevyžaduj odpovědi, pokud nejsi ochoten změnit své chování.",
          ],

          introspection: [
            "Kde ve svém životě potřebuješ vedení? A jsi skutečně připraven ho přijmout?",
          ],
        },
        anatomy:
          "Nezralost začíná nevědomostí, ale může skončit moudrostí. Proces vyžaduje pokoru a ochotu přijmout korekci.\n\nRůst nastává tehdy, když otázky vycházejí z opravdového zájmu, nikoli z provokace.\n\nOdmítání učení prodlužuje zmatek. Otevřenost jej proměňuje v porozumění.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Otevřenost k učení",
            description:
              "Začátek nevědomosti je příležitostí. Přijetí chyby je prvním krokem k růstu.",
          },
          {
            position: 2,
            type: 1,
            name: "Pevné vedení",
            description:
              "Moudré vedení je nutné, ale nesmí být tvrdé. Učení vyžaduje rovnováhu mezi pevností a trpělivostí.",
          },
          {
            position: 3,
            type: 0,
            name: "Odpor vůči radě",
            description:
              "Když je rada odmítána, vzniká napětí. Pýcha blokuje poznání.",
          },
          {
            position: 4,
            type: 0,
            name: "Zmatek a pochybnost",
            description:
              "Nejistota může být hluboká. V této fázi je důležité nejednat ukvapeně.",
          },
          {
            position: 5,
            type: 0,
            name: "Upřímné hledání",
            description:
              "Pokorný přístup otevírá dveře k porozumění. Opravdová otázka přináší opravdovou odpověď.",
          },
          {
            position: 6,
            type: 1,
            name: "Přísná lekce",
            description:
              "Když jemné vedení nestačí, přichází tvrdší zkušenost. I ta však slouží k probuzení.",
          },
        ],
      },
      en: {
        name: "Youthful Folly",
        meaning:
          "Youthful Folly represents the state of not yet knowing but being ready to learn. It is not stupidity, but the early stage of understanding. Confusion and uncertainty are not obstacles here — they are the gateway to insight.\n\nPsychologically, this hexagram marks the moment when you recognize your own ignorance. That recognition is the beginning of wisdom. It teaches humility and the willingness to accept guidance. Learning, however, must be voluntary; forced instruction does not create growth.\n\nFolly is a natural phase of every beginning. When combined with stubbornness or refusal to listen, it turns into stagnation. Openness is the essential key.",
        oracle: {
          interpretation: [
            "Seek guidance, but ask sincerely.",

            "Learning comes when you are ready to listen.",

            "Do not demand answers if you are unwilling to change.",
          ],

          introspection: [
            "Where in your life do you need instruction? And are you truly willing to receive it?",
          ],
        },
        anatomy:
          "Youthful Folly begins in not-knowing but can end in wisdom. The process requires humility and the willingness to be corrected.\n\nGrowth happens when questions arise from genuine curiosity rather than provocation.\n\nRefusing to learn prolongs confusion. Openness transforms it into understanding.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Openness to Learning",
            description:
              "The beginning of ignorance is an opportunity. Admitting error is the first step toward growth.",
          },
          {
            position: 2,
            type: 1,
            name: "Firm Guidance",
            description:
              "Wise leadership is necessary but should not become harsh. Teaching requires balance between firmness and patience.",
          },
          {
            position: 3,
            type: 0,
            name: "Resistance to Advice",
            description:
              "When counsel is rejected, tension arises. Pride blocks understanding.",
          },
          {
            position: 4,
            type: 0,
            name: "Confusion and Doubt",
            description:
              "Uncertainty may feel deep. In this stage, avoid impulsive action.",
          },
          {
            position: 5,
            type: 0,
            name: "Sincere Seeking",
            description:
              "A humble attitude opens the door to comprehension. A genuine question invites a genuine answer.",
          },
          {
            position: 6,
            type: 1,
            name: "Severe Lesson",
            description:
              "When gentle guidance fails, a harsher experience may follow. Even this serves awakening.",
          },
        ],
      },
    },
  },
  {
    id: 5,
    number: 5,
    chineseName: "需",
    romanization: "Xū",
    elements: [5, 1],
    lines: [1, 1, 1, 0, 1, 0],
    content: {
      cs: {
        name: "Čekání",
        meaning:
          "Čekání představuje vědomé vyčkávání. Nejde o pasivitu, ale o schopnost zadržet akci do správného okamžiku. Síla je přítomná, ale okolnosti ještě nejsou zralé.\n\nPsychologicky je to stav, kdy cítíš napětí mezi touhou jednat a nutností počkat. Učí rozlišovat mezi impulsem a správným načasováním.\n\nTrpělivost zde není slabostí. Je to forma důvěry. Pokud však čekání přejde v úzkost nebo nečinnost, ztrácí svůj smysl.",
        oracle: {
          interpretation: [
            "Čekej klidně. Správný okamžik přijde.",

            "Neurychluj vývoj silou.",

            "Trpělivost je aktivní postoj.",
          ],

          introspection: [
            "Kde tlačíš na výsledek, který ještě není připraven?",
          ],
        },
        anatomy:
          "Čekání začíná napětím a končí uvolněním. Pokud je vyčkávání vědomé, přináší jasnost.\n\nNetrpělivost vede k chybě. Správné načasování je silnější než rychlost.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Čekání na okraji",
            description: "Ještě není čas vstoupit. Zachovej odstup.",
          },
          {
            position: 2,
            type: 1,
            name: "Čekání v písku",
            description: "Nejistota vyvolává napětí. Zachovej stabilitu.",
          },
          {
            position: 3,
            type: 1,
            name: "Čekání v bahně",
            description: "Riziko je blízko. Nepodléhej provokaci.",
          },
          {
            position: 4,
            type: 0,
            name: "Čekání v krvi",
            description: "Napětí vrcholí. Klid je jedinou ochranou.",
          },
          {
            position: 5,
            type: 1,
            name: "Čekání s vínem a jídlem",
            description: "Správný čas se blíží. Zachovej důstojnost.",
          },
          {
            position: 6,
            type: 0,
            name: "Překvapivý příchod",
            description: "Události se rozvíjejí nečekaně. Přizpůsob se.",
          },
        ],
      },
      en: {
        name: "Waiting",
        meaning:
          "Waiting represents conscious restraint. It is not passivity, but the ability to hold action until the right moment. Strength exists, yet circumstances are not mature.\n\nPsychologically, it reflects tension between impulse and timing. It teaches discernment.\n\nPatience is not weakness. It is trust. When waiting turns into anxiety, it loses its power.",
        oracle: {
          interpretation: [
            "Wait calmly. The right moment will arrive.",

            "Do not force development.",

            "Patience is an active stance.",
          ],

          introspection: ["Where are you pushing for results too early?"],
        },
        anatomy:
          "Waiting begins in tension and resolves in release. Conscious restraint brings clarity.\n\nImpatience leads to error. Timing outweighs speed.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Waiting at the Edge",
            description: "It is not yet time to enter. Maintain distance.",
          },
          {
            position: 2,
            type: 1,
            name: "Waiting in the Sand",
            description: "Uncertainty creates tension. Stay grounded.",
          },
          {
            position: 3,
            type: 1,
            name: "Waiting in the Mud",
            description: "Risk is near. Avoid provocation.",
          },
          {
            position: 4,
            type: 0,
            name: "Waiting in Blood",
            description: "Tension peaks. Calm is protection.",
          },
          {
            position: 5,
            type: 1,
            name: "Waiting with Wine",
            description: "The right time approaches. Maintain dignity.",
          },
          {
            position: 6,
            type: 0,
            name: "Unexpected Arrival",
            description: "Events unfold suddenly. Adapt.",
          },
        ],
      },
    },
  },
  {
    id: 6,
    number: 6,
    chineseName: "訟",
    romanization: "Sòng",
    elements: [5, 1],
    lines: [1, 0, 1, 1, 1, 1],
    content: {
      cs: {
        name: "Konflikt",
        meaning:
          "Konflikt nevzniká z ničeho. Vzniká ve chvíli, kdy se dvě pravdy odmítají slyšet. Tento hexagram nepopisuje hádku jako vnější událost, ale jako vnitřní napětí. Často jde o střet mezi tím, co chceme, a tím, co je možné. Nebo mezi potřebou být vyslyšen a obavou ze ztráty.\n\nPsychologicky představuje okamžik, kdy energie proudí proti sobě. Člověk má pocit, že musí obhajovat své stanovisko. Tlak roste. Myšlenky se vyostřují. V této fázi nejde o vítězství, ale o pochopení skutečného jádra problému.\n\nKonflikt může být očistný, pokud vede k vyjasnění. Pokud je však veden z ega, zanechává stopu rozdělení. Síla tohoto hexagramu spočívá ve schopnosti zastavit eskalaci dříve, než přeroste v destrukci.\n\nNěkdy je moudřejší ustoupit. Ne proto, že nemáš pravdu, ale proto, že cena vítězství je příliš vysoká.",
        oracle: {
          interpretation: [
            "Nezrychluj spor.",

            "Hledej jádro, ne povrch.",

            "Mluv pravdivě, ale bez agrese.",
          ],

          introspection: [
            "Co vlastně bráníš – pravdu, nebo své ego?",

            "A co by se stalo, kdybys na chvíli ustoupil?",
          ],
        },
        anatomy:
          "Konflikt začíná jako drobné napětí. Pokud není rozpoznán, sílí a polarizuje.\n\nSkutečný vývoj nastává ve chvíli, kdy člověk přestane bojovat o dominanci a začne hledat porozumění. Ustoupení zde není slabost, ale strategie vědomí.\n\nKaždý konflikt může být bodem růstu – nebo bodem rozdělení. Záleží na úrovni vědomí, z níž jednáš.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První neshoda",
            description:
              "Napětí je ještě malé. Je možné ho vyřešit klidným rozhovorem.",
          },
          {
            position: 2,
            type: 0,
            name: "Defenzivní postoj",
            description:
              "Obrana převládá nad nasloucháním. Ego vstupuje do hry.",
          },
          {
            position: 3,
            type: 1,
            name: "Zatvrzení",
            description: "Pozice se vyostřují. Konflikt začíná být osobní.",
          },
          {
            position: 4,
            type: 1,
            name: "Možnost obratu",
            description:
              "Objevuje se šance změnit tón. Vyžaduje to vědomý krok zpět.",
          },
          {
            position: 5,
            type: 1,
            name: "Spravedlivé vyrovnání",
            description: "Vyjasnění je možné, pokud převládne nadhled.",
          },
          {
            position: 6,
            type: 1,
            name: "Vyčerpání",
            description:
              "Dlouhý spor unavuje obě strany. Vítězství ztrácí smysl.",
          },
        ],
      },
      en: {
        name: "Conflict",
        meaning:
          "Conflict does not arise out of nowhere. It appears when two truths refuse to hear one another. This hexagram does not describe an external quarrel but an inner tension. Often it is the clash between desire and reality, or between the need to be heard and the fear of losing position.\n\nPsychologically, it marks a state where energy moves against itself. One feels compelled to defend a stance. Pressure increases. Thoughts sharpen. At this stage, the issue is not victory but clarity.\n\nConflict can purify if it leads to understanding. But when driven by ego, it leaves division behind. Its wisdom lies in knowing when escalation becomes destructive.\n\nSometimes stepping back is strength. Not because you are wrong, but because the cost of winning may be too high.",
        oracle: {
          interpretation: [
            "Do not accelerate the dispute.",

            "Seek the core, not the surface.",

            "Speak truth without aggression.",
          ],

          introspection: [
            "What are you defending – truth or ego?",

            "And what would happen if you stepped back?",
          ],
        },
        anatomy:
          "Conflict begins as subtle tension. If ignored, it intensifies and polarizes.\n\nTrue development occurs when the need to dominate is replaced by the wish to understand. Withdrawal here is awareness, not weakness.\n\nEvery conflict can become growth — or division. The outcome depends on consciousness.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "First Disagreement",
            description: "Tension is still small. Dialogue can resolve it.",
          },
          {
            position: 2,
            type: 0,
            name: "Defensive Stance",
            description: "Defense overtakes listening.",
          },
          {
            position: 3,
            type: 1,
            name: "Hardening",
            description: "Positions sharpen. It becomes personal.",
          },
          {
            position: 4,
            type: 1,
            name: "Turning Point",
            description: "A conscious shift can change the tone.",
          },
          {
            position: 5,
            type: 1,
            name: "Fair Resolution",
            description: "Clarity emerges through perspective.",
          },
          {
            position: 6,
            type: 1,
            name: "Exhaustion",
            description: "Prolonged dispute drains both sides.",
          },
        ],
      },
    },
  },
  {
    id: 7,
    number: 7,
    chineseName: "師",
    romanization: "Shī",
    elements: [5, 3],
    lines: [0, 1, 0, 0, 0, 0],
    content: {
      cs: {
        name: "Vojsko",
        meaning:
          "Vojsko symbolizuje organizovanou sílu. Nejde o agresi, ale o disciplínu. Tento hexagram se objevuje ve chvíli, kdy je potřeba soustředit energii a jednat koordinovaně. Chaos musí být nahrazen strukturou.\n\nPsychologicky představuje schopnost převzít odpovědnost za kolektivní situaci. Vnitřně může jít o sjednocení vlastních rozporuplných částí – rozptýlené impulzy se musí podřídit jasnému záměru.\n\nSíla bez řádu je nebezpečná. Řád bez lidskosti je tvrdý. Skutečné vedení spočívá ve vyváženosti těchto dvou pólů.\n\nVojsko není symbolem boje, ale schopnosti čelit obtížím organizovaně a s jasnou hierarchií hodnot.",
        oracle: {
          interpretation: [
            "Jednej disciplinovaně.",

            "Nespoléhej na chaos.",

            "Vedení vyžaduje odpovědnost.",
          ],

          introspection: [
            "Jsi připraven nést důsledky svých rozhodnutí?",

            "A má tvé jednání jasný směr?",
          ],
        },
        anatomy:
          "Síla se nejprve shromažďuje a strukturuje.\n\nVývoj nastává skrze disciplínu a odpovědnost. Bez nich se energie rozpadá.\n\nSkutečné vítězství není porážka druhých, ale zvládnutí vlastního chaosu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Shromáždění sil",
            description: "Energie se organizuje, ještě není čas na akci.",
          },
          {
            position: 2,
            type: 1,
            name: "Legitimní vedení",
            description: "Vůdce jedná s integritou a získává důvěru.",
          },
          {
            position: 3,
            type: 0,
            name: "Zmatek v řadách",
            description: "Chybí koordinace, vznikají chyby.",
          },
          {
            position: 4,
            type: 0,
            name: "Strategické stažení",
            description: "Ustoupení může zabránit větší ztrátě.",
          },
          {
            position: 5,
            type: 0,
            name: "Zodpovědné velení",
            description: "Rozhodnutí jsou vedena rozvahou.",
          },
          {
            position: 6,
            type: 0,
            name: "Zneužití moci",
            description: "Autorita bez etiky vede k rozkladu.",
          },
        ],
      },
      en: {
        name: "The Army",
        meaning:
          "The Army symbolizes organized strength. It is not aggression, but discipline. This hexagram appears when energy must be focused and coordinated. Chaos needs structure.\n\nPsychologically, it represents responsibility within collective situations. Internally, scattered impulses must align under a clear intention.\n\nStrength without order is dangerous. Order without humanity becomes rigid. True leadership balances both.\n\nThe Army is not about war, but about confronting difficulty with clarity and discipline.",
        oracle: {
          interpretation: [
            "Act with discipline.",

            "Do not rely on chaos.",

            "Leadership requires responsibility.",
          ],

          introspection: [
            "Are you ready to bear the consequences?",

            "Is your direction clear?",
          ],
        },
        anatomy:
          "Energy gathers and forms structure.\n\nDevelopment depends on discipline and responsibility.\n\nVictory lies in mastering inner chaos.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Gathering Forces",
            description: "Energy organizes before action.",
          },
          {
            position: 2,
            type: 1,
            name: "Legitimate Leadership",
            description: "Authority gains trust through integrity.",
          },
          {
            position: 3,
            type: 0,
            name: "Disorder",
            description: "Coordination falters.",
          },
          {
            position: 4,
            type: 0,
            name: "Strategic Retreat",
            description: "Withdrawal prevents greater loss.",
          },
          {
            position: 5,
            type: 0,
            name: "Responsible Command",
            description: "Decisions are thoughtful.",
          },
          {
            position: 6,
            type: 0,
            name: "Abuse of Power",
            description: "Authority without ethics collapses.",
          },
        ],
      },
    },
  },
  {
    id: 8,
    number: 8,
    chineseName: "比",
    romanization: "Bǐ",
    elements: [2, 5],
    lines: [0, 0, 0, 0, 1, 0],
    content: {
      cs: {
        name: "Sounáležitost",
        meaning:
          "Sounáležitost vyjadřuje potřebu spojení. Člověk není izolovaný ostrov. Tento hexagram se objevuje tehdy, když je důležité navázat vztah nebo upevnit spojenectví.\n\nPsychologicky poukazuje na schopnost důvěřovat a zároveň si zachovat vlastní identitu. Spojení není splynutí, ale vědomé propojení.\n\nBez důvěry se vztahy rozpadají. Bez individuality se ztrácí autenticita.\n\nSounáležitost je vědomé rozhodnutí být součástí celku.",
        oracle: {
          interpretation: [
            "Hledej spojení.",

            "Buď důvěryhodný.",

            "Nevzdávej se sebe sama.",
          ],

          introspection: [
            "S kým nebo s čím se máš propojit?",

            "A je toto spojení vzájemné?",
          ],
        },
        anatomy:
          "Spojení začíná důvěrou.\n\nStabilita vzniká vzájemností.\n\nSkutečná jednota respektuje individualitu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Hledání spojení",
            description: "Touha po vztahu se rodí.",
          },
          {
            position: 2,
            type: 0,
            name: "Vzájemná důvěra",
            description: "Spojení je autentické.",
          },
          {
            position: 3,
            type: 0,
            name: "Nerovnováha",
            description: "Jedna strana dává více.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilita",
            description: "Vztah se upevňuje.",
          },
          {
            position: 5,
            type: 1,
            name: "Centrum jednoty",
            description: "Spojení má pevný střed.",
          },
          {
            position: 6,
            type: 0,
            name: "Izolace",
            description: "Oddělení vede k osamění.",
          },
        ],
      },
      en: {
        name: "Holding Together",
        meaning:
          "Holding Together expresses the need for connection. No one exists in isolation. This hexagram arises when relationship and alliance matter.\n\nPsychologically, it reflects trust balanced with individuality. Connection is not fusion, but conscious bonding.\n\nWithout trust, bonds dissolve. Without identity, authenticity fades.\n\nUnity is a deliberate choice.",
        oracle: {
          interpretation: [
            "Seek connection.",

            "Be trustworthy.",

            "Do not lose yourself.",
          ],

          introspection: ["With whom should you align?", "Is the bond mutual?"],
        },
        anatomy:
          "Connection begins with trust.\n\nStability requires reciprocity.\n\nTrue unity preserves individuality.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Seeking Union",
            description: "Desire for connection emerges.",
          },
          {
            position: 2,
            type: 0,
            name: "Mutual Trust",
            description: "Authentic bond.",
          },
          {
            position: 3,
            type: 0,
            name: "Imbalance",
            description: "One gives more.",
          },
          {
            position: 4,
            type: 0,
            name: "Stability",
            description: "Bond strengthens.",
          },
          {
            position: 5,
            type: 1,
            name: "Center of Unity",
            description: "Strong core.",
          },
          {
            position: 6,
            type: 0,
            name: "Isolation",
            description: "Separation leads to loneliness.",
          },
        ],
      },
    },
  },
  {
    id: 9,
    number: 9,
    chineseName: "小畜",
    romanization: "Xiǎo Chù",
    elements: [4, 1],
    lines: [1, 1, 1, 0, 1, 1],
    content: {
      cs: {
        name: "Síla malého",
        meaning:
          "Síla malého představuje období, kdy velké kroky nejsou možné. Energie se hromadí, ale okolnosti ještě nedovolují plný průlom. Tento hexagram učí trpělivosti a jemnému působení. Není čas na razantní rozhodnutí, ale na kultivaci detailu.\n\nPsychologicky jde o fázi, kdy člověk cítí potenciál, ale naráží na jemné překážky. Frustrace může vznikat z pocitu zadržení. Ve skutečnosti však probíhá důležitý proces vnitřního zrání.\n\nMalé kroky, drobné úpravy a každodenní disciplína zde mají větší váhu než dramatické činy. To, co se jeví jako stagnace, může být ve skutečnosti konsolidací.\n\nSíla malého není slabost. Je to schopnost ovlivňovat situaci nenápadně, vytrvale a s respektem k rytmu času.",
        oracle: {
          interpretation: [
            "Neuspěchej výsledek.",

            "Zaměř se na detaily.",

            "Udržuj směr, i když je tempo pomalé.",
          ],

          introspection: [
            "Kde můžeš dnes udělat malý, ale důsledný krok?",

            "A co v tobě právě dozrává?",
          ],
        },
        anatomy:
          "Proces začíná zadržením. Energie není blokována, ale kultivována.\n\nVývoj probíhá skrze trpělivost a jemnou vytrvalost. Malé úspěchy se postupně skládají do větší stability.\n\nPokud člověk přijme rytmus času, objeví, že zdánlivé omezení bylo přípravou na pevnější a vědomější krok vpřed.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První zadržení",
            description: "Impuls existuje, ale naráží na jemnou překážku.",
          },
          {
            position: 2,
            type: 1,
            name: "Vnitřní pochybnost",
            description: "Objevuje se nejistota ohledně směru.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí mezi tlakem a trpělivostí",
            description: "Touha po průlomu roste, ale čas ještě nenastal.",
          },
          {
            position: 4,
            type: 0,
            name: "Vědomé zpomalení",
            description: "Uvědomění, že malé kroky jsou nyní správnou cestou.",
          },
          {
            position: 5,
            type: 1,
            name: "Stabilizovaná vytrvalost",
            description: "Trpělivost se mění v sílu.",
          },
          {
            position: 6,
            type: 1,
            name: "Přehnaný tlak",
            description:
              "Snaha urychlit proces může způsobit ztrátu rovnováhy.",
          },
        ],
      },
      en: {
        name: "The Taming Power of the Small",
        meaning:
          "The Taming Power of the Small represents a time when major advances are not yet possible. Energy gathers, but circumstances do not allow a breakthrough. This hexagram teaches patience and subtle influence. It is not a time for dramatic action, but for refinement.\n\nPsychologically, it reflects a state of contained potential. One feels capable, yet subtly restrained. Frustration may arise from perceived limitation, yet inner maturation is taking place.\n\nSmall actions, careful adjustments, and daily discipline matter more than bold gestures. What appears as delay may in fact be consolidation.\n\nThe power of the small is not weakness. It is the capacity to shape reality gently and persistently, respecting timing.",
        oracle: {
          interpretation: [
            "Do not rush the outcome.",

            "Focus on details.",

            "Maintain direction despite slow progress.",
          ],

          introspection: [
            "What small, consistent step can you take today?",

            "What within you is quietly ripening?",
          ],
        },
        anatomy:
          "The process begins with containment. Energy is not blocked, but cultivated.\n\nDevelopment unfolds through patience and subtle persistence. Small successes build deeper stability.\n\nWhen timing is respected, restraint reveals itself as preparation for a more conscious advance.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Restraint",
            description: "Impulse meets subtle limitation.",
          },
          {
            position: 2,
            type: 1,
            name: "Inner Doubt",
            description: "Uncertainty questions direction.",
          },
          {
            position: 3,
            type: 1,
            name: "Tension",
            description: "Desire pushes against patience.",
          },
          {
            position: 4,
            type: 0,
            name: "Conscious Slowing",
            description: "Awareness shifts toward gradual effort.",
          },
          {
            position: 5,
            type: 1,
            name: "Stabilized Persistence",
            description: "Patience becomes strength.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess Pressure",
            description: "Forcing the process disrupts balance.",
          },
        ],
      },
    },
  },
  {
    id: 10,
    number: 10,
    chineseName: "履",
    romanization: "Lǚ",
    elements: [8, 1],
    lines: [1, 1, 1, 1, 1, 0],
    content: {
      cs: {
        name: "Kráčení",
        meaning:
          "Kráčení symbolizuje vědomý pohyb vpřed v citlivé situaci. Tento hexagram se objevuje tehdy, když člověk vstupuje na nejistou půdu. Každý krok vyžaduje pozornost, respekt a sebekontrolu.\n\nPsychologicky jde o schopnost jednat s odvahou, aniž by člověk ztratil pokoru. Kráčení není útok, ale uvědomělé přibližování se k cíli.\n\nRiziko zde není nepřítel, ale učitel. Pokud je krok veden vědomě, nebezpečí se promění v růst.\n\nTento hexagram učí, že síla spočívá v přesnosti. Jeden neuvážený krok může situaci narušit, zatímco vědomý postup vytváří respekt.",
        oracle: {
          interpretation: [
            "Kráčej opatrně.",

            "Jednej s respektem.",

            "Neztrácej rovnováhu.",
          ],

          introspection: [
            "Kde právě vstupuješ na citlivou půdu?",

            "A jak můžeš zachovat důstojnost v každém kroku?",
          ],
        },
        anatomy:
          "Proces začíná odvahou vstoupit.\n\nVývoj probíhá skrze rovnováhu mezi jistotou a pokorou.\n\nPokud člověk zachová bdělost, i nejistá cesta se stává stabilní. Vědomý krok je silnější než bezhlavý běh.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První krok",
            description: "Odvaha zahájit pohyb.",
          },
          {
            position: 2,
            type: 1,
            name: "Vyrovnanost",
            description: "Krok je stabilní a promyšlený.",
          },
          {
            position: 3,
            type: 1,
            name: "Přílišná sebedůvěra",
            description: "Roste riziko nepozornosti.",
          },
          {
            position: 4,
            type: 1,
            name: "Zkouška odvahy",
            description: "Situace vyžaduje vnitřní klid.",
          },
          {
            position: 5,
            type: 1,
            name: "Správné držení postoje",
            description: "Respekt vytváří bezpečí.",
          },
          {
            position: 6,
            type: 0,
            name: "Křehká rovnováha",
            description: "Jedna chyba může vše narušit.",
          },
        ],
      },
      en: {
        name: "Treading",
        meaning:
          "Treading symbolizes conscious movement within a sensitive situation. It appears when one steps onto uncertain ground. Each action requires attention, respect, and self-control.\n\nPsychologically, it reflects courage balanced by humility. Treading is not aggression, but mindful approach.\n\nRisk is not the enemy but the teacher. When movement is aware, danger transforms into growth.\n\nThis hexagram teaches that strength lies in precision. A careless step may disrupt harmony, while careful movement builds trust.",
        oracle: {
          interpretation: [
            "Proceed carefully.",

            "Act with respect.",

            "Maintain balance.",
          ],

          introspection: [
            "Where are you stepping into sensitive territory?",

            "How can you preserve dignity in each step?",
          ],
        },
        anatomy:
          "The process begins with courage.\n\nDevelopment unfolds through balance between confidence and humility.\n\nAwareness turns uncertain ground into stable progress.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "First Step",
            description: "Courage initiates movement.",
          },
          {
            position: 2,
            type: 1,
            name: "Composure",
            description: "Step remains steady.",
          },
          {
            position: 3,
            type: 1,
            name: "Overconfidence",
            description: "Risk of carelessness grows.",
          },
          {
            position: 4,
            type: 1,
            name: "Test of Courage",
            description: "Inner calm required.",
          },
          {
            position: 5,
            type: 1,
            name: "Right Conduct",
            description: "Respect ensures safety.",
          },
          {
            position: 6,
            type: 0,
            name: "Fragile Balance",
            description: "One misstep can disturb harmony.",
          },
        ],
      },
    },
  },
  {
    id: 11,
    number: 11,
    chineseName: "泰",
    romanization: "Tài",
    elements: [2, 1],
    lines: [0, 0, 0, 1, 1, 1],
    content: {
      cs: {
        name: "Mír",
        meaning:
          "Mír představuje harmonické spojení protikladů. Nebe a Země jsou zde ve vzájemném souladu – to, co je nahoře, podporuje to, co je dole. Tento hexagram symbolizuje období přirozeného toku, kdy se věci vyvíjejí bez nadměrného úsilí.\n\nPsychologicky jde o stav vnitřní integrace. Rozum a cit, aktivita a klid, vnější svět a vnitřní potřeby nejsou ve sporu. Energie proudí volně, protože není blokována vnitřním odporem.\n\nMír však není samozřejmost. Vyžaduje vědomou péči. Jakmile se objeví pýcha nebo zanedbání, rovnováha se může vychýlit.\n\nTento hexagram připomíná, že harmonie není statický stav, ale živý proces. Je třeba ji udržovat citlivostí a otevřeností.",
        oracle: {
          interpretation: [
            "Využij období harmonie.",

            "Buduj vztahy.",

            "Neusínej na úspěchu.",
          ],

          introspection: [
            "Kde ve tvém životě proudí věci přirozeně?",

            "A jak tuto rovnováhu můžeš vědomě udržet?",
          ],
        },
        anatomy:
          "Mír vzniká propojením protikladů.\n\nVývoj spočívá v udržování otevřenosti a pokory i v období hojnosti.\n\nPokud je harmonie vědomě chráněna, může přerůst v hlubší stabilitu. Pokud je zanedbána, začíná se nenápadně vytrácet.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Základ stability",
            description: "Skromnost vytváří pevný základ.",
          },
          {
            position: 2,
            type: 0,
            name: "Vzájemná podpora",
            description: "Spolupráce posiluje celek.",
          },
          {
            position: 3,
            type: 0,
            name: "První zkouška",
            description: "Harmonie je testována drobnými obtížemi.",
          },
          {
            position: 4,
            type: 1,
            name: "Vzestup důvěry",
            description: "Stabilita se upevňuje.",
          },
          {
            position: 5,
            type: 1,
            name: "Vrchol harmonie",
            description: "Rovnováha je plně prožívána.",
          },
          {
            position: 6,
            type: 1,
            name: "Přechod",
            description: "Každý vrchol přechází do změny.",
          },
        ],
      },
      en: {
        name: "Peace",
        meaning:
          "Peace represents harmonious balance between opposing forces. Heaven and Earth support one another. This hexagram signifies a time of natural flow, when events unfold with relative ease.\n\nPsychologically, it reflects inner integration. Reason and emotion, action and rest, outer demands and inner needs coexist without conflict. Energy moves freely because resistance dissolves.\n\nPeace, however, is not automatic. It requires awareness and humility. Pride or neglect can disturb balance.\n\nHarmony is not static; it is alive. It must be sustained through attentiveness and openness.",
        oracle: {
          interpretation: [
            "Use this time of harmony wisely.",

            "Strengthen relationships.",

            "Do not grow complacent.",
          ],

          introspection: [
            "Where is life flowing naturally?",

            "How can you preserve this balance consciously?",
          ],
        },
        anatomy:
          "Peace arises from balanced integration.\n\nDevelopment depends on maintaining humility during prosperity.\n\nWhen harmony is consciously nurtured, it matures into lasting stability.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Foundation of Stability",
            description: "Humility forms a strong base.",
          },
          {
            position: 2,
            type: 0,
            name: "Mutual Support",
            description: "Cooperation strengthens unity.",
          },
          {
            position: 3,
            type: 0,
            name: "First Test",
            description: "Minor difficulties test harmony.",
          },
          {
            position: 4,
            type: 1,
            name: "Rising Trust",
            description: "Stability deepens.",
          },
          {
            position: 5,
            type: 1,
            name: "Peak Harmony",
            description: "Balance fully realized.",
          },
          {
            position: 6,
            type: 1,
            name: "Transition",
            description: "Every peak leads to change.",
          },
        ],
      },
    },
  },
  {
    id: 12,
    number: 12,
    chineseName: "否",
    romanization: "Pǐ",
    elements: [1, 2],
    lines: [1, 1, 1, 0, 0, 0],
    content: {
      cs: {
        name: "Stagnace",
        meaning:
          "Stagnace představuje období, kdy spojení mezi silami je přerušeno. To, co je nahoře, se odděluje od toho, co je dole. Komunikace slábne a proudění energie je omezené.\n\nPsychologicky jde o pocit odcizení, zablokování nebo nedorozumění. Člověk může mít dojem, že jeho úsilí nenachází odezvu. Tento stav však není konečný – je to fáze cyklu.\n\nStagnace učí trpělivosti a vnitřní stabilitě. Když vnější podmínky neumožňují pohyb, je čas obrátit se dovnitř.\n\nTento hexagram připomíná, že i období uzavření má svůj význam. Vnitřní růst může probíhat i tehdy, když se navenek zdá, že se nic nehýbe.",
        oracle: {
          interpretation: [
            "Nepřetlačuj odpor.",

            "Zachovej integritu.",

            "Obrať se dovnitř.",
          ],

          introspection: [
            "Kde cítíš odpojení?",

            "A co můžeš kultivovat uvnitř sebe?",
          ],
        },
        anatomy:
          "Stagnace je dočasné oddělení.\n\nVývoj probíhá skrze vnitřní stabilitu a trpělivost.\n\nKdyž jsou vnitřní základy pevné, proudění se přirozeně obnoví.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První uzavření",
            description: "Tok energie se zpomaluje.",
          },
          {
            position: 2,
            type: 1,
            name: "Zvýšené napětí",
            description: "Oddělení se prohlubuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Tvrdost",
            description: "Komunikace se blokuje.",
          },
          {
            position: 4,
            type: 0,
            name: "Možnost obratu",
            description: "Objevuje se prostor pro změnu.",
          },
          {
            position: 5,
            type: 0,
            name: "Vnitřní klid",
            description: "Stabilita se rodí uvnitř.",
          },
          {
            position: 6,
            type: 0,
            name: "Uvolnění",
            description: "Stagnace se začíná rozpouštět.",
          },
        ],
      },
      en: {
        name: "Stagnation",
        meaning:
          "Stagnation represents a time when connection between forces is disrupted. What is above separates from what is below. Communication weakens and energy flow is restricted.\n\nPsychologically, it reflects alienation or blockage. Effort may seem unsupported. Yet this state is part of a cycle.\n\nStagnation teaches patience and inner stability. When outer movement is limited, attention turns inward.\n\nEven periods of standstill carry meaning. Inner growth continues despite outer stillness.",
        oracle: {
          interpretation: [
            "Do not force resistance.",

            "Preserve integrity.",

            "Turn inward.",
          ],

          introspection: [
            "Where do you feel disconnection?",

            "What can you cultivate within?",
          ],
        },
        anatomy:
          "Stagnation marks temporary separation.\n\nDevelopment depends on patience and inner steadiness.\n\nWhen inner foundations are secure, flow naturally returns.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Closure",
            description: "Energy flow slows.",
          },
          {
            position: 2,
            type: 1,
            name: "Deepening Tension",
            description: "Separation increases.",
          },
          {
            position: 3,
            type: 1,
            name: "Rigidity",
            description: "Communication blocks.",
          },
          {
            position: 4,
            type: 0,
            name: "Potential Shift",
            description: "Space for change appears.",
          },
          {
            position: 5,
            type: 0,
            name: "Inner Calm",
            description: "Stability forms within.",
          },
          {
            position: 6,
            type: 0,
            name: "Release",
            description: "Stagnation begins to dissolve.",
          },
        ],
      },
    },
  },
  {
    id: 13,
    number: 13,
    chineseName: "同人",
    romanization: "Tóng Rén",
    elements: [1, 6],
    lines: [1, 1, 1, 0, 1, 1],
    content: {
      cs: {
        name: "Společenství lidí",
        meaning:
          "Společenství lidí symbolizuje vědomé spojení mezi jednotlivci na základě sdílených hodnot. Nejde o náhodné seskupení, ale o sjednocení kolem společného smyslu. Tento hexagram se objevuje tehdy, když je třeba vystoupit z izolace a vytvořit autentické spojenectví.\n\nPsychologicky představuje potřebu otevřenosti. Člověk si uvědomuje, že růst není pouze individuální proces. Sdílená zkušenost přináší širší perspektivu.\n\nSkutečné společenství není založeno na přizpůsobení se za každou cenu. Je založeno na upřímnosti a respektu k rozdílnosti.\n\nTento hexagram učí, že spolupráce posiluje jednotlivce i celek. Když se spojení zakládá na pravdivosti, vzniká síla, která přesahuje individuální úsilí.",
        oracle: {
          interpretation: [
            "Hledej spojení na základě hodnot.",

            "Buď otevřený.",

            "Nevzdávej se autenticity.",
          ],

          introspection: [
            "S kým sdílíš skutečný směr?",

            "A kde můžeš přispět celku bez ztráty sebe?",
          ],
        },
        anatomy:
          "Společenství vzniká z otevřenosti.\n\nRoste skrze důvěru a sdílený smysl.\n\nPokud je založeno na pravdivosti, přináší stabilitu a sílu, která přesahuje jednotlivce.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První kontakt",
            description: "Spojení začíná sdíleným zájmem.",
          },
          {
            position: 2,
            type: 1,
            name: "Utváření důvěry",
            description: "Vzniká vzájemný respekt.",
          },
          {
            position: 3,
            type: 1,
            name: "Zkouška jednoty",
            description: "Rozdílnost prověřuje pevnost spojení.",
          },
          {
            position: 4,
            type: 0,
            name: "Vyjasnění role",
            description: "Každý nachází své místo.",
          },
          {
            position: 5,
            type: 1,
            name: "Sdílený cíl",
            description: "Směr je jasný a společný.",
          },
          {
            position: 6,
            type: 1,
            name: "Rozpad jednoty",
            description: "Pokud chybí upřímnost, spojení slábne.",
          },
        ],
      },
      en: {
        name: "Fellowship with Others",
        meaning:
          "Fellowship with Others symbolizes conscious union based on shared values. It is not random gathering but alignment around a meaningful purpose. This hexagram appears when isolation must give way to authentic connection.\n\nPsychologically, it reflects openness to collective growth. Development is not purely individual; shared experience broadens awareness.\n\nTrue fellowship does not demand conformity. It rests on sincerity and mutual respect.\n\nWhen connection is grounded in truth, it generates strength beyond individual effort.",
        oracle: {
          interpretation: [
            "Seek alignment through shared values.",

            "Remain open.",

            "Do not sacrifice authenticity.",
          ],

          introspection: [
            "With whom do you share a genuine direction?",

            "How can you contribute without losing yourself?",
          ],
        },
        anatomy:
          "Fellowship grows from openness.\n\nIt matures through trust and shared meaning.\n\nGrounded in authenticity, it becomes a source of enduring strength.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Contact",
            description: "Connection begins with common interest.",
          },
          {
            position: 2,
            type: 1,
            name: "Building Trust",
            description: "Respect strengthens the bond.",
          },
          {
            position: 3,
            type: 1,
            name: "Testing Unity",
            description: "Differences challenge cohesion.",
          },
          {
            position: 4,
            type: 0,
            name: "Clarifying Roles",
            description: "Each finds their place.",
          },
          {
            position: 5,
            type: 1,
            name: "Shared Purpose",
            description: "Direction becomes unified.",
          },
          {
            position: 6,
            type: 1,
            name: "Loss of Unity",
            description: "Without sincerity, fellowship dissolves.",
          },
        ],
      },
    },
  },
  {
    id: 14,
    number: 14,
    chineseName: "大有",
    romanization: "Dà Yǒu",
    elements: [6, 1],
    lines: [1, 1, 1, 1, 0, 1],
    content: {
      cs: {
        name: "Velké vlastnictví",
        meaning:
          "Velké vlastnictví symbolizuje období hojnosti a vnitřní síly. Nejde pouze o materiální bohatství, ale o pocit plnosti – schopnost disponovat zdroji, talentem nebo vlivem.\n\nPsychologicky tento hexagram poukazuje na odpovědnost, která s hojností přichází. To, co vlastníme, nás zároveň zavazuje. Skutečné bohatství není v držení, ale ve způsobu užívání.\n\nHojnost může vést k velkorysosti, ale i k pýše. Rozdíl spočívá v míře vědomí.\n\nTento hexagram připomíná, že velké vlastnictví je testem charakteru. To, co je nashromážděno, musí být spravováno s rozvahou.",
        oracle: {
          interpretation: [
            "Buď velkorysý.",

            "Užívej zdroje vědomě.",

            "Neztotožňuj se s vlastnictvím.",
          ],

          introspection: [
            "Jak nakládáš se svou silou?",

            "A komu můžeš svou hojností prospět?",
          ],
        },
        anatomy:
          "Hojnost začíná získáním zdrojů.\n\nVývoj spočívá ve vědomém nakládání s nimi.\n\nPokud je síla spravována s pokorou, může přinést trvalý prospěch. Pokud je zneužita, stává se příčinou úpadku.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Získání zdroje",
            description: "Objevuje se příležitost.",
          },
          {
            position: 2,
            type: 1,
            name: "Stabilní růst",
            description: "Hojnost se upevňuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Riziko pýchy",
            description: "Sebevědomí může přerůst v aroganci.",
          },
          {
            position: 4,
            type: 1,
            name: "Sdílení",
            description: "Velkorysost stabilizuje úspěch.",
          },
          {
            position: 5,
            type: 0,
            name: "Moudrá správa",
            description: "Zdroje jsou užívány rozumně.",
          },
          {
            position: 6,
            type: 1,
            name: "Přehnaná expanze",
            description: "Neomezený růst může vést k pádu.",
          },
        ],
      },
      en: {
        name: "Possession in Great Measure",
        meaning:
          "Possession in Great Measure symbolizes abundance and inner strength. It is not merely material wealth, but fullness of capacity, influence, or talent.\n\nPsychologically, it reflects responsibility. What we possess also binds us. True wealth lies not in ownership, but in stewardship.\n\nAbundance may foster generosity or pride. Awareness determines the difference.\n\nThis hexagram teaches that prosperity tests character. What is gathered must be managed wisely.",
        oracle: {
          interpretation: [
            "Be generous.",

            "Use resources consciously.",

            "Do not identify with possession.",
          ],

          introspection: [
            "How do you handle your strength?",

            "Who benefits from your abundance?",
          ],
        },
        anatomy:
          "Abundance begins with acquisition.\n\nDevelopment lies in conscious stewardship.\n\nWhen power is guided by humility, it endures. When misused, it collapses.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Acquiring Resource",
            description: "Opportunity appears.",
          },
          {
            position: 2,
            type: 1,
            name: "Stable Growth",
            description: "Abundance strengthens.",
          },
          {
            position: 3,
            type: 1,
            name: "Risk of Pride",
            description: "Confidence may turn into arrogance.",
          },
          {
            position: 4,
            type: 1,
            name: "Sharing",
            description: "Generosity sustains success.",
          },
          {
            position: 5,
            type: 0,
            name: "Wise Stewardship",
            description: "Resources are managed carefully.",
          },
          {
            position: 6,
            type: 1,
            name: "Overexpansion",
            description: "Uncontrolled growth invites decline.",
          },
        ],
      },
    },
  },
  {
    id: 15,
    number: 15,
    chineseName: "謙",
    romanization: "Qiān",
    elements: [7, 2],
    lines: [0, 0, 1, 0, 0, 0],
    content: {
      cs: {
        name: "Skromnost",
        meaning:
          "Skromnost je tichá síla, která nevyžaduje uznání. Tento hexagram ukazuje stav, kdy skutečná hodnota nepotřebuje být zdůrazňována. Hora je skryta pod zemí – velikost se neprojevuje navenek, ale spočívá v hloubce.\n\nPsychologicky jde o vyrovnanost ega. Člověk si je vědom svých schopností, ale nepotřebuje je vystavovat. Skromnost zde není popřením vlastní síly, ale jejím kultivovaným držením.\n\nTam, kde chybí pokora, vzniká napětí. Tam, kde je skromnost, přichází respekt.\n\nTento hexagram připomíná, že skutečný růst probíhá bez okázalosti. Stabilita vzniká ze schopnosti zůstat pevný a zároveň nenápadný.",
        oracle: {
          interpretation: [
            "Nezdůrazňuj své zásluhy.",

            "Zůstaň pevný, ale tichý.",

            "Skutečná hodnota nepotřebuje obhajobu.",
          ],

          introspection: [
            "Kde můžeš ustoupit bez ztráty důstojnosti?",

            "A kde je třeba zkrotit vlastní ego?",
          ],
        },
        anatomy:
          "Skromnost začíná vědomým ovládáním ega.\n\nPostupně se mění v přirozený postoj, který vytváří stabilitu a respekt.\n\nKdyž je síla držena s pokorou, přetrvává déle než okázalá dominance.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Tichý začátek",
            description: "Skromnost se projevuje v nenápadnosti.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní pevnost",
            description: "Síla je stabilní a neokázalá.",
          },
          {
            position: 3,
            type: 1,
            name: "Zkouška pýchy",
            description: "Úspěch testuje míru pokory.",
          },
          {
            position: 4,
            type: 0,
            name: "Vědomé zmenšení",
            description: "Dobrovolné ustoupení vytváří rovnováhu.",
          },
          {
            position: 5,
            type: 0,
            name: "Respekt okolí",
            description: "Skromnost přitahuje důvěru.",
          },
          {
            position: 6,
            type: 0,
            name: "Stálost charakteru",
            description: "Pokora se stává přirozeností.",
          },
        ],
      },
      en: {
        name: "Modesty",
        meaning:
          "Modesty is quiet strength that seeks no recognition. This hexagram shows a state in which true value does not require display. The mountain rests beneath the earth — greatness hidden in depth.\n\nPsychologically, it reflects balanced ego. One knows one’s abilities without the need to proclaim them. Modesty is not self-denial, but cultivated restraint.\n\nWhere humility is absent, tension arises. Where modesty is present, respect follows.\n\nThis hexagram teaches that authentic growth unfolds without spectacle. Stability emerges from quiet firmness.",
        oracle: {
          interpretation: [
            "Do not emphasize your achievements.",

            "Remain firm yet quiet.",

            "True value needs no defense.",
          ],

          introspection: [
            "Where can you step back without losing dignity?",

            "Where does ego require tempering?",
          ],
        },
        anatomy:
          "Modesty begins with conscious restraint.\n\nIt matures into natural humility that stabilizes relationships.\n\nStrength guided by humility endures longer than visible dominance.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Quiet Beginning",
            description: "Modesty appears in subtle action.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Solidity",
            description: "Strength remains understated.",
          },
          {
            position: 3,
            type: 1,
            name: "Test of Pride",
            description: "Success challenges humility.",
          },
          {
            position: 4,
            type: 0,
            name: "Conscious Reduction",
            description: "Stepping back restores balance.",
          },
          {
            position: 5,
            type: 0,
            name: "Earned Respect",
            description: "Humility builds trust.",
          },
          {
            position: 6,
            type: 0,
            name: "Stable Character",
            description: "Humility becomes natural.",
          },
        ],
      },
    },
  },
  {
    id: 16,
    number: 16,
    chineseName: "豫",
    romanization: "Yù",
    elements: [3, 2],
    lines: [0, 0, 0, 1, 0, 0],
    content: {
      cs: {
        name: "Nadšení",
        meaning:
          "Nadšení představuje energii pohybu, která přichází po období přípravy. Je to radost z očekávání a vnitřní soulad, který motivuje k činu. Tento hexagram symbolizuje okamžik, kdy se energie probouzí a chce být vyjádřena.\n\nPsychologicky jde o stav inspirace. Člověk cítí, že směr je správný, a objevuje lehkost v jednání. Nadšení však potřebuje strukturu – jinak se může rozptýlit.\n\nPokud je energie organizována, přináší radost i stabilitu. Pokud je bez směru, stává se chaotickou.\n\nTento hexagram učí, že radost je silou, která spojuje. Nadšení může být katalyzátorem změny, pokud je vedeno vědomím.",
        oracle: {
          interpretation: [
            "Dovol si radost.",

            "Uspořádej svou energii.",

            "Nenech se unést bez směru.",
          ],

          introspection: [
            "Co tě skutečně inspiruje?",

            "A jak můžeš tuto energii ukotvit?",
          ],
        },
        anatomy:
          "Nadšení začíná jako jiskra inspirace.\n\nRozvíjí se, pokud je spojeno s vědomým směrem.\n\nPokud je energie správně ukotvena, přináší radost i dlouhodobý růst.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Tiché očekávání",
            description: "Radost se rodí vnitřně.",
          },
          {
            position: 2,
            type: 0,
            name: "Sdílená radost",
            description: "Nadšení se šíří mezi lidmi.",
          },
          {
            position: 3,
            type: 0,
            name: "Předčasné nadšení",
            description: "Energie bez struktury může vyhořet.",
          },
          {
            position: 4,
            type: 1,
            name: "Vědomé vedení",
            description: "Směr dává energii stabilitu.",
          },
          {
            position: 5,
            type: 0,
            name: "Organizovaná síla",
            description: "Nadšení podporuje celek.",
          },
          {
            position: 6,
            type: 0,
            name: "Vyčerpání",
            description: "Nadměrné vzrušení vede k únavě.",
          },
        ],
      },
      en: {
        name: "Enthusiasm",
        meaning:
          "Enthusiasm represents awakened energy following preparation. It is the joy of anticipation and inner alignment that motivates action. This hexagram marks a moment when energy wants expression.\n\nPsychologically, it reflects inspiration. One senses the right direction and experiences lightness in movement. Yet enthusiasm requires structure; without it, it dissipates.\n\nOrganized energy brings both joy and stability. Unfocused excitement becomes chaotic.\n\nThis hexagram teaches that joy can catalyze transformation when guided consciously.",
        oracle: {
          interpretation: [
            "Allow yourself joy.",

            "Organize your energy.",

            "Avoid directionless excitement.",
          ],

          introspection: [
            "What truly inspires you?",

            "How can you ground that inspiration?",
          ],
        },
        anatomy:
          "Enthusiasm begins as inspiration.\n\nIt matures through conscious direction.\n\nGrounded energy transforms joy into lasting growth.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Quiet Anticipation",
            description: "Joy forms internally.",
          },
          {
            position: 2,
            type: 0,
            name: "Shared Excitement",
            description: "Energy spreads among others.",
          },
          {
            position: 3,
            type: 0,
            name: "Premature Excitement",
            description: "Energy without structure burns out.",
          },
          {
            position: 4,
            type: 1,
            name: "Conscious Leadership",
            description: "Direction stabilizes enthusiasm.",
          },
          {
            position: 5,
            type: 0,
            name: "Organized Momentum",
            description: "Energy supports collective effort.",
          },
          {
            position: 6,
            type: 0,
            name: "Exhaustion",
            description: "Excess excitement leads to fatigue.",
          },
        ],
      },
    },
  },
  {
    id: 17,
    number: 17,
    chineseName: "隨",
    romanization: "Suí",
    elements: [8, 3],
    lines: [1, 0, 0, 1, 1, 0],
    content: {
      cs: {
        name: "Následování",
        meaning:
          "Následování představuje schopnost reagovat na situaci bez rigidního lpění na vlastním postoji. Tento hexagram neznamená slepé podřízení, ale vědomé přizpůsobení se přirozenému směru událostí.\n\nPsychologicky jde o rozpoznání, že ne vždy je třeba být iniciátorem. Někdy je moudřejší sledovat proud a učit se z něj. Následování vyžaduje bdělost – člověk musí rozlišovat, co stojí za to následovat.\n\nTam, kde je následování založeno na respektu a vnitřní jasnosti, přináší harmonii. Pokud je založeno na strachu nebo pohodlnosti, vede ke ztrátě autenticity.\n\nTento hexagram učí pružnosti. Síla spočívá ve schopnosti změnit směr, aniž by se ztratilo jádro.",
        oracle: {
          interpretation: [
            "Sleduj, co je živé a smysluplné.",

            "Následuj vědomě.",

            "Neztrácej vlastní kompas.",
          ],

          introspection: [
            "Koho nebo co právě následuješ?",

            "A je to v souladu s tvými hodnotami?",
          ],
        },
        anatomy:
          "Následování začíná otevřeností.\n\nVyvíjí se skrze rozlišování a vědomé rozhodování.\n\nPokud je směr zvolen svobodně a v souladu s hodnotami, přináší harmonii a růst.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První impuls následovat",
            description: "Objevuje se ochota přizpůsobit se.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní pochybnost",
            description: "Je třeba ověřit směr.",
          },
          {
            position: 3,
            type: 0,
            name: "Přílišná přizpůsobivost",
            description: "Hrozí ztráta vlastní identity.",
          },
          {
            position: 4,
            type: 1,
            name: "Vědomé rozhodnutí",
            description: "Následování je zvoleno svobodně.",
          },
          {
            position: 5,
            type: 1,
            name: "Správný vzor",
            description: "Směr je autentický a inspirující.",
          },
          {
            position: 6,
            type: 0,
            name: "Slepé následování",
            description: "Bez rozlišování vzniká závislost.",
          },
        ],
      },
      en: {
        name: "Following",
        meaning:
          "Following represents the capacity to respond without rigid attachment to one's own position. It is not blind submission, but conscious adaptation to the natural flow of events.\n\nPsychologically, it acknowledges that leadership is not always required. Sometimes wisdom lies in observing and learning from the current direction. Following demands discernment — one must choose carefully what deserves allegiance.\n\nWhen grounded in clarity and respect, following brings harmony. When driven by fear or convenience, it erodes authenticity.\n\nThis hexagram teaches flexibility. Strength lies in adjusting direction without losing inner center.",
        oracle: {
          interpretation: [
            "Follow what feels alive and meaningful.",

            "Adapt consciously.",

            "Do not abandon your compass.",
          ],

          introspection: [
            "Whom or what are you following?",

            "Does it align with your values?",
          ],
        },
        anatomy:
          "Following begins with openness.\n\nIt matures through discernment and conscious choice.\n\nWhen freely chosen, alignment fosters harmony and development.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Willingness",
            description: "Openness to adapt appears.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Doubt",
            description: "Direction must be examined.",
          },
          {
            position: 3,
            type: 0,
            name: "Over-Adaptation",
            description: "Risk of losing identity.",
          },
          {
            position: 4,
            type: 1,
            name: "Conscious Choice",
            description: "Following becomes intentional.",
          },
          {
            position: 5,
            type: 1,
            name: "Authentic Example",
            description: "The model inspires growth.",
          },
          {
            position: 6,
            type: 0,
            name: "Blind Allegiance",
            description: "Lack of discernment creates dependency.",
          },
        ],
      },
    },
  },
  {
    id: 18,
    number: 18,
    chineseName: "蠱",
    romanization: "Gǔ",
    elements: [7, 4],
    lines: [0, 1, 1, 0, 0, 1],
    content: {
      cs: {
        name: "Náprava zkaženého",
        meaning:
          "Náprava zkaženého symbolizuje období, kdy je třeba čelit důsledkům minulých chyb. Nejde o obviňování, ale o vědomé převzetí odpovědnosti. Tento hexagram poukazuje na nutnost očistit to, co bylo zanedbáno.\n\nPsychologicky představuje proces konfrontace se stíny – osobními i kolektivními. Staré vzorce, které již neslouží, musí být rozpoznány a přetvořeny.\n\nTento proces může být nepohodlný, ale je nezbytný pro obnovu vitality. Bez nápravy stagnace přetrvává.\n\nHexagram učí, že obnova vyžaduje odvahu a vytrvalost. Minulost nelze změnit, ale lze ji přetvořit skrze vědomé jednání.",
        oracle: {
          interpretation: [
            "Podívej se na to, co bylo zanedbáno.",

            "Přijmi odpovědnost.",

            "Obnov, co je možné obnovit.",
          ],

          introspection: [
            "Jaký starý vzorec vyžaduje změnu?",

            "A kde můžeš začít s nápravou?",
          ],
        },
        anatomy:
          "Proces začíná rozpoznáním narušení.\n\nVyvíjí se skrze odpovědnost a postupnou očistu.\n\nPokud je náprava důsledná, vzniká pevnější základ než před narušením.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Rozpoznání chyby",
            description: "Objevuje se uvědomění problému.",
          },
          {
            position: 2,
            type: 1,
            name: "Převzetí odpovědnosti",
            description: "Začíná aktivní náprava.",
          },
          {
            position: 3,
            type: 1,
            name: "Odpor ke změně",
            description: "Staré vzorce se brání.",
          },
          {
            position: 4,
            type: 0,
            name: "Postupné čištění",
            description: "Obnova probíhá krok za krokem.",
          },
          {
            position: 5,
            type: 0,
            name: "Obnovená rovnováha",
            description: "Struktura se stabilizuje.",
          },
          {
            position: 6,
            type: 1,
            name: "Nedokončená náprava",
            description: "Povrchní řešení vede k opakování problému.",
          },
        ],
      },
      en: {
        name: "Work on What Has Been Spoiled",
        meaning:
          "Work on What Has Been Spoiled represents a time of confronting the consequences of past neglect. It is not about blame, but conscious responsibility. This hexagram calls for cleansing what has deteriorated.\n\nPsychologically, it involves facing shadow aspects — personal or collective. Outdated patterns must be recognized and transformed.\n\nThe process may be uncomfortable, yet it restores vitality. Without correction, stagnation persists.\n\nThis hexagram teaches that renewal requires courage and persistence. The past cannot be erased, but it can be reshaped through awareness.",
        oracle: {
          interpretation: [
            "Examine what has been neglected.",

            "Take responsibility.",

            "Restore what can be restored.",
          ],

          introspection: [
            "Which old pattern needs revision?",

            "Where can renewal begin?",
          ],
        },
        anatomy:
          "Correction begins with awareness.\n\nDevelopment proceeds through responsible action.\n\nThorough renewal creates stronger foundations than before disruption.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Recognition",
            description: "Awareness of corruption arises.",
          },
          {
            position: 2,
            type: 1,
            name: "Taking Responsibility",
            description: "Active correction begins.",
          },
          {
            position: 3,
            type: 1,
            name: "Resistance",
            description: "Old habits resist change.",
          },
          {
            position: 4,
            type: 0,
            name: "Gradual Cleansing",
            description: "Restoration unfolds step by step.",
          },
          {
            position: 5,
            type: 0,
            name: "Restored Balance",
            description: "Structure stabilizes.",
          },
          {
            position: 6,
            type: 1,
            name: "Incomplete Repair",
            description: "Superficial fixes repeat the issue.",
          },
        ],
      },
    },
  },
  {
    id: 19,
    number: 19,
    chineseName: "臨",
    romanization: "Lín",
    elements: [2, 8],
    lines: [0, 0, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Přiblížení",
        meaning:
          "Přiblížení symbolizuje okamžik, kdy se něco významného začíná přibližovat. Je to období otevřenosti a růstu, kdy se vytváří nové spojení nebo se rozšiřuje vliv. Tento hexagram vyjadřuje příznivý pohyb směrem k něčemu podstatnému.\n\nPsychologicky jde o fázi důvěry. Člověk se odvažuje vstoupit blíže – k lidem, k úkolu, k vlastnímu potenciálu. Přiblížení však vyžaduje citlivost. Přílišná horlivost může rovnováhu narušit.\n\nTento hexagram naznačuje, že nyní je vhodný čas jednat s otevřeným srdcem a vědomým respektem.\n\nPřiblížení není útok, ale nabídka. Je to pohyb směrem k druhému, který vytváří možnost vzájemnosti.",
        oracle: {
          interpretation: [
            "Přibližuj se s úctou.",

            "Buď otevřený.",

            "Nespěchej.",
          ],

          introspection: [
            "K čemu nebo ke komu se máš nyní přiblížit?",

            "A jak můžeš zachovat rovnováhu?",
          ],
        },
        anatomy:
          "Přiblížení začíná otevřeností.\n\nVyvíjí se skrze důvěru a citlivost.\n\nPokud je tempo přiměřené, vzniká stabilní a dlouhodobé spojení.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První krok",
            description: "Záměr navázat kontakt.",
          },
          {
            position: 2,
            type: 0,
            name: "Upřímné otevření",
            description: "Vzniká důvěra.",
          },
          {
            position: 3,
            type: 1,
            name: "Nadměrná horlivost",
            description: "Hrozí ztráta jemnosti.",
          },
          {
            position: 4,
            type: 1,
            name: "Stabilní přiblížení",
            description: "Kontakt se upevňuje.",
          },
          {
            position: 5,
            type: 0,
            name: "Vzájemnost",
            description: "Spojení je oboustranné.",
          },
          {
            position: 6,
            type: 0,
            name: "Přílišná expanze",
            description: "Rozšíření bez hranic narušuje stabilitu.",
          },
        ],
      },
      en: {
        name: "Approach",
        meaning:
          "Approach symbolizes a time when something meaningful draws near. It marks openness and expansion, when influence grows or new connection forms. The movement is favorable, yet requires awareness.\n\nPsychologically, it reflects trust and readiness to engage. One steps closer to people, purpose, or personal potential. Yet eagerness must be balanced with sensitivity.\n\nApproach is not intrusion, but invitation. It creates space for reciprocity.\n\nThis hexagram encourages conscious engagement grounded in respect.",
        oracle: {
          interpretation: [
            "Approach with respect.",

            "Remain open.",

            "Avoid haste.",
          ],

          introspection: [
            "What or whom are you drawing closer to?",

            "How can you preserve balance?",
          ],
        },
        anatomy:
          "Approach begins with openness.\n\nIt develops through trust and sensitivity.\n\nBalanced engagement leads to stable and lasting connection.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Step",
            description: "Intention to connect.",
          },
          {
            position: 2,
            type: 0,
            name: "Sincere Opening",
            description: "Trust begins to form.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Eagerness",
            description: "Gentleness may be lost.",
          },
          {
            position: 4,
            type: 1,
            name: "Stable Engagement",
            description: "Connection strengthens.",
          },
          {
            position: 5,
            type: 0,
            name: "Reciprocity",
            description: "Mutual exchange develops.",
          },
          {
            position: 6,
            type: 0,
            name: "Overexpansion",
            description: "Boundary loss destabilizes growth.",
          },
        ],
      },
    },
  },
  {
    id: 20,
    number: 20,
    chineseName: "觀",
    romanization: "Guān",
    elements: [4, 2],
    lines: [0, 0, 0, 0, 1, 1],
    content: {
      cs: {
        name: "Nahlížení",
        meaning:
          "Nahlížení symbolizuje schopnost zastavit se a pozorovat. Tento hexagram zdůrazňuje význam odstupu – pohledu, který není zatížen okamžitou reakcí. Je to fáze vědomého vnímání.\n\nPsychologicky představuje introspekci. Člověk sleduje své motivace, vzorce i okolnosti bez nutnosti okamžitě jednat. Pozorování samo přináší jasnost.\n\nNahlížení vyžaduje klid a otevřenost. Bez nich se pohled zkresluje.\n\nTento hexagram učí, že někdy je největším činem nejednat, ale vidět. Teprve z jasného pohledu může vzniknout správné rozhodnutí.",
        oracle: {
          interpretation: [
            "Zastav se.",

            "Pozoruj bez hodnocení.",

            "Hledej širší perspektivu.",
          ],

          introspection: [
            "Co přehlížíš v rychlosti jednání?",

            "A jaký obraz se objeví, když zpomalíš?",
          ],
        },
        anatomy:
          "Nahlížení začíná zpomalením.\n\nVyvíjí se skrze prohlubování pozornosti.\n\nKdyž je pohled jasný, další krok vzniká přirozeně a bez tlaku.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Povrchní pohled",
            description: "Vnímání je zatím omezené.",
          },
          {
            position: 2,
            type: 0,
            name: "Prohlubování pozornosti",
            description: "Objevuje se širší perspektiva.",
          },
          {
            position: 3,
            type: 0,
            name: "Sebereflexe",
            description: "Pozornost se obrací dovnitř.",
          },
          {
            position: 4,
            type: 0,
            name: "Zralé pozorování",
            description: "Vnímání je klidné a vyrovnané.",
          },
          {
            position: 5,
            type: 1,
            name: "Jasný vhled",
            description: "Obraz situace se vyjasňuje.",
          },
          {
            position: 6,
            type: 1,
            name: "Ztráta odstupu",
            description: "Nadměrné zapojení zkresluje pohled.",
          },
        ],
      },
      en: {
        name: "Contemplation",
        meaning:
          "Contemplation represents the power of observation. This hexagram emphasizes distance — perception free from immediate reaction. It marks a phase of conscious awareness.\n\nPsychologically, it reflects introspection. One observes motives, patterns, and circumstances without rushing to act. Clarity arises from stillness.\n\nContemplation requires calm and openness. Without them, perception distorts.\n\nSometimes the greatest action is to see clearly. Only from insight can appropriate response emerge.",
        oracle: {
          interpretation: [
            "Pause.",

            "Observe without judgment.",

            "Seek a broader view.",
          ],

          introspection: [
            "What are you missing in haste?",

            "What becomes visible when you slow down?",
          ],
        },
        anatomy:
          "Contemplation begins with slowing down.\n\nIt develops through sustained attention.\n\nClarity transforms perception into wise action.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Superficial View",
            description: "Perception remains limited.",
          },
          {
            position: 2,
            type: 0,
            name: "Deepening Awareness",
            description: "Perspective widens.",
          },
          {
            position: 3,
            type: 0,
            name: "Self-Reflection",
            description: "Attention turns inward.",
          },
          {
            position: 4,
            type: 0,
            name: "Mature Observation",
            description: "Perception stabilizes.",
          },
          {
            position: 5,
            type: 1,
            name: "Clear Insight",
            description: "Understanding becomes sharp.",
          },
          {
            position: 6,
            type: 1,
            name: "Loss of Distance",
            description: "Overinvolvement clouds vision.",
          },
        ],
      },
    },
  },
  {
    id: 21,
    number: 21,
    chineseName: "噬嗑",
    romanization: "Shì Kè",
    elements: [3, 6],
    lines: [1, 0, 0, 1, 0, 1],
    content: {
      cs: {
        name: "Prokousání",
        meaning:
          "Prokousání symbolizuje situaci, kdy je třeba odstranit překážku, která brání přirozenému toku. Něco je zaseknuté – mezi úmyslem a výsledkem stojí odpor. Tento hexagram vyjadřuje nutnost přímého, ale spravedlivého zásahu.\n\nPsychologicky jde o konfrontaci. Člověk musí pojmenovat problém, který byl přehlížen nebo tolerován. Vyhýbání se konfliktu by zde vedlo k větší stagnaci.\n\nZásah však nemá být impulzivní ani tvrdý bez rozmyslu. Jde o jasnost a důslednost.\n\nTento hexagram učí, že někdy je třeba „prokousat“ se skrze nepohodlí, aby mohl vzniknout řád a rovnováha.",
        oracle: {
          interpretation: [
            "Pojmenuj překážku.",

            "Jednej spravedlivě.",

            "Neodkládej řešení.",
          ],

          introspection: [
            "Co ti brání v postupu?",

            "A kde je třeba jasného rozhodnutí?",
          ],
        },
        anatomy:
          "Prokousání začíná rozpoznáním překážky.\n\nVyvíjí se skrze jasné a spravedlivé jednání.\n\nPokud je zásah přiměřený, vzniká nový řád a tok energie se obnovuje.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První odpor",
            description: "Objevuje se překážka.",
          },
          {
            position: 2,
            type: 0,
            name: "Zvažování zásahu",
            description: "Je třeba promyslet postup.",
          },
          {
            position: 3,
            type: 0,
            name: "Zmatek",
            description: "Nedostatek jasnosti komplikuje řešení.",
          },
          {
            position: 4,
            type: 1,
            name: "Rozhodný krok",
            description: "Problém je konfrontován.",
          },
          {
            position: 5,
            type: 0,
            name: "Spravedlivé vyřešení",
            description: "Zásah přináší rovnováhu.",
          },
          {
            position: 6,
            type: 1,
            name: "Přílišná tvrdost",
            description: "Nadměrná síla vyvolává odpor.",
          },
        ],
      },
      en: {
        name: "Biting Through",
        meaning:
          "Biting Through represents a situation where an obstacle blocks natural flow. Something stands between intention and outcome. This hexagram calls for direct yet fair intervention.\n\nPsychologically, it reflects confrontation. A problem must be named rather than ignored. Avoidance would deepen stagnation.\n\nAction must be firm but not impulsive. Clarity and justice are essential.\n\nSometimes discomfort must be faced in order to restore balance and order.",
        oracle: {
          interpretation: [
            "Identify the obstacle.",

            "Act fairly.",

            "Do not postpone resolution.",
          ],

          introspection: [
            "What blocks your progress?",

            "Where is decisive action required?",
          ],
        },
        anatomy:
          "The process begins with recognizing obstruction.\n\nIt develops through fair and clear intervention.\n\nAppropriate action restores order and renews movement.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Resistance",
            description: "Obstacle becomes visible.",
          },
          {
            position: 2,
            type: 0,
            name: "Considering Action",
            description: "Strategy requires reflection.",
          },
          {
            position: 3,
            type: 0,
            name: "Confusion",
            description: "Lack of clarity complicates matters.",
          },
          {
            position: 4,
            type: 1,
            name: "Decisive Move",
            description: "The issue is confronted.",
          },
          {
            position: 5,
            type: 0,
            name: "Just Resolution",
            description: "Balance is restored.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess Severity",
            description: "Overforce creates backlash.",
          },
        ],
      },
    },
  },
  {
    id: 22,
    number: 22,
    chineseName: "賁",
    romanization: "Bì",
    elements: [6, 7],
    lines: [1, 0, 0, 0, 1, 0],
    content: {
      cs: {
        name: "Půvab",
        meaning:
          "Půvab symbolizuje vnější formu, která vyjadřuje vnitřní kvalitu. Tento hexagram poukazuje na význam estetiky, prezentace a kultivovaného projevu. Forma zde není povrchností, ale prostředkem vyjádření podstaty.\n\nPsychologicky jde o schopnost dát věcem krásu a strukturu. Vztahy, práce i komunikace získávají harmonii, pokud jsou upraveny s citem.\n\nPůvab však nesmí zakrývat prázdnotu. Pokud forma převáží nad obsahem, vzniká iluze.\n\nTento hexagram učí, že krása má smysl tehdy, když podporuje pravdivost. Ozdoba má být služebníkem podstaty, nikoli jejím náhradníkem.",
        oracle: {
          interpretation: [
            "Pečuj o formu.",

            "Zachovej autenticitu.",

            "Nevytvářej iluzi.",
          ],

          introspection: [
            "Co potřebuje kultivovat svůj výraz?",

            "A kde je třeba propojit formu s obsahem?",
          ],
        },
        anatomy:
          "Půvab začíná úpravou formy.\n\nVyvíjí se skrze harmonii mezi obsahem a výrazem.\n\nPokud je krása podřízena pravdě, vytváří stabilní a důvěryhodný obraz.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První úprava",
            description: "Forma začíná získávat tvar.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní jednoduchost",
            description: "Obsah zůstává čistý.",
          },
          {
            position: 3,
            type: 0,
            name: "Nadměrná ozdoba",
            description: "Hrozí ztráta podstaty.",
          },
          {
            position: 4,
            type: 0,
            name: "Vyvážený projev",
            description: "Forma a obsah se spojují.",
          },
          {
            position: 5,
            type: 1,
            name: "Ušlechtilá jednoduchost",
            description: "Krása je přirozená a nenucená.",
          },
          {
            position: 6,
            type: 0,
            name: "Prázdná dekorace",
            description: "Vnější efekt bez hloubky.",
          },
        ],
      },
      en: {
        name: "Grace",
        meaning:
          "Grace represents the outer form that expresses inner quality. This hexagram emphasizes aesthetics, presentation, and cultivated expression. Form is not superficiality, but a vehicle for essence.\n\nPsychologically, it reflects the ability to bring harmony and refinement to situations. Communication and relationships benefit from thoughtful presentation.\n\nYet form must not conceal emptiness. When appearance dominates substance, illusion arises.\n\nGrace teaches that beauty serves truth. Ornament should enhance essence, not replace it.",
        oracle: {
          interpretation: [
            "Refine the form.",

            "Remain authentic.",

            "Avoid illusion.",
          ],

          introspection: [
            "What requires thoughtful expression?",

            "Where must form and substance align?",
          ],
        },
        anatomy:
          "Grace begins with shaping form.\n\nIt matures through harmony between substance and appearance.\n\nWhen beauty serves truth, expression becomes stable and trustworthy.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Refinement",
            description: "Form begins to take shape.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Simplicity",
            description: "Content remains pure.",
          },
          {
            position: 3,
            type: 0,
            name: "Excess Ornament",
            description: "Essence risks being obscured.",
          },
          {
            position: 4,
            type: 0,
            name: "Balanced Expression",
            description: "Form and content align.",
          },
          {
            position: 5,
            type: 1,
            name: "Noble Simplicity",
            description: "Beauty appears natural.",
          },
          {
            position: 6,
            type: 0,
            name: "Empty Decoration",
            description: "Appearance lacks depth.",
          },
        ],
      },
    },
  },
  {
    id: 23,
    number: 23,
    chineseName: "剝",
    romanization: "Bō",
    elements: [7, 2],
    lines: [0, 0, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Rozklad",
        meaning:
          "Rozklad představuje postupné ubývání síly. Struktura se oslabuje.\n\nPsychologicky jde o období ztráty nebo únavy.\n\nJe čas ustoupit a chránit to podstatné.",
        oracle: {
          interpretation: [
            "Nevzdoruj nevyhnutelnému.",

            "Chraň jádro.",

            "Ustoupení je někdy moudré.",
          ],

          introspection: ["Co je třeba nechat odejít?"],
        },
        anatomy:
          "Rozklad je přirozený cyklus.\n\nUstoupení chrání budoucnost.\n\nPo rozpadu přichází obnova.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První oslabení",
            description: "Základ se drolí.",
          },
          {
            position: 2,
            type: 0,
            name: "Pokračující úpadek",
            description: "Síla slábne.",
          },
          {
            position: 3,
            type: 0,
            name: "Ztráta opory",
            description: "Podpora mizí.",
          },
          {
            position: 4,
            type: 0,
            name: "Vnější tlak",
            description: "Problém je zřejmý.",
          },
          {
            position: 5,
            type: 0,
            name: "Zachování středu",
            description: "Vnitřní hodnota zůstává.",
          },
          {
            position: 6,
            type: 1,
            name: "Zbytek síly",
            description: "Jádro přežívá.",
          },
        ],
      },
      en: {
        name: "Splitting Apart",
        meaning:
          "Splitting Apart represents gradual decline. Structure weakens.\n\nPsychologically, it reflects fatigue or loss.\n\nIt is time to retreat and protect what matters.",
        oracle: {
          interpretation: [
            "Do not resist the inevitable.",

            "Protect the core.",

            "Retreat can be wise.",
          ],

          introspection: ["What must you let go?"],
        },
        anatomy:
          "Decline is part of cycles.\n\nRetreat protects renewal.\n\nAfter decay comes rebirth.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Weakening",
            description: "The foundation erodes.",
          },
          {
            position: 2,
            type: 0,
            name: "Continued Decline",
            description: "Strength diminishes.",
          },
          {
            position: 3,
            type: 0,
            name: "Loss of Support",
            description: "Support fades.",
          },
          {
            position: 4,
            type: 0,
            name: "External Pressure",
            description: "The problem is visible.",
          },
          {
            position: 5,
            type: 0,
            name: "Preserved Core",
            description: "Inner value remains.",
          },
          {
            position: 6,
            type: 1,
            name: "Remaining Strength",
            description: "The core survives.",
          },
        ],
      },
    },
  },
  {
    id: 24,
    number: 24,
    chineseName: "復",
    romanization: "Fù",
    elements: [3, 2],
    lines: [1, 0, 0, 0, 0, 0],
    content: {
      cs: {
        name: "Návrat",
        meaning:
          "Návrat představuje okamžik obratu po období úpadku. Malý impuls světla se znovu objevuje.\n\nPsychologicky jde o návrat k vlastní podstatě. Po vychýlení se člověk vrací ke středu.\n\nJe to začátek obnovy – nenápadný, ale zásadní.",
        oracle: {
          interpretation: [
            "Vrať se k tomu, co je pravdivé.",

            "Začni znovu, bez výčitek.",

            "Malý krok stačí.",
          ],

          introspection: ["Kam se potřebuješ vrátit?"],
        },
        anatomy:
          "Návrat je tichý začátek.\n\nMalá změna vede k velké obnově.\n\nVytrvalost upevňuje nový směr.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První světlo",
            description: "Obnova začíná uvnitř.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilizace směru",
            description: "Vracíš se k jádru.",
          },
          {
            position: 3,
            type: 0,
            name: "Nejistý krok",
            description: "Vytrvej v obratu.",
          },
          {
            position: 4,
            type: 0,
            name: "Sdílený návrat",
            description: "Podpora pomáhá.",
          },
          {
            position: 5,
            type: 0,
            name: "Pevný střed",
            description: "Rovnováha se obnovuje.",
          },
          {
            position: 6,
            type: 0,
            name: "Opakování chyby",
            description: "Neztrať znovu směr.",
          },
        ],
      },
      en: {
        name: "Return",
        meaning:
          "Return marks the turning point after decline. A small light begins again.\n\nPsychologically, it represents coming back to one’s center.\n\nIt is a subtle but crucial renewal.",
        oracle: {
          interpretation: [
            "Return to what is true.",

            "Begin again without regret.",

            "A small step is enough.",
          ],

          introspection: ["Where do you need to return?"],
        },
        anatomy:
          "Return begins quietly.\n\nSmall correction leads to renewal.\n\nConsistency secures growth.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "First Light",
            description: "Renewal starts within.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilizing Direction",
            description: "Center is regained.",
          },
          {
            position: 3,
            type: 0,
            name: "Uncertain Step",
            description: "Persist in the turn.",
          },
          {
            position: 4,
            type: 0,
            name: "Shared Return",
            description: "Support strengthens.",
          },
          {
            position: 5,
            type: 0,
            name: "Firm Center",
            description: "Balance restores.",
          },
          {
            position: 6,
            type: 0,
            name: "Repeating Error",
            description: "Do not stray again.",
          },
        ],
      },
    },
  },
  {
    id: 25,
    number: 25,
    chineseName: "無妄",
    romanization: "Wú Wàng",
    elements: [3, 1],
    lines: [1, 0, 0, 1, 1, 1],
    content: {
      cs: {
        name: "Nevinnost",
        meaning:
          "Nevinnost symbolizuje jednání bez postranních úmyslů. Čistota motivu přináší sílu.\n\nPsychologicky jde o spontánnost a pravdivost.\n\nManipulace narušuje rovnováhu.",
        oracle: {
          interpretation: [
            "Jednej upřímně.",

            "Nespekuluj.",

            "Pravdivost přináší ochranu.",
          ],

          introspection: ["Jsou tvé úmysly čisté?"],
        },
        anatomy:
          "Nevinnost vychází z autenticity.\n\nBez pravdivosti se rozpadá.\n\nČistý motiv stabilizuje cestu.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Přímý krok",
            description: "Jednání bez kalkulu.",
          },
          {
            position: 2,
            type: 0,
            name: "Přirozenost",
            description: "Buď autentický.",
          },
          {
            position: 3,
            type: 0,
            name: "Pochybnost",
            description: "Neztrácej důvěru.",
          },
          {
            position: 4,
            type: 1,
            name: "Ochrana pravdy",
            description: "Upřímnost chrání.",
          },
          {
            position: 5,
            type: 1,
            name: "Střední čistota",
            description: "Motiv je jasný.",
          },
          {
            position: 6,
            type: 1,
            name: "Ztráta nevinnosti",
            description: "Narušení přináší důsledky.",
          },
        ],
      },
      en: {
        name: "Innocence",
        meaning:
          "Innocence represents action without hidden motives. Purity of intention brings strength.\n\nPsychologically, it reflects authenticity.\n\nManipulation disturbs balance.",
        oracle: {
          interpretation: [
            "Act sincerely.",

            "Avoid scheming.",

            "Truthfulness protects.",
          ],

          introspection: ["Are your intentions clear?"],
        },
        anatomy:
          "Innocence stems from authenticity.\n\nWithout truth, it collapses.\n\nClear intention steadies the path.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Direct Step",
            description: "Action without calculation.",
          },
          {
            position: 2,
            type: 0,
            name: "Naturalness",
            description: "Be authentic.",
          },
          {
            position: 3,
            type: 0,
            name: "Doubt",
            description: "Do not lose trust.",
          },
          {
            position: 4,
            type: 1,
            name: "Protection of Truth",
            description: "Sincerity safeguards.",
          },
          {
            position: 5,
            type: 1,
            name: "Centered Purity",
            description: "Motivation is clear.",
          },
          {
            position: 6,
            type: 1,
            name: "Loss of Innocence",
            description: "Distortion brings consequences.",
          },
        ],
      },
    },
  },
  {
    id: 26,
    number: 26,
    chineseName: "大畜",
    romanization: "Dà Chù",
    elements: [7, 1],
    lines: [1, 1, 1, 0, 0, 1],
    content: {
      cs: {
        name: "Velká zdrženlivost",
        meaning:
          "Velká zdrženlivost symbolizuje shromažďování síly bez okamžitého uvolnění.\n\nPsychologicky jde o disciplínu a trpělivost.\n\nZadržení energie zvyšuje její hodnotu.",
        oracle: {
          interpretation: [
            "Zadrž energii.",

            "Buduj základ.",

            "Jednej až ve správný čas.",
          ],

          introspection: ["Kde je třeba vyčkat?"],
        },
        anatomy:
          "Zdrženlivost posiluje charakter.\n\nUvolnění přichází ve správný okamžik.\n\nDisciplína vytváří trvalou sílu.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Zastavení síly",
            description: "Nespěchej.",
          },
          {
            position: 2,
            type: 1,
            name: "Vnitřní kontrola",
            description: "Disciplína roste.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí",
            description: "Energie je silná.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilní základ",
            description: "Trpělivost chrání.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyváženost",
            description: "Čekání je vědomé.",
          },
          {
            position: 6,
            type: 1,
            name: "Uvolnění",
            description: "Čas akce přichází.",
          },
        ],
      },
      en: {
        name: "Great Restraint",
        meaning:
          "Great Restraint represents gathering strength without immediate release.\n\nPsychologically, it reflects discipline.\n\nContained energy gains value.",
        oracle: {
          interpretation: [
            "Hold your energy.",

            "Build foundations.",

            "Act at the right time.",
          ],

          introspection: ["Where must you wait?"],
        },
        anatomy:
          "Restraint strengthens character.\n\nRelease comes in proper timing.\n\nDiscipline creates lasting power.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Stopping Force",
            description: "Do not rush.",
          },
          {
            position: 2,
            type: 1,
            name: "Inner Control",
            description: "Discipline grows.",
          },
          {
            position: 3,
            type: 1,
            name: "Tension",
            description: "Energy builds.",
          },
          {
            position: 4,
            type: 0,
            name: "Stable Base",
            description: "Patience protects.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Waiting",
            description: "Delay is conscious.",
          },
          {
            position: 6,
            type: 1,
            name: "Release",
            description: "Time for action arrives.",
          },
        ],
      },
    },
  },
  {
    id: 27,
    number: 27,
    chineseName: "頤",
    romanization: "Yí",
    elements: [7, 3],
    lines: [0, 0, 1, 0, 0, 1],
    content: {
      cs: {
        name: "Výživa",
        meaning:
          "Výživa symbolizuje to, čím se živíme – fyzicky i duševně. Nejde jen o jídlo, ale o myšlenky, vztahy a podněty.\n\nPsychologicky ukazuje na kvalitu vstupů, které formují charakter.\n\nTo, co přijímáš, se stává součástí tebe.",
        oracle: {
          interpretation: [
            "Vědomě si vybírej, co přijímáš.",

            "Pečuj o své zdroje.",

            "Nevhodná výživa oslabuje.",
          ],

          introspection: ["Čím právě krmíš svou mysl?"],
        },
        anatomy:
          "Výživa formuje charakter.\n\nVědomá péče přináší sílu.\n\nNerovnováha vede k oslabení.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Touha",
            description: "Rozpoznání potřeby.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnější výživa",
            description: "Pozor na kvalitu.",
          },
          {
            position: 3,
            type: 1,
            name: "Nesprávné přijetí",
            description: "Nevhodné zdroje škodí.",
          },
          {
            position: 4,
            type: 0,
            name: "Vnitřní podpora",
            description: "Péče posiluje.",
          },
          {
            position: 5,
            type: 0,
            name: "Střední rovnováha",
            description: "Zdravé hranice.",
          },
          {
            position: 6,
            type: 1,
            name: "Nadměrnost",
            description: "Přesycení oslabuje.",
          },
        ],
      },
      en: {
        name: "Nourishment",
        meaning:
          "Nourishment represents what feeds us — physically and mentally.\n\nPsychologically, it points to the quality of inputs shaping character.\n\nWhat you consume becomes part of you.",
        oracle: {
          interpretation: [
            "Choose carefully what you take in.",

            "Care for your resources.",

            "Poor nourishment weakens.",
          ],

          introspection: ["What feeds your mind now?"],
        },
        anatomy:
          "Nourishment shapes character.\n\nConscious care builds strength.\n\nImbalance leads to decline.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Desire",
            description: "Recognition of need.",
          },
          {
            position: 2,
            type: 0,
            name: "External Nourishment",
            description: "Quality matters.",
          },
          {
            position: 3,
            type: 1,
            name: "Improper Intake",
            description: "Wrong sources harm.",
          },
          {
            position: 4,
            type: 0,
            name: "Inner Support",
            description: "Care strengthens.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Center",
            description: "Healthy boundaries.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess",
            description: "Overindulgence weakens.",
          },
        ],
      },
    },
  },
  {
    id: 28,
    number: 28,
    chineseName: "大過",
    romanization: "Dà Guò",
    elements: [8, 4],
    lines: [0, 1, 1, 1, 1, 0],
    content: {
      cs: {
        name: "Převaha velkého",
        meaning:
          "Převaha velkého označuje situaci, kdy je zatížení větší než podpora.\n\nPsychologicky jde o přetížení odpovědností.\n\nJe třeba najít nový způsob podpory.",
        oracle: {
          interpretation: [
            "Nepřetěžuj se.",

            "Hledej oporu.",

            "Změň strukturu.",
          ],

          introspection: ["Co tě tíží víc, než je únosné?"],
        },
        anatomy:
          "Přetížení vyžaduje úpravu.\n\nBez podpory dochází k zlomu.\n\nObnova přichází změnou struktury.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První tlak",
            description: "Zátěž se objevuje.",
          },
          {
            position: 2,
            type: 1,
            name: "Napětí roste",
            description: "Struktura je ohrožena.",
          },
          {
            position: 3,
            type: 1,
            name: "Kritický bod",
            description: "Riziko zlomu.",
          },
          {
            position: 4,
            type: 1,
            name: "Hledání podpory",
            description: "Je nutná změna.",
          },
          {
            position: 5,
            type: 1,
            name: "Dočasná stabilita",
            description: "Opora pomáhá.",
          },
          { position: 6, type: 0, name: "Obrat", description: "Změna směru." },
        ],
      },
      en: {
        name: "Great Excess",
        meaning:
          "Great Excess indicates a burden heavier than support.\n\nPsychologically, it reflects overload.\n\nA new structure is needed.",
        oracle: {
          interpretation: [
            "Do not overstrain.",

            "Seek support.",

            "Adjust the framework.",
          ],

          introspection: ["What feels heavier than it should?"],
        },
        anatomy:
          "Excess demands adjustment.\n\nWithout support, collapse follows.\n\nRenewal comes through restructuring.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Pressure",
            description: "The burden appears.",
          },
          {
            position: 2,
            type: 1,
            name: "Growing Strain",
            description: "Structure weakens.",
          },
          {
            position: 3,
            type: 1,
            name: "Critical Point",
            description: "Risk of break.",
          },
          {
            position: 4,
            type: 1,
            name: "Seeking Support",
            description: "Change is required.",
          },
          {
            position: 5,
            type: 1,
            name: "Temporary Stability",
            description: "Support holds.",
          },
          {
            position: 6,
            type: 0,
            name: "Turn",
            description: "Direction shifts.",
          },
        ],
      },
    },
  },
  {
    id: 29,
    number: 29,
    chineseName: "坎",
    romanization: "Kǎn",
    elements: [5, 5],
    lines: [0, 1, 0, 0, 1, 0],
    content: {
      cs: {
        name: "Propast",
        meaning:
          "Propast symbolizuje opakované nebezpečí nebo náročnou situaci.\n\nPsychologicky jde o čelení strachu.\n\nVnitřní klid je jedinou jistotou.",
        oracle: {
          interpretation: [
            "Zůstaň bdělý.",

            "Nepodléhej panice.",

            "Vědomí je ochranou.",
          ],

          introspection: ["Jak reaguješ na nejistotu?"],
        },
        anatomy:
          "Nebezpečí učí bdělosti.\n\nVnitřní rovnováha chrání.\n\nStrach může být učitelem.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První pád",
            description: "Riziko je zřejmé.",
          },
          {
            position: 2,
            type: 1,
            name: "Držení středu",
            description: "Stabilita uvnitř.",
          },
          {
            position: 3,
            type: 0,
            name: "Ztráta jistoty",
            description: "Strach narůstá.",
          },
          {
            position: 4,
            type: 0,
            name: "Opakovaná výzva",
            description: "Lekce se vrací.",
          },
          {
            position: 5,
            type: 1,
            name: "Vytrvalost",
            description: "Vnitřní síla roste.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnaný strach",
            description: "Panika oslabuje.",
          },
        ],
      },
      en: {
        name: "The Abyss",
        meaning:
          "The Abyss represents repeated danger or challenge.\n\nPsychologically, it reflects confronting fear.\n\nInner calm is the only security.",
        oracle: {
          interpretation: [
            "Stay alert.",

            "Do not panic.",

            "Awareness protects.",
          ],

          introspection: ["How do you respond to uncertainty?"],
        },
        anatomy:
          "Danger teaches awareness.\n\nInner balance protects.\n\nFear can become a teacher.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "First Fall",
            description: "Risk appears.",
          },
          {
            position: 2,
            type: 1,
            name: "Holding Center",
            description: "Inner stability.",
          },
          {
            position: 3,
            type: 0,
            name: "Loss of Certainty",
            description: "Fear grows.",
          },
          {
            position: 4,
            type: 0,
            name: "Repeated Challenge",
            description: "Lesson returns.",
          },
          {
            position: 5,
            type: 1,
            name: "Perseverance",
            description: "Inner strength develops.",
          },
          {
            position: 6,
            type: 0,
            name: "Excess Fear",
            description: "Panic weakens.",
          },
        ],
      },
    },
  },
  {
    id: 30,
    number: 30,
    chineseName: "離",
    romanization: "Lí",
    elements: [6, 6],
    lines: [1, 0, 1, 1, 0, 1],
    content: {
      cs: {
        name: "Jas",
        meaning:
          "Jas představuje světlo a vědomí. Umožňuje rozpoznat pravdu.\n\nPsychologicky jde o vhled.\n\nSvětlo však může i oslepit.",
        oracle: {
          interpretation: [
            "Hledej jasnost.",

            "Neulpívej na povrchu.",

            "Vědomí vede.",
          ],

          introspection: ["Co je nyní třeba vidět jasně?"],
        },
        anatomy:
          "Jas přináší poznání.\n\nBez rovnováhy však oslepuje.\n\nVědomé světlo vede k porozumění.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První světlo",
            description: "Poznání začíná.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilní plamen",
            description: "Jas roste.",
          },
          {
            position: 3,
            type: 1,
            name: "Přílišná intenzita",
            description: "Oheň může pálit.",
          },
          {
            position: 4,
            type: 1,
            name: "Osvícení",
            description: "Vědomí vrcholí.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyvážený vhled",
            description: "Světlo je stabilní.",
          },
          {
            position: 6,
            type: 1,
            name: "Vyhasnutí",
            description: "Energie slábne.",
          },
        ],
      },
      en: {
        name: "Clarity",
        meaning:
          "Clarity represents light and awareness.\n\nPsychologically, it reflects insight.\n\nLight can illuminate or blind.",
        oracle: {
          interpretation: [
            "Seek clarity.",

            "Look beneath the surface.",

            "Awareness guides.",
          ],

          introspection: ["What needs to be seen clearly?"],
        },
        anatomy:
          "Clarity reveals truth.\n\nWithout balance, it blinds.\n\nConscious light leads to understanding.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "First Light",
            description: "Insight begins.",
          },
          {
            position: 2,
            type: 0,
            name: "Steady Flame",
            description: "Clarity grows.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Intensity",
            description: "Light may burn.",
          },
          {
            position: 4,
            type: 1,
            name: "Illumination",
            description: "Awareness peaks.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Insight",
            description: "Light stabilizes.",
          },
          {
            position: 6,
            type: 1,
            name: "Fading",
            description: "Energy diminishes.",
          },
        ],
      },
    },
  },
  {
    id: 31,
    number: 31,
    chineseName: "咸",
    romanization: "Xián",
    elements: [7, 8],
    lines: [0, 0, 1, 1, 1, 0],
    content: {
      cs: {
        name: "Vliv",
        meaning:
          "Vliv představuje přirozenou přitažlivost mezi dvěma silami. Nejde o manipulaci, ale o rezonanci.\n\nPsychologicky symbolizuje otevřenost ke vztahu a citlivost vůči druhým.\n\nSkutečný vliv vychází z autenticity.",
        oracle: {
          interpretation: [
            "Buď otevřený citlivosti.",

            "Nemanipuluj.",

            "Rezonance vzniká přirozeně.",
          ],

          introspection: ["Co tě skutečně přitahuje – a proč?"],
        },
        anatomy:
          "Vliv roste z citlivosti.\n\nBez autenticity se rozpadá.\n\nRespekt udržuje rovnováhu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První dotek",
            description: "Vzniká jemné spojení.",
          },
          {
            position: 2,
            type: 0,
            name: "Citlivost",
            description: "Otevřenost roste.",
          },
          {
            position: 3,
            type: 1,
            name: "Silná přitažlivost",
            description: "Pozor na závislost.",
          },
          {
            position: 4,
            type: 1,
            name: "Vzájemnost",
            description: "Rovnováha vztahu.",
          },
          {
            position: 5,
            type: 1,
            name: "Upřímná rezonance",
            description: "Spojení je pravdivé.",
          },
          {
            position: 6,
            type: 0,
            name: "Povrchní vliv",
            description: "Chybí hloubka.",
          },
        ],
      },
      en: {
        name: "Influence",
        meaning:
          "Influence represents natural attraction between forces. It is resonance, not manipulation.\n\nPsychologically, it reflects relational sensitivity.\n\nTrue influence arises from authenticity.",
        oracle: {
          interpretation: [
            "Remain open and sensitive.",

            "Do not manipulate.",

            "Resonance emerges naturally.",
          ],

          introspection: ["What truly attracts you — and why?"],
        },
        anatomy:
          "Influence grows through sensitivity.\n\nWithout authenticity, it fades.\n\nRespect sustains harmony.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "First Contact",
            description: "A subtle connection forms.",
          },
          {
            position: 2,
            type: 0,
            name: "Sensitivity",
            description: "Openness grows.",
          },
          {
            position: 3,
            type: 1,
            name: "Strong Attraction",
            description: "Beware dependency.",
          },
          {
            position: 4,
            type: 1,
            name: "Mutuality",
            description: "Balance in relationship.",
          },
          {
            position: 5,
            type: 1,
            name: "Sincere Resonance",
            description: "Connection is genuine.",
          },
          {
            position: 6,
            type: 0,
            name: "Superficial Appeal",
            description: "Lacks depth.",
          },
        ],
      },
    },
  },
  {
    id: 32,
    number: 32,
    chineseName: "恆",
    romanization: "Héng",
    elements: [3, 4],
    lines: [0, 1, 1, 0, 1, 0],
    content: {
      cs: {
        name: "Trvání",
        meaning:
          "Trvání představuje stabilitu v čase. Nejde o stagnaci, ale o vytrvalost v pravdivém směru.\n\nPsychologicky ukazuje na disciplínu a dlouhodobé závazky.\n\nTo, co má hodnotu, vyžaduje čas.",
        oracle: {
          interpretation: [
            "Vytrvej.",

            "Udrž směr.",

            "Nestřídej cíl příliš rychle.",
          ],

          introspection: ["V čem potřebuješ větší důslednost?"],
        },
        anatomy:
          "Trvání buduje hodnotu.\n\nBez vytrvalosti se záměr rozpadá.\n\nČas je spojencem stability.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Nejistý začátek",
            description: "Směr se hledá.",
          },
          {
            position: 2,
            type: 1,
            name: "Stálost",
            description: "Roste vytrvalost.",
          },
          {
            position: 3,
            type: 1,
            name: "Pochybnost",
            description: "Zkouška trpělivosti.",
          },
          {
            position: 4,
            type: 0,
            name: "Obnova závazku",
            description: "Znovu potvrď směr.",
          },
          {
            position: 5,
            type: 1,
            name: "Pevný střed",
            description: "Stabilita vrcholí.",
          },
          {
            position: 6,
            type: 0,
            name: "Vyčerpání",
            description: "Pozor na únavu.",
          },
        ],
      },
      en: {
        name: "Duration",
        meaning:
          "Duration represents stability through time. It is perseverance, not stagnation.\n\nPsychologically, it reflects discipline.\n\nWhat endures requires commitment.",
        oracle: {
          interpretation: [
            "Persist.",

            "Maintain direction.",

            "Avoid constant shifts.",
          ],

          introspection: ["Where is consistency needed?"],
        },
        anatomy:
          "Duration builds value.\n\nWithout perseverance, intention fades.\n\nTime strengthens what is steady.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Uncertain Start",
            description: "Direction is unclear.",
          },
          {
            position: 2,
            type: 1,
            name: "Steadiness",
            description: "Perseverance grows.",
          },
          {
            position: 3,
            type: 1,
            name: "Doubt",
            description: "Patience is tested.",
          },
          {
            position: 4,
            type: 0,
            name: "Renewed Commitment",
            description: "Affirm direction again.",
          },
          {
            position: 5,
            type: 1,
            name: "Firm Center",
            description: "Stability peaks.",
          },
          {
            position: 6,
            type: 0,
            name: "Fatigue",
            description: "Beware exhaustion.",
          },
        ],
      },
    },
  },
  {
    id: 33,
    number: 33,
    chineseName: "遯",
    romanization: "Dùn",
    elements: [7, 1],
    lines: [1, 1, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Ústup",
        meaning:
          "Ústup neznamená porážku, ale strategickou ochranu síly.\n\nPsychologicky jde o rozpoznání, kdy není vhodný čas pro konfrontaci.\n\nUstoupit může být moudřejší než bojovat.",
        oracle: {
          interpretation: [
            "Nezůstávej tam, kde síla slábne.",

            "Ustup vědomě.",

            "Chraň svou energii.",
          ],

          introspection: ["Co je lepší opustit?"],
        },
        anatomy:
          "Ústup chrání budoucnost.\n\nBez strategie se mění v útěk.\n\nSprávný čas je klíčový.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První ústup",
            description: "Rozpoznání rizika.",
          },
          {
            position: 2,
            type: 1,
            name: "Ochrana hranic",
            description: "Ustupuj klidně.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí",
            description: "Situace je náročná.",
          },
          {
            position: 4,
            type: 1,
            name: "Strategie",
            description: "Ústup je vědomý.",
          },
          {
            position: 5,
            type: 0,
            name: "Stabilní ochrana",
            description: "Síla se zachovává.",
          },
          {
            position: 6,
            type: 0,
            name: "Příliš pozdní reakce",
            description: "Zdržení škodí.",
          },
        ],
      },
      en: {
        name: "Retreat",
        meaning:
          "Retreat does not mean defeat but strategic preservation.\n\nPsychologically, it reflects recognizing unfavorable timing.\n\nWithdrawing can be wiser than confrontation.",
        oracle: {
          interpretation: [
            "Do not stay where strength fades.",

            "Withdraw consciously.",

            "Protect your energy.",
          ],

          introspection: ["What is better left behind?"],
        },
        anatomy:
          "Retreat safeguards the future.\n\nWithout strategy, it becomes escape.\n\nTiming determines wisdom.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Withdrawal",
            description: "Risk is recognized.",
          },
          {
            position: 2,
            type: 1,
            name: "Protecting Boundaries",
            description: "Retreat calmly.",
          },
          {
            position: 3,
            type: 1,
            name: "Tension",
            description: "Pressure intensifies.",
          },
          {
            position: 4,
            type: 1,
            name: "Strategy",
            description: "Withdrawal is deliberate.",
          },
          {
            position: 5,
            type: 0,
            name: "Stable Protection",
            description: "Strength is preserved.",
          },
          {
            position: 6,
            type: 0,
            name: "Too Late",
            description: "Delay harms.",
          },
        ],
      },
    },
  },
  {
    id: 34,
    number: 34,
    chineseName: "大壯",
    romanization: "Dà Zhuàng",
    elements: [3, 1],
    lines: [1, 1, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Velká síla",
        meaning:
          "Velká síla představuje vrchol energie a rozhodnosti. Síla je zřejmá a pohyb vpřed je téměř nevyhnutelný.\n\nPsychologicky jde o období vysoké vitality, odvahy a sebejistoty.\n\nSkutečná síla však spočívá v kontrole. Bez ní se mění v destrukci.",
        oracle: {
          interpretation: [
            "Jednej pevně, ale s mírou.",

            "Nepodléhej impulsu.",

            "Síla vyžaduje odpovědnost.",
          ],

          introspection: ["Kde je třeba použít sílu – a kde ji zadržet?"],
        },
        anatomy:
          "Velká síla vrcholí v odpovědnosti.\n\nBez kontroly se obrací proti sobě.\n\nMoudrost řídí energii.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První tlak",
            description: "Energie narůstá.",
          },
          {
            position: 2,
            type: 1,
            name: "Stabilní síla",
            description: "Pevnost roste.",
          },
          {
            position: 3,
            type: 1,
            name: "Nadměrná tvrdost",
            description: "Riziko přehnané reakce.",
          },
          {
            position: 4,
            type: 1,
            name: "Směřovaná energie",
            description: "Síla je řízená.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyvážené vedení",
            description: "Kontrola stabilizuje.",
          },
          {
            position: 6,
            type: 0,
            name: "Zneužití síly",
            description: "Překročení míry vede k obratu.",
          },
        ],
      },
      en: {
        name: "Great Power",
        meaning:
          "Great Power represents peak strength and determination.\n\nPsychologically, it marks vitality and confidence.\n\nTrue power lies in restraint. Without control, it turns destructive.",
        oracle: {
          interpretation: [
            "Act firmly, but with moderation.",

            "Avoid impulsiveness.",

            "Power requires responsibility.",
          ],

          introspection: [
            "Where should strength be used — and where restrained?",
          ],
        },
        anatomy:
          "Great Power culminates in responsibility.\n\nWithout restraint, it collapses.\n\nWisdom directs strength.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Rising Pressure",
            description: "Energy builds.",
          },
          {
            position: 2,
            type: 1,
            name: "Stable Strength",
            description: "Firmness grows.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Force",
            description: "Risk of overreaction.",
          },
          {
            position: 4,
            type: 1,
            name: "Directed Energy",
            description: "Strength is guided.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Leadership",
            description: "Control stabilizes.",
          },
          {
            position: 6,
            type: 0,
            name: "Misuse of Power",
            description: "Excess leads to reversal.",
          },
        ],
      },
    },
  },
  {
    id: 35,
    number: 35,
    chineseName: "晉",
    romanization: "Jìn",
    elements: [6, 2],
    lines: [0, 0, 0, 1, 0, 1],
    content: {
      cs: {
        name: "Pokrok",
        meaning:
          "Pokrok představuje růst a posun vpřed. Energie stoupá a přináší nové možnosti.\n\nPsychologicky jde o období optimismu a rozvoje.\n\nJe však nutné zůstat pokorný.",
        oracle: {
          interpretation: [
            "Využij příležitosti.",

            "Zůstaň vděčný.",

            "Postupuj krok za krokem.",
          ],

          introspection: ["Jak můžeš růst bez pýchy?"],
        },
        anatomy:
          "Pokrok přináší světlo.\n\nBez pokory se mění v pád.\n\nVytrvalost stabilizuje růst.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Skromný začátek",
            description: "Růst začíná pomalu.",
          },
          {
            position: 2,
            type: 0,
            name: "Podpora",
            description: "Pomoc přichází.",
          },
          {
            position: 3,
            type: 0,
            name: "Nejistota",
            description: "Nevzdávej se.",
          },
          {
            position: 4,
            type: 1,
            name: "Zviditelnění",
            description: "Úspěch je viditelný.",
          },
          {
            position: 5,
            type: 0,
            name: "Stabilní pokrok",
            description: "Růst je pevný.",
          },
          {
            position: 6,
            type: 1,
            name: "Pýcha",
            description: "Pozor na přehnané sebevědomí.",
          },
        ],
      },
      en: {
        name: "Progress",
        meaning:
          "Progress represents advancement and opportunity.\n\nPsychologically, it reflects growth and optimism.\n\nHumility sustains success.",
        oracle: {
          interpretation: [
            "Seize opportunity.",

            "Remain grateful.",

            "Advance steadily.",
          ],

          introspection: ["How can you grow without arrogance?"],
        },
        anatomy:
          "Progress brings light.\n\nWithout humility, it reverses.\n\nConsistency sustains growth.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Humble Start",
            description: "Growth begins slowly.",
          },
          {
            position: 2,
            type: 0,
            name: "Support",
            description: "Help arrives.",
          },
          {
            position: 3,
            type: 0,
            name: "Uncertainty",
            description: "Persevere.",
          },
          {
            position: 4,
            type: 1,
            name: "Visibility",
            description: "Success becomes evident.",
          },
          {
            position: 5,
            type: 0,
            name: "Stable Progress",
            description: "Advancement is steady.",
          },
          {
            position: 6,
            type: 1,
            name: "Arrogance",
            description: "Beware overconfidence.",
          },
        ],
      },
    },
  },
  {
    id: 36,
    number: 36,
    chineseName: "明夷",
    romanization: "Míng Yí",
    elements: [6, 2],
    lines: [1, 0, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Zatemnění světla",
        meaning:
          "Zatemnění světla znamená období, kdy je jas potlačen. Pravda není vítaná.\n\nPsychologicky jde o situaci, kdy je třeba chránit svou integritu.\n\nVnitřní světlo nesmí vyhasnout.",
        oracle: {
          interpretation: [
            "Chraň své hodnoty.",

            "Neodhaľuj vše předčasně.",

            "Udrž světlo uvnitř.",
          ],

          introspection: ["Kde je třeba zůstat nenápadný?"],
        },
        anatomy:
          "Světlo může být skryté.\n\nTrpělivost jej chrání.\n\nTemnota je dočasná.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Zraněné světlo",
            description: "Pravda je potlačena.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní ochrana",
            description: "Chraň si energii.",
          },
          {
            position: 3,
            type: 0,
            name: "Těžká situace",
            description: "Nevzdoruj otevřeně.",
          },
          {
            position: 4,
            type: 0,
            name: "Skrytá síla",
            description: "Světlo zůstává uvnitř.",
          },
          {
            position: 5,
            type: 0,
            name: "Tichá vytrvalost",
            description: "Trpělivost chrání.",
          },
          {
            position: 6,
            type: 1,
            name: "Úplné zatmění",
            description: "Temnota vrcholí před obratem.",
          },
        ],
      },
      en: {
        name: "Darkening of the Light",
        meaning:
          "Darkening of the Light represents a time when clarity is suppressed.\n\nPsychologically, it calls for protecting integrity.\n\nInner light must remain intact.",
        oracle: {
          interpretation: [
            "Protect your values.",

            "Do not reveal too much.",

            "Keep your light within.",
          ],

          introspection: ["Where must you remain discreet?"],
        },
        anatomy:
          "Light may be hidden.\n\nPatience preserves it.\n\nDarkness is temporary.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Wounded Light",
            description: "Truth is suppressed.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Protection",
            description: "Preserve energy.",
          },
          {
            position: 3,
            type: 0,
            name: "Difficult Circumstances",
            description: "Avoid open confrontation.",
          },
          {
            position: 4,
            type: 0,
            name: "Hidden Strength",
            description: "Light remains within.",
          },
          {
            position: 5,
            type: 0,
            name: "Quiet Perseverance",
            description: "Patience protects.",
          },
          {
            position: 6,
            type: 1,
            name: "Total Eclipse",
            description: "Darkness peaks before change.",
          },
        ],
      },
    },
  },
  {
    id: 37,
    number: 37,
    chineseName: "家人",
    romanization: "Jiā Rén",
    elements: [4, 6],
    lines: [1, 0, 1, 0, 1, 0],
    content: {
      cs: {
        name: "Rodina",
        meaning:
          "Rodina představuje strukturu vztahů a odpovědností. Každý má své místo.\n\nPsychologicky jde o vnitřní uspořádání hodnot.\n\nHarmonie vzniká jasnými rolemi.",
        oracle: {
          interpretation: [
            "Upevni vztahy.",

            "Respektuj hranice.",

            "Začni u sebe.",
          ],

          introspection: ["Jakou roli právě zastáváš?"],
        },
        anatomy:
          "Rodina funguje díky rovnováze.\n\nBez respektu se struktura rozpadá.\n\nJasné role přinášejí harmonii.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Základ domácnosti",
            description: "Stabilita začíná dole.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní péče",
            description: "Podpora je klíčová.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí",
            description: "Neshody vyžadují řešení.",
          },
          {
            position: 4,
            type: 0,
            name: "Vyváženost",
            description: "Role jsou jasné.",
          },
          {
            position: 5,
            type: 1,
            name: "Vedení",
            description: "Odpovědnost drží celek.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnaná kontrola",
            description: "Přílišná tvrdost narušuje.",
          },
        ],
      },
      en: {
        name: "The Family",
        meaning:
          "The Family represents structured relationships and responsibility.\n\nPsychologically, it reflects inner order.\n\nHarmony arises from clear roles.",
        oracle: {
          interpretation: [
            "Strengthen relationships.",

            "Respect boundaries.",

            "Begin with yourself.",
          ],

          introspection: ["What role are you fulfilling now?"],
        },
        anatomy:
          "Family thrives on balance.\n\nWithout respect, structure weakens.\n\nClear roles sustain harmony.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Foundation",
            description: "Stability starts below.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Care",
            description: "Support matters.",
          },
          {
            position: 3,
            type: 1,
            name: "Tension",
            description: "Conflicts require attention.",
          },
          {
            position: 4,
            type: 0,
            name: "Balance",
            description: "Roles are aligned.",
          },
          {
            position: 5,
            type: 1,
            name: "Leadership",
            description: "Responsibility holds unity.",
          },
          {
            position: 6,
            type: 0,
            name: "Overcontrol",
            description: "Excess authority disrupts.",
          },
        ],
      },
    },
  },
  {
    id: 38,
    number: 38,
    chineseName: "睽",
    romanization: "Kuí",
    elements: [8, 6],
    lines: [1, 0, 1, 1, 0, 1],
    content: {
      cs: {
        name: "Protiklad",
        meaning:
          "Protiklad symbolizuje rozdílnost a napětí mezi dvěma směry.\n\nPsychologicky jde o vnitřní rozpor.\n\nRozdílnost nemusí být nepřátelství.",
        oracle: {
          interpretation: [
            "Hledej porozumění.",

            "Nezesiluj konflikt.",

            "Rozdíly mohou obohatit.",
          ],

          introspection: ["Co je třeba přijmout jako jiné?"],
        },
        anatomy:
          "Protiklad může vést k růstu.\n\nBez komunikace se mění v konflikt.\n\nRespekt umožňuje soužití.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První rozdíl",
            description: "Odlišnost je patrná.",
          },
          {
            position: 2,
            type: 0,
            name: "Snaha o spojení",
            description: "Dialog je možný.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí roste",
            description: "Konflikt sílí.",
          },
          {
            position: 4,
            type: 1,
            name: "Hledání rovnováhy",
            description: "Most mezi póly.",
          },
          {
            position: 5,
            type: 0,
            name: "Porozumění",
            description: "Respekt zmírňuje rozdíl.",
          },
          {
            position: 6,
            type: 1,
            name: "Ostrý střet",
            description: "Tvrdohlavost škodí.",
          },
        ],
      },
      en: {
        name: "Opposition",
        meaning:
          "Opposition represents divergence and tension.\n\nPsychologically, it reflects inner conflict.\n\nDifference is not necessarily hostility.",
        oracle: {
          interpretation: [
            "Seek understanding.",

            "Do not escalate conflict.",

            "Differences can enrich.",
          ],

          introspection: ["What must be accepted as different?"],
        },
        anatomy:
          "Opposition can foster growth.\n\nWithout dialogue, it becomes conflict.\n\nRespect enables coexistence.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "First Difference",
            description: "Divergence appears.",
          },
          {
            position: 2,
            type: 0,
            name: "Attempt at Connection",
            description: "Dialogue is possible.",
          },
          {
            position: 3,
            type: 1,
            name: "Rising Tension",
            description: "Conflict intensifies.",
          },
          {
            position: 4,
            type: 1,
            name: "Balancing Bridge",
            description: "Linking opposites.",
          },
          {
            position: 5,
            type: 0,
            name: "Understanding",
            description: "Respect reduces tension.",
          },
          {
            position: 6,
            type: 1,
            name: "Sharp Clash",
            description: "Stubbornness harms.",
          },
        ],
      },
    },
  },
  {
    id: 39,
    number: 39,
    chineseName: "蹇",
    romanization: "Jiǎn",
    elements: [5, 7],
    lines: [0, 1, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Překážka",
        meaning:
          "Překážka symbolizuje zastavení cesty.\n\nPsychologicky jde o moment, kdy je třeba přehodnotit směr.\n\nObcházení může být moudřejší než přímý postup.",
        oracle: {
          interpretation: [
            "Zvaž jinou cestu.",

            "Nepřetlačuj odpor.",

            "Vyhledej pomoc.",
          ],

          introspection: ["Kde je třeba změnit strategii?"],
        },
        anatomy:
          "Překážka učí flexibilitě.\n\nObcházení může vést k úspěchu.\n\nTvrdohlavost situaci zhoršuje.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První odpor",
            description: "Cesta se komplikuje.",
          },
          {
            position: 2,
            type: 1,
            name: "Hledání podpory",
            description: "Spolupráce pomáhá.",
          },
          {
            position: 3,
            type: 0,
            name: "Zdržení",
            description: "Postup je obtížný.",
          },
          {
            position: 4,
            type: 0,
            name: "Změna směru",
            description: "Je třeba úprava.",
          },
          {
            position: 5,
            type: 0,
            name: "Vytrvalost",
            description: "Trpělivost chrání.",
          },
          {
            position: 6,
            type: 1,
            name: "Tvrdohlavost",
            description: "Nevhodný boj škodí.",
          },
        ],
      },
      en: {
        name: "Obstruction",
        meaning:
          "Obstruction represents blocked progress.\n\nPsychologically, it signals need for reassessment.\n\nDetours may be wiser than force.",
        oracle: {
          interpretation: [
            "Consider another path.",

            "Do not force resistance.",

            "Seek assistance.",
          ],

          introspection: ["Where must strategy shift?"],
        },
        anatomy:
          "Obstruction teaches flexibility.\n\nDetours lead forward.\n\nForce worsens difficulty.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Resistance",
            description: "Path complicates.",
          },
          {
            position: 2,
            type: 1,
            name: "Seeking Support",
            description: "Cooperation helps.",
          },
          {
            position: 3,
            type: 0,
            name: "Delay",
            description: "Progress slows.",
          },
          {
            position: 4,
            type: 0,
            name: "Change of Direction",
            description: "Adjustment needed.",
          },
          {
            position: 5,
            type: 0,
            name: "Perseverance",
            description: "Patience protects.",
          },
          {
            position: 6,
            type: 1,
            name: "Stubbornness",
            description: "Futile struggle harms.",
          },
        ],
      },
    },
  },
  {
    id: 40,
    number: 40,
    chineseName: "解",
    romanization: "Xiè",
    elements: [5, 3],
    lines: [0, 1, 0, 1, 0, 0],
    content: {
      cs: {
        name: "Uvolnění",
        meaning:
          "Uvolnění přichází po napětí. Problém se rozpouští.\n\nPsychologicky jde o pocit úlevy.\n\nJe čas jednat lehce.",
        oracle: {
          interpretation: [
            "Nech věci odejít.",

            "Ulev si.",

            "Využij nové možnosti.",
          ],

          introspection: ["Co můžeš konečně pustit?"],
        },
        anatomy:
          "Uvolnění obnovuje energii.\n\nJe čas pohybu.\n\nMinulé napětí se rozpouští.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První úleva",
            description: "Napětí klesá.",
          },
          {
            position: 2,
            type: 1,
            name: "Rozhodnutí",
            description: "Jednej rychle.",
          },
          {
            position: 3,
            type: 0,
            name: "Pochybnost",
            description: "Nevracej se zpět.",
          },
          {
            position: 4,
            type: 1,
            name: "Odstranění překážky",
            description: "Situace se čistí.",
          },
          {
            position: 5,
            type: 0,
            name: "Stabilní klid",
            description: "Rovnováha je obnovena.",
          },
          {
            position: 6,
            type: 0,
            name: "Zbytečné otálení",
            description: "Neváhej příliš.",
          },
        ],
      },
      en: {
        name: "Deliverance",
        meaning:
          "Deliverance follows tension. The problem dissolves.\n\nPsychologically, it reflects relief.\n\nLight action becomes possible.",
        oracle: {
          interpretation: [
            "Let things go.",

            "Release tension.",

            "Use new freedom wisely.",
          ],

          introspection: ["What can you finally release?"],
        },
        anatomy:
          "Deliverance restores energy.\n\nMovement resumes.\n\nPast tension dissolves.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Relief",
            description: "Tension decreases.",
          },
          {
            position: 2,
            type: 1,
            name: "Decision",
            description: "Act swiftly.",
          },
          {
            position: 3,
            type: 0,
            name: "Doubt",
            description: "Do not regress.",
          },
          {
            position: 4,
            type: 1,
            name: "Obstacle Removed",
            description: "Clarity returns.",
          },
          {
            position: 5,
            type: 0,
            name: "Stable Calm",
            description: "Balance restored.",
          },
          {
            position: 6,
            type: 0,
            name: "Unnecessary Delay",
            description: "Do not hesitate.",
          },
        ],
      },
    },
  },
  {
    id: 41,
    number: 41,
    chineseName: "損",
    romanization: "Sǔn",
    elements: [7, 8],
    lines: [1, 1, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Úbytek",
        meaning:
          "Úbytek znamená vědomé zmenšení. Odevzdání části energie přináší dlouhodobý zisk.\n\nPsychologicky jde o schopnost zjednodušit.\n\nMéně může být více.",
        oracle: {
          interpretation: [
            "Zjednoduš.",

            "Obětuj přebytečné.",

            "Posil to podstatné.",
          ],

          introspection: ["Co je nyní zbytečné?"],
        },
        anatomy:
          "Úbytek vede k očištění.\n\nOběť posiluje podstatu.\n\nRovnováha je klíčem.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První omezení",
            description: "Redukce začíná.",
          },
          {
            position: 2,
            type: 1,
            name: "Vědomé zmenšení",
            description: "Oběť má smysl.",
          },
          {
            position: 3,
            type: 0,
            name: "Nejistota",
            description: "Pochybnost o ztrátě.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilizace",
            description: "Zjednodušení pomáhá.",
          },
          {
            position: 5,
            type: 0,
            name: "Vnitřní zisk",
            description: "Hodnota roste.",
          },
          {
            position: 6,
            type: 1,
            name: "Přílišná ztráta",
            description: "Nerovnováha škodí.",
          },
        ],
      },
      en: {
        name: "Decrease",
        meaning:
          "Decrease signifies conscious reduction. Giving up something strengthens what remains.\n\nPsychologically, it reflects simplification.\n\nLess can mean more.",
        oracle: {
          interpretation: [
            "Simplify.",

            "Sacrifice excess.",

            "Strengthen essentials.",
          ],

          introspection: ["What is unnecessary now?"],
        },
        anatomy:
          "Decrease purifies.\n\nSacrifice strengthens essence.\n\nBalance maintains growth.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Limitation",
            description: "Reduction begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Conscious Sacrifice",
            description: "Loss has purpose.",
          },
          {
            position: 3,
            type: 0,
            name: "Doubt",
            description: "Questioning the loss.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilization",
            description: "Simplification helps.",
          },
          {
            position: 5,
            type: 0,
            name: "Inner Gain",
            description: "Value increases.",
          },
          {
            position: 6,
            type: 1,
            name: "Excessive Loss",
            description: "Imbalance harms.",
          },
        ],
      },
    },
  },
  {
    id: 42,
    number: 42,
    chineseName: "益",
    romanization: "Yì",
    elements: [4, 3],
    lines: [1, 0, 0, 0, 1, 1],
    content: {
      cs: {
        name: "Přínos",
        meaning:
          "Přínos znamená růst skrze sdílení. Dávání přináší návrat.\n\nPsychologicky jde o otevřenost a podporu.\n\nRůst je kolektivní.",
        oracle: {
          interpretation: ["Podpoř druhé.", "Buď štědrý.", "Růst sdílej."],

          introspection: ["Kde můžeš být přínosem?"],
        },
        anatomy:
          "Přínos přináší expanzi.\n\nSdílení posiluje vztahy.\n\nMíra chrání rovnováhu.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První podpora",
            description: "Růst začíná.",
          },
          {
            position: 2,
            type: 0,
            name: "Spolupráce",
            description: "Sdílení posiluje.",
          },
          {
            position: 3,
            type: 0,
            name: "Nejistota",
            description: "Důvěra je testována.",
          },
          {
            position: 4,
            type: 0,
            name: "Rozšíření",
            description: "Růst se zrychluje.",
          },
          {
            position: 5,
            type: 1,
            name: "Velkorysost",
            description: "Dávání vrcholí.",
          },
          {
            position: 6,
            type: 1,
            name: "Přehnanost",
            description: "Nadměrné rozdávání škodí.",
          },
        ],
      },
      en: {
        name: "Increase",
        meaning:
          "Increase signifies growth through generosity.\n\nPsychologically, it reflects openness and support.\n\nGrowth benefits all.",
        oracle: {
          interpretation: ["Support others.", "Be generous.", "Share growth."],

          introspection: ["Where can you contribute?"],
        },
        anatomy:
          "Increase brings expansion.\n\nSharing builds connection.\n\nModeration preserves balance.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Support",
            description: "Growth begins.",
          },
          {
            position: 2,
            type: 0,
            name: "Cooperation",
            description: "Sharing strengthens.",
          },
          {
            position: 3,
            type: 0,
            name: "Uncertainty",
            description: "Trust is tested.",
          },
          {
            position: 4,
            type: 0,
            name: "Expansion",
            description: "Growth accelerates.",
          },
          {
            position: 5,
            type: 1,
            name: "Generosity",
            description: "Giving peaks.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess",
            description: "Overgiving harms.",
          },
        ],
      },
    },
  },
  {
    id: 43,
    number: 43,
    chineseName: "夬",
    romanization: "Guài",
    elements: [1, 8],
    lines: [1, 1, 1, 1, 1, 0],
    content: {
      cs: {
        name: "Rozhodnost",
        meaning:
          "Rozhodnost znamená jasné vyjádření pravdy. Je čas říci věci otevřeně.\n\nPsychologicky jde o průlom.\n\nOdvaha musí být spojena s odpovědností.",
        oracle: {
          interpretation: [
            "Promluv jasně.",

            "Jednej rozhodně.",

            "Nepodléhej hněvu.",
          ],

          introspection: ["Kde je třeba stanovit hranici?"],
        },
        anatomy:
          "Rozhodnost přináší průlom.\n\nBez míry vede ke konfliktu.\n\nOdpovědnost stabilizuje změnu.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Vzrůstající tlak",
            description: "Napětí roste.",
          },
          {
            position: 2,
            type: 1,
            name: "Síla se spojuje",
            description: "Podpora přichází.",
          },
          {
            position: 3,
            type: 1,
            name: "Odvaha",
            description: "Pravda je vyslovena.",
          },
          {
            position: 4,
            type: 1,
            name: "Průlom",
            description: "Zlomový okamžik.",
          },
          {
            position: 5,
            type: 1,
            name: "Vrchol rozhodnutí",
            description: "Akce je nutná.",
          },
          {
            position: 6,
            type: 0,
            name: "Opatrnost",
            description: "Pozor na přehnanost.",
          },
        ],
      },
      en: {
        name: "Breakthrough",
        meaning:
          "Breakthrough signifies decisive expression.\n\nPsychologically, it reflects confrontation and clarity.\n\nCourage must be balanced with responsibility.",
        oracle: {
          interpretation: ["Speak clearly.", "Act decisively.", "Avoid anger."],

          introspection: ["Where must a boundary be set?"],
        },
        anatomy:
          "Breakthrough clears the way.\n\nWithout moderation, conflict arises.\n\nResponsibility stabilizes change.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Rising Pressure",
            description: "Tension builds.",
          },
          {
            position: 2,
            type: 1,
            name: "Strength Unites",
            description: "Support gathers.",
          },
          {
            position: 3,
            type: 1,
            name: "Courage",
            description: "Truth is voiced.",
          },
          {
            position: 4,
            type: 1,
            name: "Breakthrough",
            description: "Turning point.",
          },
          {
            position: 5,
            type: 1,
            name: "Decisive Peak",
            description: "Action required.",
          },
          {
            position: 6,
            type: 0,
            name: "Caution",
            description: "Beware excess.",
          },
        ],
      },
    },
  },
  {
    id: 44,
    number: 44,
    chineseName: "姤",
    romanization: "Gòu",
    elements: [4, 1],
    lines: [1, 1, 1, 1, 1, 0],
    content: {
      cs: {
        name: "Setkání",
        meaning:
          "Setkání představuje náhlý vstup silného vlivu do situace. Něco nového přichází rychle a intenzivně.\n\nPsychologicky jde o setkání s impulsem nebo osobou, která narušuje rovnováhu.\n\nJe třeba rozlišit mezi inspirací a pokušením.",
        oracle: {
          interpretation: [
            "Buď pozorný.",

            "Nepropadej okamžitému nadšení.",

            "Zvaž důsledky.",
          ],

          introspection: ["Co do tvého života právě vstupuje?"],
        },
        anatomy:
          "Setkání může inspirovat.\n\nBez uvážení destabilizuje.\n\nVědomí chrání směr.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První impuls",
            description: "Nová energie vstupuje.",
          },
          {
            position: 2,
            type: 1,
            name: "Reakce",
            description: "Situace se mění.",
          },
          {
            position: 3,
            type: 1,
            name: "Přitažlivost",
            description: "Síla roste.",
          },
          {
            position: 4,
            type: 1,
            name: "Napětí",
            description: "Rovnováha je narušena.",
          },
          {
            position: 5,
            type: 1,
            name: "Zralé rozhodnutí",
            description: "Vědomá volba je nutná.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnané přijetí",
            description: "Neuváženost škodí.",
          },
        ],
      },
      en: {
        name: "Coming to Meet",
        meaning:
          "Coming to Meet signifies the sudden arrival of a strong influence.\n\nPsychologically, it reflects encountering a disruptive impulse or person.\n\nDiscernment is essential.",
        oracle: {
          interpretation: [
            "Stay attentive.",

            "Do not rush into enthusiasm.",

            "Consider consequences.",
          ],

          introspection: ["What is entering your life now?"],
        },
        anatomy:
          "Meeting can inspire.\n\nWithout awareness, it destabilizes.\n\nDiscernment preserves direction.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Impulse",
            description: "New energy appears.",
          },
          {
            position: 2,
            type: 1,
            name: "Reaction",
            description: "Circumstances shift.",
          },
          {
            position: 3,
            type: 1,
            name: "Attraction",
            description: "Influence intensifies.",
          },
          {
            position: 4,
            type: 1,
            name: "Tension",
            description: "Balance is disturbed.",
          },
          {
            position: 5,
            type: 1,
            name: "Conscious Choice",
            description: "Mature decision required.",
          },
          {
            position: 6,
            type: 0,
            name: "Excess Acceptance",
            description: "Carelessness harms.",
          },
        ],
      },
    },
  },
  {
    id: 45,
    number: 45,
    chineseName: "萃",
    romanization: "Cuì",
    elements: [8, 2],
    lines: [0, 0, 0, 1, 1, 0],
    content: {
      cs: {
        name: "Shromáždění",
        meaning:
          "Shromáždění znamená spojení lidí nebo energií kolem společného cíle.\n\nPsychologicky jde o pocit sounáležitosti.\n\nJednota přináší sílu.",
        oracle: {
          interpretation: [
            "Spoj se s ostatními.",

            "Sdílej záměr.",

            "Buduj důvěru.",
          ],

          introspection: ["Kde je potřeba kolektivní síla?"],
        },
        anatomy:
          "Jednota přináší růst.\n\nBez důvěry se rozpadá.\n\nSpolečný cíl stabilizuje.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První spojení",
            description: "Lidé se scházejí.",
          },
          {
            position: 2,
            type: 0,
            name: "Vznik důvěry",
            description: "Jednota roste.",
          },
          {
            position: 3,
            type: 0,
            name: "Nejistota",
            description: "Spolupráce je testována.",
          },
          {
            position: 4,
            type: 1,
            name: "Organizace",
            description: "Struktura vzniká.",
          },
          {
            position: 5,
            type: 1,
            name: "Silné centrum",
            description: "Vedení sjednocuje.",
          },
          {
            position: 6,
            type: 0,
            name: "Rozpad",
            description: "Bez směru se celek rozpadá.",
          },
        ],
      },
      en: {
        name: "Gathering Together",
        meaning:
          "Gathering Together represents uniting around a shared purpose.\n\nPsychologically, it reflects belonging.\n\nUnity creates strength.",
        oracle: {
          interpretation: [
            "Unite with others.",

            "Share intention.",

            "Build trust.",
          ],

          introspection: ["Where is collective strength needed?"],
        },
        anatomy:
          "Unity strengthens growth.\n\nWithout trust, it collapses.\n\nShared purpose sustains cohesion.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Gathering",
            description: "People assemble.",
          },
          {
            position: 2,
            type: 0,
            name: "Trust Forms",
            description: "Unity grows.",
          },
          {
            position: 3,
            type: 0,
            name: "Testing Cooperation",
            description: "Collaboration challenged.",
          },
          {
            position: 4,
            type: 1,
            name: "Organization",
            description: "Structure develops.",
          },
          {
            position: 5,
            type: 1,
            name: "Strong Center",
            description: "Leadership unifies.",
          },
          {
            position: 6,
            type: 0,
            name: "Disintegration",
            description: "Without direction, it dissolves.",
          },
        ],
      },
    },
  },
  {
    id: 46,
    number: 46,
    chineseName: "升",
    romanization: "Shēng",
    elements: [4, 2],
    lines: [0, 1, 1, 0, 0, 0],
    content: {
      cs: {
        name: "Vzestup",
        meaning:
          "Vzestup představuje postupný růst skrze úsilí.\n\nPsychologicky jde o vytrvalé budování.\n\nKrok za krokem se dosahuje cíle.",
        oracle: {
          interpretation: [
            "Postupuj trpělivě.",

            "Nevynechávej kroky.",

            "Vytrvalost přináší výsledek.",
          ],

          introspection: ["Jaký je tvůj další malý krok?"],
        },
        anatomy:
          "Vzestup je postupný.\n\nVytrvalost buduje výšku.\n\nTrpělivost chrání stabilitu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Skromný začátek",
            description: "Růst začíná nenápadně.",
          },
          {
            position: 2,
            type: 1,
            name: "Podpora",
            description: "Pomoc zvyšuje sílu.",
          },
          {
            position: 3,
            type: 1,
            name: "Vytrvalost",
            description: "Stálé úsilí.",
          },
          {
            position: 4,
            type: 0,
            name: "Postupné zlepšení",
            description: "Výsledky se objevují.",
          },
          {
            position: 5,
            type: 0,
            name: "Zralý růst",
            description: "Stabilní vzestup.",
          },
          {
            position: 6,
            type: 0,
            name: "Unáhlenost",
            description: "Příliš rychlý postup škodí.",
          },
        ],
      },
      en: {
        name: "Pushing Upward",
        meaning:
          "Pushing Upward signifies gradual progress through effort.\n\nPsychologically, it reflects steady development.\n\nStep by step brings achievement.",
        oracle: {
          interpretation: [
            "Advance patiently.",

            "Do not skip stages.",

            "Persistence yields results.",
          ],

          introspection: ["What is your next small step?"],
        },
        anatomy:
          "Ascent is gradual.\n\nPerseverance builds height.\n\nPatience ensures stability.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Humble Beginning",
            description: "Growth starts quietly.",
          },
          {
            position: 2,
            type: 1,
            name: "Support",
            description: "Assistance strengthens.",
          },
          {
            position: 3,
            type: 1,
            name: "Perseverance",
            description: "Consistent effort.",
          },
          {
            position: 4,
            type: 0,
            name: "Gradual Improvement",
            description: "Results appear.",
          },
          {
            position: 5,
            type: 0,
            name: "Mature Growth",
            description: "Stable ascent.",
          },
          {
            position: 6,
            type: 0,
            name: "Haste",
            description: "Rushing harms progress.",
          },
        ],
      },
    },
  },
  {
    id: 47,
    number: 47,
    chineseName: "困",
    romanization: "Kùn",
    elements: [8, 5],
    lines: [0, 1, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Tíseň",
        meaning:
          "Tíseň označuje období omezení a vnitřního tlaku. Vnější okolnosti svazují.\n\nPsychologicky jde o pocit vyčerpání nebo izolace.\n\nSíla se rodí zevnitř.",
        oracle: {
          interpretation: [
            "Nevzdávej se.",

            "Hledej vnitřní oporu.",

            "Nevyčerpávej se bojem.",
          ],

          introspection: ["Kde čerpáš sílu?"],
        },
        anatomy:
          "Tíseň učí vytrvalosti.\n\nVnitřní síla překoná omezení.\n\nTrpělivost přináší uvolnění.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První omezení",
            description: "Cítíš tlak.",
          },
          {
            position: 2,
            type: 1,
            name: "Zkouška trpělivosti",
            description: "Vytrvalost je testována.",
          },
          {
            position: 3,
            type: 1,
            name: "Izolace",
            description: "Osamělost sílí.",
          },
          {
            position: 4,
            type: 1,
            name: "Hledání řešení",
            description: "Cesta se hledá obtížně.",
          },
          {
            position: 5,
            type: 0,
            name: "Vnitřní pevnost",
            description: "Síla roste uvnitř.",
          },
          {
            position: 6,
            type: 0,
            name: "Vyčerpání",
            description: "Je nutný odpočinek.",
          },
        ],
      },
      en: {
        name: "Oppression",
        meaning:
          "Oppression signifies constraint and inner pressure.\n\nPsychologically, it reflects exhaustion or isolation.\n\nStrength must come from within.",
        oracle: {
          interpretation: [
            "Do not give up.",

            "Seek inner support.",

            "Avoid futile struggle.",
          ],

          introspection: ["Where do you draw strength?"],
        },
        anatomy:
          "Oppression builds endurance.\n\nInner strength overcomes limits.\n\nPatience leads to release.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Constraint",
            description: "Pressure is felt.",
          },
          {
            position: 2,
            type: 1,
            name: "Patience Tested",
            description: "Endurance challenged.",
          },
          {
            position: 3,
            type: 1,
            name: "Isolation",
            description: "Loneliness intensifies.",
          },
          {
            position: 4,
            type: 1,
            name: "Seeking Resolution",
            description: "Way forward unclear.",
          },
          {
            position: 5,
            type: 0,
            name: "Inner Strength",
            description: "Resilience grows.",
          },
          {
            position: 6,
            type: 0,
            name: "Exhaustion",
            description: "Rest required.",
          },
        ],
      },
    },
  },
  {
    id: 48,
    number: 48,
    chineseName: "井",
    romanization: "Jǐng",
    elements: [5, 4],
    lines: [0, 1, 0, 1, 1, 0],
    content: {
      cs: {
        name: "Studna",
        meaning:
          "Studna symbolizuje zdroj, který zůstává stejný bez ohledu na okolnosti.\n\nPsychologicky jde o hluboké hodnoty.\n\nZdroje je třeba udržovat.",
        oracle: {
          interpretation: [
            "Pečuj o své zdroje.",

            "Nezanedbávej základ.",

            "Čerpej vědomě.",
          ],

          introspection: ["Co je tvým trvalým zdrojem?"],
        },
        anatomy:
          "Studna je trvalá.\n\nÚdržba je nutná.\n\nZanedbání vede k vyčerpání.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Zanedbaný zdroj",
            description: "Studna není využita.",
          },
          {
            position: 2,
            type: 1,
            name: "Čištění",
            description: "Obnova začíná.",
          },
          {
            position: 3,
            type: 0,
            name: "Nedostatečné čerpání",
            description: "Potenciál zůstává skrytý.",
          },
          {
            position: 4,
            type: 1,
            name: "Obnova",
            description: "Zdroje se zlepšují.",
          },
          {
            position: 5,
            type: 1,
            name: "Plná voda",
            description: "Zdroj je připraven.",
          },
          {
            position: 6,
            type: 0,
            name: "Nečinnost",
            description: "Nevyužitý potenciál.",
          },
        ],
      },
      en: {
        name: "The Well",
        meaning:
          "The Well represents a constant source.\n\nPsychologically, it reflects deep values.\n\nSources require maintenance.",
        oracle: {
          interpretation: [
            "Care for your resources.",

            "Maintain foundations.",

            "Draw consciously.",
          ],

          introspection: ["What is your lasting source?"],
        },
        anatomy:
          "The Well remains constant.\n\nMaintenance preserves value.\n\nNeglect leads to decline.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Neglected Source",
            description: "The well is unused.",
          },
          {
            position: 2,
            type: 1,
            name: "Cleaning",
            description: "Renewal begins.",
          },
          {
            position: 3,
            type: 0,
            name: "Underused Potential",
            description: "Resources untapped.",
          },
          {
            position: 4,
            type: 1,
            name: "Restoration",
            description: "Source improves.",
          },
          {
            position: 5,
            type: 1,
            name: "Full Water",
            description: "Abundance available.",
          },
          {
            position: 6,
            type: 0,
            name: "Inaction",
            description: "Potential wasted.",
          },
        ],
      },
    },
  },
  {
    id: 49,
    number: 49,
    chineseName: "革",
    romanization: "Gé",
    elements: [6, 8],
    lines: [1, 0, 1, 1, 1, 0],
    content: {
      cs: {
        name: "Proměna",
        meaning:
          "Proměna znamená zásadní změnu. Staré struktury již nefungují.\n\nPsychologicky jde o transformaci identity.\n\nZměna musí být načasovaná.",
        oracle: {
          interpretation: [
            "Jednej ve správný čas.",

            "Nepospíchej.",

            "Buď transparentní.",
          ],

          introspection: ["Co je připraveno ke změně?"],
        },
        anatomy:
          "Proměna obnovuje energii.\n\nBez načasování selže.\n\nVědomí stabilizuje přerod.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Nespokojenost",
            description: "Tlak ke změně.",
          },
          {
            position: 2,
            type: 0,
            name: "Příprava",
            description: "Záměr se formuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Odpor",
            description: "Změna naráží na překážky.",
          },
          {
            position: 4,
            type: 1,
            name: "Průlom",
            description: "Staré se rozpouští.",
          },
          {
            position: 5,
            type: 1,
            name: "Jasnost",
            description: "Změna je přijata.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnanost",
            description: "Příliš radikální krok škodí.",
          },
        ],
      },
      en: {
        name: "Revolution",
        meaning:
          "Revolution signifies fundamental change.\n\nPsychologically, it reflects transformation.\n\nTiming determines success.",
        oracle: {
          interpretation: [
            "Act at the right moment.",

            "Do not rush.",

            "Be transparent.",
          ],

          introspection: ["What is ready to change?"],
        },
        anatomy:
          "Revolution renews energy.\n\nWithout timing, it fails.\n\nAwareness stabilizes transition.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Dissatisfaction",
            description: "Pressure for change.",
          },
          {
            position: 2,
            type: 0,
            name: "Preparation",
            description: "Intention forms.",
          },
          {
            position: 3,
            type: 1,
            name: "Resistance",
            description: "Obstacles arise.",
          },
          {
            position: 4,
            type: 1,
            name: "Breakthrough",
            description: "Old dissolves.",
          },
          {
            position: 5,
            type: 1,
            name: "Clarity",
            description: "Change accepted.",
          },
          {
            position: 6,
            type: 0,
            name: "Excess Radicalism",
            description: "Overreaction harms.",
          },
        ],
      },
    },
  },
  {
    id: 50,
    number: 50,
    chineseName: "鼎",
    romanization: "Dǐng",
    elements: [4, 6],
    lines: [1, 0, 1, 0, 1, 1],
    content: {
      cs: {
        name: "Kotlík",
        meaning:
          "Kotlík symbolizuje kultivaci a transformaci skrze péči.\n\nPsychologicky jde o proces zrání.\n\nSprávné prostředí umožňuje růst.",
        oracle: {
          interpretation: [
            "Pečuj o proces.",

            "Vytvářej hodnotu.",

            "Buď trpělivý.",
          ],

          introspection: ["Co je třeba kultivovat?"],
        },
        anatomy:
          "Kotlík proměňuje surové v hodnotné.\n\nProces vyžaduje péči.\n\nTrpělivost přináší kvalitu.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Základ",
            description: "Stabilita je nutná.",
          },
          {
            position: 2,
            type: 0,
            name: "Naplnění",
            description: "Obsah se formuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Narušení",
            description: "Proces je ohrožen.",
          },
          {
            position: 4,
            type: 0,
            name: "Úprava",
            description: "Je třeba ladění.",
          },
          {
            position: 5,
            type: 1,
            name: "Zralost",
            description: "Výsledek je kvalitní.",
          },
          {
            position: 6,
            type: 1,
            name: "Dokončení",
            description: "Proces je završován.",
          },
        ],
      },
      en: {
        name: "The Cauldron",
        meaning:
          "The Cauldron represents cultivation and transformation.\n\nPsychologically, it reflects maturation.\n\nProper care enables refinement.",
        oracle: {
          interpretation: [
            "Nurture the process.",

            "Create value.",

            "Be patient.",
          ],

          introspection: ["What needs cultivation?"],
        },
        anatomy:
          "The Cauldron refines raw material.\n\nProcess demands care.\n\nPatience produces quality.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Foundation",
            description: "Stability required.",
          },
          {
            position: 2,
            type: 0,
            name: "Filling",
            description: "Content forms.",
          },
          {
            position: 3,
            type: 1,
            name: "Disruption",
            description: "Process challenged.",
          },
          {
            position: 4,
            type: 0,
            name: "Adjustment",
            description: "Refinement needed.",
          },
          {
            position: 5,
            type: 1,
            name: "Maturity",
            description: "Quality achieved.",
          },
          {
            position: 6,
            type: 1,
            name: "Completion",
            description: "Transformation fulfilled.",
          },
        ],
      },
    },
  },
  {
    id: 51,
    number: 51,
    chineseName: "震",
    romanization: "Zhèn",
    elements: [3, 3],
    lines: [1, 0, 0, 1, 0, 0],
    content: {
      cs: {
        name: "Otřes",
        meaning:
          "Otřes představuje náhlý impulz, který probouzí. Přichází bez varování a narušuje jistoty.\n\nPsychologicky jde o šok nebo náhlé uvědomění.\n\nOtřes může být děsivý, ale přináší probuzení.",
        oracle: {
          interpretation: [
            "Zachovej klid.",

            "Nereaguj unáhleně.",

            "Vnímej, co tě situace učí.",
          ],

          introspection: ["Co tě právě probouzí?"],
        },
        anatomy:
          "Otřes probouzí vědomí.\n\nPrvní reakce je strach.\n\nKlid přináší porozumění.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První šok",
            description: "Impuls přichází náhle.",
          },
          {
            position: 2,
            type: 0,
            name: "Reakce strachu",
            description: "Emoce jsou silné.",
          },
          {
            position: 3,
            type: 0,
            name: "Ztráta rovnováhy",
            description: "Nejistota roste.",
          },
          {
            position: 4,
            type: 1,
            name: "Stabilizace",
            description: "Klid se vrací.",
          },
          {
            position: 5,
            type: 0,
            name: "Poučení",
            description: "Zkušenost přináší moudrost.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnaná reakce",
            description: "Strach může přetrvat.",
          },
        ],
      },
      en: {
        name: "Shock",
        meaning:
          "Shock represents sudden awakening. It disrupts certainty.\n\nPsychologically, it reflects sudden insight or crisis.\n\nShock can frighten but also enlighten.",
        oracle: {
          interpretation: [
            "Stay calm.",

            "Avoid impulsive reaction.",

            "Learn from the moment.",
          ],

          introspection: ["What is awakening within you?"],
        },
        anatomy:
          "Shock awakens awareness.\n\nFear subsides through calm.\n\nInsight emerges afterward.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Shock",
            description: "Impulse strikes suddenly.",
          },
          {
            position: 2,
            type: 0,
            name: "Fear Response",
            description: "Emotion surges.",
          },
          {
            position: 3,
            type: 0,
            name: "Imbalance",
            description: "Stability shaken.",
          },
          {
            position: 4,
            type: 1,
            name: "Regaining Balance",
            description: "Calm returns.",
          },
          {
            position: 5,
            type: 0,
            name: "Insight",
            description: "Wisdom develops.",
          },
          {
            position: 6,
            type: 0,
            name: "Lingering Fear",
            description: "Reaction prolonged.",
          },
        ],
      },
    },
  },
  {
    id: 52,
    number: 52,
    chineseName: "艮",
    romanization: "Gèn",
    elements: [7, 7],
    lines: [0, 0, 1, 0, 0, 1],
    content: {
      cs: {
        name: "Zastavení",
        meaning:
          "Zastavení symbolizuje klid a schopnost přerušit pohyb.\n\nPsychologicky jde o meditativní zastavení.\n\nZastavit se znamená obnovit rovnováhu.",
        oracle: {
          interpretation: ["Zpomal.", "Nevyvíjej tlak.", "Najdi ticho."],

          introspection: ["Kde je třeba přestat?"],
        },
        anatomy:
          "Zastavení přináší jasnost.\n\nKlid obnovuje energii.\n\nPřílišná strnulost brzdí růst.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První zastavení",
            description: "Pohyb se zpomaluje.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní klid",
            description: "Mysl se tiší.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí těla",
            description: "Je třeba uvolnění.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilita",
            description: "Klid se prohlubuje.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyrovnanost",
            description: "Vědomí je pevné.",
          },
          {
            position: 6,
            type: 1,
            name: "Tvrdohlavost",
            description: "Přílišná nehybnost škodí.",
          },
        ],
      },
      en: {
        name: "Stillness",
        meaning:
          "Stillness signifies pause and restraint.\n\nPsychologically, it reflects meditation.\n\nStopping restores balance.",
        oracle: {
          interpretation: ["Slow down.", "Do not force.", "Seek silence."],

          introspection: ["Where must you pause?"],
        },
        anatomy:
          "Stillness clarifies.\n\nCalm renews energy.\n\nRigidity blocks growth.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Pause",
            description: "Movement slows.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Calm",
            description: "Mind quiets.",
          },
          {
            position: 3,
            type: 1,
            name: "Tension",
            description: "Release needed.",
          },
          {
            position: 4,
            type: 0,
            name: "Stability",
            description: "Calm deepens.",
          },
          {
            position: 5,
            type: 0,
            name: "Balance",
            description: "Awareness firm.",
          },
          {
            position: 6,
            type: 1,
            name: "Rigidity",
            description: "Excess stillness harms.",
          },
        ],
      },
    },
  },
  {
    id: 53,
    number: 53,
    chineseName: "漸",
    romanization: "Jiàn",
    elements: [4, 7],
    lines: [0, 0, 1, 0, 1, 1],
    content: {
      cs: {
        name: "Postupné působení",
        meaning:
          "Postupné působení symbolizuje pomalý, stabilní vývoj.\n\nPsychologicky jde o zrání vztahů nebo projektů.\n\nTrvalé změny jsou pozvolné.",
        oracle: {
          interpretation: [
            "Buď trpělivý.",

            "Nevynechávej kroky.",

            "Buduj postupně.",
          ],

          introspection: ["Kde potřebuješ více času?"],
        },
        anatomy:
          "Postupnost přináší stabilitu.\n\nTrpělivost buduje pevnost.\n\nUnáhlenost narušuje proces.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Začátek cesty",
            description: "Proces začíná pomalu.",
          },
          {
            position: 2,
            type: 0,
            name: "Růst důvěry",
            description: "Stabilita sílí.",
          },
          {
            position: 3,
            type: 1,
            name: "Překážka",
            description: "Tempo je testováno.",
          },
          {
            position: 4,
            type: 0,
            name: "Pokračování",
            description: "Vytrvalost přináší pokrok.",
          },
          {
            position: 5,
            type: 1,
            name: "Zralost",
            description: "Výsledek je blízko.",
          },
          {
            position: 6,
            type: 1,
            name: "Předčasnost",
            description: "Unáhlenost škodí.",
          },
        ],
      },
      en: {
        name: "Gradual Progress",
        meaning:
          "Gradual Progress represents steady development.\n\nPsychologically, it reflects maturation.\n\nLasting change unfolds slowly.",
        oracle: {
          interpretation: [
            "Be patient.",

            "Do not skip steps.",

            "Build steadily.",
          ],

          introspection: ["Where is time required?"],
        },
        anatomy:
          "Gradual growth ensures stability.\n\nPatience builds strength.\n\nHaste disrupts progress.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Beginning the Path",
            description: "Process starts slowly.",
          },
          {
            position: 2,
            type: 0,
            name: "Growing Trust",
            description: "Stability increases.",
          },
          {
            position: 3,
            type: 1,
            name: "Obstacle",
            description: "Pace tested.",
          },
          {
            position: 4,
            type: 0,
            name: "Continuation",
            description: "Perseverance advances.",
          },
          {
            position: 5,
            type: 1,
            name: "Maturity",
            description: "Outcome near.",
          },
          {
            position: 6,
            type: 1,
            name: "Premature Action",
            description: "Haste harms.",
          },
        ],
      },
    },
  },
  {
    id: 54,
    number: 54,
    chineseName: "歸妹",
    romanization: "Guī Mèi",
    elements: [3, 8],
    lines: [0, 0, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Vdávání dívky",
        meaning:
          "Tento hexagram symbolizuje vstup do vztahu nebo situace, kde nejsou podmínky plně vyrovnané.\n\nPsychologicky poukazuje na roli, kterou přijímáme bez plné kontroly.\n\nJe důležité znát své hranice.",
        oracle: {
          interpretation: [
            "Nepodceňuj svou hodnotu.",

            "Jednej s důstojností.",

            "Nevstupuj do nerovnováhy bez vědomí.",
          ],

          introspection: ["Kde přijímáš méně, než si zasloužíš?"],
        },
        anatomy:
          "Nerovnováha vyžaduje vědomí.\n\nSebehodnota chrání integritu.\n\nZralost přináší rovnost.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Nejistý začátek",
            description: "Postavení není pevné.",
          },
          {
            position: 2,
            type: 0,
            name: "Přijetí role",
            description: "Role je omezená.",
          },
          {
            position: 3,
            type: 1,
            name: "Vnitřní napětí",
            description: "Nerovnováha sílí.",
          },
          {
            position: 4,
            type: 1,
            name: "Zkouška trpělivosti",
            description: "Situace vyžaduje klid.",
          },
          {
            position: 5,
            type: 0,
            name: "Možnost růstu",
            description: "Vztah se může stabilizovat.",
          },
          {
            position: 6,
            type: 0,
            name: "Zklamání",
            description: "Nerealistická očekávání škodí.",
          },
        ],
      },
      en: {
        name: "The Marrying Maiden",
        meaning:
          "This hexagram signifies entering a relationship or role under unequal conditions.\n\nPsychologically, it reflects accepting limited agency.\n\nSelf-awareness is essential.",
        oracle: {
          interpretation: [
            "Know your worth.",

            "Act with dignity.",

            "Avoid unconscious imbalance.",
          ],

          introspection: ["Where are you accepting less than you deserve?"],
        },
        anatomy:
          "Imbalance demands awareness.\n\nSelf-respect preserves integrity.\n\nMaturity restores equality.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Uncertain Start",
            description: "Position unstable.",
          },
          {
            position: 2,
            type: 0,
            name: "Role Acceptance",
            description: "Limited authority.",
          },
          {
            position: 3,
            type: 1,
            name: "Inner Tension",
            description: "Imbalance intensifies.",
          },
          {
            position: 4,
            type: 1,
            name: "Patience Tested",
            description: "Calm required.",
          },
          {
            position: 5,
            type: 0,
            name: "Potential Stability",
            description: "Growth possible.",
          },
          {
            position: 6,
            type: 0,
            name: "Disappointment",
            description: "Unrealistic expectations harm.",
          },
        ],
      },
    },
  },
  {
    id: 55,
    number: 55,
    chineseName: "豐",
    romanization: "Fēng",
    elements: [3, 6],
    lines: [1, 0, 0, 1, 0, 1],
    content: {
      cs: {
        name: "Hojnost",
        meaning:
          "Hojnost představuje vrchol energie a plnosti.\n\nPsychologicky jde o období silné vitality a úspěchu.\n\nVrchol však netrvá věčně.",
        oracle: {
          interpretation: [
            "Využij plnost času.",

            "Buď vděčný.",

            "Připrav se na změnu.",
          ],

          introspection: ["Jak zacházíš se svým úspěchem?"],
        },
        anatomy:
          "Hojnost je dočasná.\n\nVděčnost stabilizuje.\n\nPřipravenost chrání budoucnost.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Nárůst energie",
            description: "Síla roste.",
          },
          {
            position: 2,
            type: 0,
            name: "Zastínění",
            description: "Viditelnost je omezená.",
          },
          {
            position: 3,
            type: 0,
            name: "Nejasnost",
            description: "Pozor na zmatek.",
          },
          {
            position: 4,
            type: 1,
            name: "Jasné vedení",
            description: "Směr se upevňuje.",
          },
          {
            position: 5,
            type: 0,
            name: "Vrchol",
            description: "Plnost dosahuje maxima.",
          },
          {
            position: 6,
            type: 1,
            name: "Úpadek",
            description: "Nadměrnost vede k obratu.",
          },
        ],
      },
      en: {
        name: "Abundance",
        meaning:
          "Abundance represents fullness and peak vitality.\n\nPsychologically, it reflects success and brightness.\n\nPeaks are temporary.",
        oracle: {
          interpretation: [
            "Use the moment wisely.",

            "Be grateful.",

            "Prepare for change.",
          ],

          introspection: ["How do you handle success?"],
        },
        anatomy:
          "Abundance is transient.\n\nGratitude stabilizes success.\n\nPreparedness protects continuity.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Rising Energy",
            description: "Strength increases.",
          },
          {
            position: 2,
            type: 0,
            name: "Obscurity",
            description: "Vision limited.",
          },
          {
            position: 3,
            type: 0,
            name: "Confusion",
            description: "Clarity required.",
          },
          {
            position: 4,
            type: 1,
            name: "Clear Leadership",
            description: "Direction firm.",
          },
          {
            position: 5,
            type: 0,
            name: "Peak",
            description: "Fullness achieved.",
          },
          {
            position: 6,
            type: 1,
            name: "Decline",
            description: "Excess leads to reversal.",
          },
        ],
      },
    },
  },
  {
    id: 56,
    number: 56,
    chineseName: "旅",
    romanization: "Lǚ",
    elements: [6, 7],
    lines: [1, 0, 1, 0, 0, 1],
    content: {
      cs: {
        name: "Putování",
        meaning:
          "Putování symbolizuje dočasnost a pohyb mimo domov.\n\nPsychologicky jde o období hledání.\n\nJe třeba zachovat lehkost a respekt.",
        oracle: {
          interpretation: [
            "Chovej se opatrně.",

            "Neulpívej.",

            "Respektuj cizí prostředí.",
          ],

          introspection: ["Co se učíš na cestě?"],
        },
        anatomy:
          "Putování přináší zkušenost.\n\nLehkost chrání.\n\nDomov se nachází uvnitř.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Nejistota",
            description: "Pocit cizosti.",
          },
          {
            position: 2,
            type: 0,
            name: "Opatrnost",
            description: "Přizpůsobení.",
          },
          {
            position: 3,
            type: 1,
            name: "Zranitelnost",
            description: "Pozor na konflikt.",
          },
          {
            position: 4,
            type: 0,
            name: "Dočasné útočiště",
            description: "Krátkodobý klid.",
          },
          {
            position: 5,
            type: 0,
            name: "Poučení",
            description: "Zkušenost roste.",
          },
          {
            position: 6,
            type: 1,
            name: "Ztráta směru",
            description: "Nepozornost škodí.",
          },
        ],
      },
      en: {
        name: "The Wanderer",
        meaning:
          "The Wanderer represents transience and movement away from home.\n\nPsychologically, it reflects a period of searching.\n\nLightness and respect are necessary.",
        oracle: {
          interpretation: [
            "Be cautious.",

            "Do not cling.",

            "Respect foreign ground.",
          ],

          introspection: ["What are you learning on this journey?"],
        },
        anatomy:
          "Wandering brings experience.\n\nLightness protects.\n\nHome is found within.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Uncertainty",
            description: "Feeling foreign.",
          },
          {
            position: 2,
            type: 0,
            name: "Adaptation",
            description: "Cautious adjustment.",
          },
          {
            position: 3,
            type: 1,
            name: "Vulnerability",
            description: "Conflict risk.",
          },
          {
            position: 4,
            type: 0,
            name: "Temporary Shelter",
            description: "Short-term rest.",
          },
          {
            position: 5,
            type: 0,
            name: "Learning",
            description: "Experience grows.",
          },
          {
            position: 6,
            type: 1,
            name: "Loss of Direction",
            description: "Carelessness harms.",
          },
        ],
      },
    },
  },
  {
    id: 57,
    number: 57,
    chineseName: "巽",
    romanization: "Xùn",
    elements: [4, 4],
    lines: [0, 1, 1, 0, 1, 1],
    content: {
      cs: {
        name: "Pronikání",
        meaning:
          "Pronikání symbolizuje jemný, vytrvalý vliv. Neprosazuje se silou, ale trpělivostí.\n\nPsychologicky jde o schopnost působit postupně.\n\nMěkkost může být silnější než tlak.",
        oracle: {
          interpretation: [
            "Buď vytrvalý.",

            "Postupuj nenápadně.",

            "Nezvyšuj tlak.",
          ],

          introspection: ["Kde můžeš působit jemněji?"],
        },
        anatomy:
          "Pronikání je postupné.\n\nTrpělivost přináší výsledek.\n\nJemnost stabilizuje změnu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Jemný začátek",
            description: "Vliv je nenápadný.",
          },
          {
            position: 2,
            type: 1,
            name: "Vytrvalost",
            description: "Tlak roste postupně.",
          },
          {
            position: 3,
            type: 1,
            name: "Pochybnost",
            description: "Nejistota zpomaluje.",
          },
          {
            position: 4,
            type: 0,
            name: "Adaptace",
            description: "Flexibilita pomáhá.",
          },
          {
            position: 5,
            type: 1,
            name: "Stabilní vliv",
            description: "Směr je upevněn.",
          },
          {
            position: 6,
            type: 1,
            name: "Přehnané opakování",
            description: "Tvrdohlavost škodí.",
          },
        ],
      },
      en: {
        name: "The Gentle",
        meaning:
          "The Gentle represents gradual influence through persistence.\n\nPsychologically, it reflects subtle impact.\n\nSoftness can overcome force.",
        oracle: {
          interpretation: [
            "Persist quietly.",

            "Apply gentle pressure.",

            "Avoid harshness.",
          ],

          introspection: ["Where can you act more subtly?"],
        },
        anatomy:
          "Gentle influence is gradual.\n\nPatience yields success.\n\nSoftness stabilizes change.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Subtle Beginning",
            description: "Influence begins quietly.",
          },
          {
            position: 2,
            type: 1,
            name: "Perseverance",
            description: "Steady persistence.",
          },
          {
            position: 3,
            type: 1,
            name: "Doubt",
            description: "Uncertainty slows progress.",
          },
          {
            position: 4,
            type: 0,
            name: "Adaptation",
            description: "Flexibility helps.",
          },
          {
            position: 5,
            type: 1,
            name: "Stable Influence",
            description: "Direction firm.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess Persistence",
            description: "Overdoing harms.",
          },
        ],
      },
    },
  },
  {
    id: 58,
    number: 58,
    chineseName: "兌",
    romanization: "Duì",
    elements: [8, 8],
    lines: [1, 1, 0, 1, 1, 0],
    content: {
      cs: {
        name: "Radost",
        meaning:
          "Radost představuje otevřenost a komunikaci.\n\nPsychologicky jde o lehkost bytí.\n\nSdílená radost posiluje vztahy.",
        oracle: {
          interpretation: [
            "Buď otevřený.",

            "Sdílej.",

            "Nenech radost sklouznout k povrchnosti.",
          ],

          introspection: ["Co tě skutečně těší?"],
        },
        anatomy:
          "Radost spojuje.\n\nUpřímnost ji stabilizuje.\n\nPovrchnost ji oslabuje.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První nadšení",
            description: "Lehkost přichází.",
          },
          {
            position: 2,
            type: 1,
            name: "Sdílení",
            description: "Komunikace sílí.",
          },
          {
            position: 3,
            type: 0,
            name: "Povrchnost",
            description: "Radost je nestálá.",
          },
          {
            position: 4,
            type: 1,
            name: "Upřímnost",
            description: "Vztahy se prohlubují.",
          },
          {
            position: 5,
            type: 1,
            name: "Stálá radost",
            description: "Lehkost je pevná.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnanost",
            description: "Nadměrná lehkomyslnost škodí.",
          },
        ],
      },
      en: {
        name: "Joy",
        meaning:
          "Joy represents openness and communication.\n\nPsychologically, it reflects lightness of being.\n\nShared joy strengthens bonds.",
        oracle: {
          interpretation: [
            "Be open.",

            "Share sincerely.",

            "Avoid superficiality.",
          ],

          introspection: ["What truly brings you joy?"],
        },
        anatomy:
          "Joy unites.\n\nSincerity stabilizes.\n\nSuperficiality weakens.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Enthusiasm",
            description: "Lightness appears.",
          },
          {
            position: 2,
            type: 1,
            name: "Sharing",
            description: "Communication grows.",
          },
          {
            position: 3,
            type: 0,
            name: "Superficiality",
            description: "Joy unstable.",
          },
          {
            position: 4,
            type: 1,
            name: "Sincerity",
            description: "Relationships deepen.",
          },
          {
            position: 5,
            type: 1,
            name: "Stable Joy",
            description: "Lightness sustained.",
          },
          {
            position: 6,
            type: 0,
            name: "Excess",
            description: "Carelessness harms.",
          },
        ],
      },
    },
  },
  {
    id: 59,
    number: 59,
    chineseName: "渙",
    romanization: "Huàn",
    elements: [5, 4],
    lines: [0, 1, 0, 0, 1, 1],
    content: {
      cs: {
        name: "Rozptýlení",
        meaning:
          "Rozptýlení znamená uvolnění napětí a rozpuštění překážek.\n\nPsychologicky jde o rozvolnění strachu.\n\nJednota vzniká odstraněním bariér.",
        oracle: {
          interpretation: ["Uvolni napětí.", "Spojuj.", "Nehromad obavy."],

          introspection: ["Co můžeš rozpustit?"],
        },
        anatomy:
          "Rozpuštění přináší klid.\n\nJednota vzniká uvolněním.\n\nRovnováha je nutná.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První uvolnění",
            description: "Napětí klesá.",
          },
          {
            position: 2,
            type: 1,
            name: "Spojení",
            description: "Vztahy se obnovují.",
          },
          {
            position: 3,
            type: 0,
            name: "Nejistota",
            description: "Proces není dokončen.",
          },
          {
            position: 4,
            type: 0,
            name: "Rozpouštění",
            description: "Překážky mizí.",
          },
          {
            position: 5,
            type: 1,
            name: "Jednota",
            description: "Společný cíl se upevňuje.",
          },
          {
            position: 6,
            type: 1,
            name: "Ztráta směru",
            description: "Přílišná rozvolněnost škodí.",
          },
        ],
      },
      en: {
        name: "Dispersion",
        meaning:
          "Dispersion signifies dissolving tension and obstacles.\n\nPsychologically, it reflects release of fear.\n\nUnity emerges through openness.",
        oracle: {
          interpretation: [
            "Release tension.",

            "Reconnect.",

            "Do not cling to fear.",
          ],

          introspection: ["What can you dissolve?"],
        },
        anatomy:
          "Dispersion brings relief.\n\nUnity forms through openness.\n\nBalance maintains clarity.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Release",
            description: "Tension decreases.",
          },
          {
            position: 2,
            type: 1,
            name: "Reconnection",
            description: "Relationships restored.",
          },
          {
            position: 3,
            type: 0,
            name: "Uncertainty",
            description: "Process incomplete.",
          },
          {
            position: 4,
            type: 0,
            name: "Dissolving",
            description: "Obstacles fade.",
          },
          {
            position: 5,
            type: 1,
            name: "Unity",
            description: "Purpose strengthened.",
          },
          {
            position: 6,
            type: 1,
            name: "Loss of Focus",
            description: "Excess diffusion harms.",
          },
        ],
      },
    },
  },
  {
    id: 60,
    number: 60,
    chineseName: "節",
    romanization: "Jié",
    elements: [5, 8],
    lines: [0, 1, 0, 1, 1, 0],
    content: {
      cs: {
        name: "Omezení",
        meaning:
          "Omezení symbolizuje strukturu a hranice.\n\nPsychologicky jde o disciplínu.\n\nHranice chrání energii.",
        oracle: {
          interpretation: [
            "Stanov si meze.",

            "Respektuj pravidla.",

            "Nepřeháněj omezení.",
          ],

          introspection: ["Kde potřebuješ jasné hranice?"],
        },
        anatomy:
          "Omezení stabilizuje.\n\nDisciplína chrání.\n\nPřehnanost omezuje růst.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První hranice",
            description: "Limity vznikají.",
          },
          {
            position: 2,
            type: 1,
            name: "Sebekontrola",
            description: "Disciplína sílí.",
          },
          {
            position: 3,
            type: 0,
            name: "Nespokojenost",
            description: "Omezení je testováno.",
          },
          {
            position: 4,
            type: 1,
            name: "Pevná struktura",
            description: "Řád se upevňuje.",
          },
          {
            position: 5,
            type: 1,
            name: "Vyváženost",
            description: "Omezení je zdravé.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnanost",
            description: "Přílišná tvrdost škodí.",
          },
        ],
      },
      en: {
        name: "Limitation",
        meaning:
          "Limitation represents structure and boundaries.\n\nPsychologically, it reflects discipline.\n\nBoundaries protect energy.",
        oracle: {
          interpretation: [
            "Set limits.",

            "Respect structure.",

            "Avoid excess rigidity.",
          ],

          introspection: ["Where are boundaries needed?"],
        },
        anatomy:
          "Limitation stabilizes.\n\nDiscipline protects.\n\nRigidity blocks growth.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Boundary",
            description: "Limits appear.",
          },
          {
            position: 2,
            type: 1,
            name: "Self-Control",
            description: "Discipline strengthens.",
          },
          {
            position: 3,
            type: 0,
            name: "Resistance",
            description: "Limits tested.",
          },
          {
            position: 4,
            type: 1,
            name: "Firm Structure",
            description: "Order established.",
          },
          {
            position: 5,
            type: 1,
            name: "Balanced Restraint",
            description: "Healthy limits.",
          },
          {
            position: 6,
            type: 0,
            name: "Rigidity",
            description: "Excess restriction harms.",
          },
        ],
      },
    },
  },
  {
    id: 61,
    number: 61,
    chineseName: "中孚",
    romanization: "Zhōng Fú",
    elements: [8, 4],
    lines: [1, 1, 0, 0, 1, 1],
    content: {
      cs: {
        name: "Vnitřní pravda",
        meaning:
          "Vnitřní pravda představuje upřímnost a důvěru.\n\nPsychologicky jde o soulad mezi slovem a činem.\n\nAutenticita vytváří důvěru.",
        oracle: {
          interpretation: ["Buď upřímný.", "Naslouchej sobě.", "Buduj důvěru."],

          introspection: ["Jednáš v souladu se svým nitrem?"],
        },
        anatomy:
          "Pravda vytváří spojení.\n\nIntegrita stabilizuje vztahy.\n\nSebeklam vede k rozpadu.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První důvěra",
            description: "Upřímnost začíná.",
          },
          {
            position: 2,
            type: 1,
            name: "Sdílení",
            description: "Vztah se prohlubuje.",
          },
          {
            position: 3,
            type: 0,
            name: "Pochybnost",
            description: "Důvěra je testována.",
          },
          {
            position: 4,
            type: 0,
            name: "Vnitřní soulad",
            description: "Jednota sílí.",
          },
          {
            position: 5,
            type: 1,
            name: "Silné jádro",
            description: "Integrita vrcholí.",
          },
          {
            position: 6,
            type: 1,
            name: "Sebeklam",
            description: "Neupřímnost škodí.",
          },
        ],
      },
      en: {
        name: "Inner Truth",
        meaning:
          "Inner Truth represents sincerity and trust.\n\nPsychologically, it reflects alignment between words and actions.\n\nAuthenticity builds connection.",
        oracle: {
          interpretation: ["Be sincere.", "Listen within.", "Build trust."],

          introspection: ["Are you aligned with yourself?"],
        },
        anatomy:
          "Truth builds connection.\n\nIntegrity sustains relationships.\n\nDeception dissolves trust.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Trust",
            description: "Sincerity begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Sharing",
            description: "Connection deepens.",
          },
          { position: 3, type: 0, name: "Doubt", description: "Trust tested." },
          {
            position: 4,
            type: 0,
            name: "Inner Alignment",
            description: "Harmony strengthens.",
          },
          {
            position: 5,
            type: 1,
            name: "Strong Core",
            description: "Integrity peaks.",
          },
          {
            position: 6,
            type: 1,
            name: "Self-Deception",
            description: "Dishonesty harms.",
          },
        ],
      },
    },
  },
  {
    id: 62,
    number: 62,
    chineseName: "小過",
    romanization: "Xiǎo Guò",
    elements: [3, 7],
    lines: [0, 0, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Převaha malého",
        meaning:
          "Převaha malého upozorňuje na důležitost detailu.\n\nPsychologicky jde o jemné úpravy.\n\nMalé kroky mají význam.",
        oracle: {
          interpretation: [
            "Buď pozorný k detailům.",

            "Neusiluj o velké skoky.",

            "Postupuj opatrně.",
          ],

          introspection: ["Co vyžaduje jemnou úpravu?"],
        },
        anatomy:
          "Malé kroky budují stabilitu.\n\nDetail rozhoduje.\n\nPřehnanost škodí.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Malý krok",
            description: "Začátek je nenápadný.",
          },
          {
            position: 2,
            type: 0,
            name: "Opatrnost",
            description: "Rovnováha je křehká.",
          },
          {
            position: 3,
            type: 1,
            name: "Přehnaný zásah",
            description: "Velké kroky škodí.",
          },
          {
            position: 4,
            type: 1,
            name: "Stabilizace",
            description: "Malé změny pomáhají.",
          },
          {
            position: 5,
            type: 0,
            name: "Pečlivost",
            description: "Detail rozhoduje.",
          },
          {
            position: 6,
            type: 0,
            name: "Překročení",
            description: "Přílišný zásah narušuje.",
          },
        ],
      },
      en: {
        name: "Preponderance of the Small",
        meaning:
          "Preponderance of the Small emphasizes attention to detail.\n\nPsychologically, it reflects subtle adjustments.\n\nSmall actions matter.",
        oracle: {
          interpretation: [
            "Focus on details.",

            "Avoid big leaps.",

            "Proceed carefully.",
          ],

          introspection: ["What needs subtle refinement?"],
        },
        anatomy:
          "Small steps ensure stability.\n\nDetails matter.\n\nExcess disrupts.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Small Step",
            description: "Subtle beginning.",
          },
          {
            position: 2,
            type: 0,
            name: "Caution",
            description: "Balance delicate.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Action",
            description: "Too much harms.",
          },
          {
            position: 4,
            type: 1,
            name: "Stabilization",
            description: "Minor changes help.",
          },
          {
            position: 5,
            type: 0,
            name: "Carefulness",
            description: "Detail decisive.",
          },
          {
            position: 6,
            type: 0,
            name: "Overreach",
            description: "Excess disturbs.",
          },
        ],
      },
    },
  },
  {
    id: 63,
    number: 63,
    chineseName: "既濟",
    romanization: "Jì Jì",
    elements: [5, 6],
    lines: [1, 0, 1, 0, 1, 0],
    content: {
      cs: {
        name: "Po dokončení",
        meaning:
          "Po dokončení symbolizuje stav, kdy je cíle dosaženo.\n\nPsychologicky jde o krátký moment rovnováhy.\n\nStav není trvalý.",
        oracle: {
          interpretation: ["Zůstaň bdělý.", "Nepolevuj.", "Udržuj rovnováhu."],

          introspection: ["Co je třeba dále udržovat?"],
        },
        anatomy:
          "Dokončení je dočasné.\n\nBdělost chrání stav.\n\nNedbalost vede k obratu.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Úspěšný začátek",
            description: "Stav je stabilní.",
          },
          {
            position: 2,
            type: 0,
            name: "Opatrnost",
            description: "Rovnováha křehká.",
          },
          {
            position: 3,
            type: 1,
            name: "Narušení",
            description: "Hrozí rozpad.",
          },
          {
            position: 4,
            type: 0,
            name: "Obnova",
            description: "Stabilita se vrací.",
          },
          {
            position: 5,
            type: 1,
            name: "Udržení",
            description: "Rovnováha pevná.",
          },
          {
            position: 6,
            type: 0,
            name: "Zanedbání",
            description: "Nepozornost škodí.",
          },
        ],
      },
      en: {
        name: "After Completion",
        meaning:
          "After Completion signifies achieved order.\n\nPsychologically, it reflects temporary balance.\n\nCompletion is not permanent.",
        oracle: {
          interpretation: [
            "Remain vigilant.",

            "Do not relax too soon.",

            "Maintain balance.",
          ],

          introspection: ["What requires continued care?"],
        },
        anatomy:
          "Completion is temporary.\n\nVigilance preserves order.\n\nNeglect causes reversal.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Successful Start",
            description: "Stability present.",
          },
          {
            position: 2,
            type: 0,
            name: "Caution",
            description: "Balance delicate.",
          },
          {
            position: 3,
            type: 1,
            name: "Disturbance",
            description: "Instability possible.",
          },
          {
            position: 4,
            type: 0,
            name: "Recovery",
            description: "Order restored.",
          },
          {
            position: 5,
            type: 1,
            name: "Maintenance",
            description: "Balance upheld.",
          },
          {
            position: 6,
            type: 0,
            name: "Neglect",
            description: "Carelessness harms.",
          },
        ],
      },
    },
  },
  {
    id: 64,
    number: 64,
    chineseName: "未濟",
    romanization: "Wèi Jì",
    elements: [6, 5],
    lines: [0, 1, 0, 1, 0, 1],
    content: {
      cs: {
        name: "Před dokončením",
        meaning:
          "Před dokončením znamená, že proces ještě není uzavřen.\n\nPsychologicky jde o fázi těsně před cílem.\n\nOpatrnost je zásadní.",
        oracle: {
          interpretation: [
            "Nevzdávej se těsně před cílem.",

            "Buď trpělivý.",

            "Dokonči proces vědomě.",
          ],

          introspection: ["Co zbývá dotáhnout?"],
        },
        anatomy:
          "Proces je téměř hotov.\n\nTrpělivost přináší dokončení.\n\nUnáhlenost vše narušuje.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Nejistý začátek",
            description: "Proces je otevřený.",
          },
          {
            position: 2,
            type: 1,
            name: "Zkouška",
            description: "Vytrvalost je nutná.",
          },
          {
            position: 3,
            type: 0,
            name: "Zdržení",
            description: "Tempo zpomaluje.",
          },
          {
            position: 4,
            type: 1,
            name: "Obnovená energie",
            description: "Síla se vrací.",
          },
          {
            position: 5,
            type: 0,
            name: "Těsně před cílem",
            description: "Opatrnost klíčová.",
          },
          {
            position: 6,
            type: 1,
            name: "Unáhlenost",
            description: "Předčasné jednání škodí.",
          },
        ],
      },
      en: {
        name: "Before Completion",
        meaning:
          "Before Completion signifies unfinished process.\n\nPsychologically, it reflects being near the goal.\n\nCaution is crucial.",
        oracle: {
          interpretation: [
            "Do not give up near the finish.",
            "Be patient.",
            "Complete consciously.",
          ],

          introspection: ["What remains unfinished?"],
        },
        anatomy:
          "Completion is near.\n\nPatience ensures success.\n\nHaste disrupts fulfillment.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Uncertain Beginning",
            description: "Process open.",
          },
          {
            position: 2,
            type: 1,
            name: "Trial",
            description: "Perseverance required.",
          },
          {
            position: 3,
            type: 0,
            name: "Delay",
            description: "Progress slows.",
          },
          {
            position: 4,
            type: 1,
            name: "Renewed Energy",
            description: "Strength returns.",
          },
          {
            position: 5,
            type: 0,
            name: "Near Completion",
            description: "Caution essential.",
          },
          {
            position: 6,
            type: 1,
            name: "Premature Action",
            description: "Haste harms.",
          },
        ],
      },
    },
  },
];
