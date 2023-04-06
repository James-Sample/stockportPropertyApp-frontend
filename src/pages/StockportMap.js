import React from "react";
import "../styles/pages/mappage.css";

const MapPage = () => (
  <div className="mapcontainer">
    {/* <h1>Stockport Map</h1> */}
    <div className="map">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1iHyAT2MIGHZjjfehyeEIANjKuH1nxB4&ehbc=2E312F&z=11"
        height="100%"
        width="100%"
        style={{ border: "0" }}
        allowfullscreen
        loading="lazy"
        title="map"
      />
    </div>
  </div>
);

export default MapPage;
