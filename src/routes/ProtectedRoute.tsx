import React from "react";
import { Route,Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps}:any) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;