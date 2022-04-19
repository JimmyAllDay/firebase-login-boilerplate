import React from "react";

import { useAuthValue } from "../utils/AuthContext";

import { Container, Col } from "react-bootstrap";

export default function Profile() {
  const { currentUser } = useAuthValue();

  return (
    <Container fluid className="">
      <Col className="mx-auto">
        <h1>Profile</h1>
        <p>
          <strong>Email: </strong>
          {currentUser?.email}
        </p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
      </Col>
    </Container>
  );
}
