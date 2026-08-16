import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame, MockDashboard, MockModern, MockPhone } from "@/components/ui/MockSite";
import { cases } from "@/data/parked-v2";
import { cn } from "@/lib/utils";

/**
 * Struktur mengikuti `feature-with-image-carousel` oleh @tommyjepsen:
 * badge + judul + lead, lalu satu gambar besar dengan panah kiri/kanan.
 *
 * Menggantikan halaman portofolio terpisah — bukti hasil kerja tetap ada,
 * tapi pengunjung tidak dikirim keluar dari alur jualan.
 *
 * CATATAN: nama klien dan angka di `cases` masih DUMMY. Lihat README.
 */

const previews = [MockModern, MockDashboard, MockPhone];
const urls = ["kliniksehatbersama.com", "dapurnusantara.id", "cvbangunkarya.co.id"];

export function Showcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const move = (step: number) => {
    setDirection(step);
    setIndex((i) => (i + step + cases.length) % cases.length);
  };

  const current = cases[index];
  const Preview = previews[index % previews.length];

  return (
    <Section id="hasil-kerja">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Hasil kerja"
          title="Website yang sudah jalan dan menghasilkan"
          lead="Semua yang di bawah ini masih hidup dan bisa Anda buka sendiri. Angkanya diambil dari Search Console dan PageSpeed Insights milik klien."
        />

        <Reveal className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Hasil kerja sebelumnya"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-hairline bg-white transition-colors duration-200 hover:bg-canvas"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Hasil kerja berikutnya"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-hairline bg-white transition-colors duration-200 hover:bg-canvas"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={current.slug}
                initial={reduceMotion ? false : { opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <BrowserFrame url={urls[index]}>
                  <Preview />
                </BrowserFrame>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
                {current.industry}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{current.headline}</h3>

              <p className="mt-6 font-display text-3xl font-bold">{current.metric}</p>
              <p className="mt-1.5 text-subtle">{current.sub}</p>

              <p className="mt-7 border-t border-hairline pt-6 font-medium">{current.client}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indikator posisi */}
        <div className="mt-10 flex justify-center gap-2">
          {cases.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Lihat ${item.client}`}
              aria-current={i === index}
              className={cn(
                "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                i === index ? "w-8 bg-ink" : "w-1.5 bg-stone-300 hover:bg-stone-400",
              )}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
