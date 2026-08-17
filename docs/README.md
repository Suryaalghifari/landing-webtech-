# Dokumentasi

Daftar semua dokumen proyek dan aturan mainnya. Pemicu kapan sebuah dokumen dibaca ada di
[AGENTS.md](../AGENTS.md) — berkas ini untuk orientasi.

## Konvensi dokumen

- **Tidak ada dokumen tanpa baris routing** di AGENTS.md. Dokumen tanpa pemicu baca tidak dibuat.
- Tiga berkas, tiga umur informasi (jangan dicampur):
  - `SYSTEMMAP.md` — status saja, berubah tiap hari
  - `decisions/*.md` — keputusan beku, ditulis SEBELUM kerja besar
  - `SYSTEMMAP-LOG.md` — riwayat append-only, ditulis SESUDAH kerja lolos verifikasi
- Dokumen > 400 baris menandakan dua topik — pecah.
- Dokumen yang tumbuh memakai nomor `NN-<slug>.md` (konvensi, kontrak, git). Dokumen produk
  (PRD, rencana, desain) memakai nama aslinya.

## Daftar dokumen

| Dokumen | Isi | Pemicu baca |
|---|---|---|
| [README.md](../README.md) | konteks umum, status, catatan teknis | konteks umum |
| [ISI-YANG-HARUS-DIGANTI.md](../ISI-YANG-HARUS-DIGANTI.md) | daftar isi sementara G-1..G-9 + aturan penggantiannya | mengubah isi konten |
| [SYSTEMMAP.md](SYSTEMMAP.md) | status & checkpoint | mulai sesi, tiap pekerjaan |
| [SYSTEMMAP-LOG.md](SYSTEMMAP-LOG.md) | riwayat & post-mortem | sebelum menyentuh perilaku lama |
| [decisions/](decisions/README.md) | keputusan skala-fitur | kerja besar / mengubah arah |
| [01-conventions.md](01-conventions.md) | konvensi koding Lapis 0+1 + Definition of Done | menulis kode apa pun |
| [02-kontrak-konten.md](02-kontrak-konten.md) | kontrak konten & bentuk data | mengubah data / bentuk field |
| [03-git-workflow.md](03-git-workflow.md) | aturan git (branch, commit, rilis, alur PR) | operasi git |
| [prd-website-citra-teknologi-nusantara-v1.md](prd-website-citra-teknologi-nusantara-v1.md) | PRD V1 — sumber kebenaran produk | keputusan produk |
| [rencana-citra-teknologi-nusantara.md](rencana-citra-teknologi-nusantara.md) | rencana strategis bisnis | keputusan bisnis |
| [PENCOCOKAN-V1.md](PENCOCOKAN-V1.md) | pencocokan desain → PRD §6 | keputusan desain V1 |
| [BLUEPRINT.md](arsip/BLUEPRINT.md) · [PAGE-SPECS.md](arsip/PAGE-SPECS.md) · [COMPONENTS.md](arsip/COMPONENTS.md) | arsip desain UMKM — tidak berlaku V1 (keputusan 002) | arsip |
