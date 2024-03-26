import { useEffect, useState } from "react";
import { fetchEpisodes, fetchCharacters, fetchLocations } from "./api";
import "./Rick.css";

export const Rick = () => {
    const [episodes, setEpisodes] = useState([]);
    const [locationsByEpisodes, setLocationsByEpisodes] = useState({});
    const [isLoadingByEpisodes, setIsLoadingByEpisodes] = useState({});

    const [locations, setLocations] = useState([]); //
    const [charactersByLocations, setCharactersByLocations] = useState({});
    const [isLoadingByLocations, setIsLoadingByLocations] = useState({});


    useEffect(() => {
        fetchEpisodes().then((data) => {
            console.log(data);
            setEpisodes(data);
        });
    }, []);

    useEffect(() => { //
        fetchLocations().then((data) => {
            console.log(data);
            setLocations(data);
        });
    }, []);

    // const handleEpisodeClick = (episode) => {
    //     const ids = episode.location.map((location) => {
    //         const id = location.split("/").pop();
    //         return id;
    //     });
        
    //     setIsLoadingByEpisodes({ ...isLoadingByEpisodes, [episode.id]: true });

    //     fetchLocations(ids).then((data) => {
    //         console.log(data);
    //         setLocationsByEpisodes({ ...locationsByEpisodes, [episode.id]: data });
    //         setIsLoadingByLocations({ ...isLoadingByLocations, [episode.id]: false });
    //     });
    // };

    const handleLocationClick = (location) => { //
        const ids = location.residents.map((resident) => {
            const id = resident.split("/").pop();
            return id;
        });

        setIsLoadingByLocations({ ...isLoadingByLocations, [location.id]: true });

        fetchCharacters(ids).then((data) => {
            console.log(data);
            setCharactersByLocations({ ...charactersByLocations, [location.id]: data });
            setIsLoadingByLocations({ ...isLoadingByLocations, [location.id]: false });
        });
    }

    const getStatusClass = (status) => {
        switch (status) {
          case "Alive":
            return "character-alive";
          case "Dead":
            return "character-dead";
          default:
            return "character-unknown";
        }
    };

    return (
        <div>
            {episodes.map((episode) => {
                return (
                    <div
                        key={episode.id}
                        className="episode"
                        onClick={() => handleEpisodeClick(episode)}
                    >
                        <h3>{episode.episode + ": " + episode.name}</h3>

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

                                        {charactersByLocations[location.id]?.map((resident) => {
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
            })}
        </div>
    );
};