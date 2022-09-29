import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = (props)=> {
  const setShowFooter = props.setShowFooter;
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    const geoLocation = async () => {
      let geoResponse = await fetch ("https://ipapi.co/184.64.0.1/json/")     
      let geoJson = await geoResponse.json();
      setCity(geoJson.city);
    };
    geoLocation();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch("/api/weather", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cityName: city }),
      });
      
      if (response.status === 200) {
          const weatherData = await response.json();
          const { main, sys, weather } = weatherData;
          setIcon(
            `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
          );
          setDescription(weather[0]["description"]);
          setCountry(sys.country);
          setTemp(Math.round(main.temp));
      } else {
        setShowFooter(false);
      }
    };
        if (city) {fetchWeather()}
  }, [city]);

  return (
    <div className="footer" style={{fontWeight:"bold"}}>
      <div className="canvas">
        <span>{city}</span><sup>{country}</sup>
        <br />
        <span className="city-temp">{temp}<sup>°C</sup></span>
        <figure className="icon">
          <img className="weather-icon" src={icon} alt={description} />
          <figcaption>{description}</figcaption>
        </figure>
        <br />
      </div>
    </div>
  );
};

export default Footer;
