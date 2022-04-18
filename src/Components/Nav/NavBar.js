import React from "react";

import { useAuthValue } from "../utils/AuthContext";

import { Container, Col, Navbar, Offcanvas, Nav } from "react-bootstrap";

export default function NavBar() {
  const user = useAuthValue();
  console.log(user);
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Col className="">
          <Navbar.Brand href="#">Protocol</Navbar.Brand>
        </Col>
        <Col className="">
          {user && (
            <Nav className="d-none d-sm-flex flex-row justify-content-evenly">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Upload</Nav.Link>
            </Nav>
          )}
        </Col>
        <Col className=" d-flex justify-content-end">
          {user && (
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="d-sm-none"
            />
          )}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Protocol
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="d-flex flex-column align-items-center">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Upload</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Col>
      </Container>
    </Navbar>
  );
}
