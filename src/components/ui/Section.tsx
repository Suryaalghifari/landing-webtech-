import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

/** Container tunggal untuk seluruh situs — lebar maksimum tidak boleh dicampur. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

/**
 * Irama terang/gelap antar section.
 *
 * `ink` menambahkan class `.dark` sehingga seluruh utilitas `dark:` di dalamnya
 * aktif. Blok gelap ini berfungsi sebagai pemisah bab — tanpa itu, situs
 * monokrom kehilangan titik istirahat dan terbaca sebagai kosong, bukan lega.
 */
export function Section({
  children,
  tone = "white",
  className,
  id,
}: {
  children: ReactNode;
  tone?: "white" | "canvas" | "ink";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        tone === "canvas" && "border-y border-hairline bg-canvas",
        tone === "ink" && "dark bg-ink text-white",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.18em] text-subtle dark:text-stone-400">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  // Reveal dipasang di sini supaya setiap judul section otomatis dapat animasi
  // masuk — tidak perlu dibungkus manual di tiap blok.
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-bold sm:text-4xl dark:text-white">{title}</h2>
      {lead && (
        <p className="mt-5 text-lg leading-relaxed text-subtle dark:text-stone-300">{lead}</p>
      )}
    </Reveal>
  );
}
