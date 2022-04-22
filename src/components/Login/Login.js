import React, {useState } from 'react';
import "./Login.css";

const loginUser=async(credentials)=>{
    const response=await fetch ('/api/login', {
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
    const [message, setMessage]=useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
        setMessage(token.message);
      }
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                   {message&&
                   <div>
                      <label style={{color:"red"}}>{message}!</label>
                      <br/>
                   </div>}
                    <br/>
                    <label>Username:</label> 
                    <br/>
                    <input type="text" name="Username" placeholder='Username' onChange={e => setUserName(e.target.value)}/><br/>
                   
                <label>Password: </label><br/>
                    <input type="password" name="Password" placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                <div>
                    <br/>
                    <button type="submit">Log in</button><br/>
                    </div>
            </form>
              <div><br/></div>
        </div>    
    )
}

export default Login;
