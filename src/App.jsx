import { useState } from "react";
import { Rick } from "./components/Rick";
import { Locations } from "./components/Locations";
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
      {showRick && <Rick />}
      <div className="ShowCard" onClick={toggleLocations}>Locations</div>
      {showLocations && <Locations />}
    </div>
  );
}

export default App
