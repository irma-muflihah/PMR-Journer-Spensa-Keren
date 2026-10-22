import React from 'react';
import { Sparkles, BookOpen, Volume2, VolumeX } from 'lucide-react';
import { PeacockEmblem } from './PeacockEmblem';

interface PortalHeaderProps {
  activeTab: 'materi' | 'permainan' | 'tugas' | 'bukusaku';
  onTabChange: (tab: 'materi' | 'permainan' | 'tugas' | 'bukusaku') => void;
  isMuted: boolean;
  onToggleSound: () => void;
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({
  activeTab,
  onTabChange,
  isMuted,
  onToggleSound
}) => {
  return (
    <header className="w-full bg-slate-950/95 border-b-2 border-emerald-800/60 sticky top-0 z-40 backdrop-blur-md shadow-2xl">
      {/* Top Identity Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <PeacockEmblem size={48} />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-amber-200 to-yellow-400 font-display tracking-tight uppercase">
                PMR Journey
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 font-bold hidden xs:inline-block">
                PMR Madya
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-emerald-300 font-medium">
              Kontingen Merak · SMP Negeri 1 Kemranjen
            </p>
          </div>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          {/* Audio toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            aria-label={isMuted ? 'Nyalakan Audio' : 'Matikan Audio'}
            className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center border border-slate-700 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* Main 3 Panel Navigation Tabs */}
      <div className="bg-slate-900/95 border-t border-slate-800/90 px-3 py-1.5 overflow-x-auto scrollbar-none">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => onTabChange('materi')}
            className={`py-2 px-3.5 sm:px-5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'materi'
                ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-lg ring-1 ring-teal-400/50'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span>1. Panel Materi (3 Video)</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('permainan')}
            className={`py-2 px-3.5 sm:px-5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'permainan'
                ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 shadow-lg ring-1 ring-yellow-400/50'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>2. Panel Permainan (3 Game)</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('tugas')}
            className={`py-2 px-3.5 sm:px-5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'tugas'
                ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-lg ring-1 ring-sky-400/50'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>3. Panel Tugas (Dina Project)</span>
          </button>

          <button
            type="button"
            onClick={() => onTabChange('bukusaku')}
            className={`py-2 px-3.5 sm:px-4 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ml-auto ${
              activeTab === 'bukusaku'
                ? 'bg-slate-800 text-teal-300 border border-teal-500/50'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Buku Saku P3K</span>
          </button>
        </div>
      </div>
    </header>
  );
};
