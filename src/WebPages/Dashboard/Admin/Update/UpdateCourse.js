import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateCourse = () => {
  const { updateId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/update-course/${updateId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>This is Update Course</h1>
      <Container>
        <Row>
          <Col xs={12} md={5} lg={5}>
            <img className="img-fluid" src={product.image} alt="" />
            <h1> Total Price: {product.price}</h1>
            <h4>Product Description: {product.description} </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateCourse;
