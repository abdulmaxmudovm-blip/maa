import { Lesson, LessonStep } from './tailoringData';

interface ExtraLessonSteps {
  step4: Omit<LessonStep, 'stepNumber' | 'diagramType'>;
  step5: Omit<LessonStep, 'stepNumber' | 'diagramType'>;
  step6: Omit<LessonStep, 'stepNumber' | 'diagramType'>;
}

export const EXTRA_STEPS_BY_LESSON_ID: Record<string, ExtraLessonSteps> = {
  'lesson-1': {
    step4: {
      title: "Olingan o'lchamlarni ikkiga va to'rtga bo'lib daftarga yozish",
      instruction: "Mato ikki yoki to'rt buklab kesilgani uchun, ko'krak, bel va bo'ksa o'lchamini 4 ga bo'lib daftaringizga yozib qo'ying. Chizmada ko'rsatilgan tayyor sonlar bilan solishtiring.",
      measurementNote: "Masalan: Ko'krak 100 sm bo'lsa, 100 / 4 = 25 sm (+3 sm erkinlik = 28 sm)",
      auntieTip: "Kalkulyatorda hisoblab qiynalmaslik uchun ilovaning 'O'lcham' bo'limiga kiriting — o'zi tayyor bo'lib beradi!"
    },
    step5: {
      title: "O'z sevimli ko'ylagingizni o'lchab tekshirib ko'rish",
      instruction: "Shkafingizdagi o'zingizga eng qulay keladigan tayyor ko'ylakni stolga yozib, uning ko'krak va yelka kengligini santimetrda o'lchab ko'ring.",
      measurementNote: "Tayyor ko'ylak eni = Sizning yarim o'lchamingiz + erkinlik haqi",
      auntieTip: "Yangi bichayotgan ko'ylagingizni har doim o'zingizga yoqqan ko'ylak o'lchami bilan solishtirsangiz, hech qachon xato qilmaysiz."
    },
    step6: {
      title: "O'lcham varaqasini saqlab qo'yish va mato tanlash",
      instruction: "Yozib olingan 5 ta asosiy o'lchamni tekshirib, chizmadagi 46, 50 yoki 54 razmerlardan qaysi biriga yaqin ekanini belgilab oling.",
      measurementNote: "46 razmer (K:92) • 50 razmer (K:100) • 54 razmer (K:108)",
      auntieTip: "Bir marta to'g'ri o'lcham olsangiz, shu o'lcham bilan yuzlab turli ko'ylaklar bichishingiz mumkin!"
    }
  },
  'lesson-2': {
    step4: {
      title: "Mato chetidagi qattiq hoshiyani (milkini) qaychida qirqish",
      instruction: "Chizmadagi uzuk-uzuk chiziqqa qarang: matoning eng chetidagi teshikchali qattiq milkini 1.5 sm qirqib olib tashlang, chunki u yuvilganda chokni tortib qo'yadi.",
      measurementNote: "Qirqib tashlanadigan milk eni: 1.5 sm",
      auntieTip: "Ayniqsa shtapel va atlas matolarda milk qismi tez tortishadi, uni albatta olib tashlang."
    },
    step5: {
      title: "Mato pastki qirrasini chizg'ichda tekislash",
      instruction: "Sotuvchi do'konda matoni qiyshiqroq kesgan bo'lishi mumkin. Mato bukloviga burchak chizg'ichni qo'yib, pastki etak chizig'ini tekislab qirqing.",
      measurementNote: "Buklov chizig'i va etak burchagi to'g'ri (90 gradus) bo'lsin",
      auntieTip: "Shu tekislashni qilmasangiz, tayyor ko'ylakning bir yoni uzun, bir yoni kalta bo'lib qoladi."
    },
    step6: {
      title: "Bichishga tayyor matoni yana bir bor tekis silash",
      instruction: "Mato ustida birorta g'ijim yoki havo pufagi qolmaganiga ishonch hosil qiling. Endi chizma bo'yicha bo'r bilan chizishga to'liq tayyormiz!",
      measurementNote: "Ikki qavat mato bir-biriga 100% ustma-ust yotsin",
      auntieTip: "Yaxshi tayyorlangan mato — yarim tikilgan ko'ylak degani!"
    }
  },
  'lesson-3': {
    step4: {
      title: "Chok haqi qoldirib qaychi bilan kesish va belga kertik qo'yish",
      instruction: "Chizmadagi 4-qadamga qarang: bo'r chizig'idan 1 barmoq (1.5 sm) tashqaridan qaychi bilan kesib chiqing. Bel chizig'i to'g'risiga 3 mm kichik kertik qiling.",
      measurementNote: "Yon va yelka chok haqi: +1.5 sm • Etak haqi: +3.0 sm",
      auntieTip: "Belga qo'yilgan kichik kertik tikayotganda old va orqa bo'lakni bir-biriga aniq moslashga yordam beradi."
    },
    step5: {
      title: "Yelka va yon qirralarini to'g'nog'ichlab mashinada tikish",
      instruction: "Chizmadagi yashil chiziq bo'ylab old va orqa bo'lakni ustma-ust qo'ying, to'g'nog'ich qadang va chetidan 1.5 sm masofada mashinada tikib chiqing.",
      measurementNote: "Mashina baxyasi yirikligi: 2.5 mm",
      auntieTip: "Tikishni boshlashda va tugatishda 1 sm orqaga-oldinga yurib ip uchini mustahkamlang."
    },
    step6: {
      title: "Tikilgan choklarni bug'li dazmol bilan yotqizish",
      instruction: "Ko'ylakni o'ngiga ag'darishdan oldin choklarni orqa bo'lak tomonga qaratib bug'li dazmol bosing. Ko'ylak asosi tayyor!",
      measurementNote: "Dazmollangan chok silliq va tekis yotadi",
      auntieTip: "Chokni dazmollamasdan keyingi qadamga o'tmang — dazmol chevarning eng yaqin do'sti!"
    }
  }
};

export function expandLessonToSixSteps(lesson: Lesson): Lesson {
  if (lesson.steps.length >= 6) {
    return { ...lesson, stepsCount: lesson.steps.length };
  }

  const baseDiagram = lesson.steps[0]?.diagramType || 'bodice_grid';
  const customExtra = EXTRA_STEPS_BY_LESSON_ID[lesson.id];

  const step4: LessonStep = customExtra
    ? { stepNumber: 4, diagramType: baseDiagram, ...customExtra.step4 }
    : {
        stepNumber: 4,
        diagramType: baseDiagram,
        title: "Chizmadagi o'lcham bo'yicha chok haqi qoldirib qirqish va kertik qo'yish",
        instruction: `Yuqoridagi andoza chizmasiga qarang: asosiy bo'r chizig'idan tashqariga chok haqi (${lesson.seamAllowance}) qoldirib, o'tkir qaychi bilan shoshilmasdan qirqing. Muhim ulanish nuqtalariga 3 mm kichik kertik (belgi) qo'ying.`,
        measurementNote: lesson.seamAllowance,
        auntieTip: "Qirqayotganda chap qo'lingiz bilan matoni stolga ohista bosib turing, shunda pastki qavat siljib ketmaydi."
      };

  const step5: LessonStep = customExtra
    ? { stepNumber: 5, diagramType: baseDiagram, ...customExtra.step5 }
    : {
        stepNumber: 5,
        diagramType: baseDiagram,
        title: "Bo'laklarni to'g'nog'ichlash va chizmadagi yashil chiziq bo'ylab tikish",
        instruction: "Chizmada ko'rsatilgan yashil baxya chizig'iga e'tibor bering: bo'laklarni o'ng tomonini ichkariga qaratib ustma-ust qo'ying, kertiklarni bir-biriga moslab to'g'nog'ich qadang va mashinada bir tekis tikib chiqing.",
        measurementNote: "Mashina baxyasi: 2.5 – 3.0 mm, chok chetidan 1.0 – 1.5 sm",
        auntieTip: "Ignaga emas, mashina lapkasining chetiga qarab tiksangiz, chizig'ingiz ipdek tekis chiqadi!"
      };

  const step6: LessonStep = customExtra
    ? { stepNumber: 6, diagramType: baseDiagram, ...customExtra.step6 }
    : {
        stepNumber: 6,
        diagramType: baseDiagram,
        title: "Chokni bug'li dazmolda yotqizish va o'ngiga ag'darib tekshirish",
        instruction: "Tikilgan chokni avval teskari tomonidan, so'ng o'ngiga ag'darib nam doka orqali bug'li dazmol bilan tekislang. Chizmadagi yakuniy ko'rinish bilan o'z ishingizni solishtiring — hammasi silliq va bejirim!",
        measurementNote: "Yakuniy pardoz: bug'li dazmol va 2 mm bezak baxyasi",
        auntieTip: "Har bir chokdan keyin dazmol bossangiz, tikkan libosingiz xuddi qimmat butikdan olingandek ko'rkli chiqadi!"
      };

  const allSixSteps: LessonStep[] = [
    ...lesson.steps.map((s, idx) => ({ ...s, stepNumber: idx + 1 })),
    step4,
    step5,
    step6,
  ];

  return {
    ...lesson,
    stepsCount: allSixSteps.length,
    steps: allSixSteps,
  };
}
