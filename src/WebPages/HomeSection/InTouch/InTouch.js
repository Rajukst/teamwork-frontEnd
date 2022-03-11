import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const InTouch = () => {
  return (
    <div>
      <h1>Get in Touch</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <h2>Newsletter - Stay tune and get the latest update</h2>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InTouch;
