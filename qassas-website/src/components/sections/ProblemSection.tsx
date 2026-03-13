import { motion } from "framer-motion";
import { AlertCircle, Clock, DollarSign, ShieldAlert, XCircle, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ProblemSection() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    const metrics = [
        {
            icon: Clock,
            title: t("problem.metrics.discovery.title"),
            detail: t("problem.metrics.discovery.detail"),
            color: "text-red-400"
        },
        {
            icon: DollarSign,
            title: t("problem.metrics.cost.title"),
            detail: t("problem.metrics.cost.detail"),
            color: "text-red-500"
        },
        {
            icon: ShieldAlert,
            title: t("problem.metrics.risk.title"),
            detail: t("problem.metrics.risk.detail"),
            color: "text-orange-500"
        },
        {
            icon: XCircle,
            title: t("problem.metrics.failure.title"),
            detail: t("problem.metrics.failure.detail"),
            color: "text-red-600"
        },
        {
            icon: Leaf,
            title: t("problem.metrics.environment.title"),
            detail: t("problem.metrics.environment.detail"),
            color: "text-red-400"
        }
    ];

    return (
        <section id="problem" className="py-24 border-t border-white/5 bg-space-black relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

            <div className={`container mx-auto px-6 relative z-10 ${isAr ? "text-right" : "text-left"}`}>
                <div className="max-w-3xl mb-16" dir={isAr ? "rtl" : "ltr"}>
                    <div className="flex items-center gap-2 font-mono text-red-500 text-sm tracking-widest uppercase mb-4">
                        <AlertCircle className="w-4 h-4" />
                        <span>[ THE_CHALLENGE ]</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                        {isAr ? "المشكلة" : "The Problem"}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                        {t("problem.description")}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" dir={isAr ? "rtl" : "ltr"}>
                    {metrics.map((m, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="hud-border hud-corner bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group"
                        >
                            <m.icon className={`w-10 h-10 ${m.color} mb-6 transition-transform group-hover:scale-110`} />
                            <h3 className="text-white font-black text-xl uppercase mb-3 tracking-tight">{m.title}</h3>
                            <p className="text-white/40 font-mono text-sm uppercase tracking-wider">{m.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
