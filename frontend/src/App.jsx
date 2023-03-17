import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Icc from "./pages/Agenda/Icc";
import VisiMisi from "./pages/about/VisiMisi";
import PesertaI from "./pages/Agenda/PesertaI";
import Protected from "./Protected";
import Society from "./pages/News/Society";
import Bhs from "./pages/News/Bhs";
import Duel from "./pages/News/Duel";
import OpenAi from "./pages/News/OpenAi";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="Icc" element={<Icc />} />
          <Route path="Icc/PesertaI" element={<PesertaI />} />
          <Route path="VisiMisi" element={<VisiMisi />} />
          <Route path="*" element={<Error />} />
          <Route path="Society" element={<Society />} />
          <Route path="Bhs" element={<Bhs />} />
          <Route path="Duel" element={<Duel />} />
          <Route path="OpenAi" element={<OpenAi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
