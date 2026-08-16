import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/**
 * Entri prerender. Dipanggil `scripts/prerender.mjs` saat build untuk mencetak
 * seluruh halaman jadi HTML statis, lalu disuntikkan ke `index.html`.
 *
 * Hasilnya: teks hero, data legalitas, dan nomor kontak sudah ada di dalam
 * berkas HTML yang diunduh browser. Terbaca sebelum React boot — dan tetap
 * terbaca kalau JavaScript gagal termuat sama sekali, yang di jaringan 3G
 * bukan kemungkinan teoretis (N1).
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
