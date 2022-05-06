import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/home/home";
import Videos from "./pages/videos/videos";
import Detail from "./component/detail/detail";

function Router({ weatherService, todoDB, youtube, auth, user, setUser }) {
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

export default Router;
