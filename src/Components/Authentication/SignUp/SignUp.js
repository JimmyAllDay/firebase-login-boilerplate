import React from "react";

import { Link } from "react-router-dom";

import { Container, Form } from "react-bootstrap";

export default function SignUp({
  emailHandler,
  passwordHandler,
  confirmPasswordHandler,
  resetText,
}) {
  return (
    <Container fluid className="d-flex flex-column h-75">
      <h1 className="my-2 align-self-center" data-testid="signup-h1">
        Sign Up
      </h1>
      <Form className="d-flex flex-column flex-grow-1 justify-content-evenly">
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => emailHandler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => passwordHandler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formConfirmBasicEmail">
          <Form.Control
            type="password"
            placeholder="Re-enter password"
            onChange={(e) => confirmPasswordHandler(e)}
          />
        </Form.Group>
        <p className="mx-auto" style={{ fontSize: "0.8em" }}>
          Already have an account? Log in{" "}
          <Link to="/login">
            <span className="text-primary">here</span>
          </Link>
          .
        </p>
        {resetText}
      </Form>
    </Container>
  );
}
