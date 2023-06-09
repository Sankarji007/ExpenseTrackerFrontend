import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const LoginPage = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      email: formData.email,
      password: formData.password
    };
    fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if(data.accessToken){
          localStorage.setItem('accessToken', data.accessToken);      
          console.log(data.accessToken); 
          navigate('/app');
        }
        else
        {
          alert(data.errors)
        }
      })
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" style={{ cursor: 'pointer' }} onClick={handleClick}>
              Sign Up
            </span>
          </div>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control mt-1"
              placeholder="Email Address"
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
              placeholder="Password"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a style={{ cursor: 'pointer' }}>password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;