import { Routes, Route, Navigate } from "react-router-dom";
import { ScrollToHash } from "./components/routing/ScrollToHash";
import { DirManager } from "./components/routing/DirManager";

import { HomePage } from "./pages/HomePage";
import { WhitePaperPage } from "./pages/WhitePaperPage";
import { RequestDemoPage } from "./pages/RequestDemoPage";

export default function App() {
  return (
    <>
      <DirManager />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/white-paper" element={<WhitePaperPage />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />

        {/* Optional convenience routes */}
        <Route path="/roi" element={<Navigate to="/#roi" replace />} />
        <Route path="/technology" element={<Navigate to="/#technology" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
