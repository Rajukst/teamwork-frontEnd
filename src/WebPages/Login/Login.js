import React, { useState } from "react";
import { Button, Grid } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const { user, signInUser, loading, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const loginSubmit = (e) => {
    signInUser(loginUser.email, loginUser.password, location, history);
    e.preventDefault();
  };
  const loginOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...loginUser };
    newData[nameField] = fieldValue;
    setLoginUser(newData);
  };
  return (
    <div>
      <h1>This is login form</h1>
      <form onSubmit={loginSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={loginOnChange}
          placeholder="Your Name"
          required
        />
        <br />
        <br />
        <input
          type="email"
          name=""
          id=""
          onChange={loginOnChange}
          placeholder="Your Email"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          onChange={loginOnChange}
          placeholder="Password"
          required
        />
        <br />
        <br />
        <br />
        <Button type="submit" variant="outline-info">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
