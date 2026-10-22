export interface WebResource {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  category: 'Portal Sekolah' | 'Aplikasi PMR' | 'Media Interaktif';
  badge: string;
  themeColor: string;
}

export interface VideoResource {
  id: string;
  videoId: string;
  title: string;
  channel: string;
  topic: string;
  description: string;
  duration?: string;
  url: string;
  embedUrl: string;
}

export const ONLINE_PORTALS: WebResource[] = [
  {
    id: 'spensa-keren',
    title: 'Super Spensa Keren',
    subtitle: 'SMP Negeri 1 Kemranjen',
    description: 'Portal digital resmi kebanggaan SMP Negeri 1 Kemranjen yang memuat kreasi, prestasi, dan kegiatan siswa-siswi Spensake.',
    url: 'https://superspensakeren.netlify.app',
    category: 'Portal Sekolah',
    badge: 'Spensake Official',
    themeColor: '#059669'
  },
  {
    id: 'pmr-prs',
    title: 'Aplikasi PMR PRS Online',
    subtitle: 'Pendidikan Remaja Sebaya PMR Madya',
    description: 'Aplikasi interaktif Pendidikan Remaja Sebaya (PRS) PMR Madya Kontingen Merak untuk pembinaan konseling sebaya dan kesehatan remaja.',
    url: 'https://pmrprs1.netlify.app',
    category: 'Aplikasi PMR',
    badge: 'PMR Spensake',
    themeColor: '#0284c7'
  },
  {
    id: 'dina-project',
    title: 'Dina Project Interaktif',
    subtitle: 'Media Pembelajaran Digital',
    description: 'Platform inovatif materi edukasi dan modul interaktif pendukung kegiatan relawan muda PMR Madya.',
    url: 'https://dinaproject.netlify.app',
    category: 'Media Interaktif',
    badge: 'Modul Edukasi',
    themeColor: '#f59e0b'
  }
];

export const YOUTUBE_VIDEOS: VideoResource[] = [
  {
    id: 'video-pp',
    videoId: 'uAdG_rCwOrc',
    title: 'Materi Pertolongan Pertama (PP) PMR Tingkat Madya',
    channel: 'Achmad Choirul Rifki',
    topic: 'Pertolongan Pertama (P3K)',
    description: 'Pedoman lengkap tindakan pertolongan pertama untuk PMR Madya: penanganan korban pingsan, cedera kecelakaan, luka lecet, patah tulang (fraktur), dan penanganan luka bakar.',
    duration: 'Video Edukasi PP',
    url: 'https://www.youtube.com/watch?v=uAdG_rCwOrc',
    embedUrl: 'https://www.youtube-nocookie.com/embed/uAdG_rCwOrc'
  },
  {
    id: 'video-prs',
    videoId: 'pz9oJJEmemM',
    title: 'Pendidikan Remaja Sebaya (PRS)',
    channel: 'PMR Soneta',
    topic: 'Pendidikan Remaja Sebaya',
    description: 'Materi pokok pembinaan remaja sebaya: komunikasi interpersonal, kesehatan reproduksi remaja, empati, pengambilan keputusan, dan peran pendidik sebaya PMR.',
    duration: 'Video Pembelajaran PRS',
    url: 'https://www.youtube.com/watch?v=pz9oJJEmemM',
    embedUrl: 'https://www.youtube-nocookie.com/embed/pz9oJJEmemM'
  },
  {
    id: 'video-pmr-history',
    videoId: 'jLsS1i7GSQs',
    title: 'Edukasi Kepalangmerahan: Sejarah Gerakan, Lambang & Fungsi',
    channel: 'Red Cross Youth Education',
    topic: 'Gerakan Palang Merah & Bulan Sabit Merah',
    description: 'Sejarah berdirinya Gerakan Palang Merah Internasional (ICRC, IFRC, PMI), aturan penggunaan lambang pelindung, serta prinsip-prinsip dasar kemanusiaan untuk PMR.',
    duration: 'Sejarah & Prinsip',
    url: 'https://www.youtube.com/watch?v=jLsS1i7GSQs',
    embedUrl: 'https://www.youtube-nocookie.com/embed/jLsS1i7GSQs'
  }
];
