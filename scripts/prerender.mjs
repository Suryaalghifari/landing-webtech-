#!/usr/bin/env node
/**
 * Mencetak halaman jadi HTML statis, lalu menyuntikkannya ke dist/index.html.
 *
 * Dijalankan setelah dua build Vite: build klien (dist/) dan build SSR
 * (dist/server/). Placeholder `<!--app-html-->` di index.html diganti markup
 * hasil render.
 *
 * Kenapa tidak `vite-react-ssg`: paket itu menyelesaikan masalah yang tidak
 * kita punya — merender puluhan route dari konfigurasi router. V1 adalah satu
 * halaman tanpa router. Tiga puluh baris di bawah ini melakukan seluruh
 * pekerjaan yang dibutuhkan, tanpa menambah satu pun dependensi.
 */
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist");
const TEMPLATE = join(DIST, "index.html");
const PLACEHOLDER = "<!--app-html-->";

const template = readFileSync(TEMPLATE, "utf8");

if (!template.includes(PLACEHOLDER)) {
  console.error(`✗ Prerender gagal: ${PLACEHOLDER} tidak ditemukan di dist/index.html.`);
  console.error("  Placeholder itu harus ada di dalam <div id=\"root\"> pada index.html.");
  process.exit(1);
}

const { render } = await import(join(DIST, "server", "entry-server.js"));
const html = render();

writeFileSync(TEMPLATE, template.replace(PLACEHOLDER, html));

// Build SSR cuma alat cetak — jangan ikut ter-deploy.
rmSync(join(DIST, "server"), { recursive: true, force: true });

const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
console.log(`✓ Prerender selesai — ${kb} KB HTML tercetak ke dist/index.html`);
