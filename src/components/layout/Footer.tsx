import { Container } from "@/components/ui/Section";
import { legality, nav, site } from "@/data/site";
import { waLink } from "@/lib/utils";

/**
 * `footer-7` oleh @shadcnblockscom di 21st.dev — blok merek di kiri,
 * kolom-kolom tautan di kanan, dipisah garis dari bilah hak cipta di bawah.
 *
 * STRUKTURNYA SEMPAT SAYA PANGKAS jadi dua blok, dan itu keliru. Alasan saya
 * waktu itu: kolom-kolom itu dibangun sebagai hub tautan internal, dan V1
 * tidak punya halaman lain untuk ditautkan. Tapi kolomnya tidak harus berisi
 * tautan ke halaman lain — di situs satu halaman, isinya jadi:
 *
 *   Halaman   → jangkar ke lima section. Berguna justru karena halamannya
 *               panjang; pengunjung yang sudah di dasar tidak perlu
 *               menggulir balik ke atas.
 *   Kontak    → WhatsApp, email, jam operasional
 *   Legalitas → NIB dan NPWP diulang di sini. Bukan pengulangan sia-sia:
 *               bagian pengadaan terbiasa mencari data badan usaha di kaki
 *               halaman, dan itu konvensi yang tidak perlu dilawan.
 *
 * BARIS IKON SOSIAL milik `footer-7` TIDAK dipasang: belum ada akunnya, dan
 * ikon yang menuju ke mana-mana lebih buruk daripada tidak ada ikon.
 * Slotnya ada di bawah kalau nanti akunnya jadi.
 *
 * S7 dan rencana §7.1 melarang tautan ke situs portofolio pribadi — di sini
 * maupun di mana pun. Alasannya di rencana ditandai `[Pasti]`: klien tidak
 * meneken kontrak panjang dengan pihak yang terlihat sedang mencari pekerjaan.
 */

export function Footer() {
  const wa = waLink(
    site.phone,
    `Halo ${site.legalName}, saya ingin bertanya soal layanan Anda.`,
  );

  return (
    <footer className="border-t border-hairline bg-white">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
          {/* Blok merek */}
          <div className="max-w-sm">
            <p className="font-display text-lg font-bold tracking-tight">{site.legalName}</p>
            <p className="mt-4 text-sm leading-relaxed text-subtle">{site.descriptor}</p>
            {/*
              Slot ikon sosial `footer-7` — kosongkan sampai akunnya benar-benar
              ada. Ikon media sosial yang tidak menuju ke mana pun adalah hal
              pertama yang membuat pengunjung curiga situsnya belum jadi.
            */}
          </div>

          {/* Kolom tautan */}
          <div className="grid gap-10 sm:grid-cols-3">
            <nav aria-label="Halaman">
              <h2 className="font-display text-sm font-bold">Halaman</h2>
              <ul className="mt-5 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-subtle transition-colors duration-200 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-display text-sm font-bold">Kontak</h2>
              <ul className="mt-5 space-y-3 text-sm text-subtle">
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-ink"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-words transition-colors duration-200 hover:text-ink"
                  >
                    {site.email}
                  </a>
                </li>
                <li>{site.hours}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm font-bold">Legalitas</h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-subtle">NIB</dt>
                  <dd className="mt-0.5 font-mono break-words select-all">{legality.nib}</dd>
                </div>
                <div>
                  <dt className="text-subtle">NPWP</dt>
                  <dd className="mt-0.5 font-mono break-words select-all">{legality.npwp}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Bilah bawah — hak cipta kiri, alamat kanan */}
        <div className="flex flex-col gap-3 border-t border-hairline py-7 text-sm text-subtle sm:flex-row sm:items-start sm:justify-between">
          {/*
            Tahun dari konstanta waktu build, bukan `new Date()`.
            Halaman ini di-prerender lalu di-hydrate; `new Date()` yang jalan
            di dua waktu berbeda memicu ketidakcocokan hidrasi setiap
            pergantian tahun. Rebuild memperbarui angkanya.
          */}
          <p>
            © {__BUILD_YEAR__} {site.legalName}
          </p>
          <address className="max-w-sm not-italic sm:text-right">{legality.address}</address>
        </div>
      </Container>
    </footer>
  );
}
