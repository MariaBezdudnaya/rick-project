import { ResidentItem } from "./ResidentItem";
import { useResidents } from "../hooks/useResidents";

export const ResidentList = ({ ids }) => {
  const { residents, isLoading } = useResidents(ids);
  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }
  return (
    <div className="residents-container">
      {residents.map((resident) => (
        <ResidentItem key={resident.id} resident={resident} />
      ))}
    </div>
  );
};