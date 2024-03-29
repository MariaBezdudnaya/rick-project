import { Collapse } from "./Collapse";
import { ResidentsContainer } from "../containers/ResidentsContainer";

export const LocationList = ({ locations }) => {
  return (
    <div>
      {locations.map((location) => (
        // <EpisodeItem key={episode.id} episode={episode} />
        <Collapse
          key={location.id}
          className="location"
          title={location.type + ":" + location.name}
          content={
            <ResidentsContainer 
              ids={location.residents.map((resident) => {
                const id = resident.split("/").pop();
                return id;
              })} 
            />}
        />
      ))}
    </div>
  );
};