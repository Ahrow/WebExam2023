import axios from "axios";

const DriverService = (() => {
  const driverController = "http://localhost:5292/api/Drivers";

  const getAllDrivers = async () => {
    const result = await axios.get(driverController);
    return result.data;
  };

  const getById = async (id: number) => {
    const result = await axios.get(`${driverController}/${id}`);
    return result.data;
  };

  // const getByName = async (name: string) => {
  //   const result = await axios.get(`${driverController}/name/${name}`);
  //   return result.data;
  // };

  const deleteById = async (id: number) => {
    const result = await axios.delete(`${driverController}/${id}`);
    return result.data;
  };

  const updateDriver = async (updatedDriver: string) => {
    const result = await axios.put(driverController, updatedDriver);
    return result.data;
  };

  return {
    getAllDrivers,
    getById,
    deleteById,
    updateDriver,
  };
})();

export default DriverService;
