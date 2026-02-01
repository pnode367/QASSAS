import { Navbar } from "../components/layout/Navbar";
import { useTranslation } from "react-i18next";

export function RequestDemoPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-space-black">
      <Navbar />

      <div className="container mx-auto px-6 pt-28 pb-20 text-white">
        <h1 className="text-5xl font-black uppercase tracking-tighter">{t("demo.title")}</h1>
        <p className="text-white/60 mt-4 max-w-2xl">{t("demo.desc")}</p>

        <form className="mt-10 hud-border hud-corner p-6 bg-white/5 grid md:grid-cols-2 gap-4">
          <input className="p-3 bg-black/40 border border-white/10 rounded text-white" placeholder={t("forms.fullname")} />
          <input className="p-3 bg-black/40 border border-white/10 rounded text-white" placeholder={t("forms.company")} />
          <input className="p-3 bg-black/40 border border-white/10 rounded text-white md:col-span-2" placeholder={t("forms.email")} />

          <select className="p-3 bg-black/40 border border-white/10 rounded text-white md:col-span-2">
            <option value="">{t("forms.interest")}</option>
            <option value="b2b">{t("forms.interest_b2b")}</option>
            <option value="g2g">{t("forms.interest_g2g")}</option>
            <option value="licensing">{t("forms.interest_licensing")}</option>
            <option value="investment">{t("forms.interest_investment")}</option>
            <option value="other">{t("forms.interest_other")}</option>
          </select>

          <textarea
            className="p-3 bg-black/40 border border-white/10 rounded text-white md:col-span-2"
            rows={5}
            placeholder={t("forms.message")}
          />

          <button type="button" className="md:col-span-2 px-6 py-3 bg-gold-accent text-black font-bold rounded-lg">
            {t("demo.submitMock")}
          </button>
        </form>
      </div>
    </div>
  );
}
