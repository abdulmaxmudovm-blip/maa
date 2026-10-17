import React, { useState } from 'react';
import {
  Award,
  Bookmark,
  CheckCircle2,
  Edit3,
  Heart,
  Scissors,
  Sparkles,
  Type,
  ChevronRight,
} from 'lucide-react';
import { Lesson, CommunityPost } from '../data/tailoringData';

interface ProfileAtelierViewProps {
  auntieName: string;
  onUpdateAuntieName: (name: string) => void;
  largeTextMode: boolean;
  onToggleLargeText: () => void;
  lessons: Lesson[];
  completedLessonIds: string[];
  bookmarkedLessonIds: string[];
  savedPosts: CommunityPost[];
  onOpenLesson: (lesson: Lesson) => void;
  onSwitchTab: (tab: 'home' | 'lessons' | 'calculator' | 'community' | 'profile') => void;
}

export const ProfileAtelierView: React.FC<ProfileAtelierViewProps> = ({
  auntieName,
  onUpdateAuntieName,
  largeTextMode,
  onToggleLargeText,
  lessons,
  completedLessonIds,
  bookmarkedLessonIds,
  savedPosts,
  onOpenLesson,
  onSwitchTab,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(auntieName);

  const bookmarkedLessons = lessons.filter((l) => bookmarkedLessonIds.includes(l.id));

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      onUpdateAuntieName(tempName.trim());
    }
    setIsEditingName(false);
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Personal Atelier Card */}
      <div className="rounded-2xl bg-[#F3EFE6] border border-[#E2D9C8] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#C85A32] text-white font-serif-display text-2xl font-bold flex items-center justify-center shadow-sm shrink-0">
              <Scissors className="w-8 h-8" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3D5A45]">
                <Sparkles className="w-3.5 h-3.5" />
                Shaxsiy İjodxona
              </span>
              {isEditingName ? (
                <form onSubmit={handleSaveName} className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="rounded-xl bg-[#FBF9F5] border border-[#C85A32] px-3 py-1.5 text-base font-bold text-[#1E1A17]"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-xl bg-[#C85A32] text-white text-xs font-bold"
                  >
                    Saqlash
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 mt-0.5">
                  <h2 className="font-serif-display text-2xl font-bold text-[#1E1A17]">
                    {auntieName}
                  </h2>
                  <button
                    onClick={() => {
                      setTempName(auntieName);
                      setIsEditingName(true);
                    }}
                    title="Ismni o'zgartirish"
                    className="p-1.5 rounded-lg bg-[#FBF9F5] text-[#6E655F] hover:text-[#C85A32] border border-[#E2D9C8] cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
              <p className="text-sm text-[#6E655F] mt-0.5">
                Siz uchun maxsus mehr bilan yaratilgan tikuvchilik akademiyasi
              </p>
            </div>
          </div>

          {/* Comfort Reading Font Size Toggle */}
          <button
            onClick={onToggleLargeText}
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
              largeTextMode
                ? 'bg-[#3D5A45] text-white border-[#3D5A45]'
                : 'bg-[#FBF9F5] text-[#1E1A17] border-[#E2D9C8] hover:border-[#C85A32]'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Katta harflar rejimi: {largeTextMode ? 'Yoqilgan' : "O'chiq"}</span>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-[#E2D9C8]">
          <div className="rounded-xl bg-[#FBF9F5] p-3.5 border border-[#E2D9C8] text-center">
            <span className="font-mono-num text-2xl font-bold text-[#2E6F40] block">
              {completedLessonIds.length} / {lessons.length}
            </span>
            <span className="text-xs font-semibold text-[#6E655F]">
              O'zlashtirilgan dars
            </span>
          </div>
          <div className="rounded-xl bg-[#FBF9F5] p-3.5 border border-[#E2D9C8] text-center">
            <span className="font-mono-num text-2xl font-bold text-[#C85A32] block">
              {bookmarkedLessons.length}
            </span>
            <span className="text-xs font-semibold text-[#6E655F]">
              Saqlangan darslar
            </span>
          </div>
          <div className="rounded-xl bg-[#FBF9F5] p-3.5 border border-[#E2D9C8] text-center">
            <span className="font-mono-num text-2xl font-bold text-[#B8860B] block">
              {savedPosts.length}
            </span>
            <span className="text-xs font-semibold text-[#6E655F]">
              Saqlangan fasonlar
            </span>
          </div>
        </div>
      </div>

      {/* Bookmarked Lessons */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-serif-display text-xl font-bold text-[#1E1A17] flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#C85A32]" />
            Saqlangan darslarim
          </h3>
        </div>

        {bookmarkedLessons.length === 0 ? (
          <div className="rounded-2xl bg-[#FBF9F5] border border-dashed border-[#D8CEBE] p-6 text-center space-y-2">
            <p className="text-sm font-medium text-[#6E655F]">
              Hozircha saqlangan darslar yo'q. O'zingizga yoqqan dars ustidagi xatcho'p (saqlash) tugmasini bosing.
            </p>
            <button
              onClick={() => onSwitchTab('lessons')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C85A32] hover:underline cursor-pointer"
            >
              Darslarni ko'rish <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bookmarkedLessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => onOpenLesson(lesson)}
                className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] p-4 flex items-center gap-3.5 hover:border-[#C85A32] transition-all cursor-pointer"
              >
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C85A32]">
                    {lesson.categoryLabel}
                  </span>
                  <h4 className="font-serif-display font-bold text-base text-[#1E1A17] line-clamp-2">
                    {lesson.title}
                  </h4>
                  <span className="text-xs text-[#6E655F] mt-1 block">
                    {lesson.duration} • {lesson.stepsCount} qadam
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Saved Community Inspirations */}
      <div className="space-y-3">
        <h3 className="font-serif-display text-xl font-bold text-[#1E1A17] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#3D5A45]" />
          Hamjamiyatdan saqlangan fasonlar
        </h3>

        {savedPosts.length === 0 ? (
          <div className="rounded-2xl bg-[#FBF9F5] border border-dashed border-[#D8CEBE] p-6 text-center space-y-2">
            <p className="text-sm font-medium text-[#6E655F]">
              Hamjamiyat bo'limidagi chiroyli ko'ylaklarni keyinchalik tikish uchun saqlab qo'yishingiz mumkin.
            </p>
            <button
              onClick={() => onSwitchTab('community')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3D5A45] hover:underline cursor-pointer"
            >
              Hamjamiyatga o'tish <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {savedPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => onSwitchTab('community')}
                className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] overflow-hidden flex items-center gap-3.5 p-3 hover:border-[#3D5A45] transition-all cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold text-[#3D5A45] block">
                    {post.authorName}
                  </span>
                  <h4 className="font-serif-display font-bold text-sm text-[#1E1A17] line-clamp-2">
                    {post.title}
                  </h4>
                  <span className="text-[11px] text-[#6E655F] mt-1 block truncate">
                    {post.fabricUsed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Warm Dedication Note */}
      <div className="rounded-2xl bg-gradient-to-br from-[#C85A32]/12 to-[#B8860B]/10 border border-[#C85A32]/25 p-5 flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-[#C85A32] text-white flex items-center justify-center shrink-0">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <div>
          <h4 className="font-serif-display font-bold text-base text-[#1E1A17]">
            Aziz Xolajon uchun chin qalbdan sovg'a!
          </h4>
          <p className="text-sm text-[#1E1A17]/85 mt-1 leading-relaxed">
            Qo'llaringiz hech qachon dard ko'rmasin, tikkan har bir libosingiz xonadoningizga quvonch, baraka va go'zallik olib kelsin!
          </p>
        </div>
      </div>
    </div>
  );
};
