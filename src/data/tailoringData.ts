import atelierHeroImg from '../assets/images/atelier_hero_banner_1790522267282.jpg';
import patternCuttingImg from '../assets/images/lesson_pattern_cutting_1790522285628.jpg';
import adrasDressImg from '../assets/images/community_adras_dress_1790522299225.jpg';
import velvetNimchaImg from '../assets/images/community_velvet_nimcha_1790522340641.jpg';
import { LESSONS_PART_1 } from './lessonsPart1';
import { LESSONS_PART_2 } from './lessonsPart2';
import { expandLessonToSixSteps } from './extraStepsData';

export type LessonCategory = 'barchasi' | 'bichish' | 'tikish' | 'milliy' | 'pardozlash';

export interface LessonStep {
  stepNumber: number;
  title: string;
  instruction: string;
  measurementNote: string;
  auntieTip: string;
  diagramType: 'bodice_grid' | 'sleeve_curve' | 'collar_fold' | 'koketka_cut' | 'zipper_seam' | 'hem_stitch';
}

export interface Lesson {
  id: string;
  lessonNumber: number;
  title: string;
  subtitle: string;
  simpleSummary: string;
  category: Exclude<LessonCategory, 'barchasi'>;
  categoryLabel: string;
  level: "Boshlang'ich" | "O'rta" | "Mohir";
  duration: string;
  stepsCount: number;
  image: string;
  fabricRecommendation: string;
  seamAllowance: string;
  requiredTools: string[];
  steps: LessonStep[];
}

export interface CommentItem {
  id: string;
  author: string;
  city: string;
  text: string;
  createdAt: string;
}

export interface CommunityPost {
  id: string;
  authorName: string;
  authorRole: string;
  authorCity: string;
  avatarBg: string;
  title: string;
  story: string;
  fabricUsed: string;
  timeSpent: string;
  difficulty: string;
  image: string;
  likes: number;
  isLiked?: boolean;
  isSaved?: boolean;
  createdAt: string;
  comments: CommentItem[];
}

export interface ClientMeasurement {
  id: string;
  name: string;
  relation: string;
  chest: number;
  waist: number;
  hips: number;
  shoulder: number;
  sleeve: number;
  length: number;
  notes: string;
  updatedAt: string;
}

export const HERO_IMAGE = atelierHeroImg;

export const LESSONS_DATA: Lesson[] = [...LESSONS_PART_1, ...LESSONS_PART_2].map(expandLessonToSixSteps);

export const INITIAL_COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'post-1',
    authorName: 'Zuhra Xola (Ustoz Chevar)',
    authorRole: '30 yillik tajribali chevar',
    authorCity: 'Toshkent',
    avatarBg: '#C85A32',
    title: "Bahorgi Marg'ilon adrasidan koketkali bayramona ko'ylak",
    story: "Assalomu alaykum, aziz chevar opa-singillarim! Kecha jiyanimning unashtiruv marosimiga tabiiy ipak aralash Marg'ilon adrasidan ushbu koketkali ko'ylakni bichib-tikdim. Yeng uchini mayda rezinkali qildim, yoqasiga esa o'zining matosidan mayda tasma qo'ydim. Darslikdagi 11 va 12-darsda ko'rsatilganidek bichdim — qomatga quyib qo'ygandek tushdi!",
    fabricUsed: "Marg'ilon ipak adrasi (2.4 metr)",
    timeSpent: '4 soat',
    difficulty: "Boshlang'ich",
    image: adrasDressImg,
    likes: 48,
    isLiked: true,
    isSaved: true,
    createdAt: 'Bugun, 10:30',
    comments: [
      {
        id: 'c-1',
        author: 'Dilbar opa',
        city: "Farg'ona",
        text: "Qo'lingiz dard ko'rmasin Zuhra opa! Koketka burmalari bir tekis chiqibdi, rangi ham juda ochilibdi.",
        createdAt: '2 soat oldin'
      },
      {
        id: 'c-2',
        author: 'Mohira',
        city: 'Samarqand',
        text: "Men ham shu darslikdagi o'lcham bo'yicha onamga shtapeldan bichdim, juda sodda va tushunarli yozilgan ekan!",
        createdAt: '1 soat oldin'
      }
    ]
  },
  {
    id: 'post-2',
    authorName: 'Saodat Xonim',
    authorRole: 'Milliy liboslar ustasi',
    authorCity: 'Buxoro',
    avatarBg: '#3D5A45',
    title: "Zumrad baxmaldan zardo'zi hoshiyali nimcha",
    story: "22 va 23-darsdagi maslahatlar asosida baxmal (duxoba) matodan astarli nimcha tikdim. Baxmalni bichayotganda tuklarining yo'nalishini pastdan yuqoriga qaratib olsangiz, rangi yanada to'q va boy ko'rinar ekan. Chok haqini 1 barmoq (1.5 sm) qoldirib, ichini ipak astar bilan yopdim.",
    fabricUsed: 'Zumrad baxmal (1.1 metr) + ipak astar',
    timeSpent: '2 kun',
    difficulty: "O'rta",
    image: velvetNimchaImg,
    likes: 63,
    isLiked: false,
    isSaved: false,
    createdAt: 'Kecha, 17:45',
    comments: [
      {
        id: 'c-3',
        author: 'Munira xola',
        city: 'Namangan',
        text: "Baxmalni dazmollash qiyin-ku, qanday qilib choklarini iz tushirmasdan dazmolladingiz?",
        createdAt: 'Kecha'
      },
      {
        id: 'c-4',
        author: 'Saodat Xonim',
        city: 'Buxoro',
        text: "Munira opa, 22-darsda aytilganidek ostiga qalin paxmoq sochiq to'shab, dazmolni tekkizmasdan faqat bug'ini urib tekisladim!",
        createdAt: 'Kecha'
      }
    ]
  },
  {
    id: 'post-3',
    authorName: 'Guli Chevar',
    authorRole: 'Uy bekasi va havaskor tikuvchi',
    authorCity: 'Andijon',
    avatarBg: '#B8860B',
    title: "Birinchi marta qog'ozsiz to'g'ri matoga chizib bichgan ko'ylagim!",
    story: "Avvallari qaychi ushlashga qo'rqardim, matoni buzib qo'ysam-chi deb o'ylardim. Ilovadagi 1-dan 5-darsgacha qadam-baqadam o'qib, oddiy sovun bo'lagi bilan matoga chizib kesdim. Hech qayeri tortishmadi! Endi 25-darsga qarab nabiramga ham ko'ylakcha tikib bermoqchiman.",
    fabricUsed: "Pushti zig'ir (lyon) mato (2.2 metr)",
    timeSpent: '3 soat',
    difficulty: "Boshlang'ich",
    image: patternCuttingImg,
    likes: 39,
    isLiked: false,
    isSaved: false,
    createdAt: '2 kun oldin',
    comments: [
      {
        id: 'c-5',
        author: 'Feruza opa',
        city: 'Toshkent',
        text: "Barakalla Guli! Ko'z qo'rqoq, qo'l botir deyishadi, chizig'ingiz xuddi ustozlarnikidek tekis chiqibdi.",
        createdAt: '2 kun oldin'
      }
    ]
  }
];

export const INITIAL_CLIENTS: ClientMeasurement[] = [
  {
    id: 'client-1',
    name: "O'zimning o'lchamim",
    relation: 'Shaxsiy andoza',
    chest: 100,
    waist: 84,
    hips: 108,
    shoulder: 39,
    sleeve: 56,
    length: 125,
    notes: "Koketkali ko'ylaklarda yengini tirsakdan pastroq (45 sm) qilish qulay.",
    updatedAt: 'Bugun yangilangan'
  },
  {
    id: 'client-2',
    name: 'Madina (Jiyanim)',
    relation: "Oila a'zosi",
    chest: 90,
    waist: 72,
    hips: 96,
    shoulder: 37,
    sleeve: 58,
    length: 130,
    notes: "Adras va shtapel ko'ylaklarni belidan sal erkinroq xush ko'radi.",
    updatedAt: '3 kun oldin'
  },
  {
    id: 'client-3',
    name: "Hulkar opa (Qo'shni)",
    relation: 'Doimiy mijoz',
    chest: 106,
    waist: 90,
    hips: 114,
    shoulder: 41,
    sleeve: 55,
    length: 128,
    notes: "Yoqa o'mizini juda chuqur qilmaslik kerak (old yoqa 8 sm).",
    updatedAt: '1 hafta oldin'
  }
];
