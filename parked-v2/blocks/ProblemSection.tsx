import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { BrowserFrame, MockDated } from "@/components/ui/MockSite";
import { problems } from "@/data/parked-v2";

/**
 * Struktur mengikuti `feature-with-image` oleh @tommyjepsen: teks di satu sisi,
 * gambar besar di sisi lain.
 *
 * Sebelumnya tiga kartu berjajar — terbaca sebagai kotak kosong. Satu gambar
 * besar yang menunjukkan masalahnya jauh lebih meyakinkan daripada tiga kotak
 * yang menceritakannya.
 */
export function ProblemSection() {
  return (
    <Section tone="canvas">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Kenapa ini penting"
            title="Kebanyakan website UMKM gagal karena tiga hal yang sama"
            lead="Bukan karena kurang cantik. Tiga hal di bawah ini yang benar-benar membuat website tidak menghasilkan apa-apa."
          />

          <Stagger as="ol" className="mt-10 space-y-8">
            {problems.map((problem, i) => (
              <StaggerItem key={problem.title} as="li" className="flex gap-5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-white font-display text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{problem.title}</h3>
                  <p className="mt-2 leading-relaxed text-subtle">{problem.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <BrowserFrame url="tokobangunanjaya.web.id">
            <MockDated />
          </BrowserFrame>
          <p className="mt-4 text-center text-sm text-subtle">
            Website yang seperti ini masih sangat banyak — dan pemiliknya sering tidak sadar
            berapa pelanggan yang hilang karenanya.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
