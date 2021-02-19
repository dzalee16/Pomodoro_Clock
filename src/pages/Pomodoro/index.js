import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../scss/custom.scss";
import "./style.scss";

const Pomodoro = () => {
  const [bgColor, setBgColor] = useState("pomodoro-container");

  const changeBgColor = (e) => {
    if (e.target.id === "pomodoro") {
      console.log(e.target);
      setBgColor("pomodoro-container");
    } else if (e.target.id === "short-break") {
      console.log(e.target);
      setBgColor("short-break-container");
    } else if (e.target.id === "long-break") {
      console.log(e.target);
      setBgColor("long-break-container");
    }
  };

  return (
    <main className="pomodoro">
      <Container className={bgColor}>
        <Row className="d-flex justify-content-center">
          <Col className="pomodoro-field" xs="a">
            <p id="pomodoro" onClick={changeBgColor}>
              Pomodoro
            </p>
          </Col>
          <Col className="pomodoro-field" xs="a">
            <p id="short-break" onClick={changeBgColor}>
              Short Break
            </p>
          </Col>
          <Col className="pomodoro-field" xs="a">
            <p id="long-break" onClick={changeBgColor}>
              Long Break
            </p>
          </Col>
        </Row>
        <Row className="pomodoro-timer">
          <Col>
            <h1 className="text-center">00:01</h1>
          </Col>
        </Row>
        <Row className="pomodoro-timer">
          <Col className="text-center">
            <Button className="pomodoro-btn">START</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Pomodoro;
