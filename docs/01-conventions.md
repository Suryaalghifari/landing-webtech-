# 01 — Konvensi Koding & Definition of Done

Tingkat konvensi proyek ini: **Sedang** — Lapis 0 (inti, berlaku apa pun proyeknya) + Lapis 1
(konsistensi). Lapis 2 (struktur berlapis, DTO, CI gate) sengaja tidak dipasang: satu aplikasi
statis tanpa DB/API, dan konvensi berlebih adalah mode kegagalan proyek kecil. Naik ke Lapis 2
nanti kalau bagiannya bertambah — menaikkan murah, menurunkan mahal.

## Lapis 0 — Inti

- **Nama = dokumentasi.** Nama menjelaskan maksud, bukan tipe. Fungsi = kata kerja; boolean =
  `is/has/can`; koleksi = plural.
- **Satu konsep = satu nama**, di seluruh repo. Sinonim lebih merusak daripada nama jelek: dua
  nama untuk satu benda membuat pencarian mengembalikan separuh hasil.
- **Komentar: default NOL.** Ini pengecualian yang harus dibenarkan, bukan kelengkapan berkas.
  **Uji tunggal:** tanpa komentar ini, apakah engineer kompeten akan "merapikan" baris ini lalu
  merusaknya? Tidak → jangan tulis; perbaiki nama atau strukturnya.
- **Gaya komentar proyek ini (keputusan user): nama fungsi self-documenting — tanpa komentar
  panjang.** Standar software engineer kelas atas: nama membawa makna, komentar hanya untuk akibat
  yang tak terbaca dari nama (satuan, efek samping, invarian pemanggilan). Penegakan bisa lewat
  skill Hermes (mis. `requesting-code-review`, `simplify-code`).
- **Tiga larangan komentar:** menerjemahkan kode · merujuk ke mana pun (dokumen, §, nomor tiket —
  kode tidak menautkan ke dokumen; dokumen yang saling menautkan) · header berkas yang meringkas
  isi. Docblock tunduk uji yang sama.
- **Fungsi kecil & fokus.** Idealnya < 20 baris, satu tingkat abstraksi, ≤ 3–4 parameter. Early
  return daripada nested if.
- **Error handling eksplisit.** Jangan telan error diam-diam. Validasi di batas input — fail fast.
- **Konfigurasi via config, bukan hardcode.** Di proyek ini: isi halaman di `src/data/`, bukan di
  komponen.
- **Tidak ada dead code / kode ter-komentar.** Git sudah menyimpan riwayat.
- **TODO berformat:** `// TODO: <apa> (<konteks/kapan>)`.

## Lapis 1 — Konsistensi

- **Formatter: belum dipasang.** Saat dipasang (usulan Prettier), perintahnya masuk DoD — satu
  sumber, jangan dua tempat.
- **Penamaan formal:** komponen `PascalCase`, fungsi/variabel `camelCase`, konstanta `UPPER_SNAKE`
  (konvensi TS), tipe `PascalCase`. Nama berkas = nama isinya; satu komponen per berkas.
- **Type everything:** TS strict aktif, hindari `any`. Typecheck wajib hijau sebelum selesai.
- **DRY — rule of three:** duplikasi *ketiga* baru diekstrak. Jangan over-abstract.
- **Kelompokkan by domain:** `src/data/` (isi), `src/components/blocks|layout|ui` (tampilan),
  `src/pages/` (halaman). Benda baru masuk ke folder yang sudah menampung benda sejenis — cari dua
  tetangga dulu, tiru letak & bentuknya.
- **Import terurut & bersih.**

## Spesifik stack (React 19 + Vite + Tailwind 4)

- **Komponen tanpa teks konten.** Seluruh isi halaman hanya dari `src/data/` — menambahkan teks di
  komponen = melanggar kontrak konten (lihat docs/02-kontrak-konten.md).
- **Animasi CSS, bukan JavaScript.** Pakai `animation-timeline: view()` seperti `Reveal`/`Stagger`;
  jangan pasang ulang pustaka motion. **Keadaan bawaan TERLIHAT** (opacity 1); animasi hanya dalam
  `@supports` — konten tidak boleh bergantung pada JavaScript (prerender, N1).
- **Tanpa router, tanpa pustaka animasi.** `react-router-dom` dan `motion` sengaja dicabut — jangan
  pasang ulang tanpa keputusan.
- **Font di-host sendiri** di `public/fonts/` — jangan memanggil Google Fonts.
- **Prerender:** jangan menyembunyikan konten default yang akan tercetak ke HTML statis.
- **Tailwind:** pakai token/utilitas yang ada; CSS kustom hanya kalau perlu.

## Definition of Done — satu sumber

Aturan #8 AGENTS.md menunjuk ke sini. Perintah dijalankan lewat `/kickoff verify`, berurutan,
berhenti di kegagalan pertama:

1. **Typecheck:** `npm run typecheck` (tsc --noEmit)
2. **Cek isi:** `npm run cek` — daftar isian sementara G-list harus bersih (dan jangan deploy
   selama G-4 masih muncul)
3. **Build:** `npm run build` — vite build + prerender + cek ikut jalan
4. **Verifikasi alur nyata (end-to-end):** `npm run preview` → buka `localhost:4173` di
   **device mode 360px** (N3 — tanpa scroll horizontal) → **matikan JavaScript di DevTools** —
   teks legalitas & kontak harus tetap terbaca (N1) → `npm run cek` bersih

> Belum diverifikasi = 🟨, bukan ✅. "Kelihatan jalan" ≠ selesai.
