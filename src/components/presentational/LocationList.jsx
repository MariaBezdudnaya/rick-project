import { Collapse } from "./Collapse";
import { ResidentList } from "./ResidentList";
import { useLocations } from "../hooks/useLocations";

export const LocationList = () => {
  const { locations } = useLocations();
  return (
    <div>
      {locations.map((location) => (
        // <EpisodeItem key={episode.id} episode={episode} />
        <Collapse
          key={location.id}
          className="location"
          title={location.type + ":" + location.name}
          content={
            <ResidentList 
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