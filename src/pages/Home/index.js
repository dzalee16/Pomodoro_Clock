import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <main className="home">
      <Container fluid>
        <Row>
          <Col>
            <Link to="/pomodoro-clock">
              <Button className="home-btn">Go to Pomodoro Clock</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
