import axios from "axios";

const CarService = (() => {
  const baseURL = "http://localhost:5292/api";
  const carController = `${baseURL}/Cars`;

  const getAllCars = async () => {
    const result = await axios.get(carController);
    return result.data;
  };

  const getById = async (id: number) => {
    const result = await axios.get(`${carController}/${id}`);
    return result.data;
  };

  const getAllCarIds = async () => {
    try {
      const cars = await getAllCars();
      const carIds = cars.map((car: { id: number }) => car.id);
      return carIds;
    } catch (error) {
      console.log("Error getting driver IDs:", error);
      throw error;
    }
  };

  return {
    getAllCars,
    getById,
    getAllCarIds,
  };
})();

export default CarService;
