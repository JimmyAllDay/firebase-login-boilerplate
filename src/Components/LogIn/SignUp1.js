import React from "react";

import { Link } from "react-router-dom";

import { Container, Form } from "react-bootstrap";

export default function SignUp1(props) {
  const { firstNameHandler, lastNameHandler } = props;

  return (
    <Container fluid className="d-flex flex-column h-75">
      <h1 className="my-2 align-self-center">Sign Up</h1>
      <Form className="d-flex flex-column flex-grow-1 justify-content-evenly">
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => firstNameHandler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => lastNameHandler(e)}
          />
        </Form.Group>
        <p className="mx-auto" style={{ fontSize: "0.8em" }}>
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
