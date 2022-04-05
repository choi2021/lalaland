import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Videos from "./pages/videos/videos";

function App({ weatherService, todoDB, youtube }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home weatherService={weatherService} todoDB={todoDB} />}
        />
        <Route path="/videos" element={<Videos youtube={youtube}></Videos>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
