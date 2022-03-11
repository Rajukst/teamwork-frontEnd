import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ExploreCourse from "./ExploreCourse";

const AllCourses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/online-course")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div>
      <h1>
        We Are Ready To give an exciting Course. Choose Your Course from Here
      </h1>
      <Row xs={12} md={4} className="g-4 m-1">
        {course.map((getCourse) => (
          <ExploreCourse
            key={getCourse._id}
            myCourse={getCourse}
          ></ExploreCourse>
        ))}
      </Row>
    </div>
  );
};

export default AllCourses;
