import React, { useRef, useEffect, useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/pomodoro.jpeg";
import { SessionContext } from "../../context/session";
import "./style.scss";

const Header = () => {
  const dropdownRef = useRef();

  const { isOpen } = useContext(SessionContext);
  const { setIsOpen } = useContext(SessionContext);
  const {
    pomodoroLength,
    setPomodoroLength,
    shortBreakLength,
    setShortBreakLength,
    longBreakLength,
    setLongBreakLength,
    setTime,
  } = useContext(SessionContext);

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutside);

    return () => {
      document.addEventListener("click", handleOutside);
    };
  }, [setIsOpen, dropdownRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setTime({
      pomodoroLength: pomodoroLength,
      shortBreakLength: shortBreakLength,
      longBreakLength: longBreakLength,
    });
  };

  return (
    <header>
      <Navbar className="navbar">
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto" ref={dropdownRef}>
          <button
            type="button"
            className="dropdown-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            Settings
          </button>
          {isOpen && (
            <div className="dropdown">
              <form onSubmit={handleSubmit}>
                <button
                  className="isOpenFalse"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
                <label>Pomodoro</label>
                <input
                  className="pomodoro-lenght"
                  type="number"
                  min="1"
                  step="1"
                  max="60"
                  onChange={(e) => setPomodoroLength(Number(e.target.value))}
                  value={pomodoroLength}
                />
                <label>Short break</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  max="15"
                  onChange={(e) => setShortBreakLength(Number(e.target.value))}
                  value={shortBreakLength}
                />
                <label>Long break</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  max="30"
                  onChange={(e) => setLongBreakLength(Number(e.target.value))}
                  value={longBreakLength}
                />
                <div className="submit-field">
                  <button type="submit" className="submitBtn">
                    OK
                  </button>
                </div>
              </form>
            </div>
          )}
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
