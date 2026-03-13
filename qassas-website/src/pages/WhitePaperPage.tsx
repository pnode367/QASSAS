import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/Button";
import { Footer } from "../components/layout/Footer";

export function WhitePaperPage() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <main className="pt-28 pb-24 bg-space-black min-h-screen" dir={isAr ? "rtl" : "ltr"}>
      <div className={`container mx-auto px-6 max-w-4xl ${isAr ? "text-right" : "text-left"}`}>
        <div className="font-mono text-cyber-cyan text-sm tracking-widest uppercase mb-4">
          [ QASSAS_WHITE_PAPER_V4.0 ]
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-12">
          {t("whitepaper.title")}
        </h1>

        <div className="space-y-16">
          {/* Buried Shield Section */}
          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-black text-gold-accent uppercase mb-4">
              {t("whitepaper.buriedShield.title")}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              {t("whitepaper.buriedShield.content")}
            </p>
          </section>

          {/* SGS Collaboration Section */}
          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-black text-gold-accent uppercase mb-4">
              {t("whitepaper.sgs.title")}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              {t("whitepaper.sgs.content")}
            </p>
          </section>

          {/* Vision 2030 Data Localization Section */}
          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl font-black text-gold-accent uppercase mb-4">
              {t("whitepaper.vision2030.title")}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              {t("whitepaper.vision2030.content")}
            </p>
          </section>
        </div>

        <div className="mt-20 p-10 hud-border hud-corner bg-white/5 border border-white/10">
          <h3 className="text-white font-bold text-xl uppercase mb-6">
            {isAr ? "جاهز للقراءة؟" : "Ready to Read?"}
          </h3>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button href="/whitepaper.pdf" className="text-lg px-10 py-5 font-black uppercase tracking-widest">
              {t("whitepaper.cta")}
            </Button>
            <Button to="/contact" variant="outline" className="text-lg px-10 py-5 font-black uppercase tracking-widest border-white/20">
              {t("ctaBlock.buttons.consultation")}
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
