import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { GridPattern } from "@/components/ui/GridPattern";
import { BuildingScene } from "@/components/ui/BuildingScene";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { site, trustLine } from "@/data/site";
import { operationalProof, priceRange } from "@/data/content";
import { waLink } from "@/lib/utils";

/**
 * S1 — Hero.
 *
 * Tata letak dua kolom dari `hero-with-group-of-images-text-and-two-buttons`
 * (@tommyjepsen) dipertahankan. Latar `animated-grid-pattern` (@dillionverma)
 * dipertahankan, tapi kotak-kotak menyalanya dimatikan — lihat catatan di
 * `GridPattern`.
 *
 * DUA HAL YANG DICABUT dari versi UMKM, dan alasannya:
 *
 * 1. KATA BERPUTAR. Kriteria penerimaan PRD yang ditandai tidak bisa ditawar:
 *    dua orang non-IT harus bisa menyebut "ini perusahaan apa" dalam 5 detik.
 *    Kata berputar membuat kalimat headline belum selesai sampai animasinya
 *    berputar — pembaca harus MENUNGGU untuk tahu isinya. Untuk pengunjung
 *    yang datang menghibur diri itu menarik; untuk bagian pengadaan yang
 *    membuka situs sambil memegang berkas penawaran, itu menghalangi
 *    satu-satunya tugas hero.
 *
 * 2. ANIMASI MASUK. Versi lama memulai seluruh kolom teks dari `opacity: 0`,
 *    jadi layar pertama kosong sampai React boot dan motion jalan. Di 3G
 *    (N1: muat < 3 detik) itu berarti layar kosong selama beberapa detik —
 *    persis kebalikan dari tujuan situs yang tugasnya membuktikan Anda nyata.
 *    Hero sekarang tampil langsung saat HTML sampai. `Reveal` tetap dipakai
 *    di section bawah lipatan, di mana biayanya nol.
 */

export function HeroAnimated() {
  const wa = waLink(site.phone, `Halo ${site.legalName}, saya ingin bertanya soal layanan Anda.`);

  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <GridPattern className="[mask-image:radial-gradient(ellipse_85%_70%_at_50%_0%,#000_35%,transparent_100%)]" />

      <Container className="relative">
        <div className="grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
          <div className="flex flex-col items-start gap-7">
            {/* S1.1 — nama badan usaha tampil penuh, tidak disingkat. */}
            <p className="font-display text-sm font-medium uppercase tracking-[0.18em] text-subtle">
              {site.legalName}
            </p>

            {/*
              S1.2 — deskriptor netral sektor. Statis, terbaca sekali lihat.

              Ukurannya ditahan di 4xl, tidak dinaikkan ke 5xl seperti hero
              versi UMKM. Ini kalimat deskriptif sepanjang 12 kata, bukan
              slogan tiga kata: di 5xl ia memakan lima baris dan menghabiskan
              seluruh layar pertama — yang justru memperlambat uji 5 detik,
              bukan mempercepatnya.
            */}
            <h1 className="text-3xl font-bold leading-[1.15] sm:text-4xl">
              Membangun dan merawat sistem informasi dan aplikasi web untuk instansi dan
              perusahaan.
            </h1>

            {/* S1.3 — satu baris bukti operasional. Satu baris, bukan section. */}
            <p className="max-w-xl text-lg leading-relaxed text-subtle">{operationalProof}</p>

            {/*
              S1.5 — CTA utama ke WhatsApp, plus satu tombol kedua mengikuti
              pola dua tombol `hero-with-image-text-and-two-buttons`.

              Tombol kedua sengaja menuju blok legalitas, bukan ke daftar
              layanan. Pembaca V1 datang untuk memverifikasi, dan yang
              dicarinya ada di sana — memberi jalan pintas ke situ lebih
              berguna daripada mengajaknya membaca dari atas ke bawah.
            */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" variant="solid" href={wa} external>
                Hubungi via WhatsApp
                <MessageCircle className="h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" href="#legalitas">
                Lihat data legalitas
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>

            {/* S1.6 — rentang harga, satu baris. Bukan tabel paket. */}
            <p className="text-subtle">
              <span className="font-medium text-ink">{priceRange.text}</span>
              {/* Pemisah eksplisit: tanpa ini, rentang harga dan kalimat
                  konsultasi terbaca menyambung jadi satu kalimat rancu. */}
              <span aria-hidden="true" className="mx-2 text-stone-300">
                ·
              </span>
              {priceRange.note}
            </p>

            {/*
              S1.4 — baris kepercayaan.
              Inilah sisa `TrustStrip` yang selamat: komponennya dipensiunkan,
              tapi fungsinya pindah ke sini dalam bentuk kualitatif. C3 melarang
              angka statistik karena tidak ada yang bisa dibuktikan; ketiga
              butir di bawah bisa.
            */}
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-hairline pt-6 text-sm text-subtle">
              {trustLine.map((claim, i) => (
                <li key={claim} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-stone-300">
                      ·
                    </span>
                  )}
                  {claim}
                </li>
              ))}
            </ul>
          </div>

          {/*
            Kolom kanan — satu foto besar.

            Tata letaknya dari `hero-with-image-text-and-two-buttons`
            (@tommyjepsen): satu gambar persegi bersudut membulat, bukan
            sekelompok gambar seperti versi UMKM.

            KENAPA FOTO, BUKAN SCREENSHOT WEBSITE:
            pembaca V1 datang dengan satu pertanyaan — "ini nyata atau tidak".
            Gambar website tidak menjawab itu; gambar orang dan tempat yang
            menjawabnya. Screenshot hasil kerja juga bahasa situs portofolio,
            sementara rencana §7.1 justru memisahkan situs ini dari situs
            portofolio pribadi.

            Persegi, bukan lanskap: kolom teks di kiri tinggi, dan foto lanskap
            akan menyisakan lubang kosong di bawahnya.
          */}
          <div className="w-full">
            <div className="aspect-square w-full overflow-hidden rounded-lg border border-hairline bg-surface">
              <img
                src={heroPhoto}
                alt=""
                width={900}
                height={900}
                /* fetchPriority high: ini elemen terbesar di layar pertama,
                   jadi ia yang menentukan skor LCP. */
                fetchPriority="high"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
