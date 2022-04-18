import React from "react";

import { Link } from "react-router-dom";

import { Container, Form } from "react-bootstrap";

export default function SignUp2(props) {
  const { emailHandler, passwordHandler1 } = props;

  return (
    <Container fluid className="d-flex flex-column h-75">
      <Form className="d-flex flex-column flex-grow-1 justify-content-evenly">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          {/* <Form.Label>Email</Form.Label> */}
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => emailHandler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword1">
          {/* <Form.Label>Enter password</Form.Label> */}
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword2">
          {/* <Form.Label>Re-enter password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Re-enter password"
            onChange={(e) => passwordHandler1(e)}
          />
        </Form.Group>
        <p className="mx-auto mt-auto" style={{ fontSize: "0.8em" }}>
          Already have an account? Log in{" "}
          <Link to="/login">
            <span className="text-primary">here</span>
          </Link>
          .
        </p>
      </Form>
    </Container>
  );
}
