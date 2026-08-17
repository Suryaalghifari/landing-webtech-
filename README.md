# Website CV Citra Teknologi Nusantara — V1

Situs verifikasi satu halaman. **Bukan** alat pencari klien, bukan etalase
portofolio.

**Status: tampilan selesai, isi masih sementara.** Halaman terlihat utuh dan
sudah disetujui, tapi nomor legalitas, nama tim, daftar layanan, jawaban FAQ,
dan harga yang tampil sekarang adalah isian sementara.

> **→ [`ISI-YANG-HARUS-DIGANTI.md`](ISI-YANG-HARUS-DIGANTI.md)** — daftar
> lengkap apa yang harus diganti, di berkas mana, dan kenapa. Baca itu dulu.

```bash
npm run dev        # server pengembangan → localhost:5173
npm run build      # build produksi + prerender + pemeriksaan isi
npm run preview    # lihat hasil build → localhost:4173
npm run cek        # daftar isian sementara yang masih terpasang
npm run typecheck  # tsc --noEmit
```

## Penanda `[TBD]` sudah dicabut

Sebelumnya tiap slot kosong tampil sebagai kotak kuning di halaman, dan build
produksi menolak jalan selama masih ada sisa. Keduanya dilepas 14 Agustus 2026
atas permintaan pemilik proyek, supaya halaman bisa dinilai sebagai situs jadi.

Konsekuensinya perlu ditulis terus terang: **halaman sekarang terlihat selesai
padahal isinya belum.** Tidak ada lagi apa pun di layar yang membedakan data
asli dari isian sementara.

Yang menggantikan penanda itu, keduanya di luar halaman:

- `ISI-YANG-HARUS-DIGANTI.md` — daftar lengkap, dengan alasan tiap butirnya
- `npm run cek` — mencetak sisa isian sementara; ikut jalan di akhir
  `npm run build`. Membaca **nilainya**, bukan komentar `GANTI G-n` di kode,
  karena komentar gampang tertinggal setelah nilainya diganti.

Build tetap berhasil apa pun hasil pemeriksaan. Tapi **jangan deploy selama
G-4 (data legalitas) masih muncul di daftar itu** — nomor NIB atau NPWP yang
salah membatalkan seluruh tujuan situs ini.

## Struktur halaman — PRD §3.1

Tujuh bagian, urutan tetap:

| # | Bagian | Komponen | Latar |
|---|---|---|---|
| S1 | Hero | `HeroAnimated` | putih |
| S2 | Layanan | `ServiceGrid` | abu |
| S3 | Cara kerja | `ProcessSteps` | putih |
| S4 | Legalitas & tim | `LegalityTeam` | **hitam** |
| S5 | FAQ | `FAQAccordion` | putih |
| S6 | Kontak | `ContactSection` | **hitam** |
| S7 | Footer | `Footer` | putih |

## Susunan folder

```text
src/
  data/       site.ts (identitas, legalitas, tim) · content.ts (isi halaman)
  components/ blocks · layout · ui
  pages/      Home.tsx
scripts/      prerender.mjs · cek-konten.mjs
public/       fonts · hero.jpg · og.png · favicon.svg
docs/         PRD, rencana, desain, arsip, dan dokumen kickoff
```

Isi halaman hanya ada di dua berkas: `src/data/site.ts` dan
`src/data/content.ts`. Komponen tidak memuat teks konten sama sekali, jadi
mengganti isi tidak menyentuh satu pun berkas komponen.

## Dokumen

| File | Isi |
|---|---|
| **`ISI-YANG-HARUS-DIGANTI.md`** | **Daftar tugas isi — baca ini dulu** |
| `docs/prd-website-citra-teknologi-nusantara-v1.md` | PRD V1 — sumber kebenaran |
| `docs/rencana-citra-teknologi-nusantara.md` | Rencana strategis bisnis |
| `docs/PENCOCOKAN-V1.md` | Pencocokan desain → PRD (§6) |
| `docs/arsip/BLUEPRINT.md` | Desain & arsitektur versi UMKM — arsip, tidak berlaku V1 |
| `docs/arsip/COMPONENTS.md` | Pemetaan modul → komponen 21st.dev — arsip |
| `docs/arsip/PAGE-SPECS.md` | Detail section versi UMKM — arsip, tidak berlaku untuk V1 |

## Requirement non-fungsional — status terukur

| ID | Target | Hasil |
|---|---|---|
| N1 | Muat < 3 detik di 3G | Jalur render ±16 KB (HTML + CSS). Halaman di-prerender: teks terbaca tanpa JavaScript |
| N2 | Berat halaman < 1 MB | Jauh di bawah batas — lihat keluaran `npm run build` |
| N3 | Mobile-first, 360px | Tanpa scroll horizontal. **Uji akhir di DevTools device mode belum dilakukan** |
| N5 | Font body ≥ 16px | 16px |
| N6 | Kontras WCAG AA | Teks utama 18,9:1 · sekunder 7,5:1 |
| N7 | Title & meta memuat nama badan usaha | Ya |
| N8 | Favicon + Open Graph | Tag lengkap, `og.png` 1200×630 terpasang. Logo & domain final masih menunggu (G-6, G-8) |
| N11 | Bebas animasi scroll berat | Animasi CSS murni, nol JavaScript. Mati pada `prefers-reduced-motion` |
| N12 | Latar terang | Dua section hitam (S4, S6); halaman terbaca terang |
| N4, N9, N10, N13 | HTTPS, domain, email, Search Console | Menunggu G-8 |

**Yang belum diverifikasi:** N1 di atas hitungan bobot, bukan pengukuran
Lighthouse dengan throttling 3G. Jalankan uji itu di hari ke-8 sesuai jadwal
PRD.

## Catatan teknis

**Prerender.** `npm run build` mencetak halaman jadi HTML statis
(`scripts/prerender.mjs`), lalu React menempel ke markup itu. Teks hero, data
legalitas, dan nomor kontak terbaca bahkan kalau JavaScript gagal termuat.
Bukan `vite-react-ssg` — paket itu menyelesaikan masalah merender puluhan
route, dan V1 satu halaman tanpa router.

**Animasi CSS, bukan JavaScript.** `Reveal` dan `Stagger` memakai
`animation-timeline: view()`. Versi motion dulu mencetak `opacity: 0` ke dalam
HTML statis — 24 elemen, termasuk seluruh blok legalitas, tidak terlihat tanpa
JavaScript. Keadaan bawaan sekarang TERLIHAT; animasi dipasang di dalam
`@supports`, jadi browser tanpa dukungan menampilkan isinya apa adanya.

**Font di-host sendiri.** `public/fonts/`, subset latin saja, satu berkas per
keluarga. Memuat dari Google berarti DNS + TCP + TLS ke dua domain asing
sebelum font mulai diunduh — di 3G, rantai itu saja ±2 detik.

**Tanpa router, tanpa pustaka animasi.** `react-router-dom` dan `motion`
keduanya dicabut dari dependensi. Navigasi jadi anchor ke section.

**Foto hero, bukan screenshot website.** Tata letak dari
`hero-with-image-text-and-two-buttons` (@tommyjepsen): satu gambar persegi.
Pembaca V1 datang dengan satu pertanyaan — "ini nyata atau tidak" — dan gambar
website tidak menjawabnya.

## Diparkir untuk V2

Sembilan blok V2 (`TrustStrip`, `ProblemSection`, `BeforeAfter`, `Showcase`,
`MetricCards`, `PricingTable`, `ComparisonTable`, `TestimonialGrid`,
`DirectoryGrid`) pernah dilepas dari halaman dan disimpan di folder
`parked-v2/`. Folder itu **dihapus** (keputusan 002): komponennya mengimpor
`motion` yang sudah dicabut, dua impornya putus, dan datanya (nama klien,
testimoni, harga) **karangan**. V2 ditulis ulang dari PRD §6 dan §11 begitu
terkumpul tiga nama klien yang boleh dipublikasikan — dengan data nyata.

## Urutan kerja menurut dokumen Anda sendiri

Rencana Bagian 9 menaruh website di **Fase 3**, setelah legalitas terbit dan
company profile PDF jadi — alasannya ditulis terang: *"company profile PDF
lebih menentukan daripada website."* Risiko R1 memperingatkan situs ini bisa
jadi bentuk penundaan outreach.

Prioritas yang dokumen Anda tetapkan sendiri, bukan saya: legalitas CV, lalu
surat referensi + izin publikasi dari Desa Silip selagi kepala desa yang sama
masih menjabat. Yang kedua satu-satunya aset yang bisa hilang karena waktu.
