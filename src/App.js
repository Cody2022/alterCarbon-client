import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import SignupPage from "./components/SignupPage/SignupPage";
import Home from "./components/Home/Home";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import Maps from "./components/Map/mapBox";
import Facilities from "./components/Map/Facilities";

function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/history" element={<HistoryPage />} />
        <Route exact path="/map" element={<Facilities />} />
      </Routes>
    </div>
  );
}

export default App;
