import { useState } from "react";
import HistoryData from "./HistoryData";
import { useNavigate } from "react-router-dom";

const History = () => {
  const [userData,setUserData]=useState(); 
  const navigate=useNavigate();

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

    const handleFetch = async (e) => {
        e.preventDefault();
        const tokenString = sessionStorage.getItem("token");
        const tokenObject = JSON.parse(tokenString);
        const {status, id}=tokenObject;
        
        if (status==="successful"){
            const historyData = await fetchHistoryData({ user: id });
            setUserData(historyData);
        }
    };

  return (
    <div className="history-wrapper">
        <div className="backtoCalculationButton">
          <button onClick={()=> navigate("/login")}>Back to Calculation</button>
        </div>

      <h1>Carbon Footprint Analysis</h1>
        <div className="historyButton" onClick={handleFetch}>
          <button>Analyze</button>
        </div>
     
      {userData && <HistoryData userData={userData}/>}
    </div>
  );
};

export default History;
