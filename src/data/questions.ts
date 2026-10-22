import { PPQuestion } from '../types/game';

export const PP_QUESTIONS: Record<string, PPQuestion> = {
  q1: {
    id: 'q1',
    category: 'Dasar P3K & APD',
    question: 'Berdasarkan Modul Pertolongan Pertama PMR Madya PMI 2008, apa sajakah 3 tujuan utama dilakukannya Pertolongan Pertama?',
    options: [
      'Menyembuhkan penyakit, memberi obat keras, menggantikan dokter',
      'Menyelamatkan jiwa penderita, mencegah cacat, dan memberikan rasa nyaman serta menunjang penyembuhan',
      'Mengantar ke rumah sakit secepatnya tanpa memeriksa kondisi fisik',
      'Membayar biaya pengobatan, mencatat data korban, memanggil wartawan'
    ],
    correctIndex: 1,
    explanation: 'Menurut Modul PP PMR Madya 2008 Bab I, tiga tujuan pokok Pertolongan Pertama adalah: 1. Menyelamatkan jiwa penderita, 2. Mencegah cacat, 3. Memberikan rasa nyaman dan menunjang upaya penyembuhan.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab I: Pengantar Pertolongan Pertama',
    damageOnFail: 1
  },
  q2: {
    id: 'q2',
    category: 'Dasar P3K & APD',
    question: 'Alat Perlindungan Diri (APD) minimal yang WAJIB dikenakan oleh anggota PMR Madya sebelum menyentuh luka korban adalah...',
    options: [
      'Helm proyek dan sepatu boots besi',
      'Sarung tangan lateks/karet dan masker penolong',
      'Jas hujan parasut dan kacamata hitam',
      'Kain mitella yang dililitkan di tangan'
    ],
    correctIndex: 1,
    explanation: 'Modul PP 2008 menegaskan prinsip keselamatan diri penolong: APD minimal yang wajib adalah sarung tangan lateks untuk mencegah kontak langsung dengan darah/cairan tubuh, serta masker penolong untuk mencegah penularan kuman melalui udara.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab II: Keselamatan & APD Penolong',
    damageOnFail: 1
  },
  q3: {
    id: 'q3',
    category: 'Dasar P3K & APD',
    question: 'Untuk memeriksa respon tingkat kesadaran korban di alam terbuka, urutan penilaian "ASNT" yang benar adalah...',
    options: [
      'Awas, Suara, Nyeri, Tidak respon',
      'Aman, Selamat, Nyaman, Tenang',
      'Angkat, Selimuti, Nafas, Tekan',
      'Air, Selang, Nadi, Tensi'
    ],
    correctIndex: 0,
    explanation: 'Sistem penilaian respon kesadaran penderita pada Modul PMI 2008 menggunakan singkatan ASNT: A (Awas/Alert), S (Suara/Verbal), N (Nyeri/Pain), T (Tidak respon/Unresponsive).',
    modulReference: 'Modul PP PMR Madya 2008 - Bab III: Penilaian Penderita',
    damageOnFail: 1
  },
  q4: {
    id: 'q4',
    category: 'Luka & Pendarahan',
    question: 'Langkah pertama dan paling tepat untuk menghentikan perdarahan luar pada luka sayat yang mengucur di lengan adalah...',
    options: [
      'Mengolesi luka dengan minyak kelapa dan kecap',
      'Melakukan Penekanan Langsung (Direct Pressure) pada luka dengan kain kassa steril',
      'Mengikat lengan sekencang-kencangnya dengan kawat',
      'Meniup luka agar darah cepat mengering'
    ],
    correctIndex: 1,
    explanation: 'Teknik utama menghentikan perdarahan luar menurut Modul 2008 adalah Penekanan Langsung (Direct Pressure) dengan penutup luka/kassa steril, dapat disertai elevasi (meninggikan anggota gerak) bila tidak ada patah tulang.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab IV: Perdarahan & Penanganan Luka',
    damageOnFail: 1
  },
  q5: {
    id: 'q5',
    category: 'Luka & Pendarahan',
    question: 'Seorang teman terkena luka bakar air panas saat memasak di perkemahan. Tindakan pertama yang BENAR sesuai standar PMI adalah...',
    options: [
      'Mengolesi luka bakar dengan pasta gigi (odol) atau margarin',
      'Menyiram/mengalirkan air bersih yang mengalir pada area luka selama 10–20 menit',
      'Memecahkan gelembung luka bakar yang terbentuk',
      'Menempelkan es batu secara langsung pada luka sampai mati rasa'
    ],
    correctIndex: 1,
    explanation: 'Modul PP PMR Madya melarang keras pasta gigi, mentega, atau kecap karena dapat memicu infeksi dan menjebak panas. Tindakan yang benar adalah mengalirkan air bersih biasa (bukan air es) selama 10–20 menit hingga rasa nyeri mereda.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab V: Penanganan Luka Bakar',
    damageOnFail: 1
  },
  q6: {
    id: 'q6',
    category: 'Luka & Pendarahan',
    question: 'Kain segitiga (Mitella) adalah perlengkapan khas PMR. Ukuran standar kain Mitella dan bentuk simpul yang digunakan untuk mengunci balutan adalah...',
    options: [
      'Ukuran 50 x 50 cm dengan simpul mati terkunci permanen',
      'Ukuran 90 x 90 x 125 cm dengan ikatan Simpul Delapan / Simpul Hidup yang rata dan mudah dibuka',
      'Ukuran 200 x 200 cm dengan simpul jangkar kapal',
      'Ukuran bebas dengan perekat selotip plastik'
    ],
    correctIndex: 1,
    explanation: 'Standar PMI: Kain mitella berbentuk segitiga sama kaki berukuran 90 x 90 x 125 cm. Ikatan simpul yang dipakai adalah simpul delapan atau simpul datar yang rapi, tidak menekan luka langsung, dan mudah dibuka saat evaluasi medis.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab IV: Pembalutan & Mitella',
    damageOnFail: 1
  },
  q7: {
    id: 'q7',
    category: 'Gigitan Ular & Rimba',
    question: 'Korban digigit ular di hutan dengan ciri 2 lubang bekas taring dan nyeri membengkak. Tindakan darurat yang TIDAK BOLEH dilakukan adalah...',
    options: [
      'Menyayat luka gigitan dan menyedot darah racun dengan mulut',
      'Menenangkan penderita agar detak jantung tidak berpacu cepat',
      'Mengistirahatkan dan mengimobilisasi (jangan gerakkan) anggota tubuh yang digigit',
      'Melepaskan cincin atau gelang di sekitar tangan yang digigit sebelum bengkak'
    ],
    correctIndex: 0,
    explanation: 'MITOS BERBAHAYA! Modul PMI 2008 menegaskan: JANGAN PERNAH menyayat luka atau menyedot bisa dengan mulut (bisa beracun bagi penolong dan infeksi berat). Lakukan imobilisasi (balut bidai/tekan elastis tanpa mematikan aliran darah nadi) dan segera evakuasi.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab VI: Gigitan Hewan & Sengatan',
    damageOnFail: 1
  },
  q8: {
    id: 'q8',
    category: 'Patah Tulang & Bidai',
    question: 'Untuk mengenali tanda-tanda patah tulang (fraktur) tertutup pada korban, anggota PMR mengingat singkatan "PLNB", yaitu...',
    options: [
      'Perubahan bentuk, Luka terbuka, Nadi hilang, Beku darah',
      'Perubahan bentuk, Rasa Lemah, Nafas cepat, Batuk',
      'Perubahan bentuk (deformitas), Luka, Nyeri tekan/gerak, Bengkak',
      'Pusing, Lemas, Ngantuk, Berkeringat dingin'
    ],
    correctIndex: 2,
    explanation: 'Sesuai Modul PP PMI 2008, tanda patah tulang dirumuskan sebagai PLNB: P = Perubahan bentuk (deformitas), L = Luka (pada patah terbuka), N = Nyeri (saat disentuh/digerakkan), B = Bengkak dan memar.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab VII: Cedera Otot & Rangka (Patah Tulang)',
    damageOnFail: 1
  },
  q9: {
    id: 'q9',
    category: 'Patah Tulang & Bidai',
    question: 'Aturan utama dalam melakukan pembidaian pada patah tulang tungkai bawah adalah...',
    options: [
      'Meluruskan paksa tulang yang bengkok sebelum dipasang kayu',
      'Bidai harus melewati minimal 2 sendi (sendi di atas dan di bawah tulang yang patah)',
      'Mengikat bidai tepat di atas titik patahan tulang sekuat tenaga',
      'Memasang satu bilah kayu pendek hanya pada area yang memar'
    ],
    correctIndex: 1,
    explanation: 'Prinsip pokok pembidaian Modul 2008: 1. Bidai harus melewati minimal 2 sendi yang mengapit tulang yang patah, 2. Jangan memaksakan posisi tulang kembali normal, 3. Periksa PMS (Peredaran darah, Motorik, Sensorik) sebelum dan sesudah pembidaian.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab VII: Pembidaian & Imobilisasi',
    damageOnFail: 1
  },
  q10: {
    id: 'q10',
    category: 'Pingsan & Syok',
    question: 'Seorang peserta upacara pingsan akibat terik matahari dan kelelahan. Penanganan pertama yang benar adalah...',
    options: [
      'Mendudukkan korban dan memberinya makan nasi segera',
      'Memindahkan korban ke tempat teduh dan sejuk, baringkan telentang, tinggikan tungkai kaki 20–30 cm, longgarkan pakaian ketat',
      'Menyiramkan air seember ke wajahnya agar segera kaget dan bangun',
      'Memukuli telapak tangan dan kakinya dengan keras'
    ],
    correctIndex: 1,
    explanation: 'Pingsan (syncope) terjadi karena pasokan oksigen sementara ke otak berkurang. Baringkan penderita di tempat sejuk, longgarkan pakaian ketat (kerah/ikat pinggang), dan tinggikan tungkai kaki 20-30 cm agar aliran darah kembali optimal ke otak.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab VIII: Gangguan Kesadaran & Pingsan',
    damageOnFail: 1
  },
  q11: {
    id: 'q11',
    category: 'Pingsan & Syok',
    question: 'Kapan "Posisi Pemulihan" (Recovery Position / Posisi Miring Mantap) harus diterapkan pada penderita?',
    options: [
      'Saat penderita patah tulang leher dan tulang belakang',
      'Saat korban tidak sadar tetapi bernafas normal dan tidak mengalami cedera leher/tulang belakang',
      'Saat korban sedang makan dan tersedak biji rambutan',
      'Saat korban mengalami pendarahan hebat di kedua telinga'
    ],
    correctIndex: 1,
    explanation: 'Posisi pemulihan (miring mantap) digunakan untuk korban tak sadar namun bernafas normal tanpa cedera spinal, berguna untuk menjaga lidah tidak menyumbat jalan nafas dan membiarkan cairan muntahan keluar dengan aman.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab III & VIII: Bantuan Hidup & Posisi Pemulihan',
    damageOnFail: 1
  },
  q12: {
    id: 'q12',
    category: 'Pingsan & Syok',
    question: 'Tanda-tanda korban mengalami SYOK antara lain nadi cepat dan lemah, kulit pucat dingin berkeringat. Pertolongan pertama yang harus dilakukan adalah...',
    options: [
      'Membiarkan korban kedinginan dan menyiram air ke badannya',
      'Tenangkan penderita, selimuti agar tidak kedinginan, tinggikan tungkai 20–30 cm jika aman, dan rujuk faskes',
      'Memberikan kopi panas atau minuman beralkohol',
      'Menyuruh korban lari keliling lapangan agar hangat'
    ],
    correctIndex: 1,
    explanation: 'Penanganan syok menurut Modul PMI 2008: Jaga penderita tetap hangat dengan selimut, pertahankan jalan napas, tinggikan tungkai kaki 20-30 cm (jika tidak dicurigai cedera panggul/tulang belakang), jangan beri makan/minum lewat mulut jika tidak sadar penuh.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab IX: Syok & Kedaruratan Sirkulasi',
    damageOnFail: 1
  },
  q13: {
    id: 'q13',
    category: 'Dasar P3K & APD',
    question: 'Berapakah frekuensi denyut nadi dan frekuensi pernafasan normal per menit saat istirahat pada anak usia SMP / remaja (PMR Madya)?',
    options: [
      'Nadi: 20-30 kali/menit, Nafas: 5-8 kali/menit',
      'Nadi: 60–100 kali/menit, Nafas: 12–20 kali/menit',
      'Nadi: 150-200 kali/menit, Nafas: 40-50 kali/menit',
      'Nadi: 10-15 kali/menit, Nafas: 2-4 kali/menit'
    ],
    correctIndex: 1,
    explanation: 'Rentang tanda vital normal untuk remaja (PMR Madya) menurut pedoman PMI adalah denyut nadi radialis antara 60 hingga 100 kali per menit, dan frekuensi pernafasan normal berkisar antara 12 hingga 20 kali per menit.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab III: Pemeriksaan Tanda-Tanda Vital',
    damageOnFail: 1
  },
  q14: {
    id: 'q14',
    category: 'Evakuasi & Tandu',
    question: 'Spesifikasi ukuran bambu untuk pembuatan Tandu Darurat (tandu darurat PMR Madya) adalah...',
    options: [
      '2 batang bambu panjang @ 225 cm dan 2 batang bambu pendek (palang) @ 60 cm',
      '1 batang bambu 500 cm dipotong sembarang',
      '4 bilah kayu tipis ukuran 1 meter',
      'Pipa paralon lunak berukuran 150 cm'
    ],
    correctIndex: 0,
    explanation: 'Standar tandu darurat PMI: Menggunakan 2 batang bambu panjang berdiameter kuat ukuran 225 cm sebagai tangkai tandu, serta 2 batang palang pendek ukuran 60 cm dengan ikatan simpul jangkar dan pangkal menggunakan tali tandu atau mitella.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab X: Pemindahan Penderita & Tandu Darurat',
    damageOnFail: 1
  },
  q15: {
    id: 'q15',
    category: 'Evakuasi & Tandu',
    question: 'Prinsip paling utama yang harus diperhatikan sebelum mengevakuasi / memindahkan korban di lokasi petualangan adalah...',
    options: [
      'Menyuruh korban berjalan sendiri secepatnya',
      'Pastikan lokasi aman dan kondisi korban stabil (perdarahan terkendali, fraktur dibidai) kecuali terdapat bahaya maut yang mengancam seketika',
      'Memindahkan korban dengan menarik kedua kakinya di tanah berbatu',
      'Foto bersama korban terlebih dahulu untuk dokumentasi media sosial'
    ],
    correctIndex: 1,
    explanation: 'Prinsip pemindahan korban PMI 2008: "Jangan memindahkan penderita sebelum kondisi cedera diperiksa dan distabilkan, kecuali lokasi kejadian terdapat bahaya yang mengancam keselamatan jiwa penderita dan penolong (kebakaran, reruntuhan, gas beracun)."',
    modulReference: 'Modul PP PMR Madya 2008 - Bab X: Evakuasi Penderita',
    damageOnFail: 1
  },
  q16: {
    id: 'q16',
    category: 'Luka & Pendarahan',
    question: 'Jika korban tertusuk ranting tajam atau paku yang masih MENANCAP di pahanya, tindakan pertama yang benar adalah...',
    options: [
      'Mencabut paksa ranting tersebut segera agar tidak berkarat',
      'JANGAN mencabut benda yang menancap! Lakukan fiksasi / penyangga di sekeliling benda dengan bantalan cincin atau gulungan kassa lalu balut',
      'Memutar benda yang menancap ke kiri dan kanan',
      'Menyiramkan alkohol 70% langsung ke lubang tusukan yang ada rantingnya'
    ],
    correctIndex: 1,
    explanation: 'Pada luka tusuk dengan benda menancap, benda tersebut berfungsi menahan kebocoran pembuluh darah. Mencabutnya bisa memicu perdarahan dalam yang mematikan! Fiksasi benda dengan balutan donat/cincin kassa agar tidak bergerak dan bawa ke RS.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab IV: Penanganan Luka Khusus',
    damageOnFail: 1
  },
  q17: {
    id: 'q17',
    category: 'Gigitan Ular & Rimba',
    question: 'Di hutan tropis, seorang cadet disengat lebah hutan. Sengat lebah masih tertancap di kulit. Cara yang benar mengeluarkan sengat adalah...',
    options: [
      'Memencet kantung sengat dengan kuku jari tangan kuat-kuat',
      'Mengikis pangkal sengat secara hati-hati menggunakan tepi kartu plastik atau pisau tumpul tanpa menekan kantung bisa racunnya',
      'Membakar ujung sengat dengan korek api',
      'Menghancurkan sengat di dalam daging'
    ],
    correctIndex: 1,
    explanation: 'Mengikis (scraping) dengan kartu plastik tidak menekan kantung racun sengat. Jika dipencet dengan pinset atau kuku, sisa racun di dalam kantung justru terpompa masuk ke dalam aliran darah penderita.',
    modulReference: 'Modul PP PMR Madya 2008 - Bab VI: Sengatan Serangga',
    damageOnFail: 1
  },
  q18: {
    id: 'q18',
    category: 'Patah Tulang & Bidai',
    question: 'Pada kasus patah tulang terbuka di mana ujung tulang terlihat keluar menembus kulit, hal yang HARUS DIHINDARI adalah...',
    options: [
      'Menutup luka dengan kassa steril',
      'Memaksa atau mendorong ujung tulang yang menonjol agar masuk kembali ke dalam daging',
      'Memeriksa sirkulasi peredaran darah di ujung jari kaki/tangan',
      'Memasang bidai penyangga untuk imobilisasi'
    ],
    correctIndex: 1,
    explanation: 'DILARANG mendorong fragmen tulang masuk ke dalam tubuh karena dapat membawa kuman dari luar masuk ke dalam jaringan lunak/tulang sehingga menyebabkan infeksi tulang yang sangat parah (osteomielitis). Tutup steril dan bidai!',
    modulReference: 'Modul PP PMR Madya 2008 - Bab VII: Fraktur Terbuka',
    damageOnFail: 1
  }
};
