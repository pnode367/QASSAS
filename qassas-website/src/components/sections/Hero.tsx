import { ArrowRight, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-900 overflow-hidden pt-20">
      {/* Background Abstract Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-light mb-8 backdrop-blur-sm border border-white/10">
            <Globe className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium">Next-Gen Mineral Exploration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Uncover Earth's Wealth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">
              From Space
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Qassas combines satellite imagery, AI, and autonomous robotics to reduce exploration costs by 50% and discovery time by 30%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg">Explore Technology</Button>
            <Button variant="outline" className="text-lg border-white text-white hover:bg-white/10">
              Calculate ROI
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}