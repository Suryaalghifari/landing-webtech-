import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { legality, site } from "@/data/site";
import { waLink } from "@/lib/utils";

/**
 * S6 — Kontak. Menggantikan `CTASection` versi UMKM.
 *
 * Basisnya tetap `call-to-action` oleh @tommyjepsen, dibalik jadi hitam.
 * Yang berubah: tombol kedua dulu "Lihat harga dulu" menuju /harga — halaman
 * itu tidak ada lagi di V1, dan mengirim pembaca ke tabel paket bukan tujuan
 * situs verifikasi.
 *
 * S6.4 (form kontak) SENGAJA TIDAK DIBUAT. PRD sendiri mencatat segmen ini
 * cenderung menghubungi lewat WhatsApp, bukan form, dan "jika form mengancam
 * tenggat, buang". Form juga menyeret S6.5: harus diuji kirim-terima sebelum
 * rilis, plus backend pengirim email. Kalau Q4 memutuskan form tetap dipakai,
 * itu tambahan — bukan pengganti blok ini.
 */

function ContactLine({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 border-t border-white/15 py-5">
      <span aria-hidden="true" className="mt-0.5 shrink-0 text-stone-400">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm text-stone-400">{label}</p>
        <div className="mt-1 break-words text-white">{children}</div>
      </div>
    </div>
  );
}

export function ContactSection() {
  const wa = waLink(
    site.phone,
    `Halo ${site.legalName}, saya menerima company profile Anda dan ingin menindaklanjuti.`,
  );

  return (
    <Section id="kontak" tone="ink">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Kontak"
            title="Hubungi kami langsung"
            lead="Pesan masuk dibaca orang, dan dijawab pada jam kerja yang tertulis di samping."
          />

          <Reveal className="mt-10">
            <Button size="lg" href={wa} external className="bg-white text-ink hover:bg-stone-200">
              Hubungi via WhatsApp
              <MessageCircle className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <dl className="border-b border-white/15">
            {/*
              S6.2 — email HARUS domain sendiri; Gmail dilarang. Alamat
              @gmail.com adalah hal pertama yang dicurigai bagian pengadaan,
              dan satu itu saja membatalkan seluruh kerja blok legalitas.
            */}
            <ContactLine icon={<Mail className="h-5 w-5" />} label="Email">
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-white/30 underline-offset-4 transition-colors duration-200 hover:decoration-white"
              >
                {site.email}
              </a>
            </ContactLine>

            <ContactLine icon={<Clock className="h-5 w-5" />} label="Jam operasional">
              {site.hours}
            </ContactLine>

            <ContactLine icon={<MapPin className="h-5 w-5" />} label="Alamat kantor">
              {legality.address}
            </ContactLine>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
