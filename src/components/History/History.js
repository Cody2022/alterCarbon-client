import { useState, useEffect } from "react";
import HistoryData from "./HistoryData";
import { useNavigate } from "react-router-dom";
import Datacharts from "./Datacharts";
import historybg from "../../img/historybg.jpg"
import {ToggleButton } from "@mui/material";

const History = () => {
  const [userData,setUserData]=useState(); 
  const navigate=useNavigate();
  const [showTable, setShowTable]=useState(true)
  const [showcharts, setShowcharts]=useState(true)

    useEffect(()=>{
      const fetchHistoryData = async (user) => {
         const response = await fetch("/api/history", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
         return response.json();
      };

      const getUserRecords=async ()=>{
        const tokenString = sessionStorage.getItem("token");
        const tokenObject = JSON.parse(tokenString);
        const {status, id}=tokenObject;
       
        if (status==="successful"){
            const historyData = await fetchHistoryData({ user: id });
            setUserData(historyData);
        }};
        getUserRecords();
    },[])
    

  return (
    <div
      className="history-wrapper"
      style={{
        backgroundImage: `url(${historybg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="backtoCalculationButton">
        <button onClick={() => navigate("/login")}>Back to Calculation</button>
      </div>

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Carbon Footprint Analysis
      </h1>
      <div className="history">
    
        <ToggleButton value="true" aria-label="chart" style={{background:"#29d9d97d"}} onChange={() => setShowcharts((curr) => !curr)}>
          Chart
        </ToggleButton><span> </span>
        <ToggleButton value="true" aria-label="table" style={{background:"#29d9d97d"}} onChange={() => setShowTable((curr) => !curr)}>
          Table
        </ToggleButton>
      </div>

      {showcharts && userData && <Datacharts userData={userData} />}
      <br />
      {showTable && userData && <HistoryData userData={userData} />}
    </div>
  );
};

export default History;
