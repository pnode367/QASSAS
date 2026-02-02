import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Hero } from "../components/sections/Hero";
import { LayerSection } from "../components/sections/LayerSection";
import { WhyQassas } from "../components/sections/WhyQassas";
import { CaseStudy } from "../components/sections/CaseStudy";
import { CTASection } from "../components/sections/CTASection";
import { Footer } from "../components/layout/Footer";
import { ROICalculator } from "../components/sections/ROICalculator";

export function HomePage() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const location = useLocation();

  // Scroll to hash
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  // Dynamic Data for Command Snapshot
  const stats = [
    { label: t("snapshot.stats.coverage"), value: "500,000" },
    { label: t("snapshot.stats.bands"), value: "256" },
    { label: t("snapshot.stats.detection"), value: "<10 ppm" },
    { label: t("snapshot.stats.autonomy"), value: "24/7" },
  ];

  const feeds = [
    { time: "09:12:05", msg: t("snapshot.feed.m1"), status: "ok" },
    { time: "09:12:22", msg: t("snapshot.feed.m2"), status: "ok" },
    { time: "09:13:10", msg: t("snapshot.feed.m3"), status: "warn" },
    { time: "09:14:02", msg: t("snapshot.feed.m4"), status: "ok" },
    { time: "09:15:20", msg: t("snapshot.feed.m5"), status: "ok" },
  ];

  return (
    <main className="pt-20 bg-space-black" dir={isAr ? "rtl" : "ltr"}>
      <Hero />
      
      {/* Command Snapshot Section */}
      <section className="py-16 border-t border-white/5 bg-space-black">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Stats Panel */}
          <div className={`lg:col-span-7 hud-border hud-corner bg-white/5 border border-white/10 p-8 ${isAr ? "text-right" : "text-left"}`}>
            <div className="font-mono text-cyber-cyan text-sm tracking-widest uppercase">
              {t("snapshot.title_pre")}
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mt-3">
              {t("snapshot.title")}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-black/30 border border-white/10 rounded-xl p-5">
                  <div className="text-white/40 font-mono text-[11px] uppercase tracking-wider">{s.label}</div>
                  <div className="text-2xl md:text-3xl font-black text-gold-accent mt-2">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-white/60">
              <div className="font-mono text-cyber-cyan text-xs tracking-widest uppercase mb-2">
                {t("snapshot.testimonial.label")}
              </div>
              <p className="mt-3 leading-relaxed italic text-lg text-white/80">
                “{t("snapshot.testimonial.quote")}”
              </p>
              <div className="mt-3 text-white/40 font-mono text-xs uppercase tracking-wider">
                {t("snapshot.testimonial.author")}
              </div>
            </div>
          </div>

          {/* Live Feed Panel */}
          <div className={`lg:col-span-5 hud-border hud-corner bg-white/5 border border-white/10 p-8 ${isAr ? "text-right" : "text-left"}`}>
            <div className="font-mono text-cyber-cyan text-sm tracking-widest uppercase">
              {t("snapshot.feed.title")}
            </div>
            <div className="mt-6 space-y-3">
              {feeds.map((f, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 items-start bg-black/30 border border-white/10 rounded-xl p-4 transition-colors hover:bg-white/5"
                >
                  <div className="font-mono text-[11px] text-white/40 min-w-16 pt-0.5">{f.time}</div>
                  <div className="text-white/70 text-sm leading-snug font-mono">{f.msg}</div>
                  <div
                    className={`ms-auto font-mono text-[10px] px-2 py-1 rounded-lg border uppercase tracking-wider font-bold ${
                      f.status === "warn"
                        ? "text-gold-accent border-gold-accent/30 bg-gold-accent/10"
                        : "text-cyber-cyan border-cyber-cyan/30 bg-cyber-cyan/10"
                    }`}
                  >
                    {f.status === "warn" ? "ALERT" : "OK"}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-white/30 font-mono text-[10px] italic">
              {t("snapshot.feed.note")}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Solutions anchor */}
      <section id="about" className="py-24 border-t border-white/5">
        <div className={`container mx-auto px-6 max-w-4xl ${isAr ? "text-right" : "text-left"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            {t("mission.title")}
          </h2>
          <p className="text-white/60 mt-6 text-lg leading-relaxed">
            {t("mission.body")}
          </p>
        </div>
      </section>

      {/* Tech stack layers */}
      <div id="technology">
        <LayerSection id="orbit" layerKey="01" image="/assets/layer-orbit.png" />
        <LayerSection id="atmosphere" layerKey="02" image="/assets/layer-atmosphere.png" reverse />
        <LayerSection id="surface" layerKey="03" image="/assets/layer-surface.png" />
        <LayerSection id="abyss" layerKey="04" image="/assets/layer-abyss.png" reverse />
      </div>

      {/* ROI */}
      <ROICalculator />

      <section id="solutions">
        <WhyQassas />
      </section>

      <section id="case-studies">
        <CaseStudy />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}