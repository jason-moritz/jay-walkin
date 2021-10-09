import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from "./services/Users";
import Home from "./screens/Home/Home"

export default function App() {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const fetchUser = async () => {
        const user = await verifyUser()
        user ? setUser(user) : setUser(null)
      }
      fetchUser()
    },[])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser} />
        </Route>
      </Switch>

    </div>
  );
}
