import React, { useState } from 'react';
import { Maximize2, Minimize2, Scissors, Ruler, Sparkles, CheckCircle2 } from 'lucide-react';
import { LessonStep } from '../data/tailoringData';

interface PatternDiagramProps {
  type: LessonStep['diagramType'];
  stepNumber: number;
  totalSteps?: number;
  stepTitle?: string;
  measurementNote?: string;
}

export const PatternDiagram: React.FC<PatternDiagramProps> = ({
  type,
  stepNumber,
  totalSteps = 6,
  stepTitle,
  measurementNote,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSize, setSelectedSize] = useState<'46' | '50' | '54'>('50');

  // Dynamic size numbers based on selected standard size (46 = S/M, 50 = L/XL, 54 = XXL)
  const sizeMetrics = {
    '46': { chestHalf: 26, waistHalf: 22, hipHalf: 27.5, armhole: 20, neckW: 7.0, sleeveW: 19 },
    '50': { chestHalf: 28, waistHalf: 24, hipHalf: 29.5, armhole: 21.5, neckW: 7.5, sleeveW: 21 },
    '54': { chestHalf: 30.5, waistHalf: 26.5, hipHalf: 32, armhole: 23, neckW: 8.0, sleeveW: 23 },
  }[selectedSize];

  const stepActionBadges: Record<number, { badge: string; tool: string; color: string }> = {
    1: { badge: '1-BOSQICH: MATONI BUKLASH VA TAYYORLASH', tool: 'Santimetr va Dazmol', color: '#3D5A45' },
    2: { badge: "2-BOSQICH: BO'R BILAN O'LCHAM NUQTALARINI QO'YISH", tool: "Bo'r va Chizg'ich", color: '#B8860B' },
    3: { badge: '3-BOSQICH: ASOSIY ANDOZA CHIZIQlarini TUTASHTIRISH', tool: "Bo'r / Sovun bo'lagi", color: '#C85A32' },
    4: { badge: '4-BOSQICH: CHOK HAQI QOLDIRIB QAYCHIDA QIRQISH', tool: "O'tkir bichish qaychisi", color: '#C85A32' },
    5: { badge: "5-BOSQICH: IGNALASH VA MASHINADA CHOK TIKISH", tool: 'Tikuv mashinasi (baxya 2.5)', color: '#2E6F40' },
    6: { badge: '6-BOSQICH: CHOKNI DAZMOLLASH VA YAKUNIY PARDOZ', tool: "Bug'li dazmol", color: '#3D5A45' },
  };

  const currentMeta = stepActionBadges[stepNumber] || stepActionBadges[1];

  return (
    <div
      className={`relative w-full rounded-2xl bg-[#F4EFE6] border-2 border-[#D8CEBE] transition-all overflow-hidden ${
        isZoomed ? 'p-5 sm:p-6 shadow-xl' : 'p-4'
      }`}
    >
      {/* Millimeter tailoring paper grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #D8CEBE 1px, transparent 1px), linear-gradient(to bottom, #D8CEBE 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top Controls Bar: Step Badge + Size Switcher + Zoom */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-[#E2D9C8]">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-lg shadow-2xs"
            style={{ backgroundColor: currentMeta.color }}
          >
            <Scissors className="w-3.5 h-3.5" />
            {stepNumber}/{totalSteps}-qadam chizmasi
          </span>
          <span className="text-xs font-semibold text-[#6E655F] hidden sm:inline">
            Kerakli asbob: <strong className="text-[#1E1A17]">{currentMeta.tool}</strong>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-[#6E655F] mr-1">Razmer:</span>
          {(['46', '50', '54'] as const).map((sz) => (
            <button
              key={sz}
              type="button"
              onClick={() => setSelectedSize(sz)}
              className={`px-2 py-1 rounded-md font-mono-num text-xs font-bold border transition-colors cursor-pointer ${
                selectedSize === sz
                  ? 'bg-[#1E1A17] text-white border-[#1E1A17]'
                  : 'bg-[#FBF9F5] text-[#6E655F] border-[#D8CEBE] hover:border-[#1E1A17]'
              }`}
            >
              {sz}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            title={isZoomed ? 'Kichraytirish' : 'Chizmani kattalashtirish'}
            className="ml-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FBF9F5] hover:bg-[#C85A32] hover:text-white text-[#1E1A17] border border-[#D8CEBE] text-xs font-bold transition-colors cursor-pointer"
          >
            {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isZoomed ? 'Kichik' : 'Kattalashtirish'}</span>
          </button>
        </div>
      </div>

      {/* Step Action Title Banner inside Blueprint */}
      <div className="relative z-10 mb-3 rounded-xl bg-[#FBF9F5]/95 border border-[#E2D9C8] px-3.5 py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32] animate-pulse shrink-0" />
          <p className="text-xs sm:text-sm font-bold text-[#1E1A17]">
            {stepTitle || currentMeta.badge}
          </p>
        </div>
        {measurementNote && (
          <span className="font-mono-num text-[11px] font-bold text-[#C85A32] bg-[#C85A32]/10 px-2 py-0.5 rounded shrink-0 hidden md:inline-block">
            {measurementNote}
          </span>
        )}
      </div>

      {/* Interactive Progressive SVG Canvas */}
      <div className="relative z-10 flex items-center justify-center py-2 bg-[#FBF9F5]/70 rounded-xl border border-[#E2D9C8]">
        {/* 1. BODICE / DRESS PATTERN (6 progressive visual states) */}
        {type === 'bodice_grid' && (
          <svg
            viewBox="0 0 420 260"
            className={`w-full ${isZoomed ? 'max-w-[640px]' : 'max-w-[440px]'} h-auto`}
          >
            {/* STEP 1+: Fabric Rectangle & Fold Line */}
            <rect
              x="50"
              y="18"
              width="250"
              height="220"
              rx="4"
              fill="#F4EFE6"
              stroke={stepNumber === 1 ? '#C85A32' : '#D8CEBE'}
              strokeWidth={stepNumber === 1 ? '2.5' : '1.5'}
            />
            {/* Left Fold Line */}
            <line
              x1="50"
              y1="15"
              x2="50"
              y2="240"
              stroke={stepNumber === 1 ? '#C85A32' : '#3D5A45'}
              strokeWidth="3.5"
            />
            <text
              x="34"
              y="130"
              fill="#3D5A45"
              fontSize="10"
              fontWeight="700"
              transform="rotate(-90 34 130)"
              textAnchor="middle"
            >
              MATO BUKLOV CHIZIG'I (O'RTA)
            </text>

            {/* Step 1 specific callouts: Fold arrows & grainline */}
            {stepNumber === 1 && (
              <g>
                <path d="M 160 40 L 160 200" stroke="#C85A32" strokeWidth="2" strokeDasharray="5 3" />
                <polygon points="160,32 155,44 165,44" fill="#C85A32" />
                <polygon points="160,208 155,196 165,196" fill="#C85A32" />
                <rect x="95" y="100" width="170" height="38" rx="6" fill="#C85A32" />
                <text x="180" y="117" fill="#FFF" fontSize="10" fontWeight="700" textAnchor="middle">
                  1-QADAM: MATONI IKKI BUKLANG
                </text>
                <text x="180" y="131" fill="#F4EFE6" fontSize="9" textAnchor="middle">
                  Eni: {sizeMetrics.hipHalf + 4} sm • Bo'yi: ko'ylak uzunligi
                </text>
              </g>
            )}

            {/* STEP 2+: Horizontal Ruler Lines & Measurement Points */}
            {stepNumber >= 2 && (
              <g>
                {/* Shoulder / Neck top line */}
                <line x1="50" y1="30" x2="310" y2="30" stroke="#B8860B" strokeWidth="1.2" strokeDasharray="4 4" />
                <text x="315" y="34" fill="#6E655F" fontSize="9.5" fontWeight="700">
                  0 sm (Yelka)
                </text>

                {/* Chest line */}
                <line
                  x1="50"
                  y1="95"
                  x2="310"
                  y2="95"
                  stroke={stepNumber === 2 ? '#C85A32' : '#B8860B'}
                  strokeWidth={stepNumber === 2 ? '2.2' : '1.2'}
                  strokeDasharray="4 4"
                />
                <text x="315" y="99" fill="#1E1A17" fontSize="9.5" fontWeight="700">
                  {sizeMetrics.armhole} sm (Ko'krak: {sizeMetrics.chestHalf} sm)
                </text>

                {/* Waist line */}
                <line
                  x1="50"
                  y1="150"
                  x2="310"
                  y2="150"
                  stroke={stepNumber === 2 ? '#C85A32' : '#B8860B'}
                  strokeWidth={stepNumber === 2 ? '2.2' : '1.2'}
                  strokeDasharray="4 4"
                />
                <text x="315" y="154" fill="#1E1A17" fontSize="9.5" fontWeight="700">
                  40 sm (Bel: {sizeMetrics.waistHalf} sm)
                </text>

                {/* Hips line */}
                <line
                  x1="50"
                  y1="205"
                  x2="310"
                  y2="205"
                  stroke={stepNumber === 2 ? '#C85A32' : '#B8860B'}
                  strokeWidth={stepNumber === 2 ? '2.2' : '1.2'}
                  strokeDasharray="4 4"
                />
                <text x="315" y="209" fill="#1E1A17" fontSize="9.5" fontWeight="700">
                  60 sm (Bo'ksa: {sizeMetrics.hipHalf} sm)
                </text>

                {/* Chalk measurement dots */}
                <circle cx="120" cy="30" r="4.5" fill="#C85A32" />
                <circle cx="205" cy="44" r="4.5" fill="#C85A32" />
                <circle cx="250" cy="95" r="5" fill="#C85A32" />
                <circle cx="235" cy="150" r="5" fill="#C85A32" />
                <circle cx="262" cy="205" r="5" fill="#C85A32" />

                {stepNumber === 2 && (
                  <g>
                    <rect x="68" y="62" width="165" height="24" rx="5" fill="#1E1A17" />
                    <text x="150" y="78" fill="#E8C56B" fontSize="10" fontWeight="700" textAnchor="middle">
                      Bo'r bilan qizil nuqtalarni belgilang
                    </text>
                  </g>
                )}
              </g>
            )}

            {/* STEP 3+: Connected Pattern Outline (Yoqa, Yelka, Qo'ltiq, Yon chiziq) */}
            {stepNumber >= 3 && (
              <g>
                <path
                  d="M 50 52 Q 105 52 120 30 L 205 44 Q 192 82 250 95 L 235 150 L 262 205 L 268 232 L 50 232 Z"
                  fill="#C85A32"
                  fillOpacity={stepNumber === 3 ? '0.22' : '0.10'}
                  stroke={stepNumber === 3 ? '#C85A32' : '#3D5A45'}
                  strokeWidth={stepNumber === 3 ? '3' : '2'}
                />
                <text x="142" y="128" fill="#1E1A17" fontSize="11" fontWeight="700" textAnchor="middle">
                  ANDOZA ASOSI ({selectedSize}-razmer)
                </text>
                {stepNumber === 3 && (
                  <text x="142" y="144" fill="#C85A32" fontSize="10" fontWeight="700" textAnchor="middle">
                    Nuqtalarni silliq chiziq bilan tutashtiring!
                  </text>
                )}
              </g>
            )}

            {/* STEP 4+: Seam Allowance + Scissors Cutting Path + Notches */}
            {stepNumber >= 4 && (
              <g>
                <path
                  d="M 50 43 Q 108 43 125 20 L 216 36 Q 204 75 264 88 L 249 150 L 276 205 L 282 242 L 50 242"
                  fill="none"
                  stroke={stepNumber === 4 ? '#C85A32' : '#1E1A17'}
                  strokeWidth={stepNumber === 4 ? '2.8' : '1.5'}
                  strokeDasharray="6 4"
                />
                {/* Notch marks (kertiklar) */}
                <line x1="235" y1="150" x2="251" y2="150" stroke="#C85A32" strokeWidth="2.5" />
                <text x="278" y="128" fill="#C85A32" fontSize="10" fontWeight="700">
                  ✂ +1.5 sm chokda qirqing
                </text>
                <text x="160" y="240" fill="#C85A32" fontSize="9.5" fontWeight="700" textAnchor="middle">
                  Etak haqi: +3.0 sm
                </text>
              </g>
            )}

            {/* STEP 5+: Sewing Machine Stitch Line & Pins */}
            {stepNumber >= 5 && (
              <g>
                {/* Machine Stitch Highlight on Shoulder and Side Seam */}
                <line
                  x1="120"
                  y1="30"
                  x2="205"
                  y2="44"
                  stroke="#2E6F40"
                  strokeWidth="3.5"
                  strokeDasharray="4 2"
                />
                <path
                  d="M 250 95 L 235 150 L 262 205 L 268 232"
                  fill="none"
                  stroke="#2E6F40"
                  strokeWidth="3.5"
                  strokeDasharray="4 2"
                />
                {/* Pins (To'g'nog'ichlar) */}
                <circle cx="160" cy="36" r="4" fill="#E11D48" />
                <circle cx="242" cy="122" r="4" fill="#E11D48" />
                <circle cx="248" cy="178" r="4" fill="#E11D48" />
                <rect x="70" y="162" width="155" height="26" rx="6" fill="#2E6F40" />
                <text x="147" y="179" fill="#FFF" fontSize="10" fontWeight="700" textAnchor="middle">
                  5-QADAM: YASHIL CHIZIQDA TIKING
                </text>
              </g>
            )}

            {/* STEP 6: Pressing & Final Polish */}
            {stepNumber >= 6 && (
              <g>
                <rect x="68" y="65" width="160" height="32" rx="6" fill="#3D5A45" />
                <text x="148" y="80" fill="#E8C56B" fontSize="10" fontWeight="700" textAnchor="middle">
                  6-QADAM: BUG'LI DAZMOL BOSING
                </text>
                <text x="148" y="92" fill="#FFF" fontSize="9" textAnchor="middle">
                  Choklarni orqa bo'lak tomonga yotqizing
                </text>
              </g>
            )}
          </svg>
        )}

        {/* 2. SLEEVE & NECKLINE CURVE DIAGRAM (6 progressive steps) */}
        {type === 'sleeve_curve' && (
          <svg
            viewBox="0 0 420 250"
            className={`w-full ${isZoomed ? 'max-w-[640px]' : 'max-w-[440px]'} h-auto`}
          >
            {/* Base Axes */}
            <line x1="65" y1="20" x2="65" y2="225" stroke="#3D5A45" strokeWidth="3" />
            <text x="48" y="125" fill="#3D5A45" fontSize="10" fontWeight="700" transform="rotate(-90 48 125)" textAnchor="middle">
              BUKLOV CHIZIG'I (O'RTA)
            </text>

            {/* Step 1: Folded rectangle */}
            <rect x="65" y="25" width="230" height="190" fill="#F4EFE6" stroke="#D8CEBE" strokeWidth="1.5" />
            <text x="180" y="238" fill="#6E655F" fontSize="10" fontWeight="700" textAnchor="middle">
              Kengligi: {sizeMetrics.sleeveW} sm ({selectedSize}-razmer)
            </text>

            {/* Step 2+: Key measurement points */}
            {stepNumber >= 2 && (
              <g>
                <line x1="65" y1="115" x2="295" y2="115" stroke="#B8860B" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="302" y="118" fill="#B8860B" fontSize="9.5" fontWeight="700">
                  14 sm balandlik
                </text>
                <circle cx="65" cy="25" r="5" fill="#C85A32" />
                <circle cx="145" cy="25" r="5" fill="#C85A32" />
                <circle cx="180" cy="70" r="5" fill="#C85A32" />
                <circle cx="295" cy="115" r="5" fill="#C85A32" />
                {/* Diagonal guide line */}
                <line x1="65" y1="25" x2="295" y2="115" stroke="#6E655F" strokeWidth="1.2" strokeDasharray="3 3" />
              </g>
            )}

            {/* Step 3+: Smooth S-curve or Armhole/Neck curve */}
            {stepNumber >= 3 && (
              <g>
                <path
                  d="M 65 25 C 130 25, 150 50, 180 70 C 215 95, 255 115, 295 115 L 265 215 L 65 215 Z"
                  fill="#C85A32"
                  fillOpacity="0.16"
                  stroke="#C85A32"
                  strokeWidth="3"
                />
                {/* Bisector helper */}
                <text x="185" y="55" fill="#C85A32" fontSize="10" fontWeight="700">
                  To'lqinli egri chiziq (+1.5 sm tepaga, -1.5 sm pastga)
                </text>
              </g>
            )}

            {/* Step 4+: Seam allowance & Notch at crown */}
            {stepNumber >= 4 && (
              <g>
                <path
                  d="M 65 14 C 135 14, 155 40, 185 60 C 220 85, 260 105, 305 105 L 277 225 L 65 225"
                  fill="none"
                  stroke="#1E1A17"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                {/* Top notch (kertik) */}
                <polygon points="65,25 73,15 57,15" fill="#C85A32" />
                <text x="115" y="16" fill="#C85A32" fontSize="9.5" fontWeight="700">
                  ✂ O'rta kertik (yelka choki uchun)
                </text>
              </g>
            )}

            {/* Step 5+: Stitching line along side and cuff */}
            {stepNumber >= 5 && (
              <g>
                <line x1="295" y1="115" x2="265" y2="215" stroke="#2E6F40" strokeWidth="3.5" strokeDasharray="4 2" />
                <line x1="65" y1="200" x2="268" y2="200" stroke="#2E6F40" strokeWidth="3" strokeDasharray="4 2" />
                <rect x="85" y="145" width="165" height="26" rx="6" fill="#2E6F40" />
                <text x="167" y="162" fill="#FFF" fontSize="10" fontWeight="700" textAnchor="middle">
                  Yashil chiziqdan mashinada tiking
                </text>
              </g>
            )}

            {/* Step 6: Pressing */}
            {stepNumber >= 6 && (
              <text x="167" y="188" fill="#3D5A45" fontSize="10.5" fontWeight="700" textAnchor="middle">
                ✓ Tayyor! Chokni dazmollab o'ngiga ag'daring
              </text>
            )}
          </svg>
        )}

        {/* 3. KOKETKA & BURMA / KLYOSH DIAGRAM (6 progressive steps) */}
        {type === 'koketka_cut' && (
          <svg
            viewBox="0 0 420 260"
            className={`w-full ${isZoomed ? 'max-w-[640px]' : 'max-w-[440px]'} h-auto`}
          >
            {/* Step 1+: Upper Koketka Piece */}
            <path
              d="M 95 20 Q 135 42 160 20 L 230 30 Q 218 68 255 88 L 95 88 Z"
              fill="#3D5A45"
              fillOpacity={stepNumber <= 2 ? '0.25' : '0.15'}
              stroke="#3D5A45"
              strokeWidth="2.5"
            />
            <text x="175" y="58" fill="#3D5A45" fontSize="11" fontWeight="700" textAnchor="middle">
              1-BO'LAK: KOKETKA (Bo'yi 27 sm, Eni {sizeMetrics.chestHalf} sm)
            </text>

            {/* Step 2+: Lower Wide Skirt Piece */}
            {stepNumber >= 2 && (
              <g>
                <path
                  d="M 60 122 L 330 122 L 350 232 L 40 232 Z"
                  fill="#C85A32"
                  fillOpacity="0.14"
                  stroke="#C85A32"
                  strokeWidth="2.5"
                />
                <text x="195" y="180" fill="#1E1A17" fontSize="11" fontWeight="700" textAnchor="middle">
                  2-BO'LAK: BURMALI ETAK (Eni {sizeMetrics.chestHalf + 22} sm)
                </text>
              </g>
            )}

            {/* Step 3+: Center Notches & Gathering Threads */}
            {stepNumber >= 3 && (
              <g>
                <line x1="60" y1="112" x2="330" y2="112" stroke="#C85A32" strokeWidth="2.2" strokeDasharray="4 3" />
                <line x1="60" y1="117" x2="330" y2="117" stroke="#C85A32" strokeWidth="2.2" strokeDasharray="4 3" />
                <text x="195" y="105" fill="#C85A32" fontSize="10" fontWeight="700" textAnchor="middle">
                  2 qator yirik baxya (4 mm) tortib burma yig'iladi
                </text>
              </g>
            )}

            {/* Step 4+: Pleat/Gather Lines */}
            {stepNumber >= 4 && (
              <g>
                <line x1="115" y1="122" x2="100" y2="225" stroke="#C85A32" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="155" y1="122" x2="148" y2="225" stroke="#C85A32" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="195" y1="122" x2="195" y2="225" stroke="#C85A32" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="235" y1="122" x2="242" y2="225" stroke="#C85A32" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="275" y1="122" x2="290" y2="225" stroke="#C85A32" strokeWidth="1.5" strokeOpacity="0.6" />
              </g>
            )}

            {/* Step 5+: Joining Seam & Topstitch */}
            {stepNumber >= 5 && (
              <g>
                <line x1="95" y1="88" x2="255" y2="88" stroke="#2E6F40" strokeWidth="4" strokeDasharray="5 2" />
                <rect x="95" y="195" width="200" height="26" rx="6" fill="#2E6F40" />
                <text x="195" y="212" fill="#FFF" fontSize="10" fontWeight="700" textAnchor="middle">
                  Koketka va etakni 1.2 sm chokda ulang
                </text>
              </g>
            )}

            {/* Step 6: Topstitch finish */}
            {stepNumber >= 6 && (
              <text x="195" y="155" fill="#3D5A45" fontSize="10.5" fontWeight="700" textAnchor="middle">
                ✓ Ustidan 2 mm bezak baxya berib dazmollang!
              </text>
            )}
          </svg>
        )}

        {/* 4. COLLAR / ZIPPER / HEM PRECISION DIAGRAM (6 progressive steps) */}
        {(type === 'collar_fold' || type === 'zipper_seam' || type === 'hem_stitch') && (
          <svg
            viewBox="0 0 420 240"
            className={`w-full ${isZoomed ? 'max-w-[640px]' : 'max-w-[440px]'} h-auto`}
          >
            {/* Outer Fabric Piece */}
            <rect
              x="55"
              y="35"
              width="310"
              height="145"
              rx="8"
              fill="#FBF9F5"
              stroke="#3D5A45"
              strokeWidth="2.5"
            />

            {/* Step 1-2: Interfacing / Folding guide */}
            <rect
              x="70"
              y="50"
              width="280"
              height="115"
              rx="4"
              fill="#C85A32"
              fillOpacity="0.1"
              stroke="#B8860B"
              strokeWidth="1.8"
              strokeDasharray="5 4"
            />
            <text x="210" y="82" fill="#1E1A17" fontSize="12" fontWeight="700" textAnchor="middle">
              {type === 'collar_fold'
                ? `Yoqa va Planka andozasi (Uzunligi: ${sizeMetrics.neckW * 2 + 6} sm)`
                : type === 'zipper_seam'
                ? 'Yashirin zamok va bel chizig\'i simmetriyasi'
                : 'Etak va Chok qaytarma chizmasi (0.5 sm + 2.0 sm)'}
            </text>

            {/* Step 3+: Stitch Line */}
            {stepNumber >= 3 && (
              <g>
                <line
                  x1="70"
                  y1="115"
                  x2="350"
                  y2="115"
                  stroke="#C85A32"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                />
                <circle cx="95" cy="115" r="4.5" fill="#C85A32" />
                <circle cx="210" cy="115" r="4.5" fill="#C85A32" />
                <circle cx="325" cy="115" r="4.5" fill="#C85A32" />
                <text x="210" y="105" fill="#C85A32" fontSize="10.5" fontWeight="700" textAnchor="middle">
                  Asosiy baxya chizig'i (chetdan 0.7 – 1.0 sm)
                </text>
              </g>
            )}

            {/* Step 4+: Corner Trim / Notch */}
            {stepNumber >= 4 && (
              <g>
                <line x1="330" y1="30" x2="372" y2="72" stroke="#E11D48" strokeWidth="3" />
                <text x="295" y="26" fill="#E11D48" fontSize="10" fontWeight="700">
                  ✂ Burchagini 2 mm qoldirib qiya qirqing
                </text>
              </g>
            )}

            {/* Step 5+: Machine Finish Line */}
            {stepNumber >= 5 && (
              <g>
                <line
                  x1="70"
                  y1="145"
                  x2="350"
                  y2="145"
                  stroke="#2E6F40"
                  strokeWidth="3.5"
                  strokeDasharray="4 2"
                />
                <text x="210" y="162" fill="#2E6F40" fontSize="10.5" fontWeight="700" textAnchor="middle">
                  Yashil chiziq: O'ng tomondan 2 mm bezak baxyasi
                </text>
              </g>
            )}

            {/* Step 6: Final Ironing */}
            {stepNumber >= 6 && (
              <g>
                <rect x="95" y="190" width="230" height="28" rx="6" fill="#3D5A45" />
                <text x="210" y="208" fill="#E8C56B" fontSize="10.5" fontWeight="700" textAnchor="middle">
                  ✓ Nam doka orqali bug'li dazmol bosing!
                </text>
              </g>
            )}
          </svg>
        )}
      </div>

      {/* Legend Bar Under Diagram so Auntie Always Understands the Lines */}
      <div className="relative z-10 mt-3 pt-2.5 border-t border-[#E2D9C8] flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#1E1A17]">
            <span className="w-3 h-1 bg-[#3D5A45] inline-block rounded" />
            Mato buklovi
          </span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#1E1A17]">
            <span className="w-3 h-3 rounded-full bg-[#C85A32] inline-block" />
            Bo'r chizig'i va nuqtalar
          </span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#1E1A17]">
            <span className="w-3 h-0.5 border-b-2 border-dashed border-[#1E1A17] inline-block" />
            Qaychi bilan kesish (+1.5 sm)
          </span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#2E6F40]">
            <span className="w-3 h-1 bg-[#2E6F40] inline-block rounded" />
            Mashina baxyasi
          </span>
        </div>

        <span className="text-[11px] font-bold text-[#C85A32]">
          Chizmadagi sonlar {selectedSize}-razmer uchun ko'rsatilgan
        </span>
      </div>
    </div>
  );
};
