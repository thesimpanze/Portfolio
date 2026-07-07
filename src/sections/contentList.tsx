import { useEffect, useRef, useState } from "react";

const WORD = "WORKS.";

// Daftar font yang akan dipakai saat animasi scroll
const FONTS = [
  '"Host Grotesk", sans-serif',
  '"Playfair Display", serif',
  '"Copse", serif',
  '"Archivo Black", sans-serif',
  '"Inter", sans-serif',
  '"Montenegrin Gothic One", sans-serif',
];

const ContentList = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [fontMap, setFontMap] = useState<Map<number, string>>(new Map());
  const [isCentered, setIsCentered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const checkCentered = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const elemCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    setIsCentered(Math.abs(elemCenter - viewportCenter) < 80);
  };

  const startAnimation = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      const count = Math.floor(Math.random() * 3) + 1;
      const newMap = new Map<number, string>();
      const usedIndices = new Set<number>();
      while (usedIndices.size < count) {
        const idx = Math.floor(Math.random() * WORD.length);
        if (!usedIndices.has(idx)) {
          usedIndices.add(idx);
          // Pilih font acak (bukan index 0 karena itu adalah font default)
          const font = FONTS[Math.floor(Math.random() * (FONTS.length - 1)) + 1];
          newMap.set(idx, font);
        }
      }
      setFontMap(newMap);
    }, 70);
  };

  // Hentikan animasi font random
  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setFontMap(new Map()); // kembali ke font default (Host Grotesk) semua
  };

  useEffect(() => {
    const handleScroll = () => {
      checkCentered();

      // Jika sudah di tengah, hentikan animasi
      if (isCentered) {
        stopAnimation();
        return;
      }

      // Mulai animasi saat scroll
      startAnimation();

      // Hentikan animasi 300ms setelah scroll berhenti
      // if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      // scrollTimerRef.current = setTimeout(() => {
      //   stopAnimation();
      // }, 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      stopAnimation();
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [isCentered]);

  return (
    <div className="h-[100vh] bg-primary">
      <div className="flex font-grotesk justify-center items-center gap-10 h-full text-white text-center font-black relative">
        <h1 ref={ref} className="text-9xl tracking-tight flex">
          {WORD.split("").map((char, i) => (
            <span
              key={i}
              style={{
                fontFamily:
                  isCentered || !fontMap.has(i)
                    ? '"Host Grotesk", sans-serif'
                    : fontMap.get(i)!,
                display: "inline-block",
              }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default ContentList;
