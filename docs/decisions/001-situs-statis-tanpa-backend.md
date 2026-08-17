    # 001 — Situs statis tanpa backend, deploy Zeabur

**Status:** 🔒 TERKUNCI 2026-08-17   ·   **Terkait:** V3 Deploy (SYSTEMMAP)

## Yang diputuskan

Situs tetap **statis**: tanpa backend, tanpa basis data, tanpa panel admin. Seluruh isi tinggal di
`src/data/` (dua berkas), diganti lewat edit berkas + `npm run cek` + build. Deploy ke hosting
statis **Zeabur** saat G-8 beres.

## Kenapa sekarang

Ini keputusan yang paling menentukan ongkos semua keputusan lain (bentuk repo, kontrak konten,
DoD), dan user sempat ragu statis vs dinamis. Isi situs berubah dengan irama bulanan atau lebih
jarang, diubah oleh satu orang — di bawah ambang di mana backend mulai membayar.

## Yang dipertimbangkan & ditolak

| Opsi | Kenapa tidak |
|---|---|
| Backend + panel admin (dinamis) | Perawatan permanen: server, DB, auth, pembaruan keamanan. Permukaan serangan justru ironis untuk situs yang tujuannya membuktikan legalitas. Konten berubah bulanan — kapasitas terbuang |
| Headless CMS berbasis Git (mis. Decap) | Baru berguna kalau ada editor non-teknis yang harus mengedit tanpa menyentuh kode. Bisa ditambahkan belakangan tanpa mengubah arsitektur — tidak dipasang sekarang |

## Konsekuensi yang diterima

- Tidak ada tampilan admin web. Ganti isi = edit `src/data/*.ts`, `npm run cek`, build, deploy.
- Kalau kelak benar-benar butuh dinamis, migrasinya hitungan hari (bukan minggu): kontrak konten
  yang bersih membuat API tinggal menyajikan bentuk data yang sama — lihat docs/02-kontrak-konten.md.
- Deploy Zeabur menunggu G-4 (data legalitas nyata) dan G-8 (domain final).
