import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Struktur mengikuti `be-ui-tilt-card` oleh @saurabh10102 di 21st.dev:
 * kartu miring mengikuti kursor, plus kilau (glare) yang bergerak di permukaan.
 *
 * Sudut kemiringan sengaja ditahan kecil (maks 5°). Tilt yang berlebihan
 * terasa seperti mainan, bukan seperti alat jualan.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 5,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // 0..1 relatif terhadap kotak kartu
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springConfig = { stiffness: 220, damping: 24, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), springConfig);

  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  if (reduceMotion) {
    return <div className={cn("h-full", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className={cn("group/tilt relative h-full [transform-style:preserve-3d]", className)}
    >
      {children}

      {/* Kilau mengikuti kursor — hanya muncul saat kartu disentuh */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) =>
              `radial-gradient(420px circle at ${x} ${y}, rgba(12,10,9,0.055), transparent 65%)`,
          ),
        }}
      />
    </motion.div>
  );
}
