
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";

type NavLinksProps = {
  isAr: boolean;
  onToggleLang: () => void;
};

function NavLinks({ isAr, onToggleLang }: NavLinksProps) {
  const { t } = useTranslation();

  return (
    <>
      <Link to="/#technology" className="text-slate-300 hover:text-white transition-colors">
        {t("nav.tech")}
      </Link>
      <Link to="/#solutions" className="text-slate-300 hover:text-white transition-colors">
        {t("nav.solutions")}
      </Link>
      <Link to="/#case-studies" className="text-slate-300 hover:text-white transition-colors">
        {t("nav.caseStudies")}
      </Link>
      <Link to="/#about" className="text-slate-300 hover:text-white transition-colors">
        {t("nav.about")}
      </Link>
      <Link to="/white-paper" className="text-slate-300 hover:text-white transition-colors">
        {t("nav.whitepaper")}
      </Link>

      <button
        type="button"
        onClick={onToggleLang}
        className="text-slate-300 hover:text-white transition-colors font-medium"
      >
        {isAr ? "EN" : "العربية"}
      </button>

      <Button to="/contact" variant="primary" className="py-2 px-4 text-sm">
        {t("nav.demo")}
      </Button>
    </>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const location = useLocation();

  const isAr = i18n.language === "ar";

  // Update external system (document dir/lang)
  useEffect(() => {
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = isAr ? "ar" : "en";
  }, [isAr]);

  // Close mobile menu only when navigation happens
  useEffect(() => {
    if (isOpen) setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  const toggleLang = () => {
    i18n.changeLanguage(isAr ? "en" : "ar");
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-900/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold text-white tracking-wide">
          QASSAS<span className="text-brand-accent">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks isAr={isAr} onToggleLang={toggleLang} />
        </div>

        {/* Mobile toggle */}
        <button type="button" onClick={() => setIsOpen((v) => !v)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden bg-brand-900 border-b border-white/10 py-4 px-6 space-y-4">
          <div className="flex flex-col gap-4">
            <NavLinks isAr={isAr} onToggleLang={toggleLang} />
          </div>
        </div>
      )}
    </nav>
  );
}
