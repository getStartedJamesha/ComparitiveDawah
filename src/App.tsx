import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Concepts from "./pages/Concepts";
import ConceptDetail from "./pages/ConceptDetail";
import Religions from "./pages/Religions";
import ReligionDetail from "./pages/ReligionDetail";
import Contradictions from "./pages/Contradictions";
import Sources from "./pages/Sources";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="concepts" element={<Concepts />} />
          <Route path="concepts/:conceptId" element={<ConceptDetail />} />
          <Route path="religions" element={<Religions />} />
          <Route path="religions/:religionId" element={<ReligionDetail />} />
          <Route path="contradictions" element={<Contradictions />} />
          <Route path="sources" element={<Sources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
