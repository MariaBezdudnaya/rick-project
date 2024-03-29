import { useEffect, useState } from "react";
import { fetchCharacters } from "../../api";
import { ResidentList } from "../presentational/ResidentList";
import "../Locations.css";

export const ResidentsContainer = ({ ids }) => {
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters(ids).then((data) => {
      if (!Array.isArray(data)) {
        data = [data];
      }
      console.log(data);
      setResidents(data);
      setIsLoading(false);
    });
  }, [ids]);

  return <ResidentList residents={residents} isLoading={isLoading} />;
};