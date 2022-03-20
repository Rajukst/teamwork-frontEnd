import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CourseList from "./CourseList";

const MyCourse = () => {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/course-list")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);
  return (
    <div>
      <h1>Your Course</h1>
      <Row xs={1} md={4} className="g-4">
        {courseList.map((getList) => (
          <CourseList key={getList._id} myCourseList={getList}></CourseList>
        ))}
      </Row>
    </div>
  );
};

export default MyCourse;
