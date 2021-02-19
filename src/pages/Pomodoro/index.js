import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.scss";

const Pomodoro = () => {
  return (
    <main className="pomodoro">
      <Container className="pomodoro-container">
        <Row className="d-flex justify-content-center">
          <Col className="pomodoro-field" xs="auto">
            Pomodoro
          </Col>
          <Col className="pomodoro-field" xs="a">
            Short Break
          </Col>
          <Col className="pomodoro-field" xs="a">
            Long Break
          </Col>
        </Row>
        <Row className="pomodoro-timer">
          <Col>
            <h1 className="text-center">00:01</h1>
          </Col>
        </Row>
        <Row className="pomodoro-timer">
          <Col className="text-center">
            <Button className="pomodoro-btn">Start</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Pomodoro;
