import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function CaseStudy() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="py-24 border-t border-white/5 bg-space-black" dir={isAr ? "rtl" : "ltr"}>
      <div className={`container mx-auto px-6 ${isAr ? "text-right" : "text-left"}`}>
        <div className="max-w-3xl">
          <div className="font-mono text-cyber-cyan text-sm tracking-widest uppercase">
            {t("caseStudy.tag")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mt-3">
            {t("caseStudy.title")}
          </h2>
          <p className="text-white/60 mt-6 leading-relaxed text-lg">
            {t("caseStudy.desc")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 hud-border hud-corner bg-white/5 border border-white/10 p-8 overflow-hidden"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider">{t("caseStudy.resultLabel")}</div>
              <div className="text-4xl font-black text-gold-accent mt-2">{t("caseStudy.resultVal")}</div>
              <div className="text-white/60 mt-2 font-medium">{t("caseStudy.resultDesc")}</div>
            </div>
            <div>
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider">{t("caseStudy.opLabel")}</div>
              <div className="text-4xl font-black text-gold-accent mt-2">{t("caseStudy.opVal")}</div>
              <div className="text-white/60 mt-2 font-medium">{t("caseStudy.opDesc")}</div>
            </div>
            <div>
              <div className="font-mono text-xs text-white/40 uppercase tracking-wider">{t("caseStudy.impactLabel")}</div>
              <div className="text-4xl font-black text-gold-accent mt-2">{t("caseStudy.impactVal")}</div>
              <div className="text-white/60 mt-2 font-medium">{t("caseStudy.impactDesc")}</div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-white/70 italic text-lg">
            {t("caseStudy.quote")}
            <span className="block mt-4 text-white/40 font-mono text-xs not-italic uppercase tracking-widest">
              {t("caseStudy.author")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}