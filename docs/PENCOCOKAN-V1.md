# Pencocokan Desain → PRD V1
## CV Citra Teknologi Nusantara

> Artefak yang diminta **PRD §6** — "dikerjakan sebelum build".
> Sumber: `BLUEPRINT.md`, `COMPONENTS.md` (desain yang sudah jadi) ×
> `prd-website-citra-teknologi-nusantara-v1.md`, `rencana-citra-teknologi-nusantara.md`
> Tanggal: 14 Agustus 2026

---

## 0. Ringkasan satu paragraf

Desain yang sudah jadi dirancang untuk **pembeli dingin dari Google** — UMKM yang
belum kenal Anda, harus dibujuk lewat bukti sosial, harga, dan 40 halaman SEO.
PRD V1 melayani orang yang **sudah tahu nama Anda** dan cuma ingin memverifikasi
bahwa Anda nyata. Dua pekerjaan yang berbeda.

Kabar baiknya: yang berubah adalah **blok mana yang tayang**, bukan bahasa
desainnya. Palet stone, Space Grotesk + DM Sans, sistem spacing, sumber komponen,
`Button`, `Section`, `Reveal` — semuanya utuh, tidak satu pun disentuh.

Kabar yang harus ditelan: **empat blok terbesar di halaman harus turun**, dan
bagian terpenting V1 — Legalitas & Tim — **belum ada sama sekali** di desain.

---

## 1. Konfirmasi yang tak terduga

Empat blok yang sudah saya tandai di `README.md` sebagai **memuat klaim karangan**
ternyata persis empat blok yang diperintahkan turun oleh PRD §6:

| Blok | Peringatan README | Perintah PRD |
|---|---|---|
| `TrustStrip` — "127 proyek selesai" | angka dikarang | **C3** — hapus, tidak ada angka yang bisa dibuktikan |
| `Showcase` — 3 nama klien | klien fiktif | **C1** — hapus, simpan untuk V2 |
| `MetricCards` — "+180% trafik" | metrik dikarang | **C3** — hapus |
| `TestimonialGrid` — 3 testimoni | orang fiktif | **C2** — hapus |

Dua dokumen yang ditulis terpisah sampai di kesimpulan yang sama. Artinya
penyesuaian ini bukan kemunduran — ini **menutup masalah yang memang sudah
menghalangi situs untuk tayang.** Blok-blok itu tidak pernah bisa dipakai apa adanya.

---

## 2. Jawaban §6 — C1 sampai C8

| # | Pemeriksaan | Temuan | Tindakan |
|---|---|---|---|
| **C1** | Ada grid portofolio? | Ya — `Showcase` (carousel 3 klien) | **Turun.** File disimpan, dipakai lagi di V2 |
| **C2** | Ada testimoni / logo klien? | Ya — `TestimonialGrid` | **Turun.** Disimpan untuk V2 |
| **C3** | Ada angka statistik? | Ya, di 3 tempat: `TrustStrip` (4 angka), `MetricCards` (3 metrik), kartu "94 skor PageSpeed" di hero | **Semua turun.** Termasuk `CountUp` yang jadi tidak ada gunanya |
| **C4** | Ruang cukup untuk blok legalitas? | **Tidak ada bloknya sama sekali** | **Bangun baru.** Lihat §4 — ini pekerjaan terbesar |
| **C5** | Teks asli muat di slot desain? | Belum bisa dicek — naskah `[TBD]` | Tertunda sampai D2/D3 masuk |
| **C6** | Headline menyebut sektor? | Tidak menyebut sektor, tapi **kata berputar** melanggar hal lain | Lihat §3 |
| **C7** | Ada dark mode / gradient berat? | 4 section hitam, tanpa gradient | **Keputusan Anda.** Lihat §5 |
| **C8** | WhatsApp terlihat tanpa scroll di 360px? | Ya — `MobileCTABar` menempel di bawah | **Sudah lolos.** Tidak perlu diubah |

---

## 3. Hero — satu perubahan yang tidak bisa ditawar

Hero sekarang memakai **kata berputar**: *"Website yang bikin bisnis Anda
‹ditemukan · dipercaya · menghasilkan · berkembang›"*.

Itu bertabrakan langsung dengan kriteria penerimaan terakhir — yang di PRD ditandai
**tidak bisa ditawar**:

> Uji 5 detik: dua orang non-IT dapat menyebut "ini perusahaan apa" dalam 5 detik.

Kalimatnya belum selesai sampai animasinya berputar. Pembaca harus **menunggu**
untuk tahu isi headline-nya. Untuk pengunjung yang datang menghibur diri, itu
menarik. Untuk bagian pengadaan yang membuka situs sambil memegang berkas
penawaran, itu menghalangi satu-satunya tugas hero.

**Tindakan:** tata letak dua kolom dipertahankan, kata berputar dibekukan jadi
headline statis. Isi headline ditulis dari §3.2 rencana — deskriptor netral sektor,
bukan janji pemasaran.

### Isi hero V1

| Slot | Isi | Sumber |
|---|---|---|
| Nama badan usaha, penuh | CV Citra Teknologi Nusantara | S1.1 |
| Headline | Deskriptor netral, statis | S1.2 |
| Baris bukti operasional | Satu baris, bukan section | S1.3 — butuh **K1** |
| Baris kepercayaan | badan usaha resmi · tim 3 orang · satu penanggung jawab per project | S1.4 |
| CTA | WhatsApp | S1.5 |
| Rentang harga | Opsional | S1.6 — butuh **K3** |

Baris kepercayaan S1.4 itu **menyelamatkan `TrustStrip`**: komponennya dipakai
lagi, tapi angka dan lencana perubahannya dicabut, dan posisinya pindah ke dalam
hero. Sifatnya jadi kualitatif, bukan numerik — lolos C3.

### Kolom kanan hero — butuh keputusan K1

Sekarang isinya mockup CSS (`MockModern`, `MockPhone`, `MockDashboard`). Di situs
UMKM itu placeholder yang jujur. Di V1 posisinya berubah: mockup website fiktif
yang duduk tepat di sebelah kalimat *"sistem kami berjalan di lingkungan
pemerintahan desa"* akan terbaca sebagai **gambar sistem itu**. Itu jadi klaim,
bukan dekorasi.

Dua jalan:

- **K1 = boleh sebut Desa Silip** → screenshot asli `desasilip.id` masuk ke
  `BrowserFrame`. Ini pilihan terbaik: satu-satunya bukti komersial Anda tayang di
  layar pertama.
- **K1 = belum boleh** → kolom kanan dikosongkan, hero jadi satu kolom lebar
  berpusat. Lebih baik hero polos daripada hero yang menyiratkan sesuatu yang
  belum boleh disebut.

---

## 4. Yang harus dibangun baru — S4 Legalitas & Tim

PRD menyebut bagian ini **"pembeda utama V1"**, dan C4 memerintahkan ruangnya
diperbesar. Di desain sekarang, bagian ini **tidak ada**. Ini satu-satunya modul
yang benar-benar baru.

| Modul baru | Isi | Requirement |
|---|---|---|
| `LegalityBlock` | Nama sesuai akta, NIB, NPWP badan, alamat, tahun pendirian | S4.1–S4.5 |
| `TeamGrid` | 3 orang: foto asli, nama lengkap, peran | S4.6–S4.8 |

Aturan yang mengikat pembangunannya: **dilarang stock photo atau ilustrasi vektor**
sebagai pengganti foto orang (S4.8), dan **dilarang badge tech stack atau
sertifikat kursus** (S4.9). Artinya slot fotonya tidak boleh saya isi placeholder
avatar — bagian ini hanya bisa dibangun setelah **D5** masuk.

Untuk nomor NIB dan NPWP: tampilkan sebagai teks yang bisa diseleksi dan disalin,
bukan gambar. Persona P2 (pengadaan) akan menyalinnya untuk dicocokkan dengan
berkas. Ini keperluan kecil yang menentukan apakah situs benar-benar berguna
untuk verifikasi.

---

## 5. Irama gelap — keputusan Anda (C7)

Desain sekarang punya 4 section hitam: `BeforeAfter`, `MetricCards`,
`TestimonialGrid`, `CTASection`. **Tiga dari empat turun sendiri** karena C1–C3.
Jadi masalahnya menyusut dengan sendirinya.

Tersisa satu: CTA penutup.

N12 berbunyi *"tanpa dark mode sebagai default, latar terang"*. Menurut saya itu
bicara soal **tema default halaman**, bukan larangan satu section berlatar gelap —
dan C7 memang menulis *"tinjau ulang"*, bukan *"hapus"*. Tapi ini penilaian, dan
dokumennya milik Anda.

**Usul saya:** pertahankan dua section gelap — `CTASection` (kontak penutup) dan
**`LegalityBlock`**. Menjadikan blok legalitas berlatar hitam menyelesaikan dua hal
sekaligus: memberi bobot visual yang diminta C4 untuk bagian terpenting V1, dan
mempertahankan irama terang-gelap yang membuat halaman tidak terasa datar. Halaman
tetap terbaca terang secara keseluruhan.

Kalau Anda menilai itu melanggar N12, keduanya jadi terang dan pembedanya pindah ke
garis dan spacing. Bisa dikerjakan, hanya lebih datar.

---

## 6. Peta 30 modul → status V1

### Dipakai (11)

| Modul | Jadi bagian | Perubahan |
|---|---|---|
| `Header` | semua | Dropdown 8 layanan dicabut — hanya 1 halaman. Nav jadi anchor ke 5 section |
| `HeroAnimated` | S1 | Kata berputar dibekukan, kartu "94" dicabut, kolom kanan tergantung K1 |
| `TrustStrip` | S1.4 | Angka dicabut, jadi baris kualitatif di dalam hero |
| `ServiceGrid` | S2 | Struktur dipakai, **isi wajib dari Anda** |
| `ProcessSteps` | S3 | Lihat catatan di bawah |
| `FAQAccordion` | S5 | Diperluas jadi 6 pertanyaan wajib S5.1–S5.6 |
| `CTASection` | S6 | Jadi blok kontak: WA + email domain + jam operasional + alamat |
| `Footer` | S7 | Kolom link internal dicabut — tidak ada halaman lain |
| `MobileCTABar` | — | Tetap. Sudah memenuhi C8 dan G3 |
| `Button`, `Section` | — | Tidak disentuh |
| `Reveal` / `Stagger` | — | Tetap. Lihat §7 |

**Catatan `ProcessSteps`:** S3.4 minta *"teks terstruktur, bukan grafis kompleks"*.
Kartu miring yang disematkan dengan penghubung garis putus-putus itu di perbatasan.
Usul: pertahankan tata letak bertingkatnya, cabut rotasi dan hiasan pin. Lebih
tenang, dan sesuai pembaca V1. **Keputusan Anda.**

### Diparkir untuk V2 (9) — file tidak dihapus

`Showcase` · `BeforeAfter` · `MetricCards` · `TestimonialGrid` · `PricingTable` ·
`ComparisonTable` · `ProblemSection` · `DirectoryGrid` · `MockSite`

PRD §11 menyatakan V2 akan menghidupkan portofolio, testimoni, dan halaman per
sektor. Kodenya sudah ada dan sudah rapi — **tidak ada yang dihapus**, hanya
dilepas dari halaman. Saat 3 nama klien terkumpul, ini tinggal dipasang kembali.

Catatan `PricingTable`: rencana §5.3 menolak pola *"mulai dari Rp3.500.000"* —
itu mengunci kelas pembeli dan membuat klien besar menyimpulkan Anda tidak sanggup.
Kalau **K3 = tampilkan harga**, yang masuk ke V1 adalah **satu baris rentang lebar
di hero**, bukan tabel tiga paket.

Catatan `ProblemSection`: rencana §7.2 tegas — *"tidak ada bagian masalah per
sektor"*. Dan pembaca V1 sudah kenal Anda; mereka tidak perlu diyakinkan bahwa
mereka punya masalah.

### Dibangun baru (3)

`LegalityBlock` · `TeamGrid` · `SeoHead` (lihat §7)

### Dihapus (17 modul SEO)

Seluruh modul untuk halaman jasa, kota, industri, blog, breadcrumb, `RelatedLinks`,
`JsonLd`, sitemap. V1 satu halaman, dan §2.3 rencana menyatakan SEO **sengaja
tidak dikejar** di tahun pertama.

Konsekuensi yang perlu Anda sadari: `BLUEPRINT.md` §3 dan §4 — seluruh strategi
keyword dan sitemap 40 halaman — **tidak berlaku untuk V1.** Itu pekerjaan yang
benar untuk bisnis yang berbeda, bukan untuk situs verifikasi. Dokumennya saya
biarkan utuh sebagai rujukan kalau nanti Anda memang mengejar pembeli dingin.

---

## 7. Yang gagal sekarang secara teknis

Tiga temuan konkret, semuanya melanggar requirement wajib.

### N8 — Open Graph dan favicon: **gagal**

`index.html` sekarang hanya punya `<title>` dan `<meta name="description">`.
**Tidak ada satu pun tag `og:`, dan tidak ada favicon.**

N8 wajib: pratinjau tautan harus tampil benar saat dibagikan di WhatsApp. Ini
bukan detail kosmetik — persona P1 dan P3 kemungkinan besar menerima domain Anda
**lewat WhatsApp**. Tautan tanpa pratinjau terbaca seperti tautan mencurigakan.
Butuh: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`,
favicon, dan `twitter:card`.

> **Diperbaiki 14 Agustus 2026.** Tiga bagian di bawah ini ditulis sebagai
> temuan sebelum perbaikan. Hasil sesudahnya ada di §13.

### N1 — muat < 3 detik di 3G: **kemungkinan besar gagal**

Terukur hari ini: **143 KB JS + 8,9 KB CSS setelah gzip**, ditambah dua keluarga
font Google. Di jaringan 3G lambat (±400 kbps), JS-nya saja sudah menghabiskan
jatah 3 detik sebelum React sempat jalan.

Diperparah bentuknya: ini SPA, dan hero mulai dari `opacity: 0`. Selama React
belum boot dan animasi belum jalan, **layar pertama kosong**. Untuk situs yang
tugasnya membuktikan Anda nyata, layar kosong selama 3 detik adalah kegagalan yang
persis kebalikan dari tujuannya.

Perbaikan, berurut dari yang paling murah:

| Langkah | Perkiraan hemat |
|---|---|
| Cabut `react-router-dom` — satu halaman tidak butuh router | ±15 KB gzip |
| Prerender jadi HTML statis (`vite-react-ssg`, satu route) | Layar pertama terisi **tanpa menunggu JS** |
| Muat font lokal `woff2` + `font-display: swap`, bukan dari Google | Hilang 1 round-trip ke domain lain |
| **Opsional:** ganti `Reveal` ke IntersectionObserver + transisi CSS, lepas `motion` | ±50 KB gzip |

Tiga langkah pertama saya rekomendasikan tanpa ragu. Langkah keempat baru diputuskan
**setelah diukur** — kalau tiga langkah pertama sudah melewati N1, `motion` boleh
tinggal, dan `Reveal` (fade + geser 14px, sekali jalan) tidak melanggar N11 soal
"animasi scroll berat".

Satu yang saya cabut lepas dari hasil ukur: **kotak-kotak menyala di
`AnimatedGridPattern`**. Grid SVG statisnya tetap — tampilannya nyaris sama — tapi
animasi tak berhenti itu membakar CPU dan baterai HP murah tanpa memberi apa pun.

### N9 — domain

`.co.id` atau `.com`. `.co.id` justru menguntungkan Anda: pendaftarannya menuntut
dokumen badan usaha, jadi domainnya **sendiri** sudah jadi sinyal legalitas ke
persona P2. Nilai dummy sekarang `rumahpiksel.id` — `.id` juga tidak memenuhi N9.

---

## 8. Yang tidak boleh saya tulis

PRD S2.1 dan risiko R3 menyebut ini eksplisit:

> R3 — Daftar layanan diisi tim build atau disalin dari kompetitor →
> menjual yang tidak sanggup dikerjakan.

Saya adalah tim build. Jadi yang berikut ini **kosong sampai Anda mengisinya**, dan
saya tidak akan menebak-nebak isinya sekalipun untuk sekadar demo:

| Bagian | Kenapa harus dari Anda |
|---|---|
| Daftar layanan (S2) | S2.1, S2.2 — tiap item harus bisa Anda jelaskan prosesnya di depan klien |
| Jawaban 6 FAQ (S5) | R4 — SLA yang belum disepakati internal jadi janji yang tidak tertunaikan |
| Data legalitas (S4) | R5 — cocokkan dengan dokumen asli, bukan dari ingatan |
| Angka apa pun | C3 — tidak ada angka yang bisa dibuktikan |

Rencana §5.2 memang sengaja dikosongkan dengan empat baris titik-titik. Saya
biarkan kosong.

---

## 9. Pemblokir — urut berdasarkan apa yang dihalangi

| Kode | Yang dibutuhkan | Memblokir |
|---|---|---|
| **D2** | Daftar layanan final | S2 — seluruh section |
| **D3** | Jawaban 6 FAQ | S5 — seluruh section |
| **D5** | Foto + nama + peran 3 orang | S4.6 — separuh bagian terpenting V1 |
| **D4** | NIB, NPWP, nama akta, alamat | S4.1–S4.4 |
| **D7** | Nomor WhatsApp bisnis | S1.5, S6.1, `MobileCTABar` — semua CTA |
| **D8** | Domain + email domain aktif | S6.2, N9, N10 |
| **D6** | Logo + versi hitam-putih | Header, footer, favicon, `og:image` |
| **K1/Q1** | Desa Silip boleh disebut? | S1.3 dan kolom kanan hero |
| **K3/Q2** | Rentang harga tampil? | S1.6 |
| **K4/Q3** | Merek harian di logo | S1.1, D6 |
| **Q4** | Form kontak atau cukup WA? | S6.4 |

Yang bisa saya kerjakan **tanpa menunggu satu pun dari ini**: struktur halaman,
perbaikan N1/N8/N9, pencabutan blok C1–C3, dan kerangka kosong S4 yang tinggal
diisi. Kurang lebih 70% pekerjaan build, dengan slot `[TBD]` yang belum boleh tayang.

---

## 10. Catatan soal tenggat

PRD menghitung 10 hari **sejak naskah lengkap**. Naskah belum ada — D2, D3, dan D5
masih `[TBD]`. Jadi hitungannya belum mulai.

Risiko R1 di dokumen Anda sendiri:

> Pembuatan situs jadi bentuk penundaan outreach → nol klien baru, terasa produktif.

Dan Bagian 9 rencana menaruh website di **Fase 3**, setelah legalitas terbit dan
company profile PDF jadi — dengan alasan yang ditulis terang: *"company profile
PDF lebih menentukan daripada website."*

Situs ini layak dikerjakan dan sudah setengah jalan. Tapi kalau harus memilih apa
yang dikejar minggu ini, dokumen Anda sendiri sudah menjawab: legalitas, lalu surat
referensi dari Desa Silip selagi kepala desanya masih menjabat. Yang kedua itu
satu-satunya aset yang **bisa hilang karena waktu**.

---

## 11. Keputusan — diambil 14 Agustus 2026

| # | Keputusan | Pilihan |
|---|---|---|
| C7 | Irama gelap | **`LegalityBlock` + `CTASection` berlatar hitam.** Blok legalitas dapat bobot visual yang diminta C4; halaman tetap terbaca terang |
| S3.4 | `ProcessSteps` | **Rotasi dan hiasan pin dicabut.** Tata letak bertingkat dipertahankan |
| K3 | Harga | **Rentang lebar satu baris di hero.** Bukan tabel tiga paket. Angkanya `[TBD]` — ditentukan Anda |

---

## 12. Penegakan `[TBD]`

Kriteria penerimaan PRD: *"Tidak ada teks `[TBD]` yang lolos ke produksi."*

Itu tidak boleh bergantung pada ingatan siapa pun di hari ke-10. Jadi ditegakkan
oleh mesin:

- Komponen `<Tbd>` menandai setiap slot yang belum diisi, dengan penanda visual
  yang mustahil terlewat saat halaman dibuka
- `npm run check:tbd` memindai `src/` dan **gagal dengan exit code 1** kalau masih
  ada sisa
- Perintah itu dijalankan sebagai bagian dari `npm run build`, sehingga build
  produksi **tidak bisa selesai** selama masih ada slot kosong

Cara melihat daftar yang masih kosong kapan saja:

```bash
npm run check:tbd
```

---

## 13. Hasil eksekusi — 14 Agustus 2026

### Bobot: 240 → 172 KB

| | Sebelum | Sesudah |
|---|---|---|
| JS (gzip) | 143 KB | **73,7 KB** |
| CSS (gzip) | 8,9 KB | 9,4 KB |
| HTML (gzip) | ~1 KB, kosong | **5,9 KB, berisi seluruh teks** |
| Font | 2 domain asing | 83 KB, domain sendiri |
| **Jalur render** | HTML kosong + CSS + tunggu JS | **15,3 KB, selesai** |

Yang menghasilkannya: `react-router-dom` dicabut (satu halaman tidak butuh
router), `motion` keluar dari jalur aktif, font di-host sendiri subset latin,
dan halaman di-prerender jadi HTML statis.

### Satu bug yang baru muncul setelah prerender dipasang

Prerender pertama menghasilkan **24 elemen ber-`style="opacity:0"` di dalam
HTML statis** — termasuk seluruh blok legalitas. `Reveal` versi motion
merender state awalnya ke markup, dan di SPA biasa itu tidak kelihatan.
Begitu halamannya dicetak jadi HTML, artinya berubah total: pengunjung yang
JavaScript-nya lambat atau gagal melihat hero, lalu halaman kosong.

Itu persis kebalikan dari alasan prerender dipasang.

Perbaikannya memindahkan animasi ke `animation-timeline: view()` — CSS murni,
di dalam `@supports`. Keadaan bawaan elemen jadi **terlihat**; animasi cuma
lapisan tambahan kalau browser mendukung. Tampilannya sama: pudar masuk
sambil naik 14px, sekali jalan. Sekarang nol JavaScript, dan `motion` ikut
keluar dari bundle — dari situlah sebagian besar penghematan 70 KB datang.

### Verifikasi

| Yang dicek | Hasil |
|---|---|
| `npx tsc --noEmit` | Bersih |
| `opacity:0` di HTML statis | 0 (sebelumnya 24) |
| `motion` di bundle produksi | Tidak ada |
| Teks kunci di HTML statis | Nama badan usaha, NIB, NPWP, pertanyaan FAQ — semua ada |
| `npm run check:tbd` | Exit 1, 54 slot, tanpa false positive |
| Render 7 bagian | Semua tampil, urutan sesuai §3.1 |
| Scroll horizontal | Tidak ada |

**Belum diverifikasi:** N1 di atas hitungan bobot, bukan pengukuran Lighthouse
dengan throttling 3G. N3 diuji pada 485px, belum pada 360px sungguhan —
keduanya masuk jadwal PRD hari ke-8.
