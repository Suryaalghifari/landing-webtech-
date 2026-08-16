/**
 * DATA DUMMY — harga di bawah adalah perkiraan pasar, bukan harga Anda.
 * Wajib dikoreksi sebelum launching.
 */

export type Package = {
  name: string;
  price: number;
  period: string;
  pitch: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  cta: string;
};

export const packages: Package[] = [
  {
    name: "Mulai",
    price: 3_500_000,
    period: "sekali bayar",
    pitch: "Untuk usaha yang baru pertama kali punya website.",
    cta: "Cocok untuk saya",
    features: [
      "Sampai 5 halaman",
      "Desain responsif (HP, tablet, desktop)",
      "Domain .com + hosting 1 tahun",
      "Form kontak + tombol WhatsApp",
      "Setup Google Bisnisku",
      "SSL & keamanan dasar",
      "Pelatihan pengelolaan 1 sesi",
      "Garansi bug 90 hari",
    ],
    notIncluded: ["Penulisan artikel", "Riset kata kunci mendalam"],
  },
  {
    name: "Bertumbuh",
    price: 8_500_000,
    period: "sekali bayar",
    pitch: "Untuk yang ingin ditemukan di Google, bukan cuma punya website.",
    popular: true,
    cta: "Paling banyak dipilih",
    features: [
      "Sampai 15 halaman",
      "Semua yang ada di paket Mulai",
      "Riset kata kunci + optimasi SEO on-page",
      "10 artikel blog siap tayang",
      "Halaman layanan & halaman industri",
      "Integrasi Google Analytics + Search Console",
      "Optimasi kecepatan (target PageSpeed 90+)",
      "Pendampingan 90 hari",
    ],
    notIncluded: ["Fitur transaksi / pembayaran"],
  },
  {
    name: "Toko Online",
    price: 15_000_000,
    period: "mulai dari",
    pitch: "Untuk yang berjualan langsung dari websitenya sendiri.",
    cta: "Diskusikan kebutuhan",
    features: [
      "Katalog produk tanpa batas",
      "Semua yang ada di paket Bertumbuh",
      "Keranjang & checkout",
      "Payment gateway (Midtrans / Xendit)",
      "Integrasi ongkir (JNE, J&T, SiCepat)",
      "Dashboard kelola pesanan & stok",
      "Notifikasi WhatsApp otomatis ke pembeli",
      "Pendampingan 6 bulan",
    ],
  },
];

/** Biaya lanjutan yang sering disembunyikan agency lain. Kami tulis terbuka. */
export const recurringCosts = [
  {
    item: "Perpanjangan domain",
    cost: "Rp 180.000 – 250.000 / tahun",
    note: "Dibayar ke registrar, bukan ke kami",
  },
  {
    item: "Perpanjangan hosting",
    cost: "Rp 600.000 – 2.400.000 / tahun",
    note: "Tergantung trafik dan ukuran website",
  },
  {
    item: "Maintenance bulanan (opsional)",
    cost: "Rp 500.000 – 1.500.000 / bulan",
    note: "Update, backup, pemantauan, perbaikan kecil",
  },
  {
    item: "Penambahan halaman setelah serah terima",
    cost: "Rp 400.000 / halaman",
    note: "Atau gratis kalau Anda kelola sendiri",
  },
];
