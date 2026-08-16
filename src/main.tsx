import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Dua jalur, karena halaman ini hidup dalam dua bentuk.
 *
 * PRODUKSI — `dist/index.html` sudah berisi markup lengkap hasil
 * `scripts/prerender.mjs`. React tinggal MENEMPEL ke markup itu
 * (`hydrateRoot`), bukan menggambar ulang dari nol. Ini yang membuat teks
 * hero, data legalitas, dan nomor kontak terbaca sebelum JavaScript sampai —
 * dan tetap terbaca kalau JavaScript gagal termuat sama sekali (N1).
 *
 * PENGEMBANGAN — `npm run dev` menyajikan `index.html` mentah, dan
 * `<div id="root">` di situ kosong. `hydrateRoot` pada wadah kosong tidak
 * punya apa pun untuk ditempeli, jadi halamannya ikut kosong.
 *
 * Pemeriksanya `firstElementChild`, BUKAN `hasChildNodes()`: di mode
 * pengembangan wadah itu masih memuat komentar penanda `<!--app-html-->`,
 * dan komentar terhitung sebagai child node. `hasChildNodes()` akan
 * mengembalikan `true` di kedua mode, dan bug-nya tidak akan hilang.
 */
const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
