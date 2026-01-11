import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
