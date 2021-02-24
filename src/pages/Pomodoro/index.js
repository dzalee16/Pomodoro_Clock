import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../scss/custom.scss";
import "./style.scss";
import PomodoroSession from "../../components/PomodoroSession";
import { SessionContext } from "../../context/session";

const Pomodoro = () => {
  const session = useContext(SessionContext);

  const [timeLeft, setTimeLeft] = useState(session.pomodoroLength);
  const [sessionField, setSessionField] = useState("pomodoro-container");
  const [timerId, setTimerId] = useState(null);
  const [sessionType, setSessionType] = useState("pomodoroSession");
  const [counter, setCounter] = useState(0);

  //change start - stop button
  const isStarted = timerId !== null;

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
      }, 1000);
      setTimerId(newTimerId);
    }
  };

  useEffect(() => {
    console.log(sessionType);
  }, [sessionType]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerId);
      setTimerId(null);
      if (sessionType === "pomodoroSession") {
        setCounter((prevState) => {
          const newCounter = prevState + 1;
          if (newCounter === 4) {
            setTimeLeft(session.longBreakLength);
            setSessionField("long-break-container");
            setCounter(0);
          }
          return newCounter;
        });
        setSessionType("shortBreakSession");
        setTimeLeft(session.shortBreakLength);
        setSessionField("short-break-container");
      } else if (sessionType === "shortBreakSession") {
        setSessionType("pomodoroSession");
        setTimeLeft(session.pomodoroLength);
        setSessionField("pomodoro-container");
      }
    }
  }, [timeLeft]);

  const changesessionField = (e) => {
    if (e.target.id === "pomodoro") {
      setSessionField("pomodoro-container");
      setTimeLeft(session.pomodoroLength);
    } else if (e.target.id === "short-break") {
      setSessionField("short-break-container");
      setTimeLeft(session.shortBreakLength);
    } else if (e.target.id === "long-break") {
      setSessionField("long-break-container");
      setTimeLeft(session.longBreakLength);
    }
  };

  return (
    <main className="pomodoro">
      <Container className={sessionField}>
        <Row className="d-flex justify-content-center">
          <Col className="pomodoro-field" xs="a">
            <p id="pomodoro" onClick={changesessionField}>
              Pomodoro
            </p>
          </Col>
          <Col className="pomodoro-field" xs="a">
            <p id="short-break" onClick={changesessionField}>
              Short Break
            </p>
          </Col>
          <Col className="pomodoro-field" xs="a">
            <p id="long-break" onClick={changesessionField}>
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
