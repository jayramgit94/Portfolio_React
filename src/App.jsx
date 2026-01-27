import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./components/About";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./pages/Home";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
