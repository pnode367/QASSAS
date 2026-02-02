import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/Button";

export function ContactPage() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [sent, setSent] = useState(false);

  return (
    <main className="pt-32 pb-24 bg-space-black min-h-screen" dir={isAr ? "rtl" : "ltr"}>
      <div className={`container mx-auto px-6 max-w-2xl ${isAr ? "text-right" : "text-left"}`}>
        <div className="font-mono text-cyber-cyan text-sm tracking-widest uppercase">{t("demo.title")}</div>
        <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mt-3">
          {t("nav.demo")}
        </h1>

        <p className="text-white/60 mt-6 text-lg leading-relaxed">
          {t("demo.desc")}
        </p>

        <div className="mt-12 hud-border hud-corner bg-white/5 border border-white/10 p-10">
          {sent ? (
            <div className="py-10 text-center">
              <div className="text-gold-accent font-black text-3xl uppercase tracking-widest">Done</div>
              <p className="text-white/60 mt-4 text-lg">We will contact you shortly.</p>
              <div className="mt-10">
                <Button to="/" variant="outline" className="px-10">Back to Home</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <input className={`w-full bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white focus:border-cyber-cyan outline-none transition-colors ${isAr ? "text-right" : "text-left"}`}
                placeholder={t("forms.fullname")} required />
              
              <input className={`w-full bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white focus:border-cyber-cyan outline-none transition-colors ${isAr ? "text-right" : "text-left"}`}
                placeholder={t("forms.company")} required />
              
              <input className={`w-full bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white focus:border-cyber-cyan outline-none transition-colors ${isAr ? "text-right" : "text-left"}`}
                placeholder={t("forms.email")} type="email" required />

              <select className={`w-full bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white focus:border-cyber-cyan outline-none transition-colors appearance-none ${isAr ? "text-right" : "text-left"}`} required>
                <option value="" className="bg-space-black">{t("forms.interest")}</option>
                <option className="bg-space-black">{t("forms.interest_b2b")}</option>
                <option className="bg-space-black">{t("forms.interest_g2g")}</option>
                <option className="bg-space-black">{t("forms.interest_licensing")}</option>
                <option className="bg-space-black">{t("forms.interest_investment")}</option>
                <option className="bg-space-black">{t("forms.interest_other")}</option>
              </select>

              <textarea className={`w-full bg-black/40 border border-white/10 rounded-sm px-5 py-4 text-white min-h-[160px] focus:border-cyber-cyan outline-none transition-colors ${isAr ? "text-right" : "text-left"}`}
                placeholder={t("forms.message")} />

              <Button type="submit" className="w-full text-xl py-8 font-black uppercase tracking-widest">
                {t("demo.submitMock")}
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}