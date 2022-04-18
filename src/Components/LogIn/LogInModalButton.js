import React from "react";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { Container, Button } from "react-bootstrap";

export default function LogInModalButtons(props) {
  const path = useLocation().pathname;
  const {
    // firstName,
    // lastName,
    email,
    password,
    firebaseLogin,
    firebaseRegister,
    sendPasswordReset,
  } = props;

  const buttonHandler = (path) => {
    switch (path) {
      case "/signup-2":
        return firebaseRegister(email, password);
      case "/login":
        return firebaseLogin(email, password);
      case "/password-reset":
        return sendPasswordReset(email);
      default:
        return null;
    }
  };

  const buttonLabel = {
    "/signup-2": "Sign Up",
    "/signup-1": "Next",
    "/login": "Log In",
    "/password-reset": "Send Reset Email",
  };

  return (
    <Container fluid className="p-0 px-4 mt-auto mb-3 d-flex flex-column">
      <Link to={path === "/signup-1" && "/signup-2"}>
        <Button
          size="lg"
          className="mx-auto w-100"
          onClick={() => buttonHandler(path)}
        >
          <h5 className="mx-auto my-auto text-light">{buttonLabel[path]}</h5>
        </Button>
      </Link>
    </Container>
  );
}
