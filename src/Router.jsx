import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Home from './pages/home/home';
import Videos from './pages/videos/videos';
import Detail from './component/detail/detail';
import Photos from './pages/photos/photos';

function Router({ weatherService, todoDB, youtube, auth, user, setUserObj }) {
  return (
    <Routes>
      <Route
        path='/login'
        element={<Login auth={auth} setUserObj={setUserObj}></Login>}
      ></Route>
      <Route
        path='/'
        element={
          <Home weatherService={weatherService} todoDB={todoDB} user={user} />
        }
      />
      <Route
        path='/videos'
        element={
          <Videos youtube={youtube} weatherService={weatherService}></Videos>
        }
      />
      <Route path='/videos/:id' element={<Detail></Detail>}></Route>
      <Route
        path='/photos'
        element={<Photos weatherService={weatherService}></Photos>}
      ></Route>
    </Routes>
  );
}

export default Router;
