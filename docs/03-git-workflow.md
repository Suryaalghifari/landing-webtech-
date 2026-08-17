# 03 — Git Workflow

**Aturan inti: git dijalankan USER, bukan agent.** Agent tidak boleh init, add, commit, push,
merge, rebase, cherry-pick, membuat branch/PR, atau deploy — **kecuali user meminta eksplisit**
(misalnya "commit dan push dari kamu saja"). Tanpa permintaan itu, agent hanya menyarankan
perintah siap tempel. Alasan: commit adalah titik di mana pekerjaan jadi permanen; `git add .`
membabi buta bisa menyeret berkas rahasia atau artefak build ke riwayat.

## Skala proyek ini

- **Lapisan branch:** `feat/* → main → production`
  - `main` = integrasi — **tidak pernah menerima commit langsung** (via PR)
  - `production` = yang tayang di Zeabur — dibuat 2026-08-17 dari `main`
  - Rilis = merge seluruh `main` ke `production` sekaligus (bukan per-PR / cherry-pick)
- **Merge commit** saat merge PR (bukan squash) — menyisakan titik rollback per PR. Squash boleh
  hanya karena rilis tidak pernah per-PR; kalau itu berubah, kembali ke merge commit.

## Alur PR (dipakai sejak 2026-08-17, branch production aktif)

1. `git checkout main && git pull origin main`
2. `git checkout -b <tipe>/<deskripsi-singkat>` — satu branch satu tujuan
3. Kerjakan + commit (stage selektif)
4. `git push -u origin HEAD`
5. `gh pr create --title "..." --body "..."` — PR ke `main`
6. `gh pr merge --merge` — merge commit (bukan squash); **PR dijalankan oleh agent
   hanya atas permintaan user** (aturan 1). PR boleh dibuka agent dengan permintaan yang sama.

## Aturan

1. **Branch:** pola `tipe/deskripsi-singkat-kebab-case` (`feat/` · `fix/` · `refactor/` ·
   `chore/` · `docs/`). Satu branch satu tujuan — kalau namanya butuh kata "dan", pecah.
   Dibuat dari `main` yang sudah `pull`.
2. **Commit — Conventional Commits:** `tipe(skop): ringkasan` — kata kerja perintah ("tambah",
   "perbaiki"), ≤ 60 char, tanpa titik di akhir. Badan menjelaskan **KENAPA**, bukan apa (diff
   sudah menunjukkan apa). Contoh: `fix(hero): teks terbaca tanpa JS pada state awal`.
3. **Stage selektif:** `git add <berkas yang relevan>` — bukan `git add .`. (Kalau user meminta
   agent commit, stage tetap selektif per commit.)
4. **Satu fitur = satu branch = satu PR.** `main` tidak pernah menerima commit langsung — kecuali
   repo kecil ini masih satu branch; PR berlaku saat `production` sudah ada.
5. **Dokumen ikut PR:** pembaruan `docs/SYSTEMMAP.md` + entri `SYSTEMMAP-LOG.md` di-commit bersama
   kode fiturnya — peta harus sinkron dengan kode.
6. **Jangan commit secret.** `.env` di-gitignore; `.env.example` boleh dilacak setelah ditinjau
   user.

## Saran siap tempel (untuk agent)

```text
Branch:  <tipe>/<deskripsi-singkat>
Commit:  <tipe>(<skop>): <ringkasan kata kerja, ≤60 char>
```

## Riwayat perubahan aturan

- **2026-08-17:** aturan inti dilonggarkan — agent boleh commit/push atas permintaan eksplisit
  user (keputusan user, dicatat di SYSTEMMAP-LOG #2). Utang `node_modules/` + `dist/` di indeks
  git sudah dibereskan.
