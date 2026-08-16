import { useCallback, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Struktur mengikuti `be-ui-button` oleh @saurabh10102 di 21st.dev:
 * bentuk pil, empat varian, tiga ukuran, riak (ripple) saat diklik, dan
 * penyusutan halus saat ditekan.
 *
 * Riak dan penyusutan dipindah dari motion ke CSS (`@keyframes ripple` dan
 * `active:scale-[0.97]` di index.css). Perilakunya sama persis; bedanya
 * tombol ini tidak lagi menyeret pustaka animasi ke dalam bundle, dan
 * penyusutan saat ditekan tetap bekerja sebelum JavaScript selesai dimuat —
 * yang justru saat pengunjung pertama kali menyentuhnya di jaringan lambat.
 */

type Variant = "solid" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap " +
  "rounded-full font-medium cursor-pointer select-none " +
  "transition-[colors,transform] duration-200 active:scale-[0.97] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-white hover:bg-stone-800",
  secondary: "bg-surface text-ink hover:bg-stone-200",
  outline: "border border-hairline bg-white text-ink hover:border-stone-300 hover:bg-canvas",
  ghost: "text-subtle hover:bg-canvas hover:text-ink",
};

// Tinggi minimum 44px pada md dan lg — memenuhi aturan touch target
const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-7 text-base",
};

type Ripple = { id: number; x: number; y: number; size: number };

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export function Button({
  children,
  variant = "solid",
  size = "md",
  href,
  external,
  className,
  onClick,
  ...rest
}: Props) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple = useCallback((e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const id = Date.now() + Math.random();

    setRipples((current) => [
      ...current,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top, size },
    ]);

    window.setTimeout(() => setRipples((current) => current.filter((r) => r.id !== id)), 600);
  }, []);

  const classes = cn(base, variants[variant], sizes[size], className);

  const inner = (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden="true"
          className={cn(
            "ripple pointer-events-none absolute rounded-full",
            variant === "solid" ? "bg-white/25" : "bg-ink/10",
          )}
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onMouseDown={spawnRipple}
        className={classes}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={spawnRipple}
      className={classes}
      {...rest}
    >
      {inner}
    </button>
  );
}
