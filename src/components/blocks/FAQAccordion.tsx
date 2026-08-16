import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { faq } from "@/data/content";

/**
 * S5 — FAQ. Enam pertanyaan, semuanya wajib.
 *
 * DUA PERUBAHAN dari versi UMKM:
 *
 * 1. TAB KATEGORI DICABUT. Enam pertanyaan tidak butuh dikelompokkan; tab
 *    untuk enam item cuma menambah klik sebelum pembaca sampai ke jawaban.
 *
 * 2. AKORDEON JAVASCRIPT DIGANTI <details>/<summary> BAWAAN.
 *    Ini bukan sekadar penghematan JS. Akordeon buatan sendiri menyembunyikan
 *    jawaban dari Ctrl+F — dan pembaca V1 justru orang yang menekan Ctrl+F
 *    mencari kata "source code" atau "garansi" sambil membandingkan penawaran.
 *    Chrome bisa menemukan teks di dalam <details> yang tertutup dan
 *    membukanya sendiri. Bonusnya: keyboard dan pembaca layar dapat perilaku
 *    yang benar tanpa satu baris ARIA, dan section ini jadi nol JavaScript.
 *
 * Jawaban di sini adalah komitmen yang akan ditagih klien, bukan bahan
 * pemasaran. Risiko R4: jangan menulis SLA yang belum disepakati internal.
 */

export function FAQAccordion() {
  return (
    <Section id="faq">
      <SectionHeading
        align="center"
        eyebrow="Pertanyaan"
        title="Enam hal yang biasanya ditanyakan sebelum tanda tangan"
        lead="Tiga yang pertama menjawab keluhan yang paling sering muncul soal vendor — kami jawab di depan, bukan setelah ditanya."
      />

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <div className="divide-y divide-hairline border-y border-hairline">
          {faq.map((entry) => (
            <details key={entry.id} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-subtle [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg font-medium">{entry.q}</h3>
                <Plus
                  className="mt-1 h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </summary>

              <div className="pb-7 pr-12 leading-relaxed text-subtle">{entry.a}</div>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
