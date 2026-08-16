#!/usr/bin/env node
/**
 * Mencari isian sementara yang masih tertinggal di dalam kode.
 *
 * Penanda kuning [TBD] yang dulu tampil di halaman sudah dicabut, dan itu
 * menghilangkan satu-satunya pengingat yang terlihat. Berkas ini
 * menggantikannya: kalau isian sementara masih terpasang, `npm run build`
 * mencetak daftarnya sebelum berhenti.
 *
 * SENGAJA MEMERIKSA NILAINYA, BUKAN KOMENTARNYA. Komentar `GANTI G-n` di
 * `src/data/` ikut tertinggal kalau seseorang mengganti nilainya tanpa
 * membersihkan komentarnya — dan pemeriksa yang berteriak setelah
 * pekerjaannya selesai akan diabaikan dalam seminggu.
 *
 * Keluar dengan kode 0 apa pun hasilnya: yang tayang bukan urusan skrip.
 * Yang penting daftarnya lewat di depan mata sebelum deploy.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;

/** Nilai sementara → kode di ISI-YANG-HARUS-DIGANTI.md. */
const SEMENTARA = [
  ["0123456789012", "G-4", "NIB", "src/data/site.ts"],
  ["31.234.567.8-412.000", "G-4", "NPWP badan", "src/data/site.ts"],
  ["Jl. Depati Amir No. 27", "G-4", "alamat badan usaha", "src/data/site.ts"],
  ["6281234567890", "G-7", "nomor WhatsApp", "src/data/site.ts"],
  ["citrateknologi.co.id", "G-8", "domain & email", "src/data/site.ts"],
  ["Rangga Prasetyo", "G-5", "nama anggota tim", "src/data/site.ts"],
  ["Rp8 juta – Rp150 juta", "G-9", "rentang harga", "src/data/content.ts"],
  ["Sistem informasi berbasis web", "G-2", "daftar layanan & cara kerja", "src/data/content.ts"],
  ["Milik Anda, sepenuhnya.", "G-3", "jawaban FAQ", "src/data/content.ts"],
  ["pemerintahan desa, dipakai setiap hari", "G-1", "bukti operasional", "src/data/content.ts"],
  ["citrateknologi.co.id", "G-8", "og:url & canonical", "index.html"],
];

const BERKAS = ["src/data/site.ts", "src/data/content.ts", "index.html"];
const isi = new Map(BERKAS.map((f) => [f, readFileSync(join(ROOT, f), "utf8")]));

const sisa = SEMENTARA.filter(([nilai, , , berkas]) => isi.get(berkas)?.includes(nilai));

if (sisa.length === 0) {
  console.log("✓ Tidak ada isian sementara tersisa dalam teks.");
  console.log("  G-6 (logo & favicon) tidak bisa diperiksa di sini — itu berkas gambar.");
  process.exit(0);
}

const lebar = 74;
console.log("");
console.log("\x1b[43m\x1b[30m" + " ISI SEMENTARA MASIH TERPASANG ".padEnd(lebar) + "\x1b[0m");
console.log("");

const kelompok = new Map();
for (const [, kode, apa, berkas] of sisa) {
  if (!kelompok.has(kode)) kelompok.set(kode, { apa: new Set(), berkas: new Set() });
  kelompok.get(kode).apa.add(apa);
  kelompok.get(kode).berkas.add(berkas);
}

for (const [kode, { apa, berkas }] of [...kelompok].sort()) {
  console.log(`  ${kode.padEnd(5)} ${[...apa].join(", ")}`);
  console.log(`        \x1b[2m${[...berkas].join(", ")}\x1b[0m`);
}

console.log("");
console.log("  Situs tetap dibangun — tampilannya memang sudah selesai.");
console.log("  Yang belum: isinya. Rinciannya di \x1b[1mISI-YANG-HARUS-DIGANTI.md\x1b[0m");
console.log("");
console.log("  \x1b[1mJANGAN deploy selama G-4 masih di daftar ini.\x1b[0m Nomor legalitas");
console.log("  yang salah membatalkan seluruh tujuan situs ini.");
console.log("");
console.log("  \x1b[2mG-6 (logo & favicon) tidak muncul di daftar ini — itu berkas");
console.log("  gambar, dan skrip tidak bisa menilai apakah sudah logo asli.\x1b[0m");
console.log("");
