import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseList = ({ myCourseList }) => {
  const { _id, name, price, description } = myCourseList;
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Course Name: {name}</Card.Title>
            <Card.Title>Course Price: {price}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Link to={`/unique-course/${_id}`}>
            <Button>Open Course Lesson</Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default CourseList;
