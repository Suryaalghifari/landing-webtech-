import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/**
 * Menghitung angka naik saat masuk layar.
 * Menerima string apa adanya ("127", "89%", "1.153") — bagian non-angka
 * dipertahankan sebagai awalan/akhiran.
 *
 * Catatan: seluruh dependency effect WAJIB primitif. Menaruh hasil
 * `String.match()` di sana membuat effect jalan ulang tiap render dan
 * animasinya restart dari nol tanpa henti.
 */
export function CountUp({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduceMotion = useReducedMotion();

  const match = value.match(/^(\D*)([\d.,]+)(\D*)$/);
  const prefix = match?.[1] ?? "";
  const digits = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";

  // Konvensi angka Indonesia: "." memisahkan ribuan, "," memisahkan desimal.
  // Tanpa pembedaan ini, "1,8" terbaca sebagai 18.
  const decimals = digits.includes(",") ? (digits.split(",")[1]?.length ?? 0) : 0;
  const target = match ? Number(digits.replace(/\./g, "").replace(",", ".")) : NaN;
  const animatable = Boolean(match) && Number.isFinite(target) && !reduceMotion;

  const [display, setDisplay] = useState(animatable ? `${prefix}0${suffix}` : value);

  useEffect(() => {
    if (!animatable || !inView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        // toLocaleString id-ID sudah memberi "." untuk ribuan dan "," untuk desimal
        const formatted = latest.toLocaleString("id-ID", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        setDisplay(prefix + formatted + suffix);
      },
    });

    return () => controls.stop();
  }, [animatable, inView, target, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {animatable ? display : value}
    </span>
  );
}
