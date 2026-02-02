import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
  layerKey: string;
  image: string;
  reverse?: boolean;
}

export function LayerSection({ id, layerKey, image, reverse }: Props) {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // Helper to safely get the specs array if your i18n setup returns objects,
  // otherwise we use discrete keys in the JSON below for safety.
  const specs = [
    t(`layers.${layerKey}.spec1`),
    t(`layers.${layerKey}.spec2`),
    t(`layers.${layerKey}.spec3`),
  ];

  return (
    <section id={id} className="min-h-screen flex items-center bg-space-black relative py-20 border-b border-white/5" dir={isAr ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          className={reverse ? "md:order-2" : "md:order-1"}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyber-cyan text-sm tracking-widest uppercase">
              {t(`layers.${layerKey}.tag`)}
            </span>
            <div className="h-[1px] bg-cyber-cyan/30 flex-grow max-w-[50px]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white leading-none">
            {t(`layers.${layerKey}.title`)}
          </h2>
          
          <p className="text-lg md:text-xl text-white/50 mb-8 leading-relaxed font-light">
            {t(`layers.${layerKey}.desc`)}
          </p>

          {/* New Specs List */}
          <div className="mb-8 flex flex-wrap gap-3">
            {specs.map((spec, idx) => (
              <span key={idx} className="px-3 py-1 border border-white/10 bg-white/5 rounded-full text-xs font-mono text-white/60 uppercase tracking-wider">
                {spec}
              </span>
            ))}
          </div>

          {/* Stats Grid (Expanded to 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="hud-border hud-corner p-4 bg-white/5">
              <div className="text-xs text-white/30 font-mono mb-1 uppercase tracking-widest">{t("common.capacity")}</div>
              <div className="text-gold-accent font-bold text-lg">{t(`layers.${layerKey}.stat1`)}</div>
            </div>
            <div className="hud-border hud-corner p-4 bg-white/5">
              <div className="text-xs text-white/30 font-mono mb-1 uppercase tracking-widest">{t("common.resolution")}</div>
              <div className="text-gold-accent font-bold text-lg">{t(`layers.${layerKey}.stat2`)}</div>
            </div>
            <div className="hud-border hud-corner p-4 bg-white/5">
              <div className="text-xs text-white/30 font-mono mb-1 uppercase tracking-widest">{t("common.latency")}</div>
              <div className="text-gold-accent font-bold text-lg">{t(`layers.${layerKey}.stat3`)}</div>
            </div>
          </div>
        </motion.div>

        {/* Image / Visualization */}
        <div className={`relative group ${reverse ? "md:order-1" : "md:order-2"}`}>
          <div className="scanline" />
          <img
            src={image}
            className="rounded-sm opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border border-white/10 w-full h-auto object-cover"
            alt="Tech Visualization"
          />
          
          {/* Dynamic Overlay */}
          <div className={`absolute top-4 ${isAr ? 'left-4' : 'right-4'} font-mono text-[10px] bg-black/80 p-2 text-cyber-cyan border border-cyber-cyan/30 backdrop-blur-sm`}>
            {t(`layers.${layerKey}.sysRef`)} // LIVE_FEED
          </div>
          
          {/* Decorative Corner Elements */}
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold-accent"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold-accent"></div>
        </div>
      </div>
    </section>
  );
}