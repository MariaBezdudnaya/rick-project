import { ResidentItem } from "./ResidentItem";

export const ResidentList = ({ residents, isLoading }) => {
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