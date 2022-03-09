import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="footer-row">
          <Col xs={12} md={6} lg={4}>
            <p>Level-3, 35, Anwar yousuf Road, Kushtia</p>
            <p>kushtia@webpage.com</p>
            <p>+880177766623, 01531930822</p>
            <p>(Avaiable from 5.00AM to 11.59PM)</p>
          </Col>
          <Col className="all-conditons" xs={12} md={6} lg={4}>
            <Link to="/about">About Us</Link>
            <Link to="/success">Success Story</Link>
            <Link to="/refund">Refund Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </Col>
          <Col xs={12} md={6} lg={4}>
            3 of 3
          </Col>
        </Row>
      </Container>
      <h4>All right reserved Web Hero</h4>
    </div>
  );
};

export default Footer;
