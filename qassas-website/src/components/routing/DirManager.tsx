import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function DirManager() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isAr = i18n.language === "ar";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.lang = isAr ? "ar" : "en";
  }, [i18n.language]);

  return null;
}
