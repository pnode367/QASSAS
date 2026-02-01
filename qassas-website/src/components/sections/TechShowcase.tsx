import { useState } from 'react';
import { Satellite, Scan, Cpu, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'satellite',
    title: 'Satellite Analysis',
    icon: Satellite,
    description: 'Hyperspectral imaging identifies mineral signatures from orbit with 98% accuracy.',
    stats: ['10,000 sq km/day', '98% Accuracy']
  },
  {
    id: 'drone',
    title: 'Drone Surveying',
    icon: Scan,
    description: 'Autonomous drone swarms conduct low-altitude magnetic and radiometric surveys.',
    stats: ['5cm Resolution', 'Fully Autonomous']
  },
  {
    id: 'ai',
    title: 'AI Prediction',
    icon: Cpu,
    description: 'Proprietary algorithms fuse geological data to pinpoint drilling targets.',
    stats: ['30% Faster', 'Data-Driven']
  }
];

export function TechShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 bg-white" id="technology">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">Our Technology Stack</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A vertically integrated exploration platform designed for the modern mining era.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Tabs Navigation */}
          <div className="md:col-span-4 space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`w-full flex items-center p-4 rounded-xl transition-all duration-300 text-left border ${
                  activeTab.id === tab.id
                    ? 'border-brand-accent bg-brand-accent/5 shadow-lg scale-105'
                    : 'border-slate-100 hover:border-slate-300 bg-white'
                }`}
              >
                <div className={`p-3 rounded-lg mr-4 ${
                  activeTab.id === tab.id ? 'bg-brand-accent text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  <tab.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-semibold ${activeTab.id === tab.id ? 'text-brand-900' : 'text-slate-500'}`}>
                    {tab.title}
                  </h3>
                </div>
                {activeTab.id === tab.id && <ChevronRight className="ml-auto text-brand-accent" />}
              </button>
            ))}
          </div>

          {/* Visual Content Area */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-brand-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px]" />
                
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <activeTab.icon className="w-8 h-8 text-brand-accent" />
                  {activeTab.title}
                </h3>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  {activeTab.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {activeTab.stats.map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/10">
                      <p className="text-brand-accent font-bold text-lg">{stat}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}