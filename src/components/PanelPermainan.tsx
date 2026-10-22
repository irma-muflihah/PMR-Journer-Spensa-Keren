import React from 'react';
import { Gamepad2, Play, ExternalLink, Sparkles, Key, ShieldCheck, Trophy, Compass } from 'lucide-react';
import { PeacockEmblem } from './PeacockEmblem';

interface PanelPermainanProps {
  onLaunchPPGame: () => void;
  highScore?: number;
  feathersUnlocked?: number;
}

export const PanelPermainan: React.FC<PanelPermainanProps> = ({
  onLaunchPPGame,
  highScore = 0,
  feathersUnlocked = 0
}) => {
  return (
    <div className="space-y-6">
      {/* Panel Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-950 via-emerald-900 to-slate-900 border-2 border-amber-400/60 p-4 sm:p-6 shadow-xl">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
              Panel 2: Arena Permainan Edukasi PMR
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 font-display">
              Pilih Permainan & Uji Ketangkasan Cadet
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/90 max-w-xl leading-relaxed">
              Tiga arena permainan edukasi interaktif untuk mengasah keterampilan pertolongan pertama, pemahaman remaja sebaya, dan wawasan kepalangmerahan.
            </p>
          </div>

          <div className="shrink-0 hidden sm:block">
            <PeacockEmblem size={70} />
          </div>
        </div>
      </div>

      {/* 3 Permainan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* GAME 1: Game PP Pencarian Kunci Emas Merak (BUILT-IN ADVENTURE GAME) */}
        <div className="lg:col-span-1 rounded-3xl bg-gradient-to-b from-emerald-950/90 via-slate-900 to-slate-950 border-2 border-amber-400 shadow-2xl p-5 sm:p-6 flex flex-col justify-between gap-5 relative overflow-hidden group">
          {/* Shimmer top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-amber-300 to-yellow-500"></div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black px-3 py-1 rounded-full bg-amber-500 text-slate-950 uppercase tracking-wider shadow">
                Permainan Utama (PP)
              </span>
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                <Key className="w-3.5 h-3.5" />
                <span>5 Kunci Emas</span>
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 p-0.5 flex items-center justify-center shadow-lg shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-3xl">
                  🦚
                </div>
              </div>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-amber-200 font-display leading-tight group-hover:text-amber-100 transition-colors">
                  Petualangan Rimba Kunci Merak Emas
                </h3>
                <p className="text-xs text-teal-300 font-medium">
                  Game P3K Modul PMI 2008 · 5 Level Rimba
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Jelajahi rimba Jumanji nusantara beraksen Merak dengan kontrol D-Pad sentuh. Lewati rintangan sungai, tebing terjal, ranting berduri, serta hadapi musuh (nyamuk raksasa, ular berbisa, monster sampah). Jawab benar soal P3K Modul 2008 dan raih <strong>Bulu Merak Bersinar</strong> pembuka Gapura Kuno!
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300">
                <Compass className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>5 Pos Berjenjang</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>18 Soal Modul 2008</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300">
                <Key className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Bulu Merak Emas</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300">
                <Trophy className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span>Sertifikat Kelulusan</span>
              </div>
            </div>
          </div>

          {/* Big CTA Play Button */}
          <button
            type="button"
            onClick={onLaunchPPGame}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-950/60 active:scale-98 transition-all cursor-pointer"
          >
            <Play className="w-5 h-5 fill-slate-950" />
            <span>Mainkan Petualangan Kunci Emas PP</span>
          </button>
        </div>

        {/* GAME 2: Permainan PRS Online (pmrprs1.netlify.app) */}
        <div className="rounded-3xl bg-slate-900/90 border-2 border-sky-500/60 hover:border-sky-400 shadow-xl p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 uppercase tracking-wider">
                Permainan PRS
              </span>
              <span className="text-xs text-slate-400 font-medium">Online Spensake</span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="w-14 h-14 rounded-2xl bg-sky-950 border border-sky-500/50 flex items-center justify-center text-3xl shadow shrink-0">
                🤝
              </div>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-sky-200 font-display leading-tight">
                  Permainan PRS Online
                </h3>
                <p className="text-xs text-sky-400/90 font-medium">
                  pmrprs1.netlify.app
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Aplikasi game interaktif Pendidikan Remaja Sebaya (PRS) PMR Madya Kontingen Merak. Melatih simulasi konseling sebaya, pemecahan masalah remaja, serta kuis seru kesehatan dan empati kemanusiaan.
            </p>

            <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-sky-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                Materi Permainan:
              </div>
              <p className="text-[11px] text-slate-400">
                Komunikasi efektif, pencegahan bahaya rokok/narkoba, kesehatan mental remaja, dan persahabatan positif.
              </p>
            </div>
          </div>

          <a
            href="https://pmrprs1.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-950/50 active:scale-98 transition-all"
          >
            <span>Buka Permainan PRS Online</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* GAME 3: Permainan Kepalangmerahan (superspensakeren.netlify.app) */}
        <div className="rounded-3xl bg-slate-900/90 border-2 border-rose-500/60 hover:border-rose-400 shadow-xl p-5 sm:p-6 flex flex-col justify-between gap-5 transition-all">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase tracking-wider">
                Permainan Kepalangmerahan
              </span>
              <span className="text-xs text-slate-400 font-medium">Portal Spensake</span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="w-14 h-14 rounded-2xl bg-rose-950 border border-rose-500/50 flex items-center justify-center text-3xl shadow shrink-0">
                🏛️
              </div>
              <div>
                <h3 className="font-black text-lg sm:text-xl text-rose-200 font-display leading-tight">
                  Permainan Kepalangmerahan
                </h3>
                <p className="text-xs text-rose-400/90 font-medium">
                  superspensakeren.netlify.app
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Petualangan edukasi dan kuis kepalangmerahan di portal Super Spensa Keren SMPN 1 Kemranjen. Menguji wawasan sejarah Palang Merah, lambang pelindung, dan penerapan 7 Prinsip Dasar Kepalangmerahan.
            </p>

            <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-rose-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                Materi Permainan:
              </div>
              <p className="text-[11px] text-slate-400">
                Sejarah Solferino, Henry Dunant, hukum perikemanusiaan internasional, dan Tri Bakti PMR di sekolah.
              </p>
            </div>
          </div>

          <a
            href="https://superspensakeren.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-950/50 active:scale-98 transition-all"
          >
            <span>Buka Permainan Kepalangmerahan</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
