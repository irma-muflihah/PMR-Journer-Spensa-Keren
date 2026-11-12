import React, { useState } from 'react';
import { X, Check, Copy, Download, ExternalLink, Mail, Award, CheckCircle2, ShieldCheck, Sparkles, FolderUp } from 'lucide-react';
import { CadetProfile } from '../types/game';

interface GoogleDriveOutputModalProps {
  cadet: CadetProfile;
  score: number;
  feathersCount?: number;
  onClose: () => void;
}

export const GoogleDriveOutputModal: React.FC<GoogleDriveOutputModalProps> = ({
  cadet,
  score,
  feathersCount = 5,
  onClose
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const teacherEmail = 'dinakirom29@guru.smp.belajar.id';
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const studentName = cadet.name || (cadet.gender === 'putra' ? 'Cadet Bima Merak' : 'Cadet Dewi Merak');

  const reportText = `=====================================================
LAPORAN HASIL PETUALANGAN P3K - PMR JOURNEY
KONTINGEN MERAK · SMP NEGERI 1 KEMRANJEN
Modul Acuan: Pertolongan Pertama PMR Madya PMI 2008
=====================================================

IDENTITAS CADET:
- Nama Lengkap       : ${studentName}
- Satuan / Sekolah   : ${cadet.school || 'SMP Negeri 1 Kemranjen'}
- Kontingen          : ${cadet.contingent || 'Kontingen Merak'}
- Waktu Penyelesaian : ${currentDate}

HASIL EVALUASI & CAPAIAN:
- Total Skor Akhir   : ${score} Poin
- Kunci Bulu Merak   : ${feathersCount}/5 Bulu Merak Bersinar Terkumpul
  (1. Zamrud Lembah, 2. Topas Biru Rawa, 3. Safir Tebing, 4. Kencana Jeram, 5. Mahkota Emas Candi)
- Predikat Kompetensi: SATRIA UTAMA P3K PMR MADYA
- Status Kelulusan   : LULUS PENUH (Tuntas 5 Pos Petualangan)

PENGUASAAN MATERI MODUL PMI 2008:
1. Prinsip Dasar P3K & APD Wajib (Sarung Tangan & Masker)
2. Penilaian Dini Korban (Metode ASNT)
3. Penanganan Luka Luar & Penekanan Langsung (Direct Pressure)
4. Pembalutan Kain Segitiga Mitella (90 x 90 x 125 cm) & Simpul Delapan
5. Penanganan Luka Bakar Standar (Air Bersih 10-20 Menit, Anti-Odol)
6. Imobilisasi Gigitan Ular Berbisa (Anti-Sedot Bisa / Anti-Sayat)
7. Tanda Fraktur PLNB & Pembidaian Melewati 2 Sendi + Uji PMS
8. Pertolongan Korban Pingsan, Syok & Posisi Pemulihan (Miring Mantap)
9. Spesifikasi Tandu Darurat Bambu PMI (225 cm & 60 cm) & Prinsip Evakuasi

Tujuan Pengiriman:
Google Drive & Email Pembina PMR: ${teacherEmail}
=====================================================`;

  const mailSubject = encodeURIComponent(`[HASIL PMR JOURNEY] ${studentName} - ${cadet.contingent || 'Kontingen Merak'}`);
  const mailBody = encodeURIComponent(reportText);
  const mailtoUrl = `mailto:${teacherEmail}?subject=${mailSubject}&body=${mailBody}`;

  // Direct Google Drive Link targeted to the teacher's drive account
  const driveUrl = `https://drive.google.com/drive/u/0/search?q=to:${encodeURIComponent(teacherEmail)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Laporan_PMR_Journey_${studentName.replace(/\s+/g, '_')}_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-5 overflow-y-auto">
      <div className="w-full max-w-xl bg-slate-900 border-2 border-amber-400 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-950 border-b border-teal-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-0.5 flex items-center justify-center shadow-md shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400 font-bold">
                <FolderUp className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-100 flex items-center gap-2">
                <span>Output Hasil ke Google Drive</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Resmi
                </span>
              </h3>
              <p className="text-xs text-teal-300/90 truncate max-w-[280px] sm:max-w-none">
                Email Pembina: <span className="text-amber-300 font-semibold">{teacherEmail}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {/* Target Email Highlight Card */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/60 to-teal-950/60 border border-amber-400/40 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                Tujuan Pengumpulan Nilai & Sertifikat:
              </span>
              <p className="text-xs text-slate-200">
                Hasil pengerjaan game petualangan P3K kamu telah siap diserahkan ke Google Drive dan email Pembina PMR Madya:
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950 border border-amber-400/50 text-amber-300 font-mono text-xs font-bold mt-1">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{teacherEmail}</span>
              </div>
            </div>
          </div>

          {/* Quick Score Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Cadet</span>
              <strong className="text-xs text-emerald-300 truncate block">{studentName}</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Skor Akhir</span>
              <strong className="text-xs text-amber-300 block">{score} Pts</strong>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Kunci Merak</span>
              <strong className="text-xs text-teal-300 block">{feathersCount}/5 Terkumpul</strong>
            </div>
          </div>

          {/* Report Text Output Preview */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-teal-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Format Rekap Laporan Hasil (Siap Dikirim):
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-[11px] text-amber-300 hover:text-amber-200 flex items-center gap-1 font-semibold"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin Rekap'}</span>
              </button>
            </div>

            <textarea
              readOnly
              value={reportText}
              rows={9}
              className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-200 focus:outline-none focus:border-amber-400 resize-none leading-relaxed select-all"
            />
          </div>

          {/* Action Hub Buttons: Drive, Email, Download, Copy */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-bold text-slate-300 block">
              Pilih Cara Pengiriman / Penyimpanan:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Option 1: Open Google Drive */}
              <a
                href={driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
              >
                <FolderUp className="w-4 h-4" />
                <span>Buka Google Drive Guru</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {/* Option 2: Send Email directly */}
              <a
                href={mailtoUrl}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
              >
                <Mail className="w-4 h-4 fill-slate-950" />
                <span>Kirim Hasil via Email Guru</span>
              </a>

              {/* Option 3: Download TXT file */}
              <button
                type="button"
                onClick={handleDownloadTxt}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-teal-300" />
                <span>Unduh Berkas Laporan (.txt)</span>
              </button>

              {/* Option 4: Copy to clipboard */}
              <button
                type="button"
                onClick={handleCopy}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
                <span>{copied ? 'Berhasil Disalin!' : 'Salin Teks ke Clipboard'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>SMPN 1 Kemranjen · Kontingen Merak</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
