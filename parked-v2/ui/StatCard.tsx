import { ArrowDown, ArrowUp } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { cn } from "@/lib/utils";

/**
 * Struktur mengikuti `statistics-card-1` oleh ReUI (@sean0205) di 21st.dev:
 * label, nilai besar, lencana perubahan, lalu baris pembanding.
 *
 * Aslinya memakai hijau/merah untuk naik-turun. Di sini diubah jadi monokrom —
 * arah dibaca dari panah dan teksnya, bukan dari warna. Ini sekaligus memenuhi
 * aturan "warna tidak boleh jadi satu-satunya penanda".
 */
export function StatCard({
  label,
  value,
  change,
  direction = "up",
  compare,
  className,
}: {
  label: string;
  value: string;
  change?: string;
  direction?: "up" | "down";
  compare?: string;
  className?: string;
}) {
  const Arrow = direction === "up" ? ArrowUp : ArrowDown;

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-lg border border-hairline bg-white p-6",
        "dark:border-stone-800 dark:bg-stone-900",
        className,
      )}
    >
      <p className="text-sm text-subtle dark:text-stone-400">{label}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="font-display text-4xl font-bold tracking-tight dark:text-white">
          <CountUp value={value} />
        </span>

        {change && (
          <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-ink dark:bg-stone-800 dark:text-stone-200">
            <Arrow className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
            {change}
            <span className="sr-only">{direction === "up" ? "naik" : "turun"}</span>
          </span>
        )}
      </div>

      {compare && (
        <p className="mt-auto border-t border-hairline pt-4 text-sm text-subtle dark:border-stone-800 dark:text-stone-400">
          {compare}
        </p>
      )}
    </div>
  );
}
