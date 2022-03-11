import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ExploreCourse.css";
const ExploreCourse = ({ myCourse }) => {
  const { _id, image, price, name, description } = myCourse;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img className="img-fluid" variant="top" src={image} />
          <Card.Body>
            <Card.Title className="alignment-class">
              Course Name: {name}
            </Card.Title>
            <Card.Title className="alignment-class">
              Course Fee: ${price}
            </Card.Title>
            <Card.Text className="alignment-class">
              {description.slice(0, 150)}
            </Card.Text>
          </Card.Body>
          <div className="my-button">
            <Link to={`/place-order/${_id}`}>
              <Button variant="outline-dark">Purchase Now</Button>
            </Link>
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default ExploreCourse;
