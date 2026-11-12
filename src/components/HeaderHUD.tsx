import React from 'react';
import { Heart, Volume2, VolumeX, BookOpen, Sparkles, Award, ArrowLeft, FolderUp } from 'lucide-react';

interface HeaderHUDProps {
  currentLevel: number;
  totalLevels: number;
  hearts: number;
  maxHearts: number;
  score: number;
  feathersCount: number;
  isMuted: boolean;
  onToggleSound: () => void;
  onOpenPocketbook: () => void;
  onOpenDriveOutput?: () => void;
  onBackToPortal: () => void;
  onRestartLevel: () => void;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  currentLevel,
  totalLevels,
  hearts,
  maxHearts,
  score,
  feathersCount,
  isMuted,
  onToggleSound,
  onOpenPocketbook,
  onOpenDriveOutput,
  onBackToPortal,
  onRestartLevel
}) => {
  return (
    <header className="w-full bg-slate-950/95 border-b border-emerald-900/60 backdrop-blur-md px-3 sm:px-4 py-2 flex items-center justify-between gap-2 sticky top-0 z-30 select-none">
      {/* Back to Portal Button */}
      <button
        type="button"
        onClick={onBackToPortal}
        className="py-1 px-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-teal-300 font-bold text-xs flex items-center gap-1.5 border border-teal-600/40 transition-colors shrink-0"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span className="hidden xs:inline">Portal</span>
      </button>

      {/* Middle HUD Zone (Nyawa, Pos/Level, Skor) */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Hearts meter */}
        <div className="flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">
          {Array.from({ length: maxHearts }).map((_, i) => (
            <Heart
              key={i}
              className={`w-3.5 h-3.5 transition-transform ${
                i < hearts
                  ? 'fill-rose-500 text-rose-500 scale-100'
                  : 'fill-slate-800 text-slate-700 scale-90'
              }`}
            />
          ))}
          <span className="text-xs font-bold text-rose-300 ml-0.5 tabular-nums">
            {hearts}
          </span>
        </div>

        {/* Level badge */}
        <div className="flex items-center gap-1 text-[11px] text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">
          <span>Pos:</span>
          <strong className="text-teal-300 font-bold">{currentLevel}/{totalLevels}</strong>
        </div>

        {/* Peacock Feathers collected */}
        <div className="flex items-center gap-1 bg-emerald-950/70 border border-emerald-700/50 px-2 py-0.5 rounded-full text-[11px] text-amber-300 font-bold">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span className="tabular-nums">{feathersCount}/5</span>
        </div>

        {/* Score */}
        <div className="hidden xs:flex items-center gap-1 bg-amber-950/50 border border-amber-600/40 px-2 py-0.5 rounded-full text-[11px] text-amber-300 font-bold">
          <Award className="w-3 h-3 text-amber-400" />
          <span className="tabular-nums">{score}</span>
        </div>
      </div>

      {/* Action Zone (Drive Output, Pocketbook, Sound) */}
      <div className="flex items-center gap-1.5 shrink-0">
        {/* Google Drive Output button */}
        {onOpenDriveOutput && (
          <button
            type="button"
            onClick={onOpenDriveOutput}
            aria-label="Output Hasil ke Google Drive"
            title="Output Hasil ke Google Drive Pembina (dinakirom29@guru.smp.belajar.id)"
            className="w-7 h-7 rounded-lg bg-amber-950/80 hover:bg-amber-900 text-amber-300 flex items-center justify-center border border-amber-500/50 transition-colors"
          >
            <FolderUp className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Pocketbook */}
        <button
          type="button"
          onClick={onOpenPocketbook}
          aria-label="Buka Buku Saku P3K"
          title="Buku Saku P3K"
          className="w-7 h-7 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 flex items-center justify-center border border-emerald-700/50 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
        </button>

        {/* Audio Toggle */}
        <button
          type="button"
          onClick={onToggleSound}
          aria-label={isMuted ? 'Nyalakan Suara' : 'Matikan Suara'}
          className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center border border-slate-800 transition-colors"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-500" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
        </button>
      </div>
    </header>
  );
};
