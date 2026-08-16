/**
 * Identitas CV Citra Teknologi Nusantara.
 *
 * ────────────────────────────────────────────────────────────────────
 * SEBAGIAN NILAI DI BAWAH INI MASIH ISIAN SEMENTARA.
 * Daftar lengkapnya, beserta dari mana sumber datanya, ada di
 * ISI-YANG-HARUS-DIGANTI.md di akar proyek. Kode `GANTI G-n` di bawah
 * merujuk ke baris di berkas itu.
 * ────────────────────────────────────────────────────────────────────
 *
 * Penanda kuning [TBD] yang dulu tampil di halaman sudah dicabut atas
 * permintaan Anda, jadi isian sementara ini TIDAK LAGI TERLIHAT sebagai
 * sesuatu yang belum jadi. Penandanya pindah ke sini — dan ke
 * `npm run cek`, yang mencetak daftarnya setiap kali build.
 *
 * PERINGATAN R5: nomor legalitas dicocokkan langsung dengan dokumen asli
 * (akta, NIB, NPWP), bukan dari ingatan. Salah satu digit = gagal
 * verifikasi pengadaan, dan itu justru kegagalan yang situs ini dibangun
 * untuk mencegahnya.
 */

export const site = {
  /** S4.1 — nama persis seperti di akta. Wajib tampil penuh di hero (S1.1). */
  legalName: "CV Citra Teknologi Nusantara",

  /** S1.2 — deskriptor netral sektor. Tidak menyebut sektor mana pun. */
  descriptor:
    "Membangun dan merawat sistem informasi dan aplikasi web untuk instansi dan perusahaan.",

  /** GANTI G-8 — N9 mewajibkan .co.id atau .com. */
  domain: "citrateknologi.co.id",

  /** GANTI G-7 — S6.1. Format internasional tanpa tanda plus, untuk wa.me. */
  phone: "6281234567890",

  /** GANTI G-8 — S6.2. Email domain sendiri; Gmail dilarang. */
  email: "halo@citrateknologi.co.id",

  /** GANTI G-3 — S6.3. */
  hours: "Senin–Jumat, 08.30–17.00 WIB",
};

/**
 * S4 — Legalitas. Bagian pembeda utama V1.
 *
 * GANTI G-4 — SELURUH BLOK INI. Angka di bawah adalah isian sementara
 * dan TIDAK MERUJUK KE BADAN USAHA MANA PUN. Ini satu-satunya kelompok
 * data di proyek ini yang salahnya berakibat langsung: bagian pengadaan
 * akan menyalin nomornya dan mencocokkannya dengan berkas penawaran.
 *
 * Ditampilkan sebagai teks yang bisa diseleksi dan disalin, bukan gambar,
 * supaya nomornya tidak perlu diketik ulang.
 */
export const legality = {
  nib: "0123456789012",
  npwp: "31.234.567.8-412.000",
  address: "Jl. Depati Amir No. 27, Pangkalpinang, Kepulauan Bangka Belitung 33684",
  founded: "2026", // S4.5 — opsional
};

/**
 * S4.6–S4.8 — tiga anggota tim.
 *
 * GANTI G-5 — nama, peran, dan foto.
 *
 * `photo: null` menampilkan monogram inisial, BUKAN stock photo. S4.8
 * melarang wajah yang bukan wajah tim Anda, dan larangan itu tidak gugur
 * hanya karena datanya sementara — justru sebaliknya: halaman ini sekarang
 * terlihat selesai, jadi foto orang asing di sini akan paling meyakinkan
 * persis saat paling berbahaya.
 *
 * Isi `photo` dengan path ke berkas di `public/`, misal `/tim/rangga.jpg`.
 */
export const team: { name: string; role: string; photo: string | null }[] = [
  { name: "Rangga Prasetyo", role: "Fullstack Developer", photo: null },
  { name: "Dian Ayu Lestari", role: "UI/UX Designer", photo: null },
  { name: "Bayu Ramadhan", role: "Project Manager & Business Analyst", photo: null },
];

/**
 * S1.4 — baris kepercayaan di hero.
 *
 * Kualitatif, bukan numerik. C3 melarang angka statistik apa pun karena
 * tidak ada yang bisa dibuktikan. Ketiganya di bawah ini bisa.
 */
export const trustLine = [
  "Badan usaha resmi",
  "Tim 3 orang",
  "Satu penanggung jawab per project",
] as const;

/**
 * Satu halaman, jadi nav adalah anchor ke section — bukan tautan antar halaman.
 * S7 melarang tautan ke situs portofolio pribadi, di nav maupun di footer.
 */
export const nav = [
  { label: "Layanan", href: "#layanan" },
  { label: "Cara kerja", href: "#cara-kerja" },
  { label: "Legalitas", href: "#legalitas" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
] as const;
