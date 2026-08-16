import { useState } from "react";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { nav, site } from "@/data/site";
import { serviceGroups } from "@/data/content";
import { cn, waLink } from "@/lib/utils";

/**
 * `navbar-5` oleh @shadcnblockscom di 21st.dev — dropdown dua kolom di
 * desktop, dan menu mobile meluncur dari atas dengan sub-menu yang bisa
 * dibuka-tutup. Dipilih dari author yang sama dengan `footer-7` supaya
 * kepala dan kaki halaman berbicara dengan bahasa desain yang sama.
 *
 * DROPDOWN-NYA SEMPAT SAYA CABUT dan itu keliru. Alasan saya waktu itu:
 * dropdown dibangun untuk menampung 8 halaman layanan, dan V1 tidak punya
 * halaman lain. Tapi dropdown ini tidak harus berisi TAUTAN — diisi daftar
 * layanan yang sebenarnya, ia justru menjawab "saya beli apa" tanpa
 * pengunjung perlu menggulir sama sekali. Dua kolomnya bahkan sudah pas
 * dengan pemisahan Project / Retainer yang S2.4 wajibkan.
 *
 * AnimatePresence diganti transisi CSS: perilakunya sama, tanpa menyeret
 * pustaka animasi ke dalam bundle (N1).
 */

export function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const wa = waLink(
    site.phone,
    `Halo ${site.legalName}, saya ingin bertanya soal layanan Anda.`,
  );

  const closeAll = () => {
    setOpen(false);
    setDropdown(false);
    setMobileServices(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-white/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <a
            href="#"
            onClick={closeAll}
            // text-sm di bawah 640px: nama badan usaha ini panjang, dan di
            // layar 360px (N3) ia berdesakan dengan tombol menu.
            className="font-display text-sm font-bold tracking-tight sm:text-base"
            aria-label={`${site.legalName} — ke atas`}
          >
            {site.legalName}
          </a>

          <nav aria-label="Navigasi utama" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {/* Dropdown dua kolom — Project di kiri, Retainer di kanan */}
              <li
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <button
                  type="button"
                  onClick={() => setDropdown((v) => !v)}
                  aria-expanded={dropdown}
                  className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-subtle transition-colors duration-200 hover:bg-canvas hover:text-ink"
                >
                  Layanan
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      dropdown && "rotate-180",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute left-0 top-full w-[36rem] pt-3 transition-all duration-200",
                    dropdown
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0",
                  )}
                >
                  <div className="grid grid-cols-2 gap-6 rounded-lg border border-hairline bg-white p-6 shadow-lg">
                    {serviceGroups.map((group) => (
                      <div key={group.id}>
                        <p className="font-display text-sm font-bold">{group.label}</p>
                        <ul className="mt-3 space-y-2.5">
                          {group.items.map((item, i) => (
                            <li key={i}>
                              <a
                                href="#layanan"
                                onClick={closeAll}
                                tabIndex={dropdown ? undefined : -1}
                                className="block text-sm leading-snug text-subtle transition-colors duration-200 hover:text-ink"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {nav
                .filter((item) => item.href !== "#layanan")
                .map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm text-subtle transition-colors duration-200 hover:bg-canvas hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button href={wa} external>
              WhatsApp
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-ink transition-colors duration-200 hover:bg-canvas md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Menu mobile — meluncur dari atas lewat `.collapsible` di index.css */}
      <div
        id="menu-mobile"
        data-open={open}
        aria-hidden={!open}
        className="collapsible border-t border-hairline bg-white md:hidden"
      >
        <div>
          <Container>
            <nav aria-label="Navigasi mobile" className="py-4">
              <ul className="flex flex-col">
                <li>
                  <button
                    type="button"
                    onClick={() => setMobileServices((v) => !v)}
                    aria-expanded={mobileServices}
                    tabIndex={open ? undefined : -1}
                    className="flex min-h-11 w-full cursor-pointer items-center justify-between rounded-lg px-2 text-base text-ink transition-colors duration-200 hover:bg-canvas"
                  >
                    Layanan
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        mobileServices && "rotate-180",
                      )}
                    />
                  </button>

                  <div data-open={mobileServices} className="collapsible">
                    <div>
                      <ul className="border-l border-hairline pl-4">
                        {serviceGroups.map((group) => (
                          <li key={group.id}>
                            <a
                              href="#layanan"
                              onClick={closeAll}
                              tabIndex={open && mobileServices ? undefined : -1}
                              className="flex min-h-11 items-center rounded-lg px-2 text-sm text-subtle transition-colors duration-200 hover:bg-canvas hover:text-ink"
                            >
                              {group.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {nav
                  .filter((item) => item.href !== "#layanan")
                  .map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={closeAll}
                        tabIndex={open ? undefined : -1}
                        className="flex min-h-11 items-center rounded-lg px-2 text-base text-ink transition-colors duration-200 hover:bg-canvas"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
