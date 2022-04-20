import { useState } from "react";
import "./Signup.css";

const signupUser = async (credentials) => {
  const res = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  console.log(res);
  //return res;
};

const Signup = (props) => {
  //const sign = props.sign;
  const [user, setUser] = useState();
  const [passw, setPassw] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userSubmit = await signupUser({ user, passw });
    console.log(userSubmit);
    //console.log(sign);
  };

  return (
    <div className="signup-wrapper">
      <h1>Please Signup</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
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
      </form>
      <div>
        <br />
      </div>
    </div>
  );
};

export default Signup;
