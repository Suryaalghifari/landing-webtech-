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
 * SEMBILAN BLOK V2 DIHAPUS (keputusan 002): TrustStrip · ProblemSection ·
 * BeforeAfter · Showcase · MetricCards · PricingTable · ComparisonTable ·
 * TestimonialGrid · DirectoryGrid. Komponennya mengimpor `motion` yang sudah
 * dicabut dan datanya karangan — PRD §11 menghidupkan V2 dengan menulis ulang
 * dari PRD §6 (C1 portofolio, C2 testimoni, C3 statistik) begitu terkumpul
 * tiga nama klien yang boleh dipublikasikan.
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
