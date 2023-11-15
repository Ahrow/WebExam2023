import { useContext } from "react";
import { DriverCard } from "./ui/cards";
import { CardContainer } from "./ui/card-container";
import { DriverContext } from "./contexts/driver-context";

export const DriverList = () => {
  const context = useContext(DriverContext);

  if (!context) {
    return null;
  }

  const { drivers } = context;

  return (
    <CardContainer>
      {drivers.map((driver) => (
        <DriverCard
          title={driver.name}
          nationality={driver.nationality}
          imgUrl={driver.imgUrl}
          age={driver.age}
          key={driver.id}
        />
      ))}
    </CardContainer>
  );
};
