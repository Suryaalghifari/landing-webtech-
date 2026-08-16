import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Mockup website yang digambar dengan CSS, bukan gambar asli.
 *
 * Alasannya: belum ada screenshot klien yang bisa dipakai, dan kotak abu-abu
 * kosong justru bikin halaman terasa mati. Mockup ini terbaca sebagai screenshot
 * sungguhan sehingga tata letaknya bisa dinilai sekarang, tapi tetap jujur
 * karena jelas bukan foto.
 *
 * Semua mockup digambar pada ukuran asli 1200×750 lalu diskalakan oleh
 * `ScaleToFit`. Tanpa itu, elemen yang dirancang untuk thumbnail akan terlihat
 * kekecilan begitu dipakai selebar satu section.
 *
 * GANTI dengan screenshot asli sebelum launching — `<BrowserFrame>` tinggal
 * diisi `<img>` menggantikan komponen mockup.
 */

const DESIGN_W = 1200;
const DESIGN_H = 750;

function ScaleToFit({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DESIGN_W);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale})`,
          // Sembunyikan sampai skala terukur, supaya tidak ada kedipan ukuran penuh
          visibility: scale ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function BrowserFrame({
  url = "contoh-klien.com",
  children,
  className,
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-hairline bg-white shadow-sm", className)}>
      <div className="flex items-center gap-1.5 border-b border-hairline bg-canvas px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-stone-300" />
        ))}
        <div className="ml-2 flex-1 truncate rounded border border-hairline bg-white px-2 py-0.5 text-[10px] text-stone-400">
          {url}
        </div>
      </div>

      <div className="aspect-16/10 overflow-hidden">{children}</div>
    </div>
  );
}

/** Balok abu-abu sebagai pengganti baris teks. */
function Bar({
  w,
  h = 16,
  tone = "bg-stone-200",
  className,
}: {
  w: number | string;
  h?: number;
  tone?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("rounded", tone, className)}
      style={{ width: typeof w === "number" ? w : w, height: h }}
    />
  );
}

/** Website modern: banyak ruang kosong, hierarki jelas, sedikit elemen. */
export function MockModern() {
  return (
    <ScaleToFit>
      <div className="flex h-full w-full flex-col bg-white">
        <div className="flex items-center justify-between border-b border-stone-200 px-14 py-7">
          <Bar w={150} h={22} tone="bg-stone-900" />
          <div className="flex items-center gap-9">
            <Bar w={70} h={12} />
            <Bar w={70} h={12} />
            <Bar w={70} h={12} />
            <div className="h-12 w-44 rounded-lg bg-stone-900" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-6 px-20 text-center">
          <Bar w={820} h={54} tone="bg-stone-900" />
          <Bar w={560} h={54} tone="bg-stone-900" />
          <div className="mt-3 flex flex-col items-center gap-4">
            <Bar w={700} h={16} />
            <Bar w={540} h={16} />
          </div>
          <div className="mt-6 flex gap-5">
            <div className="h-16 w-52 rounded-lg bg-stone-900" />
            <div className="h-16 w-52 rounded-lg border-2 border-stone-200" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 border-t border-stone-200 px-14 py-10">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-4 rounded-lg border border-stone-200 p-7">
              <div className="h-9 w-9 rounded-lg bg-stone-300" />
              <Bar w="100%" h={16} />
              <Bar w="65%" h={12} />
            </div>
          ))}
        </div>
      </div>
    </ScaleToFit>
  );
}

/**
 * Website lama yang khas: kolom padat, garis di mana-mana, banner mencolok,
 * teks kecil-kecil berdempetan. Sengaja dibikin sesak.
 */
export function MockDated() {
  return (
    <ScaleToFit>
      <div className="flex h-full w-full flex-col bg-stone-100 p-3">
        <div className="flex items-center justify-between border-4 border-stone-400 bg-stone-300 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-stone-500" />
            <div className="space-y-2">
              <Bar w={230} h={20} tone="bg-stone-600" />
              <Bar w={150} h={10} tone="bg-stone-500" />
            </div>
          </div>
          <Bar w={110} h={12} tone="bg-stone-500" />
        </div>

        <div className="flex gap-1 border-x-4 border-stone-400 bg-stone-400 px-2 py-1.5">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex h-8 flex-1 items-center justify-center bg-stone-200">
              <Bar w="60%" h={8} tone="bg-stone-500" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center border-x-4 border-stone-400 bg-stone-500 py-7">
          <Bar w={640} h={26} tone="bg-stone-200" />
        </div>

        <div className="flex flex-1 gap-3 border-4 border-t-0 border-stone-400 bg-white p-3">
          <div className="flex-1 space-y-2.5">
            <Bar w="70%" h={18} tone="bg-stone-500" />
            {Array.from({ length: 14 }).map((_, i) => (
              <Bar key={i} w={i % 4 === 3 ? "62%" : "100%"} h={9} tone="bg-stone-300" />
            ))}
          </div>

          <div className="w-1/3 space-y-2.5 border-l-4 border-stone-300 pl-3">
            <div className="h-24 w-full border-2 border-stone-400 bg-stone-200" />
            <div className="h-24 w-full border-2 border-stone-400 bg-stone-200" />
            {Array.from({ length: 7 }).map((_, i) => (
              <Bar key={i} w="100%" h={9} tone="bg-stone-300" />
            ))}
          </div>
        </div>

        <div className="flex justify-center border-4 border-t-0 border-stone-400 bg-stone-200 py-3">
          <Bar w={420} h={9} tone="bg-stone-400" />
        </div>
      </div>
    </ScaleToFit>
  );
}

/** Mockup dasbor analitik — dipakai untuk layanan SEO. */
export function MockDashboard() {
  const bars = [38, 46, 41, 58, 52, 67, 61, 79, 74, 92, 86, 100];

  return (
    <ScaleToFit>
      <div className="flex h-full w-full bg-white">
        <div className="w-56 space-y-5 border-r border-stone-200 bg-canvas p-7">
          <Bar w={110} h={20} tone="bg-stone-900" />
          <div className="space-y-4 pt-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded bg-stone-300" />
                <Bar w={i === 1 ? 110 : 90} h={12} tone={i === 1 ? "bg-stone-400" : "bg-stone-200"} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-6 p-9">
          <div className="grid grid-cols-3 gap-5">
            {["Klik", "Tayangan", "Posisi"].map((_, i) => (
              <div key={i} className="space-y-3 rounded-lg border border-stone-200 p-6">
                <Bar w="60%" h={11} />
                <Bar w="45%" h={30} tone="bg-stone-900" />
                <Bar w="35%" h={10} tone="bg-stone-300" />
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-stone-200 p-7">
            <Bar w={170} h={14} className="mb-6" />
            <div className="flex h-64 items-end gap-3">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 rounded-t",
                    i >= bars.length - 3 ? "bg-stone-900" : "bg-stone-300",
                  )}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaleToFit>
  );
}

/** Mockup laporan perawatan bulanan — dipakai untuk layanan maintenance. */
export function MockChecklist() {
  const rows = [
    "Backup harian",
    "Update plugin & tema",
    "Pemantauan uptime 24 jam",
    "Perpanjangan sertifikat SSL",
    "Laporan bulanan",
  ];

  return (
    <ScaleToFit>
      <div className="flex h-full w-full flex-col justify-center gap-5 bg-white px-14">
        <Bar w={280} h={24} tone="bg-stone-900" className="mb-3" />

        {rows.map((row) => (
          <div
            key={row}
            className="flex items-center gap-5 rounded-lg border border-stone-200 px-7 py-5"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 text-stone-900" aria-hidden="true">
              <path
                d="M20 6 9 17l-5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl text-stone-500">{row}</span>
            <Bar w={90} h={12} className="ml-auto" />
          </div>
        ))}
      </div>
    </ScaleToFit>
  );
}

/** Mockup tampilan ponsel — dipakai untuk layanan aplikasi. */
export function MockPhone() {
  return (
    <ScaleToFit>
      <div className="flex h-full w-full items-end justify-center bg-canvas">
        <div className="h-[86%] w-[330px] overflow-hidden rounded-t-[38px] border-8 border-b-0 border-stone-900 bg-white">
          <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-stone-900" />

          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <Bar w={90} h={16} tone="bg-stone-900" />
              <div className="h-8 w-8 rounded-full bg-stone-200" />
            </div>

            <Bar w="85%" h={26} tone="bg-stone-900" />
            <Bar w="100%" h={12} />

            <div className="h-36 w-full rounded-xl bg-stone-200" />

            <div className="grid grid-cols-2 gap-3">
              <div className="h-24 rounded-xl bg-stone-100" />
              <div className="h-24 rounded-xl bg-stone-100" />
            </div>

            <div className="h-14 w-full rounded-xl bg-stone-900" />
          </div>
        </div>
      </div>
    </ScaleToFit>
  );
}
