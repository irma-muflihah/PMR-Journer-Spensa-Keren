import React from 'react';
import { Award, Printer, RotateCcw, Share2, Sparkles, CheckCircle, ExternalLink, Globe, Video } from 'lucide-react';
import { CadetProfile } from '../types/game';
import { ONLINE_PORTALS } from '../data/learningResources';

interface CertificateModalProps {
  cadet: CadetProfile;
  score: number;
  onPlayAgain: () => void;
  onOpenMediaHub?: (tab?: 'portals' | 'videos') => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  cadet,
  score,
  onPlayAgain,
  onOpenMediaHub
}) => {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-amber-400 rounded-3xl shadow-2xl p-4 sm:p-6 space-y-4 my-auto">
        {/* Certificate Paper Canvas */}
        <div 
          id="printable-certificate"
          className="relative bg-gradient-to-b from-amber-50 via-white to-amber-50 text-slate-900 rounded-2xl p-6 sm:p-8 border-4 border-double border-amber-600 shadow-xl overflow-hidden print:m-0 print:border-none print:shadow-none"
        >
          {/* Peacock Watermark Motif */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-96 h-96">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#065f46" strokeWidth="8" />
              <path d="M 50 10 C 20 50, 80 50, 50 90" stroke="#065f46" strokeWidth="6" fill="none" />
            </svg>
          </div>

          {/* Header */}
          <div className="text-center space-y-1 relative z-10 border-b-2 border-emerald-900/20 pb-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md font-black text-xl">
                +
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-emerald-900">
                  Palang Merah Remaja (PMR) Madya
                </span>
                <span className="block text-xs font-bold text-slate-700">
                  Kontingen Merak · SMP Negeri 1 Kemranjen
                </span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-emerald-950 uppercase tracking-wider font-display">
              Sertifikat Kelulusan Petualangan P3K
            </h2>
            <p className="text-xs text-slate-600">
              Penguasaan Modul Pertolongan Pertama PMR Madya PMI Tahun 2008
            </p>
          </div>

          {/* Recipient Body */}
          <div className="py-6 text-center space-y-3 relative z-10">
            <p className="text-xs sm:text-sm text-slate-600 uppercase tracking-widest">
              Diberikan dengan penuh kehormatan kepada Cadet:
            </p>

            <div className="inline-block border-b-2 border-amber-600 px-6 pb-1">
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-900 tracking-wide font-display">
                {cadet.name || (cadet.gender === 'putra' ? 'Cadet Bima Merak' : 'Cadet Dewi Merak')}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed pt-2">
              Telah berhasil menyelesaikan seluruh <strong>5 Pos Penjelajahan Rimba Jumanji Nusantara</strong>, menaklukkan rintangan alam serta musuh, mengumpulkan ke-5 <strong>Bulu Merak Bersinar</strong>, dan membuktikan kemahiran dalam pertolongan pertama (Luka, Fraktur & Pembidaian, Syok, Pingsan, Gigitan Ular, serta Tandu Darurat) dengan predikat:
            </p>

            {/* Achievement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Satria Utama PMR Madya · Skor Akhir: <strong>{score} Pts</strong></span>
            </div>
          </div>

          {/* 5 Peacock Feathers Proof */}
          <div className="flex items-center justify-center gap-2 py-2 border-t border-b border-amber-200">
            {['Zamrud', 'Topas Biru', 'Safir', 'Kencana', 'Mahkota Emas'].map((name, i) => (
              <div key={i} className="flex items-center gap-1 text-[11px] text-emerald-800 font-semibold bg-amber-100/70 px-2 py-0.5 rounded-md">
                <CheckCircle className="w-3 h-3 text-emerald-600" />
                <span>Pos {i + 1}</span>
              </div>
            ))}
          </div>

          {/* Footer Signature */}
          <div className="pt-6 grid grid-cols-2 text-center text-xs text-slate-700 relative z-10">
            <div>
              <p className="text-[11px] text-slate-500 mb-8">
                Kemranjen, {currentDate}
              </p>
              <p className="font-bold text-slate-900">
                Cadet Penolong
              </p>
              <p className="text-[10px] text-slate-500">PMR Madya</p>
            </div>

            <div>
              <p className="text-[11px] text-slate-500 mb-8">
                Mengetahui & Menyetujui,
              </p>
              <p className="font-bold text-emerald-950 underline decoration-amber-600 underline-offset-4">
                Pembina PMR Madya
              </p>
              <p className="text-[10px] text-slate-500 font-medium">
                Kontingen Merak SMPN 1 Kemranjen
              </p>
            </div>
          </div>
        </div>

        {/* Next Steps: Online Portals & Video Links */}
        <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-teal-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              Lanjutkan Belajar di Laman Resmi Spensake:
            </span>
            {onOpenMediaHub && (
              <button
                type="button"
                onClick={() => onOpenMediaHub('videos')}
                className="text-[11px] text-amber-300 hover:underline flex items-center gap-1 font-semibold"
              >
                <Video className="w-3 h-3 text-rose-400" />
                <span>Video PMR</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {ONLINE_PORTALS.map(portal => (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 hover:bg-teal-950 border border-slate-800 hover:border-teal-500/50 transition-colors text-center flex flex-col items-center justify-center gap-0.5"
              >
                <span className="text-[11px] font-bold text-teal-200 truncate w-full">
                  {portal.title}
                </span>
                <span className="text-[9px] text-slate-400 flex items-center gap-0.5">
                  <span>Kunjungi</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <button
            type="button"
            onClick={onPlayAgain}
            className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Main Ulang Petualangan</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-amber-950/40 transition-transform active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak / Simpan Sertifikat</span>
          </button>
        </div>
      </div>
    </div>
  );
};
