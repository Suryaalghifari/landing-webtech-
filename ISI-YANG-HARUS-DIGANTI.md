# Isi yang harus diganti sebelum situs ini tayang

Tampilan situs sudah selesai dan sudah Anda setujui. **Isinya belum.**

Sampai kemarin, setiap bagian yang belum terisi tampil sebagai kotak kuning
`[TBD]` di halaman. Penanda itu sekarang dicabut atas permintaan Anda, dan
konsekuensinya perlu ditulis terus terang di baris pertama dokumen ini:

> **Halaman itu sekarang terlihat selesai padahal belum.** Nomor NIB, NPWP,
> nama anggota tim, jawaban FAQ, dan rentang harga yang tampil di layar adalah
> isian sementara yang saya susun untuk menilai tata letak — bukan data CV
> Anda, dan bukan usulan isi. Tidak ada lagi apa pun di halaman yang
> memberitahu itu.

Dokumen ini adalah satu-satunya pengingat yang tersisa. Satu lagi ada di
terminal: `npm run build` mencetak daftar yang masih tertinggal setiap kali
dijalankan.

---

## Aturan yang mengikat seluruh daftar ini

PRD §3.1, risiko R3:

> "Tidak ada item layanan, klaim, atau angka yang boleh ditulis oleh siapa pun
> selain pemilik CV."

Karena itu semua yang ada di daftar ini harus **Anda** yang tulis. Bukan
karena saya tidak bisa mengarangnya — saya sudah mengarangnya, dan hasilnya
ada di layar sekarang — tapi karena setiap barisnya adalah janji yang akan
ditagih klien. Kalimat FAQ soal waktu respons 4 jam adalah kontrak, bukan
bahan pemasaran.

---

## Daftar tugas

Urut dari yang paling berbahaya kalau salah, bukan dari yang paling mudah.

### G-4 · Data legalitas — **paling kritis**

| | |
|---|---|
| Berkas | `src/data/site.ts` → `legality` |
| Tampil di | Bagian Legalitas (layar hitam), Footer, Kontak |
| Sumber data | Akta pendirian, NIB, NPWP badan |

Yang terpasang sekarang:

```
NIB      0123456789012
NPWP     31.234.567.8-412.000
Alamat   Jl. Depati Amir No. 27, Pangkalpinang, Kepulauan Bangka Belitung 33684
Tahun    2026
```

**Semuanya karangan. Tidak merujuk ke badan usaha mana pun.**

Ini satu-satunya kelompok data yang salahnya berakibat langsung, dan alasannya
adalah alasan situs ini dibangun: bagian pengadaan akan **menyalin** nomor itu
dan mencocokkannya dengan berkas penawaran Anda. Kalau tidak cocok, Anda gagal
verifikasi — di titik yang seharusnya justru meyakinkan mereka.

Salin dari dokumen aslinya, digit per digit. Jangan dari ingatan, jangan dari
berkas lain yang juga hasil salinan (risiko R5).

### G-7 · Nomor WhatsApp

| | |
|---|---|
| Berkas | `src/data/site.ts` → `site.phone` |
| Terpasang | `6281234567890` — nomor karangan |
| Tampil di | Tombol hero, tombol header, bar bawah mobile, bagian Kontak, footer |

Format: internasional, **tanpa tanda `+`**, tanpa spasi. `081…` ditulis
`6281…`. Salah format = tombolnya membuka wa.me ke nomor yang tidak ada.

Ini tujuan utama situs (G3 di PRD): tombolnya harus bisa diklik tanpa scroll di
layar 360px. Selama nomornya karangan, seluruh situs belum melakukan tugasnya.

### G-8 · Domain dan email

| | |
|---|---|
| Berkas | `src/data/site.ts` → `site.domain`, `site.email` · dan `index.html` |
| Terpasang | `citrateknologi.co.id`, `halo@citrateknologi.co.id` |

Di `index.html` ada tiga tempat yang ikut memakai domain ini: `og:url`,
`og:image`, dan `canonical`. Ketiganya harus URL absolut dengan domain final —
kalau tidak, pratinjau WhatsApp menunjuk ke alamat yang salah.

Dua hal yang tidak bisa ditawar:

- **N9** — domain harus `.co.id` atau `.com`. `.co.id` menuntut dokumen badan
  usaha untuk didaftarkan, jadi domainnya sendiri sudah jadi bukti legalitas
  sebelum halaman terbuka.
- **S6.2** — email harus domain sendiri. **Gmail dilarang.** Alamat
  `@gmail.com` di kop penawaran adalah hal pertama yang dicurigai bagian
  pengadaan, dan satu itu saja membatalkan seluruh kerja bagian Legalitas.

### G-2 · Daftar layanan dan tahap kerja

| | |
|---|---|
| Berkas | `src/data/content.ts` → `serviceGroups`, `processSteps` |
| Tampil di | Bagian Layanan, bagian Cara kerja, dropdown "Layanan" di navbar |

Yang terpasang sekarang: 3 layanan Project, 2 cakupan Retainer, 4 tahap kerja —
semuanya karangan.

Yang **jangan** diubah: pemisahan Project vs Retainer (S2.4), dan bentuk field
`deliverable` pada tahap kerja. Yang **harus** diubah: isinya.

Tiga syarat saat menulisnya:

- **S2.2** — tiap item harus bisa Anda jelaskan prosesnya dalam pertemuan
  tatap muka. Kalau ragu menjelaskannya, item itu belum layak masuk daftar.
- **S2.3** — dilarang menyalin daftar layanan kompetitor.
- **S2.5** — cakupan retainer ditulis eksplisit, **termasuk yang tidak
  termasuk**. Retainer yang cakupannya kabur adalah cara tercepat kehilangan
  uang setiap bulan.
- **S3.2** — tiap tahap menyebut **apa yang klien terima**, bukan apa yang Anda
  kerjakan. "Analisis kebutuhan" bukan tahap; "dokumen kebutuhan yang Anda
  setujui" baru tahap. Field-nya dinamai `deliverable` supaya aturan ini sulit
  dilanggar tanpa sadar.

### G-3 · Jawaban FAQ

| | |
|---|---|
| Berkas | `src/data/content.ts` → `faq` (isi `a`, jangan ubah `q`) |
| Tampil di | Bagian FAQ |

**Enam pertanyaannya ditentukan PRD — jangan diubah.** Tiga yang pertama
menjawab keluhan pasar yang sudah terdokumentasi di rencana §4.2: vendor yang
menyandera kode dan kredensial, tidak ada transisi pengetahuan, dan vendor yang
baru muncul saat menagih.

Jawaban yang terpasang sekarang mengandung angka-angka ini, semuanya karangan:

- respons 4 jam kerja untuk gangguan berat, 1 hari kerja untuk sisanya
- ekspor data dalam 14 hari kerja
- garansi 3 bulan
- termin pembayaran 40 / 30 / 30

**Risiko R4 berlaku penuh di sini.** Jangan menulis SLA yang belum disepakati
internal. Sepakati dulu siapa yang mengangkat telepon jam 9 malam, baru tulis
angkanya. Jawaban di bagian ini adalah komitmen yang akan ditagih klien.

### G-5 · Nama, peran, dan foto tim

| | |
|---|---|
| Berkas | `src/data/site.ts` → `team` · foto hero di `src/data/content.ts` |
| Tampil di | Bagian Legalitas (bawah), hero (kolom kanan) |

Nama yang terpasang — Rangga Prasetyo, Dian Ayu Lestari, Bayu Ramadhan —
karangan. Ganti dengan nama dan peran yang sebenarnya.

**Foto belum ada, dan itu disengaja.** Yang tampil sekarang monogram inisial di
atas kotak abu. S4.8 melarang stock photo atau ilustrasi vektor sebagai
pengganti foto orang, dan larangan itu justru makin penting sekarang: halaman
ini sudah terlihat selesai, jadi wajah orang asing di slot itu akan paling
meyakinkan tepat pada saat paling berbahaya. Monogram tidak berpura-pura
menjadi siapa pun.

Cara mengisinya: taruh berkas di `public/tim/`, lalu ubah `photo: null` menjadi
`photo: "/tim/nama.jpg"`. Rasio 4:5, satu gaya, latar seragam (S4.7).

Foto hero (`heroPhoto` di `content.ts`) sekarang foto arsitektur — dipilih
karena geometris, nyaris monokrom, dan tidak berpura-pura menjadi bukti apa
pun. Penggantinya sebaiknya foto tim bertiga atau suasana kerja, persegi,
**dari sesi pemotretan yang sama** dengan foto anggota tim: satu sesi menutup
dua kebutuhan sekaligus, dan gayanya otomatis seragam.

Jangan diganti screenshot website. Pembaca situs ini datang dengan satu
pertanyaan — "ini nyata atau tidak" — dan gambar website tidak menjawabnya.
Gambar orang dan tempat yang menjawabnya.

### G-9 · Rentang harga

| | |
|---|---|
| Berkas | `src/data/content.ts` → `priceRange` |
| Terpasang | "Rp8 juta – Rp150 juta, tergantung lingkup" — karangan |
| Tampil di | Hero, satu baris di bawah tombol |

Pertahankan **bentuk rentangnya**; ganti angkanya berdasarkan biaya dan
kapasitas tim Anda.

Rencana §5.3 menolak pola "mulai dari Rp3.500.000", dan alasannya layak
diingat: batas bawah tunggal mengunci kelas pembeli, dan klien besar
menyimpulkan Anda tidak sanggup menangani pekerjaan besar. Rentang lebar
bekerja dua arah — batas bawah menangkap yang kecil, batas atas memberi izin
klien besar menganggap Anda sanggup.

### G-1 · Satu baris bukti operasional

| | |
|---|---|
| Berkas | `src/data/content.ts` → `operationalProof` |
| Tampil di | Hero, tepat di bawah judul |

Terpasang: *"Sistem kami berjalan di lingkungan pemerintahan desa, dipakai
setiap hari kerja sejak 2024."*

Kalimat itu sengaja anonim, dan itu kelemahannya — kalimat anonim bisa diklaim
siapa saja. **Keputusan yang perlu Anda ambil: boleh tidak nama Desa Silip
disebut publik di sini?** Kalau boleh, sebut namanya; bukti bernama jauh lebih
kuat. Kalau tidak, kalimat anonim di atas tetap dipakai, tapi pastikan
klaimnya benar.

### G-6 · Logo, favicon, dan gambar pratinjau

| | |
|---|---|
| Berkas | `public/favicon.svg`, `public/og.png`, referensinya di `index.html` |

- `favicon.svg` — penampung polos, ganti dengan logo asli.
- `og.png` — sudah saya buatkan, 1200×630, tipografi saja di atas latar hitam.
  Ini yang tampil sebagai pratinjau saat tautan situs dikirim lewat WhatsApp,
  dan itu bukan detail kosmetik: tautan tanpa pratinjau terbaca seperti tautan
  mencurigakan, dan halaman Anda gagal sebelum sempat dibuka. Ganti begitu logo
  asli jadi. Pratinjau WhatsApp memotong tepinya — jangan taruh apa pun yang
  penting di 60px terluar.

---

## Cara memeriksa sisa pekerjaan

```bash
npm run cek      # daftar isian sementara yang masih terpasang
npm run build    # ikut menjalankan pemeriksaan yang sama di akhir
```

Pemeriksa itu membaca **nilainya**, bukan komentar `GANTI G-n` di dalam kode.
Sengaja: komentar gampang tertinggal setelah nilainya diganti, dan pemeriksa
yang berteriak setelah pekerjaannya selesai akan diabaikan dalam seminggu.

Build tidak akan gagal karenanya — situs tetap bisa dibangun dan dilihat.
Tapi **jangan deploy selama G-4 masih muncul di daftar itu.**

Satu batasannya perlu Anda tahu: **G-6 tidak bisa dideteksi otomatis.** Logo
dan favicon adalah berkas gambar, dan skrip tidak bisa menilai apakah yang
terpasang sudah logo asli atau masih penampung. Daftar `npm run cek` yang
bersih berarti *teksnya* sudah diganti — belum tentu gambarnya.

---

## Yang tidak perlu Anda kerjakan

Supaya jelas batasnya, ini sudah selesai dan tidak menunggu apa pun dari Anda:

- Seluruh tata letak, tipografi, warna, dan animasi
- Struktur enam bagian sesuai urutan yang PRD tetapkan
- Navbar dengan dropdown dua kolom, footer empat kolom
- Tombol salin di tiap baris data legalitas
- FAQ yang bisa ditemukan Ctrl+F walau accordion-nya tertutup
- Halaman di-prerender jadi HTML statis — teks tetap terbaca sebelum
  JavaScript sampai, dan tetap terbaca kalau JavaScript gagal termuat
- Font di-host sendiri, tidak memanggil Google Fonts
- Meta tag Open Graph, canonical, dan deskripsi

## Yang sengaja tidak dibuat

- **Form kontak (S6.4)** — PRD sendiri mencatat segmen ini menghubungi lewat
  WhatsApp, dan "jika form mengancam tenggat, buang". Form juga menyeret
  kewajiban S6.5: harus diuji kirim-terima sebelum rilis, plus backend
  pengirim email. Kalau nanti tetap diinginkan, itu tambahan — bukan pengganti
  bagian Kontak yang sekarang.
- **Ikon media sosial di footer** — slotnya ada, sengaja kosong. Ikon yang
  tidak menuju ke mana pun adalah hal pertama yang membuat pengunjung curiga
  situsnya belum jadi.
- **Portofolio, testimoni, dan angka statistik** — ditunda ke V2 atas perintah
  PRD §6 (C1, C2, C3). Sembilan komponennya tidak dihapus, hanya dipindahkan
  ke folder `parked-v2/` di akar proyek. PRD §11 menghidupkannya kembali begitu
  terkumpul tiga nama klien yang boleh dipublikasikan.
