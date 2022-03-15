import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageCourse = () => {
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/online-course")
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, []);
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("are you sure to delete your product?");
    if (proceed) {
      const url = `http://localhost:5000/online-course/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Course Deleted Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            const remainingProducts = update.filter(
              (newUpdate) => newUpdate._id !== id
            );
            setUpdate(remainingProducts);
          }
        });
    }
  };
  return (
    <div>
      <h1>Manage Your Course Information</h1>
      <div>
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
                <td>
                  <Link to={`/update-course/${myRow._id}`}>
                    <Button className="my-button" variant="warning">
                      Update
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    onClick={() => handleDeleteUser(myRow._id)}
                    className="my-button"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageCourse;
