export interface HexagramContent {
  name: string;
  meaning: string;
  oracle: string;
  anatomy: {
    position: number;
    name: string;
    description: string;
    type: 0 | 1;
  }[];
  evolution: string;
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
        oracle:
          "Jednej z jasnosti, ne z netrpělivosti. Síla je na tvé straně, pokud víš, proč ji používáš.\n\nVytrvalost přináší úspěch. Každý krok dělej vědomě a bez okázalosti.\n\nPozor na pýchu. Když síla překročí míru, začíná obrat.\n\nVytvářej, ale zůstávej bdělý. Největší moc je ta, která zná své hranice.\n\nKde ve svém životě právě stojíš na začátku? Jednáš z vnitřní jasnosti, nebo z tlaku okolí? A víš, kdy je čas pokračovat – a kdy je čas ustoupit?",
        anatomy: [
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
        evolution:
          "Vývoj Tvořivého probíhá jako vzestup energie od skrytého potenciálu k plnému projevu. Začíná tiše – ve fázi přípravy, kdy síla ještě není viditelná. Postupně se však objevuje ve světě, získává vliv a dosahuje vrcholu.\n\nKaždý stupeň vyžaduje jiný druh vědomí. Nejprve trpělivost, poté odvahu, následně vytrvalost a nakonec schopnost nést odpovědnost za vlastní moc. Nejvyšší bod není konec cesty, ale zkouška charakteru.\n\nTvořivé ukazuje, že skutečný růst není jen expanze, ale i schopnost zastavit se ve správný okamžik. Pokud energie pokračuje bez míry, začíná její obrat. Udržet rovnováhu ve vrcholu je největší výzva.",
      },
      en: {
        name: "The Creative",
        meaning:
          "Hexagram 1 represents the principle of Heaven — pure creative force. It is the energy of initiation, ascent, and continuous movement. The Creative symbolizes conscious action and the capacity to set events into motion with responsibility and clarity.\n\nThis hexagram marks a moment of full potential. True creativity arises from inner integrity and alignment with a higher order. Heaven moves without rest — one who follows it strengthens character through constant self-cultivation.",
        oracle:
          "Success comes through perseverance and proper timing. Act from clarity and development will unfold naturally.\n\nBeware of pride. When strength exceeds its measure, reversal begins.",
        anatomy: [
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
        evolution:
          "The development of the Creative unfolds as a gradual ascent of energy from hidden potential to full expression. It begins quietly — in preparation and inner consolidation. Over time, strength becomes visible, influence grows, and the movement reaches its peak.\n\nEach stage requires a different kind of awareness: patience at the beginning, courage in emergence, perseverance in action, and responsibility at the height of power. The highest point is not an end, but a test of character.\n\nThe Creative teaches that true growth is not only expansion, but also the wisdom to stop at the right moment. When force continues beyond its measure, reversal begins. Maintaining balance at the summit is the greatest challenge.",
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
        oracle:
          "Neusiluj o kontrolu. Naslouchej tomu, co situace potřebuje.\n\nStabilita přináší úspěch. Jednej trpělivě a bez potřeby okamžitého výsledku.\n\nNásledování není slabost, pokud víš, komu a čemu důvěřuješ.\n\nKde můžeš být oporou místo toho, abys tlačil vlastní směr? A kde si pleteš trpělivost s pasivitou?",
        anatomy: [
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
        evolution:
          "Vývoj Přijetí neprobíhá jako vzestup, ale jako prohlubování. Energie se usazuje, stabilizuje a vytváří prostor pro růst druhých.\n\nOd prvních jemných signálů až po plnou stabilitu jde o proces zrání důvěry. Síla se zde neprojevuje navenek, ale ve schopnosti nést a podporovat.\n\nPokud však stabilita přejde v nehybnost, vzniká napětí. Přijetí učí, že pružnost je silnější než odpor.",
      },
      en: {
        name: "The Receptive",
        meaning:
          "The Receptive represents the principle of Earth — a force that supports rather than initiates. It is the energy of nourishment, space, and stability. Unlike the Creative, it does not begin movement but allows it to grow. Receptivity is not weakness; it is the ground that makes development possible.\n\nPsychologically, this hexagram reflects openness. The capacity to listen, to cooperate, and to respond instead of imposing direction. It teaches trust in the process and the wisdom to recognize when to lead and when to follow.\n\nEarth is fertile because it does not resist. True strength lies in patience and resilience. When openness turns into passivity or loss of direction, stagnation arises. The Receptive calls for conscious support, not withdrawal.",
        oracle:
          "Do not strive to control. Listen to what the situation requires.\n\nStability brings success. Act with patience and without the need for immediate results.\n\nFollowing is not weakness when you know whom and what you trust.\n\nWhere can you become support instead of pushing your own direction? And where might patience be turning into passivity?",
        anatomy: [
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
        evolution:
          "The development of the Receptive is not an ascent but a deepening. Energy settles, stabilizes, and creates space for others to grow.\n\nFrom subtle beginnings to full steadiness, the process is one of maturing trust. Strength here does not manifest through dominance, but through the capacity to sustain and support.\n\nWhen stability hardens into immobility, tension appears. The Receptive teaches that flexibility is stronger than resistance.",
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
        oracle:
          "Začátky jsou křehké. Nespěchej.\n\nVyhledej podporu a buduj pevné základy místo rychlého postupu.\n\nObtíže jsou součástí cesty, nikoli jejím koncem.\n\nKde ve svém životě právě něco začíná? Snažíš se prorazit silou, nebo buduješ postupně?",
        anatomy: [
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
        evolution:
          "Vývoj tohoto hexagramu připomíná klíčení semene. Nejprve tlak půdy, odpor a nejistota. Postupně však vzniká tvar a směr.\n\nObtíže nejsou překážkou růstu, ale jeho podmínkou. Pokud je proces veden trpělivě a s podporou, vzniká pevný základ.\n\nUspěchat počátek znamená oslabit budoucnost. Správné tempo je důležitější než rychlost.",
      },
      en: {
        name: "Initial Difficulty",
        meaning:
          "Initial Difficulty represents the moment of emergence, when something new attempts to take form in the world. It is the energy of beginning confronted by resistance. Confusion, uncertainty, and tension are not mistakes — they are natural aspects of birth.\n\nPsychologically, this hexagram reflects the phase when you feel the impulse for change but conditions are not yet stable. Direction exists, but structure is unclear. It teaches patience, perseverance, and the wisdom to seek guidance.\n\nDifficulties do not indicate failure. They signal that something real is coming into being. When pressure leads to haste, the process may stall. Beginnings require structure and support.",
        oracle:
          "Beginnings are fragile. Do not rush.\n\nSeek support and build strong foundations instead of forcing rapid progress.\n\nObstacles are part of the path, not its end.\n\nWhere in your life is something trying to emerge? Are you forcing it, or allowing it to develop steadily?",
        anatomy: [
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
        evolution:
          "The development of this hexagram resembles a seed pushing through soil. At first there is pressure, resistance, and uncertainty. Gradually, form and direction emerge.\n\nDifficulty is not the enemy of growth but its condition. With patience and support, a solid foundation forms.\n\nRushing the beginning weakens the future. Proper timing matters more than speed.",
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
        oracle:
          "Hledej radu, ale ptej se upřímně.\n\nUčení přichází, když jsi připraven naslouchat.\n\nNevyžaduj odpovědi, pokud nejsi ochoten změnit své chování.\n\nKde ve svém životě potřebuješ vedení? A jsi skutečně připraven ho přijmout?",
        anatomy: [
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
        evolution:
          "Nezralost začíná nevědomostí, ale může skončit moudrostí. Proces vyžaduje pokoru a ochotu přijmout korekci.\n\nRůst nastává tehdy, když otázky vycházejí z opravdového zájmu, nikoli z provokace.\n\nOdmítání učení prodlužuje zmatek. Otevřenost jej proměňuje v porozumění.",
      },
      en: {
        name: "Youthful Folly",
        meaning:
          "Youthful Folly represents the state of not yet knowing but being ready to learn. It is not stupidity, but the early stage of understanding. Confusion and uncertainty are not obstacles here — they are the gateway to insight.\n\nPsychologically, this hexagram marks the moment when you recognize your own ignorance. That recognition is the beginning of wisdom. It teaches humility and the willingness to accept guidance. Learning, however, must be voluntary; forced instruction does not create growth.\n\nFolly is a natural phase of every beginning. When combined with stubbornness or refusal to listen, it turns into stagnation. Openness is the essential key.",
        oracle:
          "Seek guidance, but ask sincerely.\n\nLearning comes when you are ready to listen.\n\nDo not demand answers if you are unwilling to change.\n\nWhere in your life do you need instruction? And are you truly willing to receive it?",
        anatomy: [
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
        evolution:
          "Youthful Folly begins in not-knowing but can end in wisdom. The process requires humility and the willingness to be corrected.\n\nGrowth happens when questions arise from genuine curiosity rather than provocation.\n\nRefusing to learn prolongs confusion. Openness transforms it into understanding.",
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
        oracle:
          "Čekej klidně. Správný okamžik přijde.\n\nNeurychluj vývoj silou.\n\nTrpělivost je aktivní postoj.\n\nKde tlačíš na výsledek, který ještě není připraven?",
        anatomy: [
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
        evolution:
          "Čekání začíná napětím a končí uvolněním. Pokud je vyčkávání vědomé, přináší jasnost.\n\nNetrpělivost vede k chybě. Správné načasování je silnější než rychlost.",
      },
      en: {
        name: "Waiting",
        meaning:
          "Waiting represents conscious restraint. It is not passivity, but the ability to hold action until the right moment. Strength exists, yet circumstances are not mature.\n\nPsychologically, it reflects tension between impulse and timing. It teaches discernment.\n\nPatience is not weakness. It is trust. When waiting turns into anxiety, it loses its power.",
        oracle:
          "Wait calmly. The right moment will arrive.\n\nDo not force development.\n\nPatience is an active stance.\n\nWhere are you pushing for results too early?",
        anatomy: [
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
        evolution:
          "Waiting begins in tension and resolves in release. Conscious restraint brings clarity.\n\nImpatience leads to error. Timing outweighs speed.",
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
        oracle:
          "Nezrychluj spor.\n\nHledej jádro, ne povrch.\n\nMluv pravdivě, ale bez agrese.\n\nCo vlastně bráníš – pravdu, nebo své ego?\n\nA co by se stalo, kdybys na chvíli ustoupil?",
        anatomy: [
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
        evolution:
          "Konflikt začíná jako drobné napětí. Pokud není rozpoznán, sílí a polarizuje.\n\nSkutečný vývoj nastává ve chvíli, kdy člověk přestane bojovat o dominanci a začne hledat porozumění. Ustoupení zde není slabost, ale strategie vědomí.\n\nKaždý konflikt může být bodem růstu – nebo bodem rozdělení. Záleží na úrovni vědomí, z níž jednáš.",
      },
      en: {
        name: "Conflict",
        meaning:
          "Conflict does not arise out of nowhere. It appears when two truths refuse to hear one another. This hexagram does not describe an external quarrel but an inner tension. Often it is the clash between desire and reality, or between the need to be heard and the fear of losing position.\n\nPsychologically, it marks a state where energy moves against itself. One feels compelled to defend a stance. Pressure increases. Thoughts sharpen. At this stage, the issue is not victory but clarity.\n\nConflict can purify if it leads to understanding. But when driven by ego, it leaves division behind. Its wisdom lies in knowing when escalation becomes destructive.\n\nSometimes stepping back is strength. Not because you are wrong, but because the cost of winning may be too high.",
        oracle:
          "Do not accelerate the dispute.\n\nSeek the core, not the surface.\n\nSpeak truth without aggression.\n\nWhat are you defending – truth or ego?\n\nAnd what would happen if you stepped back?",
        anatomy: [
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
        evolution:
          "Conflict begins as subtle tension. If ignored, it intensifies and polarizes.\n\nTrue development occurs when the need to dominate is replaced by the wish to understand. Withdrawal here is awareness, not weakness.\n\nEvery conflict can become growth — or division. The outcome depends on consciousness.",
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
        oracle:
          "Jednej disciplinovaně.\n\nNespoléhej na chaos.\n\nVedení vyžaduje odpovědnost.\n\nJsi připraven nést důsledky svých rozhodnutí?\n\nA má tvé jednání jasný směr?",
        anatomy: [
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
        evolution:
          "Síla se nejprve shromažďuje a strukturuje.\n\nVývoj nastává skrze disciplínu a odpovědnost. Bez nich se energie rozpadá.\n\nSkutečné vítězství není porážka druhých, ale zvládnutí vlastního chaosu.",
      },
      en: {
        name: "The Army",
        meaning:
          "The Army symbolizes organized strength. It is not aggression, but discipline. This hexagram appears when energy must be focused and coordinated. Chaos needs structure.\n\nPsychologically, it represents responsibility within collective situations. Internally, scattered impulses must align under a clear intention.\n\nStrength without order is dangerous. Order without humanity becomes rigid. True leadership balances both.\n\nThe Army is not about war, but about confronting difficulty with clarity and discipline.",
        oracle:
          "Act with discipline.\n\nDo not rely on chaos.\n\nLeadership requires responsibility.\n\nAre you ready to bear the consequences?\n\nIs your direction clear?",
        anatomy: [
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
        evolution:
          "Energy gathers and forms structure.\n\nDevelopment depends on discipline and responsibility.\n\nVictory lies in mastering inner chaos.",
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
        oracle:
          "Hledej spojení.\n\nBuď důvěryhodný.\n\nNevzdávej se sebe sama.\n\nS kým nebo s čím se máš propojit?\n\nA je toto spojení vzájemné?",
        anatomy: [
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
        evolution:
          "Spojení začíná důvěrou.\n\nStabilita vzniká vzájemností.\n\nSkutečná jednota respektuje individualitu.",
      },
      en: {
        name: "Holding Together",
        meaning:
          "Holding Together expresses the need for connection. No one exists in isolation. This hexagram arises when relationship and alliance matter.\n\nPsychologically, it reflects trust balanced with individuality. Connection is not fusion, but conscious bonding.\n\nWithout trust, bonds dissolve. Without identity, authenticity fades.\n\nUnity is a deliberate choice.",
        oracle:
          "Seek connection.\n\nBe trustworthy.\n\nDo not lose yourself.\n\nWith whom should you align?\n\nIs the bond mutual?",
        anatomy: [
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
        evolution:
          "Connection begins with trust.\n\nStability requires reciprocity.\n\nTrue unity preserves individuality.",
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
        oracle:
          "Neuspěchej výsledek.\n\nZaměř se na detaily.\n\nUdržuj směr, i když je tempo pomalé.\n\nKde můžeš dnes udělat malý, ale důsledný krok?\n\nA co v tobě právě dozrává?",
        anatomy: [
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
        evolution:
          "Proces začíná zadržením. Energie není blokována, ale kultivována.\n\nVývoj probíhá skrze trpělivost a jemnou vytrvalost. Malé úspěchy se postupně skládají do větší stability.\n\nPokud člověk přijme rytmus času, objeví, že zdánlivé omezení bylo přípravou na pevnější a vědomější krok vpřed.",
      },
      en: {
        name: "The Taming Power of the Small",
        meaning:
          "The Taming Power of the Small represents a time when major advances are not yet possible. Energy gathers, but circumstances do not allow a breakthrough. This hexagram teaches patience and subtle influence. It is not a time for dramatic action, but for refinement.\n\nPsychologically, it reflects a state of contained potential. One feels capable, yet subtly restrained. Frustration may arise from perceived limitation, yet inner maturation is taking place.\n\nSmall actions, careful adjustments, and daily discipline matter more than bold gestures. What appears as delay may in fact be consolidation.\n\nThe power of the small is not weakness. It is the capacity to shape reality gently and persistently, respecting timing.",
        oracle:
          "Do not rush the outcome.\n\nFocus on details.\n\nMaintain direction despite slow progress.\n\nWhat small, consistent step can you take today?\n\nWhat within you is quietly ripening?",
        anatomy: [
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
        evolution:
          "The process begins with containment. Energy is not blocked, but cultivated.\n\nDevelopment unfolds through patience and subtle persistence. Small successes build deeper stability.\n\nWhen timing is respected, restraint reveals itself as preparation for a more conscious advance.",
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
        oracle:
          "Kráčej opatrně.\n\nJednej s respektem.\n\nNeztrácej rovnováhu.\n\nKde právě vstupuješ na citlivou půdu?\n\nA jak můžeš zachovat důstojnost v každém kroku?",
        anatomy: [
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
        evolution:
          "Proces začíná odvahou vstoupit.\n\nVývoj probíhá skrze rovnováhu mezi jistotou a pokorou.\n\nPokud člověk zachová bdělost, i nejistá cesta se stává stabilní. Vědomý krok je silnější než bezhlavý běh.",
      },
      en: {
        name: "Treading",
        meaning:
          "Treading symbolizes conscious movement within a sensitive situation. It appears when one steps onto uncertain ground. Each action requires attention, respect, and self-control.\n\nPsychologically, it reflects courage balanced by humility. Treading is not aggression, but mindful approach.\n\nRisk is not the enemy but the teacher. When movement is aware, danger transforms into growth.\n\nThis hexagram teaches that strength lies in precision. A careless step may disrupt harmony, while careful movement builds trust.",
        oracle:
          "Proceed carefully.\n\nAct with respect.\n\nMaintain balance.\n\nWhere are you stepping into sensitive territory?\n\nHow can you preserve dignity in each step?",
        anatomy: [
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
        evolution:
          "The process begins with courage.\n\nDevelopment unfolds through balance between confidence and humility.\n\nAwareness turns uncertain ground into stable progress.",
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
        oracle:
          "Využij období harmonie.\n\nBuduj vztahy.\n\nNeusínej na úspěchu.\n\nKde ve tvém životě proudí věci přirozeně?\n\nA jak tuto rovnováhu můžeš vědomě udržet?",
        anatomy: [
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
        evolution:
          "Mír vzniká propojením protikladů.\n\nVývoj spočívá v udržování otevřenosti a pokory i v období hojnosti.\n\nPokud je harmonie vědomě chráněna, může přerůst v hlubší stabilitu. Pokud je zanedbána, začíná se nenápadně vytrácet.",
      },
      en: {
        name: "Peace",
        meaning:
          "Peace represents harmonious balance between opposing forces. Heaven and Earth support one another. This hexagram signifies a time of natural flow, when events unfold with relative ease.\n\nPsychologically, it reflects inner integration. Reason and emotion, action and rest, outer demands and inner needs coexist without conflict. Energy moves freely because resistance dissolves.\n\nPeace, however, is not automatic. It requires awareness and humility. Pride or neglect can disturb balance.\n\nHarmony is not static; it is alive. It must be sustained through attentiveness and openness.",
        oracle:
          "Use this time of harmony wisely.\n\nStrengthen relationships.\n\nDo not grow complacent.\n\nWhere is life flowing naturally?\n\nHow can you preserve this balance consciously?",
        anatomy: [
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
        evolution:
          "Peace arises from balanced integration.\n\nDevelopment depends on maintaining humility during prosperity.\n\nWhen harmony is consciously nurtured, it matures into lasting stability.",
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
        oracle:
          "Nepřetlačuj odpor.\n\nZachovej integritu.\n\nObrať se dovnitř.\n\nKde cítíš odpojení?\n\nA co můžeš kultivovat uvnitř sebe?",
        anatomy: [
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
        evolution:
          "Stagnace je dočasné oddělení.\n\nVývoj probíhá skrze vnitřní stabilitu a trpělivost.\n\nKdyž jsou vnitřní základy pevné, proudění se přirozeně obnoví.",
      },
      en: {
        name: "Stagnation",
        meaning:
          "Stagnation represents a time when connection between forces is disrupted. What is above separates from what is below. Communication weakens and energy flow is restricted.\n\nPsychologically, it reflects alienation or blockage. Effort may seem unsupported. Yet this state is part of a cycle.\n\nStagnation teaches patience and inner stability. When outer movement is limited, attention turns inward.\n\nEven periods of standstill carry meaning. Inner growth continues despite outer stillness.",
        oracle:
          "Do not force resistance.\n\nPreserve integrity.\n\nTurn inward.\n\nWhere do you feel disconnection?\n\nWhat can you cultivate within?",
        anatomy: [
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
        evolution:
          "Stagnation marks temporary separation.\n\nDevelopment depends on patience and inner steadiness.\n\nWhen inner foundations are secure, flow naturally returns.",
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
          "Společenství lidí symbolizuje otevřenou spolupráci. Lidé se spojují kolem sdílené hodnoty.\n\nPsychologicky jde o překročení osobních rozdílů ve prospěch vyššího cíle.\n\nJednota je silná, pokud je založena na pravdivosti.",
        oracle:
          "Spojuj se otevřeně.\n\nHledej společné hodnoty.\n\nUpřímnost posiluje vztahy.\n\nS kým sdílíš skutečný cíl?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "Otevřené spojení",
            description: "Základ je upřímný.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní soudržnost",
            description: "Skupina se formuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Napětí ve vztazích",
            description: "Odlišnosti se objevují.",
          },
          {
            position: 4,
            type: 1,
            name: "Společná obrana",
            description: "Jednota čelí výzvě.",
          },
          {
            position: 5,
            type: 1,
            name: "Silné vedení",
            description: "Směr je jasný.",
          },
          {
            position: 6,
            type: 1,
            name: "Oddělenost",
            description: "Někteří zůstávají mimo.",
          },
        ],
        evolution:
          "Společenství vzniká sdílením hodnot.\n\nRoste otevřeností.\n\nRozpadá se při ztrátě upřímnosti.",
      },
      en: {
        name: "Fellowship with Men",
        meaning:
          "Fellowship with Men symbolizes open cooperation. People unite around shared values.\n\nPsychologically, it reflects transcending differences for a higher aim.\n\nUnity is strong when grounded in sincerity.",
        oracle:
          "Connect openly.\n\nSeek common ground.\n\nSincerity strengthens bonds.\n\nWith whom do you share a true purpose?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "Open Alliance",
            description: "The foundation is sincere.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Cohesion",
            description: "The group forms.",
          },
          {
            position: 3,
            type: 1,
            name: "Relational Tension",
            description: "Differences surface.",
          },
          {
            position: 4,
            type: 1,
            name: "Shared Defense",
            description: "Unity faces challenge.",
          },
          {
            position: 5,
            type: 1,
            name: "Strong Leadership",
            description: "Direction is clear.",
          },
          {
            position: 6,
            type: 1,
            name: "Isolation",
            description: "Some remain outside.",
          },
        ],
        evolution:
          "Fellowship grows from shared values.\n\nIt strengthens through openness.\n\nIt dissolves when sincerity fades.",
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
          "Velké vlastnictví symbolizuje hojnost – nejen materiální, ale i vnitřní. Jde o období, kdy energie vrcholí a možnosti jsou široké.\n\nPsychologicky je to stav, kdy máš vliv, zdroje nebo schopnosti, které mohou ovlivnit druhé.\n\nHojnost však vyžaduje odpovědnost. Bez integrity se proměňuje v pýchu.",
        oracle:
          "Nakládej s hojností vědomě.\n\nSdílení posiluje hodnotu.\n\nMoc bez pokory vede k pádu.\n\nJak zacházíš se svou silou?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "Skromný začátek",
            description: "Hojnost začíná odpovědností.",
          },
          {
            position: 2,
            type: 1,
            name: "Správné využití",
            description: "Využij zdroje moudře.",
          },
          {
            position: 3,
            type: 1,
            name: "Pokušení moci",
            description: "Pýcha ohrožuje rovnováhu.",
          },
          {
            position: 4,
            type: 1,
            name: "Velkorysost",
            description: "Sdílení upevňuje postavení.",
          },
          {
            position: 5,
            type: 0,
            name: "Střední rovnováha",
            description: "Moc je stabilní.",
          },
          {
            position: 6,
            type: 1,
            name: "Přehnané sebevědomí",
            description: "Nadměrná jistota vede k obratu.",
          },
        ],
        evolution:
          "Velké vlastnictví vrcholí odpovědným vedením.\n\nBez pokory se hojnost vyčerpá.\n\nSdílená síla přetrvává déle než hromadění.",
      },
      en: {
        name: "Great Possession",
        meaning:
          "Great Possession represents abundance — both material and inner. It marks a time when energy peaks and possibilities expand.\n\nPsychologically, it reflects influence and capability.\n\nAbundance demands responsibility. Without integrity, it turns into arrogance.",
        oracle:
          "Handle abundance consciously.\n\nSharing strengthens value.\n\nPower without humility leads to downfall.\n\nHow do you use your influence?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "Humble Beginning",
            description: "Abundance begins with responsibility.",
          },
          {
            position: 2,
            type: 1,
            name: "Right Use",
            description: "Use resources wisely.",
          },
          {
            position: 3,
            type: 1,
            name: "Temptation of Power",
            description: "Pride threatens balance.",
          },
          {
            position: 4,
            type: 1,
            name: "Generosity",
            description: "Sharing strengthens position.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Center",
            description: "Power remains steady.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess Confidence",
            description: "Overconfidence invites reversal.",
          },
        ],
        evolution:
          "Great Possession culminates in responsible leadership.\n\nWithout humility, abundance fades.\n\nShared strength endures longer than hoarded wealth.",
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
          "Skromnost představuje rovnováhu mezi schopností a pokorou. Síla zde není okázalá.\n\nPsychologicky jde o schopnost nepřeceňovat se ani nepodceňovat.\n\nSkromnost přitahuje důvěru.",
        oracle:
          "Zachovej jednoduchost.\n\nNepotřebuješ dokazovat svou hodnotu.\n\nTichá síla je nejpevnější.\n\nKde můžeš ustoupit bez ztráty důstojnosti?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Tichý začátek",
            description: "Skromnost přináší stabilitu.",
          },
          {
            position: 2,
            type: 0,
            name: "Upřímnost",
            description: "Autenticita buduje respekt.",
          },
          {
            position: 3,
            type: 1,
            name: "Vnitřní síla",
            description: "Pevnost bez pýchy.",
          },
          {
            position: 4,
            type: 0,
            name: "Omezení ega",
            description: "Nepřeháněj význam.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyvážený střed",
            description: "Rovnováha je klíčem.",
          },
          {
            position: 6,
            type: 0,
            name: "Přílišná skromnost",
            description: "Nadměrná zdrženlivost může brzdit.",
          },
        ],
        evolution:
          "Skromnost stabilizuje růst.\n\nBez ní se úspěch rozpadá.\n\nPokora chrání před pádem.",
      },
      en: {
        name: "Modesty",
        meaning:
          "Modesty represents balance between ability and humility. Strength here is not displayed.\n\nPsychologically, it reflects healthy self-awareness.\n\nModesty invites trust.",
        oracle:
          "Remain simple.\n\nYou need not prove your worth.\n\nQuiet strength endures.\n\nWhere can you yield without losing dignity?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Quiet Beginning",
            description: "Modesty creates stability.",
          },
          {
            position: 2,
            type: 0,
            name: "Sincerity",
            description: "Authenticity builds respect.",
          },
          {
            position: 3,
            type: 1,
            name: "Inner Strength",
            description: "Firmness without pride.",
          },
          {
            position: 4,
            type: 0,
            name: "Limiting Ego",
            description: "Do not exaggerate importance.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Center",
            description: "Balance is key.",
          },
          {
            position: 6,
            type: 0,
            name: "Excess Modesty",
            description: "Too much restraint may hinder growth.",
          },
        ],
        evolution:
          "Modesty stabilizes progress.\n\nWithout it, success collapses.\n\nHumility protects from downfall.",
      },
    },
  },
  {
    id: 16,
    number: 16,
    chineseName: "豫",
    romanization: "Yù",
    elements: [3, 2],
    lines: [0, 0, 1, 0, 0, 0],
    content: {
      cs: {
        name: "Nadšení",
        meaning:
          "Nadšení představuje energii, která probouzí a inspiruje. Pohyb začíná zevnitř.\n\nPsychologicky jde o období, kdy radost podporuje akci.\n\nBez směru se však nadšení rozptýlí.",
        oracle:
          "Nech energii proudit.\n\nSdílená radost posiluje komunitu.\n\nDrž nadšení v rovnováze.\n\nCo tě právě skutečně motivuje?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Skrytá radost",
            description: "Energie roste uvnitř.",
          },
          {
            position: 2,
            type: 0,
            name: "Připravenost",
            description: "Organizuj nadšení.",
          },
          {
            position: 3,
            type: 1,
            name: "Přílišná euforie",
            description: "Nadměrná radost může oslabit.",
          },
          {
            position: 4,
            type: 0,
            name: "Stabilní podpora",
            description: "Sdílené nadšení je silnější.",
          },
          {
            position: 5,
            type: 0,
            name: "Vedení energií",
            description: "Směr určuje úspěch.",
          },
          {
            position: 6,
            type: 0,
            name: "Vyčerpání",
            description: "Bez rovnováhy přichází únava.",
          },
        ],
        evolution:
          "Nadšení probouzí akci.\n\nBez struktury se však vyčerpá.\n\nSprávné vedení udržuje energii.",
      },
      en: {
        name: "Enthusiasm",
        meaning:
          "Enthusiasm represents inspiring energy that awakens movement.\n\nPsychologically, it marks joyful motivation.\n\nWithout direction, enthusiasm dissipates.",
        oracle:
          "Let energy flow.\n\nShared joy strengthens bonds.\n\nBalance excitement with clarity.\n\nWhat truly motivates you now?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Hidden Joy",
            description: "Energy builds within.",
          },
          {
            position: 2,
            type: 0,
            name: "Readiness",
            description: "Organize inspiration.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Euphoria",
            description: "Too much excitement weakens focus.",
          },
          {
            position: 4,
            type: 0,
            name: "Stable Support",
            description: "Shared enthusiasm is stronger.",
          },
          {
            position: 5,
            type: 0,
            name: "Guided Energy",
            description: "Direction ensures success.",
          },
          {
            position: 6,
            type: 0,
            name: "Exhaustion",
            description: "Without balance, fatigue follows.",
          },
        ],
        evolution:
          "Enthusiasm awakens action.\n\nWithout structure, it burns out.\n\nGuided energy sustains progress.",
      },
    },
  },
  {
    id: 17,
    number: 17,
    chineseName: "隨",
    romanization: "Suí",
    elements: [8, 3],
    lines: [1, 0, 0, 1, 0, 0],
    content: {
      cs: {
        name: "Následování",
        meaning:
          "Následování znamená vědomé přizpůsobení se pohybu, který je správný. Nejde o slepé podřízení, ale o rozpoznání směru, který má smysl.\n\nPsychologicky jde o schopnost flexibilně reagovat na změny. Síla zde spočívá ve schopnosti přizpůsobení.\n\nNásledování bez rozlišování vede k závislosti. Moudré následování posiluje.",
        oracle:
          "Následuj to, co je pravdivé.\n\nBuď flexibilní.\n\nNevzdávej se vlastní integrity.\n\nKoho nebo co následuješ — a proč?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "První krok",
            description: "Rozhodni se vědomě.",
          },
          {
            position: 2,
            type: 0,
            name: "Přilnutí",
            description: "Spojení přináší stabilitu.",
          },
          {
            position: 3,
            type: 0,
            name: "Ztráta směru",
            description: "Nesprávné následování oslabuje.",
          },
          {
            position: 4,
            type: 1,
            name: "Správná reakce",
            description: "Přizpůsobení přináší sílu.",
          },
          {
            position: 5,
            type: 0,
            name: "Věrnost středu",
            description: "Zůstaň u jádra.",
          },
          {
            position: 6,
            type: 0,
            name: "Přehnané přilnutí",
            description: "Závislost omezuje.",
          },
        ],
        evolution:
          "Následování roste z důvěry.\n\nBez rozlišování však ztrácí směr.\n\nFlexibilita je zde klíčem.",
      },
      en: {
        name: "Following",
        meaning:
          "Following represents conscious adaptation to a meaningful direction. It is not blind obedience but recognition of a valid path.\n\nPsychologically, it reflects flexibility in change.\n\nFollowing without discernment leads to dependency.",
        oracle:
          "Follow what is true.\n\nRemain adaptable.\n\nKeep your integrity.\n\nWhom or what are you following — and why?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "First Step",
            description: "Choose consciously.",
          },
          {
            position: 2,
            type: 0,
            name: "Attachment",
            description: "Connection creates stability.",
          },
          {
            position: 3,
            type: 0,
            name: "Loss of Direction",
            description: "Wrong allegiance weakens.",
          },
          {
            position: 4,
            type: 1,
            name: "Right Response",
            description: "Adaptation strengthens.",
          },
          {
            position: 5,
            type: 0,
            name: "Loyal to the Center",
            description: "Stay near the core.",
          },
          {
            position: 6,
            type: 0,
            name: "Excess Attachment",
            description: "Dependency restricts growth.",
          },
        ],
        evolution:
          "Following grows from trust.\n\nWithout discernment, it loses direction.\n\nFlexibility is essential.",
      },
    },
  },
  {
    id: 18,
    number: 18,
    chineseName: "蠱",
    romanization: "Gǔ",
    elements: [7, 4],
    lines: [0, 1, 1, 0, 0, 0],
    content: {
      cs: {
        name: "Náprava",
        meaning:
          "Náprava znamená práci s tím, co bylo zanedbáno nebo poškozeno. Jde o odhalení a opravu chyby.\n\nPsychologicky symbolizuje odvahu čelit minulosti.\n\nBez přijetí odpovědnosti nelze obnovit rovnováhu.",
        oracle:
          "Podívej se na to, co bylo přehlíženo.\n\nOprav chyby vědomě.\n\nMinulost lze uzdravit.\n\nČemu ses dlouho vyhýbal?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Začátek opravy",
            description: "Uvědomění chyby.",
          },
          {
            position: 2,
            type: 1,
            name: "Odvaha konfrontace",
            description: "Postav se problému.",
          },
          {
            position: 3,
            type: 1,
            name: "Obtížná korekce",
            description: "Oprava vyžaduje sílu.",
          },
          {
            position: 4,
            type: 0,
            name: "Podpora nápravy",
            description: "Spolupráce pomáhá.",
          },
          {
            position: 5,
            type: 0,
            name: "Obnovení rovnováhy",
            description: "Střed se stabilizuje.",
          },
          {
            position: 6,
            type: 0,
            name: "Uzavření cyklu",
            description: "Chyba je napravená.",
          },
        ],
        evolution:
          "Náprava začíná přiznáním.\n\nOdvaha léčí.\n\nIgnorování problému jej prohlubuje.",
      },
      en: {
        name: "Work on What Has Been Spoiled",
        meaning:
          "This hexagram represents addressing what has decayed or been neglected. It calls for correction.\n\nPsychologically, it reflects courage to face the past.\n\nWithout responsibility, balance cannot be restored.",
        oracle:
          "Look at what has been ignored.\n\nCorrect errors consciously.\n\nThe past can be healed.\n\nWhat have you avoided confronting?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Beginning the Repair",
            description: "Recognition of error.",
          },
          {
            position: 2,
            type: 1,
            name: "Courage to Confront",
            description: "Face the issue.",
          },
          {
            position: 3,
            type: 1,
            name: "Difficult Correction",
            description: "Repair requires strength.",
          },
          {
            position: 4,
            type: 0,
            name: "Support for Change",
            description: "Cooperation helps.",
          },
          {
            position: 5,
            type: 0,
            name: "Restored Balance",
            description: "Center stabilizes.",
          },
          {
            position: 6,
            type: 0,
            name: "Cycle Completed",
            description: "The error is resolved.",
          },
        ],
        evolution:
          "Repair begins with acknowledgment.\n\nCourage heals.\n\nIgnoring issues deepens decay.",
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
          "Přiblížení znamená vstup do nové situace s otevřeností. Jde o aktivní přítomnost.\n\nPsychologicky jde o schopnost být blízko bez dominance.\n\nSprávné načasování je klíčové.",
        oracle:
          "Přistupuj otevřeně.\n\nBuď přítomen.\n\nVyužij příležitost.\n\nKde se můžeš přiblížit bez tlaku?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Začátek kontaktu",
            description: "Otevřenost přináší důvěru.",
          },
          {
            position: 2,
            type: 0,
            name: "Stabilní přítomnost",
            description: "Blízkost posiluje vztah.",
          },
          {
            position: 3,
            type: 1,
            name: "Nadměrná blízkost",
            description: "Přílišná kontrola oslabuje.",
          },
          {
            position: 4,
            type: 1,
            name: "Pevné vedení",
            description: "Blízkost vyžaduje zodpovědnost.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyvážený přístup",
            description: "Střed je stabilní.",
          },
          {
            position: 6,
            type: 0,
            name: "Příliš pozdní přiblížení",
            description: "Čas se vyčerpal.",
          },
        ],
        evolution:
          "Přiblížení přináší příležitost.\n\nBez citlivosti však vede k odporu.",
      },
      en: {
        name: "Approach",
        meaning:
          "Approach signifies entering a new situation with openness. It is active presence.\n\nPsychologically, it reflects closeness without domination.\n\nTiming matters.",
        oracle:
          "Approach openly.\n\nBe present.\n\nSeize opportunity wisely.\n\nWhere can you draw nearer without pressure?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Beginning Contact",
            description: "Openness builds trust.",
          },
          {
            position: 2,
            type: 0,
            name: "Steady Presence",
            description: "Closeness strengthens.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Closeness",
            description: "Too much control weakens.",
          },
          {
            position: 4,
            type: 1,
            name: "Firm Guidance",
            description: "Closeness requires responsibility.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Approach",
            description: "Center remains stable.",
          },
          {
            position: 6,
            type: 0,
            name: "Too Late Approach",
            description: "Timing has passed.",
          },
        ],
        evolution:
          "Approach brings opportunity.\n\nWithout sensitivity, it leads to resistance.",
      },
    },
  },
  {
    id: 20,
    number: 20,
    chineseName: "觀",
    romanization: "Guān",
    elements: [4, 2],
    lines: [0, 0, 1, 1, 0, 0],
    content: {
      cs: {
        name: "Pohled",
        meaning:
          "Pohled znamená pozorování bez zásahu. Jde o odstup a jasné vnímání.\n\nPsychologicky symbolizuje introspekci a schopnost vidět celek.\n\nPorozumění přichází skrze klid.",
        oracle:
          "Zastav se a pozoruj.\n\nNespěchej k závěru.\n\nVidění přináší moudrost.\n\nCo vidíš, když se na chvíli stáhneš?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Povrchní pohled",
            description: "Vnímání je omezené.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní pohled",
            description: "Reflexe prohlubuje.",
          },
          {
            position: 3,
            type: 1,
            name: "Sebehodnocení",
            description: "Zkoumej motivy.",
          },
          {
            position: 4,
            type: 1,
            name: "Širší perspektiva",
            description: "Vidíš souvislosti.",
          },
          {
            position: 5,
            type: 0,
            name: "Jasné vedení",
            description: "Pozorování určuje směr.",
          },
          {
            position: 6,
            type: 0,
            name: "Oddělenost",
            description: "Přílišný odstup izoluje.",
          },
        ],
        evolution:
          "Pohled začíná odstupem.\n\nPorozumění roste klidem.\n\nBez akce však zůstává nevyužité.",
      },
      en: {
        name: "Contemplation",
        meaning:
          "Contemplation represents observing without interference. It is distance and clarity.\n\nPsychologically, it reflects introspection and awareness of the whole.\n\nUnderstanding arises from stillness.",
        oracle:
          "Pause and observe.\n\nDo not rush to judgment.\n\nSeeing brings wisdom.\n\nWhat do you notice when you step back?",
        anatomy: [
          {
            position: 1,
            type: 0,
            name: "Superficial View",
            description: "Perception is limited.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Reflection",
            description: "Reflection deepens insight.",
          },
          {
            position: 3,
            type: 1,
            name: "Self-Examination",
            description: "Examine motives.",
          },
          {
            position: 4,
            type: 1,
            name: "Broader Perspective",
            description: "Connections become clear.",
          },
          {
            position: 5,
            type: 0,
            name: "Clear Guidance",
            description: "Observation directs action.",
          },
          {
            position: 6,
            type: 0,
            name: "Detachment",
            description: "Too much distance isolates.",
          },
        ],
        evolution:
          "Contemplation begins with distance.\n\nUnderstanding grows in stillness.\n\nWithout action, insight remains unused.",
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
        name: "Prokousnutí",
        meaning:
          "Prokousnutí symbolizuje situaci, kdy je nutné odstranit překážku. Něco brání přirozenému toku věcí a vyžaduje jasný zásah.\n\nPsychologicky jde o konfrontaci s problémem, který nelze obejít. Vyhýbání jen prodlužuje napětí.\n\nRozhodnost přináší úlevu. Tvrdost však musí být spravedlivá, jinak vytváří další odpor.",
        oracle:
          "Postav se překážce přímo.\n\nBuď spravedlivý, ale pevný.\n\nNevyhýbej se nepříjemnému.\n\nCo je třeba konečně vyřešit?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "První odpor",
            description: "Problém se objevuje.",
          },
          {
            position: 2,
            type: 0,
            name: "Zadržená energie",
            description: "Napětí roste.",
          },
          {
            position: 3,
            type: 0,
            name: "Tvrdý střet",
            description: "Je nutná rozhodnost.",
          },
          {
            position: 4,
            type: 1,
            name: "Spravedlivý zásah",
            description: "Jednání je oprávněné.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyvážené řešení",
            description: "Problém se uvolňuje.",
          },
          {
            position: 6,
            type: 1,
            name: "Přílišná tvrdost",
            description: "Nadměrná přísnost škodí.",
          },
        ],
        evolution:
          "Prokousnutí přináší uvolnění.\n\nBez spravedlnosti se však mění v konflikt.\n\nJasné řešení obnovuje tok.",
      },
      en: {
        name: "Biting Through",
        meaning:
          "Biting Through represents the need to remove an obstruction. Something blocks natural flow and requires decisive action.\n\nPsychologically, it reflects direct confrontation.\n\nFirmness brings relief, but it must remain just.",
        oracle:
          "Face the obstacle directly.\n\nBe firm yet fair.\n\nAvoiding discomfort prolongs tension.\n\nWhat must finally be resolved?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "Initial Resistance",
            description: "The issue appears.",
          },
          {
            position: 2,
            type: 0,
            name: "Held Energy",
            description: "Tension increases.",
          },
          {
            position: 3,
            type: 0,
            name: "Hard Confrontation",
            description: "Decisiveness is required.",
          },
          {
            position: 4,
            type: 1,
            name: "Just Intervention",
            description: "Action is warranted.",
          },
          {
            position: 5,
            type: 0,
            name: "Balanced Resolution",
            description: "The blockage clears.",
          },
          {
            position: 6,
            type: 1,
            name: "Excess Severity",
            description: "Over-harshness harms.",
          },
        ],
        evolution:
          "Biting Through releases tension.\n\nWithout fairness, it becomes conflict.\n\nClear resolution restores movement.",
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
          "Půvab symbolizuje krásu a vnější formu. Nejde o povrchnost, ale o schopnost dát věcem harmonický výraz.\n\nPsychologicky jde o to, jak prezentujeme své myšlenky a hodnoty.\n\nForma má význam, pokud je spojena s obsahem.",
        oracle:
          "Dbej na způsob vyjádření.\n\nKrása může podpořit pravdu.\n\nNezaměňuj vzhled za podstatu.\n\nCo zdobíš — a proč?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "Jednoduchá ozdoba",
            description: "Forma podporuje obsah.",
          },
          {
            position: 2,
            type: 0,
            name: "Vnitřní krása",
            description: "Skrytá harmonie.",
          },
          {
            position: 3,
            type: 1,
            name: "Přehnaná výzdoba",
            description: "Přílišná forma zakrývá pravdu.",
          },
          {
            position: 4,
            type: 0,
            name: "Upřímný výraz",
            description: "Autenticita přitahuje.",
          },
          {
            position: 5,
            type: 0,
            name: "Vyváženost",
            description: "Krása je přirozená.",
          },
          {
            position: 6,
            type: 1,
            name: "Prázdná fasáda",
            description: "Bez obsahu zůstává jen zdání.",
          },
        ],
        evolution:
          "Půvab může inspirovat.\n\nBez podstaty však rychle mizí.\n\nHarmonie formy a obsahu je klíčem.",
      },
      en: {
        name: "Grace",
        meaning:
          "Grace represents beauty and outward form. It is not superficiality but harmonious expression.\n\nPsychologically, it reflects presentation.\n\nForm has value when aligned with substance.",
        oracle:
          "Care about expression.\n\nBeauty can support truth.\n\nDo not confuse appearance with essence.\n\nWhat are you decorating — and why?",
        anatomy: [
          {
            position: 1,
            type: 1,
            name: "Simple Adornment",
            description: "Form supports meaning.",
          },
          {
            position: 2,
            type: 0,
            name: "Inner Beauty",
            description: "Hidden harmony.",
          },
          {
            position: 3,
            type: 1,
            name: "Excess Decoration",
            description: "Too much form hides truth.",
          },
          {
            position: 4,
            type: 0,
            name: "Sincere Expression",
            description: "Authenticity attracts.",
          },
          {
            position: 5,
            type: 0,
            name: "Balance",
            description: "Beauty feels natural.",
          },
          {
            position: 6,
            type: 1,
            name: "Empty Façade",
            description: "Without substance, only appearance remains.",
          },
        ],
        evolution:
          "Grace inspires when authentic.\n\nWithout substance, it fades.\n\nHarmony of form and content endures.",
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
        oracle:
          "Nevzdoruj nevyhnutelnému.\n\nChraň jádro.\n\nUstoupení je někdy moudré.\n\nCo je třeba nechat odejít?",
        anatomy: [
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
        evolution:
          "Rozklad je přirozený cyklus.\n\nUstoupení chrání budoucnost.\n\nPo rozpadu přichází obnova.",
      },
      en: {
        name: "Splitting Apart",
        meaning:
          "Splitting Apart represents gradual decline. Structure weakens.\n\nPsychologically, it reflects fatigue or loss.\n\nIt is time to retreat and protect what matters.",
        oracle:
          "Do not resist the inevitable.\n\nProtect the core.\n\nRetreat can be wise.\n\nWhat must you let go?",
        anatomy: [
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
        evolution:
          "Decline is part of cycles.\n\nRetreat protects renewal.\n\nAfter decay comes rebirth.",
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
        oracle:
          "Vrať se k tomu, co je pravdivé.\n\nZačni znovu, bez výčitek.\n\nMalý krok stačí.\n\nKam se potřebuješ vrátit?",
        anatomy: [
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
        evolution:
          "Návrat je tichý začátek.\n\nMalá změna vede k velké obnově.\n\nVytrvalost upevňuje nový směr.",
      },
      en: {
        name: "Return",
        meaning:
          "Return marks the turning point after decline. A small light begins again.\n\nPsychologically, it represents coming back to one’s center.\n\nIt is a subtle but crucial renewal.",
        oracle:
          "Return to what is true.\n\nBegin again without regret.\n\nA small step is enough.\n\nWhere do you need to return?",
        anatomy: [
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
        evolution:
          "Return begins quietly.\n\nSmall correction leads to renewal.\n\nConsistency secures growth.",
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
        oracle:
          "Jednej upřímně.\n\nNespekuluj.\n\nPravdivost přináší ochranu.\n\nJsou tvé úmysly čisté?",
        anatomy: [
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
        evolution:
          "Nevinnost vychází z autenticity.\n\nBez pravdivosti se rozpadá.\n\nČistý motiv stabilizuje cestu.",
      },
      en: {
        name: "Innocence",
        meaning:
          "Innocence represents action without hidden motives. Purity of intention brings strength.\n\nPsychologically, it reflects authenticity.\n\nManipulation disturbs balance.",
        oracle:
          "Act sincerely.\n\nAvoid scheming.\n\nTruthfulness protects.\n\nAre your intentions clear?",
        anatomy: [
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
        evolution:
          "Innocence stems from authenticity.\n\nWithout truth, it collapses.\n\nClear intention steadies the path.",
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
        oracle:
          "Zadrž energii.\n\nBuduj základ.\n\nJednej až ve správný čas.\n\nKde je třeba vyčkat?",
        anatomy: [
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
        evolution:
          "Zdrženlivost posiluje charakter.\n\nUvolnění přichází ve správný okamžik.\n\nDisciplína vytváří trvalou sílu.",
      },
      en: {
        name: "Great Restraint",
        meaning:
          "Great Restraint represents gathering strength without immediate release.\n\nPsychologically, it reflects discipline.\n\nContained energy gains value.",
        oracle:
          "Hold your energy.\n\nBuild foundations.\n\nAct at the right time.\n\nWhere must you wait?",
        anatomy: [
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
        evolution:
          "Restraint strengthens character.\n\nRelease comes in proper timing.\n\nDiscipline creates lasting power.",
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
        oracle:
          "Vědomě si vybírej, co přijímáš.\n\nPečuj o své zdroje.\n\nNevhodná výživa oslabuje.\n\nČím právě krmíš svou mysl?",
        anatomy: [
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
        evolution:
          "Výživa formuje charakter.\n\nVědomá péče přináší sílu.\n\nNerovnováha vede k oslabení.",
      },
      en: {
        name: "Nourishment",
        meaning:
          "Nourishment represents what feeds us — physically and mentally.\n\nPsychologically, it points to the quality of inputs shaping character.\n\nWhat you consume becomes part of you.",
        oracle:
          "Choose carefully what you take in.\n\nCare for your resources.\n\nPoor nourishment weakens.\n\nWhat feeds your mind now?",
        anatomy: [
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
        evolution:
          "Nourishment shapes character.\n\nConscious care builds strength.\n\nImbalance leads to decline.",
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
        oracle:
          "Nepřetěžuj se.\n\nHledej oporu.\n\nZměň strukturu.\n\nCo tě tíží víc, než je únosné?",
        anatomy: [
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
        evolution:
          "Přetížení vyžaduje úpravu.\n\nBez podpory dochází k zlomu.\n\nObnova přichází změnou struktury.",
      },
      en: {
        name: "Great Excess",
        meaning:
          "Great Excess indicates a burden heavier than support.\n\nPsychologically, it reflects overload.\n\nA new structure is needed.",
        oracle:
          "Do not overstrain.\n\nSeek support.\n\nAdjust the framework.\n\nWhat feels heavier than it should?",
        anatomy: [
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
        evolution:
          "Excess demands adjustment.\n\nWithout support, collapse follows.\n\nRenewal comes through restructuring.",
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
        oracle:
          "Zůstaň bdělý.\n\nNepodléhej panice.\n\nVědomí je ochranou.\n\nJak reaguješ na nejistotu?",
        anatomy: [
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
        evolution:
          "Nebezpečí učí bdělosti.\n\nVnitřní rovnováha chrání.\n\nStrach může být učitelem.",
      },
      en: {
        name: "The Abyss",
        meaning:
          "The Abyss represents repeated danger or challenge.\n\nPsychologically, it reflects confronting fear.\n\nInner calm is the only security.",
        oracle:
          "Stay alert.\n\nDo not panic.\n\nAwareness protects.\n\nHow do you respond to uncertainty?",
        anatomy: [
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
        evolution:
          "Danger teaches awareness.\n\nInner balance protects.\n\nFear can become a teacher.",
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
        oracle:
          "Hledej jasnost.\n\nNeulpívej na povrchu.\n\nVědomí vede.\n\nCo je nyní třeba vidět jasně?",
        anatomy: [
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
        evolution:
          "Jas přináší poznání.\n\nBez rovnováhy však oslepuje.\n\nVědomé světlo vede k porozumění.",
      },
      en: {
        name: "Clarity",
        meaning:
          "Clarity represents light and awareness.\n\nPsychologically, it reflects insight.\n\nLight can illuminate or blind.",
        oracle:
          "Seek clarity.\n\nLook beneath the surface.\n\nAwareness guides.\n\nWhat needs to be seen clearly?",
        anatomy: [
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
        evolution:
          "Clarity reveals truth.\n\nWithout balance, it blinds.\n\nConscious light leads to understanding.",
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
        oracle:
          "Buď otevřený citlivosti.\n\nNemanipuluj.\n\nRezonance vzniká přirozeně.\n\nCo tě skutečně přitahuje – a proč?",
        anatomy: [
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
        evolution:
          "Vliv roste z citlivosti.\n\nBez autenticity se rozpadá.\n\nRespekt udržuje rovnováhu.",
      },
      en: {
        name: "Influence",
        meaning:
          "Influence represents natural attraction between forces. It is resonance, not manipulation.\n\nPsychologically, it reflects relational sensitivity.\n\nTrue influence arises from authenticity.",
        oracle:
          "Remain open and sensitive.\n\nDo not manipulate.\n\nResonance emerges naturally.\n\nWhat truly attracts you — and why?",
        anatomy: [
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
        evolution:
          "Influence grows through sensitivity.\n\nWithout authenticity, it fades.\n\nRespect sustains harmony.",
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
        oracle:
          "Vytrvej.\n\nUdrž směr.\n\nNestřídej cíl příliš rychle.\n\nV čem potřebuješ větší důslednost?",
        anatomy: [
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
        evolution:
          "Trvání buduje hodnotu.\n\nBez vytrvalosti se záměr rozpadá.\n\nČas je spojencem stability.",
      },
      en: {
        name: "Duration",
        meaning:
          "Duration represents stability through time. It is perseverance, not stagnation.\n\nPsychologically, it reflects discipline.\n\nWhat endures requires commitment.",
        oracle:
          "Persist.\n\nMaintain direction.\n\nAvoid constant shifts.\n\nWhere is consistency needed?",
        anatomy: [
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
        evolution:
          "Duration builds value.\n\nWithout perseverance, intention fades.\n\nTime strengthens what is steady.",
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
        oracle:
          "Nezůstávej tam, kde síla slábne.\n\nUstup vědomě.\n\nChraň svou energii.\n\nCo je lepší opustit?",
        anatomy: [
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
        evolution:
          "Ústup chrání budoucnost.\n\nBez strategie se mění v útěk.\n\nSprávný čas je klíčový.",
      },
      en: {
        name: "Retreat",
        meaning:
          "Retreat does not mean defeat but strategic preservation.\n\nPsychologically, it reflects recognizing unfavorable timing.\n\nWithdrawing can be wiser than confrontation.",
        oracle:
          "Do not stay where strength fades.\n\nWithdraw consciously.\n\nProtect your energy.\n\nWhat is better left behind?",
        anatomy: [
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
        evolution:
          "Retreat safeguards the future.\n\nWithout strategy, it becomes escape.\n\nTiming determines wisdom.",
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
        oracle:
          "Jednej pevně, ale s mírou.\n\nNepodléhej impulsu.\n\nSíla vyžaduje odpovědnost.\n\nKde je třeba použít sílu – a kde ji zadržet?",
        anatomy: [
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
        evolution:
          "Velká síla vrcholí v odpovědnosti.\n\nBez kontroly se obrací proti sobě.\n\nMoudrost řídí energii.",
      },
      en: {
        name: "Great Power",
        meaning:
          "Great Power represents peak strength and determination.\n\nPsychologically, it marks vitality and confidence.\n\nTrue power lies in restraint. Without control, it turns destructive.",
        oracle:
          "Act firmly, but with moderation.\n\nAvoid impulsiveness.\n\nPower requires responsibility.\n\nWhere should strength be used — and where restrained?",
        anatomy: [
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
        evolution:
          "Great Power culminates in responsibility.\n\nWithout restraint, it collapses.\n\nWisdom directs strength.",
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
        oracle:
          "Využij příležitosti.\n\nZůstaň vděčný.\n\nPostupuj krok za krokem.\n\nJak můžeš růst bez pýchy?",
        anatomy: [
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
        evolution:
          "Pokrok přináší světlo.\n\nBez pokory se mění v pád.\n\nVytrvalost stabilizuje růst.",
      },
      en: {
        name: "Progress",
        meaning:
          "Progress represents advancement and opportunity.\n\nPsychologically, it reflects growth and optimism.\n\nHumility sustains success.",
        oracle:
          "Seize opportunity.\n\nRemain grateful.\n\nAdvance steadily.\n\nHow can you grow without arrogance?",
        anatomy: [
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
        evolution:
          "Progress brings light.\n\nWithout humility, it reverses.\n\nConsistency sustains growth.",
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
        oracle:
          "Chraň své hodnoty.\n\nNeodhaľuj vše předčasně.\n\nUdrž světlo uvnitř.\n\nKde je třeba zůstat nenápadný?",
        anatomy: [
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
        evolution:
          "Světlo může být skryté.\n\nTrpělivost jej chrání.\n\nTemnota je dočasná.",
      },
      en: {
        name: "Darkening of the Light",
        meaning:
          "Darkening of the Light represents a time when clarity is suppressed.\n\nPsychologically, it calls for protecting integrity.\n\nInner light must remain intact.",
        oracle:
          "Protect your values.\n\nDo not reveal too much.\n\nKeep your light within.\n\nWhere must you remain discreet?",
        anatomy: [
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
        evolution:
          "Light may be hidden.\n\nPatience preserves it.\n\nDarkness is temporary.",
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
        oracle:
          "Upevni vztahy.\n\nRespektuj hranice.\n\nZačni u sebe.\n\nJakou roli právě zastáváš?",
        anatomy: [
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
        evolution:
          "Rodina funguje díky rovnováze.\n\nBez respektu se struktura rozpadá.\n\nJasné role přinášejí harmonii.",
      },
      en: {
        name: "The Family",
        meaning:
          "The Family represents structured relationships and responsibility.\n\nPsychologically, it reflects inner order.\n\nHarmony arises from clear roles.",
        oracle:
          "Strengthen relationships.\n\nRespect boundaries.\n\nBegin with yourself.\n\nWhat role are you fulfilling now?",
        anatomy: [
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
        evolution:
          "Family thrives on balance.\n\nWithout respect, structure weakens.\n\nClear roles sustain harmony.",
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
        oracle:
          "Hledej porozumění.\n\nNezesiluj konflikt.\n\nRozdíly mohou obohatit.\n\nCo je třeba přijmout jako jiné?",
        anatomy: [
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
        evolution:
          "Protiklad může vést k růstu.\n\nBez komunikace se mění v konflikt.\n\nRespekt umožňuje soužití.",
      },
      en: {
        name: "Opposition",
        meaning:
          "Opposition represents divergence and tension.\n\nPsychologically, it reflects inner conflict.\n\nDifference is not necessarily hostility.",
        oracle:
          "Seek understanding.\n\nDo not escalate conflict.\n\nDifferences can enrich.\n\nWhat must be accepted as different?",
        anatomy: [
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
        evolution:
          "Opposition can foster growth.\n\nWithout dialogue, it becomes conflict.\n\nRespect enables coexistence.",
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
        oracle:
          "Zvaž jinou cestu.\n\nNepřetlačuj odpor.\n\nVyhledej pomoc.\n\nKde je třeba změnit strategii?",
        anatomy: [
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
        evolution:
          "Překážka učí flexibilitě.\n\nObcházení může vést k úspěchu.\n\nTvrdohlavost situaci zhoršuje.",
      },
      en: {
        name: "Obstruction",
        meaning:
          "Obstruction represents blocked progress.\n\nPsychologically, it signals need for reassessment.\n\nDetours may be wiser than force.",
        oracle:
          "Consider another path.\n\nDo not force resistance.\n\nSeek assistance.\n\nWhere must strategy shift?",
        anatomy: [
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
        evolution:
          "Obstruction teaches flexibility.\n\nDetours lead forward.\n\nForce worsens difficulty.",
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
        oracle:
          "Nech věci odejít.\n\nUlev si.\n\nVyužij nové možnosti.\n\nCo můžeš konečně pustit?",
        anatomy: [
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
        evolution:
          "Uvolnění obnovuje energii.\n\nJe čas pohybu.\n\nMinulé napětí se rozpouští.",
      },
      en: {
        name: "Deliverance",
        meaning:
          "Deliverance follows tension. The problem dissolves.\n\nPsychologically, it reflects relief.\n\nLight action becomes possible.",
        oracle:
          "Let things go.\n\nRelease tension.\n\nUse new freedom wisely.\n\nWhat can you finally release?",
        anatomy: [
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
        evolution:
          "Deliverance restores energy.\n\nMovement resumes.\n\nPast tension dissolves.",
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
        oracle:
          "Zjednoduš.\n\nObětuj přebytečné.\n\nPosil to podstatné.\n\nCo je nyní zbytečné?",
        anatomy: [
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
        evolution:
          "Úbytek vede k očištění.\n\nOběť posiluje podstatu.\n\nRovnováha je klíčem.",
      },
      en: {
        name: "Decrease",
        meaning:
          "Decrease signifies conscious reduction. Giving up something strengthens what remains.\n\nPsychologically, it reflects simplification.\n\nLess can mean more.",
        oracle:
          "Simplify.\n\nSacrifice excess.\n\nStrengthen essentials.\n\nWhat is unnecessary now?",
        anatomy: [
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
        evolution:
          "Decrease purifies.\n\nSacrifice strengthens essence.\n\nBalance maintains growth.",
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
        oracle:
          "Podpoř druhé.\n\nBuď štědrý.\n\nRůst sdílej.\n\nKde můžeš být přínosem?",
        anatomy: [
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
        evolution:
          "Přínos přináší expanzi.\n\nSdílení posiluje vztahy.\n\nMíra chrání rovnováhu.",
      },
      en: {
        name: "Increase",
        meaning:
          "Increase signifies growth through generosity.\n\nPsychologically, it reflects openness and support.\n\nGrowth benefits all.",
        oracle:
          "Support others.\n\nBe generous.\n\nShare growth.\n\nWhere can you contribute?",
        anatomy: [
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
        evolution:
          "Increase brings expansion.\n\nSharing builds connection.\n\nModeration preserves balance.",
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
        oracle:
          "Promluv jasně.\n\nJednej rozhodně.\n\nNepodléhej hněvu.\n\nKde je třeba stanovit hranici?",
        anatomy: [
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
        evolution:
          "Rozhodnost přináší průlom.\n\nBez míry vede ke konfliktu.\n\nOdpovědnost stabilizuje změnu.",
      },
      en: {
        name: "Breakthrough",
        meaning:
          "Breakthrough signifies decisive expression.\n\nPsychologically, it reflects confrontation and clarity.\n\nCourage must be balanced with responsibility.",
        oracle:
          "Speak clearly.\n\nAct decisively.\n\nAvoid anger.\n\nWhere must a boundary be set?",
        anatomy: [
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
        evolution:
          "Breakthrough clears the way.\n\nWithout moderation, conflict arises.\n\nResponsibility stabilizes change.",
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
        oracle:
          "Buď pozorný.\n\nNepropadej okamžitému nadšení.\n\nZvaž důsledky.\n\nCo do tvého života právě vstupuje?",
        anatomy: [
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
        evolution:
          "Setkání může inspirovat.\n\nBez uvážení destabilizuje.\n\nVědomí chrání směr.",
      },
      en: {
        name: "Coming to Meet",
        meaning:
          "Coming to Meet signifies the sudden arrival of a strong influence.\n\nPsychologically, it reflects encountering a disruptive impulse or person.\n\nDiscernment is essential.",
        oracle:
          "Stay attentive.\n\nDo not rush into enthusiasm.\n\nConsider consequences.\n\nWhat is entering your life now?",
        anatomy: [
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
        evolution:
          "Meeting can inspire.\n\nWithout awareness, it destabilizes.\n\nDiscernment preserves direction.",
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
        oracle:
          "Spoj se s ostatními.\n\nSdílej záměr.\n\nBuduj důvěru.\n\nKde je potřeba kolektivní síla?",
        anatomy: [
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
        evolution:
          "Jednota přináší růst.\n\nBez důvěry se rozpadá.\n\nSpolečný cíl stabilizuje.",
      },
      en: {
        name: "Gathering Together",
        meaning:
          "Gathering Together represents uniting around a shared purpose.\n\nPsychologically, it reflects belonging.\n\nUnity creates strength.",
        oracle:
          "Unite with others.\n\nShare intention.\n\nBuild trust.\n\nWhere is collective strength needed?",
        anatomy: [
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
        evolution:
          "Unity strengthens growth.\n\nWithout trust, it collapses.\n\nShared purpose sustains cohesion.",
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
        oracle:
          "Postupuj trpělivě.\n\nNevynechávej kroky.\n\nVytrvalost přináší výsledek.\n\nJaký je tvůj další malý krok?",
        anatomy: [
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
        evolution:
          "Vzestup je postupný.\n\nVytrvalost buduje výšku.\n\nTrpělivost chrání stabilitu.",
      },
      en: {
        name: "Pushing Upward",
        meaning:
          "Pushing Upward signifies gradual progress through effort.\n\nPsychologically, it reflects steady development.\n\nStep by step brings achievement.",
        oracle:
          "Advance patiently.\n\nDo not skip stages.\n\nPersistence yields results.\n\nWhat is your next small step?",
        anatomy: [
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
        evolution:
          "Ascent is gradual.\n\nPerseverance builds height.\n\nPatience ensures stability.",
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
        oracle:
          "Nevzdávej se.\n\nHledej vnitřní oporu.\n\nNevyčerpávej se bojem.\n\nKde čerpáš sílu?",
        anatomy: [
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
        evolution:
          "Tíseň učí vytrvalosti.\n\nVnitřní síla překoná omezení.\n\nTrpělivost přináší uvolnění.",
      },
      en: {
        name: "Oppression",
        meaning:
          "Oppression signifies constraint and inner pressure.\n\nPsychologically, it reflects exhaustion or isolation.\n\nStrength must come from within.",
        oracle:
          "Do not give up.\n\nSeek inner support.\n\nAvoid futile struggle.\n\nWhere do you draw strength?",
        anatomy: [
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
        evolution:
          "Oppression builds endurance.\n\nInner strength overcomes limits.\n\nPatience leads to release.",
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
        oracle:
          "Pečuj o své zdroje.\n\nNezanedbávej základ.\n\nČerpej vědomě.\n\nCo je tvým trvalým zdrojem?",
        anatomy: [
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
        evolution:
          "Studna je trvalá.\n\nÚdržba je nutná.\n\nZanedbání vede k vyčerpání.",
      },
      en: {
        name: "The Well",
        meaning:
          "The Well represents a constant source.\n\nPsychologically, it reflects deep values.\n\nSources require maintenance.",
        oracle:
          "Care for your resources.\n\nMaintain foundations.\n\nDraw consciously.\n\nWhat is your lasting source?",
        anatomy: [
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
        evolution:
          "The Well remains constant.\n\nMaintenance preserves value.\n\nNeglect leads to decline.",
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
        oracle:
          "Jednej ve správný čas.\n\nNepospíchej.\n\nBuď transparentní.\n\nCo je připraveno ke změně?",
        anatomy: [
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
        evolution:
          "Proměna obnovuje energii.\n\nBez načasování selže.\n\nVědomí stabilizuje přerod.",
      },
      en: {
        name: "Revolution",
        meaning:
          "Revolution signifies fundamental change.\n\nPsychologically, it reflects transformation.\n\nTiming determines success.",
        oracle:
          "Act at the right moment.\n\nDo not rush.\n\nBe transparent.\n\nWhat is ready to change?",
        anatomy: [
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
        evolution:
          "Revolution renews energy.\n\nWithout timing, it fails.\n\nAwareness stabilizes transition.",
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
        oracle:
          "Pečuj o proces.\n\nVytvářej hodnotu.\n\nBuď trpělivý.\n\nCo je třeba kultivovat?",
        anatomy: [
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
        evolution:
          "Kotlík proměňuje surové v hodnotné.\n\nProces vyžaduje péči.\n\nTrpělivost přináší kvalitu.",
      },
      en: {
        name: "The Cauldron",
        meaning:
          "The Cauldron represents cultivation and transformation.\n\nPsychologically, it reflects maturation.\n\nProper care enables refinement.",
        oracle:
          "Nurture the process.\n\nCreate value.\n\nBe patient.\n\nWhat needs cultivation?",
        anatomy: [
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
        evolution:
          "The Cauldron refines raw material.\n\nProcess demands care.\n\nPatience produces quality.",
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
        oracle:
          "Zachovej klid.\n\nNereaguj unáhleně.\n\nVnímej, co tě situace učí.\n\nCo tě právě probouzí?",
        anatomy: [
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
        evolution:
          "Otřes probouzí vědomí.\n\nPrvní reakce je strach.\n\nKlid přináší porozumění.",
      },
      en: {
        name: "Shock",
        meaning:
          "Shock represents sudden awakening. It disrupts certainty.\n\nPsychologically, it reflects sudden insight or crisis.\n\nShock can frighten but also enlighten.",
        oracle:
          "Stay calm.\n\nAvoid impulsive reaction.\n\nLearn from the moment.\n\nWhat is awakening within you?",
        anatomy: [
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
        evolution:
          "Shock awakens awareness.\n\nFear subsides through calm.\n\nInsight emerges afterward.",
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
        oracle:
          "Zpomal.\n\nNevyvíjej tlak.\n\nNajdi ticho.\n\nKde je třeba přestat?",
        anatomy: [
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
        evolution:
          "Zastavení přináší jasnost.\n\nKlid obnovuje energii.\n\nPřílišná strnulost brzdí růst.",
      },
      en: {
        name: "Stillness",
        meaning:
          "Stillness signifies pause and restraint.\n\nPsychologically, it reflects meditation.\n\nStopping restores balance.",
        oracle:
          "Slow down.\n\nDo not force.\n\nSeek silence.\n\nWhere must you pause?",
        anatomy: [
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
        evolution:
          "Stillness clarifies.\n\nCalm renews energy.\n\nRigidity blocks growth.",
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
        oracle:
          "Buď trpělivý.\n\nNevynechávej kroky.\n\nBuduj postupně.\n\nKde potřebuješ více času?",
        anatomy: [
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
        evolution:
          "Postupnost přináší stabilitu.\n\nTrpělivost buduje pevnost.\n\nUnáhlenost narušuje proces.",
      },
      en: {
        name: "Gradual Progress",
        meaning:
          "Gradual Progress represents steady development.\n\nPsychologically, it reflects maturation.\n\nLasting change unfolds slowly.",
        oracle:
          "Be patient.\n\nDo not skip steps.\n\nBuild steadily.\n\nWhere is time required?",
        anatomy: [
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
        evolution:
          "Gradual growth ensures stability.\n\nPatience builds strength.\n\nHaste disrupts progress.",
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
        oracle:
          "Nepodceňuj svou hodnotu.\n\nJednej s důstojností.\n\nNevstupuj do nerovnováhy bez vědomí.\n\nKde přijímáš méně, než si zasloužíš?",
        anatomy: [
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
        evolution:
          "Nerovnováha vyžaduje vědomí.\n\nSebehodnota chrání integritu.\n\nZralost přináší rovnost.",
      },
      en: {
        name: "The Marrying Maiden",
        meaning:
          "This hexagram signifies entering a relationship or role under unequal conditions.\n\nPsychologically, it reflects accepting limited agency.\n\nSelf-awareness is essential.",
        oracle:
          "Know your worth.\n\nAct with dignity.\n\nAvoid unconscious imbalance.\n\nWhere are you accepting less than you deserve?",
        anatomy: [
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
        evolution:
          "Imbalance demands awareness.\n\nSelf-respect preserves integrity.\n\nMaturity restores equality.",
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
        oracle:
          "Využij plnost času.\n\nBuď vděčný.\n\nPřiprav se na změnu.\n\nJak zacházíš se svým úspěchem?",
        anatomy: [
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
        evolution:
          "Hojnost je dočasná.\n\nVděčnost stabilizuje.\n\nPřipravenost chrání budoucnost.",
      },
      en: {
        name: "Abundance",
        meaning:
          "Abundance represents fullness and peak vitality.\n\nPsychologically, it reflects success and brightness.\n\nPeaks are temporary.",
        oracle:
          "Use the moment wisely.\n\nBe grateful.\n\nPrepare for change.\n\nHow do you handle success?",
        anatomy: [
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
        evolution:
          "Abundance is transient.\n\nGratitude stabilizes success.\n\nPreparedness protects continuity.",
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
        oracle:
          "Chovej se opatrně.\n\nNeulpívej.\n\nRespektuj cizí prostředí.\n\nCo se učíš na cestě?",
        anatomy: [
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
        evolution:
          "Putování přináší zkušenost.\n\nLehkost chrání.\n\nDomov se nachází uvnitř.",
      },
      en: {
        name: "The Wanderer",
        meaning:
          "The Wanderer represents transience and movement away from home.\n\nPsychologically, it reflects a period of searching.\n\nLightness and respect are necessary.",
        oracle:
          "Be cautious.\n\nDo not cling.\n\nRespect foreign ground.\n\nWhat are you learning on this journey?",
        anatomy: [
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
        evolution:
          "Wandering brings experience.\n\nLightness protects.\n\nHome is found within.",
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
        oracle:
          "Buď vytrvalý.\n\nPostupuj nenápadně.\n\nNezvyšuj tlak.\n\nKde můžeš působit jemněji?",
        anatomy: [
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
        evolution:
          "Pronikání je postupné.\n\nTrpělivost přináší výsledek.\n\nJemnost stabilizuje změnu.",
      },
      en: {
        name: "The Gentle",
        meaning:
          "The Gentle represents gradual influence through persistence.\n\nPsychologically, it reflects subtle impact.\n\nSoftness can overcome force.",
        oracle:
          "Persist quietly.\n\nApply gentle pressure.\n\nAvoid harshness.\n\nWhere can you act more subtly?",
        anatomy: [
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
        evolution:
          "Gentle influence is gradual.\n\nPatience yields success.\n\nSoftness stabilizes change.",
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
        oracle:
          "Buď otevřený.\n\nSdílej.\n\nNenech radost sklouznout k povrchnosti.\n\nCo tě skutečně těší?",
        anatomy: [
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
        evolution:
          "Radost spojuje.\n\nUpřímnost ji stabilizuje.\n\nPovrchnost ji oslabuje.",
      },
      en: {
        name: "Joy",
        meaning:
          "Joy represents openness and communication.\n\nPsychologically, it reflects lightness of being.\n\nShared joy strengthens bonds.",
        oracle:
          "Be open.\n\nShare sincerely.\n\nAvoid superficiality.\n\nWhat truly brings you joy?",
        anatomy: [
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
        evolution:
          "Joy unites.\n\nSincerity stabilizes.\n\nSuperficiality weakens.",
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
        oracle:
          "Uvolni napětí.\n\nSpojuj.\n\nNehromad obavy.\n\nCo můžeš rozpustit?",
        anatomy: [
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
        evolution:
          "Rozpuštění přináší klid.\n\nJednota vzniká uvolněním.\n\nRovnováha je nutná.",
      },
      en: {
        name: "Dispersion",
        meaning:
          "Dispersion signifies dissolving tension and obstacles.\n\nPsychologically, it reflects release of fear.\n\nUnity emerges through openness.",
        oracle:
          "Release tension.\n\nReconnect.\n\nDo not cling to fear.\n\nWhat can you dissolve?",
        anatomy: [
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
        evolution:
          "Dispersion brings relief.\n\nUnity forms through openness.\n\nBalance maintains clarity.",
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
        oracle:
          "Stanov si meze.\n\nRespektuj pravidla.\n\nNepřeháněj omezení.\n\nKde potřebuješ jasné hranice?",
        anatomy: [
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
        evolution:
          "Omezení stabilizuje.\n\nDisciplína chrání.\n\nPřehnanost omezuje růst.",
      },
      en: {
        name: "Limitation",
        meaning:
          "Limitation represents structure and boundaries.\n\nPsychologically, it reflects discipline.\n\nBoundaries protect energy.",
        oracle:
          "Set limits.\n\nRespect structure.\n\nAvoid excess rigidity.\n\nWhere are boundaries needed?",
        anatomy: [
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
        evolution:
          "Limitation stabilizes.\n\nDiscipline protects.\n\nRigidity blocks growth.",
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
        oracle:
          "Buď upřímný.\n\nNaslouchej sobě.\n\nBuduj důvěru.\n\nJednáš v souladu se svým nitrem?",
        anatomy: [
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
        evolution:
          "Pravda vytváří spojení.\n\nIntegrita stabilizuje vztahy.\n\nSebeklam vede k rozpadu.",
      },
      en: {
        name: "Inner Truth",
        meaning:
          "Inner Truth represents sincerity and trust.\n\nPsychologically, it reflects alignment between words and actions.\n\nAuthenticity builds connection.",
        oracle:
          "Be sincere.\n\nListen within.\n\nBuild trust.\n\nAre you aligned with yourself?",
        anatomy: [
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
        evolution:
          "Truth builds connection.\n\nIntegrity sustains relationships.\n\nDeception dissolves trust.",
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
        oracle:
          "Buď pozorný k detailům.\n\nNeusiluj o velké skoky.\n\nPostupuj opatrně.\n\nCo vyžaduje jemnou úpravu?",
        anatomy: [
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
        evolution:
          "Malé kroky budují stabilitu.\n\nDetail rozhoduje.\n\nPřehnanost škodí.",
      },
      en: {
        name: "Preponderance of the Small",
        meaning:
          "Preponderance of the Small emphasizes attention to detail.\n\nPsychologically, it reflects subtle adjustments.\n\nSmall actions matter.",
        oracle:
          "Focus on details.\n\nAvoid big leaps.\n\nProceed carefully.\n\nWhat needs subtle refinement?",
        anatomy: [
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
        evolution:
          "Small steps ensure stability.\n\nDetails matter.\n\nExcess disrupts.",
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
        oracle:
          "Zůstaň bdělý.\n\nNepolevuj.\n\nUdržuj rovnováhu.\n\nCo je třeba dále udržovat?",
        anatomy: [
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
        evolution:
          "Dokončení je dočasné.\n\nBdělost chrání stav.\n\nNedbalost vede k obratu.",
      },
      en: {
        name: "After Completion",
        meaning:
          "After Completion signifies achieved order.\n\nPsychologically, it reflects temporary balance.\n\nCompletion is not permanent.",
        oracle:
          "Remain vigilant.\n\nDo not relax too soon.\n\nMaintain balance.\n\nWhat requires continued care?",
        anatomy: [
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
        evolution:
          "Completion is temporary.\n\nVigilance preserves order.\n\nNeglect causes reversal.",
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
        oracle:
          "Nevzdávej se těsně před cílem.\n\nBuď trpělivý.\n\nDokonči proces vědomě.\n\nCo zbývá dotáhnout?",
        anatomy: [
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
        evolution:
          "Proces je téměř hotov.\n\nTrpělivost přináší dokončení.\n\nUnáhlenost vše narušuje.",
      },
      en: {
        name: "Before Completion",
        meaning:
          "Before Completion signifies unfinished process.\n\nPsychologically, it reflects being near the goal.\n\nCaution is crucial.",
        oracle:
          "Do not give up near the finish.\n\nBe patient.\n\nComplete consciously.\n\nWhat remains unfinished?",
        anatomy: [
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
        evolution:
          "Completion is near.\n\nPatience ensures success.\n\nHaste disrupts fulfillment.",
      },
    },
  },
];
