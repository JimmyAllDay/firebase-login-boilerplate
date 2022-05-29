import React from "react";

import { useAuthValue } from "../../utils/AuthContext";
import { useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function VerifyEmail() {
  const { currentUser, timeActive, setTimeActive } = useAuthValue();
  const [time, setTime] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser
        ?.reload()
        .then(() => {
          if (currentUser?.emailVerified) {
            clearInterval(interval);
            navigate("/user-profile");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }, 1000);
  }, [navigate, currentUser]);

  useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive]);

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container fluid className="p-0 d-flex">
      <Row className="mx-auto mt-5">
        <Col className="border d-flex flex-column rounded-3 p-4">
          <h1 className="mx-auto mx-3">Welcome to Brand</h1>
          <p className="mx-auto my-3">
            <strong>A Verification email has been sent to:</strong>
            <br />
            <span>{currentUser?.email}</span>
          </p>
          <span className="my-3">
            Please follow the instruction in the email to verify your account
          </span>
          <Col className="mx-auto">
            <Button
              className="mt-3"
              onClick={resendEmailVerification}
              disabled={timeActive}
            >
              <h5 className="text-light my-auto">Resend Email</h5>
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
