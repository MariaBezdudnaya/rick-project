import { useState } from "react";
// import { Rick } from "./components/Rick";
// import { EpisodesContainer } from "./components/containers/EpisodesContainer";
import { EpisodeList } from "./components/presentational/EpisodeList";
// import { Locations } from "./components/Locations";
// import { LocationsContainer } from "./components/containers/LocationsContainer";
import { LocationList } from "./components/presentational/LocationList";
import "./App.css";

function App() {

  const [showRick, setShowRick] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  const toggleRick = () => {
    setShowRick(!showRick);
    setShowLocations(false);
  };

  const toggleLocations = () => {
    setShowLocations(!showLocations);
    setShowRick(false);
  };

  return (
    <div className="ShowCard_conatainer">
      <div className="ShowCard" onClick={toggleRick}>Episodes</div>
      {showRick && <EpisodeList />}
      <div className="ShowCard" onClick={toggleLocations}>Locations</div>
      {showLocations && <LocationList />}
    </div>
  );
}

export default App
