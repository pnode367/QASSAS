import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { LayerSection } from "../components/sections/LayerSection";
import { ROICalculator } from "../components/sections/ROICalculator";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="selection:bg-gold-accent selection:text-black">
      <Navbar />

      <main>
        <section id="top">
          <Hero />
        </section>

        {/* MISSION / ABOUT */}
        <section id="solutions" className="py-24 bg-space-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{t("mission.title")}</h2>
            <p className="text-white/60 mt-6 max-w-3xl leading-relaxed">{t("mission.body")}</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/white-paper">
                <Button>{t("cta.whitepaper")}</Button>
              </Link>
              <Link to="/request-demo">
                <Button variant="outline">{t("cta.consult")}</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY LAYERS */}
        <section id="technology">
          <LayerSection id="orbit" layerKey="01" image="/assets/layer-orbit.png" />
          <LayerSection id="atmosphere" layerKey="02" image="/assets/layer-atmosphere.png" reverse />
          <LayerSection id="surface" layerKey="03" image="/assets/layer-surface.png" />
          <LayerSection id="abyss" layerKey="04" image="/assets/layer-abyss.png" reverse />
        </section>

        {/* ROI */}
        <ROICalculator />

        {/* CTA / CONTACT */}
        <section id="contact" className="py-24 bg-space-black border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{t("ctaBlock.title")}</h2>
            <p className="text-white/60 mt-3 max-w-2xl">{t("ctaBlock.desc")}</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/white-paper">
                <Button>{t("cta.whitepaper")}</Button>
              </Link>
              <Link to="/request-demo">
                <Button variant="outline">{t("cta.consult")}</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-space-black py-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-white/40 font-mono text-xs">
          <div>
            <div className="text-white text-xl font-black mb-4">QASSAS ◆</div>
            <p>{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="text-white mb-4">{t("footer.locationTitle")}</h4>
            <p>{t("footer.locationLine1")}</p>
            <p>{t("footer.locationLine2")}</p>
          </div>
          <div>
            <h4 className="text-white mb-4">{t("footer.sovereignTitle")}</h4>
            <p>{t("footer.sovereignLine1")}</p>
            <p>{t("footer.sovereignLine2")}</p>
          </div>
          <div>
            <h4 className="text-white mb-4">{t("footer.contactTitle")}</h4>
            <p className="text-gold-accent">{t("footer.contactEmail")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
