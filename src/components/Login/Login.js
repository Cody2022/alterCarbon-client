import React, {useState } from 'react';
import "./Login.css";

const loginUser=async(credentials)=>{
    const response=await fetch ('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
    return response.json();
}


 const Login = (props) => {
    const setToken=props.setToken;
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        console.log("token at handleSubmit", token)
        setToken(token);
      }
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
               
                    <label>Username:</label> 
                    <br/>
                    <input type="text" name="Username" onChange={e => setUserName(e.target.value)}/><br/>
                   
                <label>Password: </label><br/>
                    <input type="password" name="Password" onChange={e => setPassword(e.target.value)}/>
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </div>    
    )
}

export default Login;
