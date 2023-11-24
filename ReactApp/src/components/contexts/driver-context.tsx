import { createContext, useState, useEffect } from "react";
import DriverService from "../../services/DriverService";
import { Driver } from "../driver-item";
import { ToastMessageProps } from "../ui/toast-message";

export const DriverContext = createContext<{
  drivers: Driver[];
  getDriversFromService: () => void;
  addDriver: (inputs: { [key: string]: string }, image: File | null) => void;
  editDriver: ({ id, name }: { id: number; name: string }) => void;
  deleteDriver: (driverId: number) => void;
  searchDriver: (searchValue: string | number, searchType: string) => void;
  resetSearch: () => void;
  shouldShowToast: boolean;
  toastMessage: ToastMessageProps | null;
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
      showToast("Driver updated!", "success");

      await DriverService.putDriver(driver);
      setDrivers([...drivers]);
    } catch (error) {
      showToast("Error updating driver", "error");
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
        showToast("Driver added!", "success");
        await getDriversFromService();
      } catch (error) {
        showToast("Error adding driver", "error");
        console.log("Error in handleSubmit", error);
      }
    }
  };

  const deleteDriver = async (driverId: number) => {
    try {
      await DriverService.deleteById(driverId);

      showToast("Driver deleted!", "success");

      await getDriversFromService();
    } catch (error) {
      showToast("Error deleting driver", "error");
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
          showToast("Driver found!", "success");
        } else if (typeof searchValue === "string") {
          showToast("Searching for driver...", "success");
          fetchedDriver = await DriverService.getByName(searchValue);
        } else {
          showToast("Invalid search type", "error");
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

  const [toastMessage, setToastMessage] = useState<ToastMessageProps | null>(
    null
  );

  const [shouldShowToast, setShouldShowToast] = useState(false);

  const showToast = (message: string, type: "error" | "success") => {
    setToastMessage({ message, type });
    setShouldShowToast(true);

    setTimeout(() => {
      setToastMessage(null);
      setShouldShowToast(false);
    }, 3000);
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
        shouldShowToast,
        toastMessage,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
};
