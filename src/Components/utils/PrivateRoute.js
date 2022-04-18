import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser;
  console.log(user);
  // const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
