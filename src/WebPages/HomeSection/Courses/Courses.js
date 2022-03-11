import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import course1 from "../../../Images/node.png";
import course2 from "../../../Images/java.jpg";
import course3 from "../../../Images/php.png";
import course4 from "../../../Images/python.jpg";
import sidebar from "../../../Images/carosul-side.png";
const Courses = () => {
  return (
    <div>
      <h1 className="mt-4 mb-4">Our Most Popular Courses</h1>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Carousel fade>
              <Carousel.Item>
                <img className="" src={course1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="" src={course2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="" src={course3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="" src={course4} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <img className="" src={sidebar} alt="Third slide" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
