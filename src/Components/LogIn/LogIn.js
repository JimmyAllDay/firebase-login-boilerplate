import React from "react";

import { Link } from "react-router-dom";

import { Container, Form } from "react-bootstrap";

export default function LogIn({ emailHandler, passwordHandler }) {
  return (
    <Container fluid className="d-flex flex-column h-75">
      <h1 className="my-2 align-self-center">Log In</h1>
      <Form className="d-flex flex-column flex-grow-1 justify-content-evenly">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => emailHandler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => passwordHandler(e)}
          />
        </Form.Group>
        <p className="mx-auto" style={{ fontSize: "0.8em", margin: "0" }}>
          Don't have an account yet? Sign up{" "}
          <Link to="/signup-1">
            <span className="text-primary">here</span>
          </Link>
          .
        </p>

        <p className="mx-auto" style={{ fontSize: "0.8em", margin: "0" }}>
          Forgot password? Password reset{" "}
          <Link to="/password-reset">
            <span className="text-primary">here</span>
          </Link>
          .
        </p>
      </Form>
    </Container>
  );
}
