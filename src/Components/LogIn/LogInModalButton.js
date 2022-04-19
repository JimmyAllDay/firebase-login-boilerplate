import React from "react";

import { useLocation } from "react-router";

import { Container, Button } from "react-bootstrap";

export default function LogInModalButtons(props) {
  const path = useLocation().pathname;
  const { register, login, passwordReset } = props;

  const buttonHandler = (path) => {
    switch (path) {
      case "/signup":
        return register();
      case "/login":
        return login();
      case "/password-reset":
        return passwordReset();
      default:
        return null;
    }
  };

  const buttonLabel = {
    "/signup": "Sign Up",
    "/login": "Log In",
    "/password-reset": "Send Reset Email",
  };

  return (
    <Container fluid className="p-0 px-4 mt-auto mb-3 d-flex flex-column">
      <Button
        size="lg"
        className="mx-auto w-100"
        onClick={() => buttonHandler(path)}
      >
        <h5 className="mx-auto my-auto text-light">{buttonLabel[path]}</h5>
      </Button>
    </Container>
  );
}
