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
    lines: [1, 0, 0, 0, 1, 0],
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
    elements: [1, 5],
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
    lines: [0, 1, 0, 1, 1, 1],
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
    elements: [5, 2],
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
    elements: [1, 4],
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
    lines: [1, 1, 0, 1, 1, 1],
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
    elements: [1, 2],
    lines: [1, 1, 1, 0, 0, 0],
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
    elements: [2, 1],
    lines: [0, 0, 0, 1, 1, 1],
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
    elements: [6, 1],
    lines: [1, 0, 1, 1, 1, 1],
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
    elements: [1, 6],
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
    elements: [2, 3],
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
    elements: [3, 8],
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
    elements: [4, 7],
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
    elements: [8, 2],
    lines: [1, 1, 0, 0, 0, 0],
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
    elements: [2, 4],
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
    lines: [1, 0, 1, 0, 0, 1],
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
    elements: [2, 7],
    lines: [0, 0, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Rozpad",
        meaning:
          "Rozpad symbolizuje postupné oslabování struktury. Nejde o náhlý kolaps, ale o pomalé odlupování toho, co už není pevné. Tento hexagram ukazuje fázi cyklu, kdy staré formy ztrácejí svou nosnost a vnější stabilita se vytrácí.\n\nPsychologicky se může projevovat jako pocit nejistoty, únavy nebo ztráty směru. To, co dříve fungovalo, už nepřináší oporu. Tento proces však není chybou – je to přirozená součást obnovy.\n\nRozpad odhaluje slabá místa. Učí, že držet se rozpadající struktury pouze prohlubuje napětí. Skutečná síla zde spočívá v přijetí konce a ochraně vnitřního jádra integrity.",
        oracle: {
          interpretation: [
            "Nepřidržuj to, co se přirozeně rozpadá.",
            "Zachovej vnitřní klid i v nestabilitě.",
            "Nyní není čas expandovat, ale chránit podstatu.",
          ],
          introspection: [
            "Co ve tvém životě ztrácí svou pevnost?",
            "Čeho se držíš ze strachu před ztrátou?",
            "Jak můžeš uchovat svou vnitřní integritu?",
          ],
        },
        anatomy:
          "Rozpad tvoří Hora nad Zemí. Hora symbolizuje pevnost a hranici, Země poddajnost a podporu. Když se pevná struktura oddělí od nosného základu, dochází k oslabení.\n\nTento obraz ukazuje situaci, kdy forma zůstává, ale její opora je narušena. Vnější struktura se drolí, protože základ již není živý.\n\nAnatomie hexagramu upozorňuje, že skutečná stabilita nevzniká z tvrdosti, ale z propojení mezi formou a základem.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První oslabení",
            description:
              "Narušení je jemné, ale již patrné. Je čas věnovat pozornost signálům.",
          },
          {
            position: 2,
            type: 0,
            name: "Ztráta podpory",
            description: "Opory se vytrácejí. Stabilita už není samozřejmá.",
          },
          {
            position: 3,
            type: 0,
            name: "Prohlubující se rozklad",
            description: "Slabiny se odhalují otevřeněji.",
          },
          {
            position: 4,
            type: 0,
            name: "Ohrožené jádro",
            description: "Ztráta se přibližuje centru situace.",
          },
          {
            position: 5,
            type: 0,
            name: "Poslední opora",
            description: "Zůstává jen malý zbytek pevnosti.",
          },
          {
            position: 6,
            type: 1,
            name: "Zachování integrity",
            description:
              "Vnější struktura může padnout, ale vnitřní pevnost lze uchovat.",
          },
        ],
      },
      en: {
        name: "Splitting Apart",
        meaning:
          "Splitting Apart represents gradual erosion rather than sudden collapse. Structures lose their strength step by step. This hexagram marks a phase in which outer forms weaken because their foundation no longer supports them.\n\nPsychologically, it may manifest as uncertainty, fatigue, or loss of direction. What once worked no longer provides stability. Yet this is not failure — it is part of renewal.\n\nDissolution exposes weak foundations. Clinging to what is already breaking only increases tension. True strength now lies in accepting the ending and protecting inner integrity.",
        oracle: {
          interpretation: [
            "Do not cling to what is naturally falling away.",
            "Preserve inner calm amidst instability.",
            "This is a time to protect essence, not expand outward.",
          ],
          introspection: [
            "What in your life is losing its foundation?",
            "What are you holding onto out of fear?",
            "How can you preserve your inner integrity?",
          ],
        },
        anatomy:
          "The image is Mountain above Earth. Mountain symbolizes firmness and boundary; Earth represents support and receptivity. When structure separates from its foundation, weakening begins.\n\nThe form remains, but its base erodes. External stability falters because the root connection is compromised.\n\nThis anatomy teaches that lasting stability depends not on rigidity, but on living alignment between structure and foundation.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Weakening",
            description: "The disturbance is subtle but visible.",
          },
          {
            position: 2,
            type: 0,
            name: "Loss of Support",
            description: "Foundations begin to erode.",
          },
          {
            position: 3,
            type: 0,
            name: "Deepening Decline",
            description: "Weakness becomes more evident.",
          },
          {
            position: 4,
            type: 0,
            name: "Threatened Core",
            description: "The center of stability is affected.",
          },
          {
            position: 5,
            type: 0,
            name: "Last Support",
            description: "Only a remnant of firmness remains.",
          },
          {
            position: 6,
            type: 1,
            name: "Preserved Integrity",
            description: "External loss does not destroy inner strength.",
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
          "Návrat symbolizuje obrat po období úpadku. Po rozkladu přichází první impuls obnovy. Je to jemný, ale zásadní moment, kdy se energie vrací k životu.\n\nPsychologicky jde o návrat k vlastnímu středu. Po bloudění nebo vyčerpání se člověk znovu orientuje podle svých hodnot. Tento proces není dramatický, ale hluboce transformační.\n\nNávrat ukazuje, že i po ztrátě existuje možnost nového začátku. Stačí malý, vědomý krok zpět k pravdivosti.",
        oracle: {
          interpretation: [
            "Vrať se k podstatě.",
            "Začni znovu bez zbytečné komplikace.",
            "Malý krok může změnit směr celého cyklu.",
          ],
          introspection: [
            "Kam se potřebuješ vrátit?",
            "Co je tvým skutečným základem?",
            "Kde můžeš začít znovu jednodušeji?",
          ],
        },
        anatomy:
          "Obraz tvoří Země nad Hromem. Země symbolizuje přijímání, Hrom probuzení a impuls. V tichu země se rodí první pohyb.\n\nStruktura hexagramu ukazuje návrat energie zdola. Obnova nezačíná nahoře, ale v kořenech.\n\nAnatomie připomíná, že skutečný restart vzniká zevnitř, nikoli z vnějšího tlaku.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První jiskra",
            description: "Objevuje se impuls změny.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilizace směru",
            description: "Návrat získává pevnost.",
          },
          {
            position: 3,
            type: 0,
            name: "Zkouška vytrvalosti",
            description: "Staré vzorce mohou znovu lákat.",
          },
          {
            position: 4,
            type: 0,
            name: "Postupná obnova",
            description: "Směr se upevňuje.",
          },
          {
            position: 5,
            type: 0,
            name: "Znovunalezená rovnováha",
            description: "Vnitřní stabilita sílí.",
          },
          {
            position: 6,
            type: 0,
            name: "Riziko odklonu",
            description: "Neopatrnost může návrat přerušit.",
          },
        ],
      },
      en: {
        name: "Return",
        meaning:
          "Return marks the turning point after decline. Following dissolution, the first impulse of renewal appears. It is subtle yet decisive.\n\nPsychologically, it reflects re-centering. After confusion or exhaustion, one realigns with core values. The process is quiet but transformative.\n\nReturn reminds us that even after loss, a new beginning is possible. A small, conscious step restores direction.",
        oracle: {
          interpretation: [
            "Return to what is essential.",
            "Begin again without unnecessary complexity.",
            "A small step can redirect the entire cycle.",
          ],
          introspection: [
            "Where do you need to return?",
            "What is your true foundation?",
            "How can you begin again more simply?",
          ],
        },
        anatomy:
          "The image is Earth above Thunder. Earth symbolizes receptivity; Thunder represents awakening impulse. Renewal begins in the depths.\n\nEnergy rises from below. True restoration starts at the roots.\n\nThis anatomy teaches that genuine restart emerges internally, not through external pressure.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "First Spark",
            description: "The impulse for renewal appears.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilizing Direction",
            description: "Return gains firmness.",
          },
          {
            position: 3,
            type: 0,
            name: "Test of Persistence",
            description: "Old patterns may tempt return.",
          },
          {
            position: 4,
            type: 0,
            name: "Gradual Restoration",
            description: "Alignment strengthens.",
          },
          {
            position: 5,
            type: 0,
            name: "Recovered Balance",
            description: "Inner stability deepens.",
          },
          {
            position: 6,
            type: 0,
            name: "Risk of Deviation",
            description: "Carelessness may interrupt renewal.",
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
          "Nevinnost představuje jednání bez postranních úmyslů. Je to stav vnitřní přímosti, kdy čin vychází z čistého úmyslu a není zatížen manipulací ani kalkulem.\n\nPsychologicky jde o návrat k autenticitému jádru. Člověk jedná v souladu se svou přirozeností, nikoli ze strachu nebo strategie. Tento stav vyžaduje odvahu — být pravdivý i bez záruky výsledku.\n\nNevinnost však není naivita. Neznamená ignorovat realitu, ale jednat bez vnitřní falešnosti.\n\nHexagram učí, že čistota úmyslu přináší vnitřní klid. Pokud je motivace pravdivá, cesta se vyjasní sama.",
        oracle: {
          interpretation: [
            "Jednej z čistého úmyslu.",
            "Nevytvářej skryté strategie.",
            "Zachovej autenticitu i v nejistotě.",
          ],
          introspection: [
            "Je tvůj záměr skutečně čistý?",
            "Kde jednáš z obavy místo z pravdivosti?",
            "Co by znamenalo být plně autentický?",
          ],
        },
        anatomy:
          "Hexagram tvoří Nebe nad Hromem. Nebe symbolizuje čistou iniciativu, Hrom probuzení a pohyb. Impuls vychází zdola, ale je veden vyšším principem.\n\nStruktura ukazuje, že čin má být spontánní, ale zároveň v souladu s řádem.\n\nAnatomie připomíná, že pravdivé jednání spojuje energii pohybu s morální jasností.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Čistý začátek",
            description: "Impuls je přirozený a nevinný.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní pochybnost",
            description: "Objevuje se otázka motivace.",
          },
          {
            position: 3,
            type: 0,
            name: "Riziko odklonu",
            description: "Pokušení jednat z vypočítavosti.",
          },
          {
            position: 4,
            type: 1,
            name: "Návrat k pravdivosti",
            description: "Záměr se očišťuje.",
          },
          {
            position: 5,
            type: 1,
            name: "Jednání v souladu",
            description: "Čin vychází z integrity.",
          },
          {
            position: 6,
            type: 1,
            name: "Porušení nevinnosti",
            description: "Ztráta autenticity vede k obratu.",
          },
        ],
      },
      en: {
        name: "Innocence",
        meaning:
          "Innocence represents action without hidden motives. It is a state of inner sincerity, where behavior arises from authenticity rather than manipulation.\n\nPsychologically, it reflects alignment with one’s true nature. One acts without strategic calculation, guided by inner truth.\n\nInnocence is not naivety. It means remaining genuine even in complex situations.\n\nThis hexagram teaches that clarity of intention creates inner stability. When motive is pure, direction becomes evident.",
        oracle: {
          interpretation: [
            "Act from sincere intention.",
            "Avoid hidden agendas.",
            "Remain authentic in uncertainty.",
          ],
          introspection: [
            "Is your intention truly sincere?",
            "Where are you acting from fear rather than truth?",
            "What would full authenticity require?",
          ],
        },
        anatomy:
          "Heaven above Thunder forms this hexagram. Thunder represents movement; Heaven symbolizes guiding principle. Energy arises from below and aligns with higher order.\n\nThe structure emphasizes spontaneous yet principled action.\n\nTrue innocence integrates impulse with moral clarity.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Pure Beginning",
            description: "The impulse is natural and sincere.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Questioning",
            description: "Motivation is examined.",
          },
          {
            position: 3,
            type: 0,
            name: "Risk of Deviation",
            description: "Temptation toward calculation appears.",
          },
          {
            position: 4,
            type: 1,
            name: "Return to Integrity",
            description: "Intention becomes clear again.",
          },
          {
            position: 5,
            type: 1,
            name: "Aligned Action",
            description: "Behavior reflects inner truth.",
          },
          {
            position: 6,
            type: 1,
            name: "Loss of Innocence",
            description: "Deviation leads to consequence.",
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
    elements: [1, 7],
    lines: [1, 1, 1, 0, 0, 1],
    content: {
      cs: {
        name: "Velká síla",
        meaning:
          "Velká síla symbolizuje energii, která je zadržována a kultivována. Nejde o okamžitou akci, ale o vědomé shromažďování moci a zdrojů.\n\nPsychologicky představuje disciplínu. Člověk má potenciál jednat, ale rozhodne se jej ovládnout a směrovat. Tato fáze vyžaduje trpělivost a sebeovládání.\n\nSíla bez kontroly je nebezpečná. Síla zadržovaná a vědomě spravovaná se stává stabilní a účinnou.\n\nHexagram učí, že skutečná moc není v impulzivním projevu, ale v schopnosti čekat na správný okamžik.",
        oracle: {
          interpretation: [
            "Zadrž energii a kultivuj ji.",
            "Nepodléhej okamžitému impulsu.",
            "Připravuj se na větší krok.",
          ],
          introspection: [
            "Kde můžeš projevit větší sebekontrolu?",
            "Co právě vyžaduje trpělivost?",
            "Jak můžeš svou sílu nasměrovat vědomě?",
          ],
        },
        anatomy:
          "Hora nad Nebem vytváří obraz zadržované energie. Nebe symbolizuje tvořivou sílu, Hora omezení a stabilitu.\n\nSíla je přítomná, ale je držena v mezích. Tato kombinace vytváří potenciál, který dozrává.\n\nAnatomie hexagramu ukazuje, že růst vyžaduje nejen energii, ale i hranice.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První impuls síly",
            description: "Potenciál je patrný.",
          },
          {
            position: 2,
            type: 1,
            name: "Sebekontrola",
            description: "Síla je vědomě držena.",
          },
          {
            position: 3,
            type: 1,
            name: "Riziko přetlaku",
            description: "Napětí může růst.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilizace",
            description: "Omezení vytváří bezpečí.",
          },
          {
            position: 5,
            type: 0,
            name: "Zralá síla",
            description: "Energie je připravena k použití.",
          },
          {
            position: 6,
            type: 1,
            name: "Uvolnění",
            description: "Síla může být konečně projevena.",
          },
        ],
      },
      en: {
        name: "The Taming Power of the Great",
        meaning:
          "The Taming Power of the Great represents cultivated strength held in restraint. It is not immediate action, but conscious accumulation of power.\n\nPsychologically, it reflects discipline. One possesses potential yet chooses to direct and control it.\n\nUncontrolled force is destructive. Restrained force becomes stable and effective.\n\nThis hexagram teaches that true power lies in waiting for the right moment.",
        oracle: {
          interpretation: [
            "Restrain and cultivate your energy.",
            "Do not act impulsively.",
            "Prepare for a greater step.",
          ],
          introspection: [
            "Where is greater self-discipline required?",
            "What situation calls for patience?",
            "How can you channel your strength wisely?",
          ],
        },
        anatomy:
          "Mountain above Heaven symbolizes restrained creative force. Heaven holds dynamic energy; Mountain imposes structure.\n\nEnergy is present but contained, allowing maturation.\n\nGrowth requires both strength and boundary.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Emerging Strength",
            description: "Potential becomes visible.",
          },
          {
            position: 2,
            type: 1,
            name: "Self-Control",
            description: "Energy is consciously restrained.",
          },
          {
            position: 3,
            type: 1,
            name: "Pressure Builds",
            description: "Tension increases beneath restraint.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilization",
            description: "Structure creates safety.",
          },
          {
            position: 5,
            type: 0,
            name: "Mature Power",
            description: "Strength is ready.",
          },
          {
            position: 6,
            type: 1,
            name: "Release",
            description: "Power is finally expressed.",
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
    elements: [3, 7],
    lines: [1, 0, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Výživa",
        meaning:
          "Výživa symbolizuje to, čím se člověk živí – nejen fyzicky, ale i psychicky a duchovně. Tento hexagram ukazuje potřebu věnovat pozornost tomu, co přijímáme a co zároveň dáváme.\n\nPsychologicky jde o uvědomění, že naše myšlenky, vztahy i informace formují náš vnitřní svět. Výživa není jen o spotřebě, ale i o odpovědnosti.\n\nTo, co přijímáme, nás buduje nebo oslabuje. Stejně tak to, co vysíláme, ovlivňuje okolí.\n\nHexagram učí rozlišování. Moudrost spočívá v péči o to, co vstupuje do našeho života, i v tom, jak sami přispíváme světu.",
        oracle: {
          interpretation: [
            "Věnuj pozornost tomu, co přijímáš.",
            "Pečuj o svou vnitřní výživu.",
            "Buď si vědom toho, co předáváš dál.",
          ],
          introspection: [
            "Čím se právě vyživuješ – mentálně i emocionálně?",
            "Co ve tvém životě tě posiluje a co tě oslabuje?",
            "Jakým způsobem přispíváš druhým?",
          ],
        },
        anatomy:
          "Hora nad Hromem vytváří obraz úst, která se otevírají a zavírají. Hora představuje stabilitu, Hrom pohyb a impuls.\n\nStruktura hexagramu ukazuje výměnu mezi přijímáním a vydáváním.\n\nAnatomie připomíná, že rovnováha mezi těmito dvěma směry je klíčem k dlouhodobé stabilitě.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Vědomé přijetí",
            description: "Začíná uvědomění toho, co vstupuje dovnitř.",
          },
          {
            position: 2,
            type: 0,
            name: "Nesprávná výživa",
            description: "Přijetí něčeho, co nepodporuje růst.",
          },
          {
            position: 3,
            type: 0,
            name: "Závislost",
            description: "Přílišné spoléhání na vnější zdroj.",
          },
          {
            position: 4,
            type: 0,
            name: "Vyváženost",
            description: "Přijímání i dávání jsou v harmonii.",
          },
          {
            position: 5,
            type: 0,
            name: "Zodpovědnost",
            description: "Člověk si uvědomuje dopad svého vlivu.",
          },
          {
            position: 6,
            type: 1,
            name: "Nadměrná konzumace",
            description: "Přebytek narušuje rovnováhu.",
          },
        ],
      },
      en: {
        name: "Nourishment",
        meaning:
          "Nourishment represents what sustains us — physically, mentally, and spiritually. This hexagram invites awareness of what we take in and what we offer in return.\n\nPsychologically, it reflects the understanding that thoughts, relationships, and information shape our inner world.\n\nWhat we consume strengthens or weakens us. What we give influences others.\n\nWisdom lies in conscious selection and responsible sharing.",
        oracle: {
          interpretation: [
            "Be mindful of what you take in.",
            "Care for your inner nourishment.",
            "Consider what you are feeding others.",
          ],
          introspection: [
            "What currently nourishes you?",
            "What drains your strength?",
            "How do your words and actions affect others?",
          ],
        },
        anatomy:
          "Mountain above Thunder forms the image of the mouth. Mountain stabilizes; Thunder initiates movement.\n\nThe structure emphasizes exchange between receiving and giving.\n\nBalance between these flows sustains vitality.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Conscious Intake",
            description: "Awareness of what enters begins.",
          },
          {
            position: 2,
            type: 0,
            name: "Misguided Consumption",
            description: "Intake does not support growth.",
          },
          {
            position: 3,
            type: 0,
            name: "Dependency",
            description: "Overreliance on external sources.",
          },
          {
            position: 4,
            type: 0,
            name: "Balanced Exchange",
            description: "Giving and receiving align.",
          },
          {
            position: 5,
            type: 0,
            name: "Responsibility",
            description: "Influence is handled consciously.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess",
            description: "Overconsumption disturbs equilibrium.",
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
    elements: [4, 8],
    lines: [0, 1, 1, 1, 1, 0],
    content: {
      cs: {
        name: "Přetížení",
        meaning:
          "Přetížení symbolizuje situaci, kdy váha odpovědnosti nebo tlaku přesahuje běžnou míru. Struktura je zatížena více, než na co byla původně určena.\n\nPsychologicky může jít o období intenzity, kdy se člověk cítí pod tlakem okolností nebo vlastních očekávání. Přetížení vyžaduje vědomé rozhodnutí – buď posílit strukturu, nebo uvolnit zátěž.\n\nTento hexagram neznamená nutně selhání. Může naznačovat výjimečnou situaci, která vyžaduje odvahu.\n\nMoudrost spočívá v rozpoznání hranice. Pokud tlak není vědomě řízen, může dojít k prasknutí.",
        oracle: {
          interpretation: [
            "Rozpoznej míru zátěže.",
            "Jednej rozhodně, ale vědomě.",
            "Posil strukturu nebo uvolni tlak.",
          ],
          introspection: [
            "Kde se cítíš přetížen?",
            "Co můžeš delegovat nebo změnit?",
            "Jak můžeš vytvořit stabilnější oporu?",
          ],
        },
        anatomy:
          "Jezero nad Větrem vytváří obraz ohnutého nosníku. Vnitřní čáry jsou silné, vnější slabé – struktura je napjatá.\n\nTato kombinace ukazuje situaci, kdy síla není rovnoměrně rozložena.\n\nAnatomie hexagramu upozorňuje, že dlouhodobé napětí bez úpravy vede k narušení rovnováhy.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První napětí",
            description: "Zátěž začíná být patrná.",
          },
          {
            position: 2,
            type: 1,
            name: "Zvýšený tlak",
            description: "Odpovědnost roste.",
          },
          {
            position: 3,
            type: 1,
            name: "Riziko přetížení",
            description: "Struktura je na hraně.",
          },
          {
            position: 4,
            type: 1,
            name: "Vědomý zásah",
            description: "Je třeba aktivní rozhodnutí.",
          },
          {
            position: 5,
            type: 1,
            name: "Vrchol tlaku",
            description: "Situace dosahuje maxima.",
          },
          {
            position: 6,
            type: 0,
            name: "Uvolnění nebo zlomení",
            description: "Dochází k přechodu – buď stabilizace, nebo kolaps.",
          },
        ],
      },
      en: {
        name: "Preponderance of the Great",
        meaning:
          "Preponderance of the Great signifies a situation of excessive weight or pressure. The structure bears more than it was designed to hold.\n\nPsychologically, it reflects intensity and responsibility beyond ordinary limits. One must decide whether to strengthen the foundation or release the burden.\n\nThis hexagram does not necessarily mean failure. It may signal an extraordinary moment requiring courage.\n\nWisdom lies in recognizing limits. If tension is unmanaged, rupture may follow.",
        oracle: {
          interpretation: [
            "Recognize the weight you carry.",
            "Act decisively and consciously.",
            "Strengthen structure or release pressure.",
          ],
          introspection: [
            "Where do you feel overloaded?",
            "What can you adjust or delegate?",
            "How can you create stronger support?",
          ],
        },
        anatomy:
          "Lake above Wind creates the image of a beam bending under strain. Inner lines are strong while outer lines are weak, indicating tension.\n\nStrength is unevenly distributed.\n\nWithout adjustment, prolonged pressure disrupts balance.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Strain",
            description: "The burden becomes noticeable.",
          },
          {
            position: 2,
            type: 1,
            name: "Increasing Pressure",
            description: "Responsibility intensifies.",
          },
          {
            position: 3,
            type: 1,
            name: "Critical Point",
            description: "Structure approaches its limit.",
          },
          {
            position: 4,
            type: 1,
            name: "Conscious Intervention",
            description: "Active decision required.",
          },
          {
            position: 5,
            type: 1,
            name: "Peak Tension",
            description: "The situation reaches maximum strain.",
          },
          {
            position: 6,
            type: 0,
            name: "Release or Break",
            description: "Transition toward stabilization or collapse.",
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
          "Propast symbolizuje opakované setkání s nebezpečím nebo hlubokou nejistotou. Nejde o jednorázovou krizi, ale o období, kdy člověk musí projít úzkým prostorem bez jasných záruk.\n\nPsychologicky jde o konfrontaci se strachem. Situace může působit jako uzavřený kruh, kdy se obtíž opakuje v různých podobách. Propast učí vytrvalosti a bdělosti.\n\nNebezpečí není nepřítel, ale učitel. Vnitřní stabilita je důležitější než vnější jistota.\n\nHexagram ukazuje, že cesta skrze obtíž vede přes přítomnost. Pokud člověk neztrácí vědomí a postupuje krok za krokem, překážka se stává zdrojem síly.",
        oracle: {
          interpretation: [
            "Zachovej klid uprostřed obtíží.",
            "Postupuj krok za krokem.",
            "Nenech se ochromit strachem.",
          ],
          introspection: [
            "Čeho se právě obáváš?",
            "Jak můžeš reagovat vědomě místo impulzivně?",
            "Co tě tato situace učí o tvé síle?",
          ],
        },
        anatomy:
          "Voda nad Vodou vytváří obraz hluboké propasti. Voda symbolizuje nebezpečí i tok života.\n\nOpakování stejného trigramu zdůrazňuje intenzitu situace.\n\nAnatomie hexagramu ukazuje, že obtíž je součástí přirozeného proudu – vyžaduje flexibilitu a vnitřní pevnost.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První vstup do nebezpečí",
            description: "Situace začíná být nejistá.",
          },
          {
            position: 2,
            type: 1,
            name: "Vnitřní pevnost",
            description: "Objevuje se schopnost zvládat tlak.",
          },
          {
            position: 3,
            type: 0,
            name: "Ztráta rovnováhy",
            description: "Hrozí sklouznutí do chaosu.",
          },
          {
            position: 4,
            type: 0,
            name: "Vytrvalost",
            description: "Postup vpřed je pomalý, ale vědomý.",
          },
          {
            position: 5,
            type: 1,
            name: "Střed obtíže",
            description: "Největší tlak vyžaduje největší klid.",
          },
          {
            position: 6,
            type: 0,
            name: "Uvolnění napětí",
            description: "Nebezpečí postupně slábne.",
          },
        ],
      },
      en: {
        name: "The Abysmal",
        meaning:
          "The Abysmal represents repeated encounters with danger or uncertainty. It is not a single crisis but a sustained period of challenge.\n\nPsychologically, it reflects confrontation with fear. Difficulties may seem cyclical. The Abysmal teaches vigilance and perseverance.\n\nDanger is not an enemy but a teacher. Inner stability matters more than outer certainty.\n\nMoving through difficulty requires presence. Step by step, fear transforms into strength.",
        oracle: {
          interpretation: [
            "Remain calm in danger.",
            "Proceed step by step.",
            "Do not let fear paralyze you.",
          ],
          introspection: [
            "What fear are you facing?",
            "How can you respond with awareness?",
            "What strength is this challenge cultivating?",
          ],
        },
        anatomy:
          "Water over Water forms the image of a deep abyss. Water symbolizes both danger and flow.\n\nThe repetition intensifies the experience.\n\nDifficulty becomes part of natural movement, requiring flexibility and inner strength.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Entering Danger",
            description: "Uncertainty begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Inner Stability",
            description: "Strength develops within.",
          },
          {
            position: 3,
            type: 0,
            name: "Risk of Imbalance",
            description: "Clarity may waver.",
          },
          {
            position: 4,
            type: 0,
            name: "Perseverance",
            description: "Steady progress continues.",
          },
          {
            position: 5,
            type: 1,
            name: "Center of the Abyss",
            description: "Calm is essential.",
          },
          {
            position: 6,
            type: 0,
            name: "Release",
            description: "Danger gradually subsides.",
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
          "Jas symbolizuje světlo vědomí a schopnost rozlišovat. Tento hexagram ukazuje období, kdy je třeba vidět věci takové, jaké jsou, bez zkreslení.\n\nPsychologicky jde o uvědomění a poznání. Jasnost přináší orientaci, ale také odpovědnost.\n\nSvětlo odhaluje nejen pravdu, ale i stíny. Vidět znamená přijmout realitu bez úniku.\n\nHexagram učí, že skutečné světlo vychází zevnitř. Vnější zdroje mohou pomoci, ale stabilní jasnost je stav mysli.",
        oracle: {
          interpretation: [
            "Hledej jasnost místo domněnek.",
            "Rozlišuj mezi fakty a projekcí.",
            "Buď světlem i pro ostatní.",
          ],
          introspection: [
            "Co je nyní třeba uvidět otevřeně?",
            "Kde se vyhýbáš pravdě?",
            "Jak můžeš přinést více vědomí do situace?",
          ],
        },
        anatomy:
          "Oheň nad Ohněm vytváří obraz světla, které se udržuje samo.\n\nOpakování trigramu zdůrazňuje sílu vědomí.\n\nAnatomie ukazuje, že světlo potřebuje palivo – bez výživy vědomí zhasíná.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První záblesk",
            description: "Objevuje se vhled.",
          },
          {
            position: 2,
            type: 0,
            name: "Zkouška jasnosti",
            description: "Může dojít k pochybnosti.",
          },
          {
            position: 3,
            type: 1,
            name: "Prohloubení poznání",
            description: "Vědomí se stabilizuje.",
          },
          {
            position: 4,
            type: 1,
            name: "Sdílení světla",
            description: "Jas ovlivňuje okolí.",
          },
          {
            position: 5,
            type: 0,
            name: "Riziko oslnění",
            description: "Přehnaná jistota může zkreslit.",
          },
          {
            position: 6,
            type: 1,
            name: "Stálé světlo",
            description: "Jasnost je vnitřně ukotvená.",
          },
        ],
      },
      en: {
        name: "Clarity",
        meaning:
          "Clarity represents illumination and discernment. It calls for seeing reality without distortion.\n\nPsychologically, it reflects awareness and insight. Clarity brings direction and responsibility.\n\nLight reveals both truth and shadow.\n\nTrue illumination arises from within. External light may guide, but inner clarity sustains.",
        oracle: {
          interpretation: [
            "Seek clarity over assumption.",
            "Distinguish fact from projection.",
            "Be a light for others.",
          ],
          introspection: [
            "What must you see clearly now?",
            "Where are you avoiding truth?",
            "How can you cultivate awareness?",
          ],
        },
        anatomy:
          "Fire above Fire forms the image of sustained light.\n\nRepetition emphasizes awareness.\n\nLight requires fuel; consciousness needs nourishment.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Insight",
            description: "Understanding begins.",
          },
          {
            position: 2,
            type: 0,
            name: "Testing Clarity",
            description: "Doubt may arise.",
          },
          {
            position: 3,
            type: 1,
            name: "Deepening Awareness",
            description: "Insight stabilizes.",
          },
          {
            position: 4,
            type: 1,
            name: "Radiance",
            description: "Light influences others.",
          },
          {
            position: 5,
            type: 0,
            name: "Risk of Overconfidence",
            description: "Certainty may distort.",
          },
          {
            position: 6,
            type: 1,
            name: "Sustained Light",
            description: "Clarity becomes stable.",
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
          "Vliv symbolizuje jemné působení mezi lidmi nebo silami. Nejde o tlak ani manipulaci, ale o přirozenou rezonanci, která vzniká otevřeností.\n\nPsychologicky se tento hexagram vztahuje k citlivosti a schopnosti reagovat. Vztah nebo situace se vyvíjí skrze vzájemné naladění.\n\nSkutečný vliv nepřichází z dominance, ale z autenticity. To, co je pravdivé, přirozeně přitahuje.\n\nHexagram ukazuje, že otevřené srdce je silnější než kontrola. Přitažlivost vzniká ze souladu, nikoli z tlaku.",
        oracle: {
          interpretation: [
            "Jednej jemně, ne silou.",
            "Buď otevřený vzájemnému působení.",
            "Nech věci vznikat přirozeně.",
          ],
          introspection: [
            "Kde právě vzniká vzájemná rezonance?",
            "Ovlivňuješ, nebo jsi ovlivňován?",
            "Jednáš autenticky?",
          ],
        },
        anatomy:
          "Jezero nad Horou vytváří obraz radosti spočívající na stabilním základu. Hora představuje klid a pevnost, Jezero otevřenost a sdílení.\n\nVliv vzniká, když stabilita podporuje citlivost.\n\nAnatomie hexagramu zdůrazňuje rovnováhu mezi vnitřní pevností a vnější otevřeností.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První cit",
            description: "Vzniká jemné naladění.",
          },
          {
            position: 2,
            type: 1,
            name: "Vzájemná otevřenost",
            description: "Rezonance sílí.",
          },
          {
            position: 3,
            type: 1,
            name: "Riziko přehnané reakce",
            description: "Emoce mohou převládnout.",
          },
          {
            position: 4,
            type: 1,
            name: "Stabilní spojení",
            description: "Vliv je vyvážený.",
          },
          {
            position: 5,
            type: 0,
            name: "Vnitřní jistota",
            description: "Spojení je pevné.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnaná citlivost",
            description: "Nadměrná reakce může narušit harmonii.",
          },
        ],
      },
      en: {
        name: "Influence",
        meaning:
          "Influence represents subtle interaction between forces or people. It is not pressure, but natural resonance born from openness.\n\nPsychologically, it reflects sensitivity and responsiveness. Relationships evolve through mutual attunement.\n\nTrue influence arises from authenticity, not dominance.\n\nOpen-hearted presence creates attraction through harmony.",
        oracle: {
          interpretation: [
            "Act gently rather than forcefully.",
            "Remain open to mutual influence.",
            "Allow things to unfold naturally.",
          ],
          introspection: [
            "Where is resonance forming?",
            "Are you influencing or being influenced?",
            "Are you acting authentically?",
          ],
        },
        anatomy:
          "Lake above Mountain creates joy resting on stability. Mountain symbolizes firmness; Lake openness.\n\nInfluence emerges when stability supports sensitivity.\n\nBalance between inner strength and outer receptivity is essential.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Feeling",
            description: "Subtle attunement begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Mutual Openness",
            description: "Resonance deepens.",
          },
          {
            position: 3,
            type: 1,
            name: "Emotional Excess",
            description: "Reaction may become exaggerated.",
          },
          {
            position: 4,
            type: 1,
            name: "Stable Connection",
            description: "Influence is balanced.",
          },
          {
            position: 5,
            type: 0,
            name: "Inner Certainty",
            description: "Connection stabilizes.",
          },
          {
            position: 6,
            type: 0,
            name: "Over-Sensitivity",
            description: "Excess emotion disrupts harmony.",
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
    elements: [4, 3],
    lines: [0, 1, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Trvání",
        meaning:
          "Trvání symbolizuje stálost a vytrvalost v čase. Nejde o strnulost, ale o schopnost udržet směr i přes proměny.\n\nPsychologicky tento hexagram vyjadřuje věrnost hodnotám a dlouhodobé úsilí. Stabilita nevzniká z rigidity, ale z vědomého závazku.\n\nTrvání vyžaduje rytmus – pohyb a klid ve správném poměru.\n\nHexagram učí, že skutečná síla se projevuje v kontinuitě. Dlouhodobá práce přináší hlubší výsledky než krátkodobý impuls.",
        oracle: {
          interpretation: [
            "Zachovej směr.",
            "Buduj stabilitu krok za krokem.",
            "Vytrvalost přináší plody.",
          ],
          introspection: [
            "V čem je třeba vytrvat?",
            "Držíš se svých hodnot?",
            "Co vyžaduje dlouhodobý závazek?",
          ],
        },
        anatomy:
          "Hrom nad Větrem vytváří obraz pohybu v rytmu. Hrom symbolizuje iniciativu, Vítr postupné pronikání.\n\nTrvání vzniká, když se impuls opakuje s vědomým směrem.\n\nAnatomie hexagramu ukazuje, že kontinuita je kombinací energie a trpělivosti.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Počáteční závazek",
            description: "Vzniká rozhodnutí vytrvat.",
          },
          {
            position: 2,
            type: 1,
            name: "Stabilizace",
            description: "Směr se upevňuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Zkouška",
            description: "Objevují se překážky.",
          },
          {
            position: 4,
            type: 1,
            name: "Upevnění rytmu",
            description: "Vytrvalost se stává přirozenou.",
          },
          {
            position: 5,
            type: 0,
            name: "Zralost",
            description: "Stabilita je dosažena.",
          },
          {
            position: 6,
            type: 0,
            name: "Riziko stagnace",
            description: "Nadměrná setrvačnost může brzdit růst.",
          },
        ],
      },
      en: {
        name: "Duration",
        meaning:
          "Duration represents constancy through time. It is not rigidity, but the ability to maintain direction amidst change.\n\nPsychologically, it reflects commitment to values and sustained effort.\n\nStability arises from conscious dedication.\n\nEndurance brings deeper results than fleeting enthusiasm.",
        oracle: {
          interpretation: [
            "Maintain your direction.",
            "Build stability step by step.",
            "Perseverance bears fruit.",
          ],
          introspection: [
            "Where must you persist?",
            "Are you aligned with your values?",
            "What requires long-term commitment?",
          ],
        },
        anatomy:
          "Thunder above Wind symbolizes rhythmic motion. Thunder initiates; Wind sustains.\n\nDuration arises from repeated impulse guided by intention.\n\nContinuity requires both energy and patience.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Commitment",
            description: "Decision to persist.",
          },
          {
            position: 2,
            type: 1,
            name: "Stabilization",
            description: "Direction becomes firm.",
          },
          {
            position: 3,
            type: 1,
            name: "Trial",
            description: "Obstacles test endurance.",
          },
          {
            position: 4,
            type: 1,
            name: "Rhythmic Continuity",
            description: "Persistence becomes natural.",
          },
          {
            position: 5,
            type: 0,
            name: "Maturity",
            description: "Stability achieved.",
          },
          {
            position: 6,
            type: 0,
            name: "Risk of Stagnation",
            description: "Excess constancy may hinder growth.",
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
    lines: [0, 0, 1, 1, 1, 1],
    content: {
      cs: {
        name: "Ústup",
        meaning:
          "Ústup symbolizuje vědomé stažení se z nepříznivé situace. Nejde o porážku ani zbabělost, ale o strategické rozpoznání okamžiku, kdy pokračování by znamenalo ztrátu integrity.\n\nPsychologicky se tento hexagram týká hranic. Člověk si uvědomuje, že ne každá konfrontace stojí za vybojování. Někdy je moudřejší ustoupit, než se vyčerpat v neplodném střetu.\n\nÚstup vyžaduje sílu. Slabost prchá ze strachu, zatímco moudrost ustupuje z jasnosti.\n\nHexagram učí, že zachování vnitřní stability má větší hodnotu než vnější vítězství.",
        oracle: {
          interpretation: [
            "Rozpoznej, kdy je čas ustoupit.",
            "Chraň svou energii.",
            "Nepleť si moudrost s porážkou.",
          ],
          introspection: [
            "Kde zbytečně bojuješ?",
            "Co by znamenalo ustoupit bez pocitu selhání?",
            "Jak můžeš zachovat svou důstojnost?",
          ],
        },
        anatomy:
          "Hora nad Nebem vytváří obraz pevnosti, která se stahuje. Nebe představuje tvořivou sílu, Hora hranici a zastavení.\n\nSíla je přítomná, ale je vědomě omezena.\n\nAnatomie hexagramu ukazuje, že ústup je aktivní rozhodnutí, nikoli pasivní únik.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První signál",
            description: "Objevuje se potřeba stáhnout se.",
          },
          {
            position: 2,
            type: 1,
            name: "Vnitřní rozhodnutí",
            description: "Ústup je přijat jako vědomá volba.",
          },
          {
            position: 3,
            type: 0,
            name: "Riziko váhání",
            description: "Nerozhodnost může zkomplikovat situaci.",
          },
          {
            position: 4,
            type: 0,
            name: "Upevnění hranic",
            description: "Odstup přináší stabilitu.",
          },
          {
            position: 5,
            type: 0,
            name: "Zachování integrity",
            description: "Důstojnost je uchována.",
          },
          {
            position: 6,
            type: 0,
            name: "Úplné stažení",
            description: "Vnější kontakt se minimalizuje.",
          },
        ],
      },
      en: {
        name: "Retreat",
        meaning:
          "Retreat represents conscious withdrawal from unfavorable circumstances. It is not defeat but strategic clarity.\n\nPsychologically, it concerns boundaries. Not every conflict deserves engagement.\n\nRetreat requires strength. Wisdom steps back to preserve integrity.\n\nTrue victory may lie in maintaining inner stability.",
        oracle: {
          interpretation: [
            "Recognize when to step back.",
            "Preserve your energy.",
            "Do not confuse wisdom with defeat.",
          ],
          introspection: [
            "Where are you fighting unnecessarily?",
            "What would dignified withdrawal look like?",
            "How can you protect your integrity?",
          ],
        },
        anatomy:
          "Mountain above Heaven shows strength contained. Heaven symbolizes creative force; Mountain sets boundaries.\n\nEnergy is restrained by conscious limit.\n\nWithdrawal is an active choice, not passive escape.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Signal",
            description: "Need for retreat appears.",
          },
          {
            position: 2,
            type: 1,
            name: "Inner Decision",
            description: "Withdrawal is consciously chosen.",
          },
          {
            position: 3,
            type: 0,
            name: "Hesitation",
            description: "Indecision complicates matters.",
          },
          {
            position: 4,
            type: 0,
            name: "Boundary Established",
            description: "Distance restores stability.",
          },
          {
            position: 5,
            type: 0,
            name: "Integrity Preserved",
            description: "Dignity remains intact.",
          },
          {
            position: 6,
            type: 0,
            name: "Complete Withdrawal",
            description: "External engagement ends.",
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
    elements: [1, 3],
    lines: [1, 1, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Velká síla",
        meaning:
          "Velká síla symbolizuje období intenzivní energie a expanze. Síla je viditelná a aktivní, ale zároveň vyžaduje kontrolu.\n\nPsychologicky jde o fázi, kdy člověk cítí moc a odhodlání. Tento stav může přinést významné posuny, pokud je veden vědomím.\n\nBez vnitřní disciplíny se síla mění v agresi.\n\nHexagram učí, že opravdová moc je v rovnováze mezi energií a etikou.",
        oracle: {
          interpretation: [
            "Používej sílu s rozvahou.",
            "Jednej odvážně, ale ne bezhlavě.",
            "Respektuj hranice druhých.",
          ],
          introspection: [
            "Kde můžeš projevit svou sílu konstruktivně?",
            "Jednáš z integrity, nebo z ega?",
            "Jak můžeš vyvážit energii s pokorou?",
          ],
        },
        anatomy:
          "Hrom nad Nebem vytváří obraz silného pohybu podporovaného tvořivou energií.\n\nSíla roste zdola a expanduje vzhůru.\n\nAnatomie hexagramu ukazuje dynamiku růstu, která musí být řízena vědomím.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První nával síly",
            description: "Energie je čerstvá a intenzivní.",
          },
          {
            position: 2,
            type: 1,
            name: "Stabilizace síly",
            description: "Odvaha se upevňuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Riziko přehnanosti",
            description: "Hrozí překročení míry.",
          },
          {
            position: 4,
            type: 1,
            name: "Vědomé vedení",
            description: "Síla je řízena rozumem.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyvážená moc",
            description: "Energie je harmonická.",
          },
          {
            position: 6,
            type: 0,
            name: "Útlum",
            description: "Intenzita se přirozeně snižuje.",
          },
        ],
      },
      en: {
        name: "The Power of the Great",
        meaning:
          "The Power of the Great represents strong and visible energy. It is a time of expansion and decisive movement.\n\nPsychologically, it reflects determination and vitality. Progress is possible if guided consciously.\n\nWithout discipline, strength turns into aggression.\n\nTrue power balances energy with ethics.",
        oracle: {
          interpretation: [
            "Use strength wisely.",
            "Act boldly but not recklessly.",
            "Respect boundaries.",
          ],
          introspection: [
            "Where can your strength serve constructively?",
            "Are you acting from ego or integrity?",
            "How can you balance power with humility?",
          ],
        },
        anatomy:
          "Thunder above Heaven symbolizes dynamic expansion. Creative force supports powerful movement.\n\nEnergy rises and expands.\n\nGrowth must be guided by awareness.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Surge",
            description: "Energy is intense.",
          },
          {
            position: 2,
            type: 1,
            name: "Stabilized Strength",
            description: "Courage strengthens.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Risk",
            description: "Danger of overreach.",
          },
          {
            position: 4,
            type: 1,
            name: "Conscious Leadership",
            description: "Strength guided by reason.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Power",
            description: "Energy harmonized.",
          },
          {
            position: 6,
            type: 0,
            name: "Decline",
            description: "Intensity naturally subsides.",
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
    elements: [2, 6],
    lines: [0, 0, 0, 1, 0, 1],
    content: {
      cs: {
        name: "Pokrok",
        meaning:
          "Pokrok symbolizuje postupné vyjasňování a vzestup do světla. Je to období, kdy se věci dávají do pohybu správným směrem a výsledky se začínají ukazovat navenek.\n\nPsychologicky jde o fázi růstu sebevědomí a uznání. Člověk je viditelnější, jeho práce přináší odezvu a okolí si začíná všímat jeho kvality.\n\nPokrok však vyžaduje vděčnost a pokoru. Světlo přitahuje pozornost, ale zároveň zvyšuje odpovědnost.\n\nHexagram učí, že skutečný vzestup je udržitelný jen tehdy, pokud je postaven na vnitřní stabilitě, nikoli na touze po uznání.",
        oracle: {
          interpretation: [
            "Využij příznivého období k rozvoji.",
            "Buď otevřený uznání, ale neztrácej pokoru.",
            "Rozšiřuj své světlo postupně.",
          ],
          introspection: [
            "Jak můžeš využít současného momentum?",
            "Jednáš z touhy po růstu, nebo po uznání?",
            "Jak si zachovat vnitřní rovnováhu ve vzestupu?",
          ],
        },
        anatomy:
          "Oheň nad Zemí vytváří obraz světla, které vychází nad horizont. Země představuje základ a podporu, Oheň vědomí a viditelnost.\n\nPokrok vzniká, když je světlo ukotveno v pevné půdě.\n\nAnatomie hexagramu ukazuje, že stabilní základ umožňuje přirozený vzestup bez přepětí.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První uznání",
            description: "Objevuje se první známka postupu.",
          },
          {
            position: 2,
            type: 0,
            name: "Růst důvěry",
            description: "Sebevědomí se upevňuje.",
          },
          {
            position: 3,
            type: 0,
            name: "Viditelnost",
            description: "Úsilí je jasně patrné.",
          },
          {
            position: 4,
            type: 1,
            name: "Aktivní expanze",
            description: "Postup je zřetelný a energický.",
          },
          {
            position: 5,
            type: 0,
            name: "Zralé uznání",
            description: "Úspěch je stabilní a respektovaný.",
          },
          {
            position: 6,
            type: 1,
            name: "Riziko přehřátí",
            description: "Nadměrná ambice může ohrozit rovnováhu.",
          },
        ],
      },
      en: {
        name: "Progress",
        meaning:
          "Progress represents rising into visibility and light. It marks a time when efforts bear fruit and direction becomes clearer.\n\nPsychologically, it reflects growing confidence and recognition. One’s work gains attention and influence.\n\nYet visibility brings responsibility.\n\nTrue advancement remains sustainable only when grounded in inner stability rather than the desire for praise.",
        oracle: {
          interpretation: [
            "Use this favorable momentum wisely.",
            "Accept recognition with humility.",
            "Expand steadily rather than abruptly.",
          ],
          introspection: [
            "How can you build on current progress?",
            "Are you seeking growth or validation?",
            "What keeps you grounded in success?",
          ],
        },
        anatomy:
          "Fire above Earth symbolizes light rising from stable ground.\n\nProgress depends on solid foundation.\n\nStable growth emerges from grounded awareness.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Recognition",
            description: "First signs of advancement.",
          },
          {
            position: 2,
            type: 0,
            name: "Growing Confidence",
            description: "Trust strengthens.",
          },
          {
            position: 3,
            type: 0,
            name: "Visibility",
            description: "Effort becomes noticeable.",
          },
          {
            position: 4,
            type: 1,
            name: "Active Expansion",
            description: "Movement accelerates.",
          },
          {
            position: 5,
            type: 0,
            name: "Mature Success",
            description: "Achievement stabilizes.",
          },
          {
            position: 6,
            type: 1,
            name: "Overextension Risk",
            description: "Ambition may exceed balance.",
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
    lines: [1, 0, 1, 0, 0, 0],
    content: {
      cs: {
        name: "Zatemnění světla",
        meaning:
          "Zatemnění světla symbolizuje období, kdy jasnost musí být chráněna před nepříznivými podmínkami. Není čas zářit navenek, ale uchovat si světlo uvnitř.\n\nPsychologicky jde o situaci, kdy otevřenost může vést ke zranitelnosti. Moudrost spočívá ve schopnosti přizpůsobit se okolnostem, aniž by člověk zradil své hodnoty.\n\nTento hexagram neznamená porážku, ale strategickou skrytost.\n\nSvětlo, které je chráněno, může přežít temnotu a později znovu zazářit.",
        oracle: {
          interpretation: [
            "Chraň své vnitřní světlo.",
            "Nevystavuj se zbytečnému riziku.",
            "Buď opatrný, ale ne zatrpklý.",
          ],
          introspection: [
            "Kde je třeba větší diskrétnost?",
            "Jak můžeš ochránit svou integritu?",
            "Co je třeba nyní uchovat v tichosti?",
          ],
        },
        anatomy:
          "Země nad Ohněm vytváří obraz světla skrytého pod povrchem. Oheň představuje vědomí, Země ochranu a zakrytí.\n\nSvětlo není zhaslé, pouze dočasně zastřené.\n\nAnatomie hexagramu ukazuje, že vnější temnota nemusí znamenat ztrátu vnitřní jasnosti.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První ohrožení",
            description: "Světlo je vystaveno tlaku.",
          },
          {
            position: 2,
            type: 0,
            name: "Stažení",
            description: "Dochází k vědomému ústupu.",
          },
          {
            position: 3,
            type: 1,
            name: "Skrytá vytrvalost",
            description: "Vnitřní síla zůstává.",
          },
          {
            position: 4,
            type: 0,
            name: "Tlak okolí",
            description: "Podmínky nejsou příznivé.",
          },
          {
            position: 5,
            type: 0,
            name: "Ochrana jádra",
            description: "Hodnoty jsou uchovány.",
          },
          {
            position: 6,
            type: 0,
            name: "Přežití světla",
            description: "Světlo přetrvává pod povrchem.",
          },
        ],
      },
      en: {
        name: "Darkening of the Light",
        meaning:
          "Darkening of the Light represents a time when clarity must be protected rather than displayed.\n\nPsychologically, openness may lead to vulnerability. Adaptation becomes necessary.\n\nThis is not defeat but strategic concealment.\n\nLight preserved within can survive darkness and shine again later.",
        oracle: {
          interpretation: [
            "Protect your inner light.",
            "Avoid unnecessary exposure.",
            "Remain cautious yet true.",
          ],
          introspection: [
            "Where is discretion needed?",
            "How can you safeguard your integrity?",
            "What must be kept quietly alive?",
          ],
        },
        anatomy:
          "Earth above Fire shows light hidden beneath the surface.\n\nThe flame remains, though concealed.\n\nExternal darkness does not extinguish inner clarity.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Threat",
            description: "Light faces pressure.",
          },
          {
            position: 2,
            type: 0,
            name: "Withdrawal",
            description: "Conscious retreat occurs.",
          },
          {
            position: 3,
            type: 1,
            name: "Hidden Strength",
            description: "Inner power persists.",
          },
          {
            position: 4,
            type: 0,
            name: "Adverse Conditions",
            description: "Environment is unfavorable.",
          },
          {
            position: 5,
            type: 0,
            name: "Core Protection",
            description: "Values are safeguarded.",
          },
          {
            position: 6,
            type: 0,
            name: "Surviving Flame",
            description: "Light endures beneath concealment.",
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
    elements: [6, 4],
    lines: [1, 0, 1, 0, 1, 1],
    content: {
      cs: {
        name: "Rodina",
        meaning:
          "Rodina symbolizuje strukturu vztahů, ve kterých má každý své místo a odpovědnost. Nejde pouze o biologickou rodinu, ale o jakékoli společenství založené na sdílených hodnotách.\n\nPsychologicky tento hexagram upozorňuje na roli, kterou člověk zastává v rámci systému. Harmonie vzniká tehdy, když každý přebírá odpovědnost za svou část.\n\nStabilita rodiny není založena na kontrole, ale na důvěře a jasně vymezených hranicích.\n\nHexagram učí, že pořádek začíná uvnitř. Pokud je člověk vnitřně vyrovnaný, jeho vztahy se přirozeně uspořádají.",
        oracle: {
          interpretation: [
            "Pečuj o vztahy s vědomou odpovědností.",
            "Stanov jasné hranice.",
            "Buduj harmonii zevnitř.",
          ],
          introspection: [
            "Jakou roli právě zastáváš?",
            "Plníš své závazky vůči druhým?",
            "Je ve tvých vztazích rovnováha?",
          ],
        },
        anatomy:
          "Vítr nad Ohněm vytváří obraz komunikace uvnitř domu. Oheň symbolizuje jasnost a střed, Vítr pronikání a vliv.\n\nRodinná harmonie vzniká, když je světlo v centru a komunikace je otevřená.\n\nAnatomie hexagramu zdůrazňuje, že zdravý systém vyžaduje jasný střed a citlivé propojení mezi členy.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Stanovení hranic",
            description: "Základní pravidla jsou vymezena.",
          },
          {
            position: 2,
            type: 0,
            name: "Podpora",
            description: "Vzniká stabilní zázemí.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí",
            description: "Objevují se konflikty role.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilizace",
            description: "Rovnováha je obnovena.",
          },
          {
            position: 5,
            type: 1,
            name: "Zralé vedení",
            description: "Vztahy jsou řízeny moudře.",
          },
          {
            position: 6,
            type: 1,
            name: "Riziko dominance",
            description: "Přehnaná kontrola může narušit harmonii.",
          },
        ],
      },
      en: {
        name: "The Family",
        meaning:
          "The Family represents structured relationships in which each member holds responsibility. It refers not only to biological family, but to any shared community.\n\nPsychologically, it reflects one’s role within a system. Harmony arises when each person fulfills their part.\n\nStability depends on trust and clear boundaries.\n\nOrder begins within; balanced individuals create balanced relationships.",
        oracle: {
          interpretation: [
            "Act responsibly in relationships.",
            "Clarify boundaries.",
            "Build harmony from within.",
          ],
          introspection: [
            "What role are you playing?",
            "Are you honoring your responsibilities?",
            "Is there balance in your relationships?",
          ],
        },
        anatomy:
          "Wind above Fire shows communication within the household. Fire is the center; Wind spreads influence.\n\nHarmony requires clear center and open exchange.\n\nHealthy systems depend on both structure and communication.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Setting Boundaries",
            description: "Rules are established.",
          },
          {
            position: 2,
            type: 0,
            name: "Support",
            description: "Foundation stabilizes.",
          },
          {
            position: 3,
            type: 1,
            name: "Role Conflict",
            description: "Tensions arise.",
          },
          {
            position: 4,
            type: 0,
            name: "Restored Balance",
            description: "Equilibrium returns.",
          },
          {
            position: 5,
            type: 1,
            name: "Mature Leadership",
            description: "Guidance is wise.",
          },
          {
            position: 6,
            type: 1,
            name: "Dominance Risk",
            description: "Excess control disrupts harmony.",
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
    lines: [1, 1, 0, 1, 0, 1],
    content: {
      cs: {
        name: "Protiklad",
        meaning:
          "Protiklad symbolizuje rozdílnost pohledů a napětí mezi dvěma směry. Neznamená nutně konflikt, ale rozdílné perspektivy.\n\nPsychologicky jde o fázi, kdy je důležité respektovat odlišnost bez nutnosti okamžitého sjednocení.\n\nRozdíl může být zdrojem kreativity, pokud není potlačován.\n\nHexagram učí, že i protikladné síly mohou koexistovat, pokud je mezi nimi vědomý odstup a respekt.",
        oracle: {
          interpretation: [
            "Respektuj rozdílné pohledy.",
            "Neusiluj o násilné sjednocení.",
            "Hledej společný bod bez ztráty identity.",
          ],
          introspection: [
            "Kde vzniká napětí mezi rozdíly?",
            "Dokážeš přijmout jiný názor?",
            "Jak může odlišnost obohatit situaci?",
          ],
        },
        anatomy:
          "Oheň nad Jezerem vytváří obraz světla odrážejícího se na hladině. Obě síly mají jiný směr, ale mohou spolu existovat.\n\nTato kombinace ukazuje napětí, které nemusí být destruktivní.\n\nAnatomie hexagramu připomíná, že harmonie někdy spočívá v respektované rozdílnosti.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První rozdíl",
            description: "Objevuje se nesoulad.",
          },
          {
            position: 2,
            type: 0,
            name: "Uznání odlišnosti",
            description: "Rozdíl je přijat.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí",
            description: "Kontrast se zvýrazňuje.",
          },
          {
            position: 4,
            type: 1,
            name: "Dialog",
            description: "Probíhá výměna názorů.",
          },
          {
            position: 5,
            type: 1,
            name: "Respekt",
            description: "Vzniká vzájemné pochopení.",
          },
          {
            position: 6,
            type: 0,
            name: "Uvolnění napětí",
            description: "Rozdíl již není hrozbou.",
          },
        ],
      },
      en: {
        name: "Opposition",
        meaning:
          "Opposition represents differing perspectives and tension between directions. It does not necessarily mean conflict.\n\nPsychologically, it calls for respect of difference without forced unity.\n\nDifference can foster creativity when acknowledged.\n\nHarmony may arise from conscious distance rather than uniformity.",
        oracle: {
          interpretation: [
            "Respect differing views.",
            "Do not force agreement.",
            "Seek common ground while honoring identity.",
          ],
          introspection: [
            "Where does tension arise from difference?",
            "Can you accept another viewpoint?",
            "How can contrast become constructive?",
          ],
        },
        anatomy:
          "Fire above Lake shows light reflecting on water. Forces move differently yet coexist.\n\nTension need not destroy harmony.\n\nBalanced opposition enriches awareness.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Difference",
            description: "Disagreement appears.",
          },
          {
            position: 2,
            type: 0,
            name: "Acknowledgment",
            description: "Difference is recognized.",
          },
          {
            position: 3,
            type: 1,
            name: "Heightened Contrast",
            description: "Tension intensifies.",
          },
          {
            position: 4,
            type: 1,
            name: "Dialogue",
            description: "Exchange occurs.",
          },
          {
            position: 5,
            type: 1,
            name: "Mutual Respect",
            description: "Understanding grows.",
          },
          {
            position: 6,
            type: 0,
            name: "Resolution",
            description: "Tension softens.",
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
    elements: [7, 5],
    lines: [0, 0, 1, 0, 1, 0],
    content: {
      cs: {
        name: "Překážka",
        meaning:
          "Překážka symbolizuje zastavení pohybu a nutnost změny směru. Cesta vpřed je ztížena nebo zcela blokována. Tento hexagram nepřináší okamžité řešení, ale upozorňuje na potřebu přehodnocení.\n\nPsychologicky jde o moment, kdy se člověk střetává s limity – vlastními i vnějšími. Může se objevit frustrace, pocit stagnace nebo izolace.\n\nPřekážka není konec, ale signál. Ukazuje, že současný směr není udržitelný.\n\nHexagram učí hledat podporu, měnit perspektivu a nebát se ustoupit, pokud je to nutné. Obtíž je impulsem k hlubšímu porozumění.",
        oracle: {
          interpretation: [
            "Nepokračuj silou proti zdi.",
            "Změň úhel pohledu.",
            "Hledej podporu.",
          ],
          introspection: [
            "Co ti tato překážka ukazuje?",
            "Zkoušíš tlačit místo přizpůsobení?",
            "Kdo ti může pomoci?",
          ],
        },
        anatomy:
          "Hora nad Vodou vytváří obraz blokovaného toku. Voda symbolizuje pohyb, Hora zastavení.\n\nEnergie nemůže plynout přirozeně.\n\nAnatomie hexagramu zdůrazňuje, že někdy je nutné obejít překážku místo přímého střetu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První blok",
            description: "Pohyb je omezen.",
          },
          {
            position: 2,
            type: 1,
            name: "Hledání řešení",
            description: "Vzniká iniciativa ke změně.",
          },
          {
            position: 3,
            type: 0,
            name: "Frustrace",
            description: "Pokus o průlom selhává.",
          },
          {
            position: 4,
            type: 0,
            name: "Zastavení",
            description: "Je nutné přehodnocení.",
          },
          {
            position: 5,
            type: 0,
            name: "Podpora",
            description: "Pomoc přichází zvenčí.",
          },
          {
            position: 6,
            type: 1,
            name: "Nový směr",
            description: "Cesta se otevírá jinudy.",
          },
        ],
      },
      en: {
        name: "Obstruction",
        meaning:
          "Obstruction represents blocked movement and the need to change direction. The path forward is difficult or entirely halted.\n\nPsychologically, it reflects confrontation with limits — internal or external. Frustration may arise.\n\nObstruction is not an end but a signal.\n\nIt invites support, perspective shift, and strategic retreat if necessary.",
        oracle: {
          interpretation: [
            "Do not force your way forward.",
            "Shift your perspective.",
            "Seek assistance.",
          ],
          introspection: [
            "What is this obstacle teaching you?",
            "Are you pushing instead of adapting?",
            "Who can support you?",
          ],
        },
        anatomy:
          "Mountain above Water blocks the natural flow. Water seeks movement; Mountain stops it.\n\nEnergy is restrained.\n\nSometimes the path lies around, not through, the obstacle.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Block",
            description: "Movement slows.",
          },
          {
            position: 2,
            type: 1,
            name: "Search for Alternative",
            description: "Initiative arises.",
          },
          {
            position: 3,
            type: 0,
            name: "Frustration",
            description: "Direct attempt fails.",
          },
          {
            position: 4,
            type: 0,
            name: "Pause",
            description: "Reevaluation required.",
          },
          {
            position: 5,
            type: 0,
            name: "Support",
            description: "External help appears.",
          },
          {
            position: 6,
            type: 1,
            name: "New Direction",
            description: "Alternative path opens.",
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
          "Uvolnění symbolizuje rozpuštění napětí po období obtíží. To, co bylo sevřené, se začíná otevírat.\n\nPsychologicky jde o moment úlevy a návratu rovnováhy. Situace, která byla komplikovaná, se vyjasňuje.\n\nUvolnění však vyžaduje vědomé rozhodnutí pustit to, co už není třeba držet.\n\nHexagram učí, že odpuštění a uvolnění starého napětí vytváří prostor pro nový začátek.",
        oracle: {
          interpretation: [
            "Pusť staré napětí.",
            "Využij příležitost k očistě.",
            "Jednej rychle, dokud je cesta otevřená.",
          ],
          introspection: [
            "Co můžeš nyní uvolnit?",
            "Držíš něco, co už neslouží?",
            "Jak můžeš obnovit rovnováhu?",
          ],
        },
        anatomy:
          "Hrom nad Vodou vytváří obraz bouře, která pročistí vzduch. Hrom přináší pohyb, Voda uvolnění.\n\nNapětí je přerušeno.\n\nAnatomie hexagramu ukazuje, že pohyb a očista vedou k obnově toku.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První uvolnění",
            description: "Napětí se snižuje.",
          },
          {
            position: 2,
            type: 1,
            name: "Aktivní očista",
            description: "Dochází k vědomému řešení.",
          },
          {
            position: 3,
            type: 0,
            name: "Návrat rovnováhy",
            description: "Situace se stabilizuje.",
          },
          {
            position: 4,
            type: 1,
            name: "Rozhodné jednání",
            description: "Problém je řešen přímo.",
          },
          {
            position: 5,
            type: 0,
            name: "Klid",
            description: "Napětí je pryč.",
          },
          {
            position: 6,
            type: 0,
            name: "Obnovený tok",
            description: "Energie plyne přirozeně.",
          },
        ],
      },
      en: {
        name: "Release",
        meaning:
          "Release represents the dissolution of tension after difficulty. What was tight begins to open.\n\nPsychologically, it marks relief and restored balance.\n\nRelease requires letting go consciously.\n\nForgiveness and resolution create space for renewal.",
        oracle: {
          interpretation: [
            "Let go of tension.",
            "Use this moment for cleansing.",
            "Act while the path is open.",
          ],
          introspection: [
            "What can you release now?",
            "Are you holding onto what no longer serves?",
            "How can balance be restored?",
          ],
        },
        anatomy:
          "Thunder above Water shows storm clearing the air. Movement disrupts stagnation.\n\nTension dissolves.\n\nFlow is restored through decisive action.",
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
            name: "Active Clearing",
            description: "Conscious resolution.",
          },
          {
            position: 3,
            type: 0,
            name: "Stabilization",
            description: "Balance returns.",
          },
          {
            position: 4,
            type: 1,
            name: "Direct Action",
            description: "Problem addressed.",
          },
          {
            position: 5,
            type: 0,
            name: "Calm",
            description: "Peace emerges.",
          },
          {
            position: 6,
            type: 0,
            name: "Restored Flow",
            description: "Energy moves freely.",
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
    elements: [8, 7],
    lines: [1, 1, 0, 0, 0, 1],
    content: {
      cs: {
        name: "Zmenšení",
        meaning:
          "Zmenšení symbolizuje vědomé omezení, redukci nebo oběť ve prospěch rovnováhy. Není to ztráta způsobená tlakem okolností, ale dobrovolné zjednodušení.\n\nPsychologicky jde o schopnost vzdát se části svého komfortu či ambicí, aby vznikl prostor pro hlubší stabilitu. Zmenšení může přinést překvapivou úlevu.\n\nTento hexagram učí, že méně může znamenat více. Odstranění nadbytečného umožňuje vyniknout podstatnému.\n\nSkutečná síla spočívá v rozpoznání, co už není třeba držet.",
        oracle: {
          interpretation: [
            "Zjednodušuj vědomě.",
            "Odevzdej to, co je nadbytečné.",
            "Hledej rovnováhu skrze redukci.",
          ],
          introspection: [
            "Co můžeš nyní pustit?",
            "Kde tě nadbytek zatěžuje?",
            "Co je skutečně podstatné?",
          ],
        },
        anatomy:
          "Hora nad Jezerem vytváří obraz omezení radosti. Hora představuje hranici, Jezero otevřenost.\n\nRadost je zadržena, aby byla zachována stabilita.\n\nAnatomie hexagramu ukazuje, že omezení může být ochranné a konstruktivní.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První redukce",
            description: "Dochází k vědomému omezení.",
          },
          {
            position: 2,
            type: 1,
            name: "Dobrovolná oběť",
            description: "Člověk něco odevzdává.",
          },
          {
            position: 3,
            type: 0,
            name: "Pocit ztráty",
            description: "Objevuje se pochybnost.",
          },
          {
            position: 4,
            type: 0,
            name: "Vyrovnání",
            description: "Rovnováha se obnovuje.",
          },
          {
            position: 5,
            type: 0,
            name: "Vnitřní klid",
            description: "Zmenšení přináší stabilitu.",
          },
          {
            position: 6,
            type: 1,
            name: "Nadměrná askeze",
            description: "Přílišné omezení může oslabit.",
          },
        ],
      },
      en: {
        name: "Decrease",
        meaning:
          "Decrease represents conscious reduction or sacrifice for the sake of balance. It is voluntary simplification rather than imposed loss.\n\nPsychologically, it reflects the ability to let go of excess to gain clarity and stability.\n\nLess can truly become more.\n\nStrength lies in knowing what is no longer necessary.",
        oracle: {
          interpretation: [
            "Simplify consciously.",
            "Release what is excessive.",
            "Seek balance through reduction.",
          ],
          introspection: [
            "What can you let go of?",
            "Where is excess weighing you down?",
            "What truly matters?",
          ],
        },
        anatomy:
          "Mountain above Lake shows joy limited by boundary.\n\nRestriction preserves equilibrium.\n\nLimitation can serve protection and growth.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Reduction",
            description: "Conscious limitation begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Voluntary Sacrifice",
            description: "Something is given up.",
          },
          {
            position: 3,
            type: 0,
            name: "Sense of Loss",
            description: "Doubt arises.",
          },
          {
            position: 4,
            type: 0,
            name: "Rebalancing",
            description: "Equilibrium returns.",
          },
          {
            position: 5,
            type: 0,
            name: "Inner Calm",
            description: "Stability deepens.",
          },
          {
            position: 6,
            type: 1,
            name: "Excessive Restriction",
            description: "Over-limitation weakens vitality.",
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
    elements: [3, 4],
    lines: [1, 0, 0, 0, 1, 1],
    content: {
      cs: {
        name: "Zvýšení",
        meaning:
          "Zvýšení symbolizuje období růstu a podpory. Energie je posilována a směřována k rozvoji.\n\nPsychologicky jde o fázi expanze, kdy příležitosti přicházejí přirozeně. Je to vhodný čas investovat energii do smysluplných projektů.\n\nZvýšení však vyžaduje zodpovědnost. To, co roste, musí být správně řízeno.\n\nHexagram učí, že skutečný růst je sdílený. Posílení jednoho prvku má prospět celku.",
        oracle: {
          interpretation: [
            "Využij podporu k rozvoji.",
            "Investuj do toho, co má dlouhodobý smysl.",
            "Sdílej svůj růst s ostatními.",
          ],
          introspection: [
            "Kde se objevuje příležitost k růstu?",
            "Jak můžeš přispět celku?",
            "Co je třeba posílit?",
          ],
        },
        anatomy:
          "Vítr nad Hromem vytváří obraz energie, která roste a šíří se. Hrom představuje iniciativu, Vítr postupné posilování.\n\nRůst je dynamický a zároveň trvalý.\n\nAnatomie hexagramu ukazuje, že expanze je udržitelná, pokud je vyvážená.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První impuls",
            description: "Objevuje se možnost růstu.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilní podpora",
            description: "Zázemí je posíleno.",
          },
          {
            position: 3,
            type: 0,
            name: "Růst důvěry",
            description: "Sebevědomí sílí.",
          },
          {
            position: 4,
            type: 1,
            name: "Expanze",
            description: "Aktivní rozvoj probíhá.",
          },
          {
            position: 5,
            type: 1,
            name: "Zralé zvýšení",
            description: "Růst je harmonický.",
          },
          {
            position: 6,
            type: 0,
            name: "Riziko nadměrnosti",
            description: "Přehnaná expanze může narušit rovnováhu.",
          },
        ],
      },
      en: {
        name: "Increase",
        meaning:
          "Increase represents growth and support. Energy strengthens and moves toward expansion.\n\nPsychologically, it signals opportunity and constructive development.\n\nGrowth requires responsibility.\n\nTrue increase benefits the whole, not only the individual.",
        oracle: {
          interpretation: [
            "Use support to develop.",
            "Invest in long-term growth.",
            "Share your gains.",
          ],
          introspection: [
            "Where is growth emerging?",
            "How can you contribute to the whole?",
            "What needs strengthening?",
          ],
        },
        anatomy:
          "Wind above Thunder symbolizes energy that expands and spreads. Thunder initiates; Wind sustains.\n\nGrowth is dynamic yet gradual.\n\nBalanced expansion ensures stability.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Opportunity",
            description: "Possibility appears.",
          },
          {
            position: 2,
            type: 0,
            name: "Support Strengthened",
            description: "Foundation improves.",
          },
          {
            position: 3,
            type: 0,
            name: "Growing Confidence",
            description: "Trust expands.",
          },
          {
            position: 4,
            type: 1,
            name: "Active Expansion",
            description: "Development accelerates.",
          },
          {
            position: 5,
            type: 1,
            name: "Harmonious Growth",
            description: "Increase stabilizes.",
          },
          {
            position: 6,
            type: 0,
            name: "Excess Risk",
            description: "Overgrowth threatens balance.",
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
        name: "Průlom",
        meaning:
          "Průlom symbolizuje rozhodné vystoupení proti tomu, co již není v souladu s pravdou. Je to okamžik, kdy se napětí nahromadilo natolik, že je nutné jasné vymezení.\n\nPsychologicky jde o fázi, kdy se člověk rozhodne ukončit vnitřní kompromisy. Mlčení nebo váhání už není možné.\n\nPrůlom však neznamená agresi. Vyžaduje klidnou rozhodnost a transparentnost.\n\nHexagram učí, že pravda má být vyjádřena otevřeně, ale bez hněvu. Skutečná síla spočívá v jasnosti, nikoli v útoku.",
        oracle: {
          interpretation: [
            "Jednej rozhodně a otevřeně.",
            "Vyjádři pravdu bez zbytečné tvrdosti.",
            "Ukonči to, co již neslouží.",
          ],
          introspection: [
            "Co je třeba jasně pojmenovat?",
            "Z čeho máš obavu vystoupit?",
            "Jak můžeš jednat pevně, ale klidně?",
          ],
        },
        anatomy:
          "Jezero nad Nebem vytváří obraz síly, která dosahuje vrcholu a musí být vyjádřena. Nebe symbolizuje tvořivou energii, Jezero komunikaci.\n\nTlak narůstá až k bodu vyjádření.\n\nAnatomie hexagramu ukazuje, že energie potřebuje transparentní výstup, jinak se může stát destruktivní.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První nespokojenost",
            description: "Napětí se začíná hromadit.",
          },
          {
            position: 2,
            type: 1,
            name: "Uvědomění problému",
            description: "Situace je jasně viděna.",
          },
          {
            position: 3,
            type: 1,
            name: "Růst tlaku",
            description: "Rozhodnutí dozrává.",
          },
          {
            position: 4,
            type: 1,
            name: "Veřejné vyjádření",
            description: "Pravda je vyslovena.",
          },
          {
            position: 5,
            type: 1,
            name: "Vrchol energie",
            description: "Akce je nevyhnutelná.",
          },
          {
            position: 6,
            type: 0,
            name: "Zbývající odpor",
            description: "Ještě může existovat zbytek napětí.",
          },
        ],
      },
      en: {
        name: "Breakthrough",
        meaning:
          "Breakthrough represents decisive confrontation with what no longer aligns with truth. Pressure has accumulated to the point of necessary expression.\n\nPsychologically, it marks the end of inner compromise. Silence is no longer sustainable.\n\nBreakthrough is not aggression but clarity.\n\nTruth must be expressed firmly yet without hostility.",
        oracle: {
          interpretation: [
            "Act decisively and openly.",
            "Speak truth without aggression.",
            "End what no longer serves.",
          ],
          introspection: [
            "What needs to be clearly addressed?",
            "What are you hesitant to confront?",
            "How can you act firmly and calmly?",
          ],
        },
        anatomy:
          "Lake above Heaven shows energy reaching the surface through expression. Creative force seeks articulation.\n\nPressure demands release.\n\nTransparent communication prevents destructive buildup.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Discontent",
            description: "Tension begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Recognition",
            description: "Problem becomes clear.",
          },
          {
            position: 3,
            type: 1,
            name: "Mounting Pressure",
            description: "Decision ripens.",
          },
          {
            position: 4,
            type: 1,
            name: "Public Expression",
            description: "Truth is spoken.",
          },
          {
            position: 5,
            type: 1,
            name: "Peak Force",
            description: "Action becomes inevitable.",
          },
          {
            position: 6,
            type: 0,
            name: "Residual Resistance",
            description: "Some tension may linger.",
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
    lines: [0, 1, 1, 1, 1, 1],
    content: {
      cs: {
        name: "Setkání",
        meaning:
          "Setkání symbolizuje náhlé setkání s vlivem nebo silou, která může být silná, ale ne zcela stabilní. Přichází rychle a vyžaduje opatrnost.\n\nPsychologicky jde o situaci, kdy do života vstupuje nová energie – osoba, myšlenka nebo impuls.\n\nTento hexagram varuje před bezhlavým přijetím. Ne vše, co je silné a přitažlivé, je dlouhodobě prospěšné.\n\nMoudrost spočívá v rozlišování. Je třeba zachovat odstup a nenechat se unést okamžitým dojmem.",
        oracle: {
          interpretation: [
            "Buď obezřetný při novém setkání.",
            "Nenech se unést prvním dojmem.",
            "Zvaž dlouhodobý dopad.",
          ],
          introspection: [
            "Co nového vstupuje do tvého života?",
            "Jednáš z nadšení nebo z uvážení?",
            "Jak můžeš zachovat stabilitu?",
          ],
        },
        anatomy:
          "Nebe nad Větrem vytváří obraz silné energie, která se setkává s jemným vlivem. Vítr proniká, Nebe expanduje.\n\nSetkání může být intenzivní.\n\nAnatomie hexagramu ukazuje potřebu vědomého vedení této nové energie.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První kontakt",
            description: "Objevuje se nový vliv.",
          },
          {
            position: 2,
            type: 1,
            name: "Zkoumání",
            description: "Situace je testována.",
          },
          {
            position: 3,
            type: 1,
            name: "Přitažlivost",
            description: "Roste intenzita.",
          },
          {
            position: 4,
            type: 1,
            name: "Potenciální nestabilita",
            description: "Hrozí nerovnováha.",
          },
          {
            position: 5,
            type: 1,
            name: "Vědomé řízení",
            description: "Energie je stabilizována.",
          },
          {
            position: 6,
            type: 1,
            name: "Přehnané zapojení",
            description: "Nadměrná důvěra může být rizikem.",
          },
        ],
      },
      en: {
        name: "Coming to Meet",
        meaning:
          "Coming to Meet represents a sudden encounter with a powerful influence. It arrives quickly and demands discernment.\n\nPsychologically, it may manifest as a new person, idea, or impulse entering life.\n\nNot all strong attractions are beneficial.\n\nWisdom lies in maintaining clarity and balance.",
        oracle: {
          interpretation: [
            "Be cautious with new influences.",
            "Avoid being swept away.",
            "Consider long-term consequences.",
          ],
          introspection: [
            "What new force is entering your life?",
            "Are you reacting impulsively?",
            "How can you remain grounded?",
          ],
        },
        anatomy:
          "Heaven above Wind shows powerful energy meeting subtle influence. Wind penetrates; Heaven expands.\n\nThe encounter may be intense.\n\nDiscernment is required to maintain balance.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Encounter",
            description: "New influence appears.",
          },
          {
            position: 2,
            type: 1,
            name: "Testing",
            description: "Situation is examined.",
          },
          {
            position: 3,
            type: 1,
            name: "Growing Attraction",
            description: "Intensity increases.",
          },
          {
            position: 4,
            type: 1,
            name: "Instability Risk",
            description: "Balance may falter.",
          },
          {
            position: 5,
            type: 1,
            name: "Conscious Guidance",
            description: "Energy is stabilized.",
          },
          {
            position: 6,
            type: 1,
            name: "Overcommitment",
            description: "Excess trust may be dangerous.",
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
    elements: [2, 8],
    lines: [0, 0, 0, 1, 1, 0],
    content: {
      cs: {
        name: "Shromáždění",
        meaning:
          "Shromáždění symbolizuje sjednocení lidí nebo sil kolem společného cíle. Energie se koncentruje a vytváří společné pole.\n\nPsychologicky jde o období, kdy je důležité sdílet hodnoty a hledat spojení. Spolupráce přináší sílu, kterou jednotlivec nemá.\n\nTento hexagram však upozorňuje, že shromáždění vyžaduje střed – jasné vedení nebo sdílenou vizi.\n\nBez jasného centra se skupina může rozpadnout nebo ztratit směr.",
        oracle: {
          interpretation: [
            "Spojuj se s ostatními kolem smysluplného cíle.",
            "Buduj pevné centrum.",
            "Udržuj jednotu skrze sdílené hodnoty.",
          ],
          introspection: [
            "S kým je nyní důležité se spojit?",
            "Jaký je společný záměr?",
            "Je tvá role ve skupině jasná?",
          ],
        },
        anatomy:
          "Jezero nad Zemí vytváří obraz lidí shromážděných na otevřeném prostoru. Jezero symbolizuje komunikaci, Země stabilitu.\n\nSetkání potřebuje pevný základ.\n\nAnatomie hexagramu ukazuje, že stabilní základ umožňuje otevřenou výměnu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První spojení",
            description: "Vzniká potřeba spolupráce.",
          },
          {
            position: 2,
            type: 1,
            name: "Navázání vztahů",
            description: "Vznikají pevná spojení.",
          },
          {
            position: 3,
            type: 1,
            name: "Nejistota",
            description: "Objevují se pochybnosti.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilizace skupiny",
            description: "Společenství získává tvar.",
          },
          {
            position: 5,
            type: 0,
            name: "Silné centrum",
            description: "Vedení je respektováno.",
          },
          {
            position: 6,
            type: 0,
            name: "Riziko rozptýlení",
            description: "Bez směru může dojít k rozkladu.",
          },
        ],
      },
      en: {
        name: "Gathering Together",
        meaning:
          "Gathering Together represents unity around a shared purpose. Energy concentrates into a collective field.\n\nPsychologically, it highlights the importance of connection and cooperation.\n\nA strong center or vision is necessary.\n\nWithout clear direction, unity weakens.",
        oracle: {
          interpretation: [
            "Unite around meaningful goals.",
            "Establish a stable center.",
            "Strengthen shared values.",
          ],
          introspection: [
            "Who should you align with now?",
            "What is the common purpose?",
            "Is your role clear?",
          ],
        },
        anatomy:
          "Lake above Earth shows people gathered on solid ground. Communication rests on stability.\n\nCommunity needs foundation.\n\nStrong roots sustain collective harmony.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Alliance",
            description: "Need for cooperation emerges.",
          },
          {
            position: 2,
            type: 1,
            name: "Building Bonds",
            description: "Connections deepen.",
          },
          {
            position: 3,
            type: 1,
            name: "Doubt",
            description: "Uncertainty arises.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilization",
            description: "Group solidifies.",
          },
          {
            position: 5,
            type: 0,
            name: "Strong Leadership",
            description: "Center holds firm.",
          },
          {
            position: 6,
            type: 0,
            name: "Dispersion Risk",
            description: "Without guidance unity fades.",
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
          "Vzestup symbolizuje postupný růst skrze vytrvalost. Nejde o náhlý průlom, ale o trpělivé stoupání krok za krokem.\n\nPsychologicky tento hexagram ukazuje, že pokrok je možný, pokud je založen na stabilních hodnotách.\n\nVzestup je pomalý, ale jistý. Vyžaduje disciplínu a důvěru v proces.\n\nHexagram učí, že skutečný růst není dramatický, ale konzistentní.",
        oracle: {
          interpretation: [
            "Postupuj trpělivě.",
            "Buduj krok za krokem.",
            "Důvěřuj dlouhodobému procesu.",
          ],
          introspection: [
            "Kde můžeš postupovat systematicky?",
            "Jsi ochoten investovat čas?",
            "Na jakém základu buduješ svůj růst?",
          ],
        },
        anatomy:
          "Vítr nad Zemí vytváří obraz kořenů, které pronikají půdou a umožňují růst. Vítr symbolizuje postupné pronikání, Země stabilitu.\n\nRůst je zakořeněný.\n\nAnatomie hexagramu zdůrazňuje, že stabilní základ je podmínkou vzestupu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První krok",
            description: "Začátek je nenápadný.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilní úsilí",
            description: "Vytrvalost přináší pokrok.",
          },
          {
            position: 3,
            type: 0,
            name: "Pochybnost",
            description: "Tempo může působit pomalu.",
          },
          {
            position: 4,
            type: 1,
            name: "Posílení",
            description: "Růst se zrychluje.",
          },
          {
            position: 5,
            type: 1,
            name: "Zralý vzestup",
            description: "Výsledek je viditelný.",
          },
          {
            position: 6,
            type: 0,
            name: "Udržení výšky",
            description: "Je třeba zachovat stabilitu.",
          },
        ],
      },
      en: {
        name: "Pushing Upward",
        meaning:
          "Pushing Upward represents gradual progress through persistence. It is steady ascent rather than sudden breakthrough.\n\nPsychologically, it reflects disciplined growth based on solid values.\n\nProgress may be slow, but it is secure.\n\nConsistency outweighs dramatic action.",
        oracle: {
          interpretation: [
            "Advance patiently.",
            "Build step by step.",
            "Trust the long-term process.",
          ],
          introspection: [
            "Where can you proceed methodically?",
            "Are you willing to invest time?",
            "What foundation supports your growth?",
          ],
        },
        anatomy:
          "Wind above Earth shows roots penetrating soil. Growth emerges from stability.\n\nExpansion is grounded.\n\nFirm foundations enable lasting ascent.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "First Step",
            description: "Beginning is subtle.",
          },
          {
            position: 2,
            type: 0,
            name: "Steady Effort",
            description: "Persistence yields progress.",
          },
          {
            position: 3,
            type: 0,
            name: "Doubt",
            description: "Progress feels slow.",
          },
          {
            position: 4,
            type: 1,
            name: "Strengthening",
            description: "Momentum increases.",
          },
          {
            position: 5,
            type: 1,
            name: "Mature Ascent",
            description: "Achievement becomes visible.",
          },
          {
            position: 6,
            type: 0,
            name: "Maintaining Height",
            description: "Stability must be preserved.",
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
    elements: [5, 8],
    lines: [0, 1, 0, 1, 1, 0],
    content: {
      cs: {
        name: "Tíseň",
        meaning:
          "Tíseň symbolizuje období omezení, vyčerpání nebo pocitu sevření. Energie je omezena a pohyb vpřed se zdá nemožný.\n\nPsychologicky jde o zkušenost vnitřního tlaku. Člověk může mít pocit, že jeho možnosti jsou zúžené nebo že není slyšen.\n\nTento hexagram však neznamená beznaděj. Upozorňuje, že skutečná síla se rodí právě v omezení.\n\nTíseň učí vytrvalosti a vnitřní integritě. I když okolnosti svazují, charakter může zůstat pevný.",
        oracle: {
          interpretation: [
            "Vytrvej navzdory omezení.",
            "Zachovej důstojnost i v tlaku.",
            "Hledej sílu uvnitř, ne v okolnostech.",
          ],
          introspection: [
            "Co tě nyní svazuje?",
            "Reaguješ vzdorem, nebo vytrvalostí?",
            "Jak můžeš zůstat věrný sobě i v obtížích?",
          ],
        },
        anatomy:
          "Jezero nad Vodou vytváří obraz vyčerpaného zdroje. Voda představuje tok, Jezero jeho omezení.\n\nEnergie je sevřená mezi vnitřním tlakem a vnější hranicí.\n\nAnatomie hexagramu ukazuje, že stagnace může být příležitostí k vnitřnímu zrání.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První sevření",
            description: "Objevuje se omezení.",
          },
          {
            position: 2,
            type: 1,
            name: "Hledání podpory",
            description: "Člověk hledá oporu.",
          },
          {
            position: 3,
            type: 0,
            name: "Pocit izolace",
            description: "Vzniká vnitřní tlak.",
          },
          {
            position: 4,
            type: 1,
            name: "Vytrvalost",
            description: "Síla charakteru roste.",
          },
          {
            position: 5,
            type: 1,
            name: "Vnitřní pevnost",
            description: "Zachována integrita.",
          },
          {
            position: 6,
            type: 0,
            name: "Postupné uvolnění",
            description: "Sevření se začíná uvolňovat.",
          },
        ],
      },
      en: {
        name: "Oppression",
        meaning:
          "Oppression represents a period of restriction, exhaustion, or pressure. Movement feels limited and constrained.\n\nPsychologically, it reflects inner pressure or a sense of being unheard.\n\nYet this hexagram does not imply hopelessness. True strength emerges through limitation.\n\nIntegrity maintained under pressure becomes a source of resilience.",
        oracle: {
          interpretation: [
            "Persevere under restriction.",
            "Maintain dignity under pressure.",
            "Seek strength within.",
          ],
          introspection: [
            "What currently confines you?",
            "Are you reacting with resistance or resilience?",
            "How can you remain true to yourself?",
          ],
        },
        anatomy:
          "Lake above Water shows constrained flow. Energy is compressed.\n\nLimitation intensifies awareness.\n\nStagnation can lead to inner maturation.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Constriction",
            description: "Limitation appears.",
          },
          {
            position: 2,
            type: 1,
            name: "Seeking Support",
            description: "Help is sought.",
          },
          {
            position: 3,
            type: 0,
            name: "Isolation",
            description: "Pressure increases.",
          },
          {
            position: 4,
            type: 1,
            name: "Endurance",
            description: "Character strengthens.",
          },
          {
            position: 5,
            type: 1,
            name: "Inner Integrity",
            description: "Stability is preserved.",
          },
          {
            position: 6,
            type: 0,
            name: "Gradual Release",
            description: "Tension begins to ease.",
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
    elements: [4, 5],
    lines: [0, 1, 1, 0, 1, 0],
    content: {
      cs: {
        name: "Studna",
        meaning:
          "Studna symbolizuje zdroj, který je stále přítomný, i když si jej lidé někdy neváží. Je to obraz trvalé hodnoty.\n\nPsychologicky představuje vnitřní zdroj moudrosti nebo energie, který lze čerpat bez ohledu na vnější změny.\n\nStudna se nemění, mění se jen způsob, jak ji používáme.\n\nHexagram učí péči o zdroj – ať už je to vztah, schopnost nebo vlastní vnitřní stabilita.",
        oracle: {
          interpretation: [
            "Pečuj o svůj zdroj.",
            "Obnov přístup k tomu, co tě vyživuje.",
            "Zlepši způsob, jak čerpáš energii.",
          ],
          introspection: [
            "Jaký je tvůj vnitřní zdroj?",
            "Pečuješ o něj dostatečně?",
            "Jak můžeš obnovit svou energii?",
          ],
        },
        anatomy:
          "Voda nad Větrem vytváří obraz hlubokého zdroje, který je dostupný díky správné konstrukci. Vítr symbolizuje přístup, Voda podstatu.\n\nZdroj je stabilní, ale musí být udržován.\n\nAnatomie hexagramu zdůrazňuje význam péče a pravidelného obnovování.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Zanedbaný zdroj",
            description: "Studna není využívána správně.",
          },
          {
            position: 2,
            type: 1,
            name: "Částečný přístup",
            description: "Zdroj je využíván neúplně.",
          },
          {
            position: 3,
            type: 1,
            name: "Obnova",
            description: "Dochází k opravě systému.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilní čerpání",
            description: "Zdroj je dostupný.",
          },
          {
            position: 5,
            type: 1,
            name: "Plná kvalita",
            description: "Voda je čistá a hluboká.",
          },
          {
            position: 6,
            type: 0,
            name: "Sdílení",
            description: "Zdroj prospívá ostatním.",
          },
        ],
      },
      en: {
        name: "The Well",
        meaning:
          "The Well represents a constant source that remains available regardless of changing circumstances.\n\nPsychologically, it symbolizes inner wisdom or renewable energy.\n\nThe source itself does not change — only our access to it does.\n\nCare and maintenance ensure its continued value.",
        oracle: {
          interpretation: [
            "Care for your source.",
            "Restore access to nourishment.",
            "Improve how you draw energy.",
          ],
          introspection: [
            "What is your inner source?",
            "Are you tending it properly?",
            "How can you renew your vitality?",
          ],
        },
        anatomy:
          "Water above Wind shows a structured well. Wind allows access; Water represents essence.\n\nThe source is stable but requires upkeep.\n\nMaintenance sustains nourishment.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Neglected Source",
            description: "Improper use.",
          },
          {
            position: 2,
            type: 1,
            name: "Partial Access",
            description: "Resource incompletely drawn.",
          },
          {
            position: 3,
            type: 1,
            name: "Restoration",
            description: "System repaired.",
          },
          {
            position: 4,
            type: 0,
            name: "Stable Drawing",
            description: "Source accessible.",
          },
          {
            position: 5,
            type: 1,
            name: "Pure Depth",
            description: "Quality is high.",
          },
          {
            position: 6,
            type: 0,
            name: "Shared Resource",
            description: "Benefit extends outward.",
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
          "Proměna symbolizuje radikální změnu, která je již nevyhnutelná. Starý řád dosáhl svého konce a další setrvání by znamenalo stagnaci.\n\nPsychologicky jde o moment, kdy člověk cítí, že hluboká změna je nutná – v postoji, vztahu nebo směru života.\n\nProměna však nesmí být impulzivní. Vyžaduje vnitřní zralost a správné načasování.\n\nHexagram učí, že skutečná transformace vychází z hlubokého přesvědčení, nikoli z revolty. Změna má být jasná, otevřená a připravená.",
        oracle: {
          interpretation: [
            "Změna je nutná — jednej vědomě.",
            "Ujisti se, že tvé rozhodnutí je zralé.",
            "Proměňuj, ale ne z unáhlenosti.",
          ],
          introspection: [
            "Co ve tvém životě už dosloužilo?",
            "Je tvá změna reakcí, nebo vědomým rozhodnutím?",
            "Jsi připraven nést důsledky transformace?",
          ],
        },
        anatomy:
          "Oheň nad Jezerem vytváří obraz energie, která mění povrch. Oheň transformuje, Jezero odráží změnu.\n\nStaré struktury se rozpouštějí.\n\nAnatomie hexagramu ukazuje, že proměna probíhá z vnitřního ohně směrem ven.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První nespokojenost",
            description: "Vzniká vědomí nutnosti změny.",
          },
          {
            position: 2,
            type: 0,
            name: "Zvažování",
            description: "Změna ještě není uskutečněna.",
          },
          {
            position: 3,
            type: 1,
            name: "Rostoucí tlak",
            description: "Situace dozrává.",
          },
          {
            position: 4,
            type: 1,
            name: "Rozhodnutí",
            description: "Proměna je zahájena.",
          },
          {
            position: 5,
            type: 1,
            name: "Stabilní transformace",
            description: "Změna je přijata.",
          },
          {
            position: 6,
            type: 0,
            name: "Nadměrná revolta",
            description: "Změna bez ukotvení může být nestabilní.",
          },
        ],
      },
      en: {
        name: "Revolution",
        meaning:
          "Revolution represents necessary transformation. The old order has reached its end, and continuation would mean stagnation.\n\nPsychologically, it marks a moment when deep change is required.\n\nTrue revolution requires maturity and timing.\n\nTransformation must arise from conviction, not impulsive reaction.",
        oracle: {
          interpretation: [
            "Change is necessary — act consciously.",
            "Ensure your decision is mature.",
            "Transform with clarity.",
          ],
          introspection: [
            "What has outlived its purpose?",
            "Is your change reactive or intentional?",
            "Are you ready for the consequences?",
          ],
        },
        anatomy:
          "Fire above Lake shows transformative force affecting the surface. Inner fire drives outward change.\n\nStructures dissolve.\n\nChange must be rooted in clarity.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Discontent",
            description: "Need for change arises.",
          },
          {
            position: 2,
            type: 0,
            name: "Consideration",
            description: "Decision not yet made.",
          },
          {
            position: 3,
            type: 1,
            name: "Growing Pressure",
            description: "Circumstances intensify.",
          },
          {
            position: 4,
            type: 1,
            name: "Commitment",
            description: "Transformation begins.",
          },
          {
            position: 5,
            type: 1,
            name: "Stable Renewal",
            description: "Change becomes established.",
          },
          {
            position: 6,
            type: 0,
            name: "Excessive Revolt",
            description: "Instability threatens.",
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
    lines: [0, 1, 1, 1, 0, 1],
    content: {
      cs: {
        name: "Kotlík",
        meaning:
          "Kotlík symbolizuje kultivaci a přeměnu surového materiálu v něco hodnotného. Je to obraz vnitřního zrání.\n\nPsychologicky jde o proces integrace zkušeností. Člověk zpracovává minulost a vytváří z ní moudrost.\n\nTento hexagram ukazuje, že transformace není pouze destrukce starého, ale také kultivace nového.\n\nKotlík představuje posvátný prostor, kde se energie mění kvalitou.",
        oracle: {
          interpretation: [
            "Pečuj o svůj vnitřní růst.",
            "Zpracuj zkušenosti vědomě.",
            "Proměň surovost v moudrost.",
          ],
          introspection: [
            "Co ve svém životě právě kultivuješ?",
            "Jak můžeš přetavit zkušenost v hodnotu?",
            "Je tvůj proces zrání vědomý?",
          ],
        },
        anatomy:
          "Oheň nad Větrem vytváří obraz ohřevu a přeměny. Oheň transformuje, Vítr šíří vliv.\n\nProces je řízený a stabilní.\n\nAnatomie hexagramu zdůrazňuje význam péče o kvalitu a integritu.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Základ",
            description: "Proces začíná přípravou.",
          },
          {
            position: 2,
            type: 1,
            name: "Stabilita",
            description: "Nádoba drží pevně.",
          },
          {
            position: 3,
            type: 0,
            name: "Narušení",
            description: "Proces může být dočasně narušen.",
          },
          {
            position: 4,
            type: 1,
            name: "Obnova",
            description: "Transformace pokračuje.",
          },
          {
            position: 5,
            type: 0,
            name: "Zralost",
            description: "Výsledek získává hodnotu.",
          },
          {
            position: 6,
            type: 1,
            name: "Dokonalost",
            description: "Proces dosahuje plnosti.",
          },
        ],
      },
      en: {
        name: "The Cauldron",
        meaning:
          "The Cauldron symbolizes cultivation and transformation of raw material into value. It represents inner refinement.\n\nPsychologically, it reflects integration of experience into wisdom.\n\nTransformation is not only destruction but refinement.\n\nThe Cauldron is a sacred vessel where energy changes quality.",
        oracle: {
          interpretation: [
            "Cultivate inner growth.",
            "Process experience consciously.",
            "Refine what is raw.",
          ],
          introspection: [
            "What are you cultivating?",
            "How can experience become wisdom?",
            "Is your transformation intentional?",
          ],
        },
        anatomy:
          "Fire above Wind shows controlled transformation. Heat refines; air sustains.\n\nThe process requires structure.\n\nQuality depends on care and integrity.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Foundation",
            description: "Preparation begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Stability",
            description: "Container holds firm.",
          },
          {
            position: 3,
            type: 0,
            name: "Disturbance",
            description: "Process temporarily disrupted.",
          },
          {
            position: 4,
            type: 1,
            name: "Restoration",
            description: "Transformation resumes.",
          },
          {
            position: 5,
            type: 0,
            name: "Maturity",
            description: "Value emerges.",
          },
          {
            position: 6,
            type: 1,
            name: "Completion",
            description: "Process reaches fullness.",
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
          "Otřes symbolizuje náhlý zásah, který probouzí vědomí. Je to šok, který naruší stabilitu, ale zároveň přináší nové uvědomění.\n\nPsychologicky jde o moment, kdy je člověk vytržen z komfortu. Událost může být překvapivá nebo zneklidňující, ale její smysl spočívá v probuzení.\n\nOtřes odhaluje, co je skutečně pevné. Pokud je základ stabilní, otřes nevede k pádu, ale k větší bdělosti.\n\nHexagram učí reagovat klidem. Strach je přirozený, ale vědomí musí zůstat jasné.",
        oracle: {
          interpretation: [
            "Zachovej klid i při náhlé změně.",
            "Nepropadej panice.",
            "Využij šok k probuzení.",
          ],
          introspection: [
            "Co tě nyní vyvádí z rovnováhy?",
            "Jak reaguješ na nečekané situace?",
            "Je tvůj základ dostatečně pevný?",
          ],
        },
        anatomy:
          "Hrom nad Hromem vytváří obraz opakovaného otřesu. Energie je silná a probouzející.\n\nDvojitý impuls zesiluje účinek.\n\nAnatomie hexagramu ukazuje, že opakovaný šok může přinést hlubší uvědomění.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První šok",
            description: "Náhlý podnět vyvolává překvapení.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní reakce",
            description: "Strach či napětí se objevuje.",
          },
          {
            position: 3,
            type: 0,
            name: "Adaptace",
            description: "Člověk hledá stabilitu.",
          },
          {
            position: 4,
            type: 1,
            name: "Opakování",
            description: "Další impuls posiluje uvědomění.",
          },
          {
            position: 5,
            type: 0,
            name: "Zachování klidu",
            description: "Reakce je vyvážená.",
          },
          {
            position: 6,
            type: 0,
            name: "Integrované probuzení",
            description: "Otřes přináší trvalé poznání.",
          },
        ],
      },
      en: {
        name: "Shock",
        meaning:
          "Shock represents sudden awakening through disruption. Stability is shaken, yet awareness increases.\n\nPsychologically, it reflects being pulled out of comfort. The event may be startling, but its purpose is awakening.\n\nShock reveals what is truly stable.\n\nCalm response transforms fear into insight.",
        oracle: {
          interpretation: [
            "Remain calm in sudden change.",
            "Do not panic.",
            "Use shock as awakening.",
          ],
          introspection: [
            "What is shaking your stability?",
            "How do you react to surprise?",
            "Is your foundation secure?",
          ],
        },
        anatomy:
          "Thunder above Thunder doubles the force of awakening.\n\nRepeated impact deepens awareness.\n\nShock can strengthen resilience.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Shock",
            description: "Sudden surprise.",
          },
          {
            position: 2,
            type: 0,
            name: "Fear Response",
            description: "Inner tension appears.",
          },
          {
            position: 3,
            type: 0,
            name: "Adaptation",
            description: "Stability sought.",
          },
          {
            position: 4,
            type: 1,
            name: "Reinforced Awakening",
            description: "Second impulse deepens effect.",
          },
          {
            position: 5,
            type: 0,
            name: "Composed Reaction",
            description: "Calm maintained.",
          },
          {
            position: 6,
            type: 0,
            name: "Integrated Insight",
            description: "Awakening becomes lasting.",
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
          "Zastavení symbolizuje klid a vědomé přerušení pohybu. Je to okamžik, kdy je třeba zastavit tělo i mysl.\n\nPsychologicky tento hexagram představuje schopnost sebeovládání a meditativní přítomnosti.\n\nZastavení není pasivita, ale aktivní rozhodnutí nepokračovat tam, kde by další pohyb vedl k nerovnováze.\n\nHexagram učí, že pravý klid vzniká uvnitř, nikoli z vnějších okolností.",
        oracle: {
          interpretation: [
            "Zastav se a naslouchej.",
            "Nepokračuj, pokud není jasnost.",
            "Najdi klid v sobě.",
          ],
          introspection: [
            "Kde je třeba se zastavit?",
            "Dokážeš být v tichu bez neklidu?",
            "Co ti klid odhaluje?",
          ],
        },
        anatomy:
          "Hora nad Horou vytváří obraz pevného a klidného středu. Dvojité zastavení zdůrazňuje potřebu stability.\n\nPohyb se přerušuje vědomě.\n\nAnatomie hexagramu ukazuje, že klid je podmínkou správného dalšího kroku.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Zastavení pohybu",
            description: "První impuls je zastaven.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilizace",
            description: "Napětí se uklidňuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Vnitřní odpor",
            description: "Objevuje se neklid.",
          },
          {
            position: 4,
            type: 0,
            name: "Přijetí klidu",
            description: "Zastavení je vědomé.",
          },
          {
            position: 5,
            type: 0,
            name: "Hluboký klid",
            description: "Mysl se ztišuje.",
          },
          {
            position: 6,
            type: 1,
            name: "Riziko stagnace",
            description: "Přílišné zastavení může bránit růstu.",
          },
        ],
      },
      en: {
        name: "Stillness",
        meaning:
          "Stillness represents conscious pause and inner calm. Movement stops intentionally.\n\nPsychologically, it reflects self-control and meditative awareness.\n\nStillness is not passivity but clarity.\n\nTrue calm arises within.",
        oracle: {
          interpretation: [
            "Pause and listen.",
            "Do not move without clarity.",
            "Find stillness within.",
          ],
          introspection: [
            "Where must you pause?",
            "Can you remain in silence peacefully?",
            "What does stillness reveal?",
          ],
        },
        anatomy:
          "Mountain above Mountain emphasizes stability and rest.\n\nMotion is intentionally halted.\n\nStillness prepares the next movement.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Stopping Motion",
            description: "First impulse halted.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilization",
            description: "Tension decreases.",
          },
          {
            position: 3,
            type: 1,
            name: "Inner Restlessness",
            description: "Unease surfaces.",
          },
          {
            position: 4,
            type: 0,
            name: "Acceptance",
            description: "Pause embraced.",
          },
          {
            position: 5,
            type: 0,
            name: "Deep Calm",
            description: "Mind settles.",
          },
          {
            position: 6,
            type: 1,
            name: "Stagnation Risk",
            description: "Excessive stillness blocks growth.",
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
    elements: [7, 4],
    lines: [0, 0, 1, 0, 1, 1],
    content: {
      cs: {
        name: "Postupný vývoj",
        meaning:
          "Postupný vývoj symbolizuje pomalý, přirozený růst, který probíhá v souladu s časem. Není zde prostor pro urychlení.\n\nPsychologicky tento hexagram poukazuje na trpělivost a důvěru v proces. Výsledky nejsou okamžité, ale jsou stabilní.\n\nRůst se odehrává organicky – podobně jako strom, který zakořeňuje, než vyroste.\n\nHexagram učí, že skutečná změna potřebuje čas. Urychlení může narušit přirozený řád.",
        oracle: {
          interpretation: [
            "Buď trpělivý.",
            "Důvěřuj postupnému procesu.",
            "Nepospíchej s výsledky.",
          ],
          introspection: [
            "Kde je třeba více trpělivosti?",
            "Respektuješ přirozené tempo?",
            "Co roste pomalu, ale jistě?",
          ],
        },
        anatomy:
          "Vítr nad Horou vytváří obraz postupného pronikání do pevné struktury. Hora symbolizuje stabilitu, Vítr vytrvalý vliv.\n\nZměna je nenápadná, ale trvalá.\n\nAnatomie hexagramu ukazuje, že vytrvalost přináší hluboké zakořenění.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První krok",
            description: "Začátek je jemný.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilní pokračování",
            description: "Růst je klidný.",
          },
          {
            position: 3,
            type: 1,
            name: "Zkouška trpělivosti",
            description: "Objevuje se netrpělivost.",
          },
          {
            position: 4,
            type: 0,
            name: "Zakořenění",
            description: "Základ je pevný.",
          },
          {
            position: 5,
            type: 1,
            name: "Viditelný pokrok",
            description: "Výsledek se začíná projevovat.",
          },
          {
            position: 6,
            type: 1,
            name: "Upevnění",
            description: "Růst dosahuje stability.",
          },
        ],
      },
      en: {
        name: "Gradual Development",
        meaning:
          "Gradual Development represents slow, natural growth aligned with time. It cannot be rushed.\n\nPsychologically, it emphasizes patience and trust in process.\n\nLike a tree, growth begins with roots before branches.\n\nTrue change unfolds steadily.",
        oracle: {
          interpretation: [
            "Be patient.",
            "Trust gradual progress.",
            "Avoid rushing outcomes.",
          ],
          introspection: [
            "Where is patience required?",
            "Are you respecting natural timing?",
            "What is quietly growing?",
          ],
        },
        anatomy:
          "Wind above Mountain shows persistent influence on stable ground.\n\nChange is subtle but lasting.\n\nSteady effort brings deep roots.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Gentle Beginning",
            description: "Start is subtle.",
          },
          {
            position: 2,
            type: 0,
            name: "Steady Continuation",
            description: "Progress remains calm.",
          },
          {
            position: 3,
            type: 1,
            name: "Impatience",
            description: "Desire for speed arises.",
          },
          {
            position: 4,
            type: 0,
            name: "Rooting",
            description: "Foundation strengthens.",
          },
          {
            position: 5,
            type: 1,
            name: "Visible Progress",
            description: "Growth becomes apparent.",
          },
          {
            position: 6,
            type: 1,
            name: "Stabilization",
            description: "Development matures.",
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
    elements: [8, 3],
    lines: [1, 1, 0, 1, 0, 0],
    content: {
      cs: {
        name: "Nevěsta",
        meaning:
          "Nevěsta symbolizuje vstup do situace, kde člověk nemá plnou kontrolu. Jde o přijetí role, která je podmíněná okolnostmi.\n\nPsychologicky tento hexagram poukazuje na nerovnováhu v postavení nebo očekáváních.\n\nNení vhodné usilovat o dominanci. Spíše je třeba přijmout omezení a hledat rovnováhu v dané roli.\n\nHexagram učí pokoru a schopnost přizpůsobení, dokud nenastane příznivější období.",
        oracle: {
          interpretation: [
            "Přijmi svou roli bez iluzí.",
            "Neusiluj o kontrolu za každou cenu.",
            "Jednej opatrně.",
          ],
          introspection: [
            "Vstupuješ do situace s jasným porozuměním?",
            "Je rovnováha mezi dáváním a přijímáním?",
            "Co od tebe tato role vyžaduje?",
          ],
        },
        anatomy:
          "Hrom nad Jezerem vytváří obraz pohybu nad otevřeností. Energie je nestabilní.\n\nPostavení je nerovné.\n\nAnatomie hexagramu ukazuje potřebu citlivého jednání.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Nerovný začátek",
            description: "Vstup bez plné rovnováhy.",
          },
          {
            position: 2,
            type: 0,
            name: "Přijetí podmínek",
            description: "Role je přijata.",
          },
          {
            position: 3,
            type: 0,
            name: "Napětí",
            description: "Objevuje se nesoulad.",
          },
          {
            position: 4,
            type: 1,
            name: "Adaptace",
            description: "Probíhá přizpůsobení.",
          },
          {
            position: 5,
            type: 1,
            name: "Stabilizace",
            description: "Rovnováha se zlepšuje.",
          },
          {
            position: 6,
            type: 0,
            name: "Riziko iluze",
            description: "Přehnaná očekávání mohou vést ke zklamání.",
          },
        ],
      },
      en: {
        name: "The Marrying Maiden",
        meaning:
          "The Marrying Maiden represents entering a situation without full control. The role is shaped by circumstance.\n\nPsychologically, it highlights imbalance or unequal expectations.\n\nDominance is inappropriate.\n\nHumility and adaptation are required until conditions shift.",
        oracle: {
          interpretation: [
            "Accept your role realistically.",
            "Do not seek control unnecessarily.",
            "Proceed with caution.",
          ],
          introspection: [
            "Do you understand the position you enter?",
            "Is there balance in expectations?",
            "What does this role require of you?",
          ],
        },
        anatomy:
          "Thunder above Lake shows unstable movement above openness.\n\nPosition lacks symmetry.\n\nCareful conduct preserves dignity.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Uneven Beginning",
            description: "Entry lacks balance.",
          },
          {
            position: 2,
            type: 0,
            name: "Acceptance",
            description: "Role acknowledged.",
          },
          {
            position: 3,
            type: 0,
            name: "Tension",
            description: "Disparity felt.",
          },
          {
            position: 4,
            type: 1,
            name: "Adaptation",
            description: "Adjustment begins.",
          },
          {
            position: 5,
            type: 1,
            name: "Improved Balance",
            description: "Conditions stabilize.",
          },
          {
            position: 6,
            type: 0,
            name: "Illusion Risk",
            description: "Unrealistic hopes may disappoint.",
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
    elements: [6, 3],
    lines: [1, 0, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Hojnost",
        meaning:
          "Hojnost symbolizuje vrchol energie a plnost života. Vše je zesílené – světlo, aktivita i odpovědnost.\n\nPsychologicky tento hexagram ukazuje období intenzity. Události jsou výrazné a rozhodnutí mají velký dopad.\n\nHojnost však není trvalý stav. Vrchol je přechodný.\n\nHexagram učí plně přijmout přítomný okamžik, ale zároveň si uvědomit jeho pomíjivost. Správné jednání ve vrcholu vyžaduje jasnost a disciplínu.",
        oracle: {
          interpretation: [
            "Využij plnost okamžiku.",
            "Jednej rozhodně, ale s rozvahou.",
            "Pamatuj, že vrchol není věčný.",
          ],
          introspection: [
            "Kde ve tvém životě vrcholí energie?",
            "Jak zvládáš intenzitu?",
            "Jednáš s vědomím dlouhodobých důsledků?",
          ],
        },
        anatomy:
          "Hrom nad Ohněm vytváří obraz silného světla a pohybu. Energie je plná a dynamická.\n\nSvětlo je nejjasnější.\n\nAnatomie hexagramu ukazuje vrcholný bod, který je zároveň testem charakteru.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "První rozmach",
            description: "Energie rychle roste.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilní síla",
            description: "Vrchol se blíží.",
          },
          {
            position: 3,
            type: 0,
            name: "Přetížení",
            description: "Hrozí ztráta rovnováhy.",
          },
          {
            position: 4,
            type: 1,
            name: "Plný vrchol",
            description: "Energie je maximální.",
          },
          {
            position: 5,
            type: 0,
            name: "Uvědomění pomíjivosti",
            description: "Objevuje se nadhled.",
          },
          {
            position: 6,
            type: 1,
            name: "Úpadek",
            description: "Vrchol přechází do poklesu.",
          },
        ],
      },
      en: {
        name: "Abundance",
        meaning:
          "Abundance represents peak energy and fullness of life. Everything is intensified — light, action, responsibility.\n\nPsychologically, it marks a period of intensity and visibility.\n\nAbundance is not permanent.\n\nClarity and discipline are required at the summit.",
        oracle: {
          interpretation: [
            "Embrace the fullness of the moment.",
            "Act decisively with awareness.",
            "Remember that peaks are temporary.",
          ],
          introspection: [
            "Where is energy peaking in your life?",
            "How do you handle intensity?",
            "Are you mindful of long-term consequences?",
          ],
        },
        anatomy:
          "Thunder above Fire shows powerful illumination and movement.\n\nLight is at its brightest.\n\nThe peak tests character.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Initial Expansion",
            description: "Energy surges.",
          },
          {
            position: 2,
            type: 0,
            name: "Approaching Peak",
            description: "Strength stabilizes.",
          },
          {
            position: 3,
            type: 0,
            name: "Overextension",
            description: "Balance threatened.",
          },
          {
            position: 4,
            type: 1,
            name: "Full Zenith",
            description: "Energy maximized.",
          },
          {
            position: 5,
            type: 0,
            name: "Perspective",
            description: "Awareness deepens.",
          },
          {
            position: 6,
            type: 1,
            name: "Decline",
            description: "Peak begins to fade.",
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
    elements: [7, 6],
    lines: [0, 0, 1, 1, 0, 1],
    content: {
      cs: {
        name: "Putování",
        meaning:
          "Putování symbolizuje dočasnost a pohyb mimo známé prostředí. Člověk není doma a musí jednat opatrně.\n\nPsychologicky tento hexagram ukazuje období přechodu nebo změny kontextu.\n\nPutování vyžaduje lehkost a adaptabilitu. Není vhodné se pevně upínat.\n\nHexagram učí respektovat cizí prostředí a zachovat si vlastní integritu.",
        oracle: {
          interpretation: [
            "Jednej obezřetně v novém prostředí.",
            "Neulpívej.",
            "Udržuj si důstojnost.",
          ],
          introspection: [
            "Kde se nyní cítíš jako host?",
            "Dokážeš být flexibilní?",
            "Jak si zachovat stabilitu mimo komfort?",
          ],
        },
        anatomy:
          "Oheň nad Horou vytváří obraz světla na vrcholu – viditelného, ale nestálého. Hora symbolizuje cizí půdu.\n\nPobyt je dočasný.\n\nAnatomie hexagramu ukazuje potřebu opatrnosti a přizpůsobení.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Nejistý začátek",
            description: "Prostředí je nové.",
          },
          {
            position: 2,
            type: 0,
            name: "Adaptace",
            description: "Člověk se přizpůsobuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Riziko konfliktu",
            description: "Hrozí nedorozumění.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilní chování",
            description: "Respekt přináší klid.",
          },
          {
            position: 5,
            type: 0,
            name: "Dočasný úspěch",
            description: "Situace se vyjasňuje.",
          },
          {
            position: 6,
            type: 1,
            name: "Ztráta opory",
            description: "Přílišné uvolnění může vést k nestabilitě.",
          },
        ],
      },
      en: {
        name: "The Wanderer",
        meaning:
          "The Wanderer represents temporary position and movement through unfamiliar territory.\n\nPsychologically, it reflects transition and lack of rootedness.\n\nAdaptability is essential.\n\nRespect and integrity ensure safe passage.",
        oracle: {
          interpretation: [
            "Act cautiously in new surroundings.",
            "Do not cling.",
            "Maintain dignity.",
          ],
          introspection: [
            "Where are you a guest?",
            "Can you remain flexible?",
            "How do you stay grounded away from comfort?",
          ],
        },
        anatomy:
          "Fire above Mountain shows light exposed in foreign terrain.\n\nPosition is temporary.\n\nCareful conduct ensures safety.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Uncertain Entry",
            description: "New environment.",
          },
          {
            position: 2,
            type: 0,
            name: "Adaptation",
            description: "Adjustment occurs.",
          },
          {
            position: 3,
            type: 1,
            name: "Conflict Risk",
            description: "Misunderstanding possible.",
          },
          {
            position: 4,
            type: 0,
            name: "Respectful Conduct",
            description: "Stability through care.",
          },
          {
            position: 5,
            type: 0,
            name: "Temporary Success",
            description: "Clarity emerges.",
          },
          {
            position: 6,
            type: 1,
            name: "Loss of Support",
            description: "Overconfidence destabilizes.",
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
          "Pronikání symbolizuje jemnou, ale vytrvalou sílu, která působí bez nátlaku. Nejde o náhlý zásah, ale o postupné ovlivňování.\n\nPsychologicky tento hexagram poukazuje na schopnost trpělivě měnit situaci skrze konzistentní přístup. Místo tvrdého odporu volí flexibilitu.\n\nPronikání může být téměř neviditelné, přesto účinné. Je to síla, která se přizpůsobuje, ale neztrácí směr.\n\nHexagram učí, že vytrvalá jemnost může být silnější než agresivní tlak.",
        oracle: {
          interpretation: [
            "Postupuj jemně, ale důsledně.",
            "Nepoužívej sílu tam, kde stačí trpělivost.",
            "Buduj vliv postupně.",
          ],
          introspection: [
            "Kde můžeš působit nenápadně, ale vytrvale?",
            "Reaguješ tlakem, nebo přizpůsobením?",
            "Co vyžaduje dlouhodobou konzistenci?",
          ],
        },
        anatomy:
          "Vítr nad Větrem vytváří obraz pronikající energie. Dvojité působení zesiluje vliv, aniž by bylo násilné.\n\nSměr je zachován, forma je flexibilní.\n\nAnatomie hexagramu zdůrazňuje sílu konzistence a jemného vlivu.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První vliv",
            description: "Jemné působení začíná.",
          },
          {
            position: 2,
            type: 1,
            name: "Vytrvalost",
            description: "Směr je udržen.",
          },
          {
            position: 3,
            type: 1,
            name: "Nejistota",
            description: "Objevují se pochybnosti.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilní vliv",
            description: "Působení sílí.",
          },
          {
            position: 5,
            type: 1,
            name: "Zralý účinek",
            description: "Výsledek je patrný.",
          },
          {
            position: 6,
            type: 1,
            name: "Přílišná poddajnost",
            description: "Nadměrná flexibilita může vést ke ztrátě směru.",
          },
        ],
      },
      en: {
        name: "The Gentle",
        meaning:
          "The Gentle represents subtle yet persistent influence. It works without force, gradually shaping circumstances.\n\nPsychologically, it reflects patient consistency and adaptability.\n\nInfluence may be almost invisible, yet effective.\n\nGentle persistence can surpass aggressive force.",
        oracle: {
          interpretation: [
            "Act gently but consistently.",
            "Avoid unnecessary force.",
            "Build influence over time.",
          ],
          introspection: [
            "Where can steady influence be applied?",
            "Are you forcing or adapting?",
            "What requires long-term consistency?",
          ],
        },
        anatomy:
          "Wind above Wind shows penetrating influence doubled.\n\nDirection remains firm while method is flexible.\n\nConsistency strengthens effect.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Influence",
            description: "Gentle action begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Persistence",
            description: "Direction maintained.",
          },
          {
            position: 3,
            type: 1,
            name: "Doubt",
            description: "Uncertainty appears.",
          },
          {
            position: 4,
            type: 0,
            name: "Stable Effect",
            description: "Influence grows.",
          },
          {
            position: 5,
            type: 1,
            name: "Mature Impact",
            description: "Results visible.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess Flexibility",
            description: "Too much yielding weakens direction.",
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
          "Radost symbolizuje otevřenost, sdílení a lehkost komunikace. Je to energie, která spojuje.\n\nPsychologicky tento hexagram poukazuje na důležitost autentického vyjádření a pozitivního kontaktu.\n\nRadost není povrchní veselí, ale hluboká spokojenost, která vzniká z vnitřní harmonie.\n\nHexagram učí, že sdílená radost posiluje vztahy a podporuje spolupráci.",
        oracle: {
          interpretation: [
            "Sdílej otevřeně.",
            "Komunikuj s lehkostí.",
            "Buduj vztahy skrze radost.",
          ],
          introspection: [
            "Kde můžeš být otevřenější?",
            "Je tvá radost autentická?",
            "Jak můžeš podpořit harmonii?",
          ],
        },
        anatomy:
          "Jezero nad Jezerem vytváří obraz dvojnásobné radosti a komunikace. Otevřenost je zesílena.\n\nSpojení je přirozené.\n\nAnatomie hexagramu ukazuje sílu sdílení a vzájemného povzbuzení.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První úsměv",
            description: "Otevřenost začíná.",
          },
          {
            position: 2,
            type: 1,
            name: "Sdílení",
            description: "Komunikace se rozvíjí.",
          },
          {
            position: 3,
            type: 1,
            name: "Riziko povrchnosti",
            description: "Radost může být neupřímná.",
          },
          {
            position: 4,
            type: 0,
            name: "Upřímnost",
            description: "Kontakt je autentický.",
          },
          {
            position: 5,
            type: 1,
            name: "Vzájemné povzbuzení",
            description: "Vztahy se posilují.",
          },
          {
            position: 6,
            type: 1,
            name: "Nadměrná lehkomyslnost",
            description: "Přílišná bezstarostnost může oslabit hloubku.",
          },
        ],
      },
      en: {
        name: "The Joyous",
        meaning:
          "The Joyous represents openness, communication, and shared delight. It connects people.\n\nPsychologically, it highlights authentic expression and positive exchange.\n\nTrue joy arises from inner harmony.\n\nShared joy strengthens relationships.",
        oracle: {
          interpretation: [
            "Share openly.",
            "Communicate lightly yet sincerely.",
            "Strengthen bonds through joy.",
          ],
          introspection: [
            "Where can you be more open?",
            "Is your joy genuine?",
            "How can harmony be deepened?",
          ],
        },
        anatomy:
          "Lake above Lake doubles openness and exchange.\n\nConnection flows naturally.\n\nShared encouragement builds strength.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Openness",
            description: "Connection begins.",
          },
          {
            position: 2,
            type: 1,
            name: "Sharing",
            description: "Exchange develops.",
          },
          {
            position: 3,
            type: 1,
            name: "Superficial Risk",
            description: "Insincerity possible.",
          },
          {
            position: 4,
            type: 0,
            name: "Authenticity",
            description: "Genuine contact.",
          },
          {
            position: 5,
            type: 1,
            name: "Mutual Encouragement",
            description: "Relationships strengthen.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess Lightness",
            description: "Carelessness weakens depth.",
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
          "Rozptýlení symbolizuje rozpuštění napětí a uvolnění ztuhlých struktur. To, co bylo pevně svázané, se začíná rozcházet.\n\nPsychologicky tento hexagram poukazuje na potřebu uvolnit rigidní postoje nebo emocionální bloky. Někdy je nutné rozpustit staré formy, aby vznikl prostor pro nový řád.\n\nRozptýlení nemusí znamenat chaos. Může být očistným procesem, který odstraňuje zbytečnou zátěž.\n\nHexagram učí vědomému uvolnění. Ne všechno, co se rozpadá, je ztrátou – někdy jde o nutnou transformaci.",
        oracle: {
          interpretation: [
            "Uvolni napětí.",
            "Rozpusť to, co je příliš rigidní.",
            "Vytvoř prostor pro nový začátek.",
          ],
          introspection: [
            "Co držíš příliš pevně?",
            "Kde je třeba uvolnit kontrolu?",
            "Co se může rozpustit, aby vznikla lehkost?",
          ],
        },
        anatomy:
          "Vítr nad Vodou vytváří obraz rozptylování mlhy nad hladinou. Pohyb rozrušuje stagnaci.\n\nEnergie proudí volněji.\n\nAnatomie hexagramu ukazuje proces rozpuštění starých struktur, aby vznikla obnova.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První uvolnění",
            description: "Napětí začíná polevovat.",
          },
          {
            position: 2,
            type: 1,
            name: "Rozpuštění bariér",
            description: "Staré bloky se rozpadají.",
          },
          {
            position: 3,
            type: 0,
            name: "Nejistota",
            description: "Ztráta pevného rámce může vyvolat obavy.",
          },
          {
            position: 4,
            type: 0,
            name: "Očištění",
            description: "Situace se vyjasňuje.",
          },
          {
            position: 5,
            type: 1,
            name: "Nové spojení",
            description: "Vzniká zdravější struktura.",
          },
          {
            position: 6,
            type: 1,
            name: "Nadměrné rozpuštění",
            description: "Přílišné uvolnění může vést ke ztrátě směru.",
          },
        ],
      },
      en: {
        name: "Dispersion",
        meaning:
          "Dispersion represents the dissolving of tension and the breaking apart of rigid structures.\n\nPsychologically, it highlights the need to release fixed attitudes or emotional blocks. Sometimes old forms must dissolve to allow renewal.\n\nDispersion is not chaos, but cleansing.\n\nConscious release creates space for transformation.",
        oracle: {
          interpretation: [
            "Release tension.",
            "Dissolve rigidity.",
            "Make room for renewal.",
          ],
          introspection: [
            "What are you holding too tightly?",
            "Where is control unnecessary?",
            "What can dissolve to create lightness?",
          ],
        },
        anatomy:
          "Wind above Water disperses the surface and stirs stagnation.\n\nFlow becomes freer.\n\nDissolution prepares renewal.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Release",
            description: "Tension loosens.",
          },
          {
            position: 2,
            type: 1,
            name: "Barrier Dissolution",
            description: "Old blocks break.",
          },
          {
            position: 3,
            type: 0,
            name: "Uncertainty",
            description: "Loss of structure causes doubt.",
          },
          {
            position: 4,
            type: 0,
            name: "Clarification",
            description: "Situation clears.",
          },
          {
            position: 5,
            type: 1,
            name: "Healthy Reconnection",
            description: "New structure forms.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess Dissolution",
            description: "Too much release leads to instability.",
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
    elements: [8, 5],
    lines: [1, 1, 0, 0, 1, 0],
    content: {
      cs: {
        name: "Omezení",
        meaning:
          "Omezení symbolizuje stanovení hranic a vědomou regulaci. Struktura a pravidla dávají formu energii.\n\nPsychologicky tento hexagram poukazuje na potřebu sebekázně a jasných hranic. Bez omezení se energie rozptýlí.\n\nOmezení však musí být přiměřené. Přílišná restrikce dusí přirozený růst.\n\nHexagram učí rovnováze mezi svobodou a strukturou. Zdravé hranice vytvářejí stabilitu.",
        oracle: {
          interpretation: [
            "Stanov jasné hranice.",
            "Reguluj energii rozumně.",
            "Vyhýbej se extrémům.",
          ],
          introspection: [
            "Kde potřebuješ více disciplíny?",
            "Nejsou tvá omezení příliš přísná?",
            "Jak můžeš vytvořit zdravou strukturu?",
          ],
        },
        anatomy:
          "Jezero nad Vodou vytváří obraz vody ohraničené břehy. Proud je veden, nikoli zastaven.\n\nStruktura dává směr.\n\nAnatomie hexagramu zdůrazňuje význam přiměřených hranic.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "První hranice",
            description: "Začíná regulace.",
          },
          {
            position: 2,
            type: 1,
            name: "Sebekontrola",
            description: "Disciplína se upevňuje.",
          },
          {
            position: 3,
            type: 0,
            name: "Napětí z omezení",
            description: "Přílišná kontrola vyvolává odpor.",
          },
          {
            position: 4,
            type: 0,
            name: "Vyvážená struktura",
            description: "Hranice jsou přiměřené.",
          },
          {
            position: 5,
            type: 1,
            name: "Stabilita",
            description: "Struktura přináší klid.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnané restrikce",
            description: "Nadměrné omezení vede k zablokování.",
          },
        ],
      },
      en: {
        name: "Limitation",
        meaning:
          "Limitation represents conscious boundaries and regulation. Structure shapes energy.\n\nPsychologically, it reflects self-discipline and clarity of limits.\n\nExcessive restriction stifles growth.\n\nHealthy boundaries create stability.",
        oracle: {
          interpretation: [
            "Set clear boundaries.",
            "Regulate wisely.",
            "Avoid extremes.",
          ],
          introspection: [
            "Where is discipline needed?",
            "Are your limits too rigid?",
            "How can structure support growth?",
          ],
        },
        anatomy:
          "Lake above Water shows flow contained by banks.\n\nStructure guides movement.\n\nBalanced boundaries sustain energy.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Initial Boundary",
            description: "Regulation begins.",
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
            name: "Tension",
            description: "Restriction creates pressure.",
          },
          {
            position: 4,
            type: 0,
            name: "Balanced Structure",
            description: "Limits are appropriate.",
          },
          {
            position: 5,
            type: 1,
            name: "Stability",
            description: "Structure brings calm.",
          },
          {
            position: 6,
            type: 0,
            name: "Over-Restriction",
            description: "Too much control blocks vitality.",
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
          "Vnitřní pravda symbolizuje upřímnost, která vychází ze středu bytosti. Nejde o vnější deklarace, ale o hluboký soulad mezi myšlenkou, slovem a činem.\n\nPsychologicky tento hexagram poukazuje na autenticitu. Člověk, který jedná z vnitřní pravdy, nepotřebuje manipulovat ani přesvědčovat silou.\n\nDůvěra vzniká tam, kde je konzistence a otevřenost.\n\nHexagram učí, že skutečný vliv vychází ze srdce, nikoli z kontroly.",
        oracle: {
          interpretation: [
            "Jednej upřímně.",
            "Naslouchej svému středu.",
            "Buduj důvěru skrze autenticitu.",
          ],
          introspection: [
            "Jednáš v souladu se svým vnitřním přesvědčením?",
            "Kde můžeš být otevřenější?",
            "Co znamená být pravdivý sám k sobě?",
          ],
        },
        anatomy:
          "Jezero nad Větrem vytváří obraz otevřenosti, která proniká hluboko. Komunikace a citlivost se spojují.\n\nVnitřní stabilita umožňuje vnější důvěru.\n\nAnatomie hexagramu zdůrazňuje soulad mezi nitrem a vnějškem.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Zárodek důvěry",
            description: "Upřímnost začíná uvnitř.",
          },
          {
            position: 2,
            type: 1,
            name: "Otevřenost",
            description: "Autenticita se projevuje navenek.",
          },
          {
            position: 3,
            type: 1,
            name: "Zkouška pravdivosti",
            description: "Upřímnost je vystavena tlaku.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilní integrita",
            description: "Vnitřní klid posiluje vztahy.",
          },
          {
            position: 5,
            type: 1,
            name: "Vzájemná důvěra",
            description: "Důvěra je oboustranná.",
          },
          {
            position: 6,
            type: 1,
            name: "Riziko iluze",
            description: "Přehnaná důvěra může vést k naivitě.",
          },
        ],
      },
      en: {
        name: "Inner Truth",
        meaning:
          "Inner Truth represents sincerity arising from the center of one’s being. It is not about outward declarations but deep alignment between thought, word, and action.\n\nPsychologically, it reflects authenticity.\n\nTrust emerges from consistency.\n\nTrue influence comes from integrity.",
        oracle: {
          interpretation: [
            "Act with sincerity.",
            "Listen to your inner core.",
            "Build trust through authenticity.",
          ],
          introspection: [
            "Are you aligned with your values?",
            "Where can you be more honest?",
            "What does authenticity mean to you?",
          ],
        },
        anatomy:
          "Lake above Wind combines openness with gentle penetration.\n\nInner alignment creates outer trust.\n\nIntegrity strengthens connection.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Seed of Trust",
            description: "Sincerity begins within.",
          },
          {
            position: 2,
            type: 1,
            name: "Openness",
            description: "Authenticity expressed.",
          },
          {
            position: 3,
            type: 1,
            name: "Test of Truth",
            description: "Integrity challenged.",
          },
          {
            position: 4,
            type: 0,
            name: "Stable Integrity",
            description: "Inner calm strengthens bonds.",
          },
          {
            position: 5,
            type: 1,
            name: "Mutual Trust",
            description: "Trust becomes reciprocal.",
          },
          {
            position: 6,
            type: 1,
            name: "Naivety Risk",
            description: "Blind trust may mislead.",
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
    elements: [7, 3],
    lines: [0, 0, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Převaha malého",
        meaning:
          "Převaha malého symbolizuje situaci, kdy velké kroky nejsou vhodné. Malé, přesné činy mají větší význam než odvážné tahy.\n\nPsychologicky tento hexagram poukazuje na detail, opatrnost a citlivost.\n\nNení čas na dramatické změny.\n\nHexagram učí, že někdy je síla v jemnosti a přesnosti.",
        oracle: {
          interpretation: [
            "Zaměř se na detaily.",
            "Neusiluj o velké průlomy.",
            "Postupuj opatrně.",
          ],
          introspection: [
            "Kde stačí malé kroky?",
            "Neusiluješ o příliš mnoho?",
            "Jak můžeš jednat citlivěji?",
          ],
        },
        anatomy:
          "Hora nad Hromem vytváří obraz malého pohybu pod pevnou strukturou.\n\nSíla je omezená.\n\nOpatrnost je klíčová.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Malý začátek",
            description: "Drobné kroky.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilita",
            description: "Omezení je respektováno.",
          },
          {
            position: 3,
            type: 1,
            name: "Pokušení přehánět",
            description: "Hrozí překročení míry.",
          },
          {
            position: 4,
            type: 1,
            name: "Vyváženost",
            description: "Malé kroky přinášejí jistotu.",
          },
          {
            position: 5,
            type: 0,
            name: "Citlivost",
            description: "Vnímání detailů.",
          },
          {
            position: 6,
            type: 0,
            name: "Překročení hranice",
            description: "Velké gesto může způsobit potíže.",
          },
        ],
      },
      en: {
        name: "Preponderance of the Small",
        meaning:
          "This hexagram suggests that small, precise actions are appropriate, not grand gestures.\n\nPsychologically, it emphasizes detail and caution.\n\nIt is not time for dramatic moves.\n\nStrength lies in subtlety.",
        oracle: {
          interpretation: [
            "Focus on small steps.",
            "Avoid dramatic action.",
            "Proceed carefully.",
          ],
          introspection: [
            "Where are small actions sufficient?",
            "Are you overreaching?",
            "How can you be more precise?",
          ],
        },
        anatomy:
          "Mountain above Thunder shows restrained movement.\n\nCaution governs action.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Small Beginning",
            description: "Minor steps.",
          },
          {
            position: 2,
            type: 0,
            name: "Stability",
            description: "Limits respected.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Risk",
            description: "Temptation to overreach.",
          },
          {
            position: 4,
            type: 1,
            name: "Balance",
            description: "Measured progress.",
          },
          {
            position: 5,
            type: 0,
            name: "Sensitivity",
            description: "Attention to detail.",
          },
          {
            position: 6,
            type: 0,
            name: "Boundary Crossing",
            description: "Overdoing creates problems.",
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
    elements: [6, 5],
    lines: [1, 0, 1, 0, 1, 0],
    content: {
      cs: {
        name: "Dokončení",
        meaning:
          "Dokončení symbolizuje stav po úspěšném završení. Věci jsou na svém místě.\n\nPsychologicky jde o okamžik rovnováhy po náročném období.\n\nTento stav je však křehký.\n\nHexagram učí bdělosti i po dosažení cíle.",
        oracle: {
          interpretation: [
            "Udržuj rovnováhu.",
            "Nepolevuj v pozornosti.",
            "Dokončení je začátek nové fáze.",
          ],
          introspection: [
            "Co jsi právě dokončil?",
            "Jak udržíš stabilitu?",
            "Co následuje dál?",
          ],
        },
        anatomy:
          "Voda nad Ohněm vytváří obraz vyvážených protikladů.\n\nHarmonie je dosažena.\n\nBdělost je nutná.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Úspěšný start",
            description: "Začátek je stabilní.",
          },
          {
            position: 2,
            type: 0,
            name: "Rovnováha",
            description: "Věci jsou v pořádku.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí",
            description: "Křehkost rovnováhy.",
          },
          {
            position: 4,
            type: 0,
            name: "Udržení",
            description: "Stav je stabilizován.",
          },
          {
            position: 5,
            type: 1,
            name: "Vyvrcholení",
            description: "Úspěch je plný.",
          },
          {
            position: 6,
            type: 0,
            name: "Obrat",
            description: "Cyklus se chýlí ke změně.",
          },
        ],
      },
      en: {
        name: "After Completion",
        meaning:
          "After Completion represents a state of achieved balance.\n\nPsychologically, it is the calm after effort.\n\nYet this state is fragile.\n\nVigilance is required.",
        oracle: {
          interpretation: [
            "Maintain balance.",
            "Stay attentive.",
            "Completion begins a new phase.",
          ],
          introspection: [
            "What has been completed?",
            "How will you sustain balance?",
            "What comes next?",
          ],
        },
        anatomy:
          "Water above Fire symbolizes balanced opposites.\n\nHarmony achieved.\n\nAwareness must continue.",
        evolution: [
          {
            position: 1,
            type: 1,
            name: "Stable Beginning",
            description: "Order established.",
          },
          {
            position: 2,
            type: 0,
            name: "Balance",
            description: "Harmony present.",
          },
          {
            position: 3,
            type: 1,
            name: "Tension",
            description: "Fragility emerges.",
          },
          {
            position: 4,
            type: 0,
            name: "Maintenance",
            description: "Balance sustained.",
          },
          {
            position: 5,
            type: 1,
            name: "Fullness",
            description: "Success complete.",
          },
          {
            position: 6,
            type: 0,
            name: "Turning Point",
            description: "Cycle shifts.",
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
    elements: [5, 6],
    lines: [0, 1, 0, 1, 0, 1],
    content: {
      cs: {
        name: "Před dokončením",
        meaning:
          "Před dokončením symbolizuje situaci těsně před vyřešením. Cíl je blízko, ale ještě není dosažen.\n\nPsychologicky jde o období napětí a očekávání.\n\nPřílišná netrpělivost může vše narušit.\n\nHexagram učí soustředění a opatrnosti v poslední fázi.",
        oracle: {
          interpretation: [
            "Zachovej soustředění.",
            "Nespěchej.",
            "Dokonči vědomě.",
          ],
          introspection: [
            "Jsi opravdu připraven?",
            "Neuspěcháváš závěr?",
            "Co ještě zbývá dokončit?",
          ],
        },
        anatomy:
          "Oheň nad Vodou vytváří obraz nevyvážených sil. Harmonie ještě není dosažena.\n\nNapětí je patrné.\n\nVyžaduje trpělivost.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Nejistý start",
            description: "Začátek je křehký.",
          },
          {
            position: 2,
            type: 1,
            name: "Naděje",
            description: "Směr je jasnější.",
          },
          {
            position: 3,
            type: 0,
            name: "Napětí",
            description: "Hrozí předčasný krok.",
          },
          {
            position: 4,
            type: 1,
            name: "Stabilizace",
            description: "Situace se zlepšuje.",
          },
          {
            position: 5,
            type: 0,
            name: "Připravenost",
            description: "Cíl je blízko.",
          },
          {
            position: 6,
            type: 1,
            name: "Předčasné uspokojení",
            description: "Spěch může narušit výsledek.",
          },
        ],
      },
      en: {
        name: "Before Completion",
        meaning:
          "Before Completion represents a situation nearing resolution, yet not finished.\n\nPsychologically, it reflects tension and anticipation.\n\nImpatience can disrupt progress.\n\nFocus and care are essential.",
        oracle: {
          interpretation: [
            "Stay focused.",
            "Avoid haste.",
            "Complete consciously.",
          ],
          introspection: [
            "Are you truly ready?",
            "Are you rushing the ending?",
            "What remains unfinished?",
          ],
        },
        anatomy:
          "Fire above Water shows imbalance.\n\nHarmony not yet achieved.\n\nPatience required.",
        evolution: [
          {
            position: 1,
            type: 0,
            name: "Fragile Start",
            description: "Unstable beginning.",
          },
          {
            position: 2,
            type: 1,
            name: "Hope",
            description: "Direction clearer.",
          },
          {
            position: 3,
            type: 0,
            name: "Tension",
            description: "Risk of premature action.",
          },
          {
            position: 4,
            type: 1,
            name: "Stabilization",
            description: "Conditions improve.",
          },
          {
            position: 5,
            type: 0,
            name: "Near Completion",
            description: "Goal close.",
          },
          {
            position: 6,
            type: 1,
            name: "Premature Satisfaction",
            description: "Haste disrupts outcome.",
          },
        ],
      },
    },
  },
];
