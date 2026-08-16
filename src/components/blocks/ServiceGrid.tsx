import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { serviceGroups } from "@/data/content";

/**
 * S2 — Layanan.
 *
 * KENAPA BUKAN BENTO GRID BERGAMBAR seperti versi UMKM:
 *
 * Kartu bento itu bagus justru karena tiap kartu membawa gambar di atasnya —
 * itulah yang dulu memperbaiki keluhan "kotak-kotak". Tapi V1 tidak punya satu
 * pun gambar yang jujur untuk ditaruh di sana: portofolio ditunda ke V2 (C1),
 * dan mockup fiktif di bawah nama layanan terbaca sebagai contoh hasil kerja.
 * Bento dengan area gambar kosong justru menghasilkan persis kotak kosong yang
 * dulu kita perbaiki.
 *
 * Jadi bentuknya diganti, bukan dikosongkan: daftar tipografis dua kolom yang
 * terbaca seperti lampiran penawaran. Itu juga lebih cocok untuk pembacanya —
 * P2 (bagian pengadaan) membaca ini untuk mencocokkan lingkup, bukan untuk
 * menilai desain.
 *
 * S2.4 — model kerjasama dipisah tegas: project vs retainer. Pemisahan itu
 * struktur, jadi sudah dibangun di sini. Isinya dari pemilik CV (S2.1, R3).
 */

export function ServiceGrid() {
  return (
    <Section id="layanan" tone="canvas">
      <SectionHeading
        eyebrow="Layanan"
        title="Dua cara bekerja sama"
        lead="Dipisah tegas supaya jelas mana yang selesai sekali jalan dan mana yang berjalan terus — termasuk apa saja yang tidak termasuk di dalamnya."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {serviceGroups.map((group) => (
          <Reveal key={group.id}>
            <div className="flex items-baseline gap-4 border-b border-hairline pb-5">
              <h3 className="font-display text-2xl font-bold">{group.label}</h3>
            </div>

            <p className="mt-5 leading-relaxed text-subtle">{group.note}</p>

            <Stagger className="mt-8 space-y-7">
              {group.items.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className="mt-1 font-mono text-sm text-stone-400"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="mt-2 leading-relaxed text-subtle">{item.detail}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
