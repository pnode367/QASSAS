import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const navItems = [
    { label: t("nav.tech"), to: "/#technology" },
    { label: t("nav.solutions"), to: "/#solutions" },
    { label: t("nav.roi"), to: "/#roi" },
  ];

  const toggleLang = async () => {
    await i18n.changeLanguage(isAr ? "en" : "ar");
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-900/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold text-white tracking-wide">
          QASSAS<span className="text-brand-accent">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="text-slate-300 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}

          {/* Language toggle (label can be hardcoded; translations stay in JSON for site content) */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Languages className="w-4 h-4" />
            <span>{isAr ? "English" : "العربية"}</span>
          </button>

          {/* Routable CTA */}
          <Link to="/request-demo">
            <Button variant="primary" className="py-2 px-4 text-sm">
              {t("nav.demo")}
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden bg-brand-900 border-b border-white/10 py-4 px-6 space-y-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="block text-slate-300" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}

          <button onClick={toggleLang} className="w-full text-left text-slate-300 flex items-center gap-2">
            <Languages className="w-4 h-4" />
            <span>{isAr ? "English" : "العربية"}</span>
          </button>

          <Link to="/request-demo" onClick={() => setIsOpen(false)}>
            <Button className="w-full">{t("nav.demo")}</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
