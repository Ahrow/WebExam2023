import { createContext, useState, useEffect } from "react";
import DriverService from "../../services/DriverService";
import { Driver } from "../../interfaces/items-props";

export const DriverContext = createContext<{
  drivers: Driver[];
  getDriversFromService: () => void;
  addDriver: (inputs: { [key: string]: string }, image: File | null) => void;
  editDriver: ({ id, name }: { id: number; name: string }) => void;
  deleteDriver: (driverId: number) => void;
} | null>(null);

export const DriverProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const getDriversFromService = async () => {
    const drivers = await DriverService.getAllDrivers();
    setDrivers(drivers);
  };

  useEffect(() => {
    getDriversFromService();
  }, []);

  const editDriver = async ({ id, name }: { id: number; name: string }) => {
    try {
      await DriverService.putDriver({ driverId: id, inputs: name });
      await getDriversFromService();
    } catch (error) {
      console.log("Error in handleSubmit", error);
    }
  };

  const addDriver = async (
    inputs: { [key: string]: string },
    image: File | null
  ) => {
    {
      try {
        await DriverService.addDriver(inputs, image);
        await getDriversFromService();
      } catch (error) {
        console.log("Error in handleSubmit", error);
      }
    }
  };

  const deleteDriver = async (driverId: number) => {
    try {
      await DriverService.deleteById(driverId);
      await getDriversFromService();
    } catch (error) {
      console.log("Error in handleDeleteSubmit", error);
    }
  };

  return (
    <DriverContext.Provider
      value={{
        drivers,
        deleteDriver,
        addDriver,
        editDriver,
        getDriversFromService,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
};
