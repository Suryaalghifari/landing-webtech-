import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { waLink } from "@/lib/utils";

/**
 * Bar WhatsApp menempel di bawah, mobile saja.
 *
 * Ini blok yang sudah lolos pemeriksaan C8 tanpa perubahan: "tombol WhatsApp
 * terlihat tanpa scroll di 360px". Sekaligus memenuhi G3.
 */
export function MobileCTABar() {
  const wa = waLink(
    site.phone,
    `Halo ${site.legalName}, saya ingin bertanya soal layanan Anda.`,
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-ink font-medium text-white transition-colors duration-200 hover:bg-stone-800"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Hubungi via WhatsApp
      </a>
    </div>
  );
}
