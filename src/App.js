import React, { useState } from "react";
import LogInModal from "./Components/LogIn/LogInModal";
import NavBar from "./Components/Nav/NavBar";

import "./Styles/App.scss";

import { Container } from "react-bootstrap";

function App() {
  const [authed] = useState(true);
  return (
    <Container fluid className="p-0 h-100 App">
      <NavBar authed={authed} />
      {!authed && <LogInModal />}
    </Container>
  );
}

export default App;
