import axios from "axios";

// const ImageService = (() => {
//   const imageUploadController = "http://localhost:5264/api/imageUpload";

//   const postImage = async (image) => {

//     const result = await axios.post(imageUploadController, newImage);

//     const formData = new FormData();
//     formData.append("formFile", image);

//     const uploadResult = await axios({
//       url: imageUploadController,
//       method: "POST",
//       data: formData,
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     formData.delete("formFile");
//   };

//   return {
//     postImage,
//   };
// })();

const DriverService = (() => {
  const driverController = "http://localhost:5292/api/Drivers";
  // const imageUploadController = "http://localhost:5264/api/Drivers";

  // const addDriver = async (text: string, image: Blob) => {
  //   const formData = new FormData();
  //   formData.append("formFile", image);

  //   const result = await axios.post(driverController, text);

  //   const uploadResult = await axios({
  //     url: imageUploadController,
  //     method: "POST",
  //     data: formData,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });

  //   formData.delete("formFile");

  //   return result.data, uploadResult.data;
  // };

  const getAllDrivers = async () => {
    const result = await axios.get(driverController);
    return result.data;
  };

  const getById = async (id: number) => {
    const result = await axios.get(`${driverController}/${id}`);
    return result.data;
  };

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
