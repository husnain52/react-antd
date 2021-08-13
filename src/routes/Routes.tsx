import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/home/Home";
import Users from "../views/users/Users";
import Contact from "../views/contact/Contact";
import Sidebar from "../components/Sidebar";
import Login from "../views/noauth/Login";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../views/noauth/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import Favorites from "../views/favorites/Favorites";
import NOTFOUND from "./NOTFOUND";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/sign-up" exact>
          <Signup />
        </Route>
        <Sidebar>
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedRoute path="/users" component={Users} />
          <ProtectedRoute path="/contact-us" component={Contact} />
          <ProtectedRoute path="/favorites" component={Favorites} />
        </Sidebar>
      </Switch>
    </Router>
  );
}
