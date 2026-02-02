// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export function ScrollToHash() {
//   const { hash, pathname } = useLocation();

//   useEffect(() => {
//     if (!hash) return;

//     requestAnimationFrame(() => {
//       const id = hash.replace("#", "");
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//     });
//   }, [hash, pathname]);

//   return null;
// }
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);

  return null;
}