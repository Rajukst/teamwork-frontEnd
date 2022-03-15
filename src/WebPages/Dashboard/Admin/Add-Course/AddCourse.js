import React, { useRef } from "react";
import Swal from "sweetalert2";
import "./AddCourse.css";
const AddCourse = () => {
  const addName = useRef();
  const addPrice = useRef();
  const addImage = useRef();
  const addText = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = addName.current.value;
    const price = addPrice.current.value;
    const image = addImage.current.value;
    const description = addText.current.value;
    const totalAdd = { name, price, image, description };
    console.log(totalAdd);
    fetch("http://localhost:5000/add-course", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="add-course">
      <div>
        <h1>Add Your Course Here</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name=""
            id=""
            ref={addName}
            placeholder="Course Name"
            required
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addPrice}
            placeholder=" Price"
          />
          <br />
          <br />
          <input
            type="text"
            name=""
            id=""
            ref={addImage}
            placeholder="Course Image Url"
          />
          <br />
          <br />
          <textarea
            id=""
            ref={addText}
            placeholder="short Description"
            name=""
            rows=""
            cols=""
          ></textarea>
          <br />
          <br />
          <input id="submit-buttn1" type="submit" value="Add Course" />
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
