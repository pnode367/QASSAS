import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Satellite, Scan, Bot, Gem } from "lucide-react";
import { useTranslation } from "react-i18next";
import { RadialNav, type RadialNavItem } from "@/components/animate-ui/components/community/radial-nav";

const SECTION_BY_ID: Record<number, string> = {
  1: "orbit",
  2: "atmosphere",
  3: "surface",
  4: "abyss",
};

export function DepthRadialNav() {
  const { t, i18n } = useTranslation(); // Destructure i18n here
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Check if the current language is RTL (Arabic)
  const isRtl = i18n.dir() === "rtl";

  const items: RadialNavItem[] = useMemo(() => {
    // 2. Base angles for LTR
    const baseItems = [
      { id: 1, icon: Satellite, label: t("layers.01.title"), angle: 315 },
      { id: 2, icon: Scan,      label: t("layers.02.title"), angle: 45 },
      { id: 3, icon: Bot,       label: t("layers.03.title"), angle: 135 },
      { id: 4, icon: Gem,       label: t("layers.04.title"), angle: 225 },
    ];

    // 3. Mirror the angles if RTL (swaps left/right positions)
    if (isRtl) {
      return baseItems.map(item => ({
        ...item,
        angle: (360 - item.angle) % 360 // Mirrors along the vertical axis
      }));
    }
    return baseItems;
  }, [t, isRtl]);

  const [activeId, setActiveId] = useState<number>(1);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const ids = Object.values(SECTION_BY_ID);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target?.id) return;

        const found = Object.entries(SECTION_BY_ID).find(([, sid]) => sid === visible.target.id);
        if (found) setActiveId(Number(found[0]));
      },
      { root: null, threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: "-30% 0px -55% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  const goToSection = (id: number) => {
    const sectionId = SECTION_BY_ID[id];
    if (!sectionId) return;
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (location.pathname !== "/") return null;

  return (
    /* 4. Use dynamic positioning: 'right-6' for LTR, 'left-6' for RTL */
    <div className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:block ${isRtl ? 'left-6' : 'right-6'}`}>
      <div 
        dir={isRtl ? "rtl" : "ltr"} 
        className="hud-border hud-corner bg-black/30 backdrop-blur px-12 py-8 border border-white/10 w-fit min-w-70 flex items-center justify-center transition-all duration-500"
      >
        <RadialNav
          items={items}
          size={210}
          defaultActiveId={activeId}
          onActiveChange={(id) => {
            setActiveId(id);
            goToSection(id);
          }}
        />
      </div>
    </div>
  );
}