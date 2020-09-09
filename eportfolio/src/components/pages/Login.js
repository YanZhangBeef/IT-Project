import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (user.email.trim() === "" || user.password.trim() === "") {
      return;
    }
    console.log(`email:${user.email} password:${user.password}`);
    setUser({ email: "", password: "" });
  };

  return (
    <div className="container my-5">
      <div className="login-container shadow self-align-center">
        <div className="login">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">
              Login
            </button>
            <button type="button" className="btn btn-secondary">
              Signup
            </button>
          </div>
          <div className="col">
            <h1>Login Page</h1>
            <hr />
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={onChange}
                />
              </div>
              <div className="forgot-pass">
                <Link to="/restPassword">Forgot Password?</Link>
              </div>
              <div className="user-check">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Employer
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Student
                  </label>
                </div>
              </div>
              <button className="btn btn-success" type="Submit">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="logo"></div>
      </div>
    </div>
  );
};
export default Login;
