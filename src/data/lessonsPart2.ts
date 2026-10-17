import atelierHeroImg from '../assets/images/atelier_hero_banner_1790522267282.jpg';
import patternCuttingImg from '../assets/images/lesson_pattern_cutting_1790522285628.jpg';
import sewingMachineImg from '../assets/images/lesson_sewing_machine_1790522322240.jpg';
import adrasDressImg from '../assets/images/community_adras_dress_1790522299225.jpg';
import velvetNimchaImg from '../assets/images/community_velvet_nimcha_1790522340641.jpg';
import { Lesson } from './tailoringData';

export const LESSONS_PART_2: Lesson[] = [
  {
    id: 'lesson-16',
    lessonNumber: 16,
    title: "16-dars: Ko'ylak etagini tekis va silliq qaytarib tikish",
    subtitle: "Etak to'lqinlanib yoki qiyshayib qolmasligi uchun eng oson usul",
    simpleSummary: "Etakni ikki marta ichkariga buklab, avval dazmollab, keyin mashinada tikamiz.",
    category: 'pardozlash',
    categoryLabel: 'Pardoz va Siri',
    level: "Boshlang'ich",
    duration: '10 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Barcha ko'ylak va yubkalar uchun",
    seamAllowance: "To'g'ri etakka 2.5 – 3 sm, klyosh etakka 1 sm haq qoldiriladi",
    requiredTools: ["Chizg'ich", "Dazmol", "Tikuv mashinasi"],
    steps: [
      {
        stepNumber: 1,
        title: "Avval yarim barmoq (0.5 sm) ichkariga buklab dazmollash",
        instruction: "Etakning kesilgan qirrasini ichkariga 0.5 sm qaytarib, butun etak bo'ylab dazmollab chiqing.",
        measurementNote: "Birinchi buklov: 0.5 sm",
        auntieTip: "Qo'lda qiynalmaslik uchun karton qog'ozga 2 sm belgi chizib olib, shunga qarab dazmollasangiz bir xil chiqadi!",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 2,
        title: "Keyin yana 2 sm buklab, igna bilan qadash",
        instruction: "Endi ikkinchi marta 2 sm ichkariga qaytarib dazmollang va har 15 sm da to'g'nog'ich qadab chiqing.",
        measurementNote: "Ikkinchi buklov: 2.0 sm",
        auntieTip: "Agar ko'ylak etagi keng (klyosh) bo'lsa, keng buklamang — 0.5 sm dan ikki marta ingichka buklasangiz burishmaydi.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 3,
        title: "Buklov chetidan 2 mm masofada tekis tikish",
        instruction: "Mashinada ichki buklovning qirrasidan 2 mm masofada bir tekisda tikib chiqing va ustidan bug'li dazmol bosing.",
        measurementNote: "Baxya qadami: 3.0 mm",
        auntieTip: "Tikishni har doim ko'ylakning yon chokidan boshlang — shunda ip ulangan joy oldida ko'rinib qolmaydi.",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-17',
    lessonNumber: 17,
    title: "17-dars: Tik yoqa va qaytarma yoqa bichish hamda tikish",
    subtitle: "Ko'ylakka ko'rk beradigan bejirim yoqa tikishning oddiy yo'li",
    simpleSummary: "Bo'yin aylanasini santimetrda o'lchab, 2 qavat matodan yoqa tayyorlaymiz.",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "O'rta",
    duration: '18 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Paxta, krep, adras va kostyumbop matolar",
    seamAllowance: "Yoqa chetiga 0.7 sm chok haqi",
    requiredTools: ["Yupqa yopishqoq mato (flizelin)", "Dazmol", "Qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Ko'ylakning bo'yin o'mizini santimetr bilan o'lchash",
        instruction: "Yelka choklari tikilgan ko'ylakni ikki buklab, orqa o'rtadan old o'rtagacha bo'yin o'mizini santimetrni tik turg'izib o'lchang (masalan: 20 sm chiqadi).",
        measurementNote: "Yoqa uzunligi = Bo'yin yarim aylanasi (masalan 20 sm)",
        auntieTip: "Yoqani ko'ylakning yelkasini tikmasdan oldin o'lchamang, yelka tikilgach o'lchasangiz 100% aniq tushadi.",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 2,
        title: "Yoqa bo'lagiga flizelin yopishtirib, uchlarini tikish",
        instruction: "Eni 7 sm, bo'yi bo'yin o'lchamiga teng tasma kesib, ichki tomoniga dazmol bilan flizelin yopishtiring. Ikki buklab, ikki yonini tikib o'ngiga ag'daring.",
        measurementNote: "Tayyor yoqa eni: 3 – 3.5 sm bo'ladi",
        auntieTip: "Ag'darishdan oldin burchakdagi ortiqcha matoni qiya qilib kesib tashlasangiz, burchagi o'tkir chiqadi.",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 3,
        title: "Yoqani bo'yinga qo'yib ikki qator tikish",
        instruction: "Avval yoqaning bir qavatini ko'ylak bo'yniga 1 sm da tikib oling. Keyin ikkinchi qavatini ichkariga qaytarib, chok ustidan toza qilib bostirib tiking.",
        measurementNote: "Bo'yinga ulash choki: 1 sm",
        auntieTip: "Yoqa o'rtasi bilan ko'ylakning orqa o'rtasiga igna sanchib qo'ysangiz, ikki uchi bir xil chiqadi.",
        diagramType: 'collar_fold'
      }
    ]
  },
  {
    id: 'lesson-18',
    lessonNumber: 18,
    title: "18-dars: Ko'ylak oldiga chiroyli planka va tugma joyi ochish",
    subtitle: "Kiyib-yechishga qulay bo'lishi uchun ko'krak oldini tugmali qilish",
    simpleSummary: "Old yoqadan pastga 15 sm kesib, ikki chetiga tekis tasma ulaymiz.",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "O'rta",
    duration: '16 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Kundalik va bayramona ko'ylaklar",
    seamAllowance: "Planka tayyor eni: 2.5 sm yoki 3 sm",
    requiredTools: ["Flizelin", "Chizg'ich", "3-4 dona chiroyli tugma"],
    steps: [
      {
        stepNumber: 1,
        title: "Old yoqa o'rtasidan pastga 15 sm chizish",
        instruction: "Old bo'lakning qoq o'rtasidan pastga 15–18 sm to'g'ri chiziq chizing. Hozircha oxirigacha kesmang.",
        measurementNote: "Kesim uzunligi: 15–18 sm (bosh bemalol o'tadigan)",
        auntieTip: "Agar emizikli kelinlar uchun tikayotgan bo'lsangiz, bu uzunlikni 22 sm qilsangiz juda qulay bo'ladi!",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 2,
        title: "Ikki yoniga tasma tikib, o'rtasini qirqish",
        instruction: "Eni 6 sm li ikkita tasmaga flizelin yopishtirib, chizilgan chiziqning ikki yoniga tikib tushing. Keyin o'rtadagi chiziqni qirqib, tasmalarni ichkariga ag'daring.",
        measurementNote: "Ayollar kiyimida o'ng tomon chap tomonning ustiga yopiladi",
        auntieTip: "Har doim esda tuting: ayollar ko'ylagida O'NG tomon ustida turadi!",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 3,
        title: "Pastki uchini uchburchak yoki to'rtburchak qilib mahkamlash",
        instruction: "Ikki planka ustma-ust tushgach, eng pastki uchini ko'ndalangiga ikki qator baxya bilan mahkamlab tiking.",
        measurementNote: "Tugmalar orasidagi masofa: 6–7 sm",
        auntieTip: "Tugma teshigi (petlya) ochishga qiynalsangiz, plankani yopiq qilib tikib, ustidan bezak tugma qadasangiz ham bo'ladi!",
        diagramType: 'collar_fold'
      }
    ]
  },
  {
    id: 'lesson-19',
    lessonNumber: 19,
    title: "19-dars: Yashirin zamok (molniya) o'rnatishning eng oson siri",
    subtitle: "Zamok to'lqinlanib qolmasdan, xuddi chok ichiga yashiringandek turishi",
    simpleSummary: "Zamokni tikishdan oldin tishchalarini iliq dazmol bilan tekislab olsangiz, juda oson tikiladi!",
    category: 'pardozlash',
    categoryLabel: 'Pardoz va Siri',
    level: "O'rta",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: velvetNimchaImg,
    fabricRecommendation: "Bayramona ko'ylaklar va yubkalar",
    seamAllowance: "Zamok o'rni uchun 1.5 sm chok haqi qoldiriladi",
    requiredTools: ["Yashirin zamok", "Dazmol", "Tikuv mashinasi"],
    steps: [
      {
        stepNumber: 1,
        title: "Zamokni ochib, tishchalarini dazmollash",
        instruction: "Yashirin zamokni oxirigacha oching. Uning burilib turgan tishchalarini barmog'ingiz bilan ochib, iliq dazmol uchi bilan tekislab chiqing.",
        measurementNote: "Dazmol juda issiq bo'lmasin (o'rtacha rejimda)",
        auntieTip: "Shu kichkina sirdan keyin oddiy lapkada ham yashirin zamokni xuddi ustadek tika olasiz!",
        diagramType: 'zipper_seam'
      },
      {
        stepNumber: 2,
        title: "Zamokning ikki tomonini yuqoridan pastga qadash",
        instruction: "Zamokni ko'ylakning o'ng tomoniga yuzma-yuz qo'yib, tishchalarning patidan (tubidan) tikib tushing. Ikkinchi tomonini ham xuddi shunday tiking.",
        measurementNote: "Bel chizig'i ikki tomonda bir tekis kelishiga qarang",
        auntieTip: "Tikishdan oldin zamokni qo'lda ko'klab (yirik baxyada vaqtincha tikib) olsangiz, mashinada siljib ketmaydi.",
        diagramType: 'zipper_seam'
      },
      {
        stepNumber: 3,
        title: "Zamokni yopib, pastki chokni davom ettirish",
        instruction: "Zamokni tortib yoping. Endi zamok tugagan joydan pastga qarab ko'ylakning qolgan orqa chokini tikib qo'ying.",
        measurementNote: "Zamok uchida 2 sm ortiqcha dum qolsin",
        auntieTip: "Zamok tepasidagi qattiq plastmassa uchiga igna tegib sinmasligi uchun, o'sha joyda g'ildirakni qo'lda aylantirib tiking.",
        diagramType: 'zipper_seam'
      }
    ]
  },
  {
    id: 'lesson-20',
    lessonNumber: 20,
    title: "20-dars: Ko'krak vitochkasini (pens) to'g'ri chiqarish",
    subtitle: "Ko'ylak ko'krak ustida chiroyli qolipdek o'tirishi uchun kichik uchburchak chok",
    simpleSummary: "Yon chokdan ko'krak markaziga qarab kichik burchak tikamiz va uchini silliq tugatamiz.",
    category: 'bichish',
    categoryLabel: 'Bichish asoslari',
    level: "O'rta",
    duration: '12 daqiqa',
    stepsCount: 3,
    image: patternCuttingImg,
    fabricRecommendation: "Cho'zilmaydigan paxta, krep, atlas va kostyum matolar",
    seamAllowance: "Vitochka ichi kesilmaydi, faqat buklab tikiladi",
    requiredTools: ["Bo'r", "Chizg'ich", "Dazmol"],
    steps: [
      {
        stepNumber: 1,
        title: "Ko'krak balandligini o'lchab uchburchak chizish",
        instruction: "Yon chokdan ichkariga 9–10 sm uzunlikda, eni esa 3 sm bo'lgan ingichka uchburchak (nayza uchi shaklida) chizing.",
        measurementNote: "Uzunligi: 9–10 sm, kengligi: 3–4 sm",
        auntieTip: "Vitochka uchi ko'krakning eng baland nuqtasiga 2 sm yetmasdan tugashi kerak.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Keng tomondan boshlab, uchiga 'nol' qilib chiqish",
        instruction: "Tikishni har doim yon chokdagi keng qismidan boshlang va ingichka uchiga kelganda matoning eng chetidan (1 ta ip ustidan) chiqib keting.",
        measurementNote: "Uchida orqaga qaytib mahkamlamang, ipni qo'lda tuging",
        auntieTip: "Uchida mashinani orqaga-oldinga qilsangiz, ko'krak ustida g'urra bo'lib turib qoladi. Ipni uzun qoldirib, qo'lda 2 marta tugib qo'ying!",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 3,
        title: "Vitochkani pastga qaratib dazmollash",
        instruction: "Tikilgan uchburchak qismni pastga qaratib yotqizing va yumshoq sochiq ustiga qo'yib dazmollang.",
        measurementNote: "Ko'krak vitochkasi pastga yotqiziladi",
        auntieTip: "Ostiga dumaloqroq yostiqcha yoki buklangan sochiq qo'yib dazmollasangiz, shakli juda chiroyli chiqadi.",
        diagramType: 'bodice_grid'
      }
    ]
  },
  {
    id: 'lesson-21',
    lessonNumber: 21,
    title: "21-dars: Klyosh (quyosh va yarim-quyosh) etak va yubka bichish",
    subtitle: "Aylanganda hilpirab turadigan bayramona ko'ylak etagi va yubka",
    simpleSummary: "Matoni uchburchak (ro'moldek) buklab, burchagidan bel o'lchamini yarim oy qilib qirqamiz!",
    category: 'bichish',
    categoryLabel: 'Bichish asoslari',
    level: "O'rta",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: patternCuttingImg,
    fabricRecommendation: "Shifon, shtapel, krep va atlas (2 – 2.5 metr)",
    seamAllowance: "Beliga 1 sm, etagiga 1.5 sm",
    requiredTools: ["Santimetr lentasi", "Bo'r", "Qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Matoni uchburchak ro'mol shaklida qiya buklash",
        instruction: "Matoni avval bo'yiga ikki buklang, keyin burchagini tortib uchburchak ro'mol shaklida buklang.",
        measurementNote: "Uchburchakning tepa burchagi bel joyi bo'ladi",
        auntieTip: "Bu bichimda bitta ham vitochka bo'lmaydi, belga juda chiroyli yotadi.",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 2,
        title: "Tepa burchakdan bel chizig'ini o'lchash",
        instruction: "Uchburchakning eng uchi (cho'qqisi)ga santimetr boshini ushlab turing va xuddi sirkul kabi aylantirib bel chizig'ini nuqtalar bilan belgilang.",
        measurementNote: "Tepa burchakdan masofa = Bel aylanasi / 3",
        auntieTip: "Masalan, belingiz 84 sm bo'lsa, 84 ni 3 ga bo'lasiz = 28 sm. Burchakdan 28 sm tushib yarim oy chizasiz!",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 3,
        title: "Bel chizig'idan pastga yubka uzunligini o'lchash",
        instruction: "Chizilgan bel chizig'idan pastga qarab o'zingiz xohlagan etak uzunligini (masalan 75 sm) bir tekis o'lchab, katta yarim oy shaklida kesing.",
        measurementNote: "Etakni tikishdan oldin 1 kecha veshalkaga osib qo'ying",
        auntieTip: "Qiya kesilgan mato osilganda cho'ziladi. 1 kun osib qo'yib, keyin etagini tekislab tortsangiz, hech qayeri osilib qolmaydi!",
        diagramType: 'koketka_cut'
      }
    ]
  },
  {
    id: 'lesson-22',
    lessonNumber: 22,
    title: "22-dars: Baxmal (velvet va духоба) matodan libos va nimcha tikish",
    subtitle: "To'y va marosimlar uchun baxmal matoni buzmasdan bichish va tikish sirlari",
    simpleSummary: "Baxmalning tukini tepaga qaratib bichamiz va dazmolni bosmasdan faqat bug' beramiz!",
    category: 'milliy',
    categoryLabel: 'Milliy liboslar',
    level: "Mohir",
    duration: '20 daqiqa',
    stepsCount: 3,
    image: velvetNimchaImg,
    fabricRecommendation: "Ipak baxmal, duxoba yoki strich-baxmal",
    seamAllowance: "Baxmal sirpanchiq bo'lgani uchun 1.5 sm chok haqi qoldiring",
    requiredTools: ["Ingichka ignalar", "Bug'li dazmol", "Qalin paxta sochiq"],
    steps: [
      {
        stepNumber: 1,
        title: "Baxmal tukini pastdan tepaga qaratib bichish",
        instruction: "Qo'lingizni baxmal ustida yuriting: tuki teskari (g'adir-budur) sezilgan yo'nalish pastdan tepaga qarab tursin — shunda baxmalning rangi to'yingan, qimmat va chuqur ko'rinadi!",
        measurementNote: "Barcha bo'laklar 1 qavatda alohida kesiladi",
        auntieTip: "Baxmalni ikki buklab kesmang, ikki qavati sirpanib ketadi. Har bir bo'lakni 1 qavatda ochib kesing.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Tikishdan oldin qo'lda yirik ko'klab chiqish",
        instruction: "Mashina lapkasi baxmalni surib yubormasligi uchun chokni avval qo'lda igna-ip bilan zichroq ko'klab oling. Tikayotganda tuk yo'nalishi bo'ylab tiking.",
        measurementNote: "Baxya yirikligi: 3.0 mm",
        auntieTip: "To'g'nog'ichlarni ko'ndalang qadasangiz ham mato kamroq siljiydi.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 3,
        title: "Dazmolni matoga tekkizmasdan bug'da tekislash",
        instruction: "DIQQAT: Issiq dazmolni baxmalga bossangiz, tuki yanchilib dog' bo'lib qoladi! Ostiga qalin paxmoq sochiq to'shab, dazmolni 1 sm balandda tutib faqat bug' bering.",
        measurementNote: "Faqat bug' bilan tekislanadi",
        auntieTip: "Yoki ostiga boshqa keraksiz baxmal parchasini tukini-tukiga qaratib to'shasangiz, tuki ezilmaydi.",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-23',
    lessonNumber: 23,
    title: "23-dars: Milliy astarli nimcha (kamzul) bichish va tikish",
    subtitle: "Ko'ylak ustidan kiyiladigan bejirim o'zbekona nimcha tayyorlash",
    simpleSummary: "Yengsiz ko'ylak tepasini bichib, ichiga xuddi shunday astar ulab ag'daramiz!",
    category: 'milliy',
    categoryLabel: 'Milliy liboslar',
    level: "O'rta",
    duration: '22 daqiqa',
    stepsCount: 3,
    image: velvetNimchaImg,
    fabricRecommendation: "Adras, baxmal, brokar yoki zardo'zi mato (80 sm) + astar (80 sm)",
    seamAllowance: "Atrofiga 1 sm, yon chokiga 1.5 sm",
    requiredTools: ["Ustki mato va astarlik mato", "Qalinroq dublerin", "Tikuv mashinasi"],
    steps: [
      {
        stepNumber: 1,
        title: "Ustki mato va astarni bir xil andozada bichish",
        instruction: "Ko'ylakning beldan tepa qismi andozasini oling (uzunligi 45–55 sm). Old yoqasini uchburchak (V-shakl) qilib o'ying. Shu andozada 1 ta ustki matodan, 1 ta astardan kesing.",
        measurementNote: "Nimcha uzunligi: yelkadan 45–55 sm",
        auntieTip: "Ustki matoning ichki tomoniga dublerin yopishtirsangiz, nimcha qomatda qotma va tekis turadi.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Ustki nimcha va astarni yuzma-yuz qo'yib atrofini tikish",
        instruction: "Ustki nimcha va astarning yelka choklarini alohida tikib oling. Keyin ikkalasini yuzma-yuz qo'yib, bo'yin, old qirrasi va etagini aylantirib tikib chiqing.",
        measurementNote: "Yon chokni hozircha ochiq qoldiring",
        auntieTip: "Qo'ltiq o'mizini ham ichkaridan tikib, kertib ag'darsangiz birorta choki ko'rinmaydi!",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 3,
        title: "O'ngiga ag'darib, yon chokini yopish va bezak berish",
        instruction: "Nimchani o'ngiga ag'darib dazmollang, so'ng yon choklarini birlashtirib tiking. Chetiga chiroyli jiyak (tesma) qo'shib tiksangiz haqiqiy bayramona nimcha bo'ladi.",
        measurementNote: "Bezak tesma chetidan 2 mm da tikiladi",
        auntieTip: "Old qismiga 1 dona chiroyli to'g'nog'ich yoki ichki ilgak (kryuchok) qadasangiz kifoya.",
        diagramType: 'collar_fold'
      }
    ]
  },
  {
    id: 'lesson-24',
    lessonNumber: 24,
    title: "24-dars: Keng va qulay uy lozimi (shalvar) bichish va tikish",
    subtitle: "Milliy ko'ylak ostidan kiyiladigan eng qulay, choki tortishmaydigan lozim",
    simpleSummary: "Matoni 4 buklab, o'tirg'ich joyini 'L' harfidek o'yamiz va beliga rezinka o'tkazamiz.",
    category: 'milliy',
    categoryLabel: 'Milliy liboslar',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: patternCuttingImg,
    fabricRecommendation: "Yumshoq paxta, shtapel yoki trikotaj (1.30 metr)",
    seamAllowance: "Bel rezinkasi uchun tepada 4 sm, pochada 2.5 sm",
    requiredTools: ["Keng rezinka (75 sm)", "Santimetr", "Qaychi"],
    steps: [
      {
        stepNumber: 1,
        title: "Matoni 4 buklab, tepadan 33 sm o'tirg'ich balandligini tushirish",
        instruction: "Matoni 4 qavat buklang. Ochiq chetidan (buklanmagan tomondan) tepadan pastga 32–34 sm tushib, ichkariga 8 sm kiring va 'L' harfi shaklida yumaloqlab o'ying.",
        measurementNote: "O'tirg'ich chuqurligi: 32–35 sm (qulay va keng bo'ladi)",
        auntieTip: "O'zingizning eng qulay eski lozimingizni ikki buklab mato ustiga qo'yib chizsangiz — 2 daqiqada tayyor andoza bo'ladi!",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Avval ikki pocha ichki chokini, keyin o'rta chokni tikish",
        instruction: "Har bir pochaning ichki chokini alohida tikib oling. Keyin bitta pochani o'ngiga ag'darib ikkinchisining ichiga kiriting va o'rta (o'tirg'ich) chokini 2 qator mustahkam qilib tiking!",
        measurementNote: "O'rta chokka 2 marta ustma-ust baxya bering — yirtilmaydi",
        auntieTip: "O'rta chokni ikki marta tiksangiz, o'tirib-turganda ipi hech qachon so'kilmaydi.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 3,
        title: "Belini va pochasini qaytarib, rezinka o'tkazish",
        instruction: "Bel qismini 3 sm ichkariga qaytarib tikib, belingizga mos yumshoq rezinka o'tkazing. Pochasiga esa xohishingizga qarab to'r (krujeva) yoki rezinka qo'ying.",
        measurementNote: "Bel rezinkasi = Bel aylanasi minus 10 sm",
        auntieTip: "Pochasiga oq paxta krujeva ulasangiz, ko'ylak ostidan juda nafis ko'rinib turadi.",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-25',
    lessonNumber: 25,
    title: "25-dars: Nabiralar (qizchalar) uchun burmali bayram ko'ylakchasi",
    subtitle: "1 metrgina matodan 1 soat ichida shirin qizaloqlar ko'ylakchasini tikish",
    simpleSummary: "Ko'krak qismini kichkina futbolkaga qarab bichamiz, etagini esa burmali qilamiz!",
    category: 'milliy',
    categoryLabel: 'Milliy liboslar',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: adrasDressImg,
    fabricRecommendation: "Katta ko'ylakdan ortgan 1 metr adras, atlas yoki paxta mato",
    seamAllowance: "Barcha choklarga 1 sm haq yetarli",
    requiredTools: ["Qizchaning o'ziga loyiq futbolkasi (andoza uchun)", "Qaychi", "Mashina"],
    steps: [
      {
        stepNumber: 1,
        title: "Qizchaning tayyor futbolkasini matoga qo'yib tepa qismini bichish",
        instruction: "Yosh bolani o'lchab qiynalmang! Uning o'ziga loyiq futbolkasini ikki buklab mato ustiga qo'ying. Yelkadan 22–25 sm uzunlikda tepa (koketka) qismini bo'r bilan chizib kesing.",
        measurementNote: "3–6 yoshli qizchalar uchun koketka: 22–25 sm",
        auntieTip: "Orqa qismini o'rtasidan kesib, 1 ta tugma qadaydigan joy qoldirsangiz, boshidan oson kiyiladi.",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 2,
        title: "Etak qismini 2 barobar kengroq qilib burmalash",
        instruction: "Etak uchun eni 100–120 sm, bo'yi 35–40 sm lenta kesing. Tepasidan 2 qator yirik baxya yuritib, ipini tortib shirin burma hosil qiling.",
        measurementNote: "Etak qanchalik burmali bo'lsa, shuncha qo'g'irchoqdek turadi",
        auntieTip: "Buvijon va xolajonlar o'z ko'ylaklaridan ortgan adras parchasidan nabiraga ham bir xil ko'ylakcha tiksa, hamma havas qiladi!",
        diagramType: 'koketka_cut'
      },
      {
        stepNumber: 3,
        title: "Yengchasini 'qanotcha' (fonarik) qilib ulash",
        instruction: "Yeng o'rniga 10 sm kenglikdagi kichik tasmani burmalab yelka o'miziga ulasangiz, kapalak qanotidek chiroyli turadi.",
        measurementNote: "Qanotcha yeng kengligi: 8–10 sm",
        auntieTip: "Beliga 1 metr atlas lenta bog'lab qo'ysangiz, orqasida katta bant bo'lib turadi.",
        diagramType: 'sleeve_curve'
      }
    ]
  },
  {
    id: 'lesson-26',
    lessonNumber: 26,
    title: "26-dars: Cho'ziluvchan (trikotaj va vilyur) matolarni tikish siri",
    subtitle: "Oddiy tikuv mashinasida trikotaj tikilganda ipi uzilmasligi va to'lqinlanmasligi",
    simpleSummary: "Mashinani zig-zag baxyaga (yoki trikotaj ignaga) qo'yib, matoni tortmasdan tikamiz.",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "O'rta",
    duration: '12 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Trikotaj, vilyur, maslo va kashkorse matolar",
    seamAllowance: "Trikotaj titilmaydi, shuning uchun 1 sm chok yetarli",
    requiredTools: ["'Stretch' yoki 'Jersey' deb yozilgan mashina ignasi", "Tikuv mashinasi"],
    steps: [
      {
        stepNumber: 1,
        title: "Trikotaj uchun maxsus igna (uchida sariq belgili) taqish",
        instruction: "Oddiy igna trikotajni teshganda baxyani tashlab ketadi. Tikuv do'konidan 'Stretch' (cho'ziluvchan mato uchun) igna olib taqing — uchi dumaloqroq bo'lib, bitta ham baxyani qoldirmaydi!",
        measurementNote: "Igna raqami: 75 yoki 80 Stretch",
        auntieTip: "Bitta shu ignani olib qo'ysangiz, eng qiyin vilyur va maslo matolarni ham qiynalmay tikasiz.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 2,
        title: "Mayda zig-zag baxyadan foydalanish",
        instruction: "Trikotaj kiyilganda cho'ziladi, oddiy to'g'ri chok esa qirsillab uzilib ketadi. Mashinani juda ensiz (eni 1 mm, qadami 2.5 mm) zig-zagga qo'yib tiking — chok rezinkadek cho'zilib, hech qachon uzilmaydi!",
        measurementNote: "Ensiz zig-zag: eni 1.0, uzunligi 2.5",
        auntieTip: "Tikayotganda matoni qo'lingiz bilan o'zingizga tortmang, mashina o'zi bemalol tortsin.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 3,
        title: "To'lqinlanib qolgan chokni bug' bilan tekislash",
        instruction: "Agar tikilgan joy sal to'lqinlanib qolsa, ustidan bug'li dazmolni bosib 5 soniya ushlab turing — darhol tekis bo'ladi.",
        measurementNote: "Bug'li dazmol trikotajni joyiga qaytaradi",
        auntieTip: "Yelka choki cho'zilib ketmasligi uchun ichiga ingichka tasma qo'shib tikib yuboring.",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-27',
    lessonNumber: 27,
    title: "27-dars: Yupqa va sirpanchiq shifon hamda ipakni qiynalmay tikish",
    subtitle: "Shifon mato mashina tishiga kirib ketmasligi va burishmasligi uchun 3 ta oddiy hiyla",
    simpleSummary: "Matoning ostiga oddiy daftar varag'i qo'yib tikamiz va keyin qog'ozni yirtib olamiz!",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "Mohir",
    duration: '14 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Shifon, organza, krepdeshin va yupqa ipak",
    seamAllowance: "Yopiq (fransuzcha) chok uchun 1.2 sm",
    requiredTools: ["Yupqa gazeta yoki daftar qog'ozi", "Ingichka 70-raqamli igna"],
    steps: [
      {
        stepNumber: 1,
        title: "Bichayotganda tagiga choyshab to'shash",
        instruction: "Shifon stol ustida suvdek sirpanib ketadi. Stol ustiga eski paxta choyshab to'shab, shifonni unga ignalab kessangiz, bir millimetr ham qimirlamaydi!",
        measurementNote: "Paxta mato shifonni ushlab turadi",
        auntieTip: "Qaychingiz juda o'tkir bo'lsin, o'tmas qaychi shifonni chaynaydi.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Chok ostiga qog'oz tasma qo'yib tikish",
        instruction: "Yupqa shifonni mashina tortib ketmasligi uchun, chok ostiga oddiy gazeta yoki daftar qog'ozidan tasma qo'yib, qog'oz ustidan qo'shib tiking. Tikib bo'lgach qog'ozni ohista yirtib olib tashlaysiz!",
        measurementNote: "Chok mutlaqo burishmasdan tekis chiqadi",
        auntieTip: "Bu keksa ustozlarimizning eng zo'r siri — eng injiq matoni ham 1 daqiqada bo'ysundiradi.",
        diagramType: 'hem_stitch'
      },
      {
        stepNumber: 3,
        title: "Chokni 'ikkita tikish' (yopiq chok) usulida tozalash",
        instruction: "Shifon shaffof bo'lgani uchun ichki choki ko'rinib turadi. Avval o'ngidan 0.5 sm tikib, qirrasini tekislab, keyin teskarisidan 0.7 sm tiksangiz — chok ichida qolib, juda ozoda ko'rinadi.",
        measurementNote: "1-chok: 0.4 sm (o'ngidan) • 2-chok: 0.6 sm (teskarisidan)",
        auntieTip: "Bunga averlok ham shart emas, yuvilganda birorta ipi chiqmaydi!",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-28',
    lessonNumber: 28,
    title: "28-dars: Ko'ylak yoqasi va yengiga krujeva, to'r va jiyak ulash",
    subtitle: "Oddiy matodan tikilgan ko'ylakni ham bayramona va boy ko'rsatish usullari",
    simpleSummary: "Yoqa va yeng uchiga tayyor paxta to'r (krujeva) yoki milliy jiyak bostirib tikamiz.",
    category: 'pardozlash',
    categoryLabel: 'Pardoz va Siri',
    level: "Boshlang'ich",
    duration: '12 daqiqa',
    stepsCount: 3,
    image: adrasDressImg,
    fabricRecommendation: "Shtapel, paxta, adras va baxmal liboslar",
    seamAllowance: "Krujeva chetidan 2 mm da tikiladi",
    requiredTools: ["Paxta krujeva yoki milliy jiyak (1.5 metr)", "Tikuv mashinasi"],
    steps: [
      {
        stepNumber: 1,
        title: "Krujevani tikishdan oldin bug'li dazmoldan o'tkazish",
        instruction: "Bozordan olingan krujeva va jiyaklar yuvilganda tortishib qolishi mumkin. Shu bois avval uni bug'li dazmol bilan yaxshilab dazmollab oling.",
        measurementNote: "Krujeva kirishib olgach ko'ylakka ulanadi",
        auntieTip: "Shunda ko'ylak yuvilganda krujevasi tortishib, yoqani bujmaytirib qo'ymaydi!",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 2,
        title: "Burchaklarda krujevani kichik taxlama (burma) qilish",
        instruction: "To'rtburchak yoki uchburchak yoqaga jiyak ulaganda, burchakka kelganda jiyakni 45 gradus qiya buklab, ustidan mitti uchburchak chok bering.",
        measurementNote: "Burchaklari tekis yotadi",
        auntieTip: "Jiyakning ikki chetidan — ham ichki, ham tashqi qirrasidan 2 qator tiksangiz qilt etmay turadi.",
        diagramType: 'collar_fold'
      },
      {
        stepNumber: 3,
        title: "Koketka chizig'iga kant yoki to'r qo'shish",
        instruction: "Koketka va etak ulanadigan chiziq orasiga krujeva qistirib tiksangiz, ko'ylak xuddi dizaynerlik butigidan olingandek ko'rinadi.",
        measurementNote: "Krujeva gullari pastga qarab tursin",
        auntieTip: "Bir xil rangli matoga oq yoki qaymoqrang ( krem ) krujeva juda yarashadi.",
        diagramType: 'koketka_cut'
      }
    ]
  },
  {
    id: 'lesson-29',
    lessonNumber: 29,
    title: "29-dars: Oshxona uchun bejirim fartuk va tutqichlar tikish",
    subtitle: "Uyda ortib qolgan mato parchalaridan foydali va chiroyli sovg'a tayyorlash",
    simpleSummary: "Yarim metr matodan cho'ntakli oshxona fartugi tikamiz — yaqinlar uchun ajoyib sovg'a!",
    category: 'tikish',
    categoryLabel: 'Tikish mahorati',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: atelierHeroImg,
    fabricRecommendation: "Qalinroq paxta, zig'ir (lyon) yoki duxoba parchasi (70 sm)",
    seamAllowance: "Atrofiga 1.5 sm qaytarma chok",
    requiredTools: ["Mato parchasi", "Tasma", "Qaychi va mashina"],
    steps: [
      {
        stepNumber: 1,
        title: "Fartuk asosini 70×80 sm qilib kesish",
        instruction: "Eni 70 sm, bo'yi 80 sm to'g'ri to'rtburchak kesing. Uni ikki buklab, tepa ikki burchagini qo'ltiq ostiga botmasligi uchun yarim oy qilib o'yib oling.",
        measurementNote: "Eni: 70 sm • Bo'yi: 80 sm",
        auntieTip: "Katta ko'ylaklar bichganda yonidan chiqqan mato qoldiqlari fartuk va cho'ntak uchun ayni muddao!",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Oldiga katta qulay cho'ntak qadash",
        instruction: "25×18 sm o'lchamda to'rtburchak kesib, chetlarini ichkariga buklab fartukning qoq o'rtasiga tikib qo'ying. O'rtasidan tikiga bitta chok ursangiz, 2 bo'linmali cho'ntak bo'ladi.",
        measurementNote: "Cho'ntak tepa burchaklarini uchburchak qilib mahkamlang",
        auntieTip: "Cho'ntak og'ziga boshqa rangli matodan hoshiya qo'ysangiz juda ochilib ketadi.",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 3,
        title: "Bo'yin va bel bog'ichlarini ulash",
        instruction: "Bo'yin uchun 55 sm, belning ikki yoni uchun 70 sm dan uzun bog'ichlar tayyorlab, fartuk burchaklariga mustahkam qilib tikib chiqing.",
        measurementNote: "Bo'yin bog'ichi: 55 sm • Bel bog'ichi: 70 sm dan 2 ta",
        auntieTip: "Mehmonga borganda o'z qo'lingiz bilan tikilgan fartuk sovg'a qilsangiz, duo olib kelasiz!",
        diagramType: 'hem_stitch'
      }
    ]
  },
  {
    id: 'lesson-30',
    lessonNumber: 30,
    title: "30-dars: Tayyor kiyimlarni ta'mirlash — tor ko'ylakni kengaytirish va kaltalash",
    subtitle: "Shkafdagi sevimli, lekin tor yoki uzun bo'lib qolgan ko'ylaklarga ikkinchi hayot bag'ishlash",
    simpleSummary: "Tor kelgan ko'ylakning yon chokiga chiroyli 'lampas' tasma qo'shib 6 sm gacha kengaytiramiz!",
    category: 'pardozlash',
    categoryLabel: 'Pardoz va Siri',
    level: "Boshlang'ich",
    duration: '15 daqiqa',
    stepsCount: 3,
    image: sewingMachineImg,
    fabricRecommendation: "Ta'mirtalab ko'ylaklar, yubkalar va shimlar",
    seamAllowance: "Qo'shimcha tasma eni: 4 sm dan 6 sm gacha",
    requiredTools: ["Chok so'kuvchi (parolka) yoki kichik qaychi", "Mos rangli mato yoki to'r"],
    steps: [
      {
        stepNumber: 1,
        title: "Tor ko'ylakning yon chokini so'kib, bezak tasma qo'shish",
        instruction: "Agar sevimli ko'ylagingiz ko'krak yoki beldan tor bo'lib qolgan bo'lsa, ikki yon chokini so'king. Orasiga 4–5 sm enlikda mos rangli mato yoki qora krujeva qo'shib tiking!",
        measurementNote: "Har ikki yonga 3 sm dan qo'shilsa, ko'ylak 6 sm ga kengayadi!",
        auntieTip: "Bu nafaqat ko'ylakni kengaytiradi, balki yon chiziq bo'yicha qomatni ozg'in va baland ko'rsatadi!",
        diagramType: 'bodice_grid'
      },
      {
        stepNumber: 2,
        title: "Yeng o'mizi siqayotgan bo'lsa — qo'ltiq ostiga 'rombik' qo'yish",
        instruction: "Agar faqat yengning qo'ltiq osti qismi siqayotgan bo'lsa, qo'ltiq osti chokini 8 sm so'kib, u yerga 6×6 sm kichik rombik (olmos) shaklidagi mato parchasini tikib yuboring.",
        measurementNote: "Qo'lni ko'tarish darhol yengillashadi",
        auntieTip: "Milliy ko'ylaklarimizda bu usul qadimdan 'qo'ltiq xalta' deb atalgan — juda qulay!",
        diagramType: 'sleeve_curve'
      },
      {
        stepNumber: 3,
        title: "Uzun ko'ylak yoki shimni zavod chokini saqlab kaltalash",
        instruction: "Kiyimni qancha kaltalash kerakligini polga qarab chizg'ich bilan belgilang. Belgilangan chiziqdan 3 sm pastdan tekis qirqib, ikki buklab tiking va bug'li dazmol bosing.",
        measurementNote: "Qirqishdan oldin ikki yon chokni ustma-ust qo'yib uzunligini solishtiring",
        auntieTip: "Tabriklaymiz, aziz Xolajon! Siz 30 ta darsni to'liq ko'rib chiqib, haqiqiy mohir chevar bo'ldingiz!",
        diagramType: 'hem_stitch'
      }
    ]
  }
];
