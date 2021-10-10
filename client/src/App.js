import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import ChangePassword from "./screens/ChangePassword/ChangePassword";
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductCreate from "./screens/ProductCreate/ProductCreate";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import { ToastContainer } from "react-toastify";


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
        <Route exact path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route exact path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route exact path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/change-password">
          <ChangePassword user={user} setUser={setUser} />
        </Route>
        <Route exact path="/">
          <Home user={user} setUser={setUser} />
        </Route>
        <Route exact path="/products">
          <Products user={user} />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail user={user} />
        </Route>
        <Route exact path="/add-product">
          {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/products/:id/edit">
          {user ? <ProductEdit user={user} /> : <Redirect to="/sign-up" />}
        </Route>
      </Switch>
      <ToastContainer />


    </div>
  );
}
