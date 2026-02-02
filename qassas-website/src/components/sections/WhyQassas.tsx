import { motion } from "framer-motion";
import { Shield, Target, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export function WhyQassas() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const pillars = [
    {
      icon: Target,
      title: t("layers.02.title"), // Mapping to Aerial Precision logic
      desc: t("layers.02.desc"),
      stat: t("layers.02.stat2"),
    },
    {
      icon: Shield,
      title: t("layers.03.title"), // Mapping to Ground Robotics logic
      desc: t("layers.03.desc"),
      stat: t("layers.03.stat1"),
    },
    {
      icon: Leaf,
      title: t("layers.04.title"), // Mapping to Subsurface logic
      desc: t("layers.04.desc"),
      stat: t("layers.04.stat1"),
    },
  ];

  return (
    <section className="py-24 border-t border-white/5 bg-space-black">
      <div className={`container mx-auto px-6 ${isAr ? "text-right" : "text-left"}`}>
        <div className="max-w-3xl" dir={isAr ? "rtl" : "ltr"}>
          <div className="font-mono text-cyber-cyan text-sm tracking-widest">[ QASSAS_ADVANTAGE ]</div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mt-3">
            {t("mission.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12" dir={isAr ? "rtl" : "ltr"}>
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`hud-border hud-corner bg-white/5 border border-white/10 p-8 ${isAr ? "border-r-2" : "border-l-2"} border-white/10`}
            >
              <p.icon className={`w-8 h-8 text-gold-accent ${isAr ? "mr-0" : "ml-0"}`} />
              <h3 className="text-white font-black text-xl mt-6 uppercase">{p.title}</h3>
              <p className="text-white/60 mt-4 leading-relaxed">{p.desc}</p>
              <div className="mt-8 font-mono text-[11px] text-cyber-cyan font-bold tracking-wider">
                {p.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}