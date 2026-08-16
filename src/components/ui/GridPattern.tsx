import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Grid latar hero. Berasal dari `animated-grid-pattern` oleh Magic UI
 * (@dillionverma) di 21st.dev, di-restyle ke stone.
 *
 * KOTAK BERKEDIPNYA DICABUT, dan tampilannya nyaris tidak berubah — yang
 * hilang cuma sejumlah kotak yang menyala redup di posisi acak. Yang didapat
 * sebagai gantinya tiga hal:
 *
 * 1. N11 — animasi tak berhenti itu membakar CPU dan baterai HP murah
 *    selama halaman terbuka, tanpa memberi informasi apa pun.
 * 2. N1 — hilang satu `ResizeObserver`, dua `useEffect`, dan state yang
 *    diperbarui terus-menerus di komponen paling atas halaman.
 * 3. Hidrasi — versi lama memanggil `Math.random()` untuk posisi kotak.
 *    Di halaman yang di-prerender, angka acak di server tidak akan pernah
 *    sama dengan angka acak di browser, dan React membuang seluruh markup
 *    yang tercetak lalu menggambar ulang. Persis biaya yang mau dihindari
 *    dengan prerender.
 *
 * Sisanya SVG murni: nol JavaScript setelah render pertama.
 */
export function GridPattern({
  width = 56,
  height = 56,
  x = -1,
  y = -1,
  className,
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  className?: string;
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-stone-400/40 stroke-stone-300",
        className,
      )}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
