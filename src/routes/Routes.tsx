import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/HomePage/Home";
import Users from "../views/Users/Users";
import Contact from "../views/Contact/Contact";
import Sidebar from "../components/Sidebar";
import Login from "views/Login";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "views/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import Favorites from "../views/Favorites/Favorites";

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
