import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TechShowcase } from './components/sections/TechShowcase';
import { ROICalculator } from './components/sections/ROICalculator';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechShowcase />
      <ROICalculator />
      
      {/* Footer Placeholder */}
      <footer className="bg-brand-900 text-slate-400 py-12 text-center border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Qassas Exploration Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;