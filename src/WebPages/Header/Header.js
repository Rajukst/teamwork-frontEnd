import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="my-header">
        <Link className="header-scroll" to="/home">
          MS Online
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto m-3 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="ms-4" to="/course">
              All Courses
            </Link>
            <Link className="ms-4" to="/dashboard">
              Dashboard
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Link to="/login">
        <Button className="me-3">Login</Button>
      </Link>
    </Navbar>
  );
};

export default Header;
