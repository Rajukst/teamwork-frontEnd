import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import faq from "../../../Images/Faq.png";
import "./Faq.css";
const Faq = () => {
  return (
    <div>
      <h1>Frequently Asked Question</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <img
              className="img-fluid faq-image"
              src={faq}
              alt="Girl with Books"
            />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Accordion>
              <Accordion.Item eventKey="0" className="mt-5 my-accordion">
                <Accordion.Header className="">
                  How This Course Will Run
                </Accordion.Header>
                <Accordion.Body>
                  This Course Will Run Daily. EveryDay at 9.00 PM Class Video
                  will uploaded by admin. You have to finish this module the end
                  of the day. Don't use shortcurt way to finish it. Just relax
                  and learn.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-4">
                <Accordion.Header>Is This Course Free?</Accordion.Header>
                <Accordion.Body>
                  This Course Is not free, Because We provide a lot of expert
                  lecturer, and we have to pay them. And also we have a huge
                  amount of support instructor who always guide you. In this
                  case we do not considure this course free.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mt-4">
                <Accordion.Header>
                  How Many Leassons Are There?
                </Accordion.Header>
                <Accordion.Body>
                  The Leasons are particular on course base. But we try our best
                  for fullfill your Job criteria in this course. So don't worry
                  about it. Juast Learn.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
