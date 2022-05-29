import React from "react";

import PrivateRoute from "./PrivateRoute";
import LogIn from "../Authentication/LogIn/LogIn";
import SignUp from "../Authentication/SignUp/SignUp";
import PasswordReset from "../Authentication/PasswordReset/PasswordReset";
import Home from "../Home/Home";
import VerifyEmail from "../Authentication/VerifyEmail/VerifyEmail";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import LogInWrapper from "../Authentication/LoginWrapper/LogInWrapper";

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
