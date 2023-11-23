import { useState, useEffect } from "react";
import { CarItem } from "../car-item";
import CarService from "../../services/CarService";

interface CarStats {
  carId: number;
  name: string;
  speed: number;
  handling: number;
  acceleration: number;
}

export const CarSelector: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<CarStats | null>(null);
  const [carIds, setCarIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const fetchedCarIds = await CarService.getAllCarIds();
        setCarIds(fetchedCarIds);

        if (fetchedCarIds.length > 0) {
          const selectedCarId = fetchedCarIds[0];
          const carStats = await CarService.getById(selectedCarId);
          setSelectedCar({ carId: selectedCarId, ...carStats });
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchCarData();
  }, []);

  const handleNextCar = async () => {
    const nextCarIndex =
      (selectedCar ? carIds.indexOf(selectedCar.carId || 0) : 0) + 1;
    const nextCarId = carIds[nextCarIndex % carIds.length];
    const carStats = await CarService.getById(nextCarId);
    setSelectedCar({ carId: nextCarId, ...carStats });
  };

  const handleSelectCar = () => {
    localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl my-4">Select Car</h3>
      {selectedCar && <CarItem carId={selectedCar?.carId} />}
      <div className="my-4 w-full flex flex-wrap justify-center gap-2">
        <button className="bg-red-500 rounded-lg p-2" onClick={handleNextCar}>
          Next Car
        </button>
        <button
          className="bg-purple-500 rounded-lg p-2"
          onClick={handleSelectCar}
        >
          Select Car
        </button>
      </div>
    </div>
  );
};
