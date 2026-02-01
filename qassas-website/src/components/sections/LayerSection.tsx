import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Props {
  id: string;
  layerKey: string;
  image: string;
  reverse?: boolean;
}

export function LayerSection({ id, layerKey, image, reverse }: Props) {
  const { t } = useTranslation();

  return (
    <section id={id} className="min-h-screen flex items-center bg-space-black relative py-20 border-b border-white/5">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className={reverse ? "md:order-2" : "md:order-1"}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-cyber-cyan mb-2 text-sm">{t(`layers.${layerKey}.tag`)}</div>
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter text-white">
            {t(`layers.${layerKey}.title`)}
          </h2>
          <p className="text-xl text-white/50 mb-8 leading-relaxed">{t(`layers.${layerKey}.desc`)}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="hud-border hud-corner p-4 bg-white/5">
              <div className="text-gold-accent font-bold">{t(`layers.${layerKey}.stat1`)}</div>
            </div>
            <div className="hud-border hud-corner p-4 bg-white/5">
              <div className="text-gold-accent font-bold">{t(`layers.${layerKey}.stat2`)}</div>
            </div>
          </div>
        </motion.div>

        <div className={`relative group ${reverse ? "md:order-1" : "md:order-2"}`}>
          <div className="scanline" />
          <img
            src={image}
            className="rounded-sm opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border border-white/10"
            alt="Tech Visualization"
          />
          <div className="absolute top-4 right-4 font-mono text-[10px] bg-black/50 p-2 text-cyber-cyan border border-cyber-cyan/30">
            SYSTEM_REF: Q-2026 // LIVE_FEED
          </div>
        </div>
      </div>
    </section>
  );
}
