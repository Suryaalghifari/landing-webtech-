# 02 — Kontrak Konten

Batas paling mahal di proyek ini: bentuk data isi halaman. Mengubah bentuknya menyentuh komponen
dan pemeriksa sekaligus — karena itu bentuk yang dikunci di bawah tidak diubah tanpa keputusan
(`docs/decisions/00X`) dan tanpa menyentuh seluruh konsumennya.

## Dua berkas, satu aturan

> **Seluruh isi halaman HANYA boleh tinggal di `src/data/site.ts` dan `src/data/content.ts`.
> Komponen memuat nol teks konten.**

Inilah "akses data" proyek ini (tanpa basis data). Ganti isi = edit dua berkas, tanpa menyentuh
satu pun berkas komponen. Kalau aturan ini dilanggar, isi tersebar dan tak ada yang bisa
mengauditnya lagi.

| Berkas | Isi | Contoh bentuk |
|---|---|---|
| `src/data/site.ts` | identitas badan usaha | `site` (legalName, descriptor, domain, phone, email, hours) · `legality` (nib, npwp, address, founded) · `team[]` (name, role, photo) · `trustLine` · `nav` |
| `src/data/content.ts` | isi halaman | `serviceGroups` · `processSteps` · `faq` (q, a) · `priceRange` (text, note) · `operationalProof` · `heroPhoto` |

## Konsumen kontrak

| Konsumen | Peran |
|---|---|
| Komponen di `src/components/` | Membaca data, merender. Tidak boleh memuat teks sendiri |
| `scripts/cek-konten.mjs` | Memvalidasi **nilai** (bukan komentar `GANTI G-n`) — membaca nilainya supaya komentar yang tertinggal tidak menipu |
| `scripts/prerender.mjs` | Mencetak HTML statis — teks terbaca tanpa JavaScript (N1) |
| `index.html` | Memakai `site.domain` di `og:url`, `og:image`, `canonical` (URL absolut) |

## Field yang dikunci (jangan diubah bentuknya)

- `serviceGroups`: pemisahan Project vs Retainer (S2.4) — isinya boleh ganti, bentuknya tidak
- `processSteps`: field `deliverable` — memaksa tahap menyebut apa yang klien terima (S3.2)
- `faq`: **enam pertanyaan ditentukan PRD — jangan diubah**; hanya jawaban (`a`) yang diganti
- `priceRange`: bentuk rentang (bukan "mulai dari") — angkanya yang diganti
- `phone`: format internasional tanpa `+` dan tanpa spasi (`081…` → `6281…`)
- `team[].photo`: `null` = monogram; foto asli ditaruh di `public/tim/`, referensi `/tim/nama.jpg`
  (rasio 4:5, satu gaya — S4.7)

## Isi sementara (G-list)

Nomor NIB/NPWP, nama tim, layanan, FAQ, dan harga yang tampil sekarang **karangan** — daftar
lengkap + aturan penggantian ada di [ISI-YANG-HARUS-DIGANTI.md](../ISI-YANG-HARUS-DIGANTI.md).
Gerbangnya `npm run cek`; **jangan deploy selama G-4 (legalitas) masih muncul** — bagian pengadaan
menyalin nomor itu dan mencocokkannya dengan berkas penawaran.

## Kalau bentuk data harus berubah

1. Tulis keputusan dulu (`docs/decisions/00X`) — ini mengubah kontrak lintas-bagian
2. Identifikasi semua konsumen: komponen pembaca + `cek-konten.mjs` + `prerender.mjs` (+
   `index.html` kalau menyangkut domain)
3. Ubah konsumen di commit yang sama dengan datanya — jangan biarkan kontrak patah di antara
