import { useRef, useState } from "react";
import { motion } from "motion/react";
import { GripVertical } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame, MockDated, MockModern } from "@/components/ui/MockSite";

/**
 * Struktur mengikuti `feature-with-image-comparison` oleh @tommyjepsen di 21st.dev:
 * badge + judul + lead, lalu satu gambar besar dengan pegangan geser di tengah.
 *
 * Ini blok paling bernilai di seluruh situs — satu tarikan mouse menjelaskan
 * nilai jual lebih baik daripada seluruh paragraf di halaman ini.
 */
export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Sebelum & sesudah"
        title="Geser untuk lihat bedanya"
        lead="Website yang sama, bisnis yang sama, cuma dikerjakan ulang. Sebelah kiri versi lama yang dibuat tujuh tahun lalu, sebelah kanan versi sekarang."
      />

      <Reveal className="mt-14">
        <div
          ref={containerRef}
          className="relative aspect-16/10 select-none overflow-hidden rounded-lg border border-hairline bg-white dark:border-stone-700"
          onPointerMove={(e) => dragging && updateFromClientX(e.clientX)}
          onPointerUp={() => setDragging(false)}
          onPointerLeave={() => setDragging(false)}
        >
          {/* Kedua lapisan WAJIB kotak yang identik — kalau rasionya beda,
              mockup melar dan perbandingannya jadi tidak jujur. */}
          <div className="absolute inset-0">
            <MockModern />
          </div>

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <div className="absolute inset-0">
              <MockDated />
            </div>
          </div>

          {/* Label */}
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Sebelum
          </span>
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink shadow-sm backdrop-blur-sm">
            Sesudah
          </span>

          {/* Pegangan geser */}
          <div
            className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(12,10,9,0.15)]"
            style={{ left: `${position}%` }}
          >
            <motion.button
              type="button"
              aria-label="Geser untuk membandingkan sebelum dan sesudah"
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                setDragging(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
                if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
              }}
              whileTap={{ scale: 0.92 }}
              className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-hairline bg-white shadow-md transition-colors duration-200 hover:bg-canvas"
            >
              <GripVertical className="h-5 w-5 text-subtle" aria-hidden="true" />
            </motion.button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-subtle dark:text-stone-400">
          Klinik Sehat Bersama — waktu muat 8,4 detik menjadi 1,2 detik
        </p>
      </Reveal>
    </Section>
  );
}
