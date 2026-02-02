import { useTranslation } from "react-i18next";

export function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <footer className="bg-space-black py-20 border-t border-white/5" dir={isAr ? "rtl" : "ltr"}>
      <div className={`container mx-auto px-6 grid md:grid-cols-4 gap-12 text-white/40 font-mono text-xs ${isAr ? "text-right" : "text-left"}`}>
        <div>
          <div className="text-white text-2xl font-black mb-4 tracking-tighter">QASSAS ◆</div>
          <p className="text-white/60 italic">{t("footer.tagline")}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">{t("footer.locationTitle")}</h4>
          <p>{t("footer.locationLine1")}</p>
          <p>{t("footer.locationLine2")}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">{t("footer.sovereignTitle")}</h4>
          <p>{t("footer.sovereignLine1")}</p>
          <p>{t("footer.sovereignLine2")}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase">{t("footer.contactTitle")}</h4>
          <p className="text-gold-accent font-bold text-sm">{t("footer.contactEmail")}</p>
        </div>
      </div>
    </footer>
  );
}