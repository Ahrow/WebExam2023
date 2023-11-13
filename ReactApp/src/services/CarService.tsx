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

  return {
    getAllCars,
    getById,
  };
})();

export default CarService;
