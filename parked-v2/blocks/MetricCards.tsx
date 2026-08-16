import { Section, SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";
import { metrics } from "@/data/parked-v2";

/**
 * Memakai `StatCard` yang sama dengan TrustStrip — satu bentuk kartu statistik
 * untuk seluruh situs. Mencampur beberapa gaya kartu statistik adalah salah satu
 * hal yang bikin halaman terasa dirakit, bukan dirancang.
 */
export function MetricCards() {
  return (
    <Section tone="ink">
      <SectionHeading
        eyebrow="Bukti, bukan klaim"
        title="Angka dari klien nyata"
        lead="Setiap angka di bawah bisa kami tunjukkan sumbernya — screenshot Search Console dan PageSpeed Insights, bukan hasil ketikan."
      />

      <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <StaggerItem key={metric.label} className="h-full">
            <StatCard
              label={`${metric.label} — ${metric.client}`}
              value={metric.after}
              change={`dari ${metric.before}`}
              direction={metric.direction}
              compare={metric.note}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
