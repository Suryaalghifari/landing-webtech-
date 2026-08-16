import { HeroAnimated } from "@/components/blocks/HeroAnimated";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { LegalityTeam } from "@/components/blocks/LegalityTeam";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { ContactSection } from "@/components/blocks/ContactSection";

/**
 * PRD §3.1 — satu halaman, tujuh bagian, URUTAN TETAP.
 *
 * S7 (Footer) dipasang di `App.tsx` bersama Header, jadi enam di sini.
 *
 * SEMBILAN BLOK DIPARKIR untuk V2, tidak dihapus:
 *   TrustStrip · ProblemSection · BeforeAfter · Showcase · MetricCards
 *   PricingTable · ComparisonTable · TestimonialGrid · DirectoryGrid
 *
 * Dasarnya PRD §6: C1 (portofolio), C2 (testimoni), C3 (angka statistik).
 * Berkasnya dipindahkan ke folder `parked-v2/` di akar proyek, di luar `src/`
 * — jadi tidak ikut di-typecheck maupun di-bundle. Memarkirkannya tidak
 * membebani halaman sedikit pun.
 *
 * PRD §11 menghidupkan V2 begitu terkumpul 3 nama klien yang boleh
 * dipublikasikan. Saat itu tiba, blok-blok ini tinggal dipasang kembali di
 * sini setelah datanya diganti data nyata.
 *
 * Irama terang/gelap setelah C1–C3 memangkas tiga section hitam:
 *   Hero putih · Layanan abu · Cara kerja putih · LEGALITAS HITAM ·
 *   FAQ putih · KONTAK HITAM
 */
export default function Home() {
  return (
    <>
      <HeroAnimated />
      <ServiceGrid />
      <ProcessSteps />
      <LegalityTeam />
      <FAQAccordion />
      <ContactSection />
    </>
  );
}
