import { Check, PhoneCall, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { packages } from "@/data/packages";
import { site } from "@/data/site";
import { cn, rupiah, waLink } from "@/lib/utils";

/**
 * Struktur mengikuti `pricing-cards` oleh @tommyjepsen di 21st.dev.
 * Paket populer ditandai dengan inversi hitam — cara menonjolkan tanpa warna aksen,
 * sesuai keputusan palet monokrom.
 */
export function PricingTable() {
  return (
    <Section id="harga">
      <SectionHeading
        align="center"
        eyebrow="Harga"
        title="Harga ditulis di depan"
        lead="Kami tidak menyembunyikan angka lalu minta Anda isi form dulu. Ini harga sebenarnya, termasuk yang harus Anda bayar tahun depan."
      />

      <Stagger className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {packages.map((pkg) => {
          const featured = Boolean(pkg.popular);

          return (
            <StaggerItem
              key={pkg.name}
              className={cn(
                "flex h-full flex-col rounded-lg border p-8",
                featured
                  ? "border-ink bg-ink text-white lg:-mt-4 lg:pb-12 lg:pt-12"
                  : "border-hairline bg-white",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-bold">{pkg.name}</h3>
                {featured && (
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink">
                    Paling dipilih
                  </span>
                )}
              </div>

              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  featured ? "text-stone-300" : "text-subtle",
                )}
              >
                {pkg.pitch}
              </p>

              <div className="mt-7">
                <p className="font-display text-4xl font-bold tracking-tight">
                  {rupiah(pkg.price)}
                </p>
                <p className={cn("mt-1 text-sm", featured ? "text-stone-400" : "text-subtle")}>
                  {pkg.period}
                </p>
              </div>

              <Button
                variant={featured ? "solid" : "outline"}
                size="lg"
                external
                href={waLink(
                  site.phone,
                  `Halo, saya tertarik dengan paket ${pkg.name}. Boleh minta penjelasan lebih lanjut?`,
                )}
                className={cn(
                  "mt-7 w-full",
                  featured && "bg-white text-ink hover:bg-stone-200",
                )}
              >
                {pkg.cta}
                <PhoneCall className="h-4 w-4" />
              </Button>

              <ul
                className={cn(
                  "mt-8 space-y-3 border-t pt-8 text-sm",
                  featured ? "border-stone-700" : "border-hairline",
                )}
              >
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className={featured ? "text-stone-200" : "text-subtle"}>{feature}</span>
                  </li>
                ))}

                {pkg.notIncluded?.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <X
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        featured ? "text-stone-600" : "text-stone-300",
                      )}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className={featured ? "text-stone-500" : "text-stone-400"}>
                      {feature}
                    </span>
                    <span className="sr-only">(tidak termasuk)</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          );
        })}
      </Stagger>

      <p className="mt-10 text-center text-sm text-subtle">
        Semua paket sudah termasuk domain dan hosting tahun pertama.{" "}
        <a href="/harga" className="font-medium text-ink underline underline-offset-4">
          Lihat rincian biaya lanjutan
        </a>
      </p>
    </Section>
  );
}
