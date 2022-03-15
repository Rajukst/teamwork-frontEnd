import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const UpdateCourse = () => {
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/online-course")
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, []);
  const handleUpdate = (id) => {
    const proceed = window.confirm("are you sure to update your Course?");
    if (proceed) {
      const url = `http://localhost:5000/online-course/${id}`;
      fetch(url, {
        method: "UPDATE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <div>
      <h1>This is Update Course</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Short Description</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {update.map((myRow) => (
            <tr>
              <td>{myRow._id}</td>
              <td>{myRow.name}</td>
              <td>{myRow.price}</td>
              <td>{myRow.description}</td>
              <td></td>
              <td>
                <Button
                  onClick={() => handleUpdate(myRow._id)}
                  className="my-button"
                  variant="warning"
                >
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UpdateCourse;
