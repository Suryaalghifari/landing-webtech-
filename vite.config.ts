import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    /**
     * Tahun dipatok saat build, bukan dibaca lewat `new Date()` saat render.
     * Halaman ini di-prerender lalu di-hydrate; tanggal yang dibaca di dua
     * waktu berbeda memicu ketidakcocokan hidrasi setiap pergantian tahun.
     */
    __BUILD_YEAR__: new Date().getFullYear(),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
