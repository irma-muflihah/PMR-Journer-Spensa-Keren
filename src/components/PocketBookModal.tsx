import React, { useState } from 'react';
import { X, BookOpen, ShieldCheck, Bandage, Bone, AlertCircle, HeartCrack, Truck, Sparkles, Video, Globe, ExternalLink, Play } from 'lucide-react';
import { ONLINE_PORTALS, YOUTUBE_VIDEOS, VideoResource } from '../data/learningResources';

interface PocketBookModalProps {
  onClose: () => void;
  initialTab?: 'dasar' | 'luka' | 'fraktur' | 'pingsan' | 'ular' | 'evakuasi' | 'online';
}

export const PocketBookModal: React.FC<PocketBookModalProps> = ({ onClose, initialTab = 'dasar' }) => {
  const [activeTab, setActiveTab] = useState<'dasar' | 'luka' | 'fraktur' | 'pingsan' | 'ular' | 'evakuasi' | 'online'>(initialTab);
  const [activeVideo, setActiveVideo] = useState<VideoResource>(YOUTUBE_VIDEOS[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-emerald-600/70 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-950 border-b border-emerald-700/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-100 flex items-center gap-2">
                <span>Buku Saku P3K PMR Madya</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Modul 2008 & Media Online
                </span>
              </h3>
              <p className="text-xs text-teal-300/80">
                Kontingen Merak SMP Negeri 1 Kemranjen
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

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-2 bg-slate-950 border-b border-slate-800 overflow-x-auto scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('dasar')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 font-medium ${
              activeTab === 'dasar' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Dasar & APD</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('luka')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 font-medium ${
              activeTab === 'luka' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bandage className="w-3.5 h-3.5" />
            <span>Luka & Mitella</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('fraktur')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 font-medium ${
              activeTab === 'fraktur' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bone className="w-3.5 h-3.5" />
            <span>Patah Tulang & Bidai</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('pingsan')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 font-medium ${
              activeTab === 'pingsan' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <HeartCrack className="w-3.5 h-3.5" />
            <span>Pingsan & Syok</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ular')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 font-medium ${
              activeTab === 'ular' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Gigitan Ular</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('evakuasi')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 font-medium ${
              activeTab === 'evakuasi' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Evakuasi & Tandu</span>
          </button>

          {/* New Tab for Online Portals & Video */}
          <button
            type="button"
            onClick={() => setActiveTab('online')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 font-bold ${
              activeTab === 'online' ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow' : 'text-amber-400 hover:text-amber-200'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video & Portal Online ✨</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {activeTab === 'dasar' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-600/30">
                <h4 className="font-bold text-emerald-300 text-sm mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  3 Tujuan Pokok Pertolongan Pertama (Bab I)
                </h4>
                <ol className="list-decimal pl-5 space-y-1 text-slate-200">
                  <li><strong>Menyelamatkan jiwa</strong> penderita dari ancaman kematian.</li>
                  <li><strong>Mencegah cacat</strong> agar kondisi cedera tidak semakin parah.</li>
                  <li><strong>Memberikan rasa nyaman</strong> serta menunjang upaya penyembuhan medis.</li>
                </ol>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-teal-300 text-sm mb-1.5">
                  Prinsip Keselamatan & APD (Bab II)
                </h4>
                <p>
                  Sebagai anggota PMR Madya, <strong>keselamatan diri sendiri adalah prioritas utama</strong>. Jangan pernah menjadi korban berikutnya. Kenakan selalu APD wajib:
                </p>
                <ul className="list-disc pl-5 mt-1.5 space-y-0.5 text-slate-300">
                  <li>Sarung tangan lateks (mencegah penularan penyakit lewat darah/cairan).</li>
                  <li>Masker penolong (mencegah kuman lewat pernapasan).</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-amber-300 text-sm mb-1.5">
                  Tingkat Kesadaran Korban: ASNT (Bab III)
                </h4>
                <ul className="space-y-1">
                  <li><strong className="text-emerald-400">A (Awas):</strong> Korban sadar penuh, mata terbuka, dapat diajak bicara.</li>
                  <li><strong className="text-teal-400">S (Suara):</strong> Korban hanya merespon saat dipanggil keras.</li>
                  <li><strong className="text-amber-400">N (Nyeri):</strong> Korban hanya bereaksi ketika dicubit atau ditekan tulang dadanya.</li>
                  <li><strong className="text-rose-400">T (Tidak Respon):</strong> Korban diam tidak bergerak sama sekali.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'luka' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-600/30">
                <h4 className="font-bold text-emerald-300 text-sm mb-1.5">
                  Menghentikan Perdarahan Luar (Bab IV)
                </h4>
                <p>
                  Gunakan teknik <strong>Penekanan Langsung (Direct Pressure)</strong>:
                </p>
                <ol className="list-decimal pl-5 mt-1.5 space-y-1">
                  <li>Tutup luka dengan penutup luka/kassa steril.</li>
                  <li>Tekan kuat menggunakan telapak tangan (ber-sarung tangan).</li>
                  <li>Tinggikan anggota badan yang terluka lebih tinggi dari jantung (elevasi), jika tidak patah tulang.</li>
                  <li>Balut dengan kain segitiga mitella secara rapi.</li>
                </ol>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-teal-300 text-sm mb-1.5">
                  Pembalutan Kain Mitella (Bab IV)
                </h4>
                <p>
                  Kain Mitella PMI berbentuk segitiga sama kaki berukuran <strong>90 x 90 x 125 cm</strong>. Digunakan untuk menutup luka, mengikat bidai, atau menggendong lengan (arm sling). Kunci ikatan balutan dengan <strong>simpul delapan</strong> yang rata dan mudah dibuka.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-700/40">
                <h4 className="font-bold text-rose-300 text-sm mb-1.5">
                  Luka Bakar: Hal yang Dilarang! (Bab V)
                </h4>
                <p>
                  Alirkan <strong>air bersih biasa selama 10–20 menit</strong>. Dilarang keras memakai pasta gigi (odol), mentega, kecap, atau es batu langsung karena merusak jaringan kulit dan mengundang infeksi!
                </p>
              </div>
            </div>
          )}

          {activeTab === 'fraktur' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-amber-300 text-sm mb-1.5">
                  Tanda Patah Tulang: PLNB (Bab VII)
                </h4>
                <ul className="space-y-1">
                  <li><strong>P - Perubahan Bentuk (Deformitas):</strong> Terlihat bengkok, memendek, atau ada tonjolan.</li>
                  <li><strong>L - Luka:</strong> Kulit robek pada patah tulang terbuka.</li>
                  <li><strong>N - Nyeri:</strong> Rasa sakit hebat saat ditekan atau digerakkan.</li>
                  <li><strong>B - Bengkak:</strong> Disertai warna kemerahan/kebiruan (memar).</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-600/30">
                <h4 className="font-bold text-emerald-300 text-sm mb-1.5">
                  3 Aturan Emas Pembidaian (Bab VII)
                </h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li><strong>Melewati 2 sendi:</strong> Bidai harus menjepit sendi di atas dan di bawah tulang yang patah.</li>
                  <li><strong>Jangan meluruskan paksa:</strong> Pasang bidai sesuai posisi penderita saat ditemukan.</li>
                  <li><strong>Periksa PMS:</strong> Uji Peredaran Darah (nadi/suhu), Motorik (gerak jari), dan Sensorik (rasa sentuhan) sebelum DAN sesudah bidai dipasang.</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'pingsan' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-teal-300 text-sm mb-1.5">
                  Penanganan Korban Pingsan (Bab VIII)
                </h4>
                <p>Pingsan terjadi karena aliran darah ke otak berkurang sementara:</p>
                <ol className="list-decimal pl-5 mt-1.5 space-y-1">
                  <li>Baringkan korban terlentang di tempat teduh dan sirkulasi udara baik.</li>
                  <li>Longgarkan pakaian yang menjepit (kerah kemeja, dasi, ikat pinggang).</li>
                  <li><strong>Tinggikan tungkai kaki 20–30 cm</strong> agar darah kembali ke organ vital.</li>
                  <li>Jangan berikan minum/makan sebelum korban sadar 100%!</li>
                </ol>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-600/40">
                <h4 className="font-bold text-amber-300 text-sm mb-1.5">
                  Posisi Pemulihan / Miring Mantap (Bab III)
                </h4>
                <p>
                  Bagi korban tidak sadar tetapi <strong>masih bernapas normal</strong> dan tidak dicurigai patah leher: miringkan tubuh secara stabil agar lidah tidak jatuh ke belakang menutupi tenggorokan dan bila muntah tidak masuk ke paru-paru.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-600/40">
                <h4 className="font-bold text-rose-300 text-sm mb-1.5">
                  Pertolongan Pertama pada SYOK (Bab IX)
                </h4>
                <p>
                  Ciri syok: nadi cepat dan lemah, kulit pucat dan dingin, nafas cepat. Segera:
                  <strong> selimuti tubuh penderita agar hangat</strong>, tenangkan, tinggikan kaki 20–30 cm, dan segera rujuk ke fasilitas kesehatan terdekat.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'ular' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-600/30">
                <h4 className="font-bold text-emerald-300 text-sm mb-1.5">
                  Gigitan Ular Berbisa (Bab VI)
                </h4>
                <p>Ciri: Terdapat 2 bekas lubang taring, bengkak cepat, nyeri hebat membakar.</p>
                <div className="mt-2 space-y-1">
                  <p className="text-emerald-400 font-semibold">TINDAKAN BENAR:</p>
                  <ul className="list-disc pl-5">
                    <li>Tenangkan korban agar detak jantung lambat (memperlambat laju racun).</li>
                    <li>Lepas cincin, gelang, atau jam tangan sebelum bengkak.</li>
                    <li><strong>Imobilisasi:</strong> Pasang bidai atau balut tekan elastis agar anggota badan tidak digerakkan.</li>
                    <li>Segera bawa ke RS/Puskesmas untuk Serum Anti Bisa Ular (SABU).</li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-600/40">
                <p className="text-rose-400 font-bold mb-1">DILARANG KERAS (MITOS BERBAHAYA):</p>
                <ul className="list-disc pl-5 space-y-0.5 text-rose-200">
                  <li>JANGAN menyayat atau merobek luka dengan silet/pisau!</li>
                  <li>JANGAN menyedot racun dengan mulut!</li>
                  <li>JANGAN memasang torniket mati yang memutus aliran darah arteri!</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'evakuasi' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-amber-300 text-sm mb-1.5">
                  Spesifikasi Tandu Darurat PMI (Bab X)
                </h4>
                <ul className="space-y-1 text-slate-300">
                  <li><strong>2 Batang Bambu Panjang:</strong> Ukuran <strong>225 cm</strong> diameter kokoh (tangkai utama).</li>
                  <li><strong>2 Batang Bambu Pendek (Palang):</strong> Ukuran <strong>60 cm</strong>.</li>
                  <li><strong>Bahan Alas:</strong> Tali tandu (simpul jangkar & pangkal) atau 3 helai kain selimut/mitella.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-600/30">
                <h4 className="font-bold text-emerald-300 text-sm mb-1.5">
                  Prinsip Evakuasi & Keselamatan (Bab X)
                </h4>
                <p>
                  <strong>Jangan memindahkan penderita</strong> sebelum kondisinya distabilkan (pendarahan dikendalikan, bidai terpasang), KECUALI terdapat bahaya maut langsung yang mengancam penderita dan penolong (kebakaran, tebing longsor, gas beracun).
                </p>
              </div>
            </div>
          )}

          {/* TAB ONLINE: VIDEO & PORTAL */}
          {activeTab === 'online' && (
            <div className="space-y-5">
              {/* YouTube Video Player Section */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-rose-500" />
                    Video Pembelajaran PMR Madya (Tonton Langsung)
                  </h4>
                  <span className="text-[10px] text-slate-400">3 Video Terintegrasi</span>
                </div>

                <div className="rounded-2xl overflow-hidden border-2 border-emerald-600/60 bg-black shadow-lg">
                  <div className="aspect-video w-full bg-slate-950">
                    <iframe
                      src={activeVideo.embedUrl}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  <div className="p-3 bg-slate-950 flex items-center justify-between gap-2 border-t border-slate-800">
                    <div className="min-w-0">
                      <span className="text-[10px] text-teal-400 font-bold uppercase">
                        {activeVideo.topic}
                      </span>
                      <h5 className="font-bold text-xs sm:text-sm text-slate-100 truncate">
                        {activeVideo.title}
                      </h5>
                    </div>
                    <a
                      href={activeVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1 px-3 rounded-xl bg-rose-700 hover:bg-rose-600 text-white font-bold text-xs flex items-center gap-1 shrink-0"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Video Selector Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  {YOUTUBE_VIDEOS.map(vid => {
                    const isSelected = activeVideo.id === vid.id;
                    return (
                      <button
                        key={vid.id}
                        type="button"
                        onClick={() => setActiveVideo(vid)}
                        className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-teal-950 border-teal-400 ring-1 ring-teal-400/40 text-slate-100'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="text-[10px] font-bold text-amber-400 uppercase">
                          {vid.topic}
                        </span>
                        <span className="font-semibold text-xs line-clamp-1 mt-0.5">
                          {vid.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Online Portals Interactive Buttons Section */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800">
                <h4 className="font-bold text-emerald-300 text-sm flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  Portal & Aplikasi Online Spensake Kemranjen
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {/* Google Drive Card */}
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-teal-950 border border-amber-400/60 flex items-center justify-between gap-3 shadow-md">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                          Google Drive Pembina
                        </span>
                        <span className="font-bold text-xs sm:text-sm text-slate-100 truncate">
                          Drive Pengumpulan Nilai & Tugas
                        </span>
                      </div>
                      <p className="text-[11px] text-amber-200/80 line-clamp-1 mt-0.5 font-mono">
                        dinakirom29@guru.smp.belajar.id
                      </p>
                    </div>

                    <a
                      href={`https://drive.google.com/drive/u/0/search?q=to:${encodeURIComponent('dinakirom29@guru.smp.belajar.id')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-1 shrink-0 shadow-sm"
                    >
                      <span>Buka Drive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {ONLINE_PORTALS.map(portal => (
                    <div
                      key={portal.id}
                      className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 hover:border-teal-500/50 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-teal-500/10 text-teal-300">
                            {portal.badge}
                          </span>
                          <span className="font-bold text-xs sm:text-sm text-slate-100 truncate">
                            {portal.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                          {portal.description}
                        </p>
                      </div>

                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center gap-1 shrink-0 shadow-sm"
                      >
                        <span>Kunjungi</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>SMPN 1 Kemranjen · Kontingen Merak</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-teal-700 text-white font-semibold hover:bg-teal-600 transition-colors"
          >
            Tutup Buku Saku
          </button>
        </div>
      </div>
    </div>
  );
};
