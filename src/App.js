import React, { useState, useEffect } from "react";

import NavBar from "./Components/Nav/NavBar";
import { AuthProvider } from "./Components/utils/AuthContext";
import Routing from "./Components/utils/Routing";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

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
        <Routing />
      </AuthProvider>
    </Container>
  );
}

export default App;
