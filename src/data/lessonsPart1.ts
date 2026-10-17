import atelierHeroImg from '../assets/images/atelier_hero_banner_1790522267282.jpg';
import patternCuttingImg from '../assets/images/lesson_pattern_cutting_1790522285628.jpg';
import sewingMachineImg from '../assets/images/lesson_sewing_machine_1790522322240.jpg';
import adrasDressImg from '../assets/images/community_adras_dress_1790522299225.jpg';
import velvetNimchaImg from '../assets/images/community_velvet_nimcha_1790522340641.jpg';
import { Lesson } from './tailoringData';

export const LESSONS_PART_1: Lesson[] = [
  {
    id: 'lesson-1',
    lessonNumber: 1,
    title: "1-dars: O'lcham olishning eng oson usuli",
    subtitle: "Santimetr lentasini to'g'ri ushlash va 5 ta asosiy o'lchamni xatosiz yozib olish",
    simpleSummary: "Ko'ylak chiroyli turishi uchun faqat 5 ta joyni o'lchasangiz kifoya — juda oson!",
    category: 'bichish',
    categoryLabel: 'Bichish asoslari',
    level: "Boshlang'ich",
    duration: '10 daqiqa',
    stepsCount: 3,
    image: atelierHeroImg,
    fabricRecommendation: "Mashq uchun har qanday uyda bor mato",
    seamAllowance: "O'lchaganda santimetr orasiga 1 ta barmoq sig'adigan bo'shliq qoldiring",
    requiredTools: ["Santimetr lentasi", "Daftar va ruchka", "Belga bog'lash uchun oddiy tasma"],
    steps: [
      {
        stepNumber: 1,
        title: "Belga ingichka tasma bog'lab olish",
        instruction: "O'lchayotgan odamning eng ingichka bel qismiga oddiy ip yoki tasma bog'lang. Shunda bel qayerdaligini qidirib qiynalmaysiz.",
        measurementNote: "Bel chizig'i = kindikdan 2 barmoq tepada bo'ladi",
        auntieTip: "O'lcham olayotganda odam qornini ichiga tortmasdan, tabiiy va erkin turishi kerak.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Ko'krak, Bel va Bo'ksani aylantirib o'lchash",
        instruction: "Santimetrni ko'krakning eng baland nuqtasidan aylantirib o'lchang. Lentaning ostiga o'zingizning 1 ta ko'rsatkich barmog'ingizni tiqib turing — shunda kiyim tor bo'lib qolmaydi.",
        measurementNote: "Ko'krak, Bel, Bo'ksa o'lchami (yozayotganda ikkiga bo'lib yozamiz)",
        auntieTip: "Santimetr lentasi orqa kurakda pastga tushib ketmasin, polga tekis turishiga qarang.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 3,
        title: "Yeng va Ko'ylak uzunligini o'lchash",
        instruction: "Bo'yin yonidagi suyakchadan boshlab o'zingiz xohlagan ko'ylak uzunligigacha lentani tushiring. Yengni esa yelka uchidan bilakkacha qo'lni sal bukib o'lchang.",
        measurementNote: "Bo'y uzunligi: yelkadan pastgacha",
        auntieTip: "Ilovadagi 'O'lcham' bo'limiga shu sonlarni yozsangiz, qolganini dastur o'zi hisoblab beradi!",
        diagramType: 'bodice_grid'
      }
    ]
  },
  {
    id: 'lesson-2',
    lessonNumber: 2,
    title: "2-dars: Matoni yuvib-dazmollash va ikki buklash",
    subtitle: "Tikilgan ko'ylak yuvilganda kalta bo'lib qolmasligi uchun eng birinchi ish",
    simpleSummary: "Matoni kesishdan oldin iliq suvga chayib dazmollasangiz, keyin hech qachon kirishmaydi.",
    category: 'bichish',
    categoryLabel: 'Bichish asoslari',
    level: "Boshlang'ich",
    duration: '12 daqiqa',
    stepsCount: 3,
    image: patternCuttingImg,
    fabricRecommendation: "Shtapel, paxta, chit, adras va zig'ir matolar",
    seamAllowance: "Mato chetidagi qattiq qirrasi (milk) 1.5 sm kesib tashlanadi",
    requiredTools: ["Iliq suvli tog'ora", "Bug'li dazmol", "Katta stol yoki tekis pol"],
    steps: [
      {
        stepNumber: 1,
        title: "Matoni iliq suvga botirib olish",
        instruction: "Yangi olingan shtapel yoki paxta matoni iliq suvga 10 daqiqa solib qo'ying, keyin siqmasdan osib qo'ying. Sal namligida dazmollang.",
        measurementNote: "Shtapel mato yuvilganda 1 metrdan 5 sm gacha qisqaradi",
        auntieTip: "Shu ishni erinmasdan qilsangiz, tikkan ko'ylagingiz yillar davomida o'z shaklini yo'qotmaydi.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Matoni gulli (o'ng) tomonini ichkariga qaratib buklash",
        instruction: "Matoning chiroyli gulli tomonini ichkariga, teskari tomonini esa o'zingizga qaratib ikki buklang. Bo'r chiziqlari teskari tomonda qoladi va kiyganda ko'rinmaydi.",
        measurementNote: "Mato bo'yiga qarab ikki buklanadi",
        auntieTip: "Agar matodagi gullar tepaga qarab o'sgan bo'lsa, ko'ylakda ham gullar tepaga qarab turishini tekshiring.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 3,
        title: "Chetlarini igna bilan qimirlamaydigan qilish",
        instruction: "Ikki buklangan matoning chetlarini har 1 qarichda (20 sm) to'g'nog'ich igna bilan bir-biriga qadab chiqing.",
        measurementNote: "Ignalar orasidagi masofa: 15–20 sm",
        auntieTip: "Stol ustida joy tor bo'lsa, toza gilam ustida tizzalab bichsangiz mato sirpanib ketmaydi.",
        diagramType: 'bodice_grid'
      }
    ]
  },
  {
    id: 'lesson-3',
    lessonNumber: 3,
    title: "3-dars: Qog'ozsiz to'g'ridan-to'g'ri matoga chizib bichish",
    subtitle: "Gazeta va qog'ozlarsiz, bo'r va chizg'ich bilan 10 daqiqada ko'ylak bichish",
    simpleSummary: "Mato ustida 3 ta to'g'ri chiziq tortib, eng oson uy ko'ylagini bichamiz.",
    category: 'bichish',
    categoryLabel: 'Bichish asoslari',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: patternCuttingImg,
    fabricRecommendation: "Chit, shtapel yoki trikotaj (2 metr)",
    seamAllowance: "Yoniga 1 barmoq (1.5 sm), etagiga 2 barmoq (3 sm) chok haqi",
    requiredTools: ["Yupqa sovun bo'lagi yoki bo'r", "Uzun chizg'ich", "O'tkir qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Tepadan pastga 3 ta qator chiziq tushirish",
        instruction: "Mato buklangan joyning eng tepasidan pastga qarab: 20 sm (ko'krak joyi), 40 sm (bel joyi) va 60 sm (bo'ksa joyi) o'lchab, chizg'ichda to'g'ri chiziqlar torting.",
        measurementNote: "Tepadan: 20 sm (Ko'krak) • 40 sm (Bel) • 60 sm (Bo'ksa)",
        auntieTip: "Bo'r o'rniga yupqa bo'lib qolgan atirsovun ishlatsangiz, dazmol tekkanda izi darrov yo'qoladi!",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Kenglikni o'lchab nuqta qo'yish",
        instruction: "Ko'krak aylanangizning to'rtdan bir qismiga 2 sm qo'shib, buklangan chiziqdan o'ngga qarab belgilang. Masalan, ko'krak 100 sm bo'lsa, 25 + 2 = 27 sm belgilaysiz.",
        measurementNote: "Ko'krak / 4 + 2 sm erkinlik",
        auntieTip: "Uy ko'ylagi sal kengroq va salqin turishi uchun 2 sm emas, 3 sm qo'shsangiz yanada qulay bo'ladi.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 3,
        title: "Nuqtalarni birlashtirib, qaychi bilan kesish",
        instruction: "Qo'yilgan nuqtalarni chizg'ich bilan birlashtiring. Chiziqning ustidan emas, undan 1 barmoq eni (1.5 sm) tashqaridan qaychi bilan kesib chiqing.",
        measurementNote: "Chok haqi: 1 barmoq eni (1.5 sm)",
        auntieTip: "Qaychini havoga ko'tarmasdan, stolga suyab kessangiz qirralari arra-arra bo'lib qolmaydi.",
        diagramType: 'bodice_grid'
      }
    ]
  },
  {
    id: 'lesson-4',
    lessonNumber: 4,
    title: "4-dars: Old va orqa yoqa o'mizini chiroyli o'yish",
    subtitle: "Yoqa bo'g'ib qo'ymasligi yoki yelkadan tushib ketmasligi uchun oltin qoida",
    simpleSummary: "Orqa yoqani sayozroq (2 barmoq), old yoqani esa chuqurroq (1 kaft) qilib o'yamiz.",
    category: 'bichish',
    categoryLabel: 'Bichish asoslari',
    level: "Boshlang'ich",
    duration: '10 daqiqa',
    stepsCount: 3,
    image: patternCuttingImg,
    fabricRecommendation: "Barcha ko'ylaklik matolar uchun",
    seamAllowance: "Yoqa o'miziga 0.7 sm (yarim barmoq) chok haqi yetarli",
    requiredTools: ["Bo'r", "Santimetr", "Qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Yoqa eniga 7 sm belgilash",
        instruction: "Mato buklangan burchakdan o'ng tomonga qarab 7 sm (to'la ayollar uchun 8 sm) o'lchab nuqta qo'ying. Bundan keng qilsangiz, ko'ylak yelkadan sirg'alib tushaveradi.",
        measurementNote: "Yoqa kengligi: 7 sm yoki 7.5 sm",
        auntieTip: "Har doim yoqani avval kichikroq o'ying — tor bo'lsa kengaytirish oson, keng ketsa toraytirib bo'lmaydi!",
        diagramType: 'sleeve_curve'
      },
      {
        stepNumber: 2,
        title: "Avval orqa yoqani 2.5 sm chuqurlikda kesish",
        instruction: "Burchakdan pastga bor-yo'g'i 2.5 sm (ikki barmoq eni) tushib, yarim oy shaklida chizing va orqa bo'lakni kesib oling.",
        measurementNote: "Orqa yoqa chuqurligi: 2.5 sm",
        auntieTip: "Piyolaning chetini qo'yib chizsangiz, yoqa aylanasining shakli juda tekis dumaloq chiqadi!",
        diagramType: 'sleeve_curve'
      },
      {
        stepNumber: 3,
        title: "Old yoqani 8–9 sm chuqurlikda o'yish",
        instruction: "Orqa bo'lakni chetga olib qo'ying. Endi faqat old bo'lakning o'zida tepadan pastga 8.5 sm tushib, dumaloq yoki uchburchak shaklda o'ying.",
        measurementNote: "Old yoqa chuqurligi: 8.5 – 9 sm",
        auntieTip: "Issiq yoz kunlari uchun old yoqani 10 sm qilsangiz ham bo'yin terlamaydi.",
        diagramType: 'sleeve_curve'
      }
    ]
  },
  {
    id: 'lesson-5',
    lessonNumber: 5,
    title: "5-dars: Qo'ltiq osti (proyma) qismini tortishmaydigan qilib bichish",
    subtitle: "Qo'lni ko'targanda ko'ylak tortishib qolmasligi uchun oddiy chizma",
    simpleSummary: "Yelkadan pastga 1 qarich tushib, burchagini piyola chetidek yumaloqlab kesamiz.",
    category: 'bichish',
    categoryLabel: 'Bichish asoslari',
    level: "Boshlang'ich",
    duration: '12 daqiqa',
    stepsCount: 3,
    image: patternCuttingImg,
    fabricRecommendation: "Har qanday mato",
    seamAllowance: "Qo'ltiq o'miziga 1 sm chok haqi qoldiriladi",
    requiredTools: ["Chizg'ich", "Bo'r", "Qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Yelka qiyaligini 2 sm pastga tushirish",
        instruction: "Odamning yelkasi tekis emas, sal qiya bo'ladi. Shuning uchun yelka uchidan 2 sm pastga tushib, yoqa nuqtasi bilan tutashtiring.",
        measurementNote: "Yelka uzunligi: 12 sm, qiyaligi: 2 sm",
        auntieTip: "Shu 2 sm qiyalikni qilmasangiz, yoqa orqaga tortilib qoladi.",
        diagramType: 'sleeve_curve'
      },
      {
        stepNumber: 2,
        title: "Qo'ltiq chuqurligini o'lchash",
        instruction: "Yelka nuqtasidan tik pastga 20–21 sm tushib burchak hosil qiling. Bu qo'ltiq osti chizig'i bo'ladi.",
        measurementNote: "Qo'ltiq chuqurligi: o'rtacha 20–22 sm",
        auntieTip: "Qo'li to'laroq ayollar uchun bu masofani 23 sm olsangiz, yeng bemalol turadi.",
        diagramType: 'sleeve_curve'
      },
      {
        stepNumber: 3,
        title: "Burchakdan 2.5 sm chiqib yumaloqlash",
        instruction: "Burchakning o'rtasidan qiya qilib 2.5 sm (ikki barmoq) chiziq chiqaring va yelka uchini qo'ltiq ostiga silliq egri chiziq bilan ulang.",
        measurementNote: "Burchak yumaloqligi: 2.5 sm",
        auntieTip: "Old bo'lakning qo'ltiq o'mizini orqanikiga qaraganda ярим barmoq ichkariroq o'ysangiz, ko'krak oldida burma bo'lmaydi.",
        diagramType: 'sleeve_curve'
      }
    ]
  },
  {
    id: 'lesson-6',
    lessonNumber: 6,
    title: "6-dars: Oddiy to'g'ri yengni 5 daqiqada bichish",
    subtitle: "Har qanday ko'ylakka tushadigan eng qulay yeng andozasi",
    simpleSummary: "Matoni 4 qavat buklab, tepasini to'lqin shaklida qirqamiz — yeng tayyor!",
    category: 'bichish',
    categoryLabel: 'Bichish asoslari',
    level: "Boshlang'ich",
    duration: '14 daqiqa',
    stepsCount: 3,
    image: patternCuttingImg,
    fabricRecommendation: "Ko'ylakdan ortgan 60 sm mato",
    seamAllowance: "Yoniga 1.5 sm, yeng uchiga 2.5 sm",
    requiredTools: ["Santimetr", "Bo'r", "Qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Ikki yengni baravar bichish uchun matoni 4 buklash",
        instruction: "Yenglik matoni avval ikkiga, keyin yana ikkiga (jami 4 qavat) buklang. Shunda bir kesishda ikkala qo'lning yengi baravar chiqadi.",
        measurementNote: "4 qavat buklangan mato eni: 20–22 sm",
        auntieTip: "Qo'lning eng to'la qismini o'lchab, unga 6 sm qo'shsangiz yeng hech qachon siqmaydi.",
        diagramType: 'sleeve_curve'
      },
      {
        stepNumber: 2,
        title: "Yeng boshini (tepa qismini) 14 sm pastga tushirish",
        instruction: "Yengning eng tepa nuqtasidan pastga 14 sm tushib chiziq torting. Tepa burchakdan shu chiziqning uchiga qiya chiziq tortib, uni silliq to'lqin shaklida chizing.",
        measurementNote: "Yeng boshi balandligi: 13–15 sm",
        auntieTip: "Yengning eng tepa o'rta nuqtasiga qaychi uchi bilan kichkina kertik qilib qo'ying — yelka chokiga shu joy ulanadi.",
        diagramType: 'sleeve_curve'
      },
      {
        stepNumber: 3,
        title: "Bilak qismini toraytirib kesish",
        instruction: "Yengning pastki uchini (bilak joyini) 14–16 sm qilib belgilang va qo'ltiq nuqtasi bilan chizg'ichda birlashtirib kesing.",
        measurementNote: "Yeng uchi kengligi: 15 sm (+1.5 sm chok)",
        auntieTip: "Agar yeng uchiga rezinka qo'ymoqchi bo'lsangiz, toraytirmasdan to'g'ri tushirsangiz ham juda chiroyli chiqadi!",
        diagramType: 'sleeve_curve'
      }
    ]
  },
  {
    id: 'lesson-7',
    lessonNumber: 7,
    title: "7-dars: Tikuv mashinasiga ip o'tkazish va baxyani sozlash",
    subtitle: "Mashina ip uzmasligi va ostki ipni chigallashtirmasligi uchun oddiy tekshiruv",
    simpleSummary: "Ustki va ostki ip bir xil qalinlikda bo'lsa, mashinangiz soatdek ishlaydi!",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "Boshlang'ich",
    duration: '10 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Mashinani sinab ko'rish uchun kichik mato parchasi",
    seamAllowance: "Odatiy tikishda baxya yirikligi 2.5 yoki 3 raqamiga qo'yiladi",
    requiredTools: ["Tikuv mashinasi", "40-raqamli g'altak ip", "Yangi mashina ignasi (80 yoki 90 raqam)"],
    steps: [
      {
        stepNumber: 1,
        title: "Lapkani ko'tarib turib ip o'tkazish",
        instruction: "Mashinaga ustki ipni o'tkazayotganda ALBATTA lapkani tepaga ko'tarib qo'ying. Shunda ip taranglik temirchalari orasiga to'g'ri tushadi va ostini chigal qilmaydi.",
        measurementNote: "Ignaning yassi tomoni har doim orqaga qaraydi",
        auntieTip: "Agar mashina baxyani tashlab tikayotgan bo'lsa, 90% holatda igna uchi o'tmaslashgan bo'ladi — yangi igna taqing!",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 2,
        title: "Mokiga (shpulka) ipni tekis o'rash",
        instruction: "Ostki g'altakchaga ipni qo'lda emas, mashinaning o'ragichida tekis qilib o'rang. Qo'lda o'ralsa ip bo'sh qolib, chok xunuk chiqadi.",
        measurementNote: "Ustki va ostki ip bir xil g'altakdan bo'lsin",
        auntieTip: "Qolgan iplar ustiga yangi rangli ipni o'ramang, har bir rang uchun alohida shpulka tuting.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 3,
        title: "Keraksiz matoda bir qator tikib tekshirish",
        instruction: "Asosiy ko'ylakni tikishdan oldin mato qiyqimida 10 sm tikib ko'ring. Chok tekis va silliq bo'lsagina ko'ylakka o'ting.",
        measurementNote: "Normal baxya kattaligi: 2.5 – 3.0 mm",
        auntieTip: "Tikishni boshlaganda va tugatganda mashinaning 'orqaga qaytarish' tugmasini 2 soniya bosib ipni mahkamlang.",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-8',
    lessonNumber: 8,
    title: "8-dars: To'g'ri chok tikish va dazmol bilan yotqizish siri",
    subtitle: "Nega ustoz chevarlarning choki tekis turadi? Dazmolning oltin qoidasi",
    simpleSummary: "Har bir tikilgan chok ustidan darrov dazmol bossangiz, ko'ylak do'kondagidek chiqadi.",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "Boshlang'ich",
    duration: '12 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Paxta yoki zig'ir mato",
    seamAllowance: "Lapkaning o'ng qirrasini mato chetiga tenglab yursangiz — 1 sm tekis chok chiqadi",
    requiredTools: ["Tikuv mashinasi", "Dazmol", "Oq paxta mato (nam doka)"],
    steps: [
      {
        stepNumber: 1,
        title: "Igna uchi emas, lapka chetiga qarab tikish",
        instruction: "Ko'pchilik tikayotganda ignaga qaraydi va chiziq qiyshayib ketadi. Siz esa mato chetini lapkaning o'ng qirrasiga to'g'rilab yuring — shunda chok chizg'ichda tortgandek tekis chiqadi!",
        measurementNote: "Chok kengligi: 1.0 – 1.5 sm",
        auntieTip: "Mashina stoliga 1.5 sm joyga rangli skotch yopishtirib qo'ysangiz, mato chetini shunga to'g'rilab tikish juda oson bo'ladi.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 2,
        title: "Chokni avval o'z holicha dazmollash",
        instruction: "Tikib bo'lgach, matoni ochmasdan turib chokning o'zini bir marta dazmollang. Shunda ip mato ichiga singib, burishgan joylari tekislanadi.",
        measurementNote: "Dazmol harorati matoga mos bo'lsin",
        auntieTip: "Tikuvchi uchun dazmol — ikkinchi mashina! Bir qator tikdingizmi, darrov dazmollang.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 3,
        title: "Chok haqini bir tomonga yotqizib dazmollash",
        instruction: "Endi matoni ochib, ichkaridagi chok haqini orqa bo'lak tomonga qaratib yotqizib dazmollang.",
        measurementNote: "Yelka va yon choklar orqa tomonga yotqiziladi",
        auntieTip: "Qora yoki to'q rangli matoni dazmollayotganda ustiga nam doka yopsangiz, mato yaltirab qolmaydi.",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-9',
    lessonNumber: 9,
    title: "9-dars: Yoqa chetini qiya lenta (beyka) bilan toza o'rash",
    subtitle: "Yoqa qayrilmasdan bo'yinga tekis yotishi uchun eng oson usul",
    simpleSummary: "Matodan qiya tasma kesib, yoqa chetini xuddi lentalagandek silliq o'raymiz.",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Ko'ylakning o'z matosidan qolgan parcha",
    seamAllowance: "Qiya lenta eni: 3.5 sm (ikki barmoq eni)",
    requiredTools: ["Chizg'ich", "Qaychi", "Tikuv mashinasi"],
    steps: [
      {
        stepNumber: 1,
        title: "Matoni burchakdan-burchakka qiya qilib 3.5 sm lenta kesish",
        instruction: "Matoni to'g'riga emas, burchakdan-burchakka (qiya) qilib 3.5 sm kenglikda uzun tasma kesib oling. Qiya kesilgan mato cho'ziluvchan bo'ladi va dumaloq yoqaga g'ijim bo'lmasdan yotadi.",
        measurementNote: "Tasma eni: 3.5 sm, uzunligi yoqa aylanasiga teng",
        auntieTip: "To'g'ri kesilgan tasma dumaloq yoqada tikkayib qoladi, albatta qiya qilib kesing!",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 2,
        title: "Tasmani ikki buklab dazmollash va yoqaga ulash",
        instruction: "Tasmani bo'yiga ikki buklab dazmollang. Ochiq qirrasini ko'ylak yoqasining o'ng tomoniga qo'yib, 0.7 sm masofada aylantirib tikib chiqing.",
        measurementNote: "Chok masofasi: yarim barmoq (0.7 sm)",
        auntieTip: "Tikayotganda tasmani juda salgina tortib turing, ko'ylak yoqasini esa umuman tortmang.",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 3,
        title: "Tasmani ichkariga qaytarib ustidan bostirib tikish",
        instruction: "Tasmani ko'ylakning ichki (teskari) tomoniga to'liq qaytarib buklang va chetidan 2 mm masofada chiroyli baxya yuritib chiqing.",
        measurementNote: "Yakuniy baxya: yoqa chetidan 2 mm",
        auntieTip: "Ichkariga qaytarishdan oldin dumaloq chok haqlarini har 2 sm da qaychi uchi bilan 3 mm kertib chiqsangiz, yoqa oydek tekis yotadi!",
        diagramType: 'collar_fold'
      }
    ]
  },
  {
    id: 'lesson-10',
    lessonNumber: 10,
    title: "10-dars: Yelka va yon choklarni birlashtirib ko'ylakni yig'ish",
    subtitle: "Bichilgan bo'laklarni qaysi ketma-ketlikda tiksa oson bo'ladi?",
    simpleSummary: "Avval yelkani, keyin yengni, eng oxirida esa yon chokni bitta chiziqda tikamiz!",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Har qanday bichilgan ko'ylak",
    seamAllowance: "Yelka va yon choklar: 1.5 sm",
    requiredTools: ["To'g'nog'ich ignalar", "Tikuv mashinasi", "Dazmol"],
    steps: [
      {
        stepNumber: 1,
        title: "1-qadam: Old va orqa yelkani bir-biriga ulash",
        instruction: "Old va orqa bo'lakni gulli tomonini ichkariga qaratib ustma-ust qo'ying. Avval faqat ikkita yelka chokini 1.5 sm masofada tikib, dazmollab oling.",
        measurementNote: "Yelka choki: 1.5 sm",
        auntieTip: "Yelka chokini tikiboq yoqa qismini (9-darsdagidek) pardozlab olsangiz, ochiq holatda tikish juda oson bo'ladi.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "2-qadam: Yengni ochiq holatda qo'ltiq o'miziga ulash",
        instruction: "Ko'ylakning yonini tikmasdan oldin, yengning o'rta kertigini yelka chokiga to'g'rilab ignalang va yengni ochiq holatda tikib oling.",
        measurementNote: "Yeng choki: 1.0 – 1.2 sm",
        auntieTip: "Yengni dumaloq qilib qiynalgandan ko'ra, yon chokni tikishdan oldin ochiq holatda ulash 3 barobar oson!",
        diagramType: 'sleeve_curve'
      },
      {
        stepNumber: 3,
        title: "3-qadam: Yeng uchidan boshlab etakkacha bitta chokda tushish",
        instruction: "Endi ko'ylakni ikki buklab, yeng uchidan boshlab qo'ltiq osti orqali to ko'ylak etagigacha bitta uzluksiz chiziqda tikib tushing!",
        measurementNote: "Qo'ltiq osti choki bir-biriga aniq tushsin",
        auntieTip: "Qo'ltiq osti tutashgan nuqtasiga bitta to'g'nog'ich qadab qo'ysangiz, ikki chok bir-biridan qochib ketmaydi.",
        diagramType: 'bodice_grid'
      }
    ]
  },
  {
    id: 'lesson-11',
    lessonNumber: 11,
    title: "11-dars: Koketkali o'zbekcha uy ko'ylagini bichish",
    subtitle: "Xolalarimiz va onalarimiz eng yaxshi ko'radigan ko'kragi koketkali salqin ko'ylak",
    simpleSummary: "Ko'krak tepasini alohida (1 qarich), pastki etagini esa kengroq qilib bichamiz.",
    category: 'milliy',
    categoryLabel: 'Milliy liboslar',
    level: "Boshlang'ich",
    duration: '20 daqiqa',
    stepsCount: 3,
    image: adrasDressImg,
    fabricRecommendation: "Guldor shtapel, chit yoki adras (2.40 metr)",
    seamAllowance: "Koketka ulanish joyiga 1.5 sm chok haqi",
    requiredTools: ["Shtapel yoki adras mato", "Bo'r va chizg'ich", "Qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Koketka (ko'krak tepa qismi) uzunligini 27 sm qilib olish",
        instruction: "Yelkadan ko'krak ustigacha 27 sm (to'la ayollar uchun 29 sm) o'lchab, ko'ylakning tepa qismini alohida kesib oling. Bu qism 'koketka' deyiladi.",
        measurementNote: "Koketka balandligi: 27–29 sm",
        auntieTip: "Koketkani 2 qavat (ichiga ham xuddi shu matodan astar) qilib bichsangiz, ko'ylak bo'yni juda toza va qalinroq turadi.",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 2,
        title: "Pastki etak qismini 20 sm kengroq bichish",
        instruction: "Ko'ylakning pastki etak qismi burmali bo'lishi uchun, uni koketkadan 20–25 sm kengroq qilib to'g'ri to'rtburchak shaklda kesing.",
        measurementNote: "Etak eni = Koketka eni + 22 sm burma haqi",
        auntieTip: "Mato eni 150 sm bo'lsa, uni ikki buklab butun enini etakka ishlatsangiz burmasi juda boy chiqadi!",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 3,
        title: "Koketka va etak o'rtasiga kertik belgi qo'yish",
        instruction: "Koketkaning ham, etakning ham qoq o'rtasini ikki buklab, qaychi uchi bilan 3 mm kichik kertik qilib qo'ying. Tikayotganda shu ikki belgi bir-biriga to'g'rilanadi.",
        measurementNote: "O'rta kertik chuqurligi: 3 mm",
        auntieTip: "Kertikni chuqur kesib yubormang, gugurt cho'pi uchidek bo'lsa yetadi.",
        diagramType: 'koketka_cut'
      }
    ]
  },
  {
    id: 'lesson-12',
    lessonNumber: 12,
    title: "12-dars: Koketkaga mayda burma (sborka) yig'ib ulash",
    subtitle: "Ipni uzmasdan bir tekis, chiroyli burma terish usuli",
    simpleSummary: "Mashinada 2 qator yirik baxya tikib, ipini tortsangiz — bir tekis burma hosil bo'ladi!",
    category: 'milliy',
    categoryLabel: 'Milliy liboslar',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: adrasDressImg,
    fabricRecommendation: "Shtapel, shifon, adras matolar",
    seamAllowance: "Koketka ulanish choki: 1.2 sm",
    requiredTools: ["Tikuv mashinasi", "Pishiq ip", "To'g'nog'ichlar"],
    steps: [
      {
        stepNumber: 1,
        title: "Mashina baxyasini eng katta raqamga (4 yoki 5 ga) qo'yish",
        instruction: "Mashinaning baxya yirikligini 4 ga qo'ying. Etakning tepa qirrasidan yarim barmoq (0.5 sm) va bir barmoq (1 sm) masofada yonma-yon 2 qator tikib chiqing. Uchlarini mahkamlamang, iplarni uzun qoldiring.",
        measurementNote: "2 ta parallel qator: chetdan 5 mm va 10 mm",
        auntieTip: "Nega 1 qator emas, 2 qator tikamiz? Chunki 2 ta ipni baravar tortsangiz, burmalar xuddi taroq tishidek tekis tushadi!",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 2,
        title: "Ostki ikkita ipni ohista tortib burma yig'ish",
        instruction: "Chap qo'lingiz bilan matoni ushlab, o'ng qo'lingiz bilan ostki 2 ta ipni sekin torting. Etak kengligi koketka kengligi bilan teng bo'lguncha burmalarni surib tekislang.",
        measurementNote: "Burmalarni ko'krak o'rtasiga ko'proq yig'ing",
        auntieTip: "Qo'ltiq ostiga yaqin 4 sm joyda burma qilmang, tekis qoldiring — shunda qo'ltiq osti shishib turmaydi.",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 3,
        title: "Koketkani burmali etakka tikib, ustidan bostirma chok berish",
        instruction: "Koketka va etakni o'ng tomonini bir-biriga qaratib, ikkita burma chizig'ining o'rtasidan tikib chiqing. So'ng ko'ylakni o'ngiga ochib, koketka ustidan 2 mm masofada bezak baxyasini bering.",
        measurementNote: "Ustki bostirma chok: 2 mm",
        auntieTip: "Tikib bo'lgach, ko'rinib qolgan vaqtinchalik burma ipini sug'urib olib tashlang.",
        diagramType: 'koketka_cut'
      }
    ]
  },
  {
    id: 'lesson-13',
    lessonNumber: 13,
    title: "13-dars: Marg'ilon adrasi va xon-atlasni bichish qoidalari",
    subtitle: "Ipakli milliy matolarimiz qiyshaymasligi va gullari bir-biriga tushishi siri",
    simpleSummary: "Adras eni tor bo'ladi (90-100 sm), shuning uchun gullarini bir xil yo'nalishda bichamiz.",
    category: 'milliy',
    categoryLabel: 'Milliy liboslar',
    level: "O'rta",
    duration: '18 daqiqa',
    stepsCount: 3,
    image: adrasDressImg,
    fabricRecommendation: "Marg'ilon adrasi, atlas yoki beqasam (3 – 3.5 metr)",
    seamAllowance: "Adras cheti titilib ketmasligi uchun chok haqini 1.5 – 2 sm mo'lroq oling",
    requiredTools: ["Ingichka ignalar (ipakni teshmasligi uchun)", "O'tkir qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Adrasning tukini va guli yo'nalishini tekshirish",
        instruction: "Adras va atlas sirtini kaftingiz bilan silab ko'ring — silliq yotgan tomoni tepadan pastga qarashi kerak. Hamma bo'laklarni (old, orqa, yeng) faqat BIR TOMONGA qaratib biching.",
        measurementNote: "Barcha bo'laklar tepadan pastga bir yo'nalishda bichiladi",
        auntieTip: "Agar oldini tepaga, orqasini teskari bichib qo'ysangiz, quyoshda ikki xil rang bo'lib tovlanib qoladi!",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 2,
        title: "Katta abri-bahor gullarni ko'krak o'rtasiga tushirish",
        instruction: "Adrasning eng chiroyli yirik naqshini ko'ylakning qoq o'rtasiga (ko'krak markaziga) to'g'rilab buklang. Shunda ko'ylak juda qimmatbaho ko'rinadi.",
        measurementNote: "Asosiy naqsh markaziy buklov chizig'iga tushsin",
        auntieTip: "To'g'nog'ichlarni faqat chok haqi qismiga qadang, adrasning o'rtasiga igna sanchsangiz izi qolishi mumkin.",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 3,
        title: "Kesilgan qirralarni darhol zig-zag yoki averlok qilish",
        instruction: "Adrasning iplari juda tez so'kiladi. Bichiboq qirralarini mashinaning zig-zag baxyasida yoki averlokda tikib mustahkamlab oling.",
        measurementNote: "Chok haqi: 1.5 sm dan kam bo'lmasin",
        auntieTip: "Dazmollaganda adrasga suv sachratmang — suv tomchisi dog' bo'lib qoladi. Faqat quruq doka ustidan dazmollang!",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-14',
    lessonNumber: 14,
    title: "14-dars: Ko'ylak yoniga yashirin cho'ntak tikish",
    subtitle: "Ro'molcha va telefon solishga qulay, tashqaridan bilinmaydigan yon cho'ntak",
    simpleSummary: "Kaftingizni matoga qo'yib cho'ntak xaltasini chizamiz va yon chokka qo'shib tikamiz!",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Uy va kundalik ko'ylaklar uchun",
    seamAllowance: "Cho'ntak og'zi kengligi: 15 sm (kaft bemalol kiradigan)",
    requiredTools: ["4 bo'lak mato parchasi", "Bo'r", "Tikuv mashinasi"],
    steps: [
      {
        stepNumber: 1,
        title: "O'z kaftingizni matoga qo'yib cho'ntak andozasini chizish",
        instruction: "Andoza qidirib o'tirmang! Qo'lingiz kaftini mato ustiga qo'ying va atrofini 2 sm kengroq qilib bo'r bilan aylantirib chizing — mana sizga tayyor cho'ntak xaltasi!",
        measurementNote: "Cho'ntak chuqurligi: 22 sm, og'zi: 15 sm",
        auntieTip: "Ikki yon uchun jami 4 ta bir xil cho'ntak bo'lagini kesib oling.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Bel chizig'idan 7 sm pastga cho'ntak bo'laklarini ulash",
        instruction: "Ko'ylakning bel chizig'idan 7 sm (4 barmoq) pastga tushib, old va orqa yon qirrasiga cho'ntak bo'laklarini 1 sm chokda tikib oling.",
        measurementNote: "Beldan pastga masofa: 7–8 sm",
        auntieTip: "Koketkali ko'ylak bo'lsa, koketka chokidan 15 sm pastdan cho'ntak o'rnini belgilang.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 3,
        title: "Yon chok bilan cho'ntak xaltasini bittada aylantirib tikish",
        instruction: "Old va orqa ko'ylakni ustma-ust qo'ying. Qo'ltiqdan pastga tushib, cho'ntak xaltasini aylanib o'ting va etakkacha davom eting.",
        measurementNote: "Cho'ntak burchaklarini 2 marta qaytarib mustahkamlang",
        auntieTip: "Cho'ntak xaltasini old bo'lak tomonga qaratib dazmollasangiz, kiyganda orqaga tortilmaydi.",
        diagramType: 'bodice_grid'
      }
    ]
  },
  {
    id: 'lesson-15',
    lessonNumber: 15,
    title: "15-dars: Yeng uchiga qulay rezinka yoki manjet o'rnatish",
    subtitle: "Oshxonada va uy yumushlarida yengni shimarishga juda qulay usul",
    simpleSummary: "Yeng uchini ikki buklab tikamiz va to'g'nog'ich yordamida ichiga yumshoq rezinka o'tkazamiz.",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "Boshlang'ich",
    duration: '10 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Barcha yengli ko'ylaklar uchun",
    seamAllowance: "Rezinka yo'lagi uchun yeng uchiga 2.5 sm haq qoldiriladi",
    requiredTools: ["Ingichka kiyim rezinkasi (50 sm)", "Katta to'g'nog'ich (bulavka)", "Tikuv mashinasi"],
    steps: [
      {
        stepNumber: 1,
        title: "Yeng uchini ichkariga buklab 'yo'lakcha' tikish",
        instruction: "Yeng uchini avval 0.5 sm, keyin 1.5 sm ichkariga qaytarib dazmollang. Aylantirib tikayotganda rezinka kirishi uchun 1 barmoq (1.5 sm) ochiq teshikcha qoldiring.",
        measurementNote: "Ochiq qoldiriladigan joy: 1.5 sm",
        auntieTip: "Yo'lakcha kengligi rezinkadan sal kengroq bo'lsin, shunda rezinka ichida burilib qolmaydi.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 2,
        title: "Bilak aylanasi bo'yicha rezinka kesib o'tkazish",
        instruction: "Rezinkani bilagingizga o'rab ko'ring — bilakni qismaydigan uzunlikda kesing (odatda 18–20 sm). Uchiga to'g'nog'ich taqib, yo'lakcha ichidan o'tkazing.",
        measurementNote: "Rezinka uzunligi: 18–21 sm",
        auntieTip: "Rezinkaning ikkinchi uchi ichkariga kirib ketmasligi uchun uni ko'ylakka boshqa igna bilan qadab qo'ying!",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 3,
        title: "Rezinka uchlarini ustma-ust qo'yib mahkamlash",
        instruction: "Rezinkaning ikki uchini 1 sm ustma-ust qo'yib mashinada 3-4 marta oldinga-orqaga tikib mahkamlang. Keyin ochiq qolgan 1.5 sm teshikchani tikib yoping.",
        measurementNote: "Rezinkani tugun qilmang — tugun bilakka botadi, tekis tikib ulang",
        auntieTip: "Shu usulda tikilgan yengni tahorat olishda yoki xamir qorishda tirsakkacha ko'tarib qo'yish juda oson!",
        diagramType: 'hem_stitch'
      }
    ]
  }
];
