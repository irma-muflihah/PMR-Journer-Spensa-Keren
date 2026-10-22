import React from 'react';
import { RotateCcw, BookOpen, HeartCrack, AlertCircle } from 'lucide-react';

interface GameOverModalProps {
  score: number;
  levelTitle: string;
  onRetry: () => void;
  onOpenPocketbook: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  score,
  levelTitle,
  onRetry,
  onOpenPocketbook
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-rose-600/70 rounded-3xl shadow-2xl p-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
        <div className="w-20 h-20 mx-auto rounded-full bg-rose-950/80 border-2 border-rose-500/60 flex items-center justify-center text-rose-400">
          <HeartCrack className="w-10 h-10" />
        </div>

        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950 border border-rose-700/50 text-rose-300 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5" />
            Nyawa Habis
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-rose-100 font-display">
            Tetap Semangat, Cadet!
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Tenang, seorang relawan PMR belajar dari setiap tantangan di <span className="text-teal-300 font-semibold">{levelTitle}</span>. Pelajari kembali materi Modul 2008 dan coba kembali!
          </p>
        </div>

        <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Skor yang Dikumpulkan:</span>
          <strong className="text-amber-300 text-sm font-bold">{score} Pts</strong>
        </div>

        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={onRetry}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Coba Lagi Pos Ini</span>
          </button>

          <button
            type="button"
            onClick={onOpenPocketbook}
            className="w-full py-2.5 px-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-teal-300 text-xs font-semibold flex items-center justify-center gap-2 border border-teal-500/30 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Buka Buku Saku P3K (Pelajari Jawaban)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
