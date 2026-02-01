import { useState } from "react";
import { useTranslation } from "react-i18next";

export function ROICalculator() {
  const { t } = useTranslation();
  const [drillingDepth, setDrillingDepth] = useState(1000);

  const traditionalCost = drillingDepth * 250;
  const qassasCost = traditionalCost * 0.5;

  return (
    <section id="roi" className="py-24 bg-space-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{t("roi.title")}</h2>
          <p className="text-cyber-cyan font-mono text-sm mt-2">[ ANALYSIS_MODULE: READY ]</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hud-border hud-corner p-8 bg-white/5 backdrop-blur-md">
            <label className="block font-mono text-xs text-white/60 mb-4 uppercase">
              {t("roi.drillingLabel")}
            </label>

            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={drillingDepth}
              onChange={(e) => setDrillingDepth(Number(e.target.value))}
              className="w-full h-2 bg-deep-navy rounded-lg appearance-none cursor-pointer accent-gold-accent mb-6"
            />

            <div className="text-5xl font-black text-white font-mono">{drillingDepth}m</div>
          </div>

          <div className="grid gap-4">
            <div className="p-6 bg-white/5 border-l-4 border-white/20">
              <div className="text-xs font-mono text-white/40 mb-1">{t("roi.traditional")}</div>
              <div className="text-2xl font-bold text-white/80">${traditionalCost.toLocaleString()}</div>
            </div>

            <div className="p-6 bg-gold-accent/10 border-l-4 border-gold-accent animate-pulse">
              <div className="text-xs font-mono text-gold-accent mb-1">{t("roi.optimized")}</div>
              <div className="text-4xl font-black text-gold-accent">${qassasCost.toLocaleString()}</div>
              <div className="text-[10px] font-mono mt-2 text-gold-accent/60">{t("roi.note")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
