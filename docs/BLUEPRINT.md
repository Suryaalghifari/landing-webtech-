# Blueprint — Landing & Situs Jasa Web Developer

> Status: **DRAFT UNTUK VALIDASI**. Belum ada kode yang dibuat.
> Tanggal: 10 Agustus 2026

---

## 1. Keputusan yang sudah dikunci

| Aspek | Keputusan |
|---|---|
| Target utama | UMKM & bisnis lokal Indonesia |
| Bahasa | Bahasa Indonesia, sapaan "Anda" |
| Stack | Vite + React + Tailwind **+ `vite-react-ssg`** (lihat §2) |
| Palet | Monokrom murni — tanpa warna aksen |
| Harga | Ditampilkan terbuka, paket + angka rupiah |
| CTA utama | WhatsApp |
| Library komponen | **twblocks** oleh `@tommyjepsen` (21st.dev) — lihat `COMPONENTS.md` |
| Hero | **`animated-hero`** oleh `@tommyjepsen` — 4.5k downloads, background putih |

### Palet final

```
Background      #FFFFFF
Background alt  #FAFAF9   (stone-50)   — section selang-seling
Surface          #F5F5F4  (stone-100)  — kartu, grid pattern
Border           #E7E5E4  (stone-200)
Text             #0C0A09  (stone-950)  — kontras 18.9:1
Text muted       #57534E  (stone-600)  — kontras 7.5:1
CTA              #0C0A09  bg + #FFFFFF teks
```

Netral **hangat** (stone), bukan slate. Slate adalah default Tailwind dan langsung
terbaca sebagai template.

### Tipografi

- Heading: **Space Grotesk** — 500/700
- Body: **DM Sans** — 400/500
- Body minimum 16px mobile, line-height 1.6, panjang baris maks 70 karakter

---

## 2. Catatan kritis: SEO di atas Vite

Vite + React menghasilkan Single Page Application. HTML awal yang diterima crawler
praktis kosong — seluruh konten baru muncul setelah JavaScript jalan. Untuk situs
dengan ~65 halaman yang mengejar keyword berbeda-beda, ini menghambat.

**Perbaikan: `vite-react-ssg`.**
Saat `npm run build`, setiap route di-render menjadi file HTML statis lengkap dengan
teksnya. Hasilnya static site murni — bisa di-host di Vercel, Netlify, Cloudflare
Pages, atau shared hosting biasa. Kecepatan dan skor Core Web Vitals jadi tinggi,
yang sekaligus berfungsi sebagai bukti jualan Anda sendiri.

Tanpa ini, halaman lokasi dan industri di §4 tidak akan berfungsi sebagaimana mestinya.

---

## 3. Strategi keyword → halaman

Prinsip: **satu intent = satu halaman.** Jangan menumpuk banyak keyword di satu
halaman, dan jangan membuat halaman kembar yang isinya cuma beda nama kota.

> Catatan: volume pencarian di bawah **belum diverifikasi**. Perlu dicek dengan
> Google Keyword Planner atau Ahrefs sebelum urutan prioritas dikunci.

### 3.1 Keyword transaksional (prioritas 1 — paling dekat ke uang)

| Keyword | Halaman tujuan |
|---|---|
| jasa pembuatan website | `/jasa/pembuatan-website` |
| jasa pembuatan website murah | `/harga` |
| harga jasa pembuatan website | `/harga` |
| biaya bikin website | `/harga` |
| jasa pembuatan website company profile | `/jasa/website-company-profile` |
| jasa pembuatan toko online | `/jasa/toko-online` |
| jasa seo | `/jasa/seo` |
| jasa seo website | `/jasa/seo` |
| jasa maintenance website | `/jasa/maintenance-website` |
| jasa pembuatan aplikasi android | `/jasa/pembuatan-aplikasi` |
| jasa redesign website | `/jasa/redesign-website` |
| jasa optimasi kecepatan website | `/jasa/optimasi-kecepatan` |

### 3.2 Keyword lokal (prioritas 2 — konversi tertinggi untuk UMKM)

Pola: `jasa pembuatan website {kota}`

12 kota gelombang pertama: Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung,
Surabaya, Semarang, Yogyakarta, Medan, Denpasar, Makassar.

→ `/jasa-pembuatan-website/{kota}`

**Aturan wajib:** tiap halaman kota harus punya konten yang benar-benar berbeda —
minimal satu studi kasus klien di kota itu, daftar industri dominan di sana, dan
paragraf konteks lokal. Halaman kota yang isinya identik kecuali nama kota adalah
*doorway page*, dan Google menghukumnya. **Lebih baik 4 halaman kota yang tebal
daripada 12 yang tipis.**

### 3.3 Keyword industri (prioritas 2)

Pola: `jasa pembuatan website {industri}`

10 industri: klinik & dokter, restoran & kafe, sekolah & kursus, properti & agen,
kontraktor & interior, travel & tour, laundry & jasa harian, toko retail,
bengkel & otomotif, salon & kecantikan.

→ `/website-untuk/{industri}`

Halaman ini yang membuat pengunjung merasa "ini persis kebutuhan saya". Isinya:
masalah spesifik industri tersebut, fitur yang relevan (misal: booking online untuk
klinik, menu digital untuk restoran), contoh portofolio, harga.

**Jangan** dikali silang dengan kota. 12 kota × 10 industri = 120 halaman sampah.

### 3.4 Keyword informasional (prioritas 3 — blog, tangkap top of funnel)

Contoh: cara membuat website untuk UMKM · berapa biaya bikin website ·
website vs marketplace untuk jualan · cara agar website muncul di Google ·
apa itu Core Web Vitals · perbedaan hosting dan domain · checklist SEO website baru ·
kenapa website lemot.

→ `/blog/{slug}` — tiap artikel menautkan ke halaman jasa terkait.

---

## 4. Sitemap lengkap

> **Perubahan 11 Agustus 2026:** halaman portofolio dan blog **dihapus**.
> Ini situs dagang, bukan situs portofolio. Bukti hasil kerja dipindahkan ke
> dalam alur jualan di Home (blok `BeforeAfter` dan `Showcase`), supaya
> pengunjung tidak keluar dari jalur menuju WhatsApp.
>
> Konsekuensi yang perlu Anda tahu: keyword informasional di §3.4 jadi tidak
> punya halaman tujuan. Trafik top-of-funnel itu hilang. Keputusan yang wajar
> untuk situs dagang — tapi ini memang biaya yang dibayar, bukan gratis.

```
/                                    Home / landing utama
/harga                               Paket & harga semua layanan
/jasa                                Index layanan
/jasa/pembuatan-website              Pillar — layanan inti
/jasa/website-company-profile        Turunan
/jasa/toko-online                    Turunan
/jasa/seo                            Pillar
/jasa/maintenance-website            Pillar
/jasa/pembuatan-aplikasi             Pillar
/jasa/redesign-website               Pillar
/jasa/optimasi-kecepatan             Pillar
/jasa-pembuatan-website              Index kota
/jasa-pembuatan-website/{kota}       Halaman lokasi             (12 halaman)
/website-untuk                       Index industri
/website-untuk/{industri}            Halaman industri           (10 halaman)
/tentang                             Profil, tim, kredibilitas
/kontak                              Form + WA + peta
/faq                                 FAQ lengkap
/terima-kasih                        Halaman konversi (untuk tracking)
/kebijakan-privasi                   Legal
/syarat-ketentuan                    Legal
/404                                 Not found
```

**Total ≈ 40 URL** saat lengkap (turun dari 65–75 setelah portofolio dan blog dihapus).

---

## 5. Template halaman — **13 template**

| # | Template | Dipakai untuk |
|---|---|---|
| 1 | `HomePage` | `/` |
| 2 | `ServicePage` | 8 halaman `/jasa/*` |
| 3 | `LocationPage` | 12 halaman kota |
| 4 | `IndustryPage` | 10 halaman industri |
| 5 | `PricingPage` | `/harga` |
| 6 | `PortfolioIndex` | `/portofolio` |
| 7 | `CaseStudyPage` | detail studi kasus |
| 8 | `BlogIndex` | `/blog` |
| 9 | `ArticlePage` | artikel |
| 10 | `AboutPage` | `/tentang` |
| 11 | `ContactPage` | `/kontak` |
| 12 | `LegalPage` | privasi, S&K |
| 13 | `SystemPage` | 404, terima kasih |

Template 2, 3, 4, 7, 9 bersifat **data-driven** — konten dari file data, satu template
melayani puluhan halaman.

---

## 6. Modul komponen — **30 modul**

### Layout (4)
1. `Header` — nav sticky, logo, 5 link, 1 tombol CTA
2. `Footer` — hub internal link (semua kota, industri, layanan)
3. `Breadcrumb` — navigasi + JSON-LD BreadcrumbList
4. `MobileCTABar` — bar WhatsApp menempel di bawah, mobile saja

### Hero (3)
5. `HeroAnimated` — home, rotating word + motion
6. `HeroPage` — jasa/lokasi/industri, headline + sub + 2 CTA
7. `HeroArticle` — blog/studi kasus, judul + tanggal + waktu baca

### Bukti (5)
8. `TrustStrip` — logo klien atau baris angka
9. `MetricCards` — before/after PageSpeed, trafik, konversi
10. `CaseStudyCard` + grid
11. `TestimonialGrid` — foto asli + nama + nama bisnis
12. `BeforeAfterSlider` — screenshot website lama vs baru, geser

### Konten (7)
13. `ProblemSection` — 3 pain point spesifik
14. `ServiceGrid` — kartu layanan, dibingkai sebagai hasil
15. `FeatureList` — checklist deliverable
16. `ProcessSteps` — 4 langkah kerja
17. `PricingTable` — 3 paket, angka rupiah jelas
18. `ComparisonTable` — kami vs template instan vs freelance murah
19. `RichContent` — wrapper prose untuk teks panjang SEO

### Konversi (4)
20. `CTASection` — blok CTA penutup
21. `FAQAccordion` — + JSON-LD FAQPage
22. `LeadForm` — nama, WhatsApp, jenis kebutuhan (3 field saja)
23. `WhatsAppButton` — pesan sudah terisi otomatis sesuai halaman

### Navigasi & SEO (4)
24. `RelatedLinks` — layanan terkait, kota terdekat
25. `LocationGrid` — daftar kota
26. `IndustryGrid` — daftar industri
27. `BlogCard` + grid

### Utilitas (3)
28. `SEOHead` — title, description, canonical, OG, Twitter card
29. `JsonLd` — generator schema
30. `Section` — wrapper spacing & container konsisten

---

## 7. Data / koleksi konten

File data terpisah dari komponen, supaya menambah halaman = menambah entri, bukan
menulis kode baru.

```
src/data/
  services.ts      8 layanan   — slug, judul, meta, harga, fitur, FAQ
  locations.ts     12 kota     — slug, nama, konteks lokal, studi kasus terkait
  industries.ts    10 industri — slug, pain point, fitur relevan, contoh
  packages.ts      3 paket     — nama, harga, isi, batasan
  cases.ts         6–8 kasus   — klien, masalah, solusi, metrik before/after
  testimonials.ts  8–12        — nama, bisnis, foto, kutipan
  faq.ts           global + per-layanan
  posts/           artikel MDX
```

---

## 8. Modul SEO teknis

- `sitemap.xml` — di-generate otomatis saat build
- `robots.txt`
- Canonical URL di setiap halaman
- `hreflang="id-ID"`
- JSON-LD: `LocalBusiness` (global), `Service` (halaman jasa), `FAQPage`,
  `BreadcrumbList`, `Article` (blog), `AggregateRating` (jika ada review asli)
- Open Graph + Twitter card, gambar OG di-generate per halaman
- Internal linking terstruktur: home → pillar → turunan → kota/industri, dan balik lagi
- Gambar WebP + `srcset` + lazy loading + `width`/`height` (cegah CLS)
- Target Core Web Vitals: LCP < 2.0s, CLS < 0.05, INP < 200ms

---

## 9. Rencana build bertahap

**Tahap 1 — Fondasi + Home (dummy, bisa diakses lokal)**
Setup Vite + Tailwind + vite-react-ssg, design system, 30 modul dasar, halaman `/`
lengkap dengan konten dummy. Ini yang Anda review dulu secara visual.

**Tahap 2 — Money pages**
`/harga`, 8 halaman `/jasa/*`, `/kontak`, `/faq`.

**Tahap 3 — Halaman skala**
12 halaman kota, 10 halaman industri, portofolio + studi kasus.

**Tahap 4 — Blog & SEO teknis**
Blog, sitemap, semua JSON-LD, optimasi Core Web Vitals, integrasi Analytics +
Search Console.

---

## 10. Yang saya butuhkan dari Anda

Konten dummy bisa saya isi sendiri, tapi hal-hal berikut menentukan apakah situs ini
benar-benar mengonversi atau cuma terlihat bagus:

1. **Nama brand & domain** — belum ada di mana pun.
2. **Nomor WhatsApp bisnis** — untuk semua CTA.
3. **Kota basis operasi** — menentukan halaman lokasi mana yang diprioritaskan.
4. **3 paket harga + angka rupiah** — atau saya buatkan draf berdasarkan harga pasar
   Indonesia untuk Anda koreksi.
5. **Portofolio nyata** — berapa proyek yang sudah selesai dan boleh ditampilkan?
   Ini pembeda terbesar antara situs yang dipercaya dan situs yang terlihat AI.
6. **Testimoni nyata** — meski cuma 2–3.
7. **Foto Anda / tim** — halaman "tentang" tanpa wajah manusia sangat menurunkan
   kepercayaan di pasar UMKM.

Kalau nomor 5–7 belum ada, situs tetap bisa dibangun dengan placeholder, tapi
jangan diluncurkan sebelum diisi yang asli.
