import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <Navbar className="navbar">
        <Navbar.Brand>Pomodoro Clock</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>Settings</Nav.Item>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
