/**
 * DIPARKIR UNTUK V2 — tidak dipakai di V1.
 *
 * PRD §1.3 menetapkan portofolio, testimoni, dan angka statistik sebagai
 * non-goal V1, dan §6 (C1–C3) memerintahkan bloknya turun dari halaman.
 * PRD §11 menghidupkannya lagi begitu terkumpul 3 nama klien yang boleh
 * dipublikasikan.
 *
 * File ini sengaja TIDAK dihapus supaya V2 tinggal memasang kembali.
 * Karena tidak ada yang mengimpornya dari halaman, Vite membuangnya dari
 * bundle produksi — isinya tidak ikut tayang.
 *
 * PERINGATAN: seluruh nama klien, testimoni, dan angka di file ini KARANGAN.
 * Tidak satu pun boleh tayang tanpa diganti data nyata.
 */

/** Kata yang berputar di hero. Memuat 4 layanan tanpa jadi daftar. */
export const heroWords = ["ditemukan", "dipercaya", "menghasilkan", "berkembang"];

export const trustStats = [
  {
    value: "127",
    label: "Proyek selesai",
    change: "23",
    direction: "up" as const,
    compare: "Tahun lalu: 104 proyek",
  },
  {
    value: "94",
    label: "Rata-rata skor PageSpeed",
    change: "31 poin",
    direction: "up" as const,
    compare: "Sebelum dikerjakan: 63",
  },
  {
    value: "1,8",
    label: "Rata-rata waktu muat (detik)",
    change: "4,1 detik",
    direction: "down" as const,
    compare: "Sebelum dikerjakan: 5,9 detik",
  },
  {
    value: "89%",
    label: "Klien lanjut tahun berikutnya",
    change: "6%",
    direction: "up" as const,
    compare: "Rata-rata industri: sekitar 60%",
  },
];

export const problems = [
  {
    title: "Website lemot, pengunjung kabur duluan",
    body: "Setiap satu detik tambahan waktu muat, sekitar 7% pengunjung pergi sebelum halaman Anda terbuka. Mereka tidak pernah tahu Anda menjual apa.",
  },
  {
    title: "Sudah punya website, tapi tidak muncul di Google",
    body: "Punya website bukan berarti ditemukan. Tanpa struktur dan konten yang benar, website Anda tidak pernah masuk halaman satu untuk kata kunci yang dicari calon pelanggan.",
  },
  {
    title: "Dibuat sekali, lalu tidak ada yang mengurus",
    body: "Plugin usang, sertifikat kedaluwarsa, form kontak mati diam-diam. Website yang ditinggalkan pelan-pelan berubah jadi beban, bukan aset.",
  },
];

export const services = [
  {
    title: "Website Baru",
    outcome: "Punya rumah digital yang cepat dan siap jualan",
    body: "Dibangun dari nol sesuai bisnis Anda. Bukan template yang tinggal ganti logo.",
    href: "/jasa/pembuatan-website",
    icon: "layout",
  },
  {
    title: "Muncul di Google",
    outcome: "Ditemukan orang yang memang sedang mencari",
    body: "Riset kata kunci, perbaikan teknis, dan konten yang menjawab pertanyaan calon pelanggan.",
    href: "/jasa/seo",
    icon: "search",
  },
  {
    title: "Dirawat Rutin",
    outcome: "Tidak perlu memikirkan sisi teknisnya lagi",
    body: "Update, backup, pemantauan keamanan, dan perbaikan. Ada yang menjaga setiap bulan.",
    href: "/jasa/maintenance-website",
    icon: "shield",
  },
  {
    title: "Aplikasi Custom",
    outcome: "Proses kerja yang tadinya manual jadi otomatis",
    body: "Aplikasi web atau Android untuk kebutuhan yang tidak bisa ditangani website biasa.",
    href: "/jasa/pembuatan-aplikasi",
    icon: "smartphone",
  },
];

export const metrics = [
  {
    before: "34",
    after: "96",
    direction: "up" as const,
    label: "Skor PageSpeed",
    client: "Klinik Sehat Bersama",
    note: "Waktu muat turun dari 8,4 detik jadi 1,2 detik",
  },
  {
    before: "412",
    after: "1.153",
    direction: "up" as const,
    label: "Pengunjung organik / bulan",
    client: "Dapur Nusantara",
    note: "Enam bulan setelah perbaikan SEO",
  },
  {
    before: "3",
    after: "27",
    direction: "up" as const,
    label: "Leads masuk / bulan",
    client: "CV Bangun Karya",
    note: "Setelah redesign dan penambahan halaman layanan",
  },
];

export const process = [
  {
    step: "01",
    title: "Konsultasi gratis",
    body: "Ngobrol 30 menit lewat WhatsApp atau telepon. Kami dengar dulu masalahnya sebelum menawarkan apa pun. Tidak ada biaya, tidak ada kewajiban lanjut.",
  },
  {
    step: "02",
    title: "Penawaran & desain",
    body: "Anda terima rincian harga tertulis dan mockup desain. Revisi desain sampai Anda setuju, sebelum satu baris kode pun ditulis.",
  },
  {
    step: "03",
    title: "Pengerjaan",
    body: "Kami bangun, Anda pantau lewat link preview yang bisa diakses kapan saja. Update progres setiap minggu, tanpa perlu Anda tagih.",
  },
  {
    step: "04",
    title: "Serah terima & pendampingan",
    body: "Website hidup, plus pelatihan cara mengelolanya. Gratis pendampingan 30 hari untuk perbaikan apa pun yang muncul.",
  },
];

export const comparison = {
  columns: ["Rumah Piksel", "Template instan", "Freelance termurah"],
  rows: [
    { feature: "Waktu muat di bawah 2 detik", values: [true, false, false] },
    { feature: "Struktur SEO sejak awal", values: [true, false, false] },
    { feature: "Desain khusus, bukan template", values: [true, false, true] },
    { feature: "Revisi desain tanpa batas", values: [true, false, false] },
    { feature: "Garansi perbaikan bug 90 hari", values: [true, false, false] },
    { feature: "Pendampingan setelah serah terima", values: [true, false, false] },
    { feature: "Kode diserahkan ke Anda", values: [true, false, true] },
    { feature: "Ada yang bisa dihubungi tahun depan", values: [true, true, false] },
  ],
};

/** Dikelompokkan per kategori untuk FAQ bertab — lihat PAGE-SPECS.md §11. */
export const faqCategories = [
  {
    id: "harga",
    label: "Harga & Pembayaran",
    items: [
      {
        q: "Apakah harga sudah termasuk domain dan hosting?",
        a: "Sudah, untuk tahun pertama. Mulai tahun kedua ada biaya perpanjangan sekitar Rp 800 ribu–1,5 juta per tahun tergantung paket, dan itu dibayar langsung ke penyedia, bukan ke kami. Semua kami tulis terbuka di halaman harga.",
      },
      {
        q: "Apakah bisa dicicil?",
        a: "Bisa. Umumnya 50% di awal sebagai DP dan 50% saat serah terima. Untuk proyek di atas Rp 15 juta bisa dibagi tiga termin. Semua tertulis di kontrak.",
      },
      {
        q: "Kenapa lebih mahal dari jasa sebelah?",
        a: "Karena yang Anda bayar bukan cuma tampilan. Struktur SEO, optimasi kecepatan, garansi 90 hari, dan pendampingan setelah serah terima itu pekerjaan tambahan yang nyata. Kalau kebutuhan Anda benar-benar sederhana, kami akan bilang terus terang dan menawarkan paket paling kecil.",
      },
      {
        q: "Ada biaya tersembunyi?",
        a: "Tidak ada. Seluruh biaya lanjutan — perpanjangan domain, hosting, maintenance opsional, penambahan halaman — kami tulis angkanya di halaman harga sebelum Anda memutuskan.",
      },
    ],
  },
  {
    id: "proses",
    label: "Proses & Waktu",
    items: [
      {
        q: "Berapa lama pengerjaan sebuah website?",
        a: "Website company profile 2–3 minggu. Toko online 4–6 minggu. Aplikasi custom tergantung kompleksitas, biasanya 8–12 minggu. Kami kasih jadwal tertulis di penawaran, dan kalau meleset karena kesalahan kami, tidak ada biaya tambahan.",
      },
      {
        q: "Apa saja yang harus saya siapkan?",
        a: "Logo kalau sudah punya, foto produk atau tempat usaha, dan gambaran singkat soal apa yang Anda jual. Sisanya kami bantu — termasuk penulisan teksnya kalau Anda tidak sempat.",
      },
      {
        q: "Berapa kali saya bisa minta revisi?",
        a: "Revisi desain tanpa batas sampai Anda setuju, dan itu terjadi sebelum satu baris kode pun ditulis. Setelah masuk tahap pengerjaan, perubahan besar pada struktur akan kami diskusikan dulu karena berdampak ke jadwal.",
      },
      {
        q: "Bisa ketemu langsung?",
        a: "Bisa, kalau Anda di kota basis kami atau sekitarnya. Di luar itu kami kerjakan lewat WhatsApp dan video call.",
      },
    ],
  },
  {
    id: "teknis",
    label: "Teknis",
    items: [
      {
        q: "Bagaimana kalau saya tidak paham teknis sama sekali?",
        a: "Justru itu pekerjaan kami. Anda cukup cerita bisnisnya seperti apa dan ingin dapat apa. Setelah jadi, kami latih cara mengelola isinya — ganti foto, tulis artikel, ubah harga — tanpa perlu menyentuh kode.",
      },
      {
        q: "Website saya sudah ada, tapi jelek dan lemot. Bisa diperbaiki?",
        a: "Bisa, dan seringnya lebih murah daripada bikin baru. Kami audit dulu gratis untuk lihat mana yang layak diselamatkan dan mana yang lebih baik dibangun ulang. Hasil auditnya kami kasih apa adanya, termasuk kalau ternyata website Anda sebenarnya sudah cukup baik.",
      },
      {
        q: "Websitenya bisa dibuka bagus di HP?",
        a: "Wajib, dan itu bukan fitur tambahan. Lebih dari 80% pengunjung UMKM Indonesia datang dari ponsel. Kami uji di ukuran layar kecil dulu, baru desktop.",
      },
    ],
  },
  {
    id: "setelah",
    label: "Setelah Jadi",
    items: [
      {
        q: "Kalau nanti saya mau pindah ke pengembang lain?",
        a: "Silakan, dan kami bantu proses pemindahannya. Domain, hosting, dan seluruh kode atas nama Anda sejak hari pertama. Kami tidak menyandera aset klien.",
      },
      {
        q: "Kalau ada yang error setelah serah terima?",
        a: "Garansi perbaikan bug 90 hari, gratis. Di luar itu, kalau errornya karena kesalahan kami, tetap kami perbaiki tanpa biaya. Yang berbayar hanya permintaan fitur baru.",
      },
      {
        q: "Apakah wajib ambil paket maintenance?",
        a: "Tidak wajib. Banyak klien mengelola sendiri setelah dilatih. Paket maintenance kami untuk yang memang tidak mau memikirkan sisi teknisnya sama sekali.",
      },
    ],
  },
];

export const homeFaq = [
  {
    q: "Berapa lama pengerjaan sebuah website?",
    a: "Website company profile 2–3 minggu. Toko online 4–6 minggu. Aplikasi custom tergantung kompleksitas, biasanya 8–12 minggu. Kami kasih jadwal tertulis di penawaran, dan kalau meleset karena kesalahan kami, tidak ada biaya tambahan.",
  },
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Sudah, untuk tahun pertama. Mulai tahun kedua ada biaya perpanjangan sekitar Rp 800 ribu–1,5 juta per tahun tergantung paket, dan itu dibayar langsung ke penyedia, bukan ke kami. Semua kami tulis terbuka di halaman harga.",
  },
  {
    q: "Bagaimana kalau saya tidak paham teknis sama sekali?",
    a: "Justru itu pekerjaan kami. Anda cukup cerita bisnisnya seperti apa dan ingin dapat apa. Setelah jadi, kami latih cara mengelola isinya — ganti foto, tulis artikel, ubah harga — tanpa perlu menyentuh kode.",
  },
  {
    q: "Apakah bisa dicicil?",
    a: "Bisa. Umumnya 50% di awal sebagai DP dan 50% saat serah terima. Untuk proyek di atas Rp 15 juta bisa dibagi tiga termin. Semua tertulis di kontrak.",
  },
  {
    q: "Website saya sudah ada, tapi jelek dan lemot. Bisa diperbaiki?",
    a: "Bisa, dan seringnya lebih murah daripada bikin baru. Kami audit dulu gratis untuk lihat mana yang layak diselamatkan dan mana yang lebih baik dibangun ulang. Hasil auditnya kami kasih apa adanya, termasuk kalau ternyata website Anda sebenarnya sudah cukup baik.",
  },
  {
    q: "Kalau nanti saya mau pindah ke pengembang lain?",
    a: "Silakan, dan kami bantu proses pemindahannya. Domain, hosting, dan seluruh kode atas nama Anda sejak hari pertama. Kami tidak menyandera aset klien.",
  },
];

export const testimonials = [
  {
    quote:
      "Yang bikin saya lanjut itu bukan hasilnya doang, tapi karena tiap minggu dikabari tanpa saya tanya. Website lama saya dulu dikerjain orang, tiga bulan hilang kabar.",
    name: "Rina Wulandari",
    role: "Pemilik, Dapur Nusantara",
    city: "Bandung",
  },
  {
    quote:
      "Sebelumnya pasien telepon terus buat tanya jadwal dokter. Sekarang mereka lihat sendiri di web dan langsung booking. Resepsionis saya bisa fokus ke yang di depan mata.",
    name: "dr. Adit Prasetyo",
    role: "Pengelola, Klinik Sehat Bersama",
    city: "Bandung",
  },
  {
    quote:
      "Saya minta dijelaskan pakai bahasa manusia, dan beneran dijelaskan pakai bahasa manusia. Nggak ada istilah aneh yang bikin saya ngangguk-ngangguk padahal nggak paham.",
    name: "Hendra Kusuma",
    role: "Direktur, CV Bangun Karya",
    city: "Cimahi",
  },
];

export const cases = [
  {
    slug: "klinik-sehat-bersama",
    client: "Klinik Sehat Bersama",
    industry: "Klinik & Dokter",
    headline: "Booking online yang akhirnya dipakai pasien",
    metric: "Skor PageSpeed 34 → 96",
    sub: "Waktu muat 8,4s → 1,2s",
  },
  {
    slug: "dapur-nusantara",
    client: "Dapur Nusantara",
    industry: "Restoran & Kafe",
    headline: "Dari tidak terlihat jadi halaman satu Google",
    metric: "Trafik organik +180%",
    sub: "412 → 1.153 pengunjung per bulan",
  },
  {
    slug: "cv-bangun-karya",
    client: "CV Bangun Karya",
    industry: "Kontraktor & Interior",
    headline: "Sembilan kali lipat leads setelah redesign",
    metric: "3 → 27 leads per bulan",
    sub: "Empat bulan setelah peluncuran",
  },
];

export const industries = [
  { label: "Klinik & Dokter", slug: "klinik" },
  { label: "Restoran & Kafe", slug: "restoran" },
  { label: "Sekolah & Kursus", slug: "sekolah" },
  { label: "Properti & Agen", slug: "properti" },
  { label: "Kontraktor & Interior", slug: "kontraktor" },
  { label: "Travel & Tour", slug: "travel" },
  { label: "Laundry & Jasa Harian", slug: "laundry" },
  { label: "Toko Retail", slug: "retail" },
  { label: "Bengkel & Otomotif", slug: "otomotif" },
  { label: "Salon & Kecantikan", slug: "salon" },
];

/**
 * CATATAN PENTING — lihat PAGE-SPECS.md §3.
 * Halaman kota hanya boleh dibuat kalau ADA klien nyata di kota itu.
 * Daftar ini sengaja pendek: hanya kota tempat kami benar-benar punya portofolio.
 */
export const locations = [
  { label: "Bandung", slug: "bandung", clients: 34 },
  { label: "Cimahi", slug: "cimahi", clients: 11 },
  { label: "Jakarta", slug: "jakarta", clients: 23 },
];
