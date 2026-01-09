import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </LanguageProvider>
  );
}
