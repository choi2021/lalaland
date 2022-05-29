import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Router from './Router';

function App(props) {
  const [userObj, setUserObj] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    props.auth.observeChange((user) => {
      if (user) {
        setUserObj(user);
        navigate('/');
      } else {
        navigate('/login');
      }
    });
  }, [props.auth, navigate]);

  return <Router user={userObj} setUser={setUserObj} {...props}></Router>;
}

export default App;
