import { useMemo, useState } from "react";
import { ResidentsContainer } from "../containers/ResidentsContainer";

export const LocationItem = ({ location }) => {
  const [open, setOpen] = useState(false);

  const ids = useMemo(
    () =>
      location.residents.map((resident) => {
        const id = resident.split("/").pop();
        return id;
      }),
    [location?.residents]
  );

  return (
    <div className="location" onClick={() => setOpen(true)}>
      <h3>{location.location + ":" + location.name}</h3>
      {open && <ResidentsContainer ids={ids} />}
    </div>
  );
};