# SYSTEMMAP — Log Pengerjaan

Riwayat tiap pekerjaan yang selesai, **terbaru di atas**. Ringkasannya di
[SYSTEMMAP.md §Log](SYSTEMMAP.md#log) — berkas ini menyimpan detailnya: keputusan yang diambil,
jebakan yang ditemui, dan bukti verifikasi.

> Entri **append-only**. Menambah = tambah section di paling atas. **Jangan menyunting entri lama** —
> riwayat harus mencerminkan apa yang benar-benar terjadi, termasuk yang memalukan.

> **Rotasi:** pada ~40 entri, pindahkan yang lama **utuh** ke `log-archive/<tahun>-Q<n>.md` dan
> tautkan di bawah. Jangan diringkas — riwayat yang diedit belakangan berhenti jadi riwayat.
> Ini satu-satunya berkas yang tumbuh linear tanpa rem; tanpa rotasi ia berakhir tak terbaca.

---

## 2026-08-17 #2

Rapih-rapih pra-commit: `parked-v2/` dihapus, dokumen desain UMKM diarsipkan, indeks git
dibersihkan, aturan git diubah.

### Yang dikerjakan
- Keputusan 002: `parked-v2/` (15 berkas) dihapus — bloknya mengimpor `motion` yang sudah
  dicabut, 2 impor putus, 1 komponen tak dipakai, datanya karangan (nama klien/testimoni/harga
  dummy). V2 ditulis ulang dari PRD §6/§11 dengan data nyata.
- `docs/BLUEPRINT.md`, `docs/COMPONENTS.md`, `docs/PAGE-SPECS.md` → `docs/arsip/` + README arsip;
  routing AGENTS.md, docs/README, README, ISI, dan komentar Home.tsx disinkronkan.
- `.gitignore` ditambah `*.log`, `*.tmp`, `Thumbs.db`.
- Indeks git dibersihkan: `git rm -r --cached node_modules dist` (5.493 berkas keluar dari
  indeks; `.gitignore` sudah memblokirnya sejak sebelumnya).
- **Aturan git diubah atas permintaan user**: agent boleh commit/push bila diminta eksplisit
  (AGENTS.md aturan 1 + docs/03-git-workflow.md). Commit pertama dengan aturan baru: rapih-rapih
  ini + `chore: hapus node_modules dan dist dari indeks git`.

### Bukti verifikasi
- `npm run typecheck` hijau · `npm run build` hijau (prerender 36,6 KB, cek isi jalan)
- Semua tautan markdown internal valid (19 berkas)
- Tidak ada sisa referensi `parked-v2/` sebagai folder yang masih ada

### Sisa / utang
- G-1..G-9 (isi sementara) tetap antre — fokus SYSTEMMAP tidak berubah
- `production` branch belum ada — aturan "main tidak menerima commit langsung" belum aktif
  sampai itu tiba

---

## 2026-08-17 #1

Sistem konteks kickoff dipasang: AGENTS.md, SYSTEMMAP, konvensi, kontrak konten, git workflow, dan
keputusan statis-vs-dinamis.

### Yang dikerjakan
- Wawancara kickoff 4 ronde: ringkasan proyek, daftar mahal-diubah, tabel keputusan terkunci,
  cara kerja (git, bahasa, gaya komentar, DoD)
- AGENTS.md + docs/: README, SYSTEMMAP, LOG, decisions/README, 001, 01-conventions, 02-kontrak-konten,
  03-git-workflow
- `.gitignore` diisi (node_modules/, dist/, .env) — repo sebelumnya meng-commit 5.554 berkas
  termasuk node_modules dan dist
- Keputusan 001: situs tetap statis tanpa backend, deploy Zeabur

### Yang sempat salah
- Jawaban revisi Ronde 4 tiba tanpa menyebut bagiannya ("hanya ini saja yang saya revisi") —
  butuh klarifikasi lewat pertanyaan. Pelajaran: kalau user bilang "ada revisi" tanpa penanda,
  tanyakan bagiannya sebelum lanjut.

### Bukti verifikasi
- Pemeriksaan Fase 4 kickoff: AGENTS.md ≤ 200 baris · tidak ada placeholder tersisa · routing
  dokumen dua arah · aturan 9+ kosong · DoD satu sumber

### Sisa / utang
- `node_modules/` + `dist/` masih ter-track di git — lihat SYSTEMMAP §Utang Terbuka
