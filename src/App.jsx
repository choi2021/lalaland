import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Router from './Router';

function App(props) {
  const [userObj, setUserObj] = useState(null);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    props.auth.observeChange((user) => {
      if (user) {
        setUserObj(user);
        setLogin(true);
      } else {
        navigate('/');
        setLogin(false);
      }
    });
  }, [props.auth, navigate]);

  return (
    <Router
      user={userObj}
      setUser={setUserObj}
      onLogin={login}
      {...props}
    ></Router>
  );
}

export default App;
