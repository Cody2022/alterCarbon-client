import { BorderRight, CenterFocusStrong } from "@mui/icons-material";
import { Button, Container, Grid, TextField } from "@mui/material";
import { Box, color } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calculation.css";
import calPage from "../../img/calPage.png";

const Calculation = () => {
  const [electricity, setElectricity] = useState(0);
  const [nGas, setNGas] = useState(0);
  const [water, setWater] = useState(0);
  const [food, setFood] = useState(0);
  const [car, setCar] = useState(0);
  const [plastic, setPlastic] = useState(0);
  const [carbon, setCarbon] = useState();
  const [carbonEmission, setCarbonEmission] = useState({
    electricityco2e: 0,
    gasco2e: 0,
    waterco2e: 0,
    foodco2e: 0,
    plasticco2e: 0,
    carco2e: 0,
  });
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showSaveStatus, setShowSaveStatus] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carbonEmission = await fetchCarbon({
      electricity,
      nGas,
      water,
      food,
      plastic,
      car,
    });
    const {
      electricityco2e,
      gasco2e,
      waterco2e,
      foodco2e,
      plasticco2e,
      carco2e,
    } = carbonEmission;
    let totalcarbon = Number(
      (
        electricityco2e +
        gasco2e +
        waterco2e +
        foodco2e +
        plasticco2e +
        carco2e
      ).toFixed(2)
    );
    setCarbonEmission(carbonEmission);
    setCarbon(totalcarbon);
    setShowSaveButton(true);
    setShowSaveStatus(false);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const handleHistory = () => {
    navigate("/history");
  };

  const postRecord = async (userRecord) => {
    const response = await fetch("/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userRecord),
    });
    if (response.status === 200) {
      setShowSaveStatus(true);
      return response.json();
    }
  };

  const handleSaveResult = async (e) => {
    e.preventDefault();
    const tokenString = sessionStorage.getItem("token");
    const tokenObject = JSON.parse(tokenString);
    const { status, id } = tokenObject;

    if (status === "successful") {
      //get carbon emission data and save
      const date = new Date().toLocaleString();
      const electricity = carbonEmission.electricityco2e;
      const naturalGas = carbonEmission.gasco2e;
      const carMiles = carbonEmission.carco2e;
      const plasticWaste = carbonEmission.plasticco2e;
      const water = carbonEmission.waterco2e;
      const food = carbonEmission.foodco2e;
      const totalCarbon = carbon;
      const record = {
        date,
        electricity,
        naturalGas,
        carMiles,
        plasticWaste,
        water,
        food,
        totalCarbon,
      };
      const userName = id;

      const recordSaved = await postRecord({ userName, record });
    }
  };
  
  return (
    <Container 
    fluid
      style={{
        backgroundImage: `url(${calPage})`,
        backgroundRepeat: "no-repeat",
        height: 700,
        width: 1800,
      }}
    >
      <h1>Carbon Footprint Calculator</h1>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid>
          <div className="loginButton" >
            <Button variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
          </div>

          <div className="carbon-form-right" style={{ color: 'black', backgroundColor: '#efeafb' }}>
            <form style={{ dispaly: "flex" }} onSubmit={handleSubmit}>
              <div className="carbon-form"></div>

              <h2>Enter Monthly Consumtion</h2>
              <TextField
                label="Electricty Consumtion (kWh/month)"
                variant="standard"
                type="text"
                name="Electricity"
                value={electricity}
                style={{ textAlign: "center" }}
                onChange={(e) => setElectricity(e.target.value)}
              />

              <br />
              <br />
              <TextField
                label="Natual Gas Consumtion(gigajoule(GL)/month)"
                variant="standard"
                type="text"
                name="nGas"
                value={nGas}
                style={{ textAlign: "center" }}
                onChange={(e) => setNGas(e.target.value)}
              />

              <br />
              <br />
              <TextField
                label="Water Consumtion(m3/month)"
                variant="standard"
                type="text"
                name="water"
                value={water}
                style={{ textAlign: "center" }}
                onChange={(e) => setWater(e.target.value)}
              />

              <br />
              <br />
              <TextField
                label="Foodwaste going to landfill(kg/month)"
                variant="standard"
                type="text"
                name="food"
                value={food}
                style={{ textAlign: "center" }}
                onChange={(e) => setFood(e.target.value)}
              />

              <br />
              <br />
              <TextField
                label="Plasticwaste going to landfill (kg/month)"
                variant="standard"
                type="text"
                name="plastic"
                value={plastic}
                style={{ textAlign: "center" }}
                onChange={(e) => setPlastic(e.target.value)}
              />

              <br />
              <br />
              <TextField
                label="Car Driving (kilometer/month)"
                variant="standard"
                type="text"
                name="car"
                value={car}
                style={{ textAlign: "center" }}
                onChange={(e) => setCar(e.target.value)}
              />

              <br />
              <br />
              <div className="calButton">
                <br />
                <br />
                <br />
                <Button type="submit">Calculate</Button>
                <br />
                {showSaveButton && (
                  <Button onClick={handleSaveResult}>Save</Button>
                )}
              </div>

              <br />
              <br />
            </form>
            
            <br></br>
          </div>
        </Grid>
        <Grid>
          <div className="carbon-form-left" style={{ color: 'black', backgroundColor: '#efeafb' }}>
          {showSaveStatus && <p>Record has been saved successfully!</p>}
            {carbon && <h2>Total CO2 equivalent, kg: {carbon}</h2>}
            <br />
            <form>
              <label>Electricity CO2 emission, kg: </label>{" "}
              <span
                style={{
                  margin: 5,
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                {carbonEmission.electricityco2e}
              </span>
              <br />
              <label>Natural gas CO2 emission, kg: </label>{" "}
              <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
                {carbonEmission.gasco2e}
              </span>
              <br />
              <label>Wastewater treatment CO2 emission, kg: </label>{" "}
              <span
                style={{
                  margin: 5,
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                {carbonEmission.waterco2e}
              </span>
              <br />
              <label>Foodwaste treatment CO2 emission, kg: </label>{" "}
              <span
                style={{
                  margin: 5,
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                {carbonEmission.foodco2e}
              </span>
              <br />
              <label>Plasticwaste treatment CO2 emission, kg: </label>{" "}
              <span
                style={{
                  margin: 5,
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                {carbonEmission.plasticco2e}
              </span>
              <br />
              <label>Car CO2 emission, kg: </label>{" "}
              <span
                style={{
                  margin: 5,
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                {" "}
                {carbonEmission.carco2e}
              </span>
              <br />
              <br />
              <div className="dataButton" onClick={handleHistory}>
                <Button variant="outlined">Track Carbon Footprint</Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculation;
