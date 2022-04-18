import React, { useState, useEffect } from "react";
import LogInWrapper from "./Components/LogIn/LogInWrapper";
import NavBar from "./Components/Nav/NavBar";
import PrivateRoute from "./Components/utils/PrivateRoute";
import LogIn from "./Components/LogIn/LogIn";
import SignUp1 from "./Components/LogIn/SignUp1";
import SignUp2 from "./Components/LogIn/SignUp2";
import PasswordReset from "./Components/LogIn/PasswordReset";
import Home from "./Components/Home/Home";
import Upload from "./Components/Upload/Upload";
import { AuthProvider } from "./Components/utils/AuthContext";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Routes, Route } from "react-router-dom";

import "./Styles/App.scss";

import { Container } from "react-bootstrap";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Container fluid className="p-0 h-100 App">
      <NavBar />
      <AuthProvider value={currentUser}>
        <Routes>
          <Route
            path="/login"
            element={<LogInWrapper component={<LogIn />} />}
          />
          <Route
            path="/signup-1"
            element={<LogInWrapper component={<SignUp1 />} />}
          />
          <Route
            path="/signup-2"
            element={<LogInWrapper component={<SignUp2 />} />}
          />
          <Route
            path="/password-reset"
            element={<LogInWrapper component={<PasswordReset />} />}
          />
          <Route
            path="/upload"
            component={
              <PrivateRoute>
                <Upload />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            component={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Container>
  );
}

export default App;
