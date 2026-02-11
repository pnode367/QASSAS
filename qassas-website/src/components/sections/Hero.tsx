
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
    
    // Use a deterministic "pseudo-random" value based on the current second
    // or just call Math.random() here since useMemo isolates it from the render loop.
    const randomIntegrity = 98 + (Math.abs(Math.sin(seconds)) * 1.98);
  
    return {
      lat: (24.7136 + Math.sin(seconds / 7) * 0.0016).toFixed(4),
      lon: (46.6753 + Math.cos(seconds / 11) * 0.0011).toFixed(4),
      integrity: randomIntegrity.toFixed(2), // Consistent for this specific 'now'
    };
  }, [now]); // Only recalculates when 'now' changes

  return (
    <section className="relative min-h-[95vh] pt-20 overflow-hidden bg-space-black flex items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-[1.05]"
        autoPlay muted loop playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Grid Overlay for Tech Look */}
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* HUD: Top Bar */}
      <div className={`absolute top-8 left-8 right-8 z-30 hidden md:flex justify-between font-mono text-[10px] text-cyber-cyan/70 uppercase tracking-[0.2em] ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex gap-6 items-center ${isAr ? "flex-row-reverse" : "flex-row"}`}>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
            </span>
            <span className="text-white font-black">QASSAS // {t("hero.hud.live")}</span>
          </div>
          <span className="opacity-40">LAT: {drift.lat}N</span>
          <span className="opacity-40">LON: {drift.lon}E</span>
        </div>
        <div className={`flex gap-6 items-center ${isAr ? "flex-row-reverse" : "flex-row"}`}>
          <span className="opacity-40">ALT: {Math.max(0, Math.round(400 - sy * 400))}KM</span>
          <span className="text-white font-black">[{formatTime(now)}]</span>
        </div>
      </div>

      {/* HUD: Side Data (Explainable Tech Data) */}
      <div className={`absolute bottom-24 z-30 hidden xl:block font-mono ${isAr ? 'left-12 text-left' : 'right-12 text-right'}`}>
        <div className="space-y-4">
          <div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">{t("hero.hud.status")}</div>
            <div className="text-cyber-cyan font-black text-xs">ENCRYPTED // LOCAL_HOST</div>
          </div>
          <div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">{t("hero.hud.integrity")}</div>
            <div className="text-gold-accent font-black text-xs">{drift.integrity}.98%</div>
          </div>
          <div className={`h-px w-24 bg-white/10 ${isAr ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`} />
          <div className="text-[9px] text-white/20 max-w-37.5 leading-tight">
            {t("hero.hud.disclaimer")}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8">
        <div 
          dir={isAr ? "rtl" : "ltr"}
          className={`max-w-4xl transition-all duration-700 ${
            isAr ? "mr-0 ml-auto text-right md:pr-16 lg:pr-32" : "ml-0 mr-auto text-left md:pl-16 lg:pl-32"
          }`}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`inline-flex items-center gap-3 px-4 py-1.5 bg-cyber-cyan/10 backdrop-blur-md border-y border-white/10 ${
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
            <h1 className="text-6xl md:text-[7rem] font-black text-white uppercase tracking-tighter leading-[0.8] drop-shadow-2xl">
              {t("hero.title")}
            </h1>
            
            <div className="mt-6 flex items-center gap-4">
               <div className="h-0.5 w-12 bg-gold-accent/50" />
               <div className="text-2xl md:text-4xl font-black text-gold-accent uppercase italic tracking-tight">
                {t("hero.sub")}
              </div>
            </div>

            <p className="mt-8 text-white/70 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl">
              {t("hero.desc")}
            </p>

            {/* Explainer Specs (Dummy Tech Data) */}
            <div className={`mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 ${isAr ? 'text-right' : 'text-left'}`}>
               <div>
                  <div className="text-cyber-cyan font-mono text-[10px] uppercase tracking-widest">{t("hero.spec.01_label")}</div>
                  <div className="text-white font-black text-lg">{t("hero.spec.01_val")}</div>
               </div>
               <div>
                  <div className="text-cyber-cyan font-mono text-[10px] uppercase tracking-widest">{t("hero.spec.02_label")}</div>
                  <div className="text-white font-black text-lg">{t("hero.spec.02_val")}</div>
               </div>
               <div className="hidden sm:block">
                  <div className="text-cyber-cyan font-mono text-[10px] uppercase tracking-widest">{t("hero.spec.03_label")}</div>
                  <div className="text-white font-black text-lg">{t("hero.spec.03_val")}</div>
               </div>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Button
                to="/#orbit"
                className="text-lg px-10 py-6 font-black uppercase tracking-widest shadow-[0_0_50px_rgba(0,212,255,0.2)]"
              >
                {t("hero.cta")}
              </Button>
              <Button
                to="/white-paper"
                variant="outline"
                className="text-lg px-10 py-6 font-black uppercase tracking-widest border-white/20 hover:bg-white/10 backdrop-blur-sm"
              >
                {t("hero.whitepaperCta")}
              </Button>
            </div>
          </motion.div>

          {/* Scroll Hint */}
          <div className="mt-24 flex items-center gap-4 font-mono text-[10px] font-bold text-white/30 tracking-[0.4em]">
            <div className="h-px w-12 bg-white/10" />
            <span>{t("hero.scroll")}</span>
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