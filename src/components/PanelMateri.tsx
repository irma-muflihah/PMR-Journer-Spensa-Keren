import React, { useState } from 'react';
import { Video, Play, ExternalLink, Sparkles, BookOpen, HeartHandshake, ShieldAlert, Award } from 'lucide-react';

interface MateriItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  videoId: string;
  url: string;
  embedUrl: string;
  icon: 'prs' | 'pp' | 'redcross';
  summary: string;
  keyPoints: string[];
  themeColor: string;
}

const MATERI_DATA: MateriItem[] = [
  {
    id: 'materi-prs',
    title: 'Materi 1: Pendidikan Remaja Sebaya (PRS)',
    subtitle: 'Komunikasi, Empati & Kesehatan Remaja PMR Madya',
    category: 'Pendidikan Remaja Sebaya',
    badge: 'Materi PRS',
    videoId: 'pz9oJJEmemM',
    url: 'https://www.youtube.com/watch?v=pz9oJJEmemM',
    embedUrl: 'https://www.youtube-nocookie.com/embed/pz9oJJEmemM',
    icon: 'prs',
    summary: 'Membimbing relawan muda PMR Madya menjadi pendengar yang baik (active listener), memahami perubahan fisik dan psikis remaja, kesehatan reproduksi remaja, serta membangun persahabatan sehat tanpa perundungan.',
    keyPoints: [
      'Peran Pendidik Remaja Sebaya (Peer Educator)',
      'Keterampilan Komunikasi Interpersonal & Empati',
      'Tumbuh Kembang Remaja & Kesehatan Reproduksi',
      'Pengambilan Keputusan Bertanggung Jawab & Menghindari Risiko'
    ],
    themeColor: '#0284c7'
  },
  {
    id: 'materi-pp',
    title: 'Materi 2: Pertolongan Pertama (PP)',
    subtitle: 'Keterampilan P3K Madya Sesuai Modul PMI 2008',
    category: 'Pertolongan Pertama (P3K)',
    badge: 'Materi PP',
    videoId: 'uAdG_rCwOrc',
    url: 'https://www.youtube.com/watch?v=uAdG_rCwOrc',
    embedUrl: 'https://www.youtube-nocookie.com/embed/uAdG_rCwOrc',
    icon: 'pp',
    summary: 'Panduan teknis penanganan kegawatdaruratan sehari-hari: penanganan pingsan, menghentikan perdarahan luar, pembalutan luka mitella, pertolongan patah tulang (fraktur) melewati 2 sendi, dan luka bakar tanpa odol.',
    keyPoints: [
      '3 Tujuan Utama PP & Alat Perlindungan Diri (APD)',
      'Penilaian Dini ASNT (Awas, Suara, Nyeri, Tidak Respon)',
      'Penekanan Langsung & Pembalutan Mitella 90x90x125 cm',
      'Pembidaian Fraktur (PLNB & Uji PMS) serta Penanganan Syok'
    ],
    themeColor: '#059669'
  },
  {
    id: 'materi-kepalangmerahan',
    title: 'Materi 3: Kepalangmerahan',
    subtitle: 'Sejarah Gerakan, Lambang & Prinsip Dasar Kemanusiaan',
    category: 'Kepalangmerahan & PMI',
    badge: 'Materi Kepalangmerahan',
    videoId: 'jLsS1i7GSQs',
    url: 'https://www.youtube.com/watch?v=jLsS1i7GSQs',
    embedUrl: 'https://www.youtube-nocookie.com/embed/jLsS1i7GSQs',
    icon: 'redcross',
    summary: 'Pemahaman mendalam tentang sejarah lahirnya Palang Merah Internasional di Solferino oleh Jean Henry Dunant, komponen gerakan (ICRC, IFRC, PMI), perlindungan lambang, serta 7 Prinsip Dasar Kepalangmerahan.',
    keyPoints: [
      'Sejarah Jean Henry Dunant & Pertempuran Solferino 1859',
      '3 Komponen Gerakan: ICRC, IFRC, dan Palang Merah Nasional (PMI)',
      'Arti & Fungsi Lambang Palang Merah (Tanda Pengenal & Pelindung)',
      '7 Prinsip Dasar: Kemanusiaan, Kesamaan, Kenetralan, Kemandirian, Kesukarelaan, Kesatuan, Kesemestaan'
    ],
    themeColor: '#dc2626'
  }
];

export const PanelMateri: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string>('pz9oJJEmemM');

  const currentMateri = MATERI_DATA.find(m => m.videoId === activeVideoId) || MATERI_DATA[0];

  return (
    <div className="space-y-6">
      {/* Panel Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 border-2 border-emerald-500/50 p-4 sm:p-6 shadow-xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-teal-500/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              Panel 1: Pusat Materi Pembelajaran
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 font-display">
              Kurikulum PMR Madya Kontingen Merak
            </h2>
            <p className="text-xs sm:text-sm text-teal-200/90 max-w-xl leading-relaxed">
              Pelajari 3 pilar materi pokok relawan muda SMP Negeri 1 Kemranjen: Pendidikan Remaja Sebaya (PRS), Pertolongan Pertama (PP), dan Prinsip Kepalangmerahan.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Video Player */}
      <div className="rounded-3xl overflow-hidden bg-slate-950 border-2 border-teal-500/60 shadow-2xl">
        {/* Video Screen */}
        <div className="aspect-video w-full bg-black relative">
          <iframe
            src={currentMateri.embedUrl}
            title={currentMateri.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Video Player Info Bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                {currentMateri.badge}
              </span>
              <span className="text-xs text-teal-400 font-medium truncate">
                {currentMateri.subtitle}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-100">
              {currentMateri.title}
            </h3>
          </div>

          <a
            href={currentMateri.url}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shrink-0 transition-transform active:scale-95"
          >
            <Video className="w-4 h-4" />
            <span>Tonton di YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 3 Sub-Panels (PRS, PP, Kepalangmerahan) */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-teal-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Pilih Salah Satu dari 3 Panel Materi di Bawah:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MATERI_DATA.map((item, idx) => {
            const isPlaying = activeVideoId === item.videoId;
            return (
              <div
                key={item.id}
                className={`rounded-2xl p-4 sm:p-5 border-2 transition-all flex flex-col justify-between gap-4 shadow-lg ${
                  isPlaying
                    ? 'bg-gradient-to-b from-teal-950/80 to-slate-900 border-amber-400 ring-2 ring-amber-400/30'
                    : 'bg-slate-900/90 border-slate-800 hover:border-teal-500/60'
                }`}
              >
                <div className="space-y-2.5">
                  {/* Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-slate-950 text-amber-300 border border-amber-500/30">
                      Panel 1.{idx + 1}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      idx === 0 ? 'bg-sky-950 text-sky-300 border border-sky-800' :
                      idx === 1 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                      'bg-rose-950 text-rose-300 border border-rose-800'
                    }`}>
                      {item.category}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm sm:text-base text-slate-100 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Key points checklist */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-teal-400 block tracking-wider">
                      Pokok Bahasan Utama:
                    </span>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      {item.keyPoints.slice(0, 3).map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold shrink-0">✓</span>
                          <span className="line-clamp-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="pt-2 border-t border-slate-800 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveVideoId(item.videoId)}
                    className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow ${
                      isPlaying
                        ? 'bg-amber-500 text-slate-950 shadow-amber-900/40'
                        : 'bg-emerald-700 hover:bg-emerald-600 text-white'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isPlaying ? 'Sedang Diputar' : 'Putar Materi'}</span>
                  </button>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buka langsung di YouTube"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
