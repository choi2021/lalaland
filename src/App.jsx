import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./component/detail/detail";
import Home from "./pages/home/home";
import Login from "./pages/Login/login";
import Videos from "./pages/videos/videos";

function App({ weatherService, todoDB, youtube, auth }) {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login auth={auth} setUser={setUser}></Login>}
        ></Route>
        <Route
          path="/home"
          element={
            <Home weatherService={weatherService} todoDB={todoDB} user={user} />
          }
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
