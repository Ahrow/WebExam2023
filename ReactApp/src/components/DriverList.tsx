import DriverService from "../services/DriverService";
import { useState, useEffect } from "react";
export const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    const drivers = await DriverService.getAllDrivers();
    setDrivers(drivers);
  };

  const getDriversJSX = () => {
    const driversJSX = drivers.map((driver, i) => (
      <li key={i}>{driver.name}</li>
    ));
    return driversJSX;
  };

  return (
    <div>
      <h2>DRIVERS</h2>
      <p>Antall drivers: {drivers.length} </p>
      <ul>{getDriversJSX()}</ul>
    </div>
  );
};
