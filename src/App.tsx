import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import Home from "@/pages/Home";

/**
 * V1 adalah SATU HALAMAN (PRD §3.1), jadi tidak ada router di sini.
 *
 * `react-router-dom` dicabut sepenuhnya: 40 route milik rencana SEO lama
 * tidak berlaku untuk situs verifikasi, dan router yang tidak me-route
 * tetap ikut terunduh di jaringan 3G. Navigasi jadi anchor ke section
 * (lihat `nav` di `data/site.ts`).
 */
export default function App() {
  return (
    <>
      <Header />

      {/* pb-20 di mobile — memberi ruang untuk MobileCTABar yang menempel */}
      <main className="pb-20 md:pb-0">
        <Home />
      </main>

      <Footer />
      <MobileCTABar />
    </>
  );
}
