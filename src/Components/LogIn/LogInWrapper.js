import React, { useState } from "react";
import LogInSignInToggle from "./LoginSignInToggle";
import LogInModalButton from "./LogInModalButton";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
} from "../../firebase";

import { Container, Row, Col } from "react-bootstrap";

export default function LogInWrapper({ component }) {
  const path = useLocation().pathname;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const emailHandler = (e) => {
    console.log("log in email: ", email);
    setEmail(e.target.value);
  };

  const passwordHandler1 = (e) => {
    console.log("log in password1: ", password1);
    setPassword1(e.target.value);
  };

  const passwordHandler2 = (e) => {
    console.log("log in password2: ", password2);
    setPassword2(e.target.value);
  };

  const firstNameHandler = (e) => {
    console.log("sign up first name: ", firstName);
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    console.log("sign up last name: ", lastName);
    setLastName(e.target.value);
  };

  const wrapperStyle = { height: "500px" };

  const modalStyle = {
    height: "470px",
    borderLeft: "1px black solid",
    borderRight: "1px black solid",
    borderBottom: "1px black solid",
  };

  const backButton = (
    <Link to="/signup-1">
      <h1>
        <Icon icon="akar-icons:arrow-back-thick" />
      </h1>
    </Link>
  );

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
            <LogInSignInToggle path={path} label="Log In" linkPath="/login" />
            <LogInSignInToggle
              path={path}
              label="Sign Up"
              linkPath="/signup-1"
            />
            <div className="flex-grow-1 border-bottom border-start border-dark"></div>
          </div>

          <div
            className="d-flex flex-column align-items-stretch p-2"
            style={modalStyle}
          >
            <h5 className="mt-4 ms-1">
              Protocol {path === "/signup-2" && backButton}
            </h5>
            {React.cloneElement(component, {
              path: path,
              firstNameHandler: firstNameHandler,
              lastNameHandler: lastNameHandler,
              emailHandler: emailHandler,
              passwordHandler1: passwordHandler1,
              passwordHandler2: passwordHandler2,
            })}
            <LogInModalButton
              firebaseLogin={logInWithEmailAndPassword}
              firebaseRegister={registerWithEmailAndPassword}
              sendPasswordReset={sendPasswordReset}
              email={email}
              password1={password1}
              password2={password2}
              firstName={firstName}
              lastName={lastName}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
