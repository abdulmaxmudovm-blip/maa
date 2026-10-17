import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Scissors,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  Ruler,
  Layers,
  Lightbulb,
  LayoutList,
} from 'lucide-react';
import { Lesson } from '../data/tailoringData';
import { PatternDiagram } from './PatternDiagram';

interface LessonDetailModalProps {
  lesson: Lesson;
  allLessons: Lesson[];
  isCompleted: boolean;
  isBookmarked: boolean;
  onClose: () => void;
  onSelectLesson: (lesson: Lesson) => void;
  onToggleComplete: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string) => void;
  onOpenCalculator: () => void;
}

export const LessonDetailModal: React.FC<LessonDetailModalProps> = ({
  lesson,
  allLessons,
  isCompleted,
  isBookmarked,
  onClose,
  onSelectLesson,
  onToggleComplete,
  onToggleBookmark,
  onOpenCalculator,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [showAllStepsMode, setShowAllStepsMode] = useState(false);
  const [checkedTools, setCheckedTools] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setActiveStepIndex(0);
    setCheckedTools({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lesson.id]);

  const currentStep = lesson.steps[activeStepIndex];
  const currentLessonIndex = allLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex >= 0 && currentLessonIndex < allLessons.length - 1
      ? allLessons[currentLessonIndex + 1]
      : null;

  const toggleTool = (idx: number) => {
    setCheckedTools((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FBF9F5] overflow-y-auto">
      {/* Top Sticky Navigation Bar */}
      <div className="sticky top-0 z-30 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E2D9C8] px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F3EFE6] hover:bg-[#E8E0D2] text-[#1E1A17] font-bold text-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            30 ta dars ro'yxatiga qaytish
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#3D5A45]/10 text-[#3D5A45] hover:bg-[#3D5A45] hover:text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Ruler className="w-3.5 h-3.5" />
              O'lcham hisoblagich
            </button>
            <button
              onClick={() => onToggleBookmark(lesson.id)}
              aria-label="Saqlab qo'yish"
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-[#C85A32] text-white border-[#C85A32]'
                  : 'bg-[#F3EFE6] text-[#1E1A17] border-[#E2D9C8]'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto px-4 py-6 pb-28 space-y-6">
        {/* Hero Banner & Simple Summary */}
        <div className="rounded-2xl overflow-hidden bg-[#F3EFE6] border border-[#E2D9C8]">
          <div className="relative h-48 sm:h-56 w-full">
            <img
              src={lesson.image}
              alt={lesson.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A17]/85 via-[#1E1A17]/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-[#FBF9F5]">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#C85A32] text-white">
                  {lesson.lessonNumber} / 30 Dars • {lesson.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-black/55 text-white flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {lesson.duration} • {lesson.steps.length} ta chizmali qadam
                </span>
              </div>
              <h1 className="font-serif-display text-xl sm:text-2xl font-bold leading-snug">
                {lesson.title}
              </h1>
            </div>
          </div>

          {/* 1-Sentence Simple Summary Box */}
          <div className="p-4 sm:p-5 bg-[#3D5A45] text-[#FBF9F5] flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 text-[#E8C56B] flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8C56B] block">
                Eng oddiy tushuntirish (1 gapda):
              </span>
              <p className="text-sm sm:text-base font-semibold mt-0.5 leading-relaxed">
                {lesson.simpleSummary}
              </p>
            </div>
          </div>

          {/* Fabric & Seam Allowance Quick Bar */}
          <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F3EFE6]">
            <div className="rounded-xl bg-[#FBF9F5] p-3.5 border border-[#E2D9C8]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3D5A45] mb-1">
                <Layers className="w-3.5 h-3.5" />
                Qanday mato kerak?
              </div>
              <p className="text-sm font-medium text-[#1E1A17]">{lesson.fabricRecommendation}</p>
            </div>
            <div className="rounded-xl bg-[#FBF9F5] p-3.5 border border-[#E2D9C8]">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-1">
                <Scissors className="w-3.5 h-3.5" />
                Chok haqi qancha?
              </div>
              <p className="font-mono-num text-xs sm:text-sm font-semibold text-[#1E1A17]">
                {lesson.seamAllowance}
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Progress Selector (6 Steps) + View All Toggle */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#1E1A17]">
                Chizmaga qarab qadam-baqadam bichish va tikish ({lesson.steps.length} ta qadam)
              </h2>
              <p className="text-xs text-[#6E655F]">
                Har bir qadamni bosganingizda andoza chizmasi o'zgarib, nima qilish kerakligini ko'rsatadi
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowAllStepsMode(!showAllStepsMode)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                showAllStepsMode
                  ? 'bg-[#3D5A45] text-white border-[#3D5A45]'
                  : 'bg-[#F3EFE6] text-[#1E1A17] border-[#D8CEBE] hover:border-[#C85A32]'
              }`}
            >
              <LayoutList className="w-4 h-4" />
              {showAllStepsMode
                ? 'Bitta qadam rejimiga qaytish'
                : 'Barcha 6 ta chizmani ketma-ket ochish'}
            </button>
          </div>

          {!showAllStepsMode && (
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {lesson.steps.map((step, index) => {
                const isCurrent = index === activeStepIndex;
                const isPast = index < activeStepIndex;
                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => setActiveStepIndex(index)}
                    className={`py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm border transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      isCurrent
                        ? 'bg-[#C85A32] text-white border-[#C85A32] shadow-xs'
                        : isPast
                        ? 'bg-[#3D5A45]/15 text-[#3D5A45] border-[#3D5A45]/30'
                        : 'bg-[#F3EFE6] text-[#6E655F] border-[#E2D9C8]'
                    }`}
                  >
                    <span>{step.stepNumber}-qadam</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* MODE A: Interactive Single Step View with Live Evolving Pattern Diagram */}
        {!showAllStepsMode && currentStep && (
          <div className="rounded-2xl bg-[#FBF9F5] border-2 border-[#C85A32]/40 p-4 sm:p-6 space-y-5 shadow-xs">
            {/* Step Header */}
            <div className="flex items-center justify-between border-b border-[#E2D9C8] pb-3">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                  {currentStep.stepNumber}-qadam ({lesson.steps.length} qadamdan)
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1E1A17] mt-0.5">
                  {currentStep.title}
                </h3>
              </div>
              <span className="font-mono-num text-sm font-bold text-white bg-[#C85A32] px-3 py-1.5 rounded-xl shrink-0">
                {currentStep.stepNumber} / {lesson.steps.length}
              </span>
            </div>

            {/* 1. LIVE INTERACTIVE PATTERN DIAGRAM RIGHT AT THE TOP OF THE STEP */}
            <PatternDiagram
              type={currentStep.diagramType}
              stepNumber={currentStep.stepNumber}
              totalSteps={lesson.steps.length}
              stepTitle={currentStep.title}
              measurementNote={currentStep.measurementNote}
            />

            {/* 2. Step-by-Step Plain Uzbek Instruction */}
            <div className="rounded-xl bg-[#F3EFE6]/70 border border-[#E2D9C8] p-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D5A45] block">
                Chizmaga qarab bajariladigan ish:
              </span>
              <p className="text-base sm:text-lg text-[#1E1A17] font-medium leading-relaxed">
                {currentStep.instruction}
              </p>
            </div>

            {/* 3. Exact Measurement Formula Box */}
            <div className="rounded-xl bg-[#F3EFE6] border border-[#D8CEBE] p-4 flex items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E655F] block">
                  Chizmadagi o'lcham qoidasi:
                </span>
                <p className="font-mono-num text-sm sm:text-base font-bold text-[#1E1A17] mt-0.5">
                  {currentStep.measurementNote}
                </p>
              </div>
              <Ruler className="w-6 h-6 text-[#C85A32] shrink-0" />
            </div>

            {/* 4. Auntie Pro Tip Callout */}
            <div className="rounded-xl bg-[#B8860B]/12 border border-[#B8860B]/35 p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#B8860B] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#946B00] block">
                  Ustoz chevar siri
                </span>
                <p className="text-sm sm:text-base font-medium text-[#1E1A17] mt-0.5 leading-relaxed">
                  {currentStep.auntieTip}
                </p>
              </div>
            </div>

            {/* Step Navigation Buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-[#E2D9C8]">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((i) => Math.max(0, i - 1))}
                className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  activeStepIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-[#F3EFE6] text-[#6E655F]'
                    : 'bg-[#F3EFE6] hover:bg-[#E2D9C8] text-[#1E1A17] cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Oldingi qadam
              </button>

              {activeStepIndex < lesson.steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() =>
                    setActiveStepIndex((i) => Math.min(lesson.steps.length - 1, i + 1))
                  }
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-bold bg-[#C85A32] hover:bg-[#b04b25] text-white shadow-xs cursor-pointer"
                >
                  Keyingi ({activeStepIndex + 2}-qadam chizmasi)
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onToggleComplete(lesson.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                    isCompleted
                      ? 'bg-[#2E6F40] text-white'
                      : 'bg-[#3D5A45] hover:bg-[#2E6F40] text-white'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {isCompleted ? "Dars o'zlashtirilgan!" : "Darsni o'rgandim deb belgilash"}
                </button>
              )}
            </div>
          </div>
        )}

        {/* MODE B: All 6 Steps & Diagrams Displayed Sequentially on One Page */}
        {showAllStepsMode && (
          <div className="space-y-6">
            {lesson.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl bg-[#FBF9F5] border-2 border-[#E2D9C8] p-4 sm:p-6 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-[#E2D9C8] pb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                      {step.stepNumber}-qadam chizmasi va ko'rsatmasi
                    </span>
                    <h3 className="font-serif-display text-xl font-bold text-[#1E1A17]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="font-mono-num text-xs font-bold bg-[#F3EFE6] text-[#1E1A17] px-3 py-1.5 rounded-lg border border-[#D8CEBE]">
                    {step.stepNumber} / {lesson.steps.length}
                  </span>
                </div>

                <PatternDiagram
                  type={step.diagramType}
                  stepNumber={step.stepNumber}
                  totalSteps={lesson.steps.length}
                  stepTitle={step.title}
                  measurementNote={step.measurementNote}
                />

                <p className="text-base text-[#1E1A17] font-medium leading-relaxed bg-[#F3EFE6]/60 p-3.5 rounded-xl border border-[#E2D9C8]">
                  {step.instruction}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#F3EFE6] p-3 border border-[#D8CEBE]">
                    <span className="text-[11px] font-bold uppercase text-[#6E655F] block">
                      Aniq o'lcham:
                    </span>
                    <span className="font-mono-num text-sm font-bold text-[#C85A32]">
                      {step.measurementNote}
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#B8860B]/10 p-3 border border-[#B8860B]/30">
                    <span className="text-[11px] font-bold uppercase text-[#946B00] block">
                      Ustoz maslahati:
                    </span>
                    <span className="text-xs font-medium text-[#1E1A17]">
                      {step.auntieTip}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center">
              <button
                type="button"
                onClick={() => onToggleComplete(lesson.id)}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                  isCompleted
                    ? 'bg-[#2E6F40] text-white'
                    : 'bg-[#C85A32] hover:bg-[#b04b25] text-white'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
                {isCompleted ? "Dars o'zlashtirilgan!" : "Barcha 6 qadamni bajarib tugatdim!"}
              </button>
            </div>
          </div>
        )}

        {/* Required Tools Checklist */}
        <div className="rounded-2xl bg-[#F3EFE6] border border-[#E2D9C8] p-5 space-y-3">
          <h3 className="font-serif-display text-lg font-bold text-[#1E1A17]">
            Kerakli jihozlar (ustiga bosib belgilang):
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {lesson.requiredTools.map((tool, idx) => {
              const checked = !!checkedTools[idx];
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleTool(idx)}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    checked
                      ? 'bg-[#2E6F40]/10 border-[#2E6F40]/40 text-[#2E6F40]'
                      : 'bg-[#FBF9F5] border-[#E2D9C8] text-[#1E1A17]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                      checked
                        ? 'bg-[#2E6F40] border-[#2E6F40] text-white'
                        : 'border-[#C85A32]'
                    }`}
                  >
                    {checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`text-sm font-medium ${checked ? 'line-through' : ''}`}>
                    {tool}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Next / Previous Lesson Quick Switcher */}
        <div className="rounded-2xl bg-[#FBF9F5] border border-[#E2D9C8] p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {prevLesson ? (
            <button
              onClick={() => onSelectLesson(prevLesson)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F3EFE6] hover:bg-[#E2D9C8] text-[#1E1A17] text-xs sm:text-sm font-bold cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#C85A32]" />
              <span>Oldingi: {prevLesson.lessonNumber}-dars</span>
            </button>
          ) : (
            <div />
          )}

          {nextLesson && (
            <button
              onClick={() => onSelectLesson(nextLesson)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C85A32] hover:bg-[#b04b25] text-white text-xs sm:text-sm font-bold cursor-pointer"
            >
              <span>Keyingi darsga o'tish: {nextLesson.lessonNumber}-dars</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
