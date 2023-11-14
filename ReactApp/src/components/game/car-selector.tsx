import { useState, useEffect } from "react";
import { CarItem } from "../car-item";
import CarService from "../../services/CarService";
import { CarItemProps } from "../../interfaces/items-props";

export const CarSelector: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<CarItemProps | null>(null);
  const [carIds, setCarIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchCarIds = async () => {
      try {
        const fetchedCarIds = await CarService.getAllCarIds();
        setCarIds(fetchedCarIds);

        if (fetchedCarIds.length > 0) {
          setSelectedCar({ carId: fetchedCarIds[0] });
        }
      } catch (error) {
        console.error("Error fetching car IDs:", error);
      }
    };
    fetchCarIds();
  }, []);

  const handleNextCar = () => {
    const nextCarIndex =
      (selectedCar ? carIds.indexOf(selectedCar.carId || 0) : 0) + 1;
    const nextCarId = carIds[nextCarIndex % carIds.length];
    setSelectedCar({ carId: nextCarId });
  };

  const handleSelectCar = () => {
    localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
  };

  return (
    <div className="h-[400px] w-[500px] bg-purple-700 flex justify-center flex-col items-center">
      <h3>Select Car</h3>
      <CarItem carId={selectedCar?.carId} />
      <button className="bg-yellow-400 rounded-lg p-2" onClick={handleNextCar}>
        Next Car
      </button>
      <button className="bg-red-400 rounded-lg p-2" onClick={handleSelectCar}>
        Select Car
      </button>
    </div>
  );
};
