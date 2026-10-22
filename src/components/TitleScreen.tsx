import React, { useState } from 'react';
import { Play, BookOpen, Sparkles, User, ShieldCheck, Globe, Video, ExternalLink } from 'lucide-react';
import { CadetProfile } from '../types/game';
import { PeacockAvatar } from './PeacockAvatar';
import { soundManager } from '../utils/audio';
import { ONLINE_PORTALS } from '../data/learningResources';

interface TitleScreenProps {
  onStartGame: (cadet: CadetProfile) => void;
  onOpenPocketbook: () => void;
  onOpenMediaHub: (initialTab?: 'portals' | 'videos') => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  onStartGame,
  onOpenPocketbook,
  onOpenMediaHub
}) => {
  const [name, setName] = useState('Cadet Merak');
  const [gender, setGender] = useState<'putra' | 'putri'>('putra');

  const handleStart = () => {
    soundManager.playClick();
    onStartGame({
      name: name.trim() || (gender === 'putra' ? 'Bima' : 'Dewi'),
      gender,
      contingent: 'Kontingen Merak',
      school: 'SMP Negeri 1 Kemranjen'
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#021811] via-[#04281e] to-[#01140e] flex flex-col items-center justify-between p-3 sm:p-6 text-slate-100 select-none overflow-y-auto">
      {/* Top Header Navigation Strip */}
      <div className="w-full max-w-lg mx-auto pt-1 flex items-center justify-between text-xs text-emerald-400">
        <span className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-[11px]">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          PMR Madya Kemranjen
        </span>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onOpenMediaHub('portals')}
            className="bg-emerald-950/90 hover:bg-emerald-900 px-2.5 py-1 rounded-full border border-emerald-700/60 text-[11px] text-amber-300 font-semibold flex items-center gap-1 transition-colors"
          >
            <Globe className="w-3 h-3 text-emerald-400" />
            <span>Portal Spensake</span>
          </button>
        </div>
      </div>

      {/* Main Title Hero Area */}
      <div className="w-full max-w-lg mx-auto my-auto text-center space-y-4 py-3">
        {/* Peacock Feather Crest Icon */}
        <div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl animate-pulse"></div>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(20,184,166,0.8)] animate-peacock-glow">
            <defs>
              <linearGradient id="crestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="44" fill="#042f2e" stroke="#eab308" strokeWidth="2.5" />
            <path d="M 50 15 C 38 25, 30 50, 50 82 C 70 50, 62 25, 50 15 Z" fill="url(#crestGrad)" />
            <ellipse cx="50" cy="38" rx="14" ry="17" fill="#0369a1" stroke="#fef08a" strokeWidth="1.5" />
            <circle cx="50" cy="38" r="8" fill="#1e3a8a" />
            <circle cx="50" cy="38" r="3.5" fill="#facc15" />
          </svg>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-900/50 border border-emerald-600/40 text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Petualangan Rimba Jumanji Nusantara
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-amber-200 to-yellow-400 uppercase tracking-tight font-display drop-shadow-md">
            PMR Merak Rimba
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-emerald-300">
            Kontingen Merak · SMP Negeri 1 Kemranjen
          </p>
        </div>

        {/* Character Card Box */}
        <div className="bg-slate-950/70 border border-emerald-700/50 rounded-3xl p-3.5 sm:p-5 shadow-xl backdrop-blur-md space-y-3.5 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              Pilih Cadet Penolong
            </h3>
            <span className="text-[11px] text-slate-400">Seragam PMR Madya</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Avatar Preview */}
            <PeacockAvatar
              cadet={{ name, gender, contingent: 'Kontingen Merak', school: 'SMPN 1 Kemranjen' }}
              size={68}
              isAnimated={true}
            />

            {/* Gender Toggle & Name Input */}
            <div className="flex-1 space-y-2">
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setGender('putra')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                    gender === 'putra'
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Cadet Putra
                </button>
                <button
                  type="button"
                  onClick={() => setGender('putri')}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                    gender === 'putri'
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Cadet Putri
                </button>
              </div>

              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                maxLength={20}
                placeholder="Nama Cadet PMR..."
                className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Quick Mission Brief */}
          <div className="p-2.5 bg-emerald-950/40 rounded-2xl border border-emerald-800/40 text-xs text-slate-300 space-y-1">
            <div className="font-bold text-amber-300 flex items-center gap-1.5 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Misi Penyelamatan Rimba PMR:
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Jelajahi 5 Pos Hutan Nusantara. Jawab pertanyaan P3K Modul 2008 untuk melenyapkan rintangan & musuh, lalu kumpulkan <strong>5 Kunci Bulu Merak Bersinar</strong>!
            </p>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="space-y-2 pt-1">
          <button
            type="button"
            onClick={handleStart}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-900/50 hover:brightness-105 active:scale-98 transition-all"
          >
            <Play className="w-5 h-5 fill-slate-950" />
            <span>Mulai Penjelajahan Rimba Merak</span>
          </button>

          <button
            type="button"
            onClick={onOpenPocketbook}
            className="w-full py-2.5 px-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-teal-300 text-xs font-semibold flex items-center justify-center gap-2 border border-teal-600/40 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Buka Buku Saku P3K (Pelajari Materi Modul 2008)</span>
          </button>
        </div>

        {/* Integrated Online Portals & Video Gallery Buttons */}
        <div className="pt-2 border-t border-emerald-900/40 space-y-2 text-left">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-teal-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              Portal & Video Pembelajaran Terintegrasi
            </span>
            <button
              type="button"
              onClick={() => onOpenMediaHub('videos')}
              className="text-[11px] text-amber-300 hover:underline flex items-center gap-1 font-semibold"
            >
              <Video className="w-3 h-3 text-rose-400" />
              <span>3 Video Materi</span>
            </button>
          </div>

          {/* 3 Quick Launch Interactive Buttons */}
          <div className="grid grid-cols-3 gap-1.5">
            {ONLINE_PORTALS.map(portal => (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900/90 hover:bg-teal-950 border border-slate-800 hover:border-teal-500/60 transition-all text-center flex flex-col items-center justify-center gap-1 group shadow-sm"
              >
                <span className="text-[10px] text-teal-300 font-bold group-hover:text-amber-300 truncate w-full">
                  {portal.title}
                </span>
                <span className="text-[9px] text-slate-500 flex items-center gap-0.5">
                  <span>Buka Web</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-[11px] text-emerald-600/80 pt-2 pb-1">
        © 2026 PMR Madya Kontingen Merak · SMP Negeri 1 Kemranjen
      </footer>
    </div>
  );
};
