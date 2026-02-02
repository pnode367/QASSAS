import { useEffect, useRef, useState } from "react";

type Parallax = {
  mx: number; // mouse x (-1..1)
  my: number; // mouse y (-1..1)
  sy: number; // scroll y (0..1)
};

export function useParallaxHero() {
  const rafRef = useRef<number | null>(null);
  const [p, setP] = useState<Parallax>({ mx: 0, my: 0, sy: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setP((prev) => ({ ...prev, mx: nx, my: ny }));
      });
    };

    const onScroll = () => {
      const y = window.scrollY;
      const max = Math.max(1, window.innerHeight * 1.2);
      const sy = Math.min(1, Math.max(0, y / max));

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setP((prev) => ({ ...prev, sy }));
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return p;
}
