import React, { useState } from "react";
import { Button, Grid } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Login.css";
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
    <div className="login-div">
      <h1>User login </h1>
      <div className="login-continer">
        <form onSubmit={loginSubmit}>
          <br />
          <br />
          <input
            type="email"
            name="email"
            id=""
            onChange={loginOnChange}
            placeholder="Your Email"
            required
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id=""
            onChange={loginOnChange}
            placeholder="Password"
            required
          />
          <br />
          <br />
          <br />
          <div>
            <div>
              <Button type="submit" variant="outline-info">
                Login
              </Button>
            </div>
            <div>
              <h5>New User??</h5>
              <p>
                Register
                <Link to="/register">here</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
