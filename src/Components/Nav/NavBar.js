import React, { useEffect, useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { useAuthValue } from "../utils/AuthContext";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

import {
  Container,
  Col,
  Navbar,
  Offcanvas,
  Nav,
  Button,
} from "react-bootstrap";

export default function NavBar() {
  const { currentUser } = useAuthValue();
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    currentUser && currentUser.emailVerified
      ? setShowLinks(true)
      : setShowLinks(false);
  }, [currentUser]);

  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Col className="">
          <Navbar.Brand as={Link} to="/">
            Brand
          </Navbar.Brand>
        </Col>
        {showLinks && (
          <>
            <Col>
              <Nav className="d-none d-sm-flex flex-row justify-content-evenly">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav>
            </Col>
            <Col className="d-flex justify-content-end">
              <Nav.Link as={Link} to="/user-profile" className="ms-5 me-auto">
                <h2 className="my-auto">
                  <Icon icon="carbon:user-avatar" />
                </h2>
              </Nav.Link>

              <Button
                variant="outline-primary"
                size="sm"
                className="my-auto me-2"
                onClick={() => signOut(auth)}
              >
                Log Out
              </Button>
              <Navbar.Toggle
                aria-controls="offcanvasNavbar"
                className="d-sm-none"
              />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Brand
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="d-flex flex-column align-items-center">
                    <Nav.Link href="#action1">Home</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Col>
          </>
        )}
      </Container>
    </Navbar>
  );
}
