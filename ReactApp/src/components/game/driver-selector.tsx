import { useState, useEffect } from "react";
import DriverItem from "../driver-item";
import DriverService from "../../services/DriverService";

interface DriverStats {
  driverId: number;
  name: string;
  skill: number;
  aggression: number;
}

export const DriverSelector: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<DriverStats | null>(
    null
  );
  const [driverIds, setDriverIds] = useState<number[]>([]);
  const [currentDriverIndex, setCurrentDriverIndex] = useState(0);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        const fetchedDriverIds = await DriverService.getAllDriverIds();
        setDriverIds(fetchedDriverIds);

        if (fetchedDriverIds.length > 0) {
          const selectedDriverId = fetchedDriverIds[0];
          const driverStats = await DriverService.getById(selectedDriverId);
          setSelectedDriver({ driverId: selectedDriverId, ...driverStats });
        }
      } catch (error) {
        console.error("Error fetching driver data:", error);
      }
    };

    fetchDriverData();
  }, []);

  const handleNextDriver = async () => {
    const nextIndex = (currentDriverIndex + 1) % driverIds.length;
    const nextDriverId = driverIds[nextIndex];
    const driverStats = await DriverService.getById(nextDriverId);
    setCurrentDriverIndex(nextIndex);
    setSelectedDriver({ driverId: nextDriverId, ...driverStats });
  };

  const handleSelectDriver = () => {
    localStorage.setItem("selectedDriver", JSON.stringify(selectedDriver));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3>Select Driver</h3>
      {selectedDriver && <DriverItem {...selectedDriver} />}
      <div>
        <button
          className="bg-red-400 rounded-lg p-2"
          onClick={handleNextDriver}
        >
          Next Driver
        </button>
        <button
          className="bg-teal-400 rounded-lg p-2"
          onClick={handleSelectDriver}
        >
          Select Driver
        </button>
      </div>
    </div>
  );
};
