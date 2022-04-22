import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Calculation.css'
// { History } from "../History/History";

const Calculation=()=>{
    const [electricity, setElectricity]=useState(0);
    const [nGas, setNGas]=useState(0);
    const [water, setWater]=useState(0);
    const [food, setFood]=useState(0);
    const [car, setCar]=useState(0);
    const [plastic, setPlastic]=useState(0);
    const [carbon, setCarbon]=useState(0);
    // const {electricityco2e,gasco2e,waterco2e,foodco2e,plasticco2e,carco2e}=carbonEmission;
    const [carbonEmission, setCarbonEmission]=useState({
        electricityco2e :0,
        gasco2e:0,
        waterco2e :0,
        foodco2e :0,
        plasticco2e:0,
        carco2e:0
    });


   const fetchCarbon = async (carbonSources) => {
      const response = await fetch("/api/carbon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carbonSources),
      });
      return response.json();
    };

    const handleSubmit = async e => {
      e.preventDefault();
      const carbonEmission = await fetchCarbon({
        electricity,
        nGas,
        water,
        food,
        plastic,
        car  
      });
      console.log("CarbonEmission is", (carbonEmission))
      const {electricityco2e,gasco2e,waterco2e,foodco2e,plasticco2e,carco2e}=carbonEmission;
      let totalcarbon=Number((electricityco2e+gasco2e+waterco2e+foodco2e+plasticco2e+carco2e).toFixed(2));
      setCarbonEmission(carbonEmission);  
      setCarbon (totalcarbon)
      ;
    }
    const navigate=useNavigate();
    const handleLogout=()=>{
        sessionStorage.clear();
        navigate('/')
    }

    const handleHistory=()=>{
        navigate('/history')
    }

    return(
        <div className="carbon-wrapper">
           <div className="logoutButton" onClick={handleLogout}>
               <button>Logout</button>
           </div>
           <div className="historyButton" onClick={handleHistory}>
               <button>History</button>
           </div>
        

          <h1 style={{textAlign:"center"}}>Carbon footprint calculation</h1>
             <div className="center">
                <form className="carbonSources-form" style={{dispaly:"flex"}} onSubmit={handleSubmit}>
                  <label>Electricity, kWh: </label> <br/>
                        <input type="text" name="Electricity" value={electricity} style={{textAlign: "center"}} onChange={e => setElectricity(e.target.value)}/><br/>
                        <label>Electricity CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{carbonEmission.electricityco2e}</span><br/><br/>
                                                            
                    <label>Natural gas, GJ: </label><br/>
                        <input type="text" name="nGas" value={nGas} style={{textAlign: "center"}} onChange={e => setNGas(e.target.value)}/><br/>
                        <label>Natural gas CO2 emission, kg: </label> <span style={{textDecoration:"underline",fontWeight:"bold"}}>{carbonEmission.gasco2e}</span><br/><br/>    
                    <label>Water, m3: </label><br/>
                        <input type="text" name="water" value={water} style={{textAlign: "center"}} onChange={e => setWater(e.target.value)}/><br/>
                        <label>Wastewater treatment CO2 emission, kg: </label> <span style={{margin:5,textDecoration:"underline",fontWeight:"bold"}}>{carbonEmission.waterco2e}</span><br/><br/>
                    <label>Food, kg: </label><br/>
                        <input type="text" name="food" value={food} style={{textAlign: "center"}} onChange={e => setFood(e.target.value)}/><br/>
                        <label>Foodwaste treatment CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{carbonEmission.foodco2e}</span><br/><br/>
                    <label>Plastic, kg: </label><br/>
                        <input type="text" name="plastic" value={plastic} style={{textAlign: "center"}} onChange={e => setPlastic(e.target.value)}/><br/>
                        <label>Plastic treatment CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{carbonEmission.plasticco2e}</span><br/><br/>
                    <label>Distance of using car, km: </label><br/>
                        <input type="text" name="car" value={car} style={{textAlign: "center"}} onChange={e => setCar(e.target.value)}/><br/>
                        <label>Car CO2 emission, kg: </label> <span style={{margin:5, textDecoration:"underline",fontWeight:"bold"}}>{carbonEmission.carco2e}</span><br/>
                    <div>
                        <br/>
                        <button type="submit" style={{color:"black",fontWeight:"bold",backgroundColor:"#ffef00"}}>Calculate</button>
                    </div>
                    <div>
                        <label>Total CO2 equivalent, kg: </label><span style={{textDecoration:"underline",fontWeight:"bold"}} >{carbon}</span> 
                     </div>
                     <br/>
                </form>
            </div>
            
        </div>    
      );

}

export default Calculation;