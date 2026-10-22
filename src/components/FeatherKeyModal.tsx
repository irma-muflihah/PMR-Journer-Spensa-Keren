import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, Key, Award } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface FeatherKeyModalProps {
  levelNumber: number;
  levelTitle: string;
  onProceed: () => void;
}

export const FeatherKeyModal: React.FC<FeatherKeyModalProps> = ({
  levelNumber,
  levelTitle,
  onProceed
}) => {
  useEffect(() => {
    soundManager.playFeatherPickup();

    // Fire fireworks / confetti burst in Peacock colors (emerald, teal, gold, sapphire)
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#06b6d4', '#eab308', '#3b82f6', '#f59e0b']
      });
    } catch {}
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="w-full max-w-md bg-gradient-to-b from-slate-900 via-teal-950 to-emerald-950 border-2 border-amber-400/80 rounded-3xl shadow-2xl p-6 text-center space-y-5 animate-in zoom-in-95 duration-300">
        {/* Glowing Peacock Feather Key Artifact */}
        <div className="relative mx-auto w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/30 to-amber-500/30 blur-xl animate-pulse"></div>
          
          <svg
            viewBox="0 0 100 100"
            className="w-24 h-24 drop-shadow-[0_0_18px_rgba(234,179,8,0.8)] animate-peacock-glow"
          >
            <defs>
              <linearGradient id="featherModalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="40%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            {/* Stem */}
            <path
              d="M 25 85 Q 48 55 78 18"
              stroke="#fef08a"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Barbs */}
            <path
              d="M 45 60 Q 30 50 35 38 Q 55 45 55 50 Z"
              fill="#0d9488"
              opacity="0.8"
            />
            <path
              d="M 55 50 Q 70 58 65 70 Q 50 65 48 58 Z"
              fill="#059669"
              opacity="0.8"
            />

            {/* Feather Eye */}
            <ellipse
              cx="70"
              cy="25"
              rx="18"
              ry="22"
              transform="rotate(25 70 25)"
              fill="url(#featherModalGrad)"
              stroke="#facc15"
              strokeWidth="2"
            />
            <ellipse
              cx="70"
              cy="25"
              rx="12"
              ry="15"
              transform="rotate(25 70 25)"
              fill="#0284c7"
            />
            <ellipse
              cx="70"
              cy="25"
              rx="6"
              ry="8"
              transform="rotate(25 70 25)"
              fill="#1e3a8a"
            />
            <circle cx="68" cy="23" r="2.5" fill="#ffffff" />
          </svg>
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Bulu Merak Bersinar Ditemukan!
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-amber-100 font-display">
            Kunci Gapura Pos {levelNumber} Terbuka!
          </h3>
          <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed max-w-sm mx-auto">
            Hebat, Cadet! Kamu telah menguasai materi P3K di <span className="text-amber-300 font-semibold">{levelTitle}</span>. Cahaya bulu merak telah melenyapkan segel Gapura Kuno.
          </p>
        </div>

        {/* Level Perks */}
        <div className="grid grid-cols-2 gap-2 text-left bg-slate-950/60 p-3 rounded-2xl border border-emerald-800/40 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Key className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Gerbang Gapura: <strong className="text-emerald-400">Terbuka</strong></span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Award className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Bonus Cadet: <strong className="text-amber-300">+200 Pts</strong></span>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onProceed}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-900/40 active:scale-95 transition-transform"
        >
          <span>Menuju Gapura & Lanjutkan</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
