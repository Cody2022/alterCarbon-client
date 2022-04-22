import { useState } from "react";

const History = () => {
  const [electricity, setElectricity] = useState(0);
  const [nGas, setNGas] = useState(0);
  const [water, setWater] = useState(0);
  const [food, setFood] = useState(0);
  const [car, setCar] = useState(0);
  const [plastic, setPlastic] = useState(0);
  const [carbon, setCarbon] = useState(0);

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
            setElectricity(historyData.electricity);
            setNGas(historyData.naturalGas);
            setCar(historyData.carMiles);
            setPlastic(historyData.plasticWaste);
            setWater(historyData.water);
            setFood(historyData.food);
        }
    };

  return (
    <div className="history-wrapper">
      <h1> History Data</h1>
      <div className="historyButton" onClick={handleFetch}>
        <button>History Button</button>
      </div>
      <label>Electricity CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{electricity}</span><br/><br/>
      <label>Natural Gas CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{nGas}</span><br/><br/>
      <label>Wastewater treatment CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{water}</span><br/><br/>
      <label>Foodwaste CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{food}</span><br/><br/>
      <label>Plasticwaste treatment CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{plastic}</span><br/><br/>
      <label>Car CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{car}</span><br/><br/>
    </div>
  );
};

export default History;
