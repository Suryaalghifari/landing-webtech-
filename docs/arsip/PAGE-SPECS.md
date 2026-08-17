# Spesifikasi Detail Per Halaman

> Pendamping `BLUEPRINT.md`. Status: **DRAFT UNTUK VALIDASI**, belum ada kode.
> `{BRAND}` = nama brand (belum ditentukan) · `{KOTA}` = kota basis operasi

---

## Konvensi umum

Berlaku di **semua** halaman kecuali disebut lain:

- `Header` di atas, `Footer` di bawah, `MobileCTABar` menempel di bawah pada mobile
- Semua halaman selain `/` diawali `Breadcrumb` + JSON-LD `BreadcrumbList`
- Setiap halaman punya `SEOHead` unik: title, meta description, canonical, OG image
- Setiap halaman ditutup `CTASection`
- Title tag maks 60 karakter · meta description 140–158 karakter
- Satu `<h1>` per halaman, tidak boleh lebih

---

## 1. Home — `/`

**Keyword utama:** jasa pembuatan website
**Title:** `Jasa Pembuatan Website & SEO untuk UMKM — {BRAND}`
**Meta:** Bikin website cepat, muncul di Google, dan siap jualan. Harga transparan mulai Rp X juta. Konsultasi gratis via WhatsApp.
**Target panjang:** 1.200–1.800 kata

| # | Modul | Isi |
|---|---|---|
| 1 | `HeroAnimated` | Badge: "Sudah dipercaya {N} bisnis di Indonesia". H1: "Website yang bikin bisnis Anda **ditemukan / dipercaya / menghasilkan**" (kata berputar). Sub 2 kalimat. CTA: `Konsultasi Gratis` (WA, ikon telepon) + `Lihat hasil kerja →` |
| 2 | `TrustStrip` | 4 angka: proyek selesai · rata-rata skor PageSpeed · tahun pengalaman · klien bertahan |
| 3 | `ProblemSection` | 3 pain: "Website lemot, pengunjung kabur sebelum terbuka" · "Sudah punya website tapi tidak muncul di Google" · "Dibuat sekali lalu tidak ada yang urus" |
| 4 | `ServiceGrid` | 4 kartu **hasil**, bukan fitur: Website Baru · Muncul di Google · Dirawat Rutin · Aplikasi Custom. Tiap kartu link ke halaman jasa |
| 5 | `MetricCards` | 3 angka before/after dari klien nyata: skor PageSpeed 34→96 · trafik organik +180% · leads/bulan 3→27 |
| 6 | `CaseStudyCard` grid | 3 studi kasus terbaik, link ke detail |
| 7 | `ProcessSteps` | 4 langkah: Konsultasi gratis → Penawaran & desain → Pengerjaan → Serah terima + pendampingan |
| 8 | `PricingTable` | 3 paket dengan angka rupiah. Paket tengah ditandai "Paling Dipilih" |
| 9 | `ComparisonTable` | {BRAND} vs Template instan vs Freelance termurah. Baris: kecepatan, SEO, revisi, garansi, after-sales |
| 10 | `TestimonialGrid` | 3 testimoni, foto asli + nama + nama usaha |
| 11 | `IndustryGrid` | 10 industri — hub internal link |
| 12 | `LocationGrid` | Daftar kota — hub internal link |
| 13 | `FAQAccordion` | 6 pertanyaan + JSON-LD `FAQPage` |
| 14 | `CTASection` | "Ceritakan kebutuhan Anda, gratis" + tombol WA |

**Schema:** `Organization` + `LocalBusiness` + `FAQPage`

---

## 2. Halaman Jasa — `/jasa/{slug}` · 8 halaman

**Title:** `{Nama Jasa} — Harga & Paket Lengkap | {BRAND}`
**Target panjang:** 1.500–2.000 kata

| # | Modul | Catatan |
|---|---|---|
| 1 | `HeroPage` | H1 = keyword persis. Sub + 2 CTA |
| 2 | `TrustStrip` | Angka relevan untuk jasa ini saja |
| 3 | `ProblemSection` | 3 pain spesifik jasa ini |
| 4 | `FeatureList` | Checklist deliverable — apa yang **pasti** Anda terima |
| 5 | `ProcessSteps` | Alur kerja jasa ini |
| 6 | `RichContent` | **600–900 kata** badan SEO. H2/H3 terstruktur menjawab pertanyaan turunan keyword |
| 7 | `CaseStudyCard` | 2 kasus yang memakai jasa ini |
| 8 | `PricingTable` | Paket khusus jasa ini |
| 9 | `TestimonialGrid` | 3 testimoni relevan |
| 10 | `FAQAccordion` | 8 pertanyaan spesifik |
| 11 | `RelatedLinks` | Jasa lain + industri terkait |
| 12 | `CTASection` | Pesan WA sudah terisi otomatis: "Halo, saya mau tanya soal {nama jasa}" |

**Schema:** `Service` + `FAQPage` + `Offer`

### Daftar 8 halaman

| Slug | H1 |
|---|---|
| `pembuatan-website` | Jasa Pembuatan Website Profesional |
| `website-company-profile` | Jasa Pembuatan Website Company Profile |
| `toko-online` | Jasa Pembuatan Toko Online |
| `seo` | Jasa SEO — Bikin Website Anda Muncul di Google |
| `maintenance-website` | Jasa Maintenance & Perawatan Website |
| `pembuatan-aplikasi` | Jasa Pembuatan Aplikasi Android & Web |
| `redesign-website` | Jasa Redesign Website |
| `optimasi-kecepatan` | Jasa Optimasi Kecepatan Website |

---

## 3. Halaman Kota — `/jasa-pembuatan-website/{kota}` · 12 halaman

**Title:** `Jasa Pembuatan Website {Kota} — Harga Transparan | {BRAND}`
**Target panjang:** 800–1.200 kata **unik per kota**

| # | Modul | Catatan |
|---|---|---|
| 1 | `HeroPage` | H1: "Jasa Pembuatan Website {Kota}" |
| 2 | `TrustStrip` | "{N} bisnis di {Kota} sudah kami bantu" |
| 3 | `RichContent` | **300–400 kata konteks lokal asli**: industri dominan di kota itu, karakter pasarnya, tantangan digitalnya |
| 4 | `ServiceGrid` | 4 layanan |
| 5 | `CaseStudyCard` | **WAJIB minimal 1 klien di kota tersebut** |
| 6 | `PricingTable` | Paket standar |
| 7 | `ProcessSteps` | + catatan: bisa remote atau ketemu langsung |
| 8 | `TestimonialGrid` | Testimoni klien kota itu |
| 9 | `FAQAccordion` | Pertanyaan berkonteks lokal: "Bisa ketemu langsung di {Kota}?" · "Berapa lama pengerjaan?" |
| 10 | `RelatedLinks` | 4 kota terdekat |
| 11 | `CTASection` | |

**Schema:** `LocalBusiness` (dengan `areaServed`) + `Service` + `FAQPage`

> **Aturan keras:** kalau belum ada klien nyata di suatu kota, **halaman kota itu jangan dibuat**.
> Halaman kota tanpa bukti lokal = doorway page = risiko penalti Google.
> Mulai dari `{KOTA}` basis Anda saja, tambah kota seiring portofolio bertambah.

---

## 4. Halaman Industri — `/website-untuk/{industri}` · 10 halaman

**Title:** `Jasa Pembuatan Website {Industri} — Fitur & Harga | {BRAND}`
**Target panjang:** 1.000–1.400 kata

| # | Modul | Catatan |
|---|---|---|
| 1 | `HeroPage` | H1: "Website untuk {Industri} yang Benar-Benar Mendatangkan Pelanggan" |
| 2 | `ProblemSection` | 3 pain **khas industri itu**. Contoh klinik: pasien telepon di luar jam kerja, jadwal dokter simpang siur, tidak ada yang menemukan lewat Google Maps |
| 3 | `FeatureList` | Fitur yang industri ini butuh. Klinik: booking online, jadwal dokter, artikel kesehatan. Restoran: menu digital, reservasi, integrasi GoFood/Grab. Sekolah: PPDB online, galeri, portal pengumuman |
| 4 | `BeforeAfterSlider` | Screenshot website industri ini sebelum & sesudah |
| 5 | `RichContent` | **500–700 kata** |
| 6 | `CaseStudyCard` | Klien dari industri ini |
| 7 | `PricingTable` | Paket, disesuaikan konteks industri |
| 8 | `FAQAccordion` | 6 pertanyaan khas industri |
| 9 | `RelatedLinks` | Industri lain |
| 10 | `CTASection` | |

**Schema:** `Service` + `FAQPage`

---

## 5. Harga — `/harga`

**Keyword:** harga jasa pembuatan website · biaya bikin website · jasa pembuatan website murah
**Title:** `Harga Jasa Pembuatan Website 2026 — Mulai Rp X Juta | {BRAND}`
**Target panjang:** 1.200–1.600 kata

| # | Modul | Catatan |
|---|---|---|
| 1 | `HeroPage` | H1: "Harga Jasa Pembuatan Website — Tanpa Biaya Tersembunyi" |
| 2 | `PricingTable` | 3 paket, angka rupiah jelas |
| 3 | `ComparisonTable` | Perbandingan isi paket baris per baris |
| 4 | `FeatureList` | **Biaya tambahan yang jujur**: domain, hosting, perpanjangan tahunan, maintenance. Transparansi di sini adalah pembeda terbesar |
| 5 | `RichContent` | "Apa yang menentukan harga sebuah website?" 400–600 kata. Menjawab pencari "kok mahal / kok murah" |
| 6 | `FAQAccordion` | 10 pertanyaan seputar biaya, cicilan, DP, garansi, revisi |
| 7 | `TestimonialGrid` | Testimoni yang menyinggung nilai/worth it |
| 8 | `LeadForm` | "Minta penawaran khusus" — 3 field |
| 9 | `CTASection` | |

**Schema:** `Offer` + `FAQPage`

---

## 6. Portofolio — `/portofolio`

**Title:** `Portofolio — {N}+ Website yang Sudah Kami Kerjakan | {BRAND}`

`HeroPage` → `MetricCards` (agregat semua proyek) → filter industri/layanan → `CaseStudyCard` grid → `CTASection`

---

## 7. Studi Kasus — `/portofolio/{slug}` · 6–8 halaman

**Title:** `{Nama Klien} — {Hasil Utama} | Studi Kasus {BRAND}`
**Target panjang:** 700–1.000 kata

| # | Modul | Catatan |
|---|---|---|
| 1 | `HeroArticle` | Nama klien, industri, layanan yang dipakai, durasi |
| 2 | `MetricCards` | 3 angka before/after paling kuat |
| 3 | `RichContent` | Struktur tetap: **Tantangan → Solusi → Hasil**, ditulis naratif |
| 4 | `BeforeAfterSlider` | Screenshot lama vs baru |
| 5 | `TestimonialGrid` | 1 kutipan panjang dari klien ini |
| 6 | `FeatureList` | Rincian yang dikerjakan |
| 7 | `RelatedLinks` | 3 kasus lain + jasa terkait |
| 8 | `CTASection` | "Mau hasil serupa untuk bisnis Anda?" |

**Schema:** `Article` + `Review`

---

## 8. Blog — `/blog` dan `/blog/{slug}`

**Index:** `HeroPage` → filter kategori → `BlogCard` grid → pagination

**Artikel:** `HeroArticle` (judul, tanggal, waktu baca, penulis) → daftar isi → `RichContent` 1.200–2.000 kata → `CTASection` inline di tengah → `RelatedLinks` → `CTASection` penutup

**Schema artikel:** `Article` + `BreadcrumbList`

**12 artikel gelombang pertama:**
1. Berapa Biaya Bikin Website untuk UMKM di 2026?
2. Cara Agar Website Muncul di Halaman 1 Google
3. Website atau Marketplace? Mana yang Lebih Untung untuk Jualan
4. 7 Penyebab Website Lemot dan Cara Memperbaikinya
5. Apa Itu Core Web Vitals dan Kenapa Google Peduli
6. Perbedaan Domain, Hosting, dan Website
7. Checklist SEO untuk Website Baru
8. Kapan Bisnis Anda Butuh Aplikasi, Bukan Cuma Website
9. Cara Memilih Jasa Pembuatan Website yang Tidak Menipu
10. Website Company Profile: Isi Wajib dan yang Tidak Perlu
11. Kenapa Website Anda Tidak Ada yang Mengunjungi
12. Google Bisnisku: Cara Setup untuk UMKM

Tiap artikel wajib menautkan ke minimal 1 halaman jasa.

---

## 9. Tentang — `/tentang`

**Title:** `Tentang {BRAND} — Tim di Balik Website Klien Kami`

`HeroPage` → cerita asal-usul (`RichContent`, 400–600 kata, ditulis personal bukan korporat) → **foto tim/Anda dengan nama & peran** → nilai kerja (3 poin, konkret bukan jargon) → `MetricCards` → `TestimonialGrid` → `CTASection`

> Halaman "tentang" tanpa wajah manusia adalah penurun kepercayaan terbesar di pasar UMKM.
> Satu foto asli mengalahkan seluruh copywriting di halaman ini.

**Schema:** `Organization` + `Person`

---

## 10. Kontak — `/kontak`

`HeroPage` → `LeadForm` (nama, WhatsApp, jenis kebutuhan — **3 field, tidak lebih**) → kontak langsung: WA, email, jam operasional → peta lokasi → `FAQAccordion` 4 pertanyaan pra-kontak → `CTASection`

Form sukses → redirect ke `/terima-kasih` untuk tracking konversi.

**Schema:** `ContactPage` + `LocalBusiness`

---

## 11. FAQ — `/faq`

`HeroPage` → `FAQAccordion` dikelompokkan: Harga & Pembayaran · Proses & Waktu · Teknis · Setelah Website Jadi · SEO → `RelatedLinks` → `CTASection`

Minimal 25 pertanyaan. **Schema:** `FAQPage`

---

## 12. Legal — `/kebijakan-privasi`, `/syarat-ketentuan`

`LegalPage`: `Breadcrumb` → `RichContent` → tanggal pembaruan terakhir.
Tanpa CTA. `<meta name="robots" content="noindex">` opsional.

---

## 13. Halaman Sistem

**`/terima-kasih`** — konfirmasi, ekspektasi waktu balas, link ke portofolio & blog. `noindex`.
**`/404`** — pesan ramah + link ke jasa, portofolio, blog, home. `noindex`.

---

## Peta internal linking

```
                    ┌──────────┐
                    │   HOME   │
                    └────┬─────┘
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
    ┌────────┐     ┌──────────┐    ┌──────────┐
    │  JASA  │◄───►│   KOTA   │    │ INDUSTRI │
    │ pillar │     │  12 hal  │    │  10 hal  │
    └───┬────┘     └────┬─────┘    └────┬─────┘
        │               │                │
        └───────┬───────┴────────────────┘
                ▼
        ┌───────────────┐      ┌────────┐
        │ STUDI KASUS   │◄────►│  BLOG  │
        └───────┬───────┘      └───┬────┘
                └──────┬───────────┘
                       ▼
                  ┌─────────┐
                  │  HARGA  │──► WhatsApp
                  └─────────┘
```

Aturan: setiap halaman anak menaut balik ke pillar-nya. Setiap artikel blog menaut
ke minimal 1 halaman jasa. `Footer` memuat seluruh kota, industri, dan jasa.

---

## Ringkasan volume

| Jenis | Jumlah | Total kata |
|---|---|---|
| Home | 1 | ~1.500 |
| Jasa | 8 | ~14.000 |
| Kota | 12 | ~12.000 |
| Industri | 10 | ~12.000 |
| Studi kasus | 7 | ~6.000 |
| Blog | 12 | ~18.000 |
| Lainnya | 8 | ~5.000 |
| **Total** | **58 halaman** | **~68.000 kata** |

Ini pekerjaan konten yang besar. Tahap 1 hanya membangun kerangka + Home dengan
konten dummy, supaya Anda bisa menilai desainnya dulu sebelum menulis semuanya.
