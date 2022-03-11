import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const { serviceId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/place-order/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);
    fetch("http://localhost:5000/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <h1>This is Single Course {serviceId.name}</h1>
      <Container>
        <Row>
          <Col xs={12} md={5} lg={5}>
            <img className="img-fluid" src={product.image} alt="" />
            <h1> Total Price: {product.price}</h1>
            <h4>Product Description: {product.description} </h4>
          </Col>
          <Col xs={12} md={7} lg={7}>
            <h1>Purchase Your course Now</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={product?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("address")}
                placeholder="address"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("price", { required: true })}
                defaultValue={product?.price}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image", { required: true })}
                defaultValue={product?.image}
                className="p-2 m-2 w-100"
              />
              <br />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Course"
                className="btn btn-info w-50"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleCourse;
