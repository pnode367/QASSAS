import { useTranslation } from "react-i18next";

export function ComparisonSection() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    const rows = [
        t("comparison.rows.duration", { returnObjects: true }),
        t("comparison.rows.teams", { returnObjects: true }),
        t("comparison.rows.success", { returnObjects: true }),
        t("comparison.rows.fuel", { returnObjects: true }),
        t("comparison.rows.decision", { returnObjects: true }),
        t("comparison.rows.impact", { returnObjects: true }),
    ];

    return (
        <section id="comparison" className="py-24 border-t border-white/5 bg-space-black relative overflow-hidden">
            <div className={`container mx-auto px-6 relative z-10 ${isAr ? "text-right" : "text-left"}`}>
                <div className="max-w-3xl mb-16" dir={isAr ? "rtl" : "ltr"}>
                    <div className="font-mono text-cyber-cyan text-sm tracking-widest uppercase mb-4">[ TRADITIONAL_VS_QASSAS ]</div>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                        {isAr ? "المقارنة" : "The Comparison"}
                    </h2>
                </div>

                <div className="overflow-x-auto" dir={isAr ? "rtl" : "ltr"}>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className={`py-6 px-4 text-white/30 font-mono text-xs uppercase tracking-widest ${isAr ? "text-right" : "text-left"}`}>
                                    {t("comparison.metric")}
                                </th>
                                <th className={`py-6 px-4 text-white/30 font-mono text-xs uppercase tracking-widest ${isAr ? "text-right" : "text-left"}`}>
                                    {t("comparison.traditional")}
                                </th>
                                <th className={`py-6 px-4 text-cyber-cyan font-mono text-xs uppercase tracking-widest ${isAr ? "text-right" : "text-left"}`}>
                                    {t("comparison.qassas")}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {rows.map((row: any, idx) => (
                                <tr key={idx} className="group hover:bg-white/5 transition-colors">
                                    <td className={`py-6 px-4 text-white font-bold uppercase tracking-tight ${isAr ? "text-right" : "text-left"}`}>
                                        {row[0]}
                                    </td>
                                    <td className={`py-6 px-4 text-white/40 font-mono text-sm ${isAr ? "text-right" : "text-left"}`}>
                                        {row[1]}
                                    </td>
                                    <td className={`py-6 px-4 text-gold-accent font-black text-lg ${isAr ? "text-right" : "text-left"}`}>
                                        <div className="flex items-center gap-3">
                                            {idx === 2 ? (
                                                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                                            ) : null}
                                            {row[2]}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
