# Keputusan

Rumah untuk keputusan **skala-fitur**: kenapa mengerjakan ini, kenapa dengan cara ini, dan apa yang
ditolak. Fungsinya sama dengan dokumen arsitektur di awal proyek — menghentikan keraguan sebelum
ngoding — bedanya cuma skala.

**Ditulis SEBELUM dikerjakan.** Yang ditulis sesudah namanya laporan, dan itu tempatnya di
[SYSTEMMAP-LOG.md](../SYSTEMMAP-LOG.md).

## Aturan

- Nama berkas `00X-<slug>.md`, bernomor urut, **tak pernah dihapus**
- Keputusan berubah → **buat berkas baru**, tandai yang lama `⚠️ DIGANTI oleh 00Y`. Jangan disunting
- Ditautkan dari baris 🎯 Fokus di `SYSTEMMAP.md`
- Tak semua pekerjaan butuh ini. Yang butuh: mengubah arah, menutup opsi lain, atau memakan waktu
  berhari-hari

## Format

```markdown
# 00X — <Judul>

**Status:** 🔒 TERKUNCI <tanggal>   ·   **Terkait:** <item SYSTEMMAP>

## Yang diputuskan
<satu paragraf>

## Kenapa sekarang
<apa yang membuatnya prioritas dibanding antrean lain>

## Yang dipertimbangkan & ditolak
| Opsi | Kenapa tidak |
|---|---|

## Konsekuensi yang diterima
<yang jadi lebih sulit karena keputusan ini — jangan dikosongkan>
```

> Bagian **"ditolak"** jangan dilewat. Itu satu-satunya bagian yang tak bisa direkonstruksi
> belakangan — kesimpulan selalu bisa dibaca dari kode, alternatif yang gugur menguap selamanya.

## Daftar

| # | Keputusan | Tanggal | Status |
|---|-----------|---------|--------|
| [001](001-situs-statis-tanpa-backend.md) | Situs statis tanpa backend, deploy Zeabur | 2026-08-17 | 🔒 TERKUNCI |
| [002](002-hapus-parked-v2-arsipkan-dokumen-usang.md) | Hapus `parked-v2/`, arsipkan dokumen desain UMKM | 2026-08-17 | 🔒 TERKUNCI |
