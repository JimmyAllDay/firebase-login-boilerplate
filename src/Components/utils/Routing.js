import React from "react";

import PrivateRoute from "./PrivateRoute";
import LogIn from "../LogIn/LogIn";
import SignUp from "../LogIn/SignUp";
import PasswordReset from "../LogIn/PasswordReset";
import Home from "../Home/Home";
import VerifyEmail from "../LogIn/VerifyEmail";
import Profile from "../Profile/Profile";
import NotFound from "./NotFound";
import LogInWrapper from "../LogIn/LogInWrapper";

import { Routes, Route } from "react-router-dom";

export default function Routing() {
  return (
    <Routes>
      <Route
        exact
        path="/login"
        element={<LogInWrapper component={<LogIn />} />}
      />
      <Route
        exact
        path="/signup"
        element={<LogInWrapper component={<SignUp />} />}
      />
      <Route
        exact
        path="/password-reset"
        element={<LogInWrapper component={<PasswordReset />} />}
      />
      <Route exact path="/verify-email" element={<VerifyEmail />} />

      <Route
        exact
        path="/user-profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        exact
        path="*"
        element={
          <PrivateRoute>
            <NotFound />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
