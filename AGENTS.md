# AGENTS.md

Router proyek untuk Hermes. **Repository—kode, konfigurasi, test, dan riwayatnya—adalah source of
truth.** Jika dokumen berbeda dari repository, laporkan perbedaannya; jangan menebak atau diam-diam
menyamakan keduanya.

> **Batas keras: 200 baris.** Detail tinggal di `docs/`; berkas ini hanya keputusan, aturan, dan
> routing yang perlu tersedia setiap sesi.

## Proyek

Situs verifikasi satu halaman untuk CV Citra Teknologi Nusantara — membuktikan badan usaha itu
nyata (legalitas, tim, layanan, kontak), bukan etalase portofolio dan bukan alat mencari klien.
Pemakainya calon klien/mitra yang dikirimi referensi; mereka datang dengan satu pertanyaan "ini
nyata atau tidak?", membaca legalitas + layanan + kontak, lalu menghubungi. Selesai saat isian
sementara G-1..G-9 diganti data nyata (`npm run cek` bersih), terverifikasi di perangkat nyata
(N3 360px, N1 Lighthouse 3G), dan terdeploy di domain final (G-8).

```text
src/
  data/       site.ts (identitas, legalitas, tim) · content.ts (isi halaman)
  components/ blocks · layout · ui
  pages/      Home.tsx
scripts/      prerender.mjs · cek-konten.mjs
public/       fonts · hero.jpg · og.png · favicon.svg
docs/         PRD, rencana, desain, arsip, dan dokumen kickoff
```

## Keputusan terkunci

| Aspek | Keputusan | Alasan |
|---|---|---|
| Bahasa/runtime | TypeScript + Vite 8 (React 19) | Sudah terpasang & jalan; satu halaman tanpa router, Vite lebih ringkas dari Next.js |
| Framework UI | React 19 + Tailwind 4 | Tampilan disetujui; komponen tidak memuat teks konten |
| Render | Prerender statis (`entry-server.tsx` + `scripts/prerender.mjs`) | Teks terbaca tanpa JavaScript — esensi situs verifikasi (N1) |
| Bentuk repo | Satu folder, repo tunggal | Paling kecil yang cukup; memecah belakangan murah |
| Penyimpanan data | Tanpa basis data; isi di `src/data/` | Keputusan statis; konten berubah bulanan oleh satu orang |
| Akses data | N/A (tanpa DB). Kontrak konten: isi hanya di `src/data/`, komponen nol teks | Bisa diaudit & diganti tanpa menyentuh komponen — [docs/02-kontrak-konten.md](docs/02-kontrak-konten.md) |
| Autentikasi | Tidak ada | Situs publik; panel admin sengaja tidak dibuat |
| Deploy | Statis di Zeabur | Keputusan statis; aktif saat G-8 |
| Isi sementara | Gerbang `npm run cek` bersih; jangan deploy selama G-4 muncul | Dimensi termahal — [ISI-YANG-HARUS-DIGANTI.md](ISI-YANG-HARUS-DIGANTI.md) |

Ragu atau menemukan `[BELUM]` → tanya user. Jangan memilih pengganti sendiri.

## Mulai sesi

1. Baca [docs/SYSTEMMAP.md](docs/SYSTEMMAP.md): §Fokus, §Sedang Berjalan, dan §Utang Terbuka.
2. Untuk pekerjaan besar, baca keputusan terkait di [docs/decisions/](docs/decisions/).
3. Buka dokumen lain hanya ketika pemicunya cocok dengan tabel berikut.

## Routing dokumen

| Ketika perlu… | Baca |
|---|---|
| orientasi dokumentasi | [docs/README.md](docs/README.md) |
| status dan checkpoint | [docs/SYSTEMMAP.md](docs/SYSTEMMAP.md) |
| alasan suatu keputusan | [docs/decisions/](docs/decisions/) |
| riwayat dan post-mortem | [docs/SYSTEMMAP-LOG.md](docs/SYSTEMMAP-LOG.md) |
| konvensi koding dan DoD | [docs/01-conventions.md](docs/01-conventions.md) |
| kontrak konten / bentuk data | [docs/02-kontrak-konten.md](docs/02-kontrak-konten.md) |
| aturan git | [docs/03-git-workflow.md](docs/03-git-workflow.md) |
| isi sementara yang harus diganti | [ISI-YANG-HARUS-DIGANTI.md](ISI-YANG-HARUS-DIGANTI.md) |
| sumber kebenaran produk (V1) | [docs/prd-website-citra-teknologi-nusantara-v1.md](docs/prd-website-citra-teknologi-nusantara-v1.md) |
| rencana strategis bisnis | [docs/rencana-citra-teknologi-nusantara.md](docs/rencana-citra-teknologi-nusantara.md) |
| desain V1 (pencocokan → PRD §6) | [docs/PENCOCOKAN-V1.md](docs/PENCOCOKAN-V1.md) |
| arsip desain & arsitektur UMKM (sebagian tidak berlaku V1) | [docs/arsip/BLUEPRINT.md](docs/arsip/BLUEPRINT.md) · [docs/arsip/PAGE-SPECS.md](docs/arsip/PAGE-SPECS.md) · [docs/arsip/COMPONENTS.md](docs/arsip/COMPONENTS.md) |
| konteks umum & catatan teknis | [README.md](README.md) |

Tidak ada dokumen tanpa baris routing, dan tidak ada baris routing menuju dokumen yang tidak ada.

## Alur satu pekerjaan

1. **Orientasi** — cek SYSTEMMAP; daftarkan pekerjaan sebagai 🟨 bila belum ada.
2. **Gali** — baca LOG dan decisions terkait sebelum menyentuh perilaku lama.
3. **Putuskan** — perubahan besar atau penggantian keputusan memerlukan `decisions/00X` lebih dulu.
4. **Kerjakan** — cari dua tetangga sejenis, ikuti bentuknya, isi §Sedang Berjalan, jangan melebar.
5. **Tutup** — `/kickoff verify`, jalankan protokol SYSTEMMAP, lalu sarankan Git kepada user.

Mode: `/kickoff work` menambah · `/kickoff revise` mengubah perilaku · `/kickoff fix` memperbaiki
bug setelah reproduksi · `/kickoff pause` menyimpan checkpoint tanpa menutup pekerjaan.

## Aturan kerja wajib

> Satu aturan maksimal tiga baris. Aturan 9+ hanya lahir setelah kesalahan yang sama terjadi dua
> kali; bagian itu sengaja dimulai kosong.

1. **Git dijalankan user, bukan agent — kecuali diminta eksplisit.** Jangan init, add, commit,
   push, merge, rebase, cherry-pick, membuat branch/PR, atau deploy tanpa perintah user. Boleh
   menyarankan perintah — [docs/03-git-workflow.md](docs/03-git-workflow.md).
2. **Ikuti konvensi proyek** [docs/01-conventions.md](docs/01-conventions.md). Komentar/docblock
   default nol; nama fungsi self-documenting. Identifier Inggris; komentar & dokumen Indonesia.
3. **Rujuk repository dan dokumen; jangan mengarang.** Konflik atau keputusan yang belum ada →
   laporkan dan tanya user.
4. **Perbarui SYSTEMMAP saat pekerjaan selesai.** Keputusan besar ditulis sebelum implementasi;
   LOG ditulis sesudah pekerjaan lolos verifikasi.
5. **Sepakati kontrak konten lebih dulu** ([docs/02-kontrak-konten.md](docs/02-kontrak-konten.md))
   sebelum mengubah bentuk data lintas-bagian.
6. **Jangan tulis secret.** `.env` diabaikan; `.env.example` boleh dilacak setelah ditinjau user.
7. **Jangan menandai ✅ sebelum DoD hijau seluruhnya.** Belum diverifikasi tetap 🟨.
8. **Definition of Done punya satu sumber:** [docs/01-conventions.md#definition-of-done](docs/01-conventions.md).
   Jalankan melalui `/kickoff verify`; typecheck, build, cek isi, dan alur nyata harus lulus.

<!-- Aturan 9+ sengaja kosong. Tambahkan hanya dari kegagalan nyata yang terulang. -->

## Perintah dev

```text
npm run dev        # server pengembangan → localhost:5173
npm run typecheck  # tsc --noEmit
npm run build      # build produksi + prerender + cek isi
npm run cek        # daftar isian sementara yang tersisa
npm run preview    # pratayang hasil build → localhost:4173
```
