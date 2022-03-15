import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <h1>This is Dashboard</h1>
      <Container fluid>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <p>Add Course</p>
            <p>Course List</p>
            <p>Make Admin</p>
            <p>Add Course</p>
          </Col>
          <Col xs={12} md={9} lg={9}>
            2 of 2
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
