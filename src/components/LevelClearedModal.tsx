import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface LevelClearedModalProps {
  completedLevel: number;
  completedTitle: string;
  nextLevelTitle?: string;
  score: number;
  onNextLevel: () => void;
}

export const LevelClearedModal: React.FC<LevelClearedModalProps> = ({
  completedLevel,
  completedTitle,
  nextLevelTitle,
  score,
  onNextLevel
}) => {
  useEffect(() => {
    soundManager.playLevelVictory();
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#059669', '#0d9488', '#f59e0b', '#3b82f6', '#10b981']
      });
    } catch {}
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="w-full max-w-md bg-gradient-to-b from-slate-900 via-teal-950 to-emerald-950 border-2 border-emerald-500 rounded-3xl shadow-2xl p-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-900/60 border-2 border-emerald-400 flex items-center justify-center text-amber-400 shadow-xl shadow-emerald-900/50">
          <Award className="w-10 h-10" />
        </div>

        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Gapura Kuno Terbuka
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-amber-200 font-display">
            Pos {completedLevel} Berhasil Ditaklukkan!
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Selamat, kamu telah berhasil melintasi <strong className="text-emerald-300">{completedTitle}</strong> dan menyelesaikan seluruh rintangan P3K!
          </p>
        </div>

        <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-emerald-800/40 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-300">
            <span>Total Skor Terkumpul:</span>
            <strong className="text-amber-300 text-sm font-bold">{score} Pts</strong>
          </div>
          {nextLevelTitle && (
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-teal-300 font-medium">
              <span>Pos Selanjutnya:</span>
              <strong className="text-emerald-400">{nextLevelTitle}</strong>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onNextLevel}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-900/40 active:scale-95 transition-transform"
        >
          <span>Lanjut ke Pos Berikutnya</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
