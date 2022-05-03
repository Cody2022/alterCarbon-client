import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import loginImg from "../../img/LoginBackground.png";
import { Button, TextField } from "@mui/material";

const loginUser = async (credentials) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

const Login = (props) => {
  const setToken = props.setToken;
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    setMessage(token.message);
  };
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundRepeat: "no-repeat",
        height: 700,
        width: 1510,
      }}
    >
    <div className="login-form">
      <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
        
          {message && (
            <div>
              <label style={{ color: "red" }}>{message}!</label>
            </div>
          )}
          <br />
            <TextField
            label = 'Name'
            variant= "standard"
            type="text"
            name="Username"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <br />
           <TextField
            label = 'Password'
            variant= "standard"
            type="password"
            name="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <br />
            <br />
            <Button type="submit" style={{color:"white",backgroundColor:"#04AA6D"}}>Log in</Button>
            
          </div>
        </form>
        <div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Login;
