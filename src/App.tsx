import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PenaltyKickProject from "./pages/PenaltyKickProject";
import CarmatesProject from "./pages/CarmatesProject";
import BinBotProject from "./pages/BinBotProject";
import SpectreProject from "./pages/SpectreProject";
import AspidaProject from "./pages/AspidaProject";
import SuncastProject from "./pages/SuncastProject";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/project/penalty-kick-prediction"
        element={<PenaltyKickProject />}
      />
      <Route path="/project/carmates-app" element={<CarmatesProject />} />
      <Route path="/project/binbot-recycling" element={<BinBotProject />} />
      <Route
        path="/project/spectre-music-classifier"
        element={<SpectreProject />}
      />
      <Route path="/project/aspida-ai-chatbot" element={<AspidaProject />} />
      <Route
        path="/project/duke-impact-investing-suncast"
        element={<SuncastProject />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
