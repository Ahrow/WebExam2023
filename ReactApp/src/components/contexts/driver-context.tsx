import { createContext, useState, useEffect } from "react";
import DriverService from "../../services/DriverService";
import { Driver } from "../driver-item";

export const DriverContext = createContext<{
  drivers: Driver[];
  getDriversFromService: () => void;
  addDriver: (inputs: { [key: string]: string }, image: File | null) => void;
  editDriver: ({ id, name }: { id: number; name: string }) => void;
  deleteDriver: (driverId: number) => void;
  searchDriver: (searchValue: string | number, searchType: string) => void;
  resetSearch: () => void;
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
      const driver = drivers.find((d) => d.id == id);
      if (!driver) {
        throw new Error("Driver not found");
      }
      driver.name = name;

      await DriverService.putDriver(driver);
      setDrivers([...drivers]);
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

  const searchDriver = async (
    searchValue: string | number,
    searchType: string
  ) => {
    if (searchValue) {
      try {
        console.log("Search Value:", searchValue);

        let fetchedDriver;

        if (searchType === "id") {
          fetchedDriver = await DriverService.getById(Number(searchValue));
        } else if (typeof searchValue === "string") {
          fetchedDriver = await DriverService.getByName(searchValue);
        }

        setDrivers([fetchedDriver]);

        console.log("driver", fetchedDriver);
      } catch (error) {
        console.error("Error fetching driver:", error);
      }
    }
  };

  const resetSearch = async () => {
    await getDriversFromService();
  };

  return (
    <DriverContext.Provider
      value={{
        drivers,
        deleteDriver,
        addDriver,
        editDriver,
        getDriversFromService,
        searchDriver,
        resetSearch,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
};
