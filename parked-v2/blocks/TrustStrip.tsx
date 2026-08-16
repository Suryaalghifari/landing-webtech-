import { Container } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";
import { trustStats } from "@/data/parked-v2";

/**
 * Sebelumnya empat angka berjajar dipisah garis — persis "kotak kosong" yang
 * bikin halaman terbaca sebagai template. Sekarang memakai struktur
 * `statistics-card-1` (ReUI): tiap angka punya konteks perubahan dan pembanding.
 */
export function TrustStrip() {
  return (
    <div className="border-b border-hairline bg-white py-14">
      <Container>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <StaggerItem key={stat.label} className="h-full">
              <StatCard
                label={stat.label}
                value={stat.value}
                change={stat.change}
                direction={stat.direction}
                compare={stat.compare}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </div>
  );
}
