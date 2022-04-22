
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import Home from './components/Home/Home';


function App() {
  
  useEffect(()=>{document.title="Home"},[])
  
  return (
    <div className="wrapper">
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />}/>
          <Route exact path="/signup" element={<SignupPage />}/>
       </Routes>
    </div>
  );
}

export default App;
