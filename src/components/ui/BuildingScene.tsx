/**
 * Elevasi arsitektur yang membangun dirinya sendiri — pengganti foto hero.
 *
 * KENAPA BUKAN FOTO. Foto stock arsitektur yang dulu terpasang di sini punya
 * satu masalah yang tidak bisa diperbaiki dengan mengganti fotonya: ia
 * bergaya seperti bukti, padahal bukan bukti apa pun. Gambar yang jelas-jelas
 * gambar tidak berpura-pura. Ia juga menghemat 159 KB — foto itu satu-satunya
 * aset terberat di seluruh halaman, dan N1 membatasi waktu muat di 3G.
 *
 * KENAPA BENTUKNYA GAMBAR TEKNIK, bukan ilustrasi kota. Bentuk ini yang
 * dipakai orang yang membangun sesuatu untuk menjelaskan apa yang akan
 * dibangun sebelum ada yang berdiri — garis tipis, sumbu, garis lantai,
 * skala di bawah. Metaforanya persis pekerjaan yang dijual halaman ini, dan
 * bahasanya sama dengan `GridPattern` yang sudah jadi latar hero.
 *
 * ANIMASINYA JALAN SEKALI, LALU DIAM. Pedoman UX yang saya pakai eksplisit
 * soal ini: animasi tak berujung dipakai untuk indikator memuat, bukan untuk
 * elemen dekoratif. Gedung yang naik-turun terus di sudut mata pembaca yang
 * sedang membandingkan penawaran adalah gangguan, bukan sambutan.
 *
 * KEADAAN BAWAAN ADALAH BANGUNAN YANG SUDAH BERDIRI. Seluruh animasi hidup
 * di dalam `@media (prefers-reduced-motion: no-preference)` di index.css.
 * Tanpa media query itu — dan di HTML hasil prerender sebelum CSS sempat
 * jalan — yang tampil gambar utuhnya. Ini pelajaran dari bug lama: `Reveal`
 * versi motion dulu mencetak `opacity: 0` ke HTML statis dan membuat 24
 * elemen tak terlihat tanpa JavaScript. Tidak diulang di sini.
 *
 * Semua gerakan hanya `transform` dan `opacity` — keduanya di GPU, tidak
 * memicu reflow.
 */

const BASE = 330;

type Tone = "ink" | "line" | "muted";

type Tower = {
  x: number;
  w: number;
  /** Puncak gedung. Tingginya BASE - y. */
  y: number;
  tone: Tone;
  /** Jarak antar garis lantai. */
  step: number;
  /** Tiang antena di puncak, hanya untuk menara tertinggi. */
  mast?: number;
};

/**
 * Tinggi dan lebar sengaja tidak beraturan: deretan balok berjarak sama
 * terbaca sebagai grafik batang, bukan sebagai bangunan.
 */
const TOWERS: Tower[] = [
  { x: 30, w: 42, y: 214, tone: "muted", step: 18 },
  { x: 78, w: 56, y: 138, tone: "line", step: 16 },
  { x: 140, w: 36, y: 246, tone: "muted", step: 18 },
  { x: 182, w: 68, y: 74, tone: "ink", step: 20, mast: 42 },
  { x: 256, w: 46, y: 178, tone: "line", step: 16 },
  { x: 308, w: 32, y: 222, tone: "muted", step: 18 },
  { x: 346, w: 24, y: 262, tone: "line", step: 16 },
];

const fills: Record<Tone, string> = {
  ink: "#0c0a09",
  line: "#ffffff",
  muted: "#f5f5f4",
};

const strokes: Record<Tone, string> = {
  ink: "#0c0a09",
  line: "#d6d3d1",
  muted: "#d6d3d1",
};

/** Garis lantai di dalam gedung gelap harus terang, bukan sebaliknya. */
const floorStrokes: Record<Tone, string> = {
  ink: "#ffffff",
  line: "#e7e5e4",
  muted: "#e7e5e4",
};

/** Urutan naiknya: dari menara tertinggi ke luar, bukan kiri ke kanan. */
const ORDER = [3, 1, 4, 0, 5, 2, 6];

function floorLines(t: Tower) {
  const lines: number[] = [];
  for (let y = BASE - t.step; y > t.y + t.step * 0.6; y -= t.step) lines.push(y);
  return lines;
}

export function BuildingScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Gambar teknik siluet gedung yang tersusun bertahap"
    >
      {/* Sumbu bantu — garis putus-putus seperti garis bantu di gambar kerja */}
      {[110, 190, 270].map((y, i) => (
        <line
          key={y}
          x1="18"
          x2="382"
          y1={y}
          y2={y}
          stroke="#e7e5e4"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="build-fade"
          style={{ "--d": `${0.1 + i * 0.08}s` } as React.CSSProperties}
        />
      ))}

      {TOWERS.map((t, i) => {
        const delay = 0.4 + ORDER.indexOf(i) * 0.11;

        return (
          <g key={t.x}>
            {/* Badan gedung — naik dari garis tanah */}
            <g
              className="build-rise"
              style={{ "--d": `${delay}s` } as React.CSSProperties}
            >
              <rect
                x={t.x}
                y={t.y}
                width={t.w}
                height={BASE - t.y}
                fill={fills[t.tone]}
                stroke={strokes[t.tone]}
                strokeWidth="1.25"
              />
              {t.mast && (
                <line
                  x1={t.x + t.w / 2}
                  x2={t.x + t.w / 2}
                  y1={t.y}
                  y2={t.y - t.mast}
                  stroke="#0c0a09"
                  strokeWidth="1.25"
                />
              )}
            </g>

            {/* Garis lantai — muncul setelah badannya selesai berdiri */}
            <g
              className="build-fade"
              style={{ "--d": `${delay + 0.55}s` } as React.CSSProperties}
            >
              {floorLines(t).map((y) => (
                <line
                  key={y}
                  x1={t.x + 5}
                  x2={t.x + t.w - 5}
                  y1={y}
                  y2={y}
                  stroke={floorStrokes[t.tone]}
                  strokeWidth="1"
                  opacity={t.tone === "ink" ? 0.3 : 1}
                />
              ))}
            </g>
          </g>
        );
      })}

      {/* Garis tanah — ditarik lebih dulu, dari kiri ke kanan */}
      <line
        x1="18"
        x2="382"
        y1={BASE}
        y2={BASE}
        stroke="#0c0a09"
        strokeWidth="1.5"
        className="build-draw"
      />

      {/* Skala di bawah garis tanah — yang membuatnya terbaca sebagai gambar
          kerja, bukan sebagai siluet kota */}
      <g
        className="build-fade"
        style={{ "--d": "1.85s" } as React.CSSProperties}
        stroke="#d6d3d1"
        strokeWidth="1"
      >
        <line x1="18" x2="382" y1={BASE + 22} y2={BASE + 22} />
        {Array.from({ length: 15 }, (_, i) => 18 + i * 26).map((x) => (
          <line key={x} x1={x} x2={x} y1={BASE + 22} y2={BASE + (x === 200 ? 34 : 28)} />
        ))}
      </g>
    </svg>
  );
}
