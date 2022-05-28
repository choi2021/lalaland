import { useState } from 'react';
import Router from './Router';

function App(props) {
  const [userObj, setUserObj] = useState({});
  return <Router userObj={userObj} setUserObj={setUserObj} {...props}></Router>;
}

export default App;
