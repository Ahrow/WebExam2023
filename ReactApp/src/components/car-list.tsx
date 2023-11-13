import { CarCard } from "./ui/cards";
import CarService from "../services/CarService";
import { useState, useEffect } from "react";

export const CarList = () => {
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    getCarsFromService();
  }, []);

  const getCarsFromService = async () => {
    const cars = await CarService.getAllCars();
    setCars(cars);
  };

  interface Cars {
    id: number;
    name: string;
    speed: number;
    acceleration: number;
    handling: number;
    imgUrl: string;
  }

  return (
    <div>
      {cars.map((cars) => (
        <CarCard
          name={cars.name}
          speed={cars.speed}
          acceleration={cars.acceleration}
          handling={cars.handling}
          imgUrl={cars.imgUrl}
          key={cars.id}
        />
      ))}
    </div>
  );
};
