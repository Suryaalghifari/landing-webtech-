# PRD — Website CV Citra Teknologi Nusantara
## Versi 1: Situs Verifikasi

**Dokumen:** Product Requirements Document
**Versi:** 1.0 · Agustus 2026
**Cakupan:** Website V1 saja. Desain visual **di luar dokumen ini** (sudah tersedia terpisah).
**Tenggat:** 10 hari kalender sejak naskah lengkap — **batas keras**

---

## 1. RINGKASAN

Situs satu halaman yang berfungsi sebagai **alamat verifikasi** bagi calon klien yang sudah mengenal nama CV lewat email, company profile, atau perkenalan langsung.

**Bukan** alat pencari klien. Bukan etalase portofolio. Bukan situs portofolio pribadi.

### 1.1 Masalah yang diselesaikan

Company profile dan surat penawaran sudah dikirim memakai email domain sendiri. Jika penerima mengetik domain itu di browser dan tidak menemukan apa-apa, kredibilitas yang dibangun dokumen justru runtuh — domain hidup tapi kosong terbaca seperti perusahaan yang gagal jalan.

### 1.2 Tujuan

| Kode | Tujuan | Cara diukur |
|---|---|---|
| G1 | Membuktikan CV ini badan usaha resmi | Data legalitas tampil lengkap dan terbaca |
| G2 | Menyediakan alamat yang bisa dicek saat nama disebut | Domain aktif, halaman muat < 3 detik di 3G |
| G3 | Memudahkan kontak lanjutan | WhatsApp bisa diklik tanpa scroll |
| G4 | Mendukung dokumen penawaran, bukan menggantikannya | URL layak ditulis di kop surat dan tanda tangan email |

### 1.3 Non-goals (eksplisit tidak dikerjakan di V1)

- Grid portofolio dan halaman detail project → **V2**
- Testimoni dan bagian "klien kami" → **V2**
- Blog, artikel, dan konten SEO
- Kalkulator harga, chatbot, live chat
- Multi-bahasa
- Dashboard atau area login klien
- Animasi kompleks

**Alasan portofolio ditunda:** grid dengan satu kartu terlihat lebih buruk daripada tidak ada portofolio sama sekali. V2 dibuka setelah ada minimal 3 nama klien yang boleh dipublikasikan.

---

## 2. PENGGUNA

| Persona | Konteks | Yang dicari | Perangkat |
|---|---|---|---|
| **P1 — Pengambil keputusan instansi** | Menerima company profile, mengecek sebelum membalas | Bukti CV resmi, siapa orangnya, nomor yang bisa dihubungi | HP, jaringan lambat |
| **P2 — Bagian pengadaan / administrasi** | Memverifikasi kelayakan vendor | NIB, NPWP, alamat, kesesuaian nama badan usaha | Desktop kantor |
| **P3 — Kontak dari referral** | Mendengar nama dari kenalan, mencari sendiri | Kesan pertama: ini nyata atau tidak | HP |

Ketiganya **sudah tahu nama CV sebelum membuka situs.** Situs ini tidak melayani pengunjung dingin dari mesin pencari.

### 2.1 Skenario utama

1. Penerima email membuka domain di HP → dalam 5 detik paham ini perusahaan apa → menemukan WhatsApp → menghubungi.
2. Bagian pengadaan membuka di desktop → mencari data legalitas → mencocokkan dengan berkas penawaran → lolos verifikasi.
3. Kontak referral membuka situs → melihat tim dengan nama dan wajah asli → yakin ini bukan perorangan yang menyamar jadi perusahaan.

---

## 3. LINGKUP V1

### 3.1 Struktur halaman

Satu halaman, tujuh bagian, urutan tetap.

| # | Bagian | Wajib | Pemilik konten |
|---|---|---|---|
| S1 | Hero | Ya | Diisi klien |
| S2 | Layanan | Ya | **Diisi klien** — jangan diisi tim build |
| S3 | Cara kerja | Ya | Diisi klien |
| S4 | Legalitas & tim | Ya | Diisi klien |
| S5 | FAQ | Ya | Diisi klien |
| S6 | Kontak | Ya | Diisi klien |
| S7 | Footer | Ya | Diisi klien |

**Aturan konten:** tidak ada item layanan, klaim, atau angka yang boleh ditulis oleh siapa pun selain pemilik CV. Segala isi yang belum dikonfirmasi ditandai `[TBD]` dan tidak boleh tayang.

### 3.2 Requirement per bagian

---

**S1 — Hero**

| ID | Requirement | Prioritas |
|---|---|---|
| S1.1 | Nama badan usaha tampil penuh: CV Citra Teknologi Nusantara | Wajib |
| S1.2 | Deskriptor netral sektor dalam satu baris. Tidak menyebut sektor tertentu di headline | Wajib |
| S1.3 | Satu kalimat bukti operasional, misal: "Sistem kami berjalan di lingkungan pemerintahan desa." Satu baris, bukan section | Wajib |
| S1.4 | Baris kepercayaan: badan usaha resmi · tim 3 orang · satu penanggung jawab per project | Wajib |
| S1.5 | CTA utama mengarah ke WhatsApp | Wajib |
| S1.6 | Rentang harga atau CTA konsultasi — tergantung keputusan K3 | Opsional |

**Larangan:** kata "saya", nama sektor di headline, klaim jumlah klien atau jumlah project.

---

**S2 — Layanan**

| ID | Requirement | Prioritas |
|---|---|---|
| S2.1 | Daftar layanan diisi **hanya** oleh pemilik CV | Wajib |
| S2.2 | Setiap item harus bisa dijelaskan prosesnya dalam pertemuan tatap muka | Wajib |
| S2.3 | Dilarang menyalin daftar layanan kompetitor | Wajib |
| S2.4 | Model kerjasama dipisah tegas: project vs retainer | Wajib |
| S2.5 | Cakupan retainer ditulis eksplisit, hanya berisi yang sanggup dijalankan | Wajib |

**Pemblokir:** bagian ini tidak bisa dibangun sebelum daftar layanan final diterima.

---

**S3 — Cara kerja**

| ID | Requirement | Prioritas |
|---|---|---|
| S3.1 | 4–6 tahap, urut | Wajib |
| S3.2 | Setiap tahap menyebut **apa yang klien terima**, bukan hanya apa yang dikerjakan | Wajib |
| S3.3 | Estimasi durasi per tahap | Opsional |
| S3.4 | Tampil sebagai teks terstruktur, bukan grafis kompleks | Wajib |

---

**S4 — Legalitas & tim** — *bagian pembeda utama V1*

| ID | Requirement | Prioritas |
|---|---|---|
| S4.1 | Nama badan usaha persis seperti di akta | Wajib |
| S4.2 | Nomor NIB tampil | Wajib |
| S4.3 | NPWP badan tampil | Wajib |
| S4.4 | Alamat badan usaha tampil | Wajib |
| S4.5 | Tahun pendirian | Opsional |
| S4.6 | Tiga anggota tim: foto asli, nama lengkap, peran | Wajib |
| S4.7 | Foto tim satu gaya, latar seragam | Wajib |
| S4.8 | Dilarang memakai stock photo atau ilustrasi vektor sebagai pengganti foto orang | Wajib |
| S4.9 | Dilarang menampilkan sertifikat kursus atau badge tech stack | Wajib |

Bagian ini menggantikan fungsi portofolio di V1. Sebagian besar vendor sekelas ini tidak menampilkan legalitas selengkap ini — inilah keunggulan yang tersedia sekarang.

---

**S5 — FAQ**

Minimal enam pertanyaan. Tiga pertama wajib karena menjawab keluhan pasar yang sudah terdokumentasi:

| ID | Pertanyaan | Prioritas |
|---|---|---|
| S5.1 | Source code dan kredensial milik siapa? | Wajib |
| S5.2 | Jika kerjasama berhenti, data dan dokumentasi bagaimana? | Wajib |
| S5.3 | Berapa lama waktu respons jika sistem bermasalah? | Wajib |
| S5.4 | Ada garansi setelah serah terima? | Wajib |
| S5.5 | Bagaimana cara pembayaran dan penagihan? | Wajib |
| S5.6 | Server dan domain atas nama siapa? | Wajib |

**Aturan:** jawaban harus berupa komitmen yang benar-benar sanggup ditepati. Jangan menulis SLA yang belum disepakati internal.

---

**S6 — Kontak**

| ID | Requirement | Prioritas |
|---|---|---|
| S6.1 | Tombol WhatsApp dengan `wa.me` + pesan pembuka terisi otomatis | Wajib |
| S6.2 | Email domain sendiri. **Dilarang Gmail** | Wajib |
| S6.3 | Jam operasional | Wajib |
| S6.4 | Form kontak: nama, instansi, kebutuhan, kontak | Opsional |
| S6.5 | Jika form ada, kiriman masuk ke email dan wajib diuji sebelum rilis | Wajib jika S6.4 ada |
| S6.6 | Alamat kantor | Wajib |

**Catatan:** segmen ini cenderung menghubungi lewat WhatsApp, bukan form. Jika form mengancam tenggat, buang.

---

**S7 — Footer**

Nama badan usaha lengkap, alamat, kontak, tahun. Dilarang memuat tautan ke situs portofolio pribadi.

---

## 4. REQUIREMENT NON-FUNGSIONAL

| ID | Requirement | Target | Prioritas |
|---|---|---|---|
| N1 | Waktu muat pada jaringan lambat | < 3 detik pada 3G tersimulasi | Wajib |
| N2 | Berat halaman total | < 1 MB | Wajib |
| N3 | Mobile-first | Diuji pada layar 360px | Wajib |
| N4 | HTTPS aktif | Sertifikat valid | Wajib |
| N5 | Ukuran font body | ≥ 16px | Wajib |
| N6 | Kontras teks | Memenuhi WCAG AA | Wajib |
| N7 | Title dan meta description | Memuat nama badan usaha | Wajib |
| N8 | Favicon dan Open Graph | Tampil benar saat dibagikan di WhatsApp | Wajib |
| N9 | Domain | `.co.id` atau `.com`, **bukan** `.web.id` | Wajib |
| N10 | Email domain aktif dan diuji kirim-terima | Berfungsi dua arah | Wajib |
| N11 | Bebas animasi scroll berat | — | Wajib |
| N12 | Tanpa dark mode sebagai default | Latar terang | Wajib |
| N13 | Terdaftar di Google Search Console | — | Opsional |

---

## 5. KETERGANTUNGAN

Build tidak dapat dimulai sebelum seluruh baris berikut terpenuhi.

| # | Item | Status |
|---|---|---|
| D1 | Desain visual final (dokumen terpisah) | Tersedia — **butuh pencocokan, lihat §6** |
| D2 | Daftar layanan final | `[TBD]` |
| D3 | Jawaban 6 FAQ | `[TBD]` |
| D4 | Data legalitas: nama akta, NIB, NPWP, alamat | Siap |
| D5 | Foto + nama + peran 3 anggota tim | `[TBD]` |
| D6 | Logo, termasuk versi hitam-putih | `[TBD]` |
| D7 | Nomor WhatsApp bisnis | `[TBD]` |
| D8 | Domain dan email domain aktif | `[TBD]` |
| D9 | Keputusan K3: harga ditampilkan atau tidak | `[TBD]` |
| D10 | Keputusan K4: merek harian yang dipakai di logo dan header | `[TBD]` |

---

## 6. PENCOCOKAN DESAIN — DIKERJAKAN SEBELUM BUILD

Desain kemungkinan besar dibuat sebelum naskah final tersedia. Lakukan pemeriksaan berikut dan selesaikan **sebelum** satu baris kode ditulis.

| # | Pemeriksaan | Tindakan jika tidak cocok |
|---|---|---|
| C1 | Apakah desain memuat grid portofolio? | **Hapus dari V1.** Simpan untuk V2 |
| C2 | Apakah desain memuat bagian testimoni atau logo klien? | **Hapus dari V1** |
| C3 | Apakah desain memuat angka statistik (jumlah project, tahun, klien)? | **Hapus.** Tidak ada angka yang bisa dibuktikan |
| C4 | Apakah desain menyediakan ruang cukup untuk blok legalitas? | Perbesar. Ini bagian terpenting V1 |
| C5 | Apakah panjang teks asli muat di slot desain? | Sesuaikan desain, jangan memotong isi |
| C6 | Apakah headline desain menyebut sektor tertentu? | Ganti dengan deskriptor netral |
| C7 | Apakah desain memakai dark mode atau gradient berat? | Tinjau ulang terhadap N12 dan N1 |
| C8 | Apakah tombol WhatsApp terlihat tanpa scroll di 360px? | Pindahkan ke atas |

---

## 7. KRITERIA PENERIMAAN

Rilis hanya boleh dilakukan jika **seluruh** baris berikut terpenuhi.

- [ ] Tujuh bagian tayang, tidak ada bagian kosong atau berisi placeholder
- [ ] Tidak ada teks `[TBD]` yang lolos ke produksi
- [ ] Tidak ada klaim, angka, atau item layanan yang tidak dikonfirmasi pemilik CV
- [ ] Data legalitas cocok persis dengan akta, NIB, dan NPWP
- [ ] Foto dan nama tiga anggota tim tayang
- [ ] WhatsApp berfungsi dan sudah diuji dari perangkat lain
- [ ] Email domain sudah diuji kirim dan terima
- [ ] Tidak ada tautan ke situs portofolio pribadi
- [ ] Halaman muat < 3 detik pada 3G tersimulasi
- [ ] Tampil benar pada layar 360px
- [ ] Pratinjau tautan di WhatsApp menampilkan judul, deskripsi, dan gambar
- [ ] HTTPS aktif tanpa peringatan
- [ ] **Uji 5 detik lolos:** dua orang non-IT dapat menyebut "ini perusahaan apa" dalam 5 detik

Kriteria terakhir tidak bisa ditawar. Jika gagal, hero-nya salah — dan itu tidak dapat diperbaiki oleh desain yang lebih bagus.

---

## 8. JADWAL — BATAS KERAS 10 HARI

| Hari | Aktivitas | Keluaran |
|---|---|---|
| 1 | Kumpulkan D2–D10 | Semua `[TBD]` tertutup |
| 2 | Pencocokan desain (§6) | Desain V1 final |
| 3–4 | Tulis naskah lengkap tanpa desain | Naskah disetujui |
| 5–7 | Build | Situs berjalan di staging |
| 8 | Uji: performa, mobile, WhatsApp, email | Daftar perbaikan |
| 9 | Perbaikan + uji 5 detik | Kriteria penerimaan terpenuhi |
| 10 | Rilis | Situs live |

**Aturan tenggat:** setiap requirement yang mengancam tanggal rilis otomatis turun ke V2. Rilis tidak boleh mundur. Jika di hari ke-10 masih ada yang belum sempurna, tetap rilis — situs bisa diperbaiki setelah penawaran pertama keluar, momentum tidak bisa diambil kembali.

---

## 9. RISIKO

| # | Risiko | Dampak | Mitigasi |
|---|---|---|---|
| R1 | Pembuatan situs jadi bentuk penundaan outreach | Nol klien baru, terasa produktif | Tenggat keras 10 hari. Outreach dimulai hari ke-11 apa pun hasilnya |
| R2 | Desain memuat section yang tidak boleh ada di V1 | Halaman terlihat kosong | Pencocokan §6 sebelum build |
| R3 | Daftar layanan diisi tim build atau disalin dari kompetitor | Menjual yang tidak sanggup dikerjakan | S2.1 dan S2.3, ditegakkan di kriteria penerimaan |
| R4 | FAQ memuat SLA yang belum disepakati internal | Janji tidak tertunaikan ke klien | Sepakati internal sebelum menulis S5.3 |
| R5 | Data legalitas salah ketik | Gagal verifikasi pengadaan | Cocokkan langsung dengan dokumen asli, bukan dari ingatan |
| R6 | Lingkup melebar ke portofolio dan blog | Tenggat meleset | Non-goals §1.3 bersifat mengikat |

---

## 10. UKURAN KEBERHASILAN

Jangan mengukur situs ini dengan jumlah pengunjung. Pengunjungnya memang akan sedikit, dan itu sesuai desain.

| Metrik | Target 60 hari |
|---|---|
| Prospek yang membuka situs setelah menerima company profile | Tercatat, apa pun angkanya |
| Kontak masuk lewat WhatsApp dari situs | 3 |
| Penawaran yang lolos verifikasi administratif | 100% dari yang dikirim |
| Keberatan "apakah ini perusahaan resmi" | Nol |

Metrik terakhir adalah alasan situs ini dibuat.

---

## 11. PEMICU V2

Bangun V2 ketika **salah satu** terpenuhi:

- Terkumpul 3 nama klien yang boleh dipublikasikan
- Ada prospek yang secara eksplisit meminta melihat portofolio
- Kalah penawaran dengan alasan tercatat "tidak ada portofolio"

Lingkup V2: grid portofolio, halaman detail per project, testimoni bernama, halaman per sektor untuk dikirim sesuai konteks prospek.

---

## 12. PERTANYAAN TERBUKA

| # | Pertanyaan | Memblokir |
|---|---|---|
| Q1 | Nama Desa Silip boleh disebut publik? | S1.3 |
| Q2 | Rentang harga ditampilkan atau tidak? | S1.6 |
| Q3 | Merek di logo: `CitraTechnology` atau `Citra Teknologi Nusantara`? | S1.1, D6 |
| Q4 | Form kontak dipakai atau cukup WhatsApp? | S6.4 |
| Q5 | Status NDA Telkom Infra | V2, tidak memblokir V1 |
