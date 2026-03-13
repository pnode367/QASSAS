import { motion } from "framer-motion";
import { Leaf, Zap, VolumeX, Droplets, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ESGSection() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    const metrics = [
        { label: t("esg.metrics.disturbance")[0], val: t("esg.metrics.disturbance")[1], icon: Leaf },
        { label: t("esg.metrics.emissions")[0], val: t("esg.metrics.emissions")[1], icon: Zap },
        { label: t("esg.metrics.noise")[0], val: t("esg.metrics.noise")[1], icon: VolumeX },
        { label: t("esg.metrics.water")[0], val: t("esg.metrics.water")[1], icon: Droplets },
        { label: t("esg.metrics.compliance")[0], val: t("esg.metrics.compliance")[1], icon: CheckCircle },
    ];

    return (
        <section id="esg" className="py-24 border-t border-white/5 bg-space-black relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className={`container mx-auto px-6 relative z-10 ${isAr ? "text-right" : "text-left"}`}>
                <div className="max-w-3xl mb-16" dir={isAr ? "rtl" : "ltr"}>
                    <div className="flex items-center gap-2 font-mono text-green-500 text-sm tracking-widest uppercase mb-4">
                        <Leaf className="w-4 h-4" />
                        <span>[ GREEN_MINING_&_ESG ]</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                        {isAr ? "التعدين الأخضر" : "Green Mining"}
                    </h2>
                    <p className="text-xl text-white/60 leading-relaxed font-light">
                        {t("esg.intro")}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4" dir={isAr ? "rtl" : "ltr"}>
                    {metrics.map((m, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="hud-border hud-corner bg-white/5 border border-white/10 p-6 transition-all hover:bg-green-950/10 hover:border-green-500/20 group"
                        >
                            <m.icon className="w-6 h-6 text-green-500/50 mb-4 group-hover:text-green-500 transition-colors" />
                            <div className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-2">{m.label}</div>
                            <div className="text-white font-black text-2xl uppercase tracking-tighter">{m.val}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
