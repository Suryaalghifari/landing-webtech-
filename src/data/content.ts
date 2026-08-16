/**
 * Isi halaman — layanan, cara kerja, FAQ, harga, bukti operasional.
 *
 * ────────────────────────────────────────────────────────────────────
 * SELURUH ISI BERKAS INI ADALAH ISIAN SEMENTARA (GANTI G-1, G-2, G-3).
 * Daftar lengkap dan urutan pengerjaannya ada di
 * ISI-YANG-HARUS-DIGANTI.md di akar proyek.
 * ────────────────────────────────────────────────────────────────────
 *
 * Teks di bawah ini saya susun supaya panjangnya realistis dan tata
 * letaknya bisa dinilai utuh. PRD §3.1 dan risiko R3 tetap berlaku:
 *
 *   "Tidak ada item layanan, klaim, atau angka yang boleh ditulis oleh
 *    siapa pun selain pemilik CV."
 *
 * Artinya berkas ini BUKAN usulan isi. Kalau dipakai apa adanya, Anda
 * menjual sesuatu yang belum tentu sanggup dikerjakan — dan janji di
 * FAQ (waktu respons, garansi, termin pembayaran) adalah komitmen yang
 * akan ditagih klien, bukan bahan pemasaran.
 */

/**
 * S2 — Layanan. GANTI G-2.
 *
 * S2.4 menuntut model kerjasama dipisah tegas: project vs retainer.
 * Pemisahan itu struktur, dan strukturnya sudah benar — yang perlu Anda
 * ganti isinya.
 *
 * S2.2 — syarat tiap item: harus bisa Anda jelaskan prosesnya dalam
 * pertemuan tatap muka. Kalau ragu menjelaskannya, item itu belum layak
 * masuk. S2.3 — dilarang menyalin daftar layanan kompetitor.
 */
export const serviceGroups = [
  {
    id: "project",
    label: "Project",
    note: "Dikerjakan sekali, diserahterimakan penuh beserta source code dan kredensialnya.",
    items: [
      {
        title: "Sistem informasi berbasis web",
        detail:
          "Pendataan, pelaporan, dan arsip yang selama ini tersebar di spreadsheet, dipindahkan ke satu sistem dengan hak akses per peran.",
      },
      {
        title: "Aplikasi web internal",
        detail:
          "Alat bantu kerja untuk satu proses spesifik — pencatatan, persetujuan bertingkat, atau ekspor data ke format yang diminta instansi induk.",
      },
      {
        title: "Pengambilalihan sistem yang sudah berjalan",
        detail:
          "Sistem yang vendor lamanya sudah tidak bisa dihubungi. Kami audit, dokumentasikan, lalu lanjutkan pengembangannya.",
      },
    ],
  },
  {
    id: "retainer",
    label: "Retainer",
    /** S2.5 — cakupan ditulis eksplisit, hanya berisi yang sanggup dijalankan. */
    note: "Berjalan bulanan. Cakupannya sengaja ditulis sempit — hanya yang benar-benar sanggup kami jalankan setiap bulan, bukan janji tak terbatas.",
    items: [
      {
        title: "Pemeliharaan dan perbaikan",
        detail:
          "Pemantauan uptime, backup harian, pembaruan keamanan, dan perbaikan gangguan. Tidak termasuk penambahan fitur baru.",
      },
      {
        title: "Perubahan terjadwal",
        detail:
          "Kuota jam pengembangan per bulan untuk penyesuaian kecil. Sisa kuota tidak diakumulasi ke bulan berikutnya.",
      },
    ],
  },
];

/**
 * S3 — Cara kerja, 4–6 tahap urut. GANTI G-2.
 *
 * S3.2 adalah syarat yang paling sering dilanggar: tiap tahap harus
 * menyebut APA YANG KLIEN TERIMA, bukan hanya apa yang Anda kerjakan.
 * "Analisis kebutuhan" bukan tahap — "dokumen kebutuhan yang Anda
 * setujui" baru tahap. Karena itu field-nya bernama `deliverable`,
 * bukan `body`. Pertahankan aturan itu saat menggantinya.
 *
 * `duration` (S3.3) opsional — kosongkan stringnya kalau belum pasti,
 * barisnya otomatis tidak dirender.
 */
export const processSteps = [
  {
    step: "01",
    title: "Pertemuan dan pendataan kebutuhan",
    deliverable:
      "Dokumen kebutuhan berisi daftar proses yang akan disistemkan, siapa penggunanya, dan apa yang tidak termasuk. Anda tanda tangani sebelum kami lanjut.",
    duration: "3–5 hari kerja",
  },
  {
    step: "02",
    title: "Rancangan dan penawaran final",
    deliverable:
      "Rancangan tampilan tiap halaman utama, jadwal pengerjaan, dan surat penawaran dengan angka yang tidak berubah di tengah jalan.",
    duration: "5–7 hari kerja",
  },
  {
    step: "03",
    title: "Pengerjaan dan peninjauan berkala",
    deliverable:
      "Akses ke versi uji coba sejak minggu pertama, plus laporan kemajuan tiap pekan. Anda bisa mencobanya sendiri, bukan menunggu sampai selesai.",
    duration: "4–10 minggu",
  },
  {
    step: "04",
    title: "Serah terima",
    deliverable:
      "Source code, kredensial server dan domain, dokumentasi teknis, dan sesi pelatihan untuk operator. Semuanya atas nama instansi Anda.",
    duration: "2–3 hari kerja",
  },
];

/**
 * S5 — FAQ. Enam pertanyaan, semuanya wajib. GANTI G-3 (jawabannya saja).
 *
 * PERTANYAANNYA ditentukan PRD, jadi jangan diubah. Tiga yang pertama
 * menjawab keluhan pasar yang sudah terdokumentasi (rencana §4.2):
 * vendor yang menyandera kode dan kredensial, tidak ada transisi
 * pengetahuan, dan vendor yang baru muncul saat menagih.
 *
 * JAWABANNYA dari Anda, dan ini bagian paling berisiko di seluruh situs.
 * Risiko R4: jangan menulis SLA yang belum disepakati internal. Angka
 * "4 jam kerja" di S5.3 dan "tiga bulan" di S5.4 di bawah adalah contoh
 * bentuk jawaban, bukan komitmen yang sudah Anda ambil.
 */
export const faq = [
  {
    id: "S5.1",
    q: "Source code dan kredensial milik siapa?",
    a: "Milik Anda, sepenuhnya. Source code diserahkan saat serah terima, dan seluruh kredensial — server, domain, basis data — dibuat atas nama instansi Anda sejak awal, bukan atas nama kami lalu dipindahkan belakangan.",
  },
  {
    id: "S5.2",
    q: "Jika kerjasama berhenti, data dan dokumentasi bagaimana?",
    a: "Anda menerima ekspor lengkap basis data dan dokumentasi teknis dalam 14 hari kerja sejak pemberitahuan, tanpa biaya tambahan dan tanpa syarat. Karena kredensial sudah atas nama Anda, kami tidak perlu menyerahkan apa pun — Anda tinggal mencabut akses kami.",
  },
  {
    id: "S5.3",
    q: "Berapa lama waktu respons jika sistem bermasalah?",
    a: "Untuk gangguan yang membuat sistem tidak bisa dipakai sama sekali: kami membalas dalam 4 jam kerja dan mulai menangani hari itu juga. Untuk gangguan yang tidak menghentikan pekerjaan: 1 hari kerja. Angka ini berlaku untuk klien retainer.",
  },
  {
    id: "S5.4",
    q: "Ada garansi setelah serah terima?",
    a: "Tiga bulan untuk perbaikan kesalahan yang berasal dari pekerjaan kami, tanpa biaya. Permintaan fitur baru atau perubahan proses di luar dokumen kebutuhan tidak termasuk garansi — itu masuk pekerjaan baru.",
  },
  {
    id: "S5.5",
    q: "Bagaimana cara pembayaran dan penagihan?",
    a: "Tiga termin: 40% saat penandatanganan, 30% saat rancangan disetujui, 30% saat serah terima. Pembayaran ke rekening atas nama CV, disertai faktur dan bukti potong pajak. Kami tidak menerima pembayaran ke rekening pribadi.",
  },
  {
    id: "S5.6",
    q: "Server dan domain atas nama siapa?",
    a: "Atas nama instansi Anda. Kami bisa menguruskan pendaftaran dan pembayarannya, tapi pemilik terdaftar tetap Anda — sehingga Anda tidak pernah berada di posisi harus meminta izin kepada vendor untuk mengakses milik sendiri.",
  },
];

/**
 * S1.6 — rentang harga, satu baris di hero. GANTI G-9.
 *
 * Rencana §5.3 menolak pola "mulai dari Rp3.500.000": itu mengunci kelas
 * pembeli, dan klien besar menyimpulkan Anda tidak sanggup menangani
 * pekerjaan besar. Rentang lebar melakukan dua hal sekaligus — batas
 * bawah menangkap yang kecil, batas atas memberi izin klien besar
 * menganggap Anda sanggup. Pertahankan bentuk rentangnya; angkanya Anda
 * yang tentukan dari biaya dan kapasitas tim.
 */
export const priceRange = {
  text: "Rp8 juta – Rp150 juta, tergantung lingkup",
  note: "Konsultasi gratis untuk estimasi.",
};

/**
 * S1.3 — satu baris bukti operasional. Satu baris, bukan section.
 * GANTI G-1.
 *
 * Kalimat di bawah sengaja anonim. Kalau Anda memutuskan nama Desa Silip
 * boleh disebut publik, sebut namanya — bukti bernama jauh lebih kuat
 * daripada "lingkungan pemerintahan desa" yang bisa diklaim siapa saja.
 */
export const operationalProof =
  "Sistem kami berjalan di lingkungan pemerintahan desa, dipakai setiap hari kerja sejak 2024.";

/**
 * S1 — foto hero. GANTI G-5.
 *
 * Yang terpasang sekarang foto arsitektur; dipilih karena geometris dan
 * nyaris monokrom sehingga menyatu dengan palet, dan karena ia tidak
 * berpura-pura menjadi bukti apa pun.
 *
 * Penggantinya: foto tim bertiga atau suasana kerja, persegi, dari sesi
 * pemotretan yang sama dengan foto anggota tim di S4 — satu sesi menutup
 * dua kebutuhan, dan gayanya otomatis seragam (S4.7).
 *
 * JANGAN diganti screenshot website. Pembaca situs ini datang dengan satu
 * pertanyaan — "ini nyata atau tidak" — dan gambar website tidak
 * menjawabnya; gambar orang dan tempat yang menjawabnya. Screenshot hasil
 * kerja juga bahasa situs portofolio, sementara rencana §7.1 justru
 * memisahkan situs ini dari situs portofolio pribadi.
 */
export const heroPhoto = "/hero.jpg";
