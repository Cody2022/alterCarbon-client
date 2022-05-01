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

  // console.log("year is:",year, typeof year);
  // console.log("Month is:",month, typeof month);
  
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
            onClose={() => setPopupInfo(null)}
          >
            <div style={{fontVariant: "small"}}>
              <p>{"Facility name: "}{popupInfo.facilityname}</p>
              <p>Facility Address: {popupInfo.facilityaddress} <br/>{' '}{`${popupInfo.month}, ${popupInfo.year}`}</p>
              <p>{`${popupInfo.energy_description}: ${popupInfo.total_consumption} ${popupInfo.unit}`}</p>
            </div>
            
          </Popup>
        )}
      </Map>

      <ControlPanel setYear={setYear} year={year} setMonth={setMonth} month={month}/>
    </div>
  );
}

// export function renderToDom(container) {
//   render(<Facilities />, container);
// }
