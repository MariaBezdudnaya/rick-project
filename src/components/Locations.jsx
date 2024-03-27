import { useEffect, useState } from "react";
import { fetchLocations, fetchCharacters } from "./api";
import "./Locations.css";

export const Locations = () => {
 
    const [locations, setLocations] = useState([]); //
    const [residentsByLocations, setResidentsByLocations] = useState({});
    const [isLoadingByLocations, setIsLoadingByLocations] = useState({});

    useEffect(() => { //
        fetchLocations().then((data) => {
            console.log(data);
            setLocations(data);
        });
    }, []);

    const handleLocationClick = (location) => { //
        const ids = location.residents.map((resident) => {
            const id = resident.split("/").pop();
            return id;
        });

        setIsLoadingByLocations({ ...isLoadingByLocations, [location.id]: true });

        fetchCharacters(ids).then((data) => {
          console.log(data);
          setResidentsByLocations({ ...residentsByLocations, [location.id]: data });
          setIsLoadingByLocations({ ...isLoadingByLocations, [location.id]: false });
        });
    };

        const getStatusClass = (status) => {
            switch (status) {
              case "Alive":
                return "resident-alive";
              case "Dead":
                return "resident-dead";
              default:
                return "resident-unknown";
            }
        };


        return (
            <div>

                {locations.map((location) => { //
                    return (
                        <div
                            key={location.id}
                            className="location"
                            onClick={() => handleLocationClick(location)}
                        >
                            
                            <h3>{location.type + ": " + location.name}</h3>

                            <div className="residents-container">
                                {isLoadingByLocations[location.id] && (
                                    <div className="loading">Загрузка...</div>
                                )}

                                {residentsByLocations[location.id]?.map((resident) => {
                                    return (
                                        <div 
                                            key={location.id + ": " + resident.id}
                                            className={"resident " + getStatusClass(resident.status)}
                                        >     
                                            <div className="resident-left">
                                                <img src={resident.image} alt={resident.name} />
                                            </div>
                                            <div className="resident-right">
                                                <h3>{resident.name}</h3>
                                                <div>Вид: {resident.species}</div>
                                                <div>Пол: {resident.gender}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    );
                })}   

            </div>
        );
    };