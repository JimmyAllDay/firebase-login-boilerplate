import React, { useState, useEffect } from "react";
import LogInWrapper from "./Components/LogIn/LogInWrapper";
import NavBar from "./Components/Nav/NavBar";
import PrivateRoute from "./Components/utils/PrivateRoute";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/LogIn/SignUp";
import PasswordReset from "./Components/LogIn/PasswordReset";
import Home from "./Components/Home/Home";
import Upload from "./Components/Upload/Upload";
import VerifyEmail from "./Components/LogIn/VerifyEmail";
import Profile from "./Components/Profile/Profile";
import NotFound from "./Components/utils/NotFound";

import { AuthProvider } from "./Components/utils/AuthContext";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Routes, Route } from "react-router-dom";

import "./Styles/App.scss";

import { Container } from "react-bootstrap";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Container fluid className="p-0 h-100 App">
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <NavBar />
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
            path="/upload"
            element={
              <PrivateRoute>
                <Upload />
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
      </AuthProvider>
    </Container>
  );
}

export default App;
