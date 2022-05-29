import React, { useState } from "react";
import LogInSignInToggle from "../LoginSigninToggle/LoginSignInToggle";
import LogInModalButton from "../LoginModalButton/LogInModalButton";

import { useLocation } from "react-router";
import { useNavigate, Link } from "react-router-dom";

import { auth } from "../../../firebase";
import { useAuthValue } from "../../utils/AuthContext";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { Container, Row, Col } from "react-bootstrap";

export default function LogInWrapper({ component }) {
  const history = useNavigate();
  const path = useLocation().pathname;
  const { setTimeActive } = useAuthValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const resetText = (
    <p
      className="mx-auto"
      style={{ fontSize: "0.8em", margin: "0" }}
      data-testid="reset-text"
    >
      Forgot password? Reset{" "}
      <Link to="/password-reset" data-testid="pass-reset-link">
        <span className="text-primary">here</span>
      </Link>
      .
    </p>
  );

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Password does not match");
      }
    }
    return isValid;
  };

  const register = () => {
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          sendEmailVerification(auth.currentUser);
          history("/verify-email");
          console.log(res.user);
        })
        .catch((err) => {
          setError(err.message);
          console.log(err, error);
        });
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              history("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else {
          history("/");
        }
      })
      .catch((err) => setError(err.message));
  };

  const wrapperStyle = { height: "500px" };

  const modalStyle = {
    height: "470px",
    borderLeft: "1px black solid",
    borderRight: "1px black solid",
    borderBottom: "1px black solid",
  };

  return (
    <Container
      fluid
      className="p-3 d-flex flex-column mt-5"
      data-testid="login"
    >
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
            <LogInSignInToggle path={path} label="Sign Up" linkPath="/signup" />
            <div className="flex-grow-1 border-bottom border-start border-dark"></div>
          </div>

          <div
            className="d-flex flex-column align-items-stretch p-2"
            style={modalStyle}
          >
            <h5 className="mt-4 ms-1" data-testid="login-logo">
              Brand
            </h5>
            {React.cloneElement(component, {
              resetText: resetText,
              emailHandler: emailHandler,
              passwordHandler: passwordHandler,
              confirmPasswordHandler: confirmPasswordHandler,
            })}
            <LogInModalButton
              login={login}
              register={register}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
