import { useEffect, useState } from "react";
import { fetchLocations } from "../../api";
import { LocationList } from "../presentational/LocationList";
import "../Locations.css";

export const LocationsContainer = () => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetchLocations().then((data) => {
      setLocations(data);
      console.log(data);
    });
  }, []);

  return <LocationList locations={locations} />;
};