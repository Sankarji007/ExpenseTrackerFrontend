import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (/[\d~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(value)) {
      // Show the error message
      document.getElementById("error-message").style.display = "block";
    } else {
      // Hide the error message
      document.getElementById("error-message").style.display = "none";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      username: formData.username, 
      password: formData.password,
      email: formData.email
    };

    if(formData.confirmPassword===formData.password)
    {
      fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="text-center">
          Not registered yet?{" "}
          <span className="link-primary" style={{ cursor: 'pointer' }} onClick={handleClick}>
            Sign In
          </span>
        </div>

        <div className="form-group mt-3">
          <label>Full Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-control mt-1"
            placeholder="e.g Jane Doe"
            required
          />
          <p id="error-message" style={{ display: "none", color: "red" }}>
            Numbers and special characters are not allowed.
          </p>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control mt-1"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control mt-1"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="form-control mt-1"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="text-center mt-2">
          Forgot <a onClick={handleClick}>password?</a>
        </p>
      </div>
    </form>
    </div>
  )
}

export default SignUp ;      