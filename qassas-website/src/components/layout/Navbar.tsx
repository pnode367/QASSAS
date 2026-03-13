// Navbar.tsx
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
      <Link
        to="/#problem"
        className="text-slate-300 transition-colors hover:text-white"
      >
        {t("nav.problem")}
      </Link>

      <Link
        to="/#robot-specs"
        className="text-slate-300 transition-colors hover:text-white"
      >
        {t("nav.robotSpecs")}
      </Link>

      <Link
        to="/#satellite"
        className="text-slate-300 transition-colors hover:text-white"
      >
        {t("nav.satellite")}
      </Link>

      <Link
        to="/#comparison"
        className="text-slate-300 transition-colors hover:text-white"
      >
        {t("nav.comparison")}
      </Link>

      <Link
        to="/#esg"
        className="text-slate-300 transition-colors hover:text-white"
      >
        {t("nav.esg")}
      </Link>

      <Link
        to="/white-paper"
        className="text-slate-300 transition-colors hover:text-white"
      >
        {t("nav.whitepaper")}
      </Link>

      <button
        type="button"
        onClick={onToggleLang}
        className="font-medium text-slate-300 transition-colors hover:text-white"
      >
        {isAr ? "EN" : "العربية"}
      </button>

      <Button to="/contact" variant="primary" className="px-4 py-2 text-sm">
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

  useEffect(() => {
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = isAr ? "ar" : "en";
  }, [isAr]);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname, location.hash]);

  const toggleLang = () => {
    i18n.changeLanguage(isAr ? "en" : "ar");
  };

  return (
    <nav className="fixed z-50 w-full border-b border-white/10 bg-brand-900/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-2xl font-bold tracking-wide text-white"
        >
          QASSAS<span className="text-brand-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLinks isAr={isAr} onToggleLang={toggleLang} />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-4 border-b border-white/10 bg-brand-900 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLinks isAr={isAr} onToggleLang={toggleLang} />
          </div>
        </div>
      )}
    </nav>
  );
}