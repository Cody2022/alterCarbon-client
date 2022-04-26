//const dotenv = require('dotenv').config()
import { RulerControl, StylesControl, CompassControl, ZoomControl } from 'mapbox-gl-controls';
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";
import Map, { Layer, Source, Marker, NavigationControl } from "react-map-gl";
import geoJsonData from "./Data/ParksSitesAddress.geojson";
import "../App.css";
//import parkLogo from './svg/park-trees.svg';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

const AKEY = process.env.REACT_APP_MAPBOX_TOKEN;
const dataLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "percentile",
      stops: [
        [0, "#3288bd"],
        [1, "#66c2a5"],
        [2, "#abdda4"],
        [3, "#e6f598"],
        [4, "#ffffbf"],
        [5, "#fee08b"],
        [6, "#fdae61"],
        [7, "#f46d43"],
        [8, "#d53e4f"],
      ],
    },
    "fill-opacity": 0.8,
  },
};

const navControlStyle = {
  right: 10,
  top: 10,
};

const Maps = (props) => {
  const [viewport, setViewport] = useState();
  const [hoverInfo, setHoverInfo] = useState(null);
  return (
    <div className="mapboxgl-ctrl-group 
                    mapboxgl-ctrl-icon 
                    mapboxgl-ctrl-compass-arrow" >
      
      <Map
        initialViewState={{
          longitude: -114.0719,
          latitude: 51.0447,
          center: [-144, 51],
          zoom: 9.4,
          pixelRatio: window.devicePixelRatio || 1,
          attributionControl: false,
          logo: false,
          locale: {
            'NavigationControl.ZoomIn': 'Zoom in',
            'NavigationControl.ZoomOut': 'Zoom out',
          }
        }}
          
          mapboxAccessToken={AKEY}
          style={{ width: 1300, height: 660 }}
          mapStyle="mapbox://styles/mapbox/outdoors-v11?optimize=true"  
      >
        <Source type="geojson" data={geoJsonData}>
          <Layer
            {...dataLayer}
          />
        </Source>

        {/* {geoJsonData.map(park => (
          <Marker 
            key={park.properties.steward}
            latitude={parseFloat(park.geometry.coordinates[0][0][0][1])}
            longitude={parseFloat(park.geometry.coordinates[0][0][0][0])}
          >
              <button className = "park-marker">
                <img src={parkLogo} alt="parks "/>
                  Sorry, your browser does not support inline SVG.
              </button>
          </Marker>
        ))} */}

        <div className="sidebar">
          Longitude: {}| Latitude: {} | Zoom: {}
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={viewport} />
        </div>
  
      </Map>
    </div>
  );
};

export default Maps;