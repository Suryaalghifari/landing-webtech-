import { Section, SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { processSteps } from "@/data/content";
import { cn } from "@/lib/utils";

/**
 * S3 — Cara kerja.
 *
 * Basisnya tetap `how-it-works` oleh @chamaac: kartu yang turun bertingkat ke
 * kanan, dihubungkan garis. Tapi rotasi dan kepala pin DICABUT, sesuai
 * keputusan 14 Agustus 2026.
 *
 * Alasannya S3.4: "tampil sebagai teks terstruktur, bukan grafis kompleks".
 * Kertas yang disematkan miring itu efek yang bagus untuk situs yang menjual
 * desain. Pembaca V1 datang untuk memverifikasi, dan kemiringan tidak
 * membantunya sedikit pun — sementara `whileHover` yang meluruskan kartu
 * menambah pekerjaan animasi yang N11 minta ditahan.
 *
 * Tata letak bertingkatnya dipertahankan: itu yang membuat empat langkah
 * terbaca sebagai urutan, bukan sebagai empat kotak berjajar.
 */

const offsets = ["lg:ml-0", "lg:ml-[14%]", "lg:ml-[28%]", "lg:ml-[42%]"];

export function ProcessSteps() {
  return (
    <Section id="cara-kerja">
      <SectionHeading
        eyebrow="Cara kerja"
        title="Setiap tahap punya sesuatu yang Anda terima"
        lead="Bukan daftar pekerjaan kami, tapi daftar apa yang berpindah ke tangan Anda dan kapan."
      />

      <Stagger>
        <ol className="relative mt-16 space-y-8 lg:space-y-6">
          {processSteps.map((item, i) => (
            <StaggerItem key={item.step} className={cn("relative lg:w-[58%]", offsets[i])}>
              {/* Benang penghubung ke kartu berikutnya — menandai urutan */}
              {i < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-8 left-8 h-8 w-px border-l border-dashed border-stone-300 lg:-bottom-6 lg:left-auto lg:right-10 lg:h-6"
                />
              )}

              <div className="rounded-lg border border-hairline bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl font-bold text-stone-300">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>

                {/*
                  S3.2 — syarat yang paling sering dilanggar: sebut APA YANG
                  KLIEN TERIMA, bukan apa yang dikerjakan. "Analisis kebutuhan"
                  bukan tahap; "dokumen kebutuhan yang Anda setujui" baru tahap.
                */}
                <p className="mt-3 leading-relaxed text-subtle">{item.deliverable}</p>

                {/* S3.3 — estimasi durasi, opsional */}
                {item.duration && (
                  <p className="mt-4 border-t border-hairline pt-4 text-sm text-subtle">
                    {item.duration}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </ol>
      </Stagger>
    </Section>
  );
}
