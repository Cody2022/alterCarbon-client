import React from 'react';
import './Datacharts.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const Datacharts = (props) => {
    const records=props.userData;
    const labels=records.map((record)=>record.date.slice(0,10));
    const electricity=records.map((record)=>record.electricity);
    const naturalGas=records.map((record)=>record.naturalGas);
    const water=records.map((record)=>record.water);
    const food=records.map((record)=>record.food);
    const plasticWaste=records.map((record)=>record.plasticWaste);
    const car=records.map((record)=>record.carMiles);
    const totalCarbon=records.map((record)=>record.totalCarbon);


        const options = {
            responsive: true,
            plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'CO2 Emissions from Different Sources',
            },
            },
            scales: {
                x: {
                  display: true,
                  title: {
                    display: true,
                    text: "Date",
                  },
                },
                y: {
                  display: true,
                  title: {
                    display: true,
                    text: "CO2 Emission, kg",
                  },
                },
              }
        };
          
        const data = {
            labels,
            datasets: [
            {
                label: 'Electricity',
                data: electricity,
                borderColor: 'rgb(34, 153, 84 )',
                backgroundColor: 'rgba( 34, 153, 84 , 0.7)',
            },
              {
                label: 'Natural Gas',
                data: naturalGas,
                borderColor: 'rgb(0, 0, 235)',
                backgroundColor: 'rgba(0, 0, 235, 0.7)',
              },
              {
                label: 'Wasterwater treatment',
                data: water,
                borderColor: 'rgb(125, 60, 152)',
                backgroundColor: 'rgba(125, 60, 152, 0.7)',
              },
              {
                label: 'Wastefood treatment',
                data: food,
                borderColor: 'rgb( 212, 172, 13 )',
                backgroundColor: 'rgba( 212, 172, 13 , 0.7)',
              },
              {
                label: 'Plasticwaste treatment',
                data: plasticWaste,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.7)',
              },
              {
                label: 'Car usage',
                data: car,
                borderColor: 'rgb( 23, 32, 42 )',
                backgroundColor: 'rgba( 23, 32, 42, 0.7)',
              },
              {
                label: 'Total Emission',
                data: totalCarbon,
                borderColor: 'rgb(255, 0, 0)',
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
              },
            ],
        };  
    return (
        <div className="chart-container">
            <Line options={options} data={data} />
        </div>
    )
  }
  
  export default Datacharts
