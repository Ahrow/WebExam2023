import DriverService from "../services/DriverService";
import { useState, useEffect } from "react";
import { DriverCard } from "./ui/cards";
import { CardContainer } from "./ui/card-container";

export const DriverList = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    const drivers = await DriverService.getAllDrivers();
    setDrivers(drivers);
  };

  interface Driver {
    id: number;
    name: string;
    imgUrl: string;
    age: number;
    nationality: string;
  }

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
