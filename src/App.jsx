import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./components/About";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
