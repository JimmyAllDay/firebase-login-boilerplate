import React from "react";

import { Link } from "react-router-dom";

import { Container, Form } from "react-bootstrap";

import { useAuthValue } from "../../utils/AuthContext";

import { Navigate } from "react-router-dom";

export default function LogIn({ emailHandler, passwordHandler, resetText }) {
  const { currentUser } = useAuthValue();

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container fluid className="d-flex flex-column h-75">
      <h1 className="my-2 align-self-center" data-testid="login-h1">
        Log In
      </h1>
      <Form className="d-flex flex-column flex-grow-1 justify-content-evenly">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => emailHandler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => passwordHandler(e)}
          />
        </Form.Group>
        <p
          className="mx-auto"
          style={{ fontSize: "0.8em", margin: "0" }}
          data-testid="sign-up-text"
        >
          Don't have an account yet? Sign up{" "}
          <Link to="/signup" data-testid="sign-up-link">
            <span className="text-primary">here</span>
          </Link>
          .
        </p>
        {resetText}
      </Form>
    </Container>
  );
}
