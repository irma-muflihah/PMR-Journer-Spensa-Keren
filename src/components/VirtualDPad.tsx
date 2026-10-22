import React, { useEffect } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, BookOpen, Shield } from 'lucide-react';
import { Direction } from '../types/game';
import { soundManager } from '../utils/audio';

interface VirtualDPadProps {
  onMove: (dir: Direction) => void;
  onAction?: () => void;
  onOpenPocketbook: () => void;
  disabled?: boolean;
}

export const VirtualDPad: React.FC<VirtualDPadProps> = ({
  onMove,
  onAction,
  onOpenPocketbook,
  disabled = false
}) => {
  // Global Keyboard listener for desktop or keyboard users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          onMove('UP');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          onMove('DOWN');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          onMove('LEFT');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          onMove('RIGHT');
          break;
        case ' ':
        case 'Enter':
          e.preventDefault();
          if (onAction) onAction();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onMove, onAction, disabled]);

  const handlePress = (dir: Direction) => {
    if (disabled) return;
    soundManager.playClick();
    onMove(dir);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-2 flex items-center justify-between gap-4 select-none safe-bottom">
      {/* 4-Way Ergonomic Touch D-Pad */}
      <div className="relative w-36 h-36 shrink-0 grid grid-cols-3 grid-rows-3 items-center justify-items-center p-1 bg-emerald-950/70 border border-emerald-600/40 rounded-3xl shadow-lg backdrop-blur-sm">
        {/* Empty top-left */}
        <div></div>

        {/* UP Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => handlePress('UP')}
          aria-label="Gerak ke Atas"
          className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-b from-emerald-600 to-teal-800 text-white shadow-md active:scale-90 active:from-amber-500 active:to-amber-600 transition-all border border-emerald-400/50"
        >
          <ArrowUp className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Empty top-right */}
        <div></div>

        {/* LEFT Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => handlePress('LEFT')}
          aria-label="Gerak ke Kiri"
          className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-800 text-white shadow-md active:scale-90 active:from-amber-500 active:to-amber-600 transition-all border border-emerald-400/50"
        >
          <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Center decorative Peacock eye medallion */}
        <div className="w-7 h-7 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
        </div>

        {/* RIGHT Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => handlePress('RIGHT')}
          aria-label="Gerak ke Kanan"
          className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-l from-emerald-600 to-teal-800 text-white shadow-md active:scale-90 active:from-amber-500 active:to-amber-600 transition-all border border-emerald-400/50"
        >
          <ArrowRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Empty bottom-left */}
        <div></div>

        {/* DOWN Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => handlePress('DOWN')}
          aria-label="Gerak ke Bawah"
          className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-t from-emerald-600 to-teal-800 text-white shadow-md active:scale-90 active:from-amber-500 active:to-amber-600 transition-all border border-emerald-400/50"
        >
          <ArrowDown className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Empty bottom-right */}
        <div></div>
      </div>

      {/* Action / Pocketbook Side Buttons */}
      <div className="flex flex-col gap-2.5 items-end justify-center flex-1">
        {/* Interactive Action Button */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => {
            soundManager.playClick();
            if (onAction) onAction();
          }}
          className="w-full max-w-[140px] py-2.5 px-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg border border-yellow-300 active:scale-95 transition-transform"
        >
          <Shield className="w-4 h-4 fill-slate-950" />
          <span>Tindakan P3K</span>
        </button>

        {/* Buku Saku Modul 2008 Button */}
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onOpenPocketbook();
          }}
          className="w-full max-w-[140px] py-2 px-3 rounded-2xl bg-slate-900/90 text-teal-300 font-semibold text-xs flex items-center justify-center gap-1.5 border border-teal-500/40 active:scale-95 transition-transform"
        >
          <BookOpen className="w-4 h-4" />
          <span>Buku Saku P3K</span>
        </button>
      </div>
    </div>
  );
};
