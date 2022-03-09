import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Ranking.css";
const Ranking = () => {
  return (
    <div className="my-ranking">
      <h1>This is Ranking</h1>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
          <Col>4 of 4</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ranking;
