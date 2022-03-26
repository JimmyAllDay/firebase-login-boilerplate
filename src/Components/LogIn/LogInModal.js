import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

function LogInSignInToggle({ label, clicked, toggle }) {
  const styles = {
    // TODO: Add hover: "pointer" to styles - not working for some reason: https://stackoverflow.com/questions/28365233/inline-css-styles-in-react-how-to-implement-ahover. Can possibly use stylesheet
    clicked: {
      width: "90px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    unClicked: {
      width: "90px",
      borderBottom: "1px black solid",
      backgroundColor: "gainsboro",
    },
  };

  return (
    <div
      onClick={() => toggle()}
      className="d-flex justify-content-center border-top border-dark border-start"
      style={clicked ? styles.clicked : styles.unClicked}
    >
      {label}
    </div>
  );
}

function SignUp({ toggle }) {
  return (
    <Container fluid className="d-flex flex-column h-75">
      <h1 className="my-2 align-self-center">Sign Up</h1>
      <Form className="d-flex flex-column flex-grow-1 justify-content-evenly">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Re-enter password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p className="mx-auto" style={{ fontSize: "0.8em" }}>
          Already have an account? Log in{" "}
          <span className="text-primary" onClick={() => toggle()}>
            here
          </span>
          .
        </p>
      </Form>
    </Container>
  );
}

function LogIn({ toggle }) {
  return (
    <Container fluid className="d-flex flex-column h-75">
      <h1 className="my-2 align-self-center">Log In</h1>
      <Form className="d-flex flex-column flex-grow-1 justify-content-evenly">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <p className="mx-auto" style={{ fontSize: "0.8em", margin: "0" }}>
          Don't have an account yet? Sign up{" "}
          <span className="text-primary" onClick={() => toggle()}>
            here
          </span>
          .
        </p>
        <p className="mx-auto" style={{ fontSize: "0.8em", margin: "0" }}>
          Forgot password? Click <span className="text-primary">here</span>.
        </p>
      </Form>
    </Container>
  );
}

function LogInModalButtons({ clicked, toggle }) {
  return (
    <Container fluid className="p-0 px-4 mt-auto mb-3 d-flex flex-column">
      <Button size="lg" className="mx-auto w-100">
        <h5 className="mx-auto my-auto text-light">
          {clicked ? "Sign up" : "Log in"}
        </h5>
      </Button>
    </Container>
  );
}

export default function LogInModal() {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    console.log("clicked");
    setClicked(!clicked);
  };

  const wrapperStyle = { height: "500px" };

  const modalStyle = {
    height: "470px",
    borderLeft: "1px black solid",
    borderRight: "1px black solid",
    borderBottom: "1px black solid",
  };

  return (
    <Container fluid className="p-3 d-flex flex-column mt-5">
      <Row className="d-flex">
        <Col
          xs={11}
          sm={7}
          md={5}
          lg={4}
          xl={3}
          className="p-0 mx-auto"
          style={wrapperStyle}
        >
          <div className="d-flex">
            <LogInSignInToggle
              label={"Log In"}
              clicked={clicked ? false : true}
              toggle={toggle}
            />
            <LogInSignInToggle
              label={"Sign Up"}
              clicked={clicked ? true : false}
              toggle={toggle}
            />
            <div className="flex-grow-1 border-bottom border-start border-dark"></div>
          </div>

          <div
            className="d-flex flex-column align-items-stretch p-2"
            style={modalStyle}
          >
            <h5 className="mt-4 ms-1">Protocol</h5>

            {clicked ? <SignUp toggle={toggle} /> : <LogIn toggle={toggle} />}
            <LogInModalButtons />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
