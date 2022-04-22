import { useState } from "react";
import { useNavigate } from "react-router-dom";



const History = (props) => {
  const [electricity, setElectricity] = useState(0);
  const [nGas, setNGas] = useState(0);
  const [water, setWater] = useState(0);
  const [food, setFood] = useState(0);
  const [car, setCar] = useState(0);
  const [plastic, setPlastic] = useState(0);
  const [carbon, setCarbon] = useState(0);

  const fetchHistoryData = async (user) => {
    const res = await fetch("/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  
    return await res.json();
  };

  // const navigate=useNavigate();
  // const handleClear=()=>{
  //     sessionStorage.clear();
  //     navigate('/history')

  const handleFetch = async (e) => {
    e.preventDefault();
    const historyData = await fetchHistoryData({user:"test5"});
    setElectricity(historyData.electricity)
    setNGas(historyData.naturalGas)
    setCar(historyData.carMiles)
    setPlastic(historyData.plasticWaste)
    setWater(historyData.water)
    setFood(historyData.food)
    console.log("historyData:",historyData)
    //console.log(historyData.electricity)
  };

  return (
    <div className="history-wrapper">
      <h1> Previous Data</h1>
      <div className="historyButton" onClick={handleFetch}>
        <button>History Button</button>
      </div>
      <label>Electricity CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{electricity}</span><br/><br/>
      <label>Natural Gas CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{nGas}</span><br/><br/>
      <label>Electricity CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{car}</span><br/><br/>
      <label>Electricity CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{water}</span><br/><br/>
      <label>Electricity CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{food}</span><br/><br/>
      <label>Electricity CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{plastic}</span><br/><br/>
    </div>
  );
};

export default History;
