import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import coursePic from "../../../Images/course.jpg";
import img1 from "../../../Images/01.png";
import img2 from "../../../Images/02.jpg";
import img3 from "../../../Images/03.jpg";
import "./HomeCourse.css";
const HomeCourse = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Col xs={12} md={12} lg={12}>
              <h3 className="mt-5">Learn Anything</h3>
              <h1>Benefits About Online Learning Expertise</h1>
              <Card className="my-card mt-2">
                <div className="course-div">
                  <div>
                    <Card.Img
                      className="img-fluid p-1"
                      variant="top"
                      src={img1}
                    />
                  </div>
                  <div>
                    <Card.Body>
                      <Card.Title>Online Courses</Card.Title>
                      <Card.Text>
                        This is an Online Course platform. You will get all
                        necessery thing about this course from here. No extra
                        time and mone will be charge after purseching this
                        Course.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
              <Card className="my-card mt-4">
                <div className="course-div">
                  <div>
                    <Card.Img
                      className="img-fluid p-1"
                      variant="top"
                      src={img3}
                    />
                  </div>
                  <div>
                    <Card.Body>
                      <Card.Title>Earn A Certificate</Card.Title>
                      <Card.Text>
                        After completing this Course we will give you an special
                        certificate. And this certificate will help to get your
                        job easily.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
              <Card className="my-card mt-4">
                <div className="course-div">
                  <div>
                    <Card.Img
                      className="img-fluid p-1"
                      variant="top"
                      src={img2}
                    />
                  </div>
                  <div>
                    <Card.Body>
                      <Card.Title>Learn With Expert</Card.Title>
                      <Card.Text>
                        In this Courses Our Experts are Teaching you very
                        Sincerely. So if you are a begineer don't worry at all.
                        Our experts are starting begineeing level.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Col>
          </Col>
          <Col xs={12} md={6} lg={6}>
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
