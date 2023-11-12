import React, { useState, useEffect } from "react";
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

const DriverItem: React.FC<{ driverId: number }> = ({ driverId }) => {
  const [driver, setDriver] = useState<Driver | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const fetchedDriver = await DriverService.getById(driverId);

        setDriver(fetchedDriver);
        setError(null);
      } catch (error) {
        setError("Error fetching driver");
        console.error("Error fetching driver:", error);
      }
    };
    fetchDriver();
  }, [driverId]);

  return (
    <CardContainer>
      {error && <p>{error}</p>}
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
