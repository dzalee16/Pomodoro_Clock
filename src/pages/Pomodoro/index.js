import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../scss/custom.scss";
import "./style.scss";
import PomodoroSession from "../../components/PomodoroSession";
import { SessionContext } from "../../context/session";

const Pomodoro = () => {
  const session = useContext(SessionContext);

  const [timeLeft, setTimeLeft] = useState(session.pomodoroLength);
  const [bgColor, setBgColor] = useState("pomodoro-container");
  const [timerId, setTimerId] = useState(null);

  const isStarted = timerId !== null;

  useEffect(() => {
    console.log(timerId);
  }, [timerId]);

  const handleStartStopTimer = () => {
    if (isStarted) {
      clearInterval(timerId);
      setTimerId(null);
    } else {
      const newTimerId = setInterval(() => {
        setTimeLeft((prevState) => {
          const newTimeLeft = prevState - 1;
          if (newTimeLeft >= 0) {
            return newTimeLeft;
          }
        });
      }, 10);
      setTimerId(newTimerId);
    }
  };

  useEffect(() => {
    console.log(timeLeft);
    if (timeLeft === 0) {
      clearInterval(timerId);
      setTimerId(null);
    }
  }, [timeLeft]);

  const changeBgColor = (e) => {
    if (e.target.id === "pomodoro") {
      console.log(e.target);
      setBgColor("pomodoro-container");
      console.log("1500");
      setTimeLeft(session.pomodoroLength);
    } else if (e.target.id === "short-break") {
      console.log(e.target);
      setBgColor("short-break-container");
      console.log("300");
      setTimeLeft(session.shortBreakLength);
    } else if (e.target.id === "long-break") {
      console.log(e.target);
      setBgColor("long-break-container");
      console.log("900");
      setTimeLeft(session.longBreakLength);
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
            <PomodoroSession timeLeft={timeLeft} />
          </Col>
        </Row>
        <Row className="pomodoro-timer">
          <Col className="text-center">
            <Button onClick={handleStartStopTimer} className="pomodoro-btn">
              {isStarted ? "STOP" : "START"}
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Pomodoro;
