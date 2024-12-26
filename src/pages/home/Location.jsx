import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Location = () => {
  
  const Location = [21.414334, 91.983183]; 

  return (
    <div className="w-full h-[400px]">
      <MapContainer center={Location} zoom={15} style={{ height: "100%", width: "100%" }}>
        {/* TileLayer to display the map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marker for hotel location */}
        <Marker
          position={Location}
          icon={new Icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/0/619.png",
            iconSize: [32, 32],
          })}
        >
          <Popup>
            <strong>Room Haven</strong>
            <br />
            Near Cox's Bazar Beach, Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
