import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * S6.1 — link WhatsApp dengan pesan pembuka terisi otomatis.
 *
 * `site.phone` harus format internasional tanpa tanda plus (628…), karena
 * itu yang diterima wa.me. Non-digit dibuang di sini supaya spasi atau
 * tanda hubung yang ikut tersalin dari catatan tidak merusak tautannya.
 */
export function waLink(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
