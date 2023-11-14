import { useState, useEffect } from "react";
import DriverItem from "../driver-item";
import { DriverItemProps } from "../driver-item";
import DriverService from "../../services/DriverService";

export const DriverSelector: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<DriverItemProps>({});
  const [driverIds, setDriverIds] = useState<number[]>([]);
  const [currentDriverIndex, setCurrentDriverIndex] = useState(0);

  useEffect(() => {
    const fetchDriverIds = async () => {
      try {
        const fetchedDriverIds = await DriverService.getAllDriverIds();
        setDriverIds(fetchedDriverIds);

        if (fetchedDriverIds.length > 0) {
          setSelectedDriver({ driverId: fetchedDriverIds[0] });
        }
      } catch (error) {
        console.error("Error fetching driver IDs:", error);
      }
    };

    fetchDriverIds();
  }, []);

  const handleNextDriver = () => {
    const nextIndex = (currentDriverIndex + 1) % driverIds.length;
    setCurrentDriverIndex(nextIndex);
    setSelectedDriver({ driverId: driverIds[nextIndex] });
  };

  const handleSelectDriver = () => {
    localStorage.setItem("selectedDriver", JSON.stringify(selectedDriver));
  };

  return (
    <div className="text-white bg-blue-400 h-[400px] w-[500px]">
      <h3>Select Driver</h3>
      <DriverItem {...selectedDriver} />
      <div className="">
        <button
          className="bg-green-400 rounded-lg p-2"
          onClick={handleNextDriver}
        >
          Next Driver
        </button>
        <button
          className="bg-purple-400 rounded-lg p-2"
          onClick={handleSelectDriver}
        >
          Select Driver
        </button>
      </div>
    </div>
  );
};
