import { Section, SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/data/parked-v2";

export function TestimonialGrid() {
  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Kata klien"
        title="Yang mereka ingat bukan desainnya"
        lead="Kami tanya balik ke klien lama: apa yang paling membedakan kerja sama ini? Jawabannya jarang soal tampilan."
      />

      <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <StaggerItem
            key={item.name}
            as="figure"
            className="flex h-full flex-col rounded-lg border border-hairline bg-white p-8 dark:border-stone-800 dark:bg-stone-900"
          >
            <blockquote className="flex-1 leading-relaxed text-ink dark:text-stone-100">
              &ldquo;{item.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-7 flex items-center gap-3 border-t border-hairline pt-6 dark:border-stone-800">
              {/* Placeholder foto — WAJIB diganti foto asli sebelum launching.
                  Inisial jauh lebih jujur daripada avatar stok. */}
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface font-display text-sm font-bold text-subtle dark:bg-stone-800 dark:text-stone-300"
              >
                {item.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink dark:text-white">{item.name}</p>
                <p className="truncate text-sm text-subtle dark:text-stone-400">
                  {item.role} · {item.city}
                </p>
              </div>
            </figcaption>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
