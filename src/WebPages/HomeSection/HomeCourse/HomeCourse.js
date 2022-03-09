import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import coursePic from "../../../Images/course.jpg";
import "./HomeCourse.css";
const HomeCourse = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Col>
              <h3 className="mt-5">Learn Anything</h3>
              <h1>Benefits About Online Learning Expertise</h1>
              <Card className="my-card mt-2">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Online Courses</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-card mt-4">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Earn A Certificate</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="my-card mt-4">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Learn With Expert</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Col>
          <Col>
            <img
              className="img-fluid my-image"
              src={coursePic}
              alt="Girl with Books"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeCourse;
