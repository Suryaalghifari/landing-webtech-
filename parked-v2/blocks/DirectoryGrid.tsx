import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { industries, locations } from "@/data/parked-v2";

/**
 * Hub internal link — bukan hiasan. Bagian ini yang menyebarkan otoritas halaman
 * Home ke 10 halaman industri dan halaman kota. Lihat PAGE-SPECS.md.
 */
export function DirectoryGrid() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="Per industri"
            title="Kami tahu kebutuhan bidang Anda"
            lead="Klinik butuh booking. Restoran butuh menu digital. Bukan hal yang sama."
          />

          <Stagger
            as="ul"
            className="mt-8 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2"
          >
            {industries.map((item) => (
              <StaggerItem key={item.slug} as="li">
                <a
                  href={`/website-untuk/${item.slug}`}
                  className="group flex cursor-pointer items-center justify-between gap-3 bg-white px-5 py-4 text-sm transition-colors duration-200 hover:bg-canvas"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-stone-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-ink" />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <SectionHeading
            eyebrow="Per kota"
            title="Kota tempat kami punya klien"
            lead="Daftar ini sengaja pendek. Kami hanya membuat halaman untuk kota yang benar-benar sudah ada klien kami di sana."
          />

          <Stagger
            as="ul"
            className="mt-8 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline"
          >
            {locations.map((item) => (
              <StaggerItem key={item.slug} as="li">
                <a
                  href={`/jasa-pembuatan-website/${item.slug}`}
                  className="group flex cursor-pointer items-center justify-between gap-3 bg-white px-5 py-4 transition-colors duration-200 hover:bg-canvas"
                >
                  <span className="text-sm">
                    Jasa pembuatan website{" "}
                    <span className="font-medium">{item.label}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3 text-sm text-subtle">
                    {item.clients} klien
                    <ArrowRight className="h-4 w-4 text-stone-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
