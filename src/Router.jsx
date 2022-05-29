import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Home from './pages/home/home';
import Videos from './pages/videos/videos';
import Detail from './component/detail/detail';
import Photos from './pages/photos/photos';

function Router({
  weatherService,
  todoDB,
  youtube,
  auth,
  user,
  setUserObj,
  onLogin,
}) {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Login auth={auth} setUserObj={setUserObj} onLogin={onLogin}></Login>
        }
      ></Route>
      <Route
        path='/home'
        element={
          <Home
            weatherService={weatherService}
            todoDB={todoDB}
            user={user}
            onLogin={onLogin}
          />
        }
      />
      <Route
        path='/videos'
        element={
          <Videos
            youtube={youtube}
            weatherService={weatherService}
            onLogin={onLogin}
          ></Videos>
        }
      />
      <Route path='/videos/:id' element={<Detail></Detail>}></Route>
      <Route
        path='/photos'
        element={
          <Photos weatherService={weatherService} onLogin={onLogin}></Photos>
        }
      ></Route>
    </Routes>
  );
}

export default Router;
