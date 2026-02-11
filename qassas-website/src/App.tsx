
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { DepthRadialNav } from "./components/layout/DepthRadialNav";
import { ScrollToHash } from "./components/routing/ScrollToHash";
import { useEffect } from "react"; // Add this
import { useTranslation } from "react-i18next"; // Add this
import { HomePage } from "./pages/HomePage";
import { WhitePaperPage } from "./pages/WhitePaperPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {

  const { i18n } = useTranslation();

  useEffect(() => {
    // Check if the current language is Arabic
    const isAr = i18n.language === "ar";
    
    // Set the HTML dir attribute (important for RTL layout)
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;

    // Toggle the Tajawal font class on the body
    if (isAr) {
      document.body.classList.add("font-arabic");
    } else {
      document.body.classList.remove("font-arabic");
    }
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <DepthRadialNav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/white-paper" element={<WhitePaperPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Convenience routes -> jump to sections */}
        <Route path="/roi" element={<Navigate to="/#roi" replace />} />
        <Route path="/technology" element={<Navigate to="/#technology" replace />} />
        <Route path="/solutions" element={<Navigate to="/#solutions" replace />} />
        <Route path="/case-studies" element={<Navigate to="/#case-studies" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
