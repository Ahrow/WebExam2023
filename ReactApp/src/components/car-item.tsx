import React, { useState, useEffect } from "react";
import CarService from "../services/CarService";
import { CarCard } from "./ui/cards";

interface Car {
  id: number;
  name: string;
  speed: number;
  handling: number;
  acceleration: number;
  imgUrl: string;
}

interface CarItemProps {
  carId?: number;
}

export const CarItem: React.FC<CarItemProps> = ({ carId }: CarItemProps) => {
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        let fetchedCar: Car | null;
        if (carId) {
          fetchedCar = await CarService.getById(carId);
        } else {
          fetchedCar = null;
        }
        setCar(fetchedCar);
      } catch (error) {
        console.log("Error fetching car:", error);
      }
    };

    fetchCar();
  }, [carId]);

  return (
    <div>
      {car && (
        <CarCard
          name={car.name}
          speed={car.speed}
          handling={car.handling}
          acceleration={car.acceleration}
          imgUrl={car.imgUrl}
          key={car.id}
        />
      )}
    </div>
  );
};
