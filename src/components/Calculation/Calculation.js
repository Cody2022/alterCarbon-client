import React, {useEffect, useState} from 'react';
import './Calculation.css'

const Calculation=()=>{
    const [electricity, setElectricity]=useState();
    const [nGas, setNGas]=useState();
    const [water, setWater]=useState();
    const [food, setFood]=useState();
    const [car, setCar]=useState();
    const [plastic, setPlastic]=useState();
    let [carbon, setCarbon]=useState();

   const fetchCarbon = async (carbonSources) => {
      const response = await fetch("/carbon", {
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
      console.log("Carbon is", (carbonEmission.co2e))
      carbon=carbonEmission.co2e;
      setCarbon(carbon);
    }

    return(
        <div className="carbon-wrapper">
                <h1 >Calculation carbon footprint</h1>
                <form className="carbonSources-form" onSubmit={handleSubmit}>
                    <label>Electricity, kWh: </label><br/>  
                        <input type="text" name="Electricity" onChange={e => setElectricity(e.target.value)}/><br/>
                    <label>Natural gas, GJ: </label><br/>
                        <input type="text" name="nGas" onChange={e => setNGas(e.target.value)}/><br/>
                    <label>Water, m3: </label><br/>
                        <input type="text" name="water" onChange={e => setWater(e.target.value)}/><br/>
                    <label>Food, kg: </label><br/>
                        <input type="text" name="food" onChange={e => setFood(e.target.value)}/><br/>
                    <label>Plastic, kg: </label><br/>
                        <input type="text" name="plastic" onChange={e => setPlastic(e.target.value)}/><br/>
                    <label>Car, km: </label><br/>
                        <input type="text" name="car" onChange={e => setCar(e.target.value)}/><br/>
                      
                    <div>
                        <button type="submit">Calculate</button>
                    </div>
                    <br/><label>CO2 equivelant, kg: </label>{carbon} 
                
                </form>
            </div>    
      );

}


export default Calculation;