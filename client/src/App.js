import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default const App = () => {
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
        
      </Switch>

    </div>
  );
}
