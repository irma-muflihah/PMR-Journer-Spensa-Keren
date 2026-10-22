import { LevelData, TileType } from '../types/game';

// Helper to generate a 11x8 grid
function createGrid(template: string[]): TileType[][] {
  const charMap: Record<string, TileType> = {
    '.': 'grass',
    'P': 'path',
    'B': 'bamboo',
    'T': 'tree',
    'R': 'river',
    '=': 'bridge',
    'S': 'stone',
    'G': 'gapura_entrance',
    'X': 'gapura_exit',
    'M': 'moss_ruins'
  };

  return template.map(row => 
    row.trim().split('').map(char => charMap[char] || 'grass')
  );
}

export const LEVELS: LevelData[] = [
  // ================= LEVEL 1 =================
  {
    id: 1,
    title: 'Pos 1: Lembah Bambu & Gapura Merak',
    subtitle: 'Prinsip Dasar P3K & Penilaian Dini',
    zoneName: 'Lembah Bambu Kemranjen',
    themeColor: '#059669', // Emerald green
    learningTopic: 'Tujuan Pertolongan Pertama, Penggunaan APD Standar, dan Pemeriksaan Kesadaran ASNT',
    gridWidth: 11,
    gridHeight: 8,
    tiles: createGrid([
      'B B B B B B B B B B B',
      'B G P P P B B P P X B',
      'B . . . P P P P . . B',
      'B B . . . B . . . B B',
      'B . P P P P P P . . B',
      'B . P . . . . P P . B',
      'B . P P P P . . P . B',
      'B B B B B B B B B B B'
    ]),
    playerStart: { x: 1, y: 1 },
    exitGapura: { x: 9, y: 1 },
    featherKeyPosition: { x: 8, y: 6 },
    missionBrief: 'Selamat datang di petualangan PMR Madya Kontingen Merak! Lewati lembah bambu yang lebat, selesaikan tantangan dasar P3K, dan temukan Bulu Merak Bersinar pertama untuk membuka Gapura Kuno.',
    obstacles: [
      {
        id: 'obs-1-1',
        x: 3,
        y: 1,
        type: 'ranting_duri',
        name: 'Ranting Duri Lembah',
        description: 'Rumpun duri tajam menghalangi jalan setapak bambu.',
        questionId: 'q1',
        defeated: false,
        rewardScore: 100,
        rewardItem: 'kassa'
      },
      {
        id: 'obs-1-2',
        x: 6,
        y: 2,
        type: 'batu_candi',
        name: 'Reruntuhan Batu Candi',
        description: 'Bongkahan batu bertuliskan petunjuk keselamatan relawan PMR.',
        questionId: 'q2',
        defeated: false,
        rewardScore: 120,
        rewardItem: 'mitella'
      },
      {
        id: 'obs-1-3',
        x: 4,
        y: 4,
        type: 'nyamuk_raksasa',
        name: 'Nyamuk Hutan Rimba',
        description: 'Nyamuk hutan beterbangan mengancam kesehatan cadet penolong.',
        questionId: 'q3',
        defeated: false,
        rewardScore: 150
      }
    ],
    items: [
      {
        id: 'item-1-1',
        x: 2,
        y: 6,
        type: 'antiseptik',
        name: 'Cairan Pembersih Antiseptik',
        collected: false
      },
      {
        id: 'item-1-2',
        x: 8,
        y: 6,
        type: 'feather_key',
        name: 'Bulu Merak Bersinar I (Zamrud)',
        collected: false
      }
    ]
  },

  // ================= LEVEL 2 =================
  {
    id: 2,
    title: 'Pos 2: Rawa Ranting & Hutan Tropis',
    subtitle: 'Penanganan Luka, Perdarahan & Balutan Mitella',
    zoneName: 'Belantara Tropis Merak',
    themeColor: '#0d9488', // Teal
    learningTopic: 'Luka Sayat, Penekanan Langsung, Luka Bakar, dan Pembalutan Segitiga Mitella',
    gridWidth: 11,
    gridHeight: 8,
    tiles: createGrid([
      'T T T T T T T T T T T',
      'T G P . . T T P P X T',
      'T . P P . . . P . . T',
      'T . . P P P = P . T T',
      'T T R R R R R R R . T',
      'T . P P P . . . P . T',
      'T . P . P P P P P . T',
      'T T T T T T T T T T T'
    ]),
    playerStart: { x: 1, y: 1 },
    exitGapura: { x: 9, y: 1 },
    featherKeyPosition: { x: 5, y: 6 },
    missionBrief: 'Hutan tropis dipenuhi semak berduri dan rawa lembap. Siapkan pengetahuan tentang pembalutan luka mitella dan penanganan luka bakar yang benar!',
    obstacles: [
      {
        id: 'obs-2-1',
        x: 2,
        y: 2,
        type: 'ranting_duri',
        name: 'Semak Berduri Rawa',
        description: 'Duri runcing melukai penjelajah rimba. Diperlukan pertolongan pertama luka luar!',
        questionId: 'q4',
        defeated: false,
        rewardScore: 120,
        rewardItem: 'kassa'
      },
      {
        id: 'obs-2-2',
        x: 4,
        y: 3,
        type: 'nyamuk_raksasa',
        name: 'Nyamuk Raksasa Aedes',
        description: 'Nyamuk raksasa bersayap belang menjaga lintasan jembatan kayu!',
        questionId: 'q5',
        defeated: false,
        rewardScore: 150
      },
      {
        id: 'obs-2-3',
        x: 3,
        y: 5,
        type: 'ranting_duri',
        name: 'Ranting Panas Api Unggun',
        description: 'Sisa pembakaran kayu menimbulkan risiko luka bakar pada cadet.',
        questionId: 'q6',
        defeated: false,
        rewardScore: 160,
        rewardItem: 'mitella'
      },
      {
        id: 'obs-2-4',
        x: 7,
        y: 6,
        type: 'tebing_curam',
        name: 'Tebing Rawa Licin',
        description: 'Tanah curam yang membutuhkan kehati-hatian luka tusuk menancap.',
        questionId: 'q16',
        defeated: false,
        rewardScore: 160
      }
    ],
    items: [
      {
        id: 'item-2-1',
        x: 7,
        y: 3,
        type: 'mitella',
        name: 'Kain Mitella Segitiga',
        collected: false
      },
      {
        id: 'item-2-2',
        x: 5,
        y: 6,
        type: 'feather_key',
        name: 'Bulu Merak Bersinar II (Topas Biru)',
        collected: false
      }
    ]
  },

  // ================= LEVEL 3 =================
  {
    id: 3,
    title: 'Pos 3: Sarang Ular & Tebing Terjal',
    subtitle: 'Gigitan Hewan Berbisa & Pembidaian Fraktur',
    zoneName: 'Tebing Curam & Lembah Ular',
    themeColor: '#0284c7', // Sky royal blue
    learningTopic: 'Tanda & Bahaya Gigitan Ular, Pembidaian Melewati Dua Sendi, Tanda PLNB',
    gridWidth: 11,
    gridHeight: 8,
    tiles: createGrid([
      'S S S S S S S S S S S',
      'S G P P . . S P P X S',
      'S . . P P . S P . . S',
      'S S . . P P P P . S S',
      'S . . S S . S . . . S',
      'S . P P P P P P P . S',
      'S . P . . . . . P . S',
      'S S S S S S S S S S S'
    ]),
    playerStart: { x: 1, y: 1 },
    exitGapura: { x: 9, y: 1 },
    featherKeyPosition: { x: 7, y: 5 },
    missionBrief: 'Waspada! Sarang ular berbisa berada di celah batu tebing terjal. Uji pemahamanmu tentang larangan menyedot bisa ular dan teknik pembidaian patah tulang yang kokoh.',
    obstacles: [
      {
        id: 'obs-3-1',
        x: 3,
        y: 2,
        type: 'ular_berbisa',
        name: 'Ular Berbisa Belantara',
        description: 'Ular berbisa menegakkan kepalanya di antara rerumputan tebing!',
        questionId: 'q7',
        defeated: false,
        rewardScore: 180
      },
      {
        id: 'obs-3-2',
        x: 5,
        y: 3,
        type: 'tebing_curam',
        name: 'Tebing Batu Retak',
        description: 'Batu tebing runtuh menyebabkan cedera fraktur pada kaki penjelajah.',
        questionId: 'q8',
        defeated: false,
        rewardScore: 180,
        rewardItem: 'bidai'
      },
      {
        id: 'obs-3-3',
        x: 3,
        y: 5,
        type: 'batu_candi',
        name: 'Situs Penyangga Tulang',
        description: 'Tantangan aturan pembidaian melewati 2 sendi dan uji PMS.',
        questionId: 'q9',
        defeated: false,
        rewardScore: 190,
        rewardItem: 'bidai'
      },
      {
        id: 'obs-3-4',
        x: 2,
        y: 6,
        type: 'ular_berbisa',
        name: 'Ular Tanah Bertaring',
        description: 'Ancaman patah tulang terbuka dan sengatan serangga liar rimba.',
        questionId: 'q18',
        defeated: false,
        rewardScore: 190
      }
    ],
    items: [
      {
        id: 'item-3-1',
        x: 7,
        y: 2,
        type: 'bidai',
        name: 'Set Sepasang Bidai Kayu',
        collected: false
      },
      {
        id: 'item-3-2',
        x: 7,
        y: 5,
        type: 'feather_key',
        name: 'Bulu Merak Bersinar III (Safir Kemilau)',
        collected: false
      }
    ]
  },

  // ================= LEVEL 4 =================
  {
    id: 4,
    title: 'Pos 4: Jeram Sungai Bahaya & Nyamuk Rimba',
    subtitle: 'Pingsan, Posisi Pemulihan & Penanganan Syok',
    zoneName: 'Sungai Jeram Mahakam Merak',
    themeColor: '#2563eb', // Royal Blue
    learningTopic: 'Sirkulasi Darah, Penanganan Korban Pingsan, Syok, Posisi Miring Mantap',
    gridWidth: 11,
    gridHeight: 8,
    tiles: createGrid([
      'T T T T T T T T T T T',
      'T G P . . T . . P X T',
      'T . P P . T . P P . T',
      'R R = R R R R = R R R',
      'T . P . . T . P . . T',
      'T . P P P P P P . . T',
      'T . . . . . . P P . T',
      'T T T T T T T T T T T'
    ]),
    playerStart: { x: 1, y: 1 },
    exitGapura: { x: 9, y: 1 },
    featherKeyPosition: { x: 4, y: 5 },
    missionBrief: 'Arus sungai yang bergemuruh dan terik panas hutan dapat membuat cadet lemas dan jatuh pingsan. Kuasai posisi pemulihan miring mantap dan pertolongan syok!',
    obstacles: [
      {
        id: 'obs-4-1',
        x: 2,
        y: 2,
        type: 'sungai_deras',
        name: 'Jeram Arus Deras',
        description: 'Suara gemuruh sungai dan pusing terik panas membuat korban lemas.',
        questionId: 'q10',
        defeated: false,
        rewardScore: 200
      },
      {
        id: 'obs-4-2',
        x: 2,
        y: 3,
        type: 'nyamuk_raksasa',
        name: 'Nyamuk Rimba Anopheles',
        description: 'Nyamuk raksasa pembawa demam menguji posisi pemulihan korban.',
        questionId: 'q11',
        defeated: false,
        rewardScore: 200
      },
      {
        id: 'obs-4-3',
        x: 6,
        y: 5,
        type: 'tebing_curam',
        name: 'Tebing Dingin Syok',
        description: 'Korban mengalami tanda-tanda syok, nadi cepat lemah dan pucat.',
        questionId: 'q12',
        defeated: false,
        rewardScore: 220
      },
      {
        id: 'obs-4-4',
        x: 7,
        y: 2,
        type: 'ular_berbisa',
        name: 'Ular Sengat Hutan',
        description: 'Tantangan mengikis sengat lebah dan serangga rimba tanpa menekan kantung bisa.',
        questionId: 'q17',
        defeated: false,
        rewardScore: 220
      }
    ],
    items: [
      {
        id: 'item-4-1',
        x: 7,
        y: 4,
        type: 'antiseptik',
        name: 'Selimut Termal Syok',
        collected: false
      },
      {
        id: 'item-4-2',
        x: 4,
        y: 5,
        type: 'feather_key',
        name: 'Bulu Merak Bersinar IV (Kencana Biru)',
        collected: false
      }
    ]
  },

  // ================= LEVEL 5 =================
  {
    id: 5,
    title: 'Pos 5: Candi Kuno Merak & Monster Sampah',
    subtitle: 'Evakuasi Korban, Tandu Darurat & Penyelamatan Akhir',
    zoneName: 'Kuil Pusaka Merak SMPN 1 Kemranjen',
    themeColor: '#d97706', // Royal Golden Amber
    learningTopic: 'Ukuran Standar Tandu Darurat, Tanda Vital, dan Prinsip Pemindahan Korban',
    gridWidth: 11,
    gridHeight: 8,
    tiles: createGrid([
      'M M M M M M M M M M M',
      'M G P P P M M P P X M',
      'M . . . P . . P . . M',
      'M M M . P P P P . M M',
      'M . . . . M . . . . M',
      'M . P P P P P P P . M',
      'M . P . . . . . P . M',
      'M M M M M M M M M M M'
    ]),
    playerStart: { x: 1, y: 1 },
    exitGapura: { x: 9, y: 1 },
    featherKeyPosition: { x: 4, y: 5 },
    missionBrief: 'Ini adalah pos puncak! Kuil Kuno Merak telah dikotori oleh Monster Sampah yang merusak alam rimba. Gunakan keahlian tandu darurat dan prinsip evakuasi PMR untuk mengalahkannya dan raih Bulu Merak Mahkota Emas!',
    obstacles: [
      {
        id: 'obs-5-1',
        x: 3,
        y: 1,
        type: 'batu_candi',
        name: 'Prasasti Tanda Vital',
        description: 'Pemeriksaan frekuensi nadi dan nafas normal remaja sebelum evakuasi.',
        questionId: 'q13',
        defeated: false,
        rewardScore: 240,
        rewardItem: 'tandu'
      },
      {
        id: 'obs-5-2',
        x: 5,
        y: 3,
        type: 'batu_candi',
        name: 'Spesifikasi Bambu Tandu',
        description: 'Kuis perakitan tandu darurat PMI: ukuran bambu panjang dan palang.',
        questionId: 'q14',
        defeated: false,
        rewardScore: 260,
        rewardItem: 'tandu'
      },
      {
        id: 'obs-5-3',
        x: 7,
        y: 5,
        type: 'monster_sampah',
        name: 'Monster Sampah Rimba (Raja Limbah)',
        description: 'Raksasa dari tumpukan sampah plastik dan limbah yang merusak ekosistem hutan nusantara!',
        questionId: 'q15',
        defeated: false,
        rewardScore: 350
      }
    ],
    items: [
      {
        id: 'item-5-1',
        x: 1,
        y: 5,
        type: 'tandu',
        name: 'Tandu Darurat Bambu Merak',
        collected: false
      },
      {
        id: 'item-5-2',
        x: 4,
        y: 5,
        type: 'feather_key',
        name: 'Bulu Merak Mahkota Emas Pusaka V',
        collected: false
      }
    ]
  }
];
