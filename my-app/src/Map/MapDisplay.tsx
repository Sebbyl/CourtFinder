import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import dot from "../SVG/dot-single-svgrepo-com.svg";
import tennisDataset from "../Tennis_Courts.json";
import volleyballDataset from "../Volleyball_Courts.json";
import CourtSelector from "./CourtSelector";
import { useState, useContext } from "react";
import { selectContext } from "../Context/SelectProvider";

const tennisIcon = new L.Icon({
  iconUrl: dot,
  iconSize: [10, 10],
});

const volleyballIcon = new L.Icon({
  iconUrl: dot,
  iconSize: [10, 10],
});

const ottawaCoords: [number, number] = [45.3201, -75.7003];

const sportDataset = {
  tennis: tennisDataset,
  volleyball: volleyballDataset,
};

export default function MapDisplay() {
  // console.log(selectedSet);
  const [selectedSport, setSelectedSport] = useState(null);
  const { sport, setSport } = useContext(selectContext);
  console.log(sportDataset["volleyball"]);
  return (
    <MapContainer
      center={ottawaCoords}
      zoom={11}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sport.map((sportVal) =>
        sportDataset[sportVal as keyof typeof sportDataset].features.map(
          (val) => (
            <Marker
              position={[
                val.geometry.coordinates[1],
                val.geometry.coordinates[0],
              ]}
              icon={tennisIcon}
            >
              <Popup>
                <span>
                  <b>Park Name:</b>{" "}
                </span>
                {val.properties.PARKNAME}
                <br />
                {/* <span>
                  <b>Address:</b>{" "}
                </span>
                {val.properties.ADDRESS}
                <br />
                <span>
                  <b>Club:</b>{" "}
                </span>
                {val.properties.CLUB}
                <br />
                <span>
                  <b>Court Type:</b>{" "}
                </span>
                {val.properties.COURT_TYPE}
                <br /> */}
                <span>
                  <b>Number of Courts:</b>{" "}
                </span>
                {val.properties.NO_COURTS}
                <br />
                {/* <span>
                  <b>Court Material: </b> {val.properties.SURFACE_COLOUR}
                </span>
                <br />
                <span>
                  <b>Lights:</b>{" "}
                </span>
                {val.properties.LIGHTS?.split("/")[0]}
                <br /> */}
              </Popup>
            </Marker>
          )
        )
      )}
    </MapContainer>
  );
}
