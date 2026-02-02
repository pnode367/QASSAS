import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";

export function CTASection() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="py-24 border-t border-white/5 bg-space-black relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-gold-accent/10 via-transparent to-cyber-cyan/10" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          dir={isAr ? "rtl" : "ltr"}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`hud-border hud-corner bg-black/30 backdrop-blur border border-white/10 p-10 md:p-14 ${isAr ? "text-right" : "text-left"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            {t("ctaBlock.title")}
          </h2>
          <p className="text-white/60 mt-5 max-w-2xl leading-relaxed text-lg">
            {t("ctaBlock.desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button to="/white-paper" className="text-lg px-8">
              {t("cta.whitepaper")}
            </Button>
            <Button to="/contact" variant="outline" className="text-lg px-8">
              {t("cta.consult")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}