export const ResidentItem = ({ resident }) => {
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
      <div className={"resident " + getStatusClass(resident.status)}>
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
  };