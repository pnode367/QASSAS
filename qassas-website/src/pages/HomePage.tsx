// import { useTranslation } from "react-i18next";
// import { Hero } from "../components/sections/Hero";
// import { ProblemSection } from "../components/sections/ProblemSection";
// import { RobotSpecs } from "../components/sections/RobotSpecs";
// import { ComparisonSection } from "../components/sections/ComparisonSection";
// import { ESGSection } from "../components/sections/ESGSection";
// import { CTASection } from "../components/sections/CTASection";
// import { Footer } from "../components/layout/Footer";
// import { motion } from "framer-motion";

// export function HomePage() {
//   const { t, i18n } = useTranslation();
//   const isAr = i18n.language === "ar";

//   return (
//     <main className="bg-space-black" dir={isAr ? "rtl" : "ltr"}>
//       <Hero />

//       <ProblemSection />

//       <RobotSpecs />

//       {/* Satellite Connection Section (Replaces old LayerSection flow) */}
//       <section id="satellite" className="py-24 border-t border-white/5 bg-space-black relative overflow-hidden">
//         <div className={`container mx-auto px-6 ${isAr ? "text-right" : "text-left"}`}>
//           <div className="max-w-3xl mb-16" dir={isAr ? "rtl" : "ltr"}>
//             <div className="font-mono text-cyber-cyan text-sm tracking-widest uppercase mb-4">[ SATELLITE_CONNECTION ]</div>
//             <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
//               {isAr ? "الربط بالفضاء" : "Satellite Connection"}
//             </h2>
//             <p className="text-xl text-white/60 leading-relaxed font-light">
//               {t("satellite.intro")}
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8" dir={isAr ? "rtl" : "ltr"}>
//             {Object.entries(t("satellite.layers", { returnObjects: true })).map(([key, layer]: [string, any], idx) => (
//               <motion.div
//                 key={key}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="hud-border hud-corner bg-white/5 border border-white/10 p-8 flex flex-col group hover:bg-white/10 transition-colors"
//               >
//                 <div className="text-gold-accent font-mono text-[10px] uppercase tracking-widest mb-4">
//                   {key.toUpperCase()} LAYER
//                 </div>
//                 <h3 className="text-white font-black text-2xl uppercase mb-4">{layer.title}</h3>
//                 <p className="text-white/50 mb-6">{layer.desc}</p>
//                 <div className="mt-auto pt-6 border-t border-white/10">
//                   <div className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-1">Result</div>
//                   <div className="text-cyber-cyan font-bold">{layer.result}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-16 p-8 bg-cyber-cyan/5 border border-cyber-cyan/20 rounded-xl" dir={isAr ? "rtl" : "ltr"}>
//             <p className="text-cyber-cyan text-lg md:text-xl font-medium text-center">
//               {t("satellite.closing")}
//             </p>
//           </div>
//         </div>
//       </section>

//       <ComparisonSection />

//       <ESGSection />

//       <CTASection />

//       <Footer />
//     </main>
//   );
// }
// HomePage.tsx
import { useTranslation } from "react-i18next";
import { Hero } from "../components/sections/Hero";
import { ProblemSection } from "../components/sections/ProblemSection";
import { RobotSpecs } from "../components/sections/RobotSpecs";
import { ComparisonSection } from "../components/sections/ComparisonSection";
import { ESGSection } from "../components/sections/ESGSection";
import { CTASection } from "../components/sections/CTASection";
import { Footer } from "../components/layout/Footer";
import { motion } from "framer-motion";

export function HomePage() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <main className="bg-space-black" dir={isAr ? "rtl" : "ltr"}>
      <Hero />

      <section id="problem">
        <ProblemSection />
      </section>

      <section id="robot-specs">
        <RobotSpecs />
      </section>

      <section
        id="satellite"
        className="relative overflow-hidden border-t border-white/5 bg-space-black py-24"
      >
        <div
          className={`container mx-auto px-6 ${isAr ? "text-right" : "text-left"}`}
        >
          <div className="mb-16 max-w-3xl" dir={isAr ? "rtl" : "ltr"}>
            <div className="mb-4 font-mono text-sm uppercase tracking-widest text-cyber-cyan">
              [ SATELLITE_CONNECTION ]
            </div>

            <h2 className="mb-8 text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl">
              {isAr ? "الربط بالفضاء" : "Satellite Connection"}
            </h2>

            <p className="text-xl font-light leading-relaxed text-white/60">
              {t("satellite.intro")}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3" dir={isAr ? "rtl" : "ltr"}>
            {Object.entries(
              t("satellite.layers", { returnObjects: true })
            ).map(([key, layer]: [string, any], idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="hud-border hud-corner group flex flex-col border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
              >
                <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-gold-accent">
                  {key.toUpperCase()} LAYER
                </div>

                <h3 className="mb-4 text-2xl font-black uppercase text-white">
                  {layer.title}
                </h3>

                <p className="mb-6 text-white/50">{layer.desc}</p>

                <div className="mt-auto border-t border-white/10 pt-6">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/30">
                    Result
                  </div>
                  <div className="font-bold text-cyber-cyan">{layer.result}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="mt-16 rounded-xl border border-cyber-cyan/20 bg-cyber-cyan/5 p-8"
            dir={isAr ? "rtl" : "ltr"}
          >
            <p className="text-center text-lg font-medium text-cyber-cyan md:text-xl">
              {t("satellite.closing")}
            </p>
          </div>
        </div>
      </section>

      <section id="comparison">
        <ComparisonSection />
      </section>

      <section id="esg">
        <ESGSection />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}