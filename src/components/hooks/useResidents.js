import { useState, useEffect } from "react";
import { fetchCharacters } from "../../api";

export const useResidents = (ids) => {
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

    return { residents, isLoading };
};


