import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./component/detail/detail";
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
        <Route
          path="/videos"
          element={
            <Videos youtube={youtube} weatherService={weatherService}></Videos>
          }
        />
        <Route path="/videos/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
