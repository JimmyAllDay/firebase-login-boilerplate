import React from "react";

import { Container, Form } from "react-bootstrap";

export default function PasswordReset({ emailHandler }) {
  return (
    <Container fluid className="d-flex flex-column h-75">
      <h1 className="my-2 align-self-center" data-testid="reset-h1">
        Reset Password
      </h1>

      <Form className="d-flex flex-column flex-grow-1 justify-content-evenly">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Please enter your email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => emailHandler(e)}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
