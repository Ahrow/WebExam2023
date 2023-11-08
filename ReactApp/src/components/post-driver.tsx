import axios from "axios";
import { DriverCardProps } from "./cards";
const driverEndpoint = "http://localhost:5173/drivers";

export const PostDriver = async (newDriver: DriverCardProps) => {
  const response = await axios.post(driverEndpoint, newDriver);
  return console.log(response);
};
