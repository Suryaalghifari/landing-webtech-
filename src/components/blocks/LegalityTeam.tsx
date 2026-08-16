import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { legality, site, team } from "@/data/site";

/**
 * S4 — Legalitas & Tim. PRD menyebutnya "bagian pembeda utama V1".
 *
 * Ini satu-satunya modul yang tidak ada padanannya di desain lama: desain itu
 * dibuat untuk pembeli UMKM yang tidak pernah menanyakan NIB. Pembaca V1
 * justru datang untuk ini.
 *
 * C4 memerintahkan ruangnya diperbesar. Dua cara itu dipenuhi: section ini
 * berlatar hitam (satu dari hanya dua di seluruh halaman), dan datanya
 * ditampilkan besar, bukan sebagai catatan kaki.
 *
 * S4.9 melarang badge tech stack dan sertifikat kursus di sini. Bagian ini
 * membuktikan Anda badan usaha, bukan bahwa Anda bisa React.
 */

/**
 * Nomor legalitas HARUS berupa teks, bukan gambar.
 *
 * Persona P2 (bagian pengadaan) akan menyalin NIB dan NPWP untuk dicocokkan
 * dengan berkas penawaran. Nomor dalam bentuk gambar memaksa mereka mengetik
 * ulang 13–16 digit — dan setiap salah ketik jadi kegagalan verifikasi yang
 * mereka salahkan ke Anda.
 *
 * Angkanya monospace supaya digit sejajar dan mudah dibaca satu per satu.
 */
function LegalField({
  label,
  value,
  copyable = true,
}: {
  label: string;
  value: string;
  /** `false` untuk nilai yang tidak masuk akal disalin, misal tahun. */
  copyable?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard bisa ditolak browser. Teksnya tetap bisa diseleksi manual,
      // jadi kegagalan di sini tidak menghalangi apa pun — diamkan.
    }
  };

  return (
    <div className="border-t border-white/15 py-5 sm:grid sm:grid-cols-[13rem_1fr] sm:items-baseline sm:gap-6">
      <dt className="text-sm text-stone-400">{label}</dt>
      <dd className="mt-1.5 flex items-baseline gap-3 sm:mt-0">
        {/* break-words: alamat dan NPWP panjang, dan di 360px (N3) teks
            monospace tanpa spasi akan mendorong halaman melebar. */}
        <span className="font-mono text-lg tracking-wide break-words text-white select-all">
          {value}
        </span>
        {copyable && (
          <button
            type="button"
            onClick={copy}
            aria-label={`Salin ${label}`}
            className="shrink-0 cursor-pointer rounded p-1.5 text-stone-400 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        )}
        <span aria-live="polite" className="sr-only">
          {copied ? `${label} disalin` : ""}
        </span>
      </dd>
    </div>
  );
}

export function LegalityTeam() {
  return (
    <Section id="legalitas" tone="ink">
      <SectionHeading
        eyebrow="Legalitas & tim"
        title="Badan usaha resmi, dengan orang yang bisa Anda hubungi namanya"
        lead="Data di bawah ini bisa Anda salin dan cocokkan dengan berkas penawaran yang kami kirim."
      />

      {/* S4.1–S4.5 */}
      <Reveal className="mt-14">
        <dl className="border-b border-white/15">
          <LegalField label="Nama badan usaha" value={site.legalName} />
          <LegalField label="NIB" value={legality.nib} />
          <LegalField label="NPWP badan" value={legality.npwp} />
          <LegalField label="Alamat" value={legality.address} />
          <LegalField label="Tahun pendirian" value={legality.founded} copyable={false} />
        </dl>
      </Reveal>

      {/* S4.6–S4.8 */}
      <div className="mt-20">
        <Reveal>
          <h3 className="font-display text-2xl font-bold">Tim</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-stone-400">
            Tiga orang, satu penanggung jawab per project. Anda tahu siapa yang
            mengangkat telepon saat ada masalah.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-8 sm:grid-cols-3">
          {team.map((person, i) => (
            <StaggerItem key={i}>
              {/*
                Rasio dikunci supaya tidak ada layout shift saat foto masuk.

                Selama `photo` masih null, yang tampil MONOGRAM INISIAL —
                bukan stock photo. S4.8 melarang wajah yang bukan wajah tim
                Anda, dan larangan itu justru makin penting sekarang: halaman
                ini sudah terlihat selesai, jadi foto orang asing di sini akan
                paling meyakinkan tepat pada saat paling berbahaya.

                Monogram juga bukan sekadar penampung — ia terbaca sebagai
                pilihan desain, sehingga halaman tetap terlihat utuh sampai
                foto aslinya masuk.
              */}
              <div className="flex aspect-4/5 items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/5 p-4">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    width={480}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl font-bold tracking-tight text-white/25"
                  >
                    {person.name
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                )}
              </div>

              <p className="mt-4 font-medium text-white">{person.name}</p>
              <p className="mt-1 text-sm text-stone-400">{person.role}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
