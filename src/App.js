import React, { useState } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

const title = "HackerMaps";
const initialLocations = [
  "Lombard St, San Francisco, CA, USA",
  "PIER 39, The Embarcadero, San Francisco, CA, USA",
  "Golden Gate Bridge, San Francisco, CA, USA",
  `Fisherman's Wharf, San Francisco, CA, USA`,
  "Alcatraz Island, San Francisco, CA, USA",
];

const App = () => {
  const [locations, setLocations] = useState(initialLocations);

  const updateLocations = (newLocations) => {
    setLocations(newLocations);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <Navigation locations={locations} onLocationsChange={updateLocations} />
    </div>
  );
};

export default App;
