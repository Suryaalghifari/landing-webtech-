# Pemetaan Komponen — 30 Modul

> Pendamping `BLUEPRINT.md` dan `PAGE-SPECS.md`. Status: **DRAFT UNTUK VALIDASI**.

---

## Keputusan dasar: satu library sebagai fondasi

Basis komponen = **twblocks** oleh [@tommyjepsen](https://21st.dev/@tommyjepsen)
(2M views · 9.3K bookmarks · shadcn + Radix + Tailwind).

Alasan memilih satu author, bukan mencomot dari banyak:

- Semuanya **putih/light** — cocok dengan palet monokrom kita tanpa perlu di-restyle
- Spacing, radius, ukuran tipografi, dan style tombol **sudah konsisten** antar blok
- Menutupi **18 dari 30 modul** yang kita butuhkan

Mencampur 10 author berbeda adalah penyebab paling umum situs terlihat "tempelan".
Satu library → satu bahasa desain → hasilnya terlihat sengaja dirancang.

**Catatan teknis:** twblocks ditulis untuk Next.js. Di Vite perlu 2 penyesuaian kecil
per komponen — `next/link` → `Link` dari react-router, dan `next/image` → `<img>`
biasa. Ini pekerjaan menit, bukan jam.

---

## A. Dari twblocks — 18 modul

| # | Modul kita | Komponen 21st.dev | Dipakai di |
|---|---|---|---|
| 1 | `Header` | `header` | semua halaman |
| 2 | `HeroAnimated` | **`animated-hero`** ⭐ | `/` |
| 3 | `HeroPage` | `hero-with-text-and-two-button` | jasa, kota, industri, harga |
| 4 | `HeroArticle` | `hero-with-image-text-and-two-buttons` | blog, studi kasus |
| 5 | `TrustStrip` (angka) | `stats-section` | home, jasa |
| 6 | `TrustStrip` (logo klien) | `cases-with-infinite-scroll` | home, kota |
| 7 | `MetricCards` | `stats-section-with-text` | home, studi kasus |
| 8 | `ProblemSection` | `feature-with-advantages` | home, jasa, industri |
| 9 | `ServiceGrid` | `feature-section-with-grid` | home, kota |
| 10 | `FeatureList` | `feature-with-advantages` (varian) | jasa, industri, harga |
| 11 | `BeforeAfterSlider` | **`feature-with-image-comparison`** ⭐ | industri, studi kasus |
| 12 | `PricingTable` | `pricing-cards` | home, jasa, kota, industri |
| 13 | `ComparisonTable` | **`pricing-section-with-comparison`** ⭐ | `/harga` |
| 14 | `TestimonialGrid` | `testimonials` | hampir semua |
| 15 | `FAQAccordion` | `faq-section` | hampir semua |
| 16 | `CTASection` | `call-to-action` | semua halaman |
| 17 | `BlogCard` grid | `blog-section-with-rich-preview` | `/blog` |
| 18 | `IndustryGrid` / `LocationGrid` | `feature-section-with-bento-grid` | home |

⭐ = temuan terbaik, jelaskan di bawah.

### Kenapa `animated-hero`

`https://21st.dev/@tommyjepsen/components/animated-hero` · 4.5k downloads

Background putih. Struktur: badge pill di atas → H1 dua baris dengan **kata kedua
berputar** (motion) → paragraf → dua tombol, satu outline dengan ikon telepon dan
satu solid hitam.

Cocok karena tiga hal:
1. Tombol solid hitam + outline **persis** keputusan palet monokrom kita
2. Tombol berikon telepon langsung jadi CTA WhatsApp tanpa modifikasi
3. Kata berputar memuat empat layanan Anda tanpa jadi daftar:
   *"Website yang bikin bisnis Anda ‹**ditemukan · dipercaya · menghasilkan · berkembang**›"*

Copy demo aslinya bahkan tentang usaha kecil — segmen yang Anda pilih.

### Kenapa `feature-with-image-comparison`

Slider geser before/after. Ini modul paling bernilai di seluruh situs: satu screenshot
website klien sebelum vs sesudah mengalahkan seluruh copywriting di halaman.
Dipakai di 10 halaman industri dan setiap studi kasus.

### Kenapa `pricing-section-with-comparison`

Menggabungkan kartu harga **dan** tabel perbandingan fitur dalam satu blok putih.
Menghemat satu modul, dan tabel perbandingan itu yang menjawab keberatan
"kenapa lebih mahal dari sebelah" di halaman `/harga`.

---

## B. Dari author lain — 3 modul

| # | Modul kita | Komponen | Alasan |
|---|---|---|---|
| 19 | `ProcessSteps` | **`@7ovr/how-it-works-2`** | "Up and running in four steps" — putih, 4 langkah bernomor. twblocks tidak punya modul proses |
| 20 | `Footer` | **`@shadcnblockscom/footer-7`** | Putih, multi-kolom. Kita butuh footer besar sebagai hub internal link (semua kota + industri + jasa) — footer minimalis tidak cukup |
| 21 | `AnimatedGridPattern` | **`@dillionverma/animated-grid-pattern`** (Magic UI) | Latar hero. Lihat catatan di bawah |
| 22 | `Button` | **`@saurabh10102/be-ui-button`** (BeUI) | Sistem tombol lengkap — lihat catatan di bawah |
| 23 | `TiltCard` | **`@saurabh10102/be-ui-tilt-card`** (BeUI) | Kartu miring mengikuti kursor + kilau |
| 24 | `StatCard` | **`@sean0205/statistics-card-1`** (ReUI) | Kartu statistik dengan lencana perubahan |
| 25 | `FAQAccordion` | **`@vaib215/faq-tabs`** | Tab kategori + akordeon |
| 26 | `ComparisonTable` | **`@ruixen.ui/comparison-table`** | Tabel + ringkasan skor di bawah |
| 27 | `HeroAnimated` (tata letak) | **`@tommyjepsen/hero-with-group-of-images-text-and-two-buttons`** | Dua kolom: teks kiri, sekelompok gambar kanan |
| 28 | `Header` | **`@shadcnblockscom/navbar-5`** | Dropdown dua kolom + menu mobile meluncur |
| 29 | `ProcessSteps` | **`@chamaac/how-it-works`** | Kartu tersemat, miring, dihubungkan garis putus-putus |

### Kenapa `navbar-5` dan `how-it-works`

`navbar-5` dipilih dari author yang sama dengan `footer-7`, supaya kepala dan kaki
halaman berbicara dengan bahasa desain yang sama. Dropdown dua kolomnya menampung
8 halaman layanan tanpa membuat nav utama penuh, dan menu mobilenya punya
dropdown yang bisa dibuka-tutup.

`how-it-works` (@chamaac) menggantikan empat kotak berjajar yang terbaca sebagai
grid kosong. Kartunya disematkan seperti kertas di papan, turun bertingkat ke
kanan, dihubungkan garis putus-putus. Aslinya berwarna per langkah — di sini
monokrom, dan kemiringan ditahan di bawah 2° supaya terasa seperti kertas yang
disematkan, bukan scrapbook. Saat kursor lewat, kartunya lurus kembali.

---

## B4. Yang masih dibangun sendiri

Setelah putaran ini, tinggal dua yang tidak berasal dari katalog:

| Modul | Alasan |
|---|---|
| `MockSite` | Memang harus custom — ini placeholder screenshot klien, diganti gambar asli sebelum launching |
| `Reveal` / `Stagger` / `CountUp` | Utilitas animasi, bukan komponen visual. Tidak ada padanannya di katalog |

---

## B3. Irama terang/gelap

Keluhan "terlalu kosong" ternyata bukan soal warna, tapi **irama**. Hampir semua
section putih atau abu sangat muda, jadi tidak ada titik istirahat visual — mata
tidak punya penanda "ini bab baru".

Solusinya tanpa menambah warna sama sekali: tiga section dibalik jadi hitam penuh.

```
Hero          putih + grid hidup
Statistik     putih
Masalah       abu
Before/After  HITAM   ← screenshot putih jadi menonjol
Layanan       putih
Hasil kerja   abu
Metrik        HITAM
Proses        putih
Harga         abu
Perbandingan  putih
Testimoni     HITAM
FAQ           putih
CTA           hitam
```

Teknisnya: `<Section tone="ink">` menambahkan class `.dark`, dan
`@custom-variant dark (&:where(.dark, .dark *))` di `index.css` membuat seluruh
utilitas `dark:` di dalamnya aktif. Komponen cukup mendeklarasikan varian
gelapnya satu kali. Ini **bukan** dark mode situs — hanya irama antar section.

### Kenapa tombol dan kartu diganti

Versi sebelumnya, `Button` dan seluruh kartu saya tulis sendiri — persegi, tanpa
umpan balik sentuh, tanpa gerak. Itu keliru: hasilnya kaku dan tidak sejalan dengan
komponen lain yang memang diambil dari katalog.

**`be-ui-button`** memberi bentuk pil, empat varian (solid, secondary, outline,
ghost), tiga ukuran, **riak saat diklik**, dan penyusutan halus saat ditekan.
Pil di tombol berpasangan dengan `rounded-lg` di kartu — kontras bentuk yang
disengaja, bukan kebetulan.

**`be-ui-tilt-card`** dipasang di kartu layanan. Sudut kemiringan ditahan di 5°;
lebih dari itu terasa seperti mainan, bukan alat jualan.

**`statistics-card-1`** menggantikan strip "127 proyek selesai" yang tadinya cuma
empat angka dipisah garis — persis kotak kosong yang Anda keluhkan. Sekarang tiap
angka punya lencana perubahan dan baris pembanding, jadi ada isinya.
Hijau/merah aslinya diubah jadi monokrom: arah dibaca dari panah, bukan warna —
sekaligus memenuhi aturan "warna tidak boleh jadi satu-satunya penanda".

### Kenapa `animated-grid-pattern` untuk latar hero

Grid SVG statis + sejumlah kotak yang menyala dan meredup di posisi acak,
warnanya sepenuhnya diatur lewat Tailwind sehingga bisa dipaksa ke stone.

Seluruh kategori `hero-background` di 21st.dev sudah saya telusuri. Isinya
hampir semuanya glow neon, aurora, gradien ungu-biru, atau shader gelap —
justru daftar sinyal AI slop yang sedang kita hindari, dan semuanya bertabrakan
dengan brief putih. `retro-grid` sempat terlihat menjanjikan dari namanya,
tapi ternyata synthwave neon magenta.

Ini satu-satunya latar bergerak di katalog yang tetap monokrom.

---

## B1. Blok pembawa gambar — perbaikan atas "kotak-kotak"

Versi pertama memakai blok berbasis kartu teks saja, dan hasilnya terbaca sebagai
template kosong. Empat blok twblocks di bawah ini yang membawa gambar, dan
semuanya sekarang dipakai:

| Blok twblocks | Dipakai sebagai | Di mana |
|---|---|---|
| `feature-with-image` | `ProblemSection` — teks kiri, screenshot besar kanan | Home |
| `feature-with-image-comparison` | `BeforeAfter` — slider geser sebelum/sesudah | Home |
| `feature-with-image-carousel` | `Showcase` — carousel hasil kerja | Home |
| `feature-section-with-bento-grid` | `ServiceGrid` — kartu dengan AREA GAMBAR di atas | Home |

### `MockSite` — screenshot sementara

Belum ada screenshot klien yang bisa dipakai, dan kotak abu-abu kosong justru
membuat halaman terasa mati. Jadi dibuat mockup website yang digambar dengan CSS:
`MockModern`, `MockDated`, `MockDashboard`, `MockChecklist`, `MockPhone`, dibungkus
`BrowserFrame` (chrome jendela + address bar).

Semuanya digambar pada ukuran asli **1200×750** lalu diskalakan `ScaleToFit`.
Ini penting: versi pertama dirancang untuk ukuran thumbnail, dan begitu dipakai
selebar satu section elemennya jadi kekecilan dan hilang di ruang kosong.

`MockDated` sengaja dibuat sesak — kolom padat, garis tebal di mana-mana, banner
mencolok, teks kecil berdempetan. Kontras dengan `MockModern` di slider
sebelum/sesudah itulah argumen jualan yang paling kuat di seluruh halaman.

**GANTI dengan screenshot asli sebelum launching** — `<BrowserFrame>` tinggal
diisi `<img>` menggantikan komponen mockup.

---

## B2. Sistem animasi

Kritik yang wajar: minimalis tanpa gerak tidak terbaca sebagai sengaja, tapi
sebagai kosong. Tiga modul internal menangani ini:

| Modul | Fungsi |
|---|---|
| `Reveal` | Fade + geser 14px saat masuk layar, `once: true` |
| `Stagger` / `StaggerItem` | Anak grid muncul berurutan 0,07s, bukan serempak |
| `CountUp` | Angka statistik menghitung naik saat terlihat |

Aturan yang dipegang: hanya `opacity` dan `transform` (GPU, tanpa reflow),
jarak geser kecil, dan **seluruhnya mati total** pada `prefers-reduced-motion`.
`Reveal` sudah tertanam di `SectionHeading`, jadi setiap judul section dapat
animasi masuk tanpa perlu dibungkus manual.

---

## C. Dibangun custom — 10 modul

Sengaja tidak diambil dari 21st.dev, karena bergantung pada data proyek Anda:

| # | Modul | Basis | Catatan |
|---|---|---|---|
| 21 | `Breadcrumb` | shadcn `breadcrumb` | + JSON-LD `BreadcrumbList` |
| 22 | `CaseStudyCard` | shadcn `card` | Butuh field khusus: screenshot, industri, metrik before/after. Tidak ada komponen galeri yang membawa metadata ini |
| 23 | `LeadForm` | shadcn `form` + react-hook-form + zod | 3 field, validasi nomor WhatsApp Indonesia |
| 24 | `WhatsAppButton` | custom | Pesan terisi otomatis sesuai halaman: `wa.me/{no}?text=...` |
| 25 | `MobileCTABar` | custom | Bar menempel di bawah, mobile saja |
| 26 | `RelatedLinks` | custom | Mesin internal linking — kunci SEO, harus sadar konteks halaman |
| 27 | `LocationGrid` | custom | Digenerate dari `locations.ts` |
| 28 | `IndustryGrid` | custom | Digenerate dari `industries.ts` |
| 29 | `RichContent` | `@tailwindcss/typography` | Wrapper prose, di-restyle ke palet stone |
| 30 | `SEOHead` + `JsonLd` + `Section` | custom | Utilitas |

---

## D. Perintah instalasi

```bash
# Fondasi
npx shadcn@latest init

# twblocks — 18 modul
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/header"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/animated-hero"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/hero-with-text-and-two-button"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/hero-with-image-text-and-two-buttons"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/stats-section"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/stats-section-with-text"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/cases-with-infinite-scroll"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/feature-with-advantages"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/feature-section-with-grid"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/feature-section-with-bento-grid"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/feature-with-image-comparison"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/pricing-cards"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/pricing-section-with-comparison"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/testimonials"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/faq-section"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/call-to-action"
npx shadcn@latest add "https://21st.dev/r/tommyjepsen/blog-section-with-rich-preview"

# Author lain
npx shadcn@latest add "https://21st.dev/r/7ovr/how-it-works-2"
npx shadcn@latest add "https://21st.dev/r/shadcnblockscom/footer-7"
```

> URL registry di atas mengikuti pola standar 21st.dev (`/r/{author}/{slug}`).
> Akan saya verifikasi satu per satu saat eksekusi Tahap 1 — kalau ada yang meleset,
> perintah `Copy prompt` di halaman komponennya tetap jadi cadangan.

---

## E. Penyesuaian wajib setelah instalasi

Komponen 21st.dev tidak dipakai apa adanya. Empat penyesuaian ini yang membedakan
hasil akhir dari situs template:

1. **Font** — default shadcn (Inter/system) diganti Space Grotesk + DM Sans
2. **Warna** — semua `slate-*` diganti `stone-*`, semua warna aksen dihapus,
   tombol primary jadi `#0C0A09`
3. **Ikon** — pastikan seluruhnya Lucide, ukuran seragam 24×24. Tidak ada emoji
4. **Radius** — satu nilai konsisten di seluruh situs (usul: `rounded-lg`, 8px)

Ditambah checklist wajib: `cursor-pointer` di semua elemen klik, focus ring terlihat,
`prefers-reduced-motion` dihormati pada `animated-hero`, dan kontras teks minimum 4.5:1.
