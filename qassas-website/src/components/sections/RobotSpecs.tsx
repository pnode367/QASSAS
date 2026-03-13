import { motion } from "framer-motion";
import { Cpu, Shield, Thermometer, Map, Database, Share2, Compass, Battery, Radio, Zap, Target, Search, Eye, Wifi } from "lucide-react";
import { useTranslation } from "react-i18next";

export function RobotSpecs() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    const specs = [
        { label: isAr ? "نوع الحركة" : "Mobility", value: t("solution.specs.mobility"), icon: Cpu },
        { label: isAr ? "الحماية" : "Protection", value: t("solution.specs.protection"), icon: Shield },
        { label: isAr ? "تحمّل الحرارة" : "Thermal Tolerance", value: t("solution.specs.thermal"), icon: Thermometer },
        { label: isAr ? "المدى اليومي" : "Daily Range", value: t("solution.specs.range"), icon: Map },
        { label: isAr ? "جمع البيانات" : "Data Collection", value: t("solution.specs.data"), icon: Database },
        { label: isAr ? "الاتصالات" : "Connectivity", value: t("solution.specs.connectivity"), icon: Share2 },
        { label: isAr ? "الملاحة" : "Navigation", value: t("solution.specs.navigation"), icon: Compass },
        { label: isAr ? "البطارية" : "Battery", value: t("solution.specs.battery"), icon: Battery },
    ];

    const sensors = [
        { ...t("solution.sensors.lidar", { returnObjects: true }), icon: Radio },
        { ...t("solution.sensors.pxrf", { returnObjects: true }), icon: Zap },
        { ...t("solution.sensors.libs", { returnObjects: true }), icon: Target },
        { ...t("solution.sensors.hyperspectral", { returnObjects: true }), icon: Eye },
        { ...t("solution.sensors.rtk", { returnObjects: true }), icon: Search },
        { ...t("solution.sensors.5g", { returnObjects: true }), icon: Wifi },
    ];

    return (
        <section id="robot" className="py-24 border-t border-white/5 bg-space-black relative">
            <div className={`container mx-auto px-6 ${isAr ? "text-right" : "text-left"}`}>
                <div className="max-w-3xl mb-16" dir={isAr ? "rtl" : "ltr"}>
                    <div className="font-mono text-cyber-cyan text-sm tracking-widest uppercase mb-4">[ QASSAS_ROBOT_CORE ]</div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                        {isAr ? "روبوت قصّاص" : "QASSAS Robot"}
                    </h2>
                    <p className="text-xl text-white/60 leading-relaxed font-light">
                        {t("solution.intro")}
                    </p>
                </div>

                {/* Technical Specifications Grid */}
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
                    {isAr ? "المواصفات التقنية" : "Technical Specifications"}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24" dir={isAr ? "rtl" : "ltr"}>
                    {specs.map((s, idx) => (
                        <div key={idx} className="hud-border hud-corner bg-white/5 border border-white/10 p-6 flex flex-col gap-4">
                            <s.icon className="w-6 h-6 text-cyber-cyan/50" />
                            <div>
                                <div className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-1">{s.label}</div>
                                <div className="text-white font-bold text-sm tracking-tight">{s.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sensor Array Section */}
                <div className="mb-12" dir={isAr ? "rtl" : "ltr"}>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                        {isAr ? "أجهزة الاستشعار" : "Sensor Array"}
                    </h3>
                    <p className="text-white/50 max-w-2xl">
                        {t("solution.sensors.intro")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" dir={isAr ? "rtl" : "ltr"}>
                    {sensors.map((s: any, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="hud-border hud-corner bg-white/5 border border-white/10 p-8 flex gap-6 group hover:bg-white/10 transition-colors"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-cyber-cyan/20 group-hover:border-cyber-cyan/40 transition-colors">
                                <s.icon className="w-6 h-6 text-cyber-cyan" />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-lg uppercase mb-1">{s.name}</h4>
                                <div className="text-gold-accent font-mono text-[10px] uppercase tracking-widest mb-3">{s.func}</div>
                                <p className="text-white/40 text-sm leading-relaxed">{s.benefit}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
