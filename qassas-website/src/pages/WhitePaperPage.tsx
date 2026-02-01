import { Navbar } from "../components/layout/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function WhitePaperPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-space-black">
      <Navbar />

      <div className="container mx-auto px-6 pt-28 pb-20 text-white">
        <h1 className="text-5xl font-black uppercase tracking-tighter">{t("whitepaper.title")}</h1>
        <p className="text-white/60 mt-4 max-w-2xl">{t("whitepaper.desc")}</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div className="hud-border hud-corner p-6 bg-white/5">
            <div className="text-cyber-cyan font-mono text-sm">{t("whitepaper.previewTitle")}</div>
            <ul className="list-disc pl-5 mt-4 text-white/70 space-y-2">
              <li>{t("whitepaper.b1")}</li>
              <li>{t("whitepaper.b2")}</li>
              <li>{t("whitepaper.b3")}</li>
            </ul>
          </div>

          <div className="hud-border hud-corner p-6 bg-white/5">
            <div className="text-cyber-cyan font-mono text-sm">{t("whitepaper.formTitle")}</div>

            <form className="mt-4 space-y-3">
              <input
                className="w-full p-3 bg-black/40 border border-white/10 rounded text-white"
                placeholder={t("forms.fullname")}
              />
              <input
                className="w-full p-3 bg-black/40 border border-white/10 rounded text-white"
                placeholder={t("forms.email")}
              />

              <button type="button" className="w-full px-6 py-3 bg-gold-accent text-black font-bold rounded-lg">
                {t("whitepaper.downloadMock")}
              </button>
            </form>

            <div className="mt-6">
              <Link to="/request-demo">
                <Button variant="outline" className="w-full">
                  {t("cta.consult")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/#technology" className="text-cyber-cyan font-mono text-sm">
            {t("whitepaper.backToTech")}
          </Link>
        </div>
      </div>
    </div>
  );
}
