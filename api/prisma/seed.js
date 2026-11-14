/* .env hanya dibaca bila paket dotenv tersedia (lokal/Docker); di Vercel variabel sudah tersedia. */
try { await import("dotenv/config"); } catch {}
import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

const LMS_ENTRIES = [
  { id:"matematika", klass:"X", name:"Matematika", short:"Matematika", icon:"calculator", color:"#1f6fe5", file:"mapel/matematika.html", pub:true },
  { id:"fisika",     klass:"X", name:"Fisika",     short:"Fisika",     icon:"atom",       color:"#5f3dc4", file:"mapel/fisika.html",     pub:true },
  { id:"sejarah", klass:"X", name:"Sejarah", short:"Sejarah", icon:"scroll", color:"#c92a2a", file:"mapel/sejarah.html", pub:true },
  { id:"pendais",          klass:"X", name:"Pendidikan Agama Islam", short:"PAI",  icon:"book",       color:"#0f766e", file:"mapel/pendais.html",          pub:true },
];

/* Mapel tambahan yang LMS-nya sudah lengkap. Dimasukkan HANYA bila daftar LMS
   masih berisi mapel bawaan/otomatis saja (admin belum menyusun daftarnya sendiri).
   Untuk menyembunyikan mapel, matikan "Tampilkan di daftar siswa" — jangan dihapus. */
const EXTRA_LMS_ENTRIES = [
  { id:"bahasa-inggris",   klass:"X", name:"Bahasa Inggris",   short:"B. Inggris",   icon:"globe",     color:"#0b7285", file:"mapel/bahasa-inggris.html",   pub:true },
  { id:"bahasa-indonesia", klass:"X", name:"Bahasa Indonesia", short:"B. Indonesia", icon:"book-open", color:"#c2410c", file:"mapel/bahasa-indonesia.html", pub:true },
  { id:"biologi",          klass:"X", name:"Biologi",          short:"Biologi",      icon:"dna",       color:"#2f9e44", file:"mapel/biologi.html",          pub:true },
  { id:"kimia",            klass:"X", name:"Kimia",            short:"Kimia",        icon:"flask",     color:"#e8590c", file:"mapel/kimia.html",            pub:true },
  { id:"geografi",         klass:"X", name:"Geografi",         short:"Geografi",     icon:"map",       color:"#1971c2", file:"mapel/geografi.html",         pub:true },
];

const SCHOOL_PROFILE = {
  id: "default",
  name: "SMA Negeri 1 Kota Ternate",
  npsn: "60200723",
  addr: "Jl. Ki Hajar Dewantara, Takoma, Ternate Tengah, Kota Ternate, Maluku Utara",
  telp: "",
  email: "",
  ppdb: "",
};

/* Foto slider bawaan: gedung SMA Negeri 1 Kota Ternate (file di public/assets/slider/).
   Hanya dimasukkan bila slider masih kosong — foto yang ditambah/diubah admin tidak disentuh. */
const DEFAULT_SLIDERS = [
  { title: "Gedung Utama SMA Negeri 1 Kota Ternate", imageUrl: "/assets/slider/gedung-utama.jpg", sortOrder: 0, pub: true },
  { title: "Halaman & Gedung Sekolah", imageUrl: "/assets/slider/halaman-sekolah.jpg", sortOrder: 1, pub: true },
  /* wajah siswa sudah diburamkan */
  { title: "Gerbang SMA Negeri 1 Kota Ternate", imageUrl: "/assets/slider/gerbang-sekolah.jpg", sortOrder: 2, pub: true },
];

async function main() {
  /* Akun admin dibuat dari environment — tidak ada kredensial bawaan di kode. */
  const username = process.env.ADMIN_USER;
  const password = process.env.ADMIN_PASS;
  if (!username || !password) {
    console.error("ADMIN_USER dan ADMIN_PASS wajib di-set di environment sebelum seed.");
    /* Saat build di Vercel: jangan gagalkan deploy — lewati pembuatan akun saja. */
    if (!process.env.VERCEL) process.exit(1);
  }

  /* Akun hanya dibuat sekali — sandi TIDAK di-reset tiap restart container.
     Untuk mengganti sandi: hapus baris User ini di database, lalu seed ulang. */
  const existing = username && password ? await prisma.user.findUnique({ where: { username } }) : true;
  if (!existing) {
    const passwordHash = await argon2.hash(password, { type: argon2.argon2id });
    await prisma.user.create({ data: { username, passwordHash } });
    console.log(`Akun admin dibuat: "${username}"`);
  } else if (username && password) {
    console.log(`Akun admin sudah ada: "${username}" (sandi tidak diubah)`);
  }
  const others = username && password
    ? await prisma.user.deleteMany({ where: { username: { not: username } } })
    : { count: 0 };
  if (others.count) console.log(`${others.count} akun lama dihapus — hanya akun admin tetap yang berlaku.`);

  /* Entri LMS di-seed hanya pada boot pertama (profil belum ada).
     Setelah itu entri yang dihapus admin tidak dikembalikan lagi. */
  const prof = await prisma.schoolProfile.findUnique({ where: { id: "default" } });
  if (!prof) {
    const count = await prisma.lmsEntry.count();
    if (count === 0) {
      await prisma.lmsEntry.createMany({ data: LMS_ENTRIES });
      console.log(`${LMS_ENTRIES.length} entri LMS dibuat.`);
    }
    await prisma.schoolProfile.upsert({
      where: { id: "default" },
      update: {},
      create: SCHOOL_PROFILE,
    });
    console.log("Profil sekolah siap.");
  } else {
    console.log("Data sudah pernah di-seed — entri LMS tidak disentuh.");
  }

  const entries = await prisma.lmsEntry.findMany();
  const knownIds = new Set([...LMS_ENTRIES, ...EXTRA_LMS_ENTRIES].map((e) => e.id));
  if (entries.length && entries.every((e) => knownIds.has(e.id))) {
    const added = [];
    for (const e of EXTRA_LMS_ENTRIES) {
      if (!entries.some((x) => x.id === e.id)) { await prisma.lmsEntry.create({ data: e }); added.push(e.name); }
    }
    if (added.length) console.log(`Mapel baru ditambahkan ke daftar LMS: ${added.join(", ")}`);
  }

  const slides = await prisma.slider.findMany();
  const isDefault = (r) => DEFAULT_SLIDERS.some((s) => s.imageUrl === r.imageUrl);
  if (slides.length === 0) {
    for (const s of DEFAULT_SLIDERS) await prisma.slider.create({ data: s });
    console.log(`${DEFAULT_SLIDERS.length} foto gedung dimasukkan ke slider beranda.`);
  } else if (slides.every(isDefault)) {
    /* Slider masih berisi foto bawaan saja (admin belum unggah foto sendiri):
       tambahkan foto bawaan yang baru. Begitu admin mengunggah foto sendiri,
       bagian ini tidak menyentuh slider lagi. */
    const have = new Set(slides.map((r) => r.imageUrl));
    let next = Math.max(...slides.map((r) => r.sortOrder ?? 0)) + 1;
    const added = [];
    for (const s of DEFAULT_SLIDERS) {
      if (!have.has(s.imageUrl)) { await prisma.slider.create({ data: { ...s, sortOrder: next++ } }); added.push(s.title); }
    }
    if (added.length) console.log(`Foto bawaan baru ditambahkan ke slider: ${added.join(", ")}`);
  }
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
