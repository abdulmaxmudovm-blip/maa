import React, { useState, useEffect } from 'react';
import {
  Scissors,
  BookOpen,
  Ruler,
  Users,
  Sparkles,
  Clock,
  CheckCircle2,
  Bookmark,
  ChevronRight,
  Heart,
  Search,
  User,
  Type,
  Lightbulb,
} from 'lucide-react';
import {
  HERO_IMAGE,
  LESSONS_DATA,
  INITIAL_COMMUNITY_POSTS,
  INITIAL_CLIENTS,
  Lesson,
  LessonCategory,
  CommunityPost,
  ClientMeasurement,
} from './data/tailoringData';
import { LessonDetailModal } from './components/LessonDetailModal';
import { MeasurementView } from './components/MeasurementView';
import { CommunityView } from './components/CommunityView';
import { ProfileAtelierView } from './components/ProfileAtelierView';

type ActiveTab = 'home' | 'lessons' | 'calculator' | 'community' | 'profile';
type StageFilter = 'all' | 'stage1' | 'stage2' | 'stage3';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [selectedCategory, setSelectedCategory] = useState<LessonCategory>('barchasi');
  const [selectedStage, setSelectedStage] = useState<StageFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  // Persistent State with localStorage
  const [auntieName, setAuntieName] = useState<string>(() => {
    return localStorage.getItem('chevar_auntie_name') || 'Aziz Xolajon';
  });

  const [largeTextMode, setLargeTextMode] = useState<boolean>(() => {
    return localStorage.getItem('chevar_large_text') === 'true';
  });

  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('chevar_completed_lessons');
    return saved ? JSON.parse(saved) : ['lesson-1'];
  });

  const [bookmarkedLessons, setBookmarkedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('chevar_bookmarked_lessons');
    return saved ? JSON.parse(saved) : ['lesson-1', 'lesson-11'];
  });

  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(() => {
    const saved = localStorage.getItem('chevar_community_posts');
    return saved ? JSON.parse(saved) : INITIAL_COMMUNITY_POSTS;
  });

  const [clients, setClients] = useState<ClientMeasurement[]>(() => {
    const saved = localStorage.getItem('chevar_clients');
    return saved ? JSON.parse(saved) : INITIAL_CLIENTS;
  });

  useEffect(() => {
    localStorage.setItem('chevar_auntie_name', auntieName);
  }, [auntieName]);

  useEffect(() => {
    localStorage.setItem('chevar_large_text', String(largeTextMode));
  }, [largeTextMode]);

  useEffect(() => {
    localStorage.setItem('chevar_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('chevar_bookmarked_lessons', JSON.stringify(bookmarkedLessons));
  }, [bookmarkedLessons]);

  useEffect(() => {
    localStorage.setItem('chevar_community_posts', JSON.stringify(communityPosts));
  }, [communityPosts]);

  useEffect(() => {
    localStorage.setItem('chevar_clients', JSON.stringify(clients));
  }, [clients]);

  // Handlers
  const handleToggleCompleteLesson = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
  };

  const handleToggleBookmarkLesson = (lessonId: string) => {
    setBookmarkedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    );
  };

  const handleToggleLikePost = (postId: string) => {
    setCommunityPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        const nextLiked = !post.isLiked;
        return {
          ...post,
          isLiked: nextLiked,
          likes: nextLiked ? post.likes + 1 : Math.max(0, post.likes - 1),
        };
      })
    );
  };

  const handleToggleSavePost = (postId: string) => {
    setCommunityPosts((prev) =>
      prev.map((post) => (post.id === postId ? { ...post, isSaved: !post.isSaved } : post))
    );
  };

  const handleAddComment = (postId: string, author: string, text: string) => {
    setCommunityPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: `c-${Date.now()}`,
              author,
              city: "O'zbekiston",
              text,
              createdAt: 'Hozirgina',
            },
          ],
        };
      })
    );
  };

  const handleCreatePost = (newPostData: {
    authorName: string;
    authorCity: string;
    title: string;
    story: string;
    fabricUsed: string;
    timeSpent: string;
    image: string;
  }) => {
    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      authorName: newPostData.authorName,
      authorRole: 'Mohir Chevar',
      authorCity: newPostData.authorCity,
      avatarBg: '#C85A32',
      title: newPostData.title,
      story: newPostData.story,
      fabricUsed: newPostData.fabricUsed,
      timeSpent: newPostData.timeSpent,
      difficulty: 'Maxsus ish',
      image: newPostData.image,
      likes: 1,
      isLiked: true,
      isSaved: true,
      createdAt: 'Hozirgina',
      comments: [],
    };
    setCommunityPosts((prev) => [newPost, ...prev]);
  };

  const handleAddClient = (clientData: Omit<ClientMeasurement, 'id' | 'updatedAt'>) => {
    const newClient: ClientMeasurement = {
      ...clientData,
      id: `client-${Date.now()}`,
      updatedAt: "Bugun qo'shildi",
    };
    setClients((prev) => [newClient, ...prev]);
  };

  const handleDeleteClient = (id: string) => {
    setClients((prev) => prev.filter((c) => c.id !== id));
  };

  // Filtered lessons across all 30 lessons
  const filteredLessons = LESSONS_DATA.filter((lesson) => {
    const matchesCategory =
      selectedCategory === 'barchasi' || lesson.category === selectedCategory;

    const matchesStage =
      selectedStage === 'all' ||
      (selectedStage === 'stage1' && lesson.lessonNumber >= 1 && lesson.lessonNumber <= 10) ||
      (selectedStage === 'stage2' && lesson.lessonNumber >= 11 && lesson.lessonNumber <= 20) ||
      (selectedStage === 'stage3' && lesson.lessonNumber >= 21 && lesson.lessonNumber <= 30);

    const matchesSearch =
      !searchQuery.trim() ||
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.simpleSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.fabricRecommendation.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStage && matchesSearch;
  });

  const categories: { id: LessonCategory; label: string; count: number }[] = [
    { id: 'barchasi', label: 'Barcha 30 ta dars', count: LESSONS_DATA.length },
    {
      id: 'bichish',
      label: 'Bichish va Andoza',
      count: LESSONS_DATA.filter((l) => l.category === 'bichish').length,
    },
    {
      id: 'milliy',
      label: "Milliy ko'ylaklar",
      count: LESSONS_DATA.filter((l) => l.category === 'milliy').length,
    },
    {
      id: 'tikish',
      label: 'Tikish sirlari',
      count: LESSONS_DATA.filter((l) => l.category === 'tikish').length,
    },
    {
      id: 'pardozlash',
      label: 'Pardoz va Ta\'mir',
      count: LESSONS_DATA.filter((l) => l.category === 'pardozlash').length,
    },
  ];

  const renderLessonCard = (lesson: Lesson) => {
    const isDone = completedLessons.includes(lesson.id);
    const isSaved = bookmarkedLessons.includes(lesson.id);
    return (
      <article
        key={lesson.id}
        onClick={() => setActiveLesson(lesson)}
        className="group rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] hover:border-[#C85A32] overflow-hidden shadow-xs transition-all cursor-pointer flex flex-col justify-between"
      >
        <div>
          <div className="relative h-44 w-full overflow-hidden bg-[#F3EFE6]">
            <img
              src={lesson.image}
              alt={lesson.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#C85A32] text-white shadow-xs">
                {lesson.lessonNumber}-dars
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#1E1A17]/80 backdrop-blur-xs text-white">
                {lesson.categoryLabel}
              </span>
              {isDone && (
                <span className="px-2 py-1 rounded-md text-xs font-bold bg-[#2E6F40] text-white flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  O'rgandim
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleBookmarkLesson(lesson.id);
              }}
              title="Darsni saqlab qo'yish"
              className={`absolute top-3 right-3 p-2 rounded-xl border transition-colors ${
                isSaved
                  ? 'bg-[#C85A32] text-white border-[#C85A32]'
                  : 'bg-white/90 text-[#1E1A17] border-[#E2D9C8]'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 sm:p-5 space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-[#6E655F]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C85A32]" />
                {lesson.duration}
              </span>
              <span>•</span>
              <span>{lesson.stepsCount} ta oddiy qadam</span>
              <span>•</span>
              <span className="text-[#3D5A45]">{lesson.level}</span>
            </div>

            <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#1E1A17] group-hover:text-[#C85A32] transition-colors leading-snug">
              {lesson.title}
            </h3>

            {/* Simple 1-sentence explanation right on the card */}
            <div className="rounded-xl bg-[#F3EFE6] border border-[#E2D9C8] p-3 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium text-[#1E1A17] leading-relaxed">
                {lesson.simpleSummary}
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-5 py-3 bg-[#F3EFE6]/70 border-t border-[#E2D9C8] flex items-center justify-between">
          <span className="text-xs font-semibold text-[#3D5A45] truncate max-w-[68%]">
            {lesson.seamAllowance}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C85A32]">
            Ko'rish <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    );
  };

  return (
    <div
      className={`min-h-screen bg-[#FBF9F5] text-[#1E1A17] pb-24 ${
        largeTextMode ? 'text-[108%]' : ''
      }`}
    >
      {/* Top Atelier Header */}
      <header className="sticky top-0 z-30 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E2D9C8]">
        <div className="max-w-4xl mx-auto px-4 py-3.5 flex items-center justify-between gap-3">
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#C85A32] text-white flex items-center justify-center shadow-xs">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif-display font-bold text-lg sm:text-xl text-[#1E1A17] tracking-tight">
                  Chevar Xonim
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F3EFE6] text-[#C85A32] border border-[#E2D9C8]">
                  30 ta Oson Dars
                </span>
              </div>
              <p className="text-xs text-[#6E655F]">
                Xush kelibsiz, <strong className="text-[#1E1A17]">{auntieName}</strong>!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLargeTextMode((prev) => !prev)}
              title="Yozuv kattaligini o'zgartirish"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                largeTextMode
                  ? 'bg-[#3D5A45] text-white border-[#3D5A45]'
                  : 'bg-[#F3EFE6] text-[#1E1A17] border-[#E2D9C8] hover:border-[#C85A32]'
              }`}
            >
              <Type className="w-4 h-4" />
              <span className="hidden sm:inline">Katta yozuv</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F3EFE6] hover:bg-[#E8E0D2] text-[#1E1A17] border border-[#E2D9C8] text-xs font-bold transition-colors cursor-pointer"
            >
              <Ruler className="w-4 h-4 text-[#C85A32]" />
              <span>O'lchamlar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Viewport Container */}
      <main className="max-w-4xl mx-auto px-4 pt-5">
        {/* TAB 1: HOME (ASOSIY) */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            {/* Warm Welcome Hero Card */}
            <section className="rounded-2xl overflow-hidden bg-[#F3EFE6] border border-[#E2D9C8] shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-7 p-5 sm:p-7 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#C85A32]/12 text-[#C85A32] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      Xolajonim uchun 30 ta sodda darslik
                    </span>
                    <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#1E1A17] leading-tight">
                      Bichish va tikish sirlari — juda sodda, uyda o'rganishga qulay tilda!
                    </h1>
                    <p className="text-sm sm:text-base text-[#6E655F] leading-relaxed">
                      Murakkab chizmalarsiz, oddiy "1 barmoq eni", "1 qarich" kabi tushunarli o'lchamlar bilan 1-darsdan 30-darsgacha sekin-asta tikishni o'rganamiz.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      onClick={() => setActiveTab('lessons')}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C85A32] hover:bg-[#b04b25] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      Barcha 30 ta darsni ko'rish
                    </button>
                    <button
                      onClick={() => setActiveTab('community')}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#FBF9F5] hover:bg-[#E8E0D2] text-[#1E1A17] border border-[#D8CEBE] font-bold text-sm transition-colors cursor-pointer"
                    >
                      <Users className="w-4 h-4 text-[#3D5A45]" />
                      Chevarlar ishlari ({communityPosts.length})
                    </button>
                  </div>
                </div>

                <div className="md:col-span-5 relative min-h-[220px] md:min-h-full">
                  <img
                    src={HERO_IMAGE}
                    alt="Tikuvchilik ustaxonasi"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 left-3 rounded-xl bg-[#1E1A17]/85 backdrop-blur-xs p-3 text-[#FBF9F5]">
                    <p className="text-xs font-bold text-[#E8C56B]">
                      O'zlashtirilgan darslar: {completedLessons.length} / 30 ta
                    </p>
                    <p className="text-xs leading-snug mt-0.5">
                      "Ko'z qo'rqoq — qo'l botir! Har kuni 1 tadan dars ko'rsangiz, 1 oyda usta chevar bo'lasiz."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3 Stage Learning Roadmap */}
            <section className="space-y-3">
              <h2 className="font-serif-display text-xl font-bold text-[#1E1A17]">
                30 ta darslik o'quv bosqichlari (tanlab bosing):
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <button
                  onClick={() => {
                    setSelectedStage('stage1');
                    setActiveTab('lessons');
                  }}
                  className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] hover:border-[#C85A32] p-4 text-left transition-all cursor-pointer group"
                >
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#C85A32]/12 text-[#C85A32] mb-2">
                    1 – 10 Darslar
                  </span>
                  <h3 className="font-serif-display font-bold text-base text-[#1E1A17] group-hover:text-[#C85A32]">
                    1-bosqich: Eng oson asoslar
                  </h3>
                  <p className="text-xs text-[#6E655F] mt-1 leading-relaxed">
                    O'lcham olish, qog'ozsiz matoga chizish, yoqa va yeng o'yish, mashinada tekis chok tikish.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setSelectedStage('stage2');
                    setActiveTab('lessons');
                  }}
                  className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] hover:border-[#3D5A45] p-4 text-left transition-all cursor-pointer group"
                >
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#3D5A45]/12 text-[#3D5A45] mb-2">
                    11 – 20 Darslar
                  </span>
                  <h3 className="font-serif-display font-bold text-base text-[#1E1A17] group-hover:text-[#3D5A45]">
                    2-bosqich: Ko'ylaklar va Adras
                  </h3>
                  <p className="text-xs text-[#6E655F] mt-1 leading-relaxed">
                    Koketkali ko'ylak, burma yig'ish, adras bichish, yashirin cho'ntak, yeng rezinkasi va zamok.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setSelectedStage('stage3');
                    setActiveTab('lessons');
                  }}
                  className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] hover:border-[#B8860B] p-4 text-left transition-all cursor-pointer group"
                >
                  <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#B8860B]/15 text-[#946B00] mb-2">
                    21 – 30 Darslar
                  </span>
                  <h3 className="font-serif-display font-bold text-base text-[#1E1A17] group-hover:text-[#946B00]">
                    3-bosqich: Baxmal, Nimcha va Siri
                  </h3>
                  <p className="text-xs text-[#6E655F] mt-1 leading-relaxed">
                    Klyosh etak, baxmal nimcha, uy lozimi, nabiralar ko'ylakchasi, trikotaj, shifon va kiyim ta'miri.
                  </p>
                </button>
              </div>
            </section>

            {/* First 6 Lessons Preview on Home */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1E1A17]">
                    Birinchi qadamdan boshlang (1–6 darslar)
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6E655F]">
                    Har bir dars oddiy uy so'zlari bilan tushuntirilgan
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedStage('all');
                    setActiveTab('lessons');
                  }}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#C85A32] hover:underline cursor-pointer"
                >
                  Barcha 30 ta dars <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {LESSONS_DATA.slice(0, 6).map((lesson) => renderLessonCard(lesson))}
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    setSelectedStage('all');
                    setActiveTab('lessons');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#3D5A45] hover:bg-[#2E6F40] text-white font-bold text-sm shadow-xs cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  Qolgan 24 ta darsni ham ko'rish (Jami 30 ta dars)
                </button>
              </div>
            </section>

            {/* Community Highlights Preview on Home */}
            <section className="space-y-4 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1E1A17]">
                    Hamjamiyatdagi chevarlar ishlari
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6E655F]">
                    Chevar opa-singillarimiz tikkan liboslar va foydali tajribalar
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('community')}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#3D5A45] hover:underline cursor-pointer"
                >
                  Hammasini ko'rish <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {communityPosts.slice(0, 2).map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setActiveTab('community')}
                    className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] hover:border-[#3D5A45] overflow-hidden flex flex-col cursor-pointer transition-all"
                  >
                    <div className="h-44 w-full relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/70 text-white text-xs font-medium">
                        {post.authorName} • {post.authorCity}
                      </span>
                    </div>
                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif-display font-bold text-base text-[#1E1A17]">
                          {post.title}
                        </h4>
                        <p className="text-xs text-[#6E655F] line-clamp-2 mt-1">
                          {post.story}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-[#E2D9C8] text-xs font-bold">
                        <span className="text-[#C85A32] flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes} ta olqish
                        </span>
                        <span className="text-[#3D5A45]">
                          {post.comments.length} ta fikr →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: LESSONS CATALOG (30 DARSLAR) */}
        {activeTab === 'lessons' && (
          <div className="space-y-6 pb-8">
            <div className="rounded-2xl bg-[#F3EFE6] border border-[#E2D9C8] p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                    To'liq O'quv Dasturi • 1 dan 30 gacha
                  </span>
                  <h2 className="font-serif-display text-2xl font-bold text-[#1E1A17]">
                    30 ta Osonlashtirilgan Bichish va Tikish Darsi
                  </h2>
                  <p className="text-sm text-[#6E655F] mt-0.5">
                    Har bir dars oddiy, tushunarli so'zlar va aniq chizmalar bilan yozilgan
                  </p>
                </div>
                <div className="shrink-0 bg-[#FBF9F5] px-3.5 py-2 rounded-xl border border-[#E2D9C8] text-center">
                  <span className="font-mono-num text-lg font-bold text-[#2E6F40] block">
                    {completedLessons.length} / 30
                  </span>
                  <span className="text-[11px] font-semibold text-[#6E655F]">
                    O'zlashtirildi
                  </span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#6E655F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Dars raqami yoki mavzuni yozing (masalan: 11, koketka, adras, lozim, yeng)..."
                  className="w-full rounded-xl bg-[#FBF9F5] border border-[#D8CEBE] pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#C85A32]"
                />
              </div>

              {/* Stage Selector Buttons (1-10, 11-20, 21-30) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'all', label: 'Barchasi (1–30)' },
                  { id: 'stage1', label: '1–10: Boshlang\'ich' },
                  { id: 'stage2', label: '11–20: Ko\'ylaklar' },
                  { id: 'stage3', label: '21–30: Mahorat' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSelectedStage(st.id as StageFilter)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      selectedStage === st.id
                        ? 'bg-[#3D5A45] text-white border-[#3D5A45]'
                        : 'bg-[#FBF9F5] text-[#1E1A17] border-[#E2D9C8] hover:border-[#3D5A45]'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Category Filter Tabs */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#C85A32] text-white border-[#C85A32]'
                        : 'bg-[#FBF9F5] text-[#1E1A17] border-[#E2D9C8] hover:border-[#C85A32]'
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Lessons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filteredLessons.map((lesson) => renderLessonCard(lesson))}
            </div>
          </div>
        )}

        {/* TAB 3: MEASUREMENT CALCULATOR & NOTEBOOK (O'LCHAMLAR) */}
        {activeTab === 'calculator' && (
          <MeasurementView
            clients={clients}
            onAddClient={handleAddClient}
            onDeleteClient={handleDeleteClient}
          />
        )}

        {/* TAB 4: COMMUNITY SHOWCASE (HAMJAMIYAT) */}
        {activeTab === 'community' && (
          <CommunityView
            posts={communityPosts}
            onToggleLike={handleToggleLikePost}
            onToggleSave={handleToggleSavePost}
            onAddComment={handleAddComment}
            onCreatePost={handleCreatePost}
            defaultAuthorName={auntieName}
          />
        )}

        {/* TAB 5: PERSONAL ATELIER & SAVED ITEMS (IJODXONA) */}
        {activeTab === 'profile' && (
          <ProfileAtelierView
            auntieName={auntieName}
            onUpdateAuntieName={setAuntieName}
            largeTextMode={largeTextMode}
            onToggleLargeText={() => setLargeTextMode((prev) => !prev)}
            lessons={LESSONS_DATA}
            completedLessonIds={completedLessons}
            bookmarkedLessonIds={bookmarkedLessons}
            savedPosts={communityPosts.filter((p) => p.isSaved)}
            onOpenLesson={(lesson) => setActiveLesson(lesson)}
            onSwitchTab={(tab) => setActiveTab(tab)}
          />
        )}
      </main>

      {/* Interactive Full-Screen Lesson Reader Modal */}
      {activeLesson && (
        <LessonDetailModal
          lesson={activeLesson}
          allLessons={LESSONS_DATA}
          isCompleted={completedLessons.includes(activeLesson.id)}
          isBookmarked={bookmarkedLessons.includes(activeLesson.id)}
          onClose={() => setActiveLesson(null)}
          onSelectLesson={(nextLesson) => setActiveLesson(nextLesson)}
          onToggleComplete={handleToggleCompleteLesson}
          onToggleBookmark={handleToggleBookmarkLesson}
          onOpenCalculator={() => {
            setActiveLesson(null);
            setActiveTab('calculator');
          }}
        />
      )}

      {/* Mobile-First Ergonomic Bottom Navigation Bar */}
      <nav
        aria-label="Asosiy navigatsiya"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-t border-[#E2D9C8] shadow-lg"
      >
        <div className="max-w-xl mx-auto px-2 py-1.5 grid grid-cols-5 gap-1">
          {[
            { id: 'home', label: 'Asosiy', icon: Scissors },
            { id: 'lessons', label: '30 Dars', icon: BookOpen },
            { id: 'calculator', label: "O'lcham", icon: Ruler },
            { id: 'community', label: 'Hamjamiyat', icon: Users },
            { id: 'profile', label: 'Ijodxona', icon: User },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveLesson(null);
                  setActiveTab(item.id as ActiveTab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C85A32]/12 text-[#C85A32] font-bold'
                    : 'text-[#6E655F] hover:text-[#1E1A17] font-medium'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                <span className="text-[11px] mt-1 tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
