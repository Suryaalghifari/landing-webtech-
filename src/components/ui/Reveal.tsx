import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sistem animasi masuk untuk seluruh situs — sekarang MURNI CSS.
 *
 * KENAPA DIPINDAH DARI MOTION KE CSS
 *
 * Versi motion merender state awal `opacity: 0` ke dalam markup. Selama
 * halaman ini SPA biasa itu tidak kelihatan. Begitu halamannya di-prerender,
 * masalahnya muncul: HTML statis yang dikirim ke browser memuat 24 elemen
 * ber-`style="opacity:0"`. Artinya kalau JavaScript lambat atau gagal, seluruh
 * isi di bawah hero — TERMASUK BLOK LEGALITAS — tidak terlihat sama sekali.
 * Itu persis kebalikan dari alasan prerender dipasang.
 *
 * `animation-timeline: view()` menyelesaikannya di tempat yang benar. Animasi
 * dijalankan mesin CSS, jadi:
 *
 * - Keadaan bawaan elemen adalah TERLIHAT. Animasi hanya berlaku kalau
 *   browser mendukungnya (dijaga `@supports` di index.css) — browser tanpa
 *   dukungan menampilkan isinya begitu saja, bukan halaman kosong.
 * - Nol JavaScript. Tidak ada IntersectionObserver, tidak ada state React,
 *   dan tidak ada yang perlu diunduh dulu sebelum halaman bisa dibaca.
 * - Tidak ada ketidakcocokan hidrasi, karena tidak ada style inline yang
 *   dihitung saat render.
 *
 * Tampilannya sendiri sama: pudar masuk sambil naik 14px, sekali jalan.
 * `prefers-reduced-motion` mematikannya total — juga di index.css.
 */

export function Reveal({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  /** Detik. Diteruskan sebagai `animation-delay`. */
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * Bungkus grid/list supaya anak-anaknya muncul berurutan, bukan serempak.
 *
 * Jedanya dari `nth-child` di CSS, bukan dari orkestrator JavaScript —
 * lihat `.stagger > *` di index.css.
 */
export function Stagger({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  return <Tag className={cn("stagger", className)}>{children}</Tag>;
}

export function StaggerItem({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "figure";
}) {
  return <Tag className={className}>{children}</Tag>;
}
