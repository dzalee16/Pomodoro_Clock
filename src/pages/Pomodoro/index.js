import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../scss/custom.scss";
import "./style.scss";
import PomodoroSession from "../../components/PomodoroSession";
import { SessionContext } from "../../context/session";
import AlarmSrc from "../../assets/alarm_clock.mp3";
import moment from "moment";
import momentDurationFormat from "moment-duration-format";

momentDurationFormat(moment);

const Pomodoro = () => {
  //context
  const { pomodoroLength, shortBreakLength, longBreakLength } = useContext(
    SessionContext
  );
  const { isOpen } = useContext(SessionContext);

  //reference
  const alertRef = useRef(null);

  //formating time
  const formatTime = (param) => {
    let min = param;
    let sec = min * 60;
    return sec;
  };

  //states
  const [timeLeft, setTimeLeft] = useState(formatTime(pomodoroLength));
  const [sessionField, setSessionField] = useState("pomodoro-container");
  const [timerId, setTimerId] = useState(null);
  const [sessionType, setSessionType] = useState("pomodoroSession");
  const [counter, setCounter] = useState(0);

  //change start - stop button
  const isStarted = timerId !== null;

  //start and stop the time
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

  // useEffect(() => {
  //   console.log(sessionType);
  // }, [sessionType]);

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerId);
      setTimerId(null);
      alertRef.current.play();
      if (sessionType === "pomodoroSession") {
        setCounter((prevState) => {
          const newCounter = prevState + 1;
          if (newCounter === 4) {
            setTimeLeft(formatTime(longBreakLength));
            setSessionField("long-break-container");
            setCounter(0);
          }
          return newCounter;
        });
        setSessionType("shortBreakSession");
        setTimeLeft(formatTime(shortBreakLength));
        setSessionField("short-break-container");
      } else if (sessionType === "shortBreakSession") {
        setSessionType("pomodoroSession");
        setTimeLeft(formatTime(pomodoroLength));
        setSessionField("pomodoro-container");
      }
    }
  }, [timeLeft]);

  //change field session
  const changesessionField = (e) => {
    if (e.target.id === "pomodoro") {
      setSessionField("pomodoro-container");
      setTimeLeft(formatTime(pomodoroLength));
    } else if (e.target.id === "short-break") {
      setSessionField("short-break-container");
      setTimeLeft(formatTime(shortBreakLength));
    } else if (e.target.id === "long-break") {
      setSessionField("long-break-container");
      setTimeLeft(formatTime(longBreakLength));
    }
  };

  return (
    <main className="pomodoro">
      {!isOpen && (
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
              <audio id="ring" ref={alertRef}>
                <source src={AlarmSrc} type="audio/mp3" />
              </audio>
            </Col>
          </Row>
        </Container>
      )}
    </main>
  );
};

export default Pomodoro;
