import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-900/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-display font-bold text-white tracking-wide">
          QASSAS<span className="text-brand-accent">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Technology</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors">Solutions</a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors">About</a>
          <Button variant="primary" className="py-2 px-4 text-sm">Contact Sales</Button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-900 border-b border-white/10 py-4 px-6 space-y-4">
          <a href="#" className="block text-slate-300">Technology</a>
          <a href="#" className="block text-slate-300">Solutions</a>
          <a href="#" className="block text-slate-300">About</a>
          <Button className="w-full">Contact Sales</Button>
        </div>
      )}
    </nav>
  );
}