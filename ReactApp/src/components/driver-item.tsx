import { useState, useEffect } from "react";
import DriverService from "../services/DriverService";
import { DriverCard } from "./ui/cards";
import { CardContainer } from "./ui/card-container";

interface Driver {
  id: number;
  name: string;
  imgUrl: string;
  age: number;
  nationality: string;
}

interface DriverItemProps {
  driverId?: number;
  driverName?: string;
}

const DriverItem: React.FC<DriverItemProps> = ({ driverId, driverName }) => {
  const [driver, setDriver] = useState<Driver | null>(null);

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        let fetchedDriver: Driver | null;

        if (driverId) {
          fetchedDriver = await DriverService.getById(driverId);
        } else if (driverName) {
          fetchedDriver = await DriverService.getByName(driverName);
        } else {
          fetchedDriver = null;
        }

        setDriver(fetchedDriver);
      } catch (error) {
        console.error("Error fetching driver:", error);
      }
    };
    fetchDriver();
  }, [driverId, driverName]);

  return (
    <CardContainer>
      {driver && (
        <DriverCard
          title={driver.name}
          nationality={driver.nationality}
          imgUrl={driver.imgUrl}
          age={driver.age}
        />
      )}
    </CardContainer>
  );
};

export default DriverItem;
