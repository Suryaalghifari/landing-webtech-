import { Check, Minus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { comparison } from "@/data/parked-v2";
import { cn } from "@/lib/utils";

/**
 * Struktur mengikuti `pricing-section-with-comparison` oleh @tommyjepsen.
 * Tabel harus bisa digeser sendiri di mobile — body halaman tidak boleh ikut
 * bergeser horizontal.
 */
export function ComparisonTable() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Perbandingan"
        title="Kenapa tidak pakai yang lebih murah saja?"
        lead="Pertanyaan yang wajar. Ini perbedaannya, ditulis apa adanya — termasuk hal yang bisa Anda dapat di tempat lain."
      />

      <Reveal className="mt-14 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-hairline">
              <th scope="col" className="py-5 pr-4 text-sm font-medium text-subtle">
                <span className="sr-only">Fitur</span>
              </th>
              {comparison.columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    "px-4 py-5 text-center font-display text-sm font-bold",
                    i === 0 ? "text-ink" : "text-subtle",
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.feature} className="border-b border-hairline">
                <th scope="row" className="py-4 pr-4 text-sm font-normal text-ink">
                  {row.feature}
                </th>
                {row.values.map((value, i) => (
                  <td key={i} className="px-4 py-4 text-center">
                    {value ? (
                      <>
                        <Check
                          className="mx-auto h-4 w-4 text-ink"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span className="sr-only">Ya</span>
                      </>
                    ) : (
                      <>
                        <Minus
                          className="mx-auto h-4 w-4 text-stone-300"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span className="sr-only">Tidak</span>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      {/* Ringkasan hasil — struktur `comparison-table` oleh @ruixen.ui.
          Tabel tanpa kesimpulan memaksa pembaca menghitung sendiri. */}
      <Reveal className="mt-8" delay={0.08}>
        <div className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
          {comparison.columns.map((col, i) => {
            const score = comparison.rows.filter((row) => row.values[i]).length;
            const winner = i === 0;

            return (
              <div
                key={col}
                className={cn("p-6", winner ? "bg-ink text-white" : "bg-white")}
              >
                <p
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.14em]",
                    winner ? "text-stone-400" : "text-subtle",
                  )}
                >
                  {col}
                </p>
                <p className="mt-3 font-display text-3xl font-bold">
                  {score}
                  <span className={cn("text-lg", winner ? "text-stone-500" : "text-stone-400")}>
                    /{comparison.rows.length}
                  </span>
                </p>
                <p className={cn("mt-1 text-sm", winner ? "text-stone-400" : "text-subtle")}>
                  kriteria terpenuhi
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
