# 002 — Hapus `parked-v2/`, arsipkan dokumen desain UMKM yang tidak berlaku

**Status:** 🔒 TERKUNCI 2026-08-17   ·   **Terkait:** R1 rapih-rapih pra-commit

## Yang diputuskan

`parked-v2/` (9 blok V2 + komponen UI + data dummy, 15 berkas) **dihapus dari
repo**. `docs/BLUEPRINT.md`, `docs/COMPONENTS.md`, dan `docs/PAGE-SPECS.md`
dipindah ke `docs/arsip/` (tetap dilacak git, tidak dibaca dalam pekerjaan V1).
`.gitignore` ditambah aturan untuk berkas yang tidak seharusnya ikut push.
V2 kelak ditulis ulang dari PRD §6 dan §11 — bukan dari komponen lama.

## Kenapa sekarang

Sebelum commit perdana yang bersih. `parked-v2/` tidak terpakai dan sudah
rusak: seluruh blok mengimpor `motion` yang dicabut dari dependensi, dua
impor menunjuk ke berkas yang tidak ada di `src/` (`CountUp`, `StatCard`),
`satu komponen tidak dipakai siapa pun (TiltCard)`, dan datanya (nama klien,
testimoni, harga) **karangan** — berisiko tayang tanpa sadar. Mempertahankan
kode rusak sebagai "siap pasang" menipu: untuk hidup lagi ia butuh tulis
ulang besar (dependensi motion + data asli).

## Yang dipertimbangkan & ditolak

| Opsi | Kenapa tidak |
|---|---|
| Pertahankan `parked-v2/` di akar | Kode rusak + data dummy berbahaya tetap tersimpan sebagai "siap pakai"; perawatan tanpa nilai |
| Pindah ke `arsip/parked-v2/` | Arsip dokumen ≠ arsip kode; memberi kesan bisa dipakai padahal butuh rewrite. Keputusan user: hapus |
| Perbaiki (pasang `motion` lagi) | Menambah dependensi untuk fitur yang sengaja tidak tayang di V1 — melanggar keputusan "tanpa pustaka animasi" |

## Konsekuensi yang diterima

- V2 ditulis ulang dari nol; desain lama tetap ada di git history (PRD §11:
  butuh 3 nama klien nyata sebelum hidup).
- README, ISI-YANG-HARUS-DIGANTI, AGENTS.md, dan komentar Home.tsx harus
  disinkronkan (semua menyebut `parked-v2/` sebagai "diparkir").
- `docs/arsip/` butuh baris routing sendiri di AGENTS.md.
