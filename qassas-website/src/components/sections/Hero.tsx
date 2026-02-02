
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";
import { useParallaxHero } from "../../hooks/useParallaxHero";

function formatTime(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
export function Hero() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const { mx, my, sy } = useParallaxHero();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const drift = useMemo(() => {
    const seconds = Math.floor(now.getTime() / 1000);
    return {
      lat: (24.7136 + Math.sin(seconds / 7) * 0.0016).toFixed(4),
      lon: (46.6753 + Math.cos(seconds / 11) * 0.0011).toFixed(4),
    };
  }, [now]);

  return (
    <section className="relative min-h-[95vh] pt-20 overflow-hidden bg-space-black flex items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70 scale-[1.05]"
        autoPlay muted loop playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_70%,rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-brand-900/20 via-transparent to-space-black" />

      {/* HUD: Top Bar */}
      <div className="absolute top-8 left-8 right-8 z-30 hidden md:flex justify-between font-mono text-[10px] text-cyber-cyan/70 uppercase tracking-[0.2em]">
        <div className={`flex gap-4 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
          <span className="text-white font-black">QASSAS // LIVE_FEED</span>
          <span className="opacity-40">LAT: {drift.lat}N</span>
          <span className="opacity-40">LON: {drift.lon}E</span>
        </div>
        <div className={`flex gap-4 ${isAr ? "flex-row-reverse" : "flex-row"}`}>
          <span className="opacity-40">ALT: {Math.max(0, Math.round(400 - sy * 400))}KM</span>
          <span className="text-white font-black">[{formatTime(now)}]</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-8">
        <div 
          dir={isAr ? "rtl" : "ltr"}
          className={`max-w-4xl transition-all duration-700 ${
            isAr 
              ? "mr-0 ml-auto text-right md:pr-32" 
              : "ml-0 mr-auto text-left md:pl-32"
          }`}
        >
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`inline-flex items-center gap-3 px-4 py-1.5 bg-cyber-cyan/10 backdrop-blur-sm ${
              isAr ? "border-r-2 border-cyber-cyan" : "border-l-2 border-cyber-cyan"
            }`}
          >
            <span className="font-mono text-[11px] font-black uppercase tracking-[0.3em] text-cyber-cyan">
              {t("hero.pre")}
            </span>
          </motion.div>

          {/* Title Block */}
          <motion.div
            style={{ x: mx * 10, y: my * 6 - sy * 10 }}
            className="mt-10"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
              {t("hero.title")}
            </h1>
            
            <div className="mt-4 text-2xl md:text-4xl font-black text-gold-accent uppercase italic tracking-tight">
              {t("hero.sub")}
            </div>

            <p className="mt-8 text-white/80 text-xl md:text-2xl font-bold leading-snug max-w-2xl">
              {t("hero.desc")}
            </p>

            {/* CTAs - Correctly Composed for RTL */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Button
                to="/#orbit"
                className="text-xl px-12 py-7 font-black uppercase tracking-widest shadow-[0_0_40px_rgba(0,212,255,0.25)]"
              >
                {t("hero.cta")}
              </Button>
              <Button
                to="/white-paper"
                variant="outline"
                className="text-xl px-12 py-7 font-black uppercase tracking-widest border-white/20 hover:bg-white/5"
              >
                {t("hero.whitepaperCta")}
              </Button>
            </div>
          </motion.div>

          {/* Scroll Hint */}
          <div className="mt-20 flex items-center gap-4 font-mono text-[10px] font-bold text-white/40 tracking-[0.4em]">
            <div className="h-[1px] w-12 bg-white/20" />
            <span>SCROLL_TO_DESCEND</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-cyber-cyan"
            >
              ▼
            </motion.span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-space-black" />
    </section>
  );
}