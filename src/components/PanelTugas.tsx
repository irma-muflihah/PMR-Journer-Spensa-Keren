import React from 'react';
import { ClipboardList, ExternalLink, Sparkles, CheckSquare, Award, Clock, FileText, ArrowRight, FolderUp, Mail } from 'lucide-react';
import { PeacockEmblem } from './PeacockEmblem';

interface PanelTugasProps {
  onOpenDriveOutput?: () => void;
}

export const PanelTugas: React.FC<PanelTugasProps> = ({ onOpenDriveOutput }) => {
  const teacherEmail = 'dinakirom29@guru.smp.belajar.id';
  const driveUrl = `https://drive.google.com/drive/u/0/search?q=to:${encodeURIComponent(teacherEmail)}`;

  const tugasList = [
    {
      title: 'Tugas 1: Lembar Analisis Kasus Pertolongan Pertama (P3K)',
      desc: 'Analisis skenario kasus penanganan luka fraktur tertutup dan luka bakar saat perkemahan PMR Madya.',
      due: 'Evaluasi Mingguan',
      status: 'Tersedia di Dina Project'
    },
    {
      title: 'Tugas 2: Refleksi Pendidikan Remaja Sebaya (PRS)',
      desc: 'Penyusunan rencana aksi pendampingan teman sebaya di lingkungan SMP Negeri 1 Kemranjen.',
      due: 'Evaluasi Modul PRS',
      status: 'Tersedia di Dina Project'
    },
    {
      title: 'Tugas 3: Kuis Esai 7 Prinsip Dasar Kepalangmerahan',
      desc: 'Penerapan prinsip Kemanusiaan, Kesamaan, dan Kenetralan dalam kehidupan bermasyarakat.',
      due: 'Penugasan Kepemimpinan',
      status: 'Tersedia di Dina Project'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Panel Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950 via-teal-950 to-slate-900 border-2 border-amber-400/70 p-4 sm:p-6 shadow-xl">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ClipboardList className="w-3.5 h-3.5 text-amber-400" />
              Panel 3: Lembar Kerja & Evaluasi Tugas
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-100 font-display">
              Portal Penugasan Dina Project
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/90 max-w-xl leading-relaxed">
              Laman resmi pengerjaan tugas mandiri, lembar kerja siswa (LKPD), dan evaluasi kompetensi PMR Madya Kontingen Merak SMP Negeri 1 Kemranjen.
            </p>
          </div>

          <div className="shrink-0 hidden sm:block">
            <PeacockEmblem size={70} />
          </div>
        </div>
      </div>

      {/* SPECIAL SECTION: Output Hasil ke Google Drive Guru */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-950 border-2 border-amber-400 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 uppercase tracking-wider">
              Google Drive Output
            </span>
            <span className="text-xs font-bold text-amber-300">
              Pengumpulan Hasil Nilai & Tugas
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-100">
            Kirim Hasil Game & Laporan ke Google Drive Pembina
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Kumpulkan bukti penyelesaian petualangan P3K, jumlah bulu merak yang diraih, dan berkas tugas langsung ke Google Drive guru pembina: <strong className="text-amber-300 underline underline-offset-2">{teacherEmail}</strong>
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full md:w-auto shrink-0">
          {onOpenDriveOutput && (
            <button
              type="button"
              onClick={onOpenDriveOutput}
              className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <FolderUp className="w-4 h-4 fill-slate-950" />
              <span>Tampilkan Output Hasil</span>
            </button>
          )}

          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Buka Google Drive</span>
          </a>
        </div>
      </div>

      {/* Main Dina Project Hero Card */}
      <div className="rounded-3xl bg-slate-900/90 border-2 border-teal-500/60 shadow-2xl p-5 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 p-0.5 flex items-center justify-center shadow-lg shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-3xl">
                📝
              </div>
            </div>
            <div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Media Evaluasi Terpadu
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-amber-200 font-display mt-1">
                Dina Project Interaktif
              </h3>
              <p className="text-xs text-slate-400">
                https://dinaproject.netlify.app
              </p>
            </div>
          </div>

          <a
            href="https://dinaproject.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-950/50 active:scale-95 transition-all w-full md:w-auto"
          >
            <span>Buka Laman Tugas (Dina Project)</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Instructions from Pembina */}
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-600/30 text-xs sm:text-sm text-slate-300 space-y-2">
          <div className="font-bold text-amber-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Petunjuk Pengerjaan Tugas dari Pembina PMR Madya:
          </div>
          <ol className="list-decimal pl-5 space-y-1 leading-relaxed text-slate-200 text-xs">
            <li>Buka link <strong>dinaproject.netlify.app</strong> melalui tombol di atas.</li>
            <li>Pelajari materi ringkas sebelum mengerjakan kuis atau lembar kerja digital.</li>
            <li>Kerjakan setiap tugas dengan mengutamakan prinsip ketelitian dan nilai-nilai kemanusiaan Palang Merah.</li>
            <li>Hasil evaluasi dan sertifikat dapat dikirimkan ke Google Drive Pembina: <strong className="text-amber-300">{teacherEmail}</strong>.</li>
          </ol>
        </div>

        {/* Task Cards Checklist */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
            <CheckSquare className="w-3.5 h-3.5 text-amber-400" />
            Daftar Modul Tugas yang Wajib Dikerjakan:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {tugasList.map((tugas, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-colors space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-teal-400 font-semibold">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {tugas.due}
                    </span>
                    <span className="text-emerald-400 font-bold">Wajib</span>
                  </div>
                  <h5 className="font-bold text-xs sm:text-sm text-slate-100">
                    {tugas.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {tugas.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-amber-300 font-medium">
                  <span>{tugas.status}</span>
                  <a
                    href="https://dinaproject.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-0.5"
                  >
                    <span>Kerjakan</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
