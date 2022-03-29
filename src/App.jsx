import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

function App({ weatherService, todoDB }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home weatherService={weatherService} todoDB={todoDB} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
