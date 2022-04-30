import { useState, useEffect } from "react";
import HistoryData from "./HistoryData";
import { useNavigate } from "react-router-dom";
import Datacharts from "./Datacharts";

const History = () => {
  const [userData,setUserData]=useState(); 
  const navigate=useNavigate();
  const [showall, setShowall]=useState(false)
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
    <div className="history-wrapper">
        <div className="backtoCalculationButton">
          <button onClick={()=> navigate("/login")}>Back to Calculation</button>
        </div>

      <h1>Carbon Footprint Analysis</h1>
        <div className="history" >
          <button onClick={()=>setShowcharts(curr=>!curr)}>Charts</button>
          <button onClick={()=>setShowall(curr=>!curr)}>All records</button>
        </div>
     
      {showcharts && userData && <Datacharts userData={userData}/>}
      {showall && userData && <HistoryData userData={userData}/>}
     
    </div>

  );
};

export default History;
