import { useState } from "react";
import Router from "./Router";

function App(props) {
  const [user, setUser] = useState();

  return <Router user={user} setUser={setUser} {...props}></Router>;
}

export default App;
