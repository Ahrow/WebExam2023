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

  const putDriver = async ({
    driverId,
    inputs,
  }: {
    driverId: number;
    inputs: string;
  }) => {
    try {
      const response = await axios.put(
        `${driverController}/${driverId}`,
        inputs
      );
      console.log("HAIL MERRY WORK", response);
    } catch (error) {
      console.log("Error in putDriver", error);
    }
  };

  const getAllDrivers = async () => {
    const response = await axios.get(driverController);
    return response.data;
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
    const response = await axios.get(`${driverController}/${id}`);
    return response.data;
  };

  const getByName = async (name: string) => {
    const response = await axios.get(`${driverController}/Get?name=${name}`);
    return response.data;
  };

  const deleteById = async (id: number) => {
    try {
      const response = await axios.delete(`${driverController}/${id}`);
      console.log("Delete Response:", response);

      if (response.status === 204) {
        console.log("Driver deleted successfully");
      } else {
        console.log("Error deleting driver. Status code:", response.status);
      }

      return response.data;
    } catch (error) {
      console.log("Error deleting driver:", error);
      throw error;
    }
  };

  return {
    getAllDrivers,
    getById,
    deleteById,
    getByName,
    addDriver,
    getAllDriverIds,
    putDriver,
  };
})();

export default DriverService;
