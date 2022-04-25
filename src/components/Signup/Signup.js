import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userSubmit = await signupUser({ user, passw });
    setMessage(userSubmit.message);
  };
  const navigate = useNavigate();
  const handleHome = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="signup-wrapper">
      <div className="homeButton" onClick={handleHome}>
        <button>Home</button>
      </div>
      <h1>Please Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {message&& 
          <div>
            <lable style={{color:"red"}}>{message}!</lable>
          </div>
        }
        <label>Username:</label>
        <br />
        <input
          type="text"
          name="User"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />

        <label>Password: </label>
        <br />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={(e) => setPassw(e.target.value)}
        />
        <div>
          <br />
          <button type="submit">Signup</button>
          <br />
        </div>
         <br />
      </form>
      <div>
        <br />
      </div>
    </div>
  );
};

export default Signup;
