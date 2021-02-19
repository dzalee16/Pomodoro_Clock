import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const Footer = () => {
  const year = {
    date: new Date(),
  };

  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <p className="text-center">
              Mladen Jovic &copy; {year.date.getFullYear()} - Pomodoro Clock
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
