import axios from "axios";

const DriverService = (() => {
  const baseURL = "http://localhost:5292/api";
  const driverController = `${baseURL}/Drivers`;
  const imageUploadEndpoint = `${baseURL}/ImageUpload`;

  const addDriver = async (
    inputs: { [key: string]: string },
    image: File | null
  ) => {
    try {
      const response = await axios.post(driverController, inputs);
      console.log("response", response);

      const formData = new FormData();
      if (image) {
        formData.append("formFile", image);
      }

      const uploadResult = await axios({
        url: imageUploadEndpoint,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      formData.delete("formFile");
      console.log("upload result", uploadResult);

      return response.data;
    } catch (error) {
      console.log("Something went wrong", error);
      throw error;
    }
  };
  const getAllDrivers = async () => {
    const result = await axios.get(driverController);
    return result.data;
  };

  const getAllDriverIds = async () => {
    try {
      const drivers = await getAllDrivers();
      const driverIds = drivers.map((driver: { id: number }) => driver.id);
      return driverIds;
    } catch (error) {
      console.log("Error getting driver IDs:", error);
      throw error;
    }
  };

  const getById = async (id: number) => {
    const result = await axios.get(`${driverController}/${id}`);
    return result.data;
  };

  const getByName = async (name: string) => {
    const result = await axios.get(`${driverController}/Get?name=${name}`);
    return result.data;
  };

  const deleteById = async (id: number) => {
    try {
      const result = await axios.delete(`${driverController}/${id}`);
      console.log("Delete Response:", result);

      if (result.status === 204) {
        console.log("Driver deleted successfully");
      } else {
        console.log("Error deleting driver. Status code:", result.status);
      }

      return result.data;
    } catch (error) {
      console.log("Error deleting driver:", error);
      throw error;
    }
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
    getByName,
    addDriver,
    getAllDriverIds,
  };
})();

export default DriverService;
