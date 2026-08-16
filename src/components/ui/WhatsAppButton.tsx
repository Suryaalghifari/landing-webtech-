import { cn } from "@/lib/utils";
import { WhatsAppGlyph } from "@/components/ui/icons";

/**
 * Struktur diambil dari `interactive-hover-button` oleh @dillionverma
 * (Magic UI, MIT) di 21st.dev — penulis yang sama dengan
 * `animated-grid-pattern` yang sudah jadi latar hero, jadi kepala halaman ini
 * berbicara dengan satu bahasa gerak.
 *
 * Mekanismenya: satu titik kecil di kiri tombol membesar sampai memenuhi
 * seluruh tombol saat kursor masuk, sementara label bergeser keluar dan
 * lapisan kedua bergeser masuk menggantikannya.
 *
 * TIGA HAL YANG SAYA UBAH, dan alasannya:
 *
 * 1. TITIKNYA HIJAU WHATSAPP (#25D366) — satu-satunya warna di seluruh
 *    halaman monokrom ini. Titik itu bukan hiasan: ia persis warna yang
 *    membanjiri tombol saat disentuh. Jadi titik hijau kecil itu adalah
 *    janji tentang apa yang akan terjadi, bukan aksen yang ditempel.
 *
 * 2. LAPISAN KEDUA MEMBAWA LOGO WHATSAPP, bukan panah. Panah berarti
 *    "pindah halaman"; yang terjadi di sini bukan itu — WhatsApp yang
 *    terbuka. Logonya dari Simple Icons, lihat `icons.tsx`.
 *
 * 3. LABEL TETAP TERBACA TANPA HOVER. Perangkat sentuh tidak punya hover,
 *    dan ini CTA utama situs di perangkat yang paling banyak dipakai
 *    pembacanya. Yang hilang saat tidak ada hover cuma efeknya, bukan
 *    informasinya.
 *
 * Kontras pada keadaan hover: #0c0a09 di atas #25D366 = 11,6:1 (AAA).
 * Karena itu teks lapisan kedua selalu gelap, di kedua tone.
 */

type Tone = "ink" | "light";

const tones: Record<Tone, { rest: string; dot: string }> = {
  /** Untuk section berlatar terang. Gelap = jelas ini tombol utama. */
  ink: {
    rest: "border-ink bg-ink text-white",
    dot: "bg-[#25d366]",
  },
  /** Untuk section berlatar hitam, di mana tombol gelap tidak akan terlihat. */
  light: {
    rest: "border-white bg-white text-ink",
    dot: "bg-[#25d366]",
  },
};

export function WhatsAppButton({
  href,
  label = "Hubungi via WhatsApp",
  tone = "ink",
  className,
}: {
  href: string;
  label?: string;
  tone?: Tone;
  className?: string;
}) {
  const t = tones[tone];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        // h-12 = 48px, di atas ambang 44px untuk target sentuh
        "group relative inline-flex h-12 cursor-pointer items-center justify-center",
        "overflow-hidden rounded-full border px-7 text-base font-medium",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        t.rest,
        className,
      )}
    >
      {/* Lapisan istirahat — titik + label */}
      <span className="relative z-10 flex items-center gap-2.5">
        {/*
          scale-[110] pada titik 8px menghasilkan lingkaran ±880px: cukup
          menutupi tombol terlebar di halaman ini dari titik mana pun.
          Dipotong oleh `overflow-hidden` milik induknya.
        */}
        <span
          aria-hidden="true"
          className={cn(
            "h-2 w-2 shrink-0 rounded-full transition-transform duration-500 ease-out",
            "group-hover:scale-[110] group-focus-visible:scale-[110]",
            t.dot,
          )}
        />
        <span
          className={cn(
            "inline-block transition-[transform,opacity] duration-300",
            "group-hover:translate-x-8 group-hover:opacity-0",
            "group-focus-visible:translate-x-8 group-focus-visible:opacity-0",
          )}
        >
          {label}
        </span>
      </span>

      {/* Lapisan hover — label + logo, selalu berteks gelap di atas hijau */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-20 flex translate-x-8 items-center justify-center gap-2.5",
          "text-ink opacity-0 transition-[transform,opacity] duration-300",
          "group-hover:translate-x-0 group-hover:opacity-100",
          "group-focus-visible:translate-x-0 group-focus-visible:opacity-100",
        )}
      >
        {label}
        <WhatsAppGlyph className="h-[1.15em] w-[1.15em]" />
      </span>
    </a>
  );
}
