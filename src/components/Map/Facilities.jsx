import * as React from 'react';
import {useState, useMemo} from 'react';
import {render} from 'react-dom';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import ControlPanel from './ControlPanel';
import Pin from './pin';
import "./Map.css"
import FacilitiesData from '../Data/electricity.json';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Set your mapbox token here

export default function Facilities() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [year, setYear]=useState(2020);
  const [month, setMonth]=useState("Dec");
  const [showEmission,setShowEmission]=useState(false);
  const [electricityCO2,setElectricityCO2]=useState();
 
  const FacilitiesDataYearMonth=FacilitiesData.filter(facility=>facility.year===`${year}` && facility.month===`${month}`)

  const pins = useMemo(
    () =>
    FacilitiesDataYearMonth.map((facility, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={facility.longitude}
          latitude={facility.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(facility);
          }}
        >
          <Pin />
        </Marker>
      ))
  );

    const handleButton=async (e)=>{
      e.preventDefault();
      const response = await fetch("/api/electricity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({electricity:popupInfo.total_consumption}),
      });
      if (response.status===200) {
          const data=await response.json();
          setShowEmission(true);
          setElectricityCO2(data.electricityCO2);
      }
    }

  return (
    <div id='map'>
      <Map
          initialViewState={{
            longitude: -114.027608,
            latitude: 51.045614,
            zoom: 10,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/mapbox/outdoors-v11?optimize=true"
          mapboxAccessToken={TOKEN}
      >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
        
        {pins}
        
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => {setPopupInfo(null); setShowEmission(false)}}
            onOpen={()=>{setShowEmission(false)}}
            style={{border:"solid", borderColor:"#4110efe0"}}
            
          >
            <div style={{backgroundColor:"rgba(211, 250, 0, 0.4)", fontVariant: "small"}}>
              <p>{"Facility name: "}{popupInfo.facilityname}</p>
              <p>Facility Address: {popupInfo.facilityaddress} <br/>{`Date: `}{`${popupInfo.month}, ${popupInfo.year}`}</p>
              <p>{`${popupInfo.energy_description}: ${popupInfo.total_consumption} ${popupInfo.unit}`}</p>
              <button onClick={handleButton}>Carbon footprint</button>
              {showEmission&&electricityCO2 && <p>CO2 Equivalent, kg: {electricityCO2} <br/> Offset: {Math.ceil(electricityCO2/60)} tree(s) seedlings grown for 10 years</p>}   
            </div>
            
          </Popup>
        )}
      </Map>

      <ControlPanel setYear={setYear} year={year} setMonth={setMonth} month={month}/>
    </div>
  );
}


