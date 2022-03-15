import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import AddCourse from "../Admin/Add-Course/AddCourse";
import ManageCourse from "../Admin/Manage/ManageCourse";
import UpdateCourse from "../Admin/Update/UpdateCourse";
import "./Dashboard.css";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="my-dashboard">
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2}>
            <Link className="remove" to={`${url}/add-course`}>
              <Button className="mt-4 my-button" color="inherit">
                Add Course
              </Button>
            </Link>
            <Link className="remove" to={`${url}/manage`}>
              <Button className="mt-4 my-button" color="inherit">
                Manage Course Info
              </Button>
            </Link>
            <Link className="remove" to={`${url}/update`}>
              <Button className="mt-4 my-button" color="inherit">
                Update Course Info
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={10} lg={10}>
            <Switch>
              <Route path={`${path}/add-course`}>
                <AddCourse></AddCourse>
              </Route>
              <Route path={`${path}/manage`}>
                <ManageCourse></ManageCourse>
              </Route>
              <Route path={`${path}/update`}>
                <UpdateCourse></UpdateCourse>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
