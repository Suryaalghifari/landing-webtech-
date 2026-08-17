# SYSTEMMAP — Status

> Hanya status. Keputusan → [decisions/](decisions/README.md) · Riwayat →
> [SYSTEMMAP-LOG.md](SYSTEMMAP-LOG.md)

## 🎯 Fokus: Menuntaskan isi sementara G-1..G-9 — urutan & alasannya di
> [ISI-YANG-HARUS-DIGANTI.md](../ISI-YANG-HARUS-DIGANTI.md)

## Fondasi

| # | Item | Status | Tgl | Ref |
|---|---|---|---|---|
| F1 | Desain & tampilan V1 disetujui | ✅ | — | [PENCOCOKAN-V1.md](PENCOCOKAN-V1.md) |
| F2 | Prerender statis (teks terbaca tanpa JS) | ✅ | — | README §Catatan teknis |
| F3 | Pemeriksa isi `npm run cek` | ✅ | — | scripts/cek-konten.mjs |
| F4 | Sistem konteks kickoff (AGENTS.md + docs) | ✅ | 2026-08-17 | SYSTEMMAP-LOG #1 |
| F5 | Repo dirapikan pra-commit (parked-v2 dihapus, docs diarsipkan) | ✅ | 2026-08-17 | SYSTEMMAP-LOG #2, decisions/002 |

## Isi sementara → data nyata

| # | Item | Status | Dependensi | Tgl | Ref |
|---|---|---|---|---|---|
| G-4 | Data legalitas (NIB, NPWP, alamat) | ⬜ | — | | ISI §G-4 |
| G-7 | Nomor WhatsApp | ⬜ | — | | ISI §G-7 |
| G-8 | Domain & email final (termasuk index.html) | ⬜ | — | | ISI §G-8 |
| G-2 | Layanan & tahap kerja | ⬜ | — | | ISI §G-2 |
| G-3 | Jawaban FAQ | ⬜ | — | | ISI §G-3 |
| G-5 | Tim: nama, peran, foto | ⬜ | sesi foto tim | | ISI §G-5 |
| G-9 | Rentang harga | ⬜ | — | | ISI §G-9 |
| G-1 | Baris bukti operasional | ⬜ | keputusan: sebut nama Desa Silip? | | ISI §G-1 |
| G-6 | Logo, favicon, og.png | ⬜ | logo asli | | ISI §G-6 |

## Verifikasi & deploy

| # | Item | Status | Dependensi | Tgl | Ref |
|---|---|---|---|---|---|
| V1 | N3 — uji device mode 360px (tanpa scroll horizontal) | ⬜ | isi final | | README §N3 |
| V2 | N1 — Lighthouse dengan throttling 3G | ⬜ | isi final | | README §N1 |
| V3 | Deploy Zeabur + domain final | ⬜ | G-4, G-8 | | decisions/001 |
| V4 | V2: portofolio, testimoni, statistik | ⏸️ | 3 klien nyata | | PRD §11 |

## Sedang Berjalan

_(kosong — isi saat mulai mengerjakan: sudah beres · berikutnya · setengah jalan)_

## Utang Terbuka

- **G-6 tidak bisa dideteksi otomatis** oleh `npm run cek` — logo/favicon perlu pemeriksaan manual.
- **Formatter belum dipasang** — saat Prettier dipasang, perintahnya masuk DoD
  (docs/01-conventions.md), bukan ditulis di dua tempat.
- **Branch `production` belum ada** — aturan "main tidak menerima commit langsung" (03-git-workflow)
  aktif begitu production dibuat.

## Log

- 2026-08-17 — #2 rapih-rapih pra-commit: `parked-v2/` dihapus, dokumen desain diarsipkan —
  [detail](SYSTEMMAP-LOG.md)
- 2026-08-17 — #1 kickoff: sistem konteks dipasang — [detail](SYSTEMMAP-LOG.md)
