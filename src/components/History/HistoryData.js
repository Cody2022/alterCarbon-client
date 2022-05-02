import React from 'react'

const HistoryData = (props) => {
    const records=props.userData;
  //  console.log("records is:", records)
  return (
      <div>
        <h2>Carbon Emission and Offset:</h2>
        <ul>
          {(records.length>0)? (
              records.map((record)=>{
                 return (
                    <div>
                    <p>Carbon footprint record at {record.date}:</p>
                    <li>Electricity CO2 emission, kg: {record.electricity}</li> 
                    <li>Natural Gas CO2 emission, kg: {record.naturalGas}</li> 
                    <li>Wastewater treatment CO2 emission, kg: {record.water}</li> 
                    <li>Foodwaste treatmet CO2 emission, kg: {record.food}</li> 
                    <li>Plasticwaste treatment CO2 emission, kg: {record.plasticWaste}</li> 
                    <li>Car CO2 emission, kg: {record.carMiles}</li>
                    <li>Total CO2 emission, kg: {record.totalCarbon}</li>
                    <li>Total CO2 emission is equivalent to carbon sequestered by:<br/>
                        <span style={{color:"green", fontWeight:"bold",textDecoration:"underline"}}>{Math.ceil (record.totalCarbon/60)} </span>
                        <span>tree seedlings grown for 10 years </span> 
                        <a href="https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references#seedlings">(more information)</a>
                    </li>
                    </div>
                )
                })
            ): (<p>No record found</p>) 
          }
       </ul>
    </div>
    
  )
}

export default HistoryData