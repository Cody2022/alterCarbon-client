import { Button, Container, TextField } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Signup.css";
import Forest from "../../img/SignupBackground.png";

const signupUser = async (credentials) => {
  const res = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

const Signup = (props) => {
  //const sign = props.sign;
  const [user, setUser] = useState();
  const [passw, setPassw] = useState();
  const [message, setMessage] = useState();
  const [showlogin, setShowLogin]  = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userSubmit = await signupUser({ user, passw });
    setMessage(userSubmit.message);
    if(userSubmit.status === "signupsuccess"){
      setShowLogin(true)

    }
  };

   
  const navigate = useNavigate();
  const handleRedirectLogin = () => {
    
      navigate("/login");
    
  };

  return (
      
      <div
        style={{
          backgroundImage: `url(${Forest})`,
          backgroundSize: "cover",
          height: 700,
          // width: 1510,
        }}
      >
        
    <div className="signup-form">
      <h1>Please Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {message && (
          <div>
            <lable style={{ color: "red" }}>{message}!</lable>
          </div>
        )}
        <br/>
        <TextField
          label = 'Name'
          variant= "standard"
          type="text"
          name="User"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />

        <br />
        <TextField
          label ="Password"
          variant="standard"
          type="password"
          name="Password"
          placeholder="Password"
          onChange={(e) => setPassw(e.target.value)}
        />
        <br />
        <br />
        
          <br />
          <Button type="submit" style={{color:"white",backgroundColor:"#04AA6D"}}>Signup</Button> <span></span>
          {showlogin &&  <Button style={{color:"white",backgroundColor:"#04AA6D"}} onClick={handleRedirectLogin}>Login</Button>}
          <br />
      </form>
      
    </div>
    </div>
    
  );
};

export default Signup;
