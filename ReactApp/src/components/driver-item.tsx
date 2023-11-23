import { useState, useEffect } from "react";
import DriverService from "../services/DriverService";
import { DriverGameCard } from "./ui/cards";

export interface Driver {
  id: number;
  name?: string;
  imgUrl: string;
  age?: number;
  nationality?: string;
  skill?: number;
  aggression?: number;
  experience?: number;
}

export interface DriverItemProps {
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
    <div>
      {driver && (
        <DriverGameCard
          title={driver.name}
          nationality={driver.nationality}
          imgUrl={driver.imgUrl}
          age={driver.age}
          key={driver.id}
          aggression={driver.aggression}
          experience={driver.experience}
          skill={driver.skill}
        />
      )}
    </div>
  );
};

export default DriverItem;
