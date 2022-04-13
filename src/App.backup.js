
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/LoginPage/LoginPage';
import Preferences from './components/SignupPage/SignupPage';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }


function App() {
  const { token, setToken } = useToken();

  useEffect(()=>{document.title="Login"},[])

  console.log(token)
  if(token!=="Welcome") {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}/>
          <Route exact path="/preferences" element={<Preferences />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
