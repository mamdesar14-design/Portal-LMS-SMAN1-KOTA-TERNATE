/* LMS Bahasa Indonesia Kelas X — Fase E — SMA Negeri 1 Kota Ternate
   8 unit (2 semester) · selaras Panduan Mata Pelajaran Bahasa Indonesia 2025 (Pusat Kurikulum dan Pembelajaran) */
(function(){
"use strict";
const UNITS = [];
/* ===== SEMESTER 1 ===== */
UNITS.push({
  n: 1, el: 4, sem: 1, emoji: "🔬",
  title: "Laporan Hasil Observasi Kompleks: Pesisir dan Mangrove Ternate",
  desc: "Mengamati fenomena di sekitar, menyusun data secara sistematis, lalu menulis dan mempresentasikan laporan hasil observasi (LHO) kompleks.",
  tp: [
    { c: "ATP 3", t: "Mengevaluasi informasi dalam teks LHO kompleks yang dibaca/dipirsa untuk menemukan makna tersurat dan tersirat serta kredibilitasnya.", e: "Membandingkan dua LHO tentang hutan mangrove dan menilai mana yang datanya lebih lengkap dan sumbernya lebih tepercaya." },
    { c: "ATP 5", t: "Menulis teks LHO kompleks secara logis dan objektif berdasarkan data pengamatan, lalu mempresentasikannya secara sistematis.", e: "Menulis LHO 'Sampah Plastik di Pantai Falajawa' dengan pernyataan umum, deskripsi bagian, dan deskripsi manfaat." },
    { c: "ATP 6", t: "Memublikasikan hasil LHO dalam bentuk siniar, video, atau unggahan media sekolah.", e: "Mengunggah video presentasi LHO berdurasi 3 menit ke kanal media sosial sekolah." }
  ],
  focus: [
    ["Pengertian", "LHO kompleks menyajikan informasi hasil pengamatan secara sistematis, objektif, faktual, dan lebih rinci (ciri fisik, perilaku, fungsi, manfaat)."],
    ["Struktur", "Pernyataan umum (definisi/klasifikasi) → Deskripsi bagian → Deskripsi manfaat (dan simpulan bila perlu)."],
    ["Kata kerja relasional", "adalah, merupakan, terdiri atas, termasuk — untuk definisi dan klasifikasi."],
    ["Istilah teknis & kata baku", "ekosistem, abrasi, salinitas, sedimentasi; gunakan bahasa ilmiah yang formal."],
    ["Kalimat objektif", "Berdasarkan data, bukan perasaan: 'Ditemukan 312 sampah plastik dalam 50 meter garis pantai.'"],
    ["Langkah observasi", "Tentukan objek → siapkan instrumen → catat data → olah data → susun laporan."]
  ],
  model: "Pernyataan umum: [[Mangrove adalah]] kelompok tumbuhan yang hidup di daerah pasang surut pantai berlumpur. Mangrove [[terdiri atas]] beberapa jenis, antara lain bakau, api-api, dan pidada.\n\nDeskripsi bagian: Akar mangrove berbentuk [[akar tunjang dan akar napas]] yang mampu menahan lumpur serta menyerap oksigen saat air pasang. Daunnya tebal dan dapat [[mengeluarkan kelebihan garam]].\n\nDeskripsi manfaat: Hutan mangrove [[berfungsi]] menahan abrasi, menjadi tempat pemijahan ikan, dan menyerap karbon. [[Berdasarkan pengamatan]] di pesisir Ternate, kawasan yang masih bermangrove lebih jarang mengalami abrasi.\n\nPerhatikan: [[kata kerja relasional]] (adalah, terdiri atas), [[istilah teknis]], dan [[kalimat berbasis data]].",
  diag: [
    { q: "Teks yang disusun berdasarkan hasil pengamatan langsung disebut …", o: ["teks laporan hasil observasi", "teks anekdot", "hikayat", "puisi"], a: 0, w: "LHO = laporan hasil observasi/pengamatan." },
    { q: "Kalimat yang objektif adalah …", o: ["Pantainya sangat jorok dan menjijikkan.", "Ditemukan 312 sampah plastik di sepanjang 50 meter pantai.", "Aku benci sampah plastik.", "Pantai itu paling kotor sedunia."], a: 1, w: "Objektif = berdasarkan data yang dapat diukur." },
    { q: "Kata 'abrasi' berarti …", o: ["pengikisan pantai oleh gelombang laut", "pasang naik", "hujan lebat", "penanaman pohon"], a: 0, w: "Abrasi = pengikisan daratan pantai oleh air laut." },
    { q: "Kata kerja yang tepat untuk kalimat definisi adalah …", o: ["berlari", "merupakan", "menangis", "berteriak"], a: 1, w: "Merupakan/adalah = kata kerja relasional." },
    { q: "Sebelum menulis LHO, langkah pertama yang tepat adalah …", o: ["langsung menulis simpulan", "menentukan objek pengamatan", "menyebarkan hasil ke media sosial", "membuat judul yang lucu"], a: 1, w: "Observasi dimulai dengan menentukan objek." }
  ],
  form: [
    { q: "Bagian LHO yang berisi definisi dan klasifikasi objek adalah …", o: ["pernyataan umum", "deskripsi manfaat", "koda", "reorientasi"], a: 0, w: "Pernyataan umum = definisi/klasifikasi." },
    { q: "'Mangrove terdiri atas bakau, api-api, dan pidada.' Kalimat ini menunjukkan …", o: ["klasifikasi", "opini", "perintah", "harapan"], a: 0, w: "'Terdiri atas' menandai klasifikasi." },
    { q: "Ciri kebahasaan LHO yang TIDAK tepat adalah …", o: ["menggunakan istilah teknis", "menggunakan kata baku", "banyak menggunakan kata 'menurutku'", "menggunakan kata kerja relasional"], a: 2, w: "LHO objektif, tidak memuat pendapat pribadi." },
    { q: "Deskripsi manfaat berisi …", o: ["fungsi dan kegunaan objek", "nama penulis", "konflik tokoh", "rima akhir"], a: 0, w: "Deskripsi manfaat menjelaskan fungsi objek." },
    { q: "Kata baku yang tepat adalah …", o: ["analisa", "analisis", "analysa", "anelisis"], a: 1, w: "Bentuk baku: analisis." },
    { q: "Sumber data yang paling kredibel untuk LHO tentang cuaca ekstrem adalah …", o: ["pesan berantai WhatsApp", "situs resmi BMKG", "komentar warganet", "status teman"], a: 1, w: "BMKG adalah lembaga resmi." },
    { q: "Dalam presentasi LHO, hal yang paling penting adalah …", o: ["menyampaikan data secara runtut dan jelas", "berbicara secepat mungkin", "membaca seluruh teks tanpa melihat audiens", "menambahkan cerita fiksi"], a: 0, w: "Presentasi efektif = runtut, jelas, berbasis data." },
    { q: "'Salinitas' dalam teks tentang mangrove berarti …", o: ["kadar garam air", "kecepatan angin", "ketinggian pohon", "jumlah ikan"], a: 0, w: "Salinitas = tingkat keasinan air." }
  ],
  quiz: [
    { q: "Bacalah: 'Terumbu karang merupakan ekosistem laut yang dibentuk oleh hewan polip. Terumbu karang terdiri atas karang keras dan karang lunak.' Bagian ini termasuk …", o: ["pernyataan umum", "deskripsi manfaat", "simpulan", "koda"], a: 0, w: "Berisi definisi dan klasifikasi → pernyataan umum." },
    { q: "Kalimat berikut yang termasuk deskripsi manfaat adalah …", o: ["Terumbu karang berwarna-warni.", "Terumbu karang melindungi pantai dari gelombang besar dan menjadi rumah bagi ikan.", "Terumbu karang dibentuk polip.", "Terumbu karang ada di laut."], a: 1, w: "Menjelaskan fungsi/kegunaan." },
    { q: "Perbedaan utama LHO kompleks dengan LHO sederhana adalah …", o: ["LHO kompleks lebih rinci, sistematis, dan memakai bahasa ilmiah", "LHO kompleks berisi pendapat pribadi", "LHO kompleks berbentuk puisi", "LHO kompleks tidak memakai data"], a: 0, w: "Kompleks = lebih rinci dan ilmiah." },
    { q: "Manakah judul LHO yang paling tepat?", o: ["Liburanku yang Seru di Pantai", "Karakteristik Hutan Mangrove di Pesisir Ternate", "Ayo Tanam Mangrove Sekarang!", "Cara Menanam Mangrove"], a: 1, w: "Judul LHO menyebut objek secara objektif." },
    { q: "Seorang siswa menulis 'Sampah di pantai itu banyak sekali.' Perbaikan yang lebih objektif adalah …", o: ["Sampah di pantai itu sangat banyak sekali.", "Dalam 30 menit pengamatan, tercatat 145 sampah plastik dan 20 sampah kaca.", "Aku kaget melihat sampah.", "Sampah membuatku sedih."], a: 1, w: "Data kuantitatif membuat kalimat objektif." },
    { q: "Tujuan memublikasikan LHO melalui siniar atau media sekolah adalah …", o: ["menyebarkan informasi faktual agar bermanfaat bagi masyarakat", "mencari sensasi", "menghibur dengan lelucon", "menggantikan data asli"], a: 0, w: "Publikasi = berbagi informasi bermanfaat." }
  ],
  task: "Lakukan observasi selama 30–45 menit pada satu objek di sekitar rumah atau sekolah (pantai, pasar, taman, kebun cengkih, tempat sampah sekolah). Catat data dalam tabel: aspek yang diamati – hasil – keterangan.\n\nSusun LHO kompleks (250–300 kata) dengan pernyataan umum, deskripsi bagian, dan deskripsi manfaat. Garis bawahi kata kerja relasional dan istilah teknis.",
  disc: "Fenomena apa di lingkungan sekitarmu yang menurutmu penting diamati dan dilaporkan? Jelaskan alasanmu dan data apa saja yang perlu dikumpulkan.",
  meet: [
    { jp: "2 JP", topic: "Memahami: struktur & kebahasaan LHO kompleks", act: "Membaca dua contoh LHO → menandai struktur, kata kerja relasional, istilah teknis; menilai kredibilitas sumber." },
    { jp: "2 JP", topic: "Mengaplikasi: observasi lapangan & pengolahan data", act: "Observasi berkelompok di lingkungan sekolah → mengisi tabel data → menyusun kerangka LHO." },
    { jp: "2 JP", topic: "Merefleksi: menulis, menyunting, dan mempresentasikan LHO", act: "Menulis LHO → sunting sebaya → presentasi/siniar 3 menit." }
  ],
  proj: {
    title: "Siniar 'Kabar Lingkungan Kita'",
    steps: ["Tentukan objek observasi di lingkungan sekitar dan susun instrumen pengamatan.", "Lakukan observasi, catat data kuantitatif dan kualitatif.", "Tulis LHO kompleks 250–300 kata dengan struktur yang tepat.", "Rekam siniar atau video 3 menit yang mempresentasikan hasil observasi.", "Publikasikan di media sekolah dan kumpulkan tanggapan audiens."],
    rub: [["Ketepatan data & objektivitas", "30"], ["Struktur & kebahasaan LHO", "30"], ["Presentasi lisan/siniar", "25"], ["Publikasi & tanggapan audiens", "15"]]
  },
  refl: ["Data apa yang paling sulit kamu kumpulkan saat observasi? Mengapa?", "Bagaimana kamu memastikan tulisanmu tetap objektif?", "Apa manfaat hasil observasimu bagi lingkungan sekitar?", "Bagian presentasi mana yang perlu kamu perbaiki?"]
});

UNITS.push({
  n: 2, el: 2, sem: 1, emoji: "📰",
  title: "Teks Eksposisi: Mengkritisi Gagasan dan Kredibilitas Informasi",
  desc: "Membaca dan memirsa teks eksposisi tentang isu kesehatan dan lingkungan, menilai argumen serta kredibilitas sumbernya.",
  tp: [
    { c: "ATP 3", t: "Mengevaluasi gagasan dan pandangan dalam teks eksposisi visual/audiovisual serta menilai kredibilitasnya dengan sumber lain.", e: "Membandingkan artikel opini tentang jam tidur remaja dengan data Kemenkes, lalu menilai kekuatan argumennya." },
    { c: "ATP 1", t: "Mengevaluasi gagasan dan pesan dari teks eksposisi yang disimak (aural).", e: "Menyimak siniar tentang bahaya rokok elektrik dan mencatat tesis, argumen, serta data pendukungnya." },
    { c: "ATP 5", t: "Menulis teks eksposisi dengan tesis yang jelas, argumen berbasis data, dan penegasan ulang.", e: "Menulis eksposisi 'Kantin Sehat Mencerdaskan Siswa' dengan minimal dua argumen bersumber." }
  ],
  focus: [
    ["Pengertian", "Teks eksposisi memaparkan gagasan/pendapat penulis yang didukung argumen dan fakta untuk meyakinkan pembaca."],
    ["Struktur", "Tesis → Argumentasi (alasan + fakta/data) → Penegasan ulang."],
    ["Kebahasaan", "Kata teknis, konjungsi kausal (karena, sebab, sehingga), kata kerja mental (menduga, memprediksi), kata rujukan (berdasarkan, menurut)."],
    ["Fakta vs opini", "Fakta dapat dibuktikan; opini adalah pendapat. Eksposisi yang kuat memadukan opini dengan fakta."],
    ["Kredibilitas sumber", "Periksa penulis, lembaga, data, tanggal, dan bandingkan dengan sumber lain."],
    ["Mengkritisi argumen", "Apakah datanya relevan, cukup, dan logis? Adakah kesalahan nalar (generalisasi berlebihan)?"]
  ],
  model: "Tesis: [[Remaja perlu tidur 8–10 jam setiap malam agar prestasi belajar meningkat.]]\n\nArgumentasi: [[Pertama]], kurang tidur menurunkan konsentrasi. [[Berdasarkan]] berbagai penelitian kesehatan remaja, siswa yang tidur kurang dari 7 jam lebih mudah mengantuk di kelas. [[Selain itu]], tidur cukup membantu otak menyimpan informasi yang dipelajari [[sehingga]] hafalan bertahan lebih lama.\n\nPenegasan ulang: [[Oleh karena itu]], kebiasaan begadang bermain gawai perlu dikurangi demi kesehatan dan prestasi.\n\nPerhatikan: [[tesis]] di awal, [[kata rujukan]] (berdasarkan), [[konjungsi]] (selain itu, sehingga, oleh karena itu), dan [[penegasan ulang]] di akhir.",
  diag: [
    { q: "Kalimat yang merupakan fakta adalah …", o: ["Makanan kantin itu paling enak.", "Indonesia memiliki lebih dari 17.000 pulau.", "Sebaiknya semua siswa suka membaca.", "Film itu membosankan."], a: 1, w: "Fakta dapat dibuktikan kebenarannya." },
    { q: "Kata 'kredibel' berarti …", o: ["dapat dipercaya", "sangat mahal", "mudah dibaca", "sangat panjang"], a: 0, w: "Kredibel = dapat dipercaya." },
    { q: "Konjungsi yang menyatakan sebab adalah …", o: ["karena", "tetapi", "lalu", "atau"], a: 0, w: "Karena = konjungsi kausal." },
    { q: "Tujuan teks eksposisi adalah …", o: ["menghibur dengan cerita lucu", "meyakinkan pembaca dengan argumen dan fakta", "menceritakan riwayat hidup", "memberi langkah-langkah memasak"], a: 1, w: "Eksposisi memaparkan dan meyakinkan." },
    { q: "Informasi kesehatan paling tepercaya berasal dari …", o: ["akun anonim", "situs Kementerian Kesehatan", "pesan berantai", "iklan obat tanpa izin"], a: 1, w: "Lembaga resmi lebih kredibel." }
  ],
  form: [
    { q: "Bagian teks eksposisi yang berisi pendapat utama penulis adalah …", o: ["tesis", "argumentasi", "penegasan ulang", "orientasi"], a: 0, w: "Tesis = pendapat utama." },
    { q: "Bagian yang berisi alasan dan bukti disebut …", o: ["argumentasi", "koda", "abstraksi", "reorientasi"], a: 0, w: "Argumentasi mendukung tesis." },
    { q: "'Berdasarkan data BPS, …' Kata 'berdasarkan' berfungsi sebagai …", o: ["kata rujukan", "kata seru", "kata perintah", "kata sifat"], a: 0, w: "Menunjukkan sumber rujukan." },
    { q: "Contoh kata kerja mental adalah …", o: ["menduga", "berlari", "memasak", "melompat"], a: 0, w: "Kata kerja mental: menduga, memprediksi, menyimpulkan." },
    { q: "Argumen 'Semua remaja malas membaca karena temanku malas membaca' mengandung kesalahan …", o: ["generalisasi berlebihan", "penggunaan data resmi", "kalimat baku", "konjungsi yang tepat"], a: 0, w: "Satu contoh tidak bisa mewakili semua." },
    { q: "Penegasan ulang berfungsi untuk …", o: ["menegaskan kembali tesis", "memperkenalkan tokoh", "menyajikan konflik", "membuka cerita"], a: 0, w: "Penegasan ulang memperkuat tesis." },
    { q: "Konjungsi yang tepat: 'Siswa kurang tidur ___ sulit berkonsentrasi.'", o: ["sehingga", "meskipun", "atau", "namun"], a: 0, w: "Sebab–akibat: sehingga." },
    { q: "Cara terbaik menilai kredibilitas video edukasi adalah …", o: ["melihat jumlah suka saja", "memeriksa siapa pembuatnya dan membandingkan dengan sumber resmi", "percaya karena viral", "melihat warna videonya"], a: 1, w: "Periksa pembuat + bandingkan sumber." }
  ],
  quiz: [
    { q: "Bacalah: 'Penggunaan gawai sebelum tidur sebaiknya dibatasi. Cahaya biru layar dapat mengganggu hormon tidur. Selain itu, notifikasi membuat otak terus waspada. Jadi, letakkan gawai satu jam sebelum tidur.' Tesis teks tersebut adalah …", o: ["Cahaya biru mengganggu hormon tidur.", "Penggunaan gawai sebelum tidur sebaiknya dibatasi.", "Notifikasi membuat otak waspada.", "Letakkan gawai satu jam sebelum tidur."], a: 1, w: "Kalimat pertama = pendapat utama." },
    { q: "Kalimat 'Jadi, letakkan gawai satu jam sebelum tidur' berfungsi sebagai …", o: ["penegasan ulang/saran", "tesis", "argumen pertama", "orientasi"], a: 0, w: "Penutup yang menegaskan kembali." },
    { q: "Argumen yang paling kuat untuk mendukung 'Sarapan penting bagi siswa' adalah …", o: ["Ibuku selalu menyuruhku sarapan.", "Penelitian gizi menunjukkan sarapan membantu konsentrasi belajar di pagi hari.", "Sarapan itu enak.", "Semua orang sarapan."], a: 1, w: "Berbasis penelitian/data." },
    { q: "Sebuah unggahan menyebut 'Air kelapa menyembuhkan semua penyakit!' tanpa sumber. Sikap kritis yang tepat adalah …", o: ["langsung membagikannya", "memeriksa ke sumber kesehatan resmi sebelum percaya", "menambahkan komentar setuju", "mengabaikan semua informasi kesehatan"], a: 1, w: "Klaim berlebihan tanpa sumber perlu diverifikasi." },
    { q: "Perbedaan opini dan fakta dalam eksposisi adalah …", o: ["opini dapat dibuktikan, fakta tidak", "fakta dapat dibuktikan, opini berupa pendapat", "keduanya sama", "opini selalu salah"], a: 1, w: "Fakta terbukti; opini = pendapat." },
    { q: "Membandingkan isi dua teks eksposisi bertopik sama bertujuan untuk …", o: ["menilai argumen mana yang lebih logis dan didukung data", "mencari teks yang lebih panjang", "menyalin teks", "menghitung jumlah paragraf"], a: 0, w: "Membandingkan untuk mengevaluasi kualitas argumen." }
  ],
  task: "Pilih satu isu kesehatan atau lingkungan remaja (begadang, rokok elektrik, jajanan tidak sehat, sampah plastik). Cari dua teks eksposisi/artikel opini bertopik sama. Bandingkan: tesis, argumen, data, dan kredibilitas sumber dalam tabel.\n\nTulis teks eksposisimu sendiri (250 kata) dengan tesis, minimal dua argumen bersumber, dan penegasan ulang.",
  disc: "Kamu menemukan video viral berisi tips kesehatan yang meragukan. Langkah apa saja yang kamu lakukan untuk menilai kredibilitasnya? Bagikan daftar periksamu.",
  meet: [
    { jp: "2 JP", topic: "Memahami: struktur, kebahasaan, fakta–opini", act: "Menyimak siniar eksposisi → peta tesis–argumen–penegasan; memilah fakta dan opini." },
    { jp: "2 JP", topic: "Mengaplikasi: membandingkan dan mengevaluasi kredibilitas", act: "Detektif sumber: membandingkan dua teks + satu data resmi; menemukan kesalahan nalar." },
    { jp: "2 JP", topic: "Merefleksi: menulis eksposisi berbasis data", act: "Menulis eksposisi → umpan balik sebaya dengan daftar periksa argumen." }
  ],
  proj: {
    title: "Rubrik Opini 'Suara Siswa'",
    steps: ["Pilih isu nyata di sekolah atau masyarakat sekitar.", "Kumpulkan minimal dua data dari sumber kredibel.", "Tulis teks eksposisi 250 kata (tesis–argumentasi–penegasan ulang).", "Minta dua teman menilai kekuatan argumen dengan rubrik.", "Publikasikan di mading atau blog sekolah."],
    rub: [["Kejelasan tesis", "20"], ["Kekuatan argumen & data", "35"], ["Kebahasaan (konjungsi, kata rujukan)", "25"], ["Publikasi", "20"]]
  },
  refl: ["Bagaimana caramu membedakan fakta dan opini sekarang?", "Sumber mana yang paling kamu percaya, dan mengapa?", "Argumen mana dalam tulisanmu yang paling kuat?", "Pernahkah kamu hampir membagikan informasi yang salah? Apa pelajarannya?"]
});

UNITS.push({
  n: 3, el: 3, sem: 1, emoji: "😄",
  title: "Teks Anekdot: Kritik Sosial yang Jenaka",
  desc: "Menikmati, menyusun, dan mempresentasikan anekdot dalam bentuk monolog atau dialog untuk menyampaikan kritik sosial secara ringan namun bermakna.",
  tp: [
    { c: "ATP 4", t: "Menginterpretasi pesan tersirat dan kritik sosial dalam anekdot visual/audiovisual serta mengungkapkan kepedulian secara kreatif.", e: "Menafsirkan kritik dalam video anekdot tentang antrean layanan publik." },
    { c: "ATP 5", t: "Menulis naskah anekdot dan mempresentasikannya dalam bentuk monolog atau dialog dengan intonasi dan ekspresi yang tepat.", e: "Menulis dan memerankan dialog anekdot tentang kebiasaan buang sampah sembarangan." },
    { c: "ATP 1", t: "Mengevaluasi pesan dan kelucuan anekdot yang disimak.", e: "Menyimak dua anekdot lalu menilai mana yang kritiknya lebih tajam namun tetap santun." }
  ],
  focus: [
    ["Pengertian", "Anekdot adalah cerita singkat yang lucu dan mengandung kritik sosial atau pesan moral."],
    ["Struktur", "Abstraksi → Orientasi → Krisis → Reaksi → Koda."],
    ["Ciri", "Lucu, menyindir, bersifat menggelitik, mengandung kritik terhadap fenomena/layanan publik."],
    ["Kebahasaan", "Kalimat langsung, kalimat tanya retoris, konjungsi temporal (lalu, kemudian), kata kerja aksi."],
    ["Monolog vs dialog", "Monolog: satu penutur; dialog: dua tokoh atau lebih — perhatikan intonasi, jeda, ekspresi."],
    ["Etika humor", "Kritik ditujukan pada perilaku/kebijakan, bukan merendahkan SARA atau fisik seseorang."]
  ],
  model: "Abstraksi: [[Di sebuah kelurahan]], ada kejadian lucu soal tempat sampah.\nOrientasi: Pak RT memasang [[papan bertuliskan 'Buanglah Sampah pada Tempatnya']] di dekat pantai.\nKrisis: Seminggu kemudian, sampah justru [[menumpuk di bawah papan itu]].\nReaksi: Pak RT bertanya, [[\"Kenapa kalian buang sampah di sini?\"]] Warga menjawab, [[\"Lho, kan papannya bilang tempatnya di sini, Pak!\"]]\nKoda: [[Ternyata, papan imbauan tidak cukup tanpa tempat sampah yang benar-benar tersedia.]]\n\nPerhatikan: [[struktur lima bagian]], [[kalimat langsung]], dan [[kritik sosial]] yang disampaikan secara jenaka.",
  diag: [
    { q: "Teks lucu yang mengandung sindiran disebut …", o: ["anekdot", "laporan", "biografi", "prosedur"], a: 0, w: "Anekdot = cerita lucu bermuatan kritik." },
    { q: "Tujuan utama anekdot adalah …", o: ["mengkritik secara jenaka", "memberi langkah kerja", "melaporkan data ilmiah", "menceritakan riwayat hidup"], a: 0, w: "Kritik + humor." },
    { q: "Kalimat langsung ditandai dengan …", o: ["tanda petik", "tanda kurung", "titik dua saja", "garis miring"], a: 0, w: "Kalimat langsung memakai tanda petik." },
    { q: "Humor yang TIDAK pantas dalam anekdot adalah …", o: ["menyindir kebiasaan antre yang buruk", "merendahkan suku atau agama tertentu", "menyindir pelayanan lambat", "menyindir kebiasaan membuang sampah"], a: 1, w: "Hindari humor yang menyinggung SARA." },
    { q: "Monolog adalah …", o: ["percakapan seorang diri", "percakapan dua orang", "tulisan ilmiah", "lagu daerah"], a: 0, w: "Mono = satu penutur." }
  ],
  form: [
    { q: "Bagian anekdot yang berisi puncak masalah atau kejadian janggal adalah …", o: ["krisis", "abstraksi", "koda", "orientasi"], a: 0, w: "Krisis = puncak masalah." },
    { q: "Bagian yang menggambarkan gambaran umum isi cerita di awal adalah …", o: ["abstraksi", "reaksi", "koda", "krisis"], a: 0, w: "Abstraksi = pembuka/gambaran umum." },
    { q: "Koda berisi …", o: ["penutup/simpulan cerita", "pengenalan tokoh", "konflik", "data statistik"], a: 0, w: "Koda = penutup." },
    { q: "Pertanyaan retoris adalah pertanyaan yang …", o: ["tidak memerlukan jawaban", "harus dijawab dengan angka", "diajukan kepada guru", "berisi perintah"], a: 0, w: "Retoris = tidak butuh jawaban, untuk menyindir." },
    { q: "Konjungsi temporal yang tepat adalah …", o: ["kemudian", "karena", "tetapi", "jika"], a: 0, w: "Kemudian menyatakan urutan waktu." },
    { q: "Saat mempresentasikan anekdot secara lisan, hal yang paling penting adalah …", o: ["intonasi dan ekspresi yang mendukung kelucuan", "membaca secepat mungkin", "suara sangat pelan", "tidak menatap audiens"], a: 0, w: "Intonasi & ekspresi menghidupkan humor." },
    { q: "Sasaran kritik anekdot yang etis adalah …", o: ["perilaku atau kebijakan", "kekurangan fisik seseorang", "agama tertentu", "nama keluarga seseorang"], a: 0, w: "Kritik pada perilaku, bukan pribadi/SARA." },
    { q: "Bagian reaksi berisi …", o: ["tanggapan tokoh terhadap krisis", "judul cerita", "daftar pustaka", "kalimat definisi"], a: 0, w: "Reaksi = cara tokoh menanggapi masalah." }
  ],
  quiz: [
    { q: "Bacalah: 'Seorang warga bertanya kepada petugas, \"Pak, kenapa jalan ini diperbaiki terus tapi tetap berlubang?\" Petugas menjawab, \"Supaya kami tetap punya pekerjaan, Pak!\"' Kritik dalam anekdot ini ditujukan pada …", o: ["kualitas perbaikan jalan", "cuaca buruk", "kendaraan warga", "petugas kesehatan"], a: 0, w: "Sindiran terhadap perbaikan yang tidak tuntas." },
    { q: "Pada anekdot di atas, jawaban petugas termasuk bagian …", o: ["reaksi", "abstraksi", "orientasi", "koda"], a: 0, w: "Tanggapan terhadap pertanyaan krisis." },
    { q: "Ciri yang membedakan anekdot dengan cerita lucu biasa adalah …", o: ["adanya kritik sosial atau pesan", "adanya tokoh", "panjang ceritanya", "memakai bahasa Indonesia"], a: 0, w: "Anekdot selalu membawa kritik/pesan." },
    { q: "Urutan struktur anekdot yang benar adalah …", o: ["abstraksi–orientasi–krisis–reaksi–koda", "orientasi–koda–krisis–abstraksi–reaksi", "krisis–reaksi–abstraksi–koda–orientasi", "koda–abstraksi–orientasi–reaksi–krisis"], a: 0, w: "Abstraksi → orientasi → krisis → reaksi → koda." },
    { q: "Pesan tersirat anekdot tentang papan 'Buanglah Sampah pada Tempatnya' adalah …", o: ["imbauan harus disertai fasilitas yang memadai", "papan imbauan tidak perlu", "warga tidak suka papan", "sampah harus dibakar"], a: 0, w: "Kritik terhadap imbauan tanpa fasilitas." },
    { q: "Mengubah anekdot tertulis menjadi dialog di depan kelas melatih kemampuan …", o: ["berbicara dan mempresentasikan secara kreatif", "menghitung data", "menulis puisi", "membuat prosedur"], a: 0, w: "Elemen Berbicara dan Mempresentasikan." }
  ],
  task: "Amati satu fenomena sosial di sekitarmu yang layak dikritik (antrean, kebersihan, ketertiban lalu lintas, budaya mencontek). Tulis naskah anekdot berbentuk dialog (2–3 tokoh) dengan struktur abstraksi–orientasi–krisis–reaksi–koda.\n\nLatih dan rekam penampilanmu (maksimal 3 menit). Pastikan kritiknya santun dan tidak menyinggung SARA.",
  disc: "Fenomena sosial apa yang menurutmu paling pas disindir lewat anekdot? Bagaimana caranya agar kritik tetap lucu tetapi tidak menyakiti siapa pun?",
  meet: [
    { jp: "2 JP", topic: "Memahami: struktur, ciri, dan kritik dalam anekdot", act: "Menonton dua video anekdot → menafsirkan pesan tersirat dan sasaran kritik." },
    { jp: "2 JP", topic: "Mengaplikasi: menulis naskah anekdot monolog/dialog", act: "Curah gagasan isu sosial → menyusun naskah berpasangan dengan lima bagian struktur." },
    { jp: "2 JP", topic: "Merefleksi: pentas anekdot & umpan balik", act: "Pentas di depan kelas/rekaman → penilaian kelucuan, kejelasan pesan, dan etika humor." }
  ],
  proj: {
    title: "Panggung Anekdot Kelas",
    steps: ["Pilih isu sosial di lingkungan sekolah/masyarakat.", "Tulis naskah anekdot dialog atau monolog lengkap dengan lima bagian struktur.", "Latih intonasi, jeda, dan ekspresi bersama kelompok.", "Pentaskan langsung atau rekam video maksimal 3 menit.", "Refleksikan respons audiens dan perbaiki naskah."],
    rub: [["Struktur & kejelasan kritik", "30"], ["Kreativitas humor yang santun", "25"], ["Penampilan (intonasi, ekspresi)", "30"], ["Refleksi & perbaikan", "15"]]
  },
  refl: ["Kritik apa yang ingin kamu sampaikan lewat anekdotmu?", "Bagaimana reaksi audiens? Apa yang membuat mereka tertawa atau berpikir?", "Bagaimana kamu menjaga agar humor tetap santun?", "Bagian penampilan apa yang ingin kamu tingkatkan?"]
});

UNITS.push({
  n: 4, el: 1, sem: 1, emoji: "📜",
  title: "Hikayat dan Cerita Rakyat Maluku Utara (Sastra Aural)",
  desc: "Menyimak hikayat dan cerita rakyat, mengevaluasi unsur intrinsik–ekstrinsiknya, lalu membandingkannya dengan cerpen modern.",
  tp: [
    { c: "ATP 2", t: "Mengevaluasi unsur intrinsik dan ekstrinsik hikayat/cerita rakyat yang disimak serta membandingkannya dengan cerpen untuk menemukan pesan dan nilai.", e: "Menyimak 'Hikayat Bayan Budiman' lalu membandingkan tema dan nilainya dengan cerpen remaja." },
    { c: "ATP 4", t: "Menginterpretasi nilai budaya, moral, dan religius dalam cerita rakyat serta mengungkapkannya secara kreatif.", e: "Menuliskan nilai-nilai dalam cerita rakyat Ternate dalam bentuk infografis." },
    { c: "ATP 5", t: "Menceritakan kembali hikayat/cerita rakyat dengan bahasa masa kini secara lisan.", e: "Menceritakan ulang cerita rakyat Maluku Utara dalam video berdurasi 3 menit." }
  ],
  focus: [
    ["Pengertian hikayat", "Prosa lama Melayu yang mengisahkan kehidupan istana, kesaktian, dan keajaiban."],
    ["Ciri hikayat", "Istana sentris, kemustahilan, kesaktian, anonim, bahasa arkais (sahibulhikayat, maka, hatta)."],
    ["Unsur intrinsik", "Tema, alur, latar, tokoh & penokohan, sudut pandang, gaya bahasa, amanat."],
    ["Unsur ekstrinsik", "Nilai budaya, moral, religius, sosial, dan latar belakang masyarakat saat cerita lahir."],
    ["Menyimak sastra aural", "Catat tokoh, peristiwa penting, dan nilai saat mendengarkan; perhatikan intonasi pencerita."],
    ["Hikayat vs cerpen", "Hikayat: istana sentris, mustahil, arkais; cerpen: realistis, latar modern, bahasa masa kini."]
  ],
  model: "[[Sahibulhikayat]], tersebutlah seorang saudagar yang hendak berlayar. Ia menitipkan istrinya kepada [[seekor burung bayan]] yang pandai berbicara. Setiap kali sang istri hendak berbuat tidak setia, [[sang bayan bercerita]] tentang kisah-kisah yang mengandung nasihat hingga pagi tiba.\n\nUnsur intrinsik: [[tema kesetiaan]], tokoh bayan yang [[bijaksana]], alur maju, latar negeri antah berantah.\nCiri hikayat: [[kemustahilan]] (burung berbicara), [[bahasa arkais]] (sahibulhikayat, tersebutlah).\nNilai: [[moral]] — kesetiaan dan kebijaksanaan menahan diri.",
  diag: [
    { q: "Hikayat termasuk jenis karya sastra …", o: ["prosa lama", "puisi modern", "drama modern", "teks ilmiah"], a: 0, w: "Hikayat = prosa lama Melayu." },
    { q: "Kata 'sahibulhikayat' biasanya terdapat pada bagian …", o: ["awal cerita", "daftar pustaka", "akhir laporan", "judul berita"], a: 0, w: "Pembuka khas hikayat." },
    { q: "Amanat adalah …", o: ["pesan yang ingin disampaikan pengarang", "nama tokoh utama", "tempat kejadian", "jumlah paragraf"], a: 0, w: "Amanat = pesan cerita." },
    { q: "Cerita rakyat diwariskan secara …", o: ["lisan dari generasi ke generasi", "melalui undang-undang", "dalam laporan ilmiah", "lewat iklan"], a: 0, w: "Tradisi lisan." },
    { q: "Tokoh yang memiliki sifat baik disebut …", o: ["protagonis", "antagonis", "figuran", "narator"], a: 0, w: "Protagonis = tokoh baik/utama." }
  ],
  form: [
    { q: "Ciri hikayat yang ditunjukkan oleh tokoh burung yang dapat berbicara adalah …", o: ["kemustahilan", "anonim", "istana sentris", "realistis"], a: 0, w: "Hal yang tidak masuk akal = kemustahilan." },
    { q: "Hikayat disebut anonim karena …", o: ["pengarangnya tidak diketahui", "tokohnya tanpa nama", "tidak memiliki judul", "tidak memiliki amanat"], a: 0, w: "Anonim = tanpa nama pengarang." },
    { q: "Nilai yang berkaitan dengan ajaran agama disebut nilai …", o: ["religius", "estetis", "ekonomi", "politik"], a: 0, w: "Religius = keagamaan." },
    { q: "Contoh kata arkais adalah …", o: ["hatta", "gawai", "internet", "ponsel"], a: 0, w: "Hatta = kemudian (bahasa lama)." },
    { q: "Unsur ekstrinsik karya sastra adalah …", o: ["nilai budaya dan latar belakang masyarakat", "alur dan latar", "tokoh dan penokohan", "sudut pandang"], a: 0, w: "Ekstrinsik = di luar teks." },
    { q: "Saat menyimak cerita rakyat yang dibacakan, strategi yang paling tepat adalah …", o: ["mencatat tokoh, peristiwa penting, dan pesan", "menghitung jumlah kata", "menghafal seluruh kalimat", "mengabaikan intonasi pencerita"], a: 0, w: "Catatan terarah membantu evaluasi." },
    { q: "Perbedaan utama hikayat dan cerpen terletak pada …", o: ["latar dan unsur kemustahilan", "penggunaan huruf", "jumlah halaman saja", "warna sampul"], a: 0, w: "Hikayat istana sentris & mustahil; cerpen realistis." },
    { q: "Istilah 'istana sentris' berarti …", o: ["cerita berpusat pada kehidupan istana", "cerita tentang bangunan", "cerita di sekolah", "cerita tanpa tokoh"], a: 0, w: "Berpusat pada raja/istana." }
  ],
  quiz: [
    { q: "Dalam sebuah cerita rakyat Ternate, sebuah kampung tenggelam dan berubah menjadi danau karena warganya melanggar adat. Nilai yang paling menonjol adalah …", o: ["pentingnya menaati norma dan adat", "pentingnya berdagang", "pentingnya berlayar", "pentingnya kekayaan"], a: 0, w: "Pesan: taat norma/adat." },
    { q: "Cerita di atas termasuk jenis cerita rakyat …", o: ["legenda (asal-usul tempat)", "fabel", "biografi", "anekdot"], a: 0, w: "Asal-usul tempat = legenda." },
    { q: "Kalimat 'Hatta, baginda pun murka' menggunakan kata arkais, yaitu …", o: ["hatta", "baginda", "murka", "pun"], a: 0, w: "Hatta = kemudian/setelah itu." },
    { q: "Membandingkan hikayat dengan cerpen bertujuan untuk …", o: ["menemukan persamaan dan perbedaan nilai serta unsur ceritanya", "menentukan teks yang lebih panjang", "mengganti judul", "menghapus amanat"], a: 0, w: "Membandingkan unsur dan nilai." },
    { q: "Hikayat yang mengisahkan kesetiaan dan kebijaksanaan melalui tokoh burung adalah …", o: ["Hikayat Bayan Budiman", "Hikayat Hang Tuah", "Malin Kundang", "Laskar Pelangi"], a: 0, w: "Tokoh utamanya burung bayan." },
    { q: "Ketika menceritakan kembali hikayat dengan bahasa masa kini, hal yang harus tetap dipertahankan adalah …", o: ["alur pokok dan amanat cerita", "seluruh kata arkais", "nama pengarang", "panjang teks aslinya"], a: 0, w: "Inti cerita & pesan dipertahankan." }
  ],
  task: "Simak satu hikayat dan satu cerita rakyat Maluku Utara (dibacakan guru, rekaman audio, atau video). Isi tabel unsur intrinsik (tema, tokoh, alur, latar, amanat) dan ekstrinsik (nilai budaya, moral, religius, sosial).\n\nBandingkan salah satunya dengan cerpen remaja bertema serupa. Lalu ceritakan kembali cerita rakyat tersebut dengan bahasa masa kini dalam rekaman suara/video 3 menit.",
  disc: "Cerita rakyat apa dari Ternate atau Maluku Utara yang pernah kamu dengar dari keluarga? Nilai apa yang menurutmu masih relevan untuk remaja sekarang?",
  meet: [
    { jp: "2 JP", topic: "Memahami: ciri hikayat, unsur intrinsik & ekstrinsik", act: "Menyimak pembacaan hikayat → mencatat tokoh, alur, nilai; menandai kata arkais." },
    { jp: "2 JP", topic: "Mengaplikasi: membandingkan hikayat, cerita rakyat, dan cerpen", act: "Diagram Venn perbandingan → diskusi nilai yang relevan masa kini." },
    { jp: "2 JP", topic: "Merefleksi: menceritakan kembali dengan bahasa masa kini", act: "Bercerita berkelompok/rekam video → umpan balik intonasi dan kesetiaan pada amanat." }
  ],
  proj: {
    title: "Arsip Suara Cerita Rakyat Maluku Utara",
    steps: ["Wawancarai orang tua/tokoh masyarakat tentang satu cerita rakyat daerah.", "Catat versi lisan tersebut dan identifikasi unsur intrinsik serta nilainya.", "Tulis ulang dengan bahasa masa kini tanpa mengubah amanat.", "Rekam pembacaan/penceritaan dengan intonasi yang menarik.", "Kumpulkan dalam arsip suara kelas dan bagikan ke perpustakaan sekolah."],
    rub: [["Ketepatan unsur & nilai", "30"], ["Kesetiaan pada amanat cerita", "20"], ["Kualitas penceritaan lisan", "30"], ["Kelengkapan arsip & sumber", "20"]]
  },
  refl: ["Nilai apa dari cerita rakyat yang paling berkesan bagimu?", "Apa tantangan menyimak cerita tanpa teks tertulis?", "Bagaimana kamu menjaga amanat saat mengubah bahasa cerita?", "Mengapa cerita rakyat daerah perlu dilestarikan?"]
});
/* ===== SEMESTER 2 ===== */
UNITS.push({
  n: 5, el: 3, sem: 2, emoji: "🤝",
  title: "Teks Negosiasi: Berunding dengan Santun",
  desc: "Memahami, menyusun, dan memerankan negosiasi dalam situasi nyata — dari tawar-menawar di pasar hingga rapat OSIS.",
  tp: [
    { c: "ATP 1", t: "Mengevaluasi gagasan, pandangan, dan arahan dalam negosiasi yang disimak.", e: "Menyimak rekaman negosiasi pedagang–pembeli di Pasar Gamalama dan menilai strategi kedua pihak." },
    { c: "ATP 5", t: "Menyusun dan memerankan dialog negosiasi secara sistematis, kritis, dan santun.", e: "Memerankan negosiasi OSIS dengan kepala sekolah tentang jadwal pentas seni." },
    { c: "ATP 4", t: "Mengungkapkan kepedulian dan empati terhadap kepentingan pihak lain dalam negosiasi.", e: "Menuliskan alternatif solusi yang menguntungkan kedua pihak (win-win solution)." }
  ],
  focus: [
    ["Pengertian", "Negosiasi adalah interaksi untuk mencapai kesepakatan antara pihak yang memiliki kepentingan berbeda."],
    ["Struktur", "Orientasi → Pengajuan → Penawaran → Persetujuan → Penutup."],
    ["Kebahasaan", "Kalimat persuasif, kalimat permintaan & penolakan yang santun, kalimat bersyarat (jika…, maka…)."],
    ["Prinsip", "Santun, saling menghargai, jujur, mencari solusi yang menguntungkan bersama (win-win)."],
    ["Ungkapan santun", "'Bagaimana kalau…?', 'Mohon maaf, kami belum bisa…', 'Kami setuju dengan syarat…'"],
    ["Konteks", "Jual beli, kerja sama, sekolah/OSIS, keluarga, dunia kerja."]
  ],
  model: "Orientasi: [[\"Selamat pagi, Pak. Kami dari OSIS ingin menyampaikan rencana pentas seni.\"]]\nPengajuan: [[\"Kami mengusulkan pentas diadakan dua hari, Jumat dan Sabtu.\"]]\nPenawaran: Kepala sekolah: [[\"Dua hari terlalu lama karena mengganggu pelajaran. Bagaimana kalau satu hari saja, pada hari Sabtu?\"]] OSIS: [[\"Jika satu hari, kami mohon jam mulai pukul 08.00 agar semua kelas dapat tampil.\"]]\nPersetujuan: [[\"Baik, saya setuju dengan syarat kelas tetap bersih setelah acara.\"]]\nPenutup: [[\"Terima kasih, Pak. Kami akan menyiapkan proposalnya.\"]]\n\nPerhatikan: [[ungkapan santun]], [[kalimat bersyarat]], dan [[kesepakatan yang menguntungkan kedua pihak]].",
  diag: [
    { q: "Kegiatan tawar-menawar di pasar termasuk contoh …", o: ["negosiasi", "debat", "pidato", "puisi"], a: 0, w: "Tawar-menawar = negosiasi." },
    { q: "Tujuan negosiasi adalah …", o: ["mencapai kesepakatan", "mengalahkan lawan", "menghibur penonton", "menulis laporan"], a: 0, w: "Negosiasi mencari kesepakatan." },
    { q: "Kalimat penolakan yang santun adalah …", o: ["Tidak mau!", "Mohon maaf, kami belum bisa menerima harga tersebut.", "Kamu salah!", "Pergi sana!"], a: 1, w: "Penolakan santun disertai permohonan maaf." },
    { q: "'Win-win solution' berarti …", o: ["solusi yang menguntungkan kedua pihak", "solusi yang menguntungkan satu pihak", "kalah bersama", "tidak ada solusi"], a: 0, w: "Sama-sama untung." },
    { q: "Kalimat bersyarat ditandai dengan kata …", o: ["jika", "dan", "lalu", "atau"], a: 0, w: "Jika/apabila … maka …" }
  ],
  form: [
    { q: "Bagian negosiasi yang berisi permintaan pertama pihak pertama adalah …", o: ["pengajuan", "penutup", "orientasi", "persetujuan"], a: 0, w: "Pengajuan = permintaan awal." },
    { q: "Urutan struktur negosiasi yang tepat adalah …", o: ["orientasi–pengajuan–penawaran–persetujuan–penutup", "penawaran–orientasi–penutup–pengajuan–persetujuan", "persetujuan–penawaran–pengajuan–orientasi–penutup", "penutup–orientasi–pengajuan–penawaran–persetujuan"], a: 0, w: "Orientasi → pengajuan → penawaran → persetujuan → penutup." },
    { q: "'Bagaimana kalau harganya Rp40.000 saja?' termasuk bagian …", o: ["penawaran", "orientasi", "penutup", "abstraksi"], a: 0, w: "Tawaran harga = penawaran." },
    { q: "Prinsip negosiasi yang baik adalah …", o: ["santun dan saling menghargai", "memaksakan kehendak", "berbohong agar menang", "menghina pihak lain"], a: 0, w: "Negosiasi beretika." },
    { q: "'Saya setuju dengan syarat …' menunjukkan …", o: ["persetujuan bersyarat", "penolakan mutlak", "orientasi", "salam pembuka"], a: 0, w: "Setuju dengan syarat tertentu." },
    { q: "Kalimat persuasif yang tepat dalam negosiasi adalah …", o: ["Produk ini tahan lama sehingga Ibu lebih hemat dalam jangka panjang.", "Beli saja, jangan banyak tanya!", "Terserah Ibu.", "Saya tidak peduli."], a: 0, w: "Membujuk dengan alasan logis." },
    { q: "Saat menyimak negosiasi, hal yang perlu dievaluasi adalah …", o: ["kejelasan kepentingan dan kesantunan kedua pihak", "warna pakaian penutur", "jumlah kata", "nama lokasi saja"], a: 0, w: "Evaluasi isi & strategi negosiasi." },
    { q: "Bagian penutup negosiasi biasanya berisi …", o: ["ucapan terima kasih dan salam", "pengajuan harga", "data statistik", "puncak konflik"], a: 0, w: "Penutup = salam/terima kasih." }
  ],
  quiz: [
    { q: "Bacalah: Pembeli: 'Ikan cakalang ini berapa, Bu?' Penjual: 'Rp60.000 sekilo.' Pembeli: 'Bisa Rp50.000, Bu?' Penjual: 'Rp55.000 ya, karena masih segar.' Pembeli: 'Baik, saya ambil dua kilo.' Bagian persetujuan ditunjukkan oleh …", o: ["'Baik, saya ambil dua kilo.'", "'Ikan cakalang ini berapa, Bu?'", "'Rp60.000 sekilo.'", "'Bisa Rp50.000, Bu?'"], a: 0, w: "Pembeli menyetujui harga akhir." },
    { q: "Pada dialog di atas, alasan penjual mempertahankan harga Rp55.000 adalah …", o: ["ikannya masih segar", "ikannya sudah habis", "pembeli tidak sopan", "pasar akan tutup"], a: 0, w: "'Karena masih segar.'" },
    { q: "Negosiasi dianggap berhasil apabila …", o: ["kedua pihak mencapai kesepakatan yang dapat diterima", "satu pihak menang mutlak", "kedua pihak bertengkar", "tidak ada yang berbicara"], a: 0, w: "Kesepakatan bersama." },
    { q: "Ungkapan yang menunjukkan empati terhadap pihak lain adalah …", o: ["Saya memahami kesulitan Bapak, bagaimana kalau kita cari jalan tengah?", "Itu urusan Bapak.", "Pokoknya harus begitu.", "Saya tidak mau tahu."], a: 0, w: "Memahami + menawarkan solusi." },
    { q: "Kalimat bersyarat yang tepat dalam negosiasi adalah …", o: ["Jika pesanan lebih dari 50, kami beri potongan 10%.", "Kami beri potongan.", "Tidak ada potongan.", "Potongan itu baik."], a: 0, w: "Jika … maka … (bersyarat)." },
    { q: "Negosiasi berbeda dengan debat karena negosiasi …", o: ["bertujuan mencapai kesepakatan bersama", "bertujuan menentukan pemenang", "tidak memakai bahasa santun", "hanya dilakukan secara tertulis"], a: 0, w: "Negosiasi = sepakat; debat = adu argumen." }
  ],
  task: "Rekam atau amati satu negosiasi nyata (pasar, toko daring, keluarga, rapat kelas). Tuliskan transkripnya lalu tandai struktur dan ungkapan santun.\n\nBersama kelompok, susun naskah negosiasi untuk situasi sekolah (dana kegiatan kelas, jadwal ekstrakurikuler, kerja sama kantin) dan perankan dalam 4–5 menit.",
  disc: "Pernahkah kamu bernegosiasi dengan orang tua atau teman? Ceritakan bagaimana kalian mencapai kesepakatan dan ungkapan apa yang membantu.",
  meet: [
    { jp: "2 JP", topic: "Memahami: struktur & kebahasaan negosiasi", act: "Menyimak rekaman negosiasi pasar → menandai struktur dan strategi tiap pihak." },
    { jp: "2 JP", topic: "Mengaplikasi: menyusun naskah negosiasi", act: "Kartu situasi (OSIS, kantin, kelas) → menyusun naskah berkelompok dengan ungkapan santun." },
    { jp: "2 JP", topic: "Merefleksi: simulasi negosiasi & evaluasi", act: "Simulasi bermain peran → penilaian kesantunan, logika, dan hasil kesepakatan." }
  ],
  proj: {
    title: "Simulasi Negosiasi 'Proyek Kelas Kita'",
    steps: ["Identifikasi kebutuhan nyata kelas yang memerlukan persetujuan pihak lain.", "Susun daftar kepentingan, alasan, dan alternatif solusi.", "Tulis naskah negosiasi lengkap lima bagian struktur.", "Perankan simulasi dan rekam videonya.", "Evaluasi hasil: apakah kesepakatan menguntungkan kedua pihak?"],
    rub: [["Struktur & logika negosiasi", "30"], ["Kesantunan & empati", "25"], ["Penampilan bermain peran", "25"], ["Kualitas solusi (win-win)", "20"]]
  },
  refl: ["Strategi negosiasi apa yang paling berhasil dalam simulasimu?", "Bagaimana rasanya menolak permintaan dengan santun?", "Apa yang kamu pelajari tentang memahami kepentingan orang lain?", "Di mana kamu akan menerapkan negosiasi dalam kehidupan sehari-hari?"]
});

UNITS.push({
  n: 6, el: 1, sem: 2, emoji: "⚖️",
  title: "Teks Debat: Beradu Argumen secara Logis dan Kritis",
  desc: "Menyimak, mengevaluasi, dan melaksanakan debat tentang isu remaja dengan argumen yang logis dan sanggahan yang santun.",
  tp: [
    { c: "ATP 1", t: "Mengevaluasi argumen dan sanggahan dalam debat yang disimak berdasarkan logika dan data.", e: "Menyimak rekaman debat 'Gawai di Sekolah' dan menilai argumen terkuat tiap tim." },
    { c: "ATP 5", t: "Menyampaikan argumen dan sanggahan dalam gelar wicara debat secara sistematis dan kritis.", e: "Berperan sebagai tim afirmasi dalam debat 'Sekolah Lima Hari'." },
    { c: "ATP 3", t: "Menggunakan sumber informasi kredibel untuk memperkuat argumen debat.", e: "Mengumpulkan tiga data dari sumber resmi sebelum debat." }
  ],
  focus: [
    ["Pengertian", "Debat adalah adu argumen antara dua pihak atau lebih tentang suatu mosi untuk menguji kekuatan gagasan."],
    ["Komponen", "Mosi, tim afirmasi (pro), tim oposisi (kontra), tim netral, moderator, penulis/notulen, juri."],
    ["Struktur", "Pengenalan mosi → Penyampaian argumen → Sanggahan → Simpulan."],
    ["Argumen kuat", "Klaim + alasan + bukti (data/fakta/pendapat ahli) + kaitan dengan mosi."],
    ["Sanggahan", "Tunjukkan kelemahan logika/data lawan secara santun: 'Data yang disampaikan tim oposisi belum mewakili…'"],
    ["Kesalahan nalar", "Generalisasi berlebihan, menyerang pribadi (ad hominem), sebab-akibat yang keliru."]
  ],
  model: "Moderator: [[\"Mosi kita hari ini: Sekolah sebaiknya melarang penggunaan gawai selama jam pelajaran.\"]]\nTim afirmasi: [[\"Kami setuju. Pertama, gawai mengalihkan konsentrasi. Berdasarkan pengamatan di kelas kami, siswa yang memegang gawai lebih sering tertinggal materi.\"]]\nTim oposisi: [[\"Kami tidak setuju. Gawai justru membantu pembelajaran, misalnya untuk mencari referensi dan mengerjakan kuis daring.\"]]\nSanggahan afirmasi: [[\"Kami memahami manfaat itu, tetapi penggunaan untuk belajar dapat diatur oleh guru, bukan bebas selama jam pelajaran.\"]]\n\nPerhatikan: [[mosi]], [[klaim + alasan + bukti]], dan [[sanggahan yang santun]].",
  diag: [
    { q: "Topik yang diperdebatkan dalam debat disebut …", o: ["mosi", "amanat", "tesis", "koda"], a: 0, w: "Mosi = topik debat." },
    { q: "Tim yang mendukung mosi disebut tim …", o: ["afirmasi", "oposisi", "netral", "juri"], a: 0, w: "Afirmasi = pro." },
    { q: "Orang yang memimpin jalannya debat adalah …", o: ["moderator", "penulis", "penonton", "pencerita"], a: 0, w: "Moderator memandu debat." },
    { q: "Sanggahan yang santun dimulai dengan …", o: ["'Kami menghargai pendapat tim lawan, tetapi…'", "'Kalian bodoh!'", "'Pokoknya salah!'", "'Diam saja!'"], a: 0, w: "Hargai dulu, lalu sanggah." },
    { q: "Argumen yang kuat harus didukung oleh …", o: ["bukti atau data", "suara keras", "jumlah anggota tim", "kostum yang menarik"], a: 0, w: "Bukti memperkuat argumen." }
  ],
  form: [
    { q: "Tim yang menolak mosi disebut tim …", o: ["oposisi", "afirmasi", "netral", "moderator"], a: 0, w: "Oposisi = kontra." },
    { q: "Bagian debat yang berisi bantahan terhadap argumen lawan adalah …", o: ["sanggahan", "pengenalan mosi", "simpulan", "orientasi"], a: 0, w: "Sanggahan = bantahan." },
    { q: "Menyerang pribadi lawan, bukan argumennya, disebut …", o: ["ad hominem", "generalisasi", "analogi", "deduksi"], a: 0, w: "Ad hominem = menyerang pribadi." },
    { q: "Tugas penulis/notulen dalam debat adalah …", o: ["mencatat jalannya debat dan argumen", "memimpin debat", "memberi nilai", "mengusulkan mosi"], a: 0, w: "Mencatat proses debat." },
    { q: "Komponen argumen yang lengkap adalah …", o: ["klaim, alasan, bukti", "judul, gambar, slogan", "tokoh, latar, alur", "rima, irama, diksi"], a: 0, w: "Klaim + alasan + bukti." },
    { q: "Contoh generalisasi berlebihan adalah …", o: ["Semua remaja kecanduan gim karena adikku kecanduan.", "Sebagian remaja bermain gim lebih dari 3 jam sehari menurut survei.", "Gim dapat melatih refleks.", "Ada remaja yang tidak bermain gim."], a: 0, w: "Satu contoh dijadikan kesimpulan umum." },
    { q: "Ungkapan untuk menyatakan setuju sebagian adalah …", o: ["'Kami sependapat sebagian, namun…'", "'Itu sepenuhnya salah.'", "'Tidak ada gunanya.'", "'Terserah.'"], a: 0, w: "Setuju sebagian + namun." },
    { q: "Saat menyimak debat, siswa mengevaluasi …", o: ["kekuatan logika dan bukti tiap argumen", "warna mikrofon", "jumlah penonton", "lama tepuk tangan"], a: 0, w: "Evaluasi isi argumen." }
  ],
  quiz: [
    { q: "Mosi: 'Siswa SMA sebaiknya diwajibkan mengikuti satu ekstrakurikuler.' Argumen tim afirmasi yang paling kuat adalah …", o: ["Ekstrakurikuler itu seru.", "Penelitian pendidikan menunjukkan kegiatan ekstrakurikuler mengembangkan keterampilan sosial dan kepemimpinan.", "Temanku suka basket.", "Semua sekolah punya ekstrakurikuler."], a: 1, w: "Didukung bukti penelitian." },
    { q: "Sanggahan tim oposisi yang paling logis terhadap mosi di atas adalah …", o: ["Kalian sok tahu!", "Kewajiban dapat membebani siswa yang harus bekerja membantu keluarga; lebih baik bersifat pilihan dengan dukungan sekolah.", "Ekstrakurikuler membosankan.", "Kami tidak suka mosinya."], a: 1, w: "Menyanggah dengan alasan dan alternatif." },
    { q: "Pernyataan 'Kalian tidak layak berpendapat karena nilai kalian rendah' termasuk kesalahan nalar …", o: ["ad hominem", "data valid", "analogi tepat", "simpulan logis"], a: 0, w: "Menyerang pribadi." },
    { q: "Fungsi simpulan dalam debat adalah …", o: ["menegaskan kembali posisi dan argumen utama tim", "memperkenalkan anggota baru", "mengganti mosi", "menceritakan pengalaman lucu"], a: 0, w: "Merangkum dan menegaskan posisi." },
    { q: "Peran tim netral dalam debat adalah …", o: ["memberi pandangan seimbang dari kedua sisi", "selalu mendukung afirmasi", "selalu mendukung oposisi", "menentukan pemenang"], a: 0, w: "Netral = melihat dua sisi." },
    { q: "Sumber yang paling tepat untuk memperkuat argumen tentang kesehatan remaja adalah …", o: ["data Kementerian Kesehatan atau WHO", "komentar di media sosial", "cerita tetangga", "iklan suplemen"], a: 0, w: "Sumber resmi & kredibel." }
  ],
  task: "Pilih satu mosi yang dekat dengan kehidupan remaja (penggunaan gawai di sekolah, seragam bebas sehari, larangan jajan di luar sekolah, sekolah lima hari). Susun kartu argumen: klaim–alasan–bukti (minimal 3 sumber kredibel) dan prediksi sanggahan lawan.\n\nLaksanakan debat berkelompok dan isi lembar evaluasi argumen untuk tim lawan.",
  disc: "Mosi apa yang menurutmu paling menarik diperdebatkan di sekolah kita? Tuliskan satu argumen pro dan satu argumen kontra yang sama-sama kuat.",
  meet: [
    { jp: "2 JP", topic: "Memahami: komponen, struktur, dan argumen debat", act: "Menyimak video debat → peta argumen dan sanggahan; menemukan kesalahan nalar." },
    { jp: "2 JP", topic: "Mengaplikasi: riset dan kartu argumen", act: "Riset sumber kredibel → kartu klaim–alasan–bukti → latihan sanggahan berpasangan." },
    { jp: "2 JP", topic: "Merefleksi: debat kelas dan evaluasi", act: "Debat formal dengan moderator & notulen → evaluasi juri dan refleksi tim." }
  ],
  proj: {
    title: "Turnamen Debat Mini Kelas X",
    steps: ["Bentuk tim afirmasi, oposisi, netral, moderator, notulen, dan juri.", "Tentukan mosi dan lakukan riset minimal 3 sumber kredibel.", "Susun kartu argumen dan prediksi sanggahan.", "Laksanakan debat dengan aturan waktu yang jelas.", "Juri dan notulen menyampaikan evaluasi tertulis."],
    rub: [["Kekuatan argumen & bukti", "35"], ["Kualitas sanggahan", "25"], ["Kesantunan & etika debat", "20"], ["Kerja sama tim", "20"]]
  },
  refl: ["Argumen lawan mana yang paling membuatmu berpikir ulang?", "Bagaimana kamu menahan emosi saat argumenmu disanggah?", "Sumber apa yang paling membantu argumen timmu?", "Apa beda debat yang sehat dan pertengkaran?"]
});

UNITS.push({
  n: 7, el: 2, sem: 2, emoji: "🌟",
  title: "Biografi dan Teks Inspiratif: Meneladani Tokoh",
  desc: "Membaca biografi tokoh nasional dan daerah, menemukan makna tersirat dan nilai keteladanan, lalu menulis biografi tokoh di sekitar kita.",
  tp: [
    { c: "ATP 3", t: "Mengevaluasi informasi dalam biografi untuk menemukan makna tersurat dan tersirat serta memeriksa kredibilitasnya dengan sumber lain.", e: "Membandingkan dua biografi Ki Hajar Dewantara dan memeriksa ketepatan tahun-tahun pentingnya." },
    { c: "ATP 4", t: "Menginterpretasi nilai keteladanan tokoh dan mengungkapkan simpati/empati secara kreatif.", e: "Membuat kartu teladan berisi nilai perjuangan Sultan Baabullah." },
    { c: "ATP 5", t: "Menulis biografi singkat tokoh di lingkungan sekitar berdasarkan wawancara.", e: "Menulis biografi guru, nelayan, atau tokoh adat yang menginspirasi." }
  ],
  focus: [
    ["Pengertian", "Biografi adalah riwayat hidup seseorang yang ditulis oleh orang lain, memuat peristiwa penting dan keteladanan."],
    ["Struktur", "Orientasi → Peristiwa dan masalah (urutan peristiwa) → Reorientasi (penilaian/keteladanan)."],
    ["Kebahasaan", "Kata ganti orang ketiga (ia, beliau), kata kerja material, konjungsi temporal (kemudian, setelah itu), kata sifat."],
    ["Makna tersirat", "Nilai yang tidak ditulis langsung, misalnya ketekunan di balik kegagalan berulang."],
    ["Kredibilitas", "Bandingkan tahun dan fakta dengan sumber resmi (ensiklopedia, museum, situs pemerintah)."],
    ["Wawancara", "Siapkan pertanyaan 5W+1H untuk mengumpulkan data biografi tokoh sekitar."]
  ],
  model: "Orientasi: [[Ki Hajar Dewantara]] lahir di Yogyakarta [[pada 2 Mei 1889]] dengan nama Raden Mas Soewardi Soerjaningrat.\nPeristiwa: [[Pada 1913]], [[beliau]] menulis kritik tajam terhadap pemerintah kolonial sehingga [[diasingkan ke Belanda]]. Di sana, ia mempelajari ilmu pendidikan. [[Setelah kembali]], ia [[mendirikan]] Perguruan Taman Siswa pada [[3 Juli 1922]] agar rakyat biasa dapat bersekolah. Ia [[kemudian]] menjadi Menteri Pengajaran pertama Republik Indonesia.\nReorientasi: Semboyannya, [[ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani]], masih menjadi pedoman pendidikan. Hari lahirnya diperingati sebagai [[Hari Pendidikan Nasional]].\n\nPerhatikan: [[kata ganti beliau/ia]], [[konjungsi temporal]], dan [[nilai keteladanan]] di reorientasi.",
  diag: [
    { q: "Riwayat hidup seseorang yang ditulis oleh orang lain disebut …", o: ["biografi", "autobiografi", "hikayat", "anekdot"], a: 0, w: "Ditulis orang lain = biografi." },
    { q: "Riwayat hidup yang ditulis oleh tokohnya sendiri disebut …", o: ["autobiografi", "biografi", "resensi", "laporan"], a: 0, w: "Auto = sendiri." },
    { q: "Hari Pendidikan Nasional diperingati setiap tanggal …", o: ["2 Mei", "17 Agustus", "28 Oktober", "10 November"], a: 0, w: "Hari lahir Ki Hajar Dewantara." },
    { q: "Kata 'teladan' berarti …", o: ["patut dicontoh", "sangat kaya", "pandai berbicara", "suka bercanda"], a: 0, w: "Teladan = contoh yang baik." },
    { q: "Sultan yang dikenal mengusir Portugis dari Ternate adalah …", o: ["Sultan Baabullah", "Sultan Agung", "Sultan Hasanuddin", "Sultan Iskandar Muda"], a: 0, w: "Sultan Baabullah dari Ternate." }
  ],
  form: [
    { q: "Bagian biografi yang berisi pengenalan tokoh disebut …", o: ["orientasi", "reorientasi", "krisis", "koda"], a: 0, w: "Orientasi = pengenalan." },
    { q: "Bagian biografi yang berisi penilaian atau keteladanan tokoh adalah …", o: ["reorientasi", "orientasi", "abstraksi", "pengajuan"], a: 0, w: "Reorientasi = penilaian/penutup." },
    { q: "Kata ganti yang sering digunakan untuk tokoh yang dihormati adalah …", o: ["beliau", "kamu", "aku", "kalian"], a: 0, w: "Beliau = penghormatan." },
    { q: "Contoh konjungsi temporal adalah …", o: ["setelah itu", "karena", "tetapi", "jika"], a: 0, w: "Menunjukkan urutan waktu." },
    { q: "Makna tersirat adalah makna yang …", o: ["tidak dinyatakan secara langsung", "tertulis jelas di teks", "selalu berupa angka", "hanya ada di judul"], a: 0, w: "Tersirat = tersembunyi/disimpulkan." },
    { q: "Cara memeriksa kredibilitas tahun peristiwa dalam biografi adalah …", o: ["membandingkannya dengan sumber resmi lain", "menebak tahun", "mengikuti komentar warganet", "mengabaikan tahun"], a: 0, w: "Verifikasi silang sumber." },
    { q: "Pertanyaan wawancara yang tepat untuk menggali perjuangan tokoh adalah …", o: ["Apa tantangan terbesar yang pernah Bapak hadapi dan bagaimana mengatasinya?", "Apa warna favorit Bapak?", "Berapa nomor telepon Bapak?", "Bapak suka makan apa?"], a: 0, w: "Menggali peristiwa penting & nilai." },
    { q: "Kata kerja material adalah kata kerja yang menunjukkan …", o: ["tindakan fisik", "perasaan", "pikiran", "keadaan cuaca"], a: 0, w: "Mendirikan, menulis, berlayar = tindakan." }
  ],
  quiz: [
    { q: "Bacalah: 'Meski berkali-kali gagal masuk tim nasional, ia terus berlatih setiap pagi sebelum sekolah. Akhirnya, pada usia 19 tahun ia meraih medali emas.' Makna tersirat penggalan tersebut adalah …", o: ["ketekunan membuahkan hasil", "tim nasional mudah dimasuki", "latihan pagi tidak penting", "medali emas mudah diraih"], a: 0, w: "Nilai ketekunan disimpulkan dari peristiwa." },
    { q: "Pada penggalan di atas, frasa 'pada usia 19 tahun' menunjukkan …", o: ["keterangan waktu peristiwa", "nama tokoh", "tempat kejadian", "sifat tokoh"], a: 0, w: "Keterangan waktu." },
    { q: "Nilai keteladanan Ki Hajar Dewantara yang paling menonjol adalah …", o: ["memperjuangkan pendidikan bagi semua rakyat", "mengumpulkan kekayaan", "menjadi pedagang besar", "menjadi atlet"], a: 0, w: "Pejuang pendidikan." },
    { q: "Semboyan 'tut wuri handayani' bermakna …", o: ["dari belakang memberi dorongan", "di depan memberi perintah", "di tengah membuat masalah", "berjalan sendirian"], a: 0, w: "Pendidik mendorong dari belakang." },
    { q: "Urutan yang tepat dalam biografi Ki Hajar Dewantara adalah …", o: ["lahir (1889) → diasingkan (1913) → mendirikan Taman Siswa (1922)", "mendirikan Taman Siswa → lahir → diasingkan", "diasingkan → lahir → mendirikan Taman Siswa", "lahir → mendirikan Taman Siswa → diasingkan"], a: 0, w: "Kronologis: 1889 → 1913 → 1922." },
    { q: "Menulis biografi tokoh di sekitar (guru, nelayan, tokoh adat) bermanfaat untuk …", o: ["menghargai dan meneladani perjuangan orang di sekitar kita", "mencari kesalahan orang lain", "membuat cerita fiksi", "menghafal tahun"], a: 0, w: "Empati & keteladanan lokal." }
  ],
  task: "Baca dua biografi tokoh yang sama dari sumber berbeda (misalnya Ki Hajar Dewantara, R.A. Kartini, atau Sultan Baabullah). Bandingkan isi, tahun-tahun penting, dan nilai keteladanannya; tandai bila ada perbedaan data dan periksa ke sumber resmi.\n\nWawancarai satu tokoh inspiratif di sekitarmu, lalu tulis biografi singkat (250 kata) dengan struktur orientasi–peristiwa–reorientasi.",
  disc: "Siapa tokoh di sekitarmu (keluarga, guru, tetangga) yang perjuangannya layak ditulis? Ceritakan satu peristiwa penting dan nilai yang kamu teladani darinya.",
  meet: [
    { jp: "2 JP", topic: "Memahami: struktur, kebahasaan, makna tersirat biografi", act: "Membaca biografi tokoh nasional & Maluku Utara → linimasa peristiwa dan nilai keteladanan." },
    { jp: "2 JP", topic: "Mengaplikasi: membandingkan sumber & menyiapkan wawancara", act: "Cek silang data dua biografi → menyusun daftar pertanyaan 5W+1H." },
    { jp: "2 JP", topic: "Merefleksi: menulis dan memajang biografi tokoh sekitar", act: "Menulis biografi hasil wawancara → galeri 'Teladan di Sekitar Kita'." }
  ],
  proj: {
    title: "Galeri 'Teladan di Sekitar Kita'",
    steps: ["Pilih tokoh inspiratif di lingkungan sekitar dan minta izinnya.", "Lakukan wawancara dengan pertanyaan 5W+1H; rekam atau catat.", "Tulis biografi 250 kata dengan struktur yang tepat.", "Buat kartu galeri: foto (dengan izin), linimasa, kutipan, nilai teladan.", "Pamerkan di sekolah dan undang tokoh tersebut bila memungkinkan."],
    rub: [["Kelengkapan & ketepatan data", "25"], ["Struktur & kebahasaan biografi", "30"], ["Kedalaman nilai keteladanan", "25"], ["Kreativitas kartu galeri", "20"]]
  },
  refl: ["Nilai apa dari tokoh yang kamu tulis yang ingin kamu teladani?", "Apa yang kamu pelajari saat membandingkan dua sumber biografi?", "Bagaimana perasaanmu saat mewawancarai tokoh tersebut?", "Mengapa tokoh lokal juga penting untuk ditulis?"]
});

UNITS.push({
  n: 8, el: 4, sem: 2, emoji: "🖋️",
  title: "Puisi: Menyimak, Menulis, dan Memublikasikan Karya",
  desc: "Menyimak pembacaan puisi, mengevaluasi unsur fisik dan batinnya, menulis puisi bertema lingkungan atau daerah, lalu memublikasikannya secara digital.",
  tp: [
    { c: "ATP 2", t: "Mengevaluasi unsur fisik dan batin puisi yang disimak/dibacakan untuk menemukan pesan dan nilai.", e: "Menyimak musikalisasi puisi bertema laut dan menafsirkan amanatnya." },
    { c: "ATP 5", t: "Menulis puisi dengan diksi, imaji, dan majas yang tepat serta membacakannya dengan ekspresif.", e: "Menulis puisi 'Gamalama di Pagi Hari' dan membacakannya di depan kelas." },
    { c: "ATP 6", t: "Memublikasikan puisi dalam bentuk puisi digital, musikalisasi, atau antologi kelas.", e: "Mengunggah video musikalisasi puisi ke kanal sekolah." }
  ],
  focus: [
    ["Unsur fisik", "Diksi (pilihan kata), imaji (citraan), majas, rima & irama, tipografi."],
    ["Unsur batin", "Tema, rasa (perasaan penyair), nada (sikap kepada pembaca), amanat."],
    ["Majas", "Personifikasi (ombak berbisik), metafora (dia bunga desa), hiperbola (air mata menjadi lautan), simile (bagai bulan)."],
    ["Imaji", "Citraan penglihatan, pendengaran, perabaan, penciuman: 'harum cengkih menyusup jendela'."],
    ["Membaca puisi", "Perhatikan lafal, intonasi, jeda, ekspresi, dan penghayatan."],
    ["Publikasi", "Antologi cetak, puisi digital (video/visual), musikalisasi, siniar sastra."]
  ],
  model: "Contoh bait karya siswa:\n[[Ombak Falajawa berbisik]] pada pasir pagi,\n[[harum cengkih]] turun dari lereng Gamalama,\nnelayan menjemput matahari\n[[bagai]] pulang ke rumah yang lama.\n\nUnsur fisik: [[personifikasi]] (ombak berbisik), [[imaji penciuman]] (harum cengkih), [[simile]] (bagai pulang ke rumah), rima akhir a–b–a–b (pagi–Gamalama–matahari–lama).\nUnsur batin: tema [[cinta tanah kelahiran]], rasa damai dan rindu, amanat menjaga alam dan budaya daerah.",
  diag: [
    { q: "Pilihan kata dalam puisi disebut …", o: ["diksi", "rima", "tipografi", "amanat"], a: 0, w: "Diksi = pilihan kata." },
    { q: "'Ombak berbisik' termasuk majas …", o: ["personifikasi", "hiperbola", "metafora", "litotes"], a: 0, w: "Benda mati seolah manusia." },
    { q: "Pesan yang ingin disampaikan penyair disebut …", o: ["amanat", "rima", "imaji", "diksi"], a: 0, w: "Amanat = pesan." },
    { q: "Persamaan bunyi di akhir baris disebut …", o: ["rima", "tema", "nada", "tipografi"], a: 0, w: "Rima = persajakan." },
    { q: "Saat membaca puisi, hal yang paling penting adalah …", o: ["penghayatan, intonasi, dan ekspresi", "membaca secepat mungkin", "suara selalu datar", "tidak berhenti sama sekali"], a: 0, w: "Penghayatan membuat puisi hidup." }
  ],
  form: [
    { q: "Citraan yang berkaitan dengan indra penciuman adalah …", o: ["harum cengkih menyusup jendela", "langit biru membentang", "suara azan berkumandang", "angin dingin menusuk kulit"], a: 0, w: "Harum = penciuman." },
    { q: "'Air matanya menjadi lautan' termasuk majas …", o: ["hiperbola", "personifikasi", "simile", "metonimia"], a: 0, w: "Melebih-lebihkan." },
    { q: "Majas yang menggunakan kata 'bagai/seperti' disebut …", o: ["simile", "metafora", "ironi", "litotes"], a: 0, w: "Simile = perbandingan langsung." },
    { q: "Unsur batin puisi meliputi …", o: ["tema, rasa, nada, amanat", "diksi, rima, tipografi", "judul, penulis, tahun", "alur, latar, tokoh"], a: 0, w: "Unsur batin = makna & perasaan." },
    { q: "Tipografi puisi adalah …", o: ["tata wajah atau bentuk penulisan puisi", "makna puisi", "perasaan penyair", "jumlah pembaca"], a: 0, w: "Bentuk visual baris/bait." },
    { q: "Nada dalam puisi berkaitan dengan …", o: ["sikap penyair terhadap pembaca", "jumlah bait", "panjang judul", "nama penerbit"], a: 0, w: "Nada = sikap (menggurui, mengajak, mengejek…)." },
    { q: "Bentuk publikasi puisi secara digital yang tepat adalah …", o: ["video musikalisasi puisi di kanal sekolah", "menyimpannya di laci", "membuang naskahnya", "menyalin puisi orang lain tanpa izin"], a: 0, w: "Publikasi digital karya sendiri." },
    { q: "Saat menyimak pembacaan puisi, cara terbaik menangkap tema adalah …", o: ["memperhatikan kata kunci yang berulang dan suasana yang dibangun", "menghitung jumlah baris", "melihat pakaian pembaca", "mengabaikan intonasi"], a: 0, w: "Kata kunci & suasana menunjukkan tema." }
  ],
  quiz: [
    { q: "Bacalah: 'Laut adalah ibu / yang menyusui perahu-perahu kecil / dengan ombak dan doa.' Majas pada baris pertama adalah …", o: ["metafora", "simile", "hiperbola", "litotes"], a: 0, w: "Laut disamakan langsung dengan ibu." },
    { q: "Tema puisi di atas yang paling tepat adalah …", o: ["laut sebagai sumber kehidupan", "kemacetan kota", "kerinduan pada sekolah", "persaingan olahraga"], a: 0, w: "Laut 'menyusui' perahu = memberi kehidupan." },
    { q: "Larik 'perahu-perahu kecil' menghadirkan citraan …", o: ["penglihatan", "pendengaran", "penciuman", "pengecapan"], a: 0, w: "Dapat dibayangkan dengan mata." },
    { q: "Amanat yang sesuai dengan puisi tentang laut di atas adalah …", o: ["kita perlu menjaga laut yang memberi kehidupan", "laut itu menakutkan", "perahu harus besar", "doa tidak penting"], a: 0, w: "Menghargai & menjaga laut." },
    { q: "Agar pembacaan puisi menarik, pembaca perlu …", o: ["mengatur jeda dan intonasi sesuai makna larik", "membaca dengan nada yang sama", "membaca tanpa melihat audiens sama sekali", "membaca sangat cepat"], a: 0, w: "Jeda & intonasi mengikuti makna." },
    { q: "Etika memublikasikan puisi di media digital adalah …", o: ["mencantumkan nama penulis dan tidak menjiplak karya orang lain", "mengaku karya orang lain", "mengubah puisi orang tanpa izin", "menghapus nama penyair"], a: 0, w: "Hargai hak cipta dan kejujuran." }
  ],
  task: "Simak dua pembacaan atau musikalisasi puisi bertema alam/daerah. Isi tabel unsur fisik (diksi, imaji, majas, rima) dan unsur batin (tema, rasa, nada, amanat).\n\nTulis satu puisi karyamu sendiri (minimal 3 bait) bertema lingkungan atau keindahan Maluku Utara, gunakan minimal dua majas dan dua jenis imaji. Rekam pembacaan atau musikalisasinya.",
  disc: "Tempat atau momen apa di Ternate/Maluku Utara yang paling ingin kamu abadikan dalam puisi? Tuliskan satu larik pembukanya di sini.",
  meet: [
    { jp: "2 JP", topic: "Memahami: unsur fisik & batin puisi melalui menyimak", act: "Menyimak musikalisasi puisi → peta unsur fisik & batin; diskusi makna." },
    { jp: "2 JP", topic: "Mengaplikasi: menulis puisi dengan diksi, imaji, majas", act: "Jalan-jalan pancaindra di sekolah → bank kata → menulis puisi 3 bait." },
    { jp: "2 JP", topic: "Merefleksi: membaca, menyunting, dan memublikasikan puisi", act: "Pembacaan puisi/musikalisasi → sunting sebaya → unggah ke antologi digital kelas." }
  ],
  proj: {
    title: "Antologi Digital 'Puisi dari Pulau Rempah'",
    steps: ["Tulis puisi minimal 3 bait bertema alam, budaya, atau masyarakat Maluku Utara.", "Sunting bersama teman: periksa diksi, majas, imaji, dan rima.", "Rekam pembacaan atau musikalisasi puisi (1–2 menit).", "Susun antologi digital kelas lengkap dengan nama penulis dan ilustrasi.", "Publikasikan di media sekolah dan adakan malam apresiasi puisi."],
    rub: [["Kekuatan diksi, imaji, dan majas", "30"], ["Kedalaman tema & amanat", "25"], ["Pembacaan/musikalisasi", "25"], ["Publikasi & etika berkarya", "20"]]
  },
  refl: ["Larik mana dari puisimu yang paling kamu sukai? Mengapa?", "Apa perbedaan menyimak puisi dan membacanya sendiri?", "Bagaimana perasaanmu saat karyamu dipublikasikan?", "Bagaimana puisi dapat menumbuhkan kepedulian terhadap lingkungan dan daerah?"]
});
/* ===== EXAM, GAMES, LABS, EBOOKS, GLOS, SUMBER, FORUM, BOT ===== */
const EXAM = {
  uts: {
    title: "PTS — Semester Ganjil", min: 75, time: 45,
    desc: "10 soal campuran Unit 1–4 (LHO Kompleks, Eksposisi, Anekdot, Hikayat & Cerita Rakyat).",
    q: [
      { q: "Bagian LHO yang berisi definisi dan klasifikasi objek adalah …", o: ["pernyataan umum", "deskripsi manfaat", "koda", "reorientasi"], a: 0, w: "Pernyataan umum." },
      { q: "Kalimat LHO yang objektif adalah …", o: ["Ditemukan 145 sampah plastik dalam 30 menit pengamatan.", "Pantai itu sangat jorok.", "Aku sedih melihat sampah.", "Sampah itu paling menjijikkan."], a: 0, w: "Berbasis data." },
      { q: "'Mangrove terdiri atas bakau, api-api, dan pidada.' Kata 'terdiri atas' menunjukkan …", o: ["klasifikasi", "opini", "perintah", "harapan"], a: 0, w: "Klasifikasi." },
      { q: "Struktur teks eksposisi adalah …", o: ["tesis–argumentasi–penegasan ulang", "abstraksi–orientasi–krisis–reaksi–koda", "orientasi–peristiwa–reorientasi", "pengajuan–penawaran–persetujuan"], a: 0, w: "Tesis → argumentasi → penegasan ulang." },
      { q: "Kata 'berdasarkan' dalam 'Berdasarkan data BPS…' berfungsi sebagai …", o: ["kata rujukan", "kata seru", "kata sifat", "kata perintah"], a: 0, w: "Menunjukkan sumber." },
      { q: "Argumen 'Semua remaja malas karena temanku malas' mengandung kesalahan …", o: ["generalisasi berlebihan", "data valid", "kalimat baku", "rujukan resmi"], a: 0, w: "Generalisasi berlebihan." },
      { q: "Bagian anekdot yang berisi puncak masalah adalah …", o: ["krisis", "abstraksi", "koda", "orientasi"], a: 0, w: "Krisis." },
      { q: "Sasaran kritik anekdot yang etis adalah …", o: ["perilaku atau kebijakan", "kekurangan fisik", "suku tertentu", "agama tertentu"], a: 0, w: "Kritik perilaku/kebijakan." },
      { q: "Burung yang dapat berbicara dalam hikayat menunjukkan ciri …", o: ["kemustahilan", "anonim", "realistis", "modern"], a: 0, w: "Kemustahilan." },
      { q: "Kata 'hatta' dalam hikayat bermakna …", o: ["kemudian", "tetapi", "karena", "jika"], a: 0, w: "Hatta = kemudian." }
    ]
  },
  uas: {
    title: "PAS — Semester Genap", min: 75, time: 45,
    desc: "10 soal campuran Unit 5–8 (Negosiasi, Debat, Biografi, Puisi).",
    q: [
      { q: "Urutan struktur negosiasi yang tepat adalah …", o: ["orientasi–pengajuan–penawaran–persetujuan–penutup", "tesis–argumentasi–penegasan ulang", "abstraksi–orientasi–krisis–reaksi–koda", "orientasi–peristiwa–reorientasi"], a: 0, w: "Struktur negosiasi." },
      { q: "'Jika pesanan lebih dari 50, kami beri potongan 10%.' merupakan kalimat …", o: ["bersyarat", "perintah", "seru", "tanya retoris"], a: 0, w: "Jika … = bersyarat." },
      { q: "Tim yang menolak mosi disebut tim …", o: ["oposisi", "afirmasi", "netral", "juri"], a: 0, w: "Oposisi = kontra." },
      { q: "Menyerang pribadi lawan, bukan argumennya, disebut …", o: ["ad hominem", "deduksi", "analogi", "induksi"], a: 0, w: "Ad hominem." },
      { q: "Komponen argumen yang lengkap adalah …", o: ["klaim, alasan, bukti", "tema, rasa, nada", "tokoh, latar, alur", "judul, gambar, slogan"], a: 0, w: "Klaim + alasan + bukti." },
      { q: "Riwayat hidup seseorang yang ditulis oleh orang lain disebut …", o: ["biografi", "autobiografi", "hikayat", "anekdot"], a: 0, w: "Biografi." },
      { q: "Kata ganti penghormatan dalam biografi adalah …", o: ["beliau", "kamu", "aku", "kalian"], a: 0, w: "Beliau." },
      { q: "'Ombak berbisik pada pasir' mengandung majas …", o: ["personifikasi", "hiperbola", "simile", "litotes"], a: 0, w: "Personifikasi." },
      { q: "Unsur batin puisi meliputi …", o: ["tema, rasa, nada, amanat", "diksi, rima, tipografi", "orientasi, krisis, koda", "klaim, alasan, bukti"], a: 0, w: "Unsur batin." },
      { q: "Etika memublikasikan puisi di media digital adalah …", o: ["mencantumkan nama penulis dan tidak menjiplak", "mengaku karya orang lain", "menghapus nama penyair", "mengubah karya tanpa izin"], a: 0, w: "Kejujuran & hak cipta." }
    ]
  },
  rem: [
    { q: "LHO bersifat …", o: ["objektif dan faktual", "subjektif dan imajinatif", "lucu dan menyindir", "persuasif dan emosional"], a: 0, w: "LHO objektif." },
    { q: "Teks eksposisi bertujuan …", o: ["meyakinkan pembaca dengan argumen dan fakta", "menghibur dengan humor", "menceritakan riwayat hidup", "memberi langkah kerja"], a: 0, w: "Meyakinkan." },
    { q: "Anekdot selalu mengandung …", o: ["kritik atau pesan", "data statistik", "rima", "mosi"], a: 0, w: "Kritik/pesan." },
    { q: "Hikayat termasuk …", o: ["prosa lama", "puisi modern", "teks ilmiah", "drama modern"], a: 0, w: "Prosa lama." },
    { q: "Negosiasi bertujuan …", o: ["mencapai kesepakatan", "menentukan pemenang", "menghibur", "menyindir"], a: 0, w: "Kesepakatan." },
    { q: "Topik dalam debat disebut …", o: ["mosi", "amanat", "tesis", "koda"], a: 0, w: "Mosi." },
    { q: "Bagian biografi yang berisi keteladanan tokoh adalah …", o: ["reorientasi", "orientasi", "krisis", "pengajuan"], a: 0, w: "Reorientasi." },
    { q: "Pilihan kata dalam puisi disebut …", o: ["diksi", "rima", "tipografi", "nada"], a: 0, w: "Diksi." }
  ]
};

const GAMES = [
  {
    id: "jelajahteks", name: "Jelajah Pulau Teks", emoji: "🏝️", el: 2,
    desc: "Berlayar dari Ternate ke Tidore hingga Halmahera — kenali jenis teks, strukturnya, dan ciri kebahasaannya di setiap pulau.",
    levels: [
      { name: "Pulau Ternate — Jenis Teks", q: [
        { p: "Hasil pengamatan sistematis & objektif?", o: ["LHO", "anekdot", "puisi"], a: 0 },
        { p: "Cerita lucu berisi kritik sosial?", o: ["anekdot", "biografi", "eksposisi"], a: 0 },
        { p: "Prosa lama istana sentris?", o: ["hikayat", "negosiasi", "LHO"], a: 0 },
        { p: "Berunding mencapai kesepakatan?", o: ["negosiasi", "debat", "puisi"], a: 0 },
        { p: "Adu argumen tentang mosi?", o: ["debat", "hikayat", "biografi"], a: 0 },
        { p: "Riwayat hidup tokoh?", o: ["biografi", "anekdot", "LHO"], a: 0 }
      ]},
      { name: "Pulau Tidore — Struktur", q: [
        { p: "Tesis → argumentasi → penegasan ulang", o: ["eksposisi", "anekdot", "negosiasi"], a: 0 },
        { p: "Abstraksi → orientasi → krisis → reaksi → koda", o: ["anekdot", "biografi", "LHO"], a: 0 },
        { p: "Pernyataan umum → deskripsi bagian → deskripsi manfaat", o: ["LHO", "debat", "puisi"], a: 0 },
        { p: "Orientasi → pengajuan → penawaran → persetujuan → penutup", o: ["negosiasi", "eksposisi", "hikayat"], a: 0 },
        { p: "Orientasi → peristiwa → reorientasi", o: ["biografi", "debat", "anekdot"], a: 0 },
        { p: "Pengenalan mosi → argumen → sanggahan → simpulan", o: ["debat", "LHO", "puisi"], a: 0 }
      ]},
      { name: "Pulau Halmahera — Kebahasaan", q: [
        { p: "'adalah, merupakan, terdiri atas'", o: ["kata kerja relasional", "kata seru", "majas"], a: 0 },
        { p: "'karena, sebab, sehingga'", o: ["konjungsi kausal", "konjungsi temporal", "kata arkais"], a: 0 },
        { p: "'kemudian, setelah itu'", o: ["konjungsi temporal", "kata rujukan", "kata baku"], a: 0 },
        { p: "'hatta, sahibulhikayat'", o: ["kata arkais", "istilah teknis", "kalimat bersyarat"], a: 0 },
        { p: "'Jika …, maka …'", o: ["kalimat bersyarat", "majas simile", "kalimat seru"], a: 0 },
        { p: "'beliau'", o: ["kata ganti penghormatan", "kata kerja mental", "konjungsi"], a: 0 }
      ]}
    ]
  },
  {
    id: "detektifkalimat", name: "Detektif Kalimat", emoji: "🔎", el: 4,
    desc: "Selidiki kalimat-kalimat yang mencurigakan: fakta atau opini, baku atau tidak baku, dan majas apa yang bersembunyi.",
    levels: [
      { name: "Kasus 1 — Fakta atau Opini?", q: [
        { p: "'Ternate terletak di Provinsi Maluku Utara.'", o: ["fakta", "opini"], a: 0 },
        { p: "'Pantai Sulamadaha paling indah sedunia.'", o: ["fakta", "opini"], a: 1 },
        { p: "'Gunung Gamalama merupakan gunung api aktif.'", o: ["fakta", "opini"], a: 0 },
        { p: "'Sebaiknya semua siswa gemar menulis puisi.'", o: ["fakta", "opini"], a: 1 },
        { p: "'Hari Pendidikan Nasional jatuh pada 2 Mei.'", o: ["fakta", "opini"], a: 0 },
        { p: "'Debat itu membosankan.'", o: ["fakta", "opini"], a: 1 }
      ]},
      { name: "Kasus 2 — Kata Baku", q: [
        { p: "Bentuk baku?", o: ["analisis", "analisa", "analysa"], a: 0 },
        { p: "Bentuk baku?", o: ["sistem", "sistim", "sestem"], a: 0 },
        { p: "Bentuk baku?", o: ["praktik", "praktek", "pratik"], a: 0 },
        { p: "Bentuk baku?", o: ["kualitas", "kwalitas", "kualitet"], a: 0 },
        { p: "Bentuk baku?", o: ["objektif", "obyektif", "objectif"], a: 0 },
        { p: "Bentuk baku?", o: ["nasihat", "nasehat", "nasiat"], a: 0 }
      ]},
      { name: "Kasus 3 — Majas Tersembunyi", q: [
        { p: "'Ombak berbisik pada pasir.'", o: ["personifikasi", "hiperbola", "simile"], a: 0 },
        { p: "'Air matanya menjadi lautan.'", o: ["hiperbola", "metafora", "litotes"], a: 0 },
        { p: "'Wajahnya bagai bulan purnama.'", o: ["simile", "personifikasi", "ironi"], a: 0 },
        { p: "'Dia adalah bintang kelas kami.'", o: ["metafora", "simile", "hiperbola"], a: 0 },
        { p: "'Mampirlah ke gubuk kami yang sederhana.' (rumah mewah)", o: ["litotes", "personifikasi", "simile"], a: 0 },
        { p: "'Angin malam memeluk tubuhku.'", o: ["personifikasi", "metafora", "hiperbola"], a: 0 }
      ]}
    ]
  },
  {
    id: "arenadebat", name: "Arena Argumen", emoji: "🏟️", el: 3,
    desc: "Masuki arena! Pilih argumen terkuat, sanggahan tersantun, dan kenali kesalahan nalar untuk menjadi juara debat.",
    levels: [
      { name: "Babak Penyisihan — Argumen Terkuat", q: [
        { p: "Mendukung 'Sarapan penting'?", o: ["Penelitian gizi: sarapan membantu konsentrasi", "Ibuku suka sarapan", "Sarapan itu enak"], a: 0 },
        { p: "Mendukung 'Batasi gawai sebelum tidur'?", o: ["Cahaya biru mengganggu hormon tidur", "Gawai mahal", "Temanku tidur larut"], a: 0 },
        { p: "Mendukung 'Tanam mangrove'?", o: ["Mangrove menahan abrasi pantai", "Mangrove berwarna hijau", "Aku suka mangrove"], a: 0 },
        { p: "Mendukung 'Perpustakaan buka sore'?", o: ["Survei: 60% siswa butuh waktu belajar sore", "Perpustakaan sepi", "Buku itu tebal"], a: 0 },
        { p: "Mendukung 'Kurangi plastik di kantin'?", o: ["Data: sampah plastik mendominasi sampah sekolah", "Plastik jelek", "Plastik ringan"], a: 0 },
        { p: "Sumber terkuat untuk isu kesehatan?", o: ["Kemenkes/WHO", "komentar warganet", "iklan suplemen"], a: 0 }
      ]},
      { name: "Babak Semifinal — Sanggahan Santun", q: [
        { p: "Sanggahan paling santun?", o: ["Kami menghargai pendapat tim lawan, tetapi datanya belum mewakili…", "Kalian salah total!", "Argumen kalian bodoh."], a: 0 },
        { p: "Menyetujui sebagian?", o: ["Kami sependapat sebagian, namun…", "Terserah kalian.", "Pokoknya tidak!"], a: 0 },
        { p: "Meminta bukti?", o: ["Boleh tim lawan menunjukkan sumber datanya?", "Mana buktinya, hah?", "Kalian bohong."], a: 0 },
        { p: "Menolak dalam negosiasi?", o: ["Mohon maaf, kami belum bisa menerima tawaran itu.", "Tidak mau!", "Pergi saja."], a: 0 },
        { p: "Menutup debat?", o: ["Dengan demikian, kami tetap pada posisi bahwa…", "Sudahlah, kami menang.", "Debat ini tidak penting."], a: 0 },
        { p: "Empati pada pihak lain?", o: ["Kami memahami kekhawatiran tersebut; bagaimana kalau…", "Itu urusanmu.", "Kami tidak peduli."], a: 0 }
      ]},
      { name: "Babak Final — Kesalahan Nalar", q: [
        { p: "'Kalian tak layak bicara, nilai kalian rendah.'", o: ["ad hominem", "argumen valid", "data resmi"], a: 0 },
        { p: "'Semua remaja kecanduan gim karena adikku begitu.'", o: ["generalisasi berlebihan", "argumen valid", "analogi tepat"], a: 0 },
        { p: "'Setelah memakai kaus ini aku juara, jadi kausnya membawa keberuntungan.'", o: ["sebab-akibat keliru", "data valid", "deduksi tepat"], a: 0 },
        { p: "'Semua orang setuju, jadi pasti benar.'", o: ["ikut-ikutan (bandwagon)", "bukti ilmiah", "argumen kuat"], a: 0 },
        { p: "'Survei 500 siswa menunjukkan 70% kurang tidur.'", o: ["argumen berbasis data", "ad hominem", "generalisasi berlebihan"], a: 0 },
        { p: "'Pilih A atau sekolah kita hancur!' (tanpa pilihan lain)", o: ["dilema palsu", "data valid", "argumen seimbang"], a: 0 }
      ]}
    ]
  }
];

const LABS = [
  {
    id: "labstrukturlho", name: "Lab Bedah Struktur LHO", emoji: "🔬", el: 4, type: "sortbin",
    desc: "Kalimat-kalimat dari laporan 'Hutan Mangrove' tercampur. Kelompokkan ke bagian strukturnya masing-masing.",
    hint: "Pernyataan umum: definisi & klasifikasi (adalah, terdiri atas). Deskripsi bagian: ciri fisik/bagian. Deskripsi manfaat: fungsi & kegunaan.",
    bins: [
      { id: "umum", name: "Pernyataan Umum", emoji: "📌" },
      { id: "bagian", name: "Deskripsi Bagian", emoji: "🌿" },
      { id: "manfaat", name: "Deskripsi Manfaat", emoji: "🎯" }
    ],
    items: [
      { t: "Mangrove adalah tumbuhan yang hidup di daerah pasang surut.", bin: "umum" },
      { t: "Mangrove terdiri atas bakau, api-api, dan pidada.", bin: "umum" },
      { t: "Akar tunjang mangrove mencengkeram lumpur dengan kuat.", bin: "bagian" },
      { t: "Daun mangrove tebal dan dapat mengeluarkan kelebihan garam.", bin: "bagian" },
      { t: "Akar napas muncul ke permukaan untuk menyerap oksigen.", bin: "bagian" },
      { t: "Hutan mangrove menahan abrasi pantai.", bin: "manfaat" },
      { t: "Mangrove menjadi tempat pemijahan ikan dan udang.", bin: "manfaat" },
      { t: "Mangrove menyerap karbon dari udara.", bin: "manfaat" }
    ]
  },
  {
    id: "labkredibel", name: "Lab Uji Kredibilitas Sumber", emoji: "🛡️", el: 2, type: "sortbin",
    desc: "Sebelum dijadikan bukti dalam eksposisi atau debat, uji dulu: sumber mana yang kredibel dan mana yang perlu dicek ulang?",
    hint: "Kredibel: lembaga resmi, penulis jelas, ada data & tanggal. Perlu dicek: anonim, provokatif, tanpa sumber, berlebihan.",
    bins: [
      { id: "kredibel", name: "Kredibel", emoji: "✅" },
      { id: "cek", name: "Perlu Dicek Ulang", emoji: "⚠️" }
    ],
    items: [
      { t: "Laporan cuaca dari situs resmi BMKG", bin: "kredibel" },
      { t: "Data penduduk dari BPS", bin: "kredibel" },
      { t: "Artikel jurnal ilmiah yang mencantumkan penulis dan tahun", bin: "kredibel" },
      { t: "Informasi gizi dari situs Kemenkes", bin: "kredibel" },
      { t: "Pesan berantai 'SEBARKAN!!! Air kelapa sembuhkan semua penyakit'", bin: "cek" },
      { t: "Video viral tanpa nama pembuat dan tanpa tanggal", bin: "cek" },
      { t: "Akun anonim yang mengaku 'orang dalam'", bin: "cek" },
      { t: "Judul berita sensasional tanpa isi data", bin: "cek" }
    ]
  },
  {
    id: "labanekdot", name: "Lab Susun Anekdot", emoji: "😄", el: 3, type: "seq",
    desc: "Bagian anekdot 'Papan Imbauan' teracak. Susun kembali sesuai strukturnya agar humor dan kritiknya tersampaikan.",
    hint: "Abstraksi (gambaran awal) → Orientasi (latar) → Krisis (kejanggalan) → Reaksi (tanggapan tokoh) → Koda (penutup/pesan).",
    steps: [
      "Abstraksi: Di sebuah kelurahan, ada kejadian lucu soal tempat sampah.",
      "Orientasi: Pak RT memasang papan 'Buanglah Sampah pada Tempatnya' di dekat pantai.",
      "Krisis: Seminggu kemudian, sampah justru menumpuk di bawah papan itu.",
      "Reaksi: Warga berkata, \"Lho, kan papannya bilang tempatnya di sini, Pak!\"",
      "Koda: Ternyata imbauan saja tidak cukup tanpa tempat sampah yang benar-benar tersedia."
    ]
  },
  {
    id: "labnegosiasi", name: "Lab Alur Negosiasi Pasar", emoji: "🐟", el: 3, type: "seq",
    desc: "Rekonstruksi negosiasi jual-beli ikan cakalang di Pasar Gamalama dari awal hingga kesepakatan.",
    hint: "Orientasi → Pengajuan → Penawaran (bisa bolak-balik) → Persetujuan → Penutup.",
    steps: [
      "Orientasi: \"Selamat pagi, Bu. Ikan cakalangnya segar?\"",
      "Pengajuan: \"Saya mau dua kilo. Berapa harganya, Bu?\"",
      "Penawaran: \"Rp60.000 sekilo, Nak.\" — \"Bisa Rp50.000, Bu?\"",
      "Penawaran balik: \"Rp55.000 ya, karena baru diangkat pagi ini.\"",
      "Persetujuan: \"Baik, Bu. Saya ambil dua kilo dengan harga itu.\"",
      "Penutup: \"Terima kasih, Bu. Semoga laris!\""
    ]
  },
  {
    id: "labhikayat", name: "Lab Pasang Unsur Sastra", emoji: "📜", el: 1, type: "match",
    desc: "Pasangkan istilah unsur dan ciri hikayat/puisi dengan pengertian atau contohnya.",
    hint: "Ingat: unsur intrinsik ada di dalam teks; ekstrinsik di luar teks. Ciri hikayat: kemustahilan, istana sentris, anonim, arkais.",
    pairs: [
      ["Amanat", "Pesan yang ingin disampaikan pengarang"],
      ["Latar", "Waktu, tempat, dan suasana cerita"],
      ["Kemustahilan", "Burung bayan dapat berbicara dan menasihati"],
      ["Istana sentris", "Cerita berpusat pada raja dan kehidupan istana"],
      ["Anonim", "Pengarang cerita tidak diketahui"],
      ["Kata arkais", "Hatta, sahibulhikayat, syahdan"],
      ["Nilai religius", "Ajaran yang berkaitan dengan ketuhanan"],
      ["Personifikasi", "Ombak berbisik pada pasir pagi"]
    ]
  },
  {
    id: "labdebat", name: "Lab Peran dalam Debat", emoji: "⚖️", el: 1, type: "match",
    desc: "Siapa melakukan apa? Cocokkan komponen debat dengan tugasnya.",
    hint: "Afirmasi = pro, oposisi = kontra, netral = dua sisi, moderator = memandu, notulen = mencatat, juri = menilai.",
    pairs: [
      ["Mosi", "Topik atau pernyataan yang diperdebatkan"],
      ["Tim afirmasi", "Mendukung mosi"],
      ["Tim oposisi", "Menolak mosi"],
      ["Tim netral", "Memberi pandangan dari dua sisi"],
      ["Moderator", "Memandu jalannya debat dan mengatur waktu"],
      ["Notulen", "Mencatat argumen selama debat"],
      ["Juri", "Menilai kekuatan argumen dan menentukan hasil"]
    ]
  },
  {
    id: "labtokoh", name: "Lab Linimasa Tokoh", emoji: "⏳", el: 2, type: "timeline",
    desc: "Susun peristiwa penting dalam hidup Ki Hajar Dewantara dari yang paling awal hingga paling akhir.",
    hint: "Biografi disusun kronologis: lahir → perjuangan → pendidikan → jabatan → wafat & penghormatan.",
    events: [
      { y: "1889", t: "Lahir di Yogyakarta sebagai R.M. Soewardi Soerjaningrat" },
      { y: "1913", t: "Menulis kritik terhadap pemerintah kolonial dan diasingkan ke Belanda" },
      { y: "1922", t: "Mendirikan Perguruan Taman Siswa di Yogyakarta" },
      { y: "1945", t: "Menjadi Menteri Pengajaran pertama Republik Indonesia" },
      { y: "1959", t: "Wafat; hari lahirnya diperingati sebagai Hari Pendidikan Nasional" }
    ]
  }
];

const EBOOKS = [
  {
    id: "ebteks", title: "Ringkasan Teks Kelas X — Fase E", emoji: "📘",
    pages: [
      { h: "CP Fase E — Bahasa Indonesia", t: "Elemen: Menyimak · Membaca dan Memirsa · Berbicara dan Mempresentasikan · Menulis.\nPada akhir Fase E, murid mengevaluasi gagasan dan pesan teks aural, visual, dan audiovisual; mengevaluasi kredibilitas sumber; mempresentasikan gagasan secara sistematis, kritis, dan kreatif; serta menulis dan memublikasikan karya di media cetak, elektronik, atau digital." },
      { h: "1 · Laporan Hasil Observasi Kompleks", t: "Tujuan: menyajikan hasil pengamatan secara sistematis, objektif, faktual, dan rinci.\nStruktur: pernyataan umum → deskripsi bagian → deskripsi manfaat.\nKebahasaan: kata kerja relasional (adalah, merupakan, terdiri atas), istilah teknis, kata baku, kalimat berbasis data." },
      { h: "2 · Teks Eksposisi", t: "Tujuan: memaparkan gagasan yang didukung argumen dan fakta.\nStruktur: tesis → argumentasi → penegasan ulang.\nKebahasaan: konjungsi kausal, kata kerja mental, kata rujukan (berdasarkan, menurut), istilah teknis." },
      { h: "3 · Teks Anekdot", t: "Tujuan: menyampaikan kritik sosial secara jenaka.\nStruktur: abstraksi → orientasi → krisis → reaksi → koda.\nKebahasaan: kalimat langsung, pertanyaan retoris, konjungsi temporal. Etika: kritik perilaku/kebijakan, bukan SARA." },
      { h: "4 · Hikayat & Cerita Rakyat", t: "Ciri hikayat: istana sentris, kemustahilan, kesaktian, anonim, bahasa arkais.\nUnsur intrinsik: tema, alur, latar, tokoh, sudut pandang, gaya bahasa, amanat.\nUnsur ekstrinsik: nilai budaya, moral, religius, sosial." },
      { h: "5 · Teks Negosiasi", t: "Tujuan: mencapai kesepakatan.\nStruktur: orientasi → pengajuan → penawaran → persetujuan → penutup.\nKebahasaan: kalimat persuasif, permintaan & penolakan santun, kalimat bersyarat." },
      { h: "6 · Teks Debat", t: "Komponen: mosi, tim afirmasi, oposisi, netral, moderator, notulen, juri.\nArgumen kuat: klaim + alasan + bukti. Hindari kesalahan nalar: ad hominem, generalisasi berlebihan, sebab-akibat keliru." },
      { h: "7 · Biografi", t: "Struktur: orientasi → peristiwa dan masalah → reorientasi.\nKebahasaan: kata ganti (ia, beliau), kata kerja material, konjungsi temporal. Temukan makna tersirat dan nilai keteladanan." },
      { h: "8 · Puisi", t: "Unsur fisik: diksi, imaji, majas, rima, tipografi.\nUnsur batin: tema, rasa, nada, amanat.\nPublikasi: antologi, puisi digital, musikalisasi — cantumkan nama penulis, jangan menjiplak." }
    ]
  },
  {
    id: "ebmendalam", title: "Belajar Mendalam: Memahami–Mengaplikasi–Merefleksi", emoji: "🧠",
    pages: [
      { h: "Tiga Pengalaman Belajar", t: "Memahami: mengenali struktur, kebahasaan, dan makna teks.\nMengaplikasi: menerapkan pemahaman untuk menulis, berbicara, dan memecahkan masalah nyata.\nMerefleksi: mengevaluasi proses dan hasil belajar, lalu memperbaikinya." },
      { h: "Tiga Prinsip", t: "Berkesadaran: tahu tujuan belajar dan prosesnya.\nBermakna: terhubung dengan kehidupan nyata di sekitar.\nMenggembirakan: belajar dengan suasana positif dan menantang." },
      { h: "Daftar Periksa Kredibilitas", t: "1. Siapa penulis/lembaganya?\n2. Adakah data dan tanggal?\n3. Apakah bahasanya provokatif?\n4. Apakah sumber lain mengatakan hal yang sama?\n5. Apa tujuan pembuatnya?" },
      { h: "Etika Publikasi Karya", t: "Cantumkan nama penulis dan sumber rujukan, minta izin sebelum memublikasikan foto/suara orang lain, hindari ujaran kebencian dan SARA, dan jangan menjiplak karya orang lain." }
    ]
  }
];

const GLOS = [
  ["LHO kompleks", "Laporan hasil observasi yang rinci, sistematis, objektif, dan memakai bahasa ilmiah."],
  ["Kata kerja relasional", "Kata kerja penghubung: adalah, merupakan, terdiri atas."],
  ["Istilah teknis", "Kata khusus bidang ilmu tertentu, misalnya abrasi, salinitas, ekosistem."],
  ["Tesis", "Pendapat utama penulis dalam teks eksposisi."],
  ["Kredibilitas", "Tingkat keterpercayaan suatu sumber informasi."],
  ["Kesalahan nalar", "Cara berpikir keliru dalam berargumen, misalnya generalisasi berlebihan atau ad hominem."],
  ["Anekdot", "Cerita singkat lucu yang mengandung kritik sosial atau pesan."],
  ["Koda", "Bagian penutup anekdot yang berisi simpulan atau pesan."],
  ["Hikayat", "Prosa lama Melayu yang istana sentris dan mengandung kemustahilan."],
  ["Kata arkais", "Kata kuno yang jarang dipakai lagi: hatta, syahdan, sahibulhikayat."],
  ["Unsur intrinsik", "Unsur pembangun dari dalam karya: tema, alur, latar, tokoh, amanat."],
  ["Unsur ekstrinsik", "Unsur dari luar karya: nilai budaya, moral, religius, sosial."],
  ["Negosiasi", "Interaksi untuk mencapai kesepakatan antara pihak yang berbeda kepentingan."],
  ["Mosi", "Topik atau pernyataan yang diperdebatkan."],
  ["Afirmasi / Oposisi", "Tim pendukung mosi / tim penolak mosi."],
  ["Biografi", "Riwayat hidup seseorang yang ditulis oleh orang lain."],
  ["Makna tersirat", "Makna yang tidak dinyatakan langsung dan perlu disimpulkan."],
  ["Diksi", "Pilihan kata dalam puisi."],
  ["Imaji", "Citraan yang membangkitkan pancaindra pembaca."],
  ["Majas", "Gaya bahasa: personifikasi, metafora, simile, hiperbola, litotes."]
];

const SUMBER = [
  ["📄 Panduan Mata Pelajaran Bahasa Indonesia (Pusat Kurikulum dan Pembelajaran, 2025)", "Rujukan utama: CP Fase E, pemetaan materi esensial (LHO kompleks, anekdot), dan contoh ATP Kelas X."],
  ["📗 Buku Bahasa Indonesia Kelas X Kurikulum Merdeka", "Buku siswa dan buku guru resmi Kemendikdasmen (SIBI) sebagai bacaan pendamping."],
  ["🔭 Pengamatan Virtual Langit Malam (PVLM) Observatorium Bosscha", "Contoh sarana observasi virtual yang disarankan panduan untuk LHO."],
  ["📚 KBBI Daring & PUEBI/EYD", "Rujukan kata baku dan ejaan untuk semua tulisan."],
  ["🛡️ Cek Fakta & Literasi Digital", "Panduan memeriksa hoaks dan kredibilitas sumber untuk eksposisi dan debat."],
  ["🏝️ Cerita rakyat & tokoh Maluku Utara", "Sumber lisan keluarga/tokoh adat, museum, dan perpustakaan daerah untuk unit hikayat dan biografi."]
];

const FORUM_SEED = [
  {
    id: 1, av: "NA", who: "Nadia A.", role: "", time: "2 hari lalu",
    title: "Apa bedanya LHO dan teks eksposisi?",
    body: "Dua-duanya pakai data. Bagaimana cara membedakannya saat ujian?",
    replies: [
      { av: "GR", who: "Bu Guru", role: "guru", time: "1 hari lalu", body: "Lihat tujuannya. LHO hanya melaporkan hasil pengamatan secara objektif, tanpa pendapat. Eksposisi memakai data untuk mendukung PENDAPAT (tesis) penulis. Kalau ada tesis dan penegasan ulang, berarti eksposisi." }
    ]
  },
  {
    id: 2, av: "RF", who: "Rizal F.", role: "", time: "3 hari lalu",
    title: "Bolehkah anekdot menyindir guru atau sekolah?",
    body: "Kelompok kami mau membuat anekdot tentang antrean kantin yang lama. Apakah itu boleh?",
    replies: [
      { av: "GR", who: "Bu Guru", role: "guru", time: "2 hari lalu", body: "Boleh, selama yang dikritik adalah sistem atau perilakunya (antrean, pelayanan), bukan pribadi seseorang, dan disampaikan dengan santun. Anekdot yang baik membuat orang tertawa sekaligus berpikir untuk memperbaiki keadaan." },
      { av: "SL", who: "Sinta L.", role: "", time: "1 hari lalu", body: "Ide bagus! Jangan lupa koda-nya berisi pesan atau usulan perbaikan." }
    ]
  },
  {
    id: 3, av: "AM", who: "Arif M.", role: "", time: "5 hari lalu",
    title: "Cerita rakyat Ternate apa yang bisa kami rekam?",
    body: "Untuk proyek arsip suara, kami bingung memilih cerita. Ada saran?",
    replies: [
      { av: "WK", who: "Wulan K.", role: "", time: "4 hari lalu", body: "Coba tanya kakek-nenek tentang asal-usul Danau Tolire atau kisah-kisah dari masa Kesultanan Ternate. Biasanya tiap keluarga punya versi sendiri, itu menarik dibandingkan!" }
    ]
  }
];

const BOT_RULES = [
  [/lho|observasi|laporan/i, "LHO kompleks: pernyataan umum (definisi & klasifikasi) → deskripsi bagian → deskripsi manfaat. Gunakan kata kerja relasional (adalah, merupakan, terdiri atas), istilah teknis, kata baku, dan kalimat berbasis data."],
  [/eksposisi|tesis|argumen/i, "Teks eksposisi: tesis → argumentasi (alasan + fakta/data) → penegasan ulang. Gunakan konjungsi kausal (karena, sehingga) dan kata rujukan (berdasarkan, menurut)."],
  [/anekdot|lucu|sindir/i, "Anekdot: abstraksi → orientasi → krisis → reaksi → koda. Kritik ditujukan pada perilaku/kebijakan, bukan SARA atau fisik seseorang."],
  [/hikayat|cerita rakyat|legenda/i, "Ciri hikayat: istana sentris, kemustahilan, kesaktian, anonim, bahasa arkais (hatta, syahdan). Unsur intrinsik: tema, alur, latar, tokoh, amanat; ekstrinsik: nilai budaya, moral, religius, sosial."],
  [/negosiasi|tawar/i, "Negosiasi: orientasi → pengajuan → penawaran → persetujuan → penutup. Ungkapan santun: 'Bagaimana kalau…?', 'Mohon maaf, kami belum bisa…', 'Kami setuju dengan syarat…'"],
  [/debat|mosi|afirmasi|oposisi/i, "Debat: mosi diperdebatkan tim afirmasi (pro), oposisi (kontra), dan netral; dipandu moderator, dicatat notulen, dinilai juri. Argumen kuat = klaim + alasan + bukti."],
  [/nalar|ad hominem|generalisasi/i, "Kesalahan nalar yang sering muncul: ad hominem (menyerang pribadi), generalisasi berlebihan, sebab-akibat keliru, ikut-ikutan (bandwagon), dilema palsu."],
  [/biografi|tokoh|riwayat/i, "Biografi: orientasi → peristiwa dan masalah → reorientasi (keteladanan). Kebahasaan: kata ganti beliau/ia, kata kerja material, konjungsi temporal."],
  [/puisi|majas|diksi|rima/i, "Puisi — unsur fisik: diksi, imaji, majas, rima, tipografi; unsur batin: tema, rasa, nada, amanat. Majas: personifikasi, metafora, simile, hiperbola, litotes."],
  [/kredibel|hoaks|hoax|sumber/i, "Uji kredibilitas: siapa penulis/lembaganya, adakah data & tanggal, apakah bahasanya provokatif, dan apakah sumber lain mengatakan hal yang sama."],
  [/baku|ejaan|kbbi/i, "Contoh kata baku: analisis, sistem, praktik, kualitas, objektif, nasihat. Cek di KBBI daring dan pedoman EYD."],
  [/fakta|opini/i, "Fakta dapat dibuktikan dengan data; opini adalah pendapat atau penilaian (sebaiknya, paling, menurut saya). Teks yang kuat memadukan opini dengan fakta."]
];

const BOT_FALLBACK = "Maaf, Sahabat Bahasa belum menemukan jawabannya 🤔. Coba kata kunci: LHO, eksposisi, anekdot, hikayat, negosiasi, debat, biografi, puisi, kesalahan nalar, kredibilitas, kata baku, atau fakta-opini. Kamu juga bisa bertanya kepada guru di menu Diskusi.";

window.LMS_CONTENT = {
  meta: {
    id: "bahasa-indonesia", name: "Bahasa Indonesia", short: "B. Indonesia", emoji: "🇮🇩", color: "#c2410c",
    kelas: "X", fase: "Fase E", sekolah: "SMAN 1 Kota Ternate", lsKey: "lms_bindo_x_sman1ternate_v1", sheetId: "",
    moto: ["Menyimak", "Menalar", "Berkarya"],
    sideMoto: ["Baca,", "Kritisi,", "Publikasikan."],
    quote: "“Bahasa menunjukkan bangsa.”",
    note: "Kelas X · Fase E · 8 unit · selaras Panduan Mata Pelajaran Bahasa Indonesia 2025 (Pusat Kurikulum dan Pembelajaran)",
    rasional: "LMS ini disusun berdasarkan Panduan Mata Pelajaran Bahasa Indonesia 2025: CP Fase E (Menyimak; Membaca dan Memirsa; Berbicara dan Mempresentasikan; Menulis), contoh ATP Kelas X (6 tujuan pembelajaran), dan materi esensial Fase E seperti Laporan Hasil Observasi Kompleks dan Teks Anekdot. Delapan unit — LHO kompleks, eksposisi, anekdot, hikayat & cerita rakyat (Semester 1) serta negosiasi, debat, biografi, dan puisi (Semester 2) — dirancang dengan alur pembelajaran mendalam memahami → mengaplikasi → merefleksi yang berkesadaran, bermakna, dan menggembirakan, dengan konteks lokal Ternate dan Maluku Utara.",
    refText: "Ringkasan materi dan panduan belajar mendalam tersedia di menu Buku Digital.",
    botName: "Sahabat Bahasa",
    botIntro: "Halo! 👋 Saya Sahabat Bahasa Kelas X. Tanyakan struktur teks (LHO, eksposisi, anekdot, negosiasi, debat, biografi), unsur hikayat & puisi, atau cara menguji kredibilitas sumber.",
    botQuick: ["struktur LHO", "teks anekdot", "debat", "majas puisi", "kredibilitas sumber"],
    about: "LMS Bahasa Indonesia Kelas X · Fase E · 8 unit (2 semester) selaras Panduan Mata Pelajaran Bahasa Indonesia 2025 — SMA Negeri 1 Kota Ternate.",
    labHero: "Belajar seperti peneliti bahasa: bedah struktur, uji kredibilitas sumber, susun alur cerita dan negosiasi, serta pasangkan konsep. Tandai selesai setelah tantangannya kamu tuntaskan!",
    logoText: "Aa",
    scene: ["Bahasa Kita", "Kritis!", "Aa · Bb", "🖋️"]
  },
  KKTP: 75,
  ELEMENTS: [
    { id: 1, name: "Menyimak", emoji: "🎧", desc: "Mengevaluasi gagasan dan pesan teks nonsastra aural serta unsur intrinsik–ekstrinsik teks sastra aural." },
    { id: 2, name: "Membaca dan Memirsa", emoji: "📖", desc: "Mengevaluasi informasi, menginterpretasi, menilai kredibilitas, dan membandingkan isi teks visual/audiovisual." },
    { id: 3, name: "Berbicara dan Mempresentasikan", emoji: "🎤", desc: "Mempresentasikan gagasan dalam monolog, dialog, dan gelar wicara secara sistematis, kritis, dan kreatif." },
    { id: 4, name: "Menulis", emoji: "✍️", desc: "Menulis gagasan dan imajinasi secara logis, kritis, kreatif, serta memublikasikan karya." }
  ],
  UNITS, EXAM, GAMES, LABS, EBOOKS, GLOS, SUMBER, FORUM_SEED, BOT_RULES, BOT_FALLBACK
};
})();
