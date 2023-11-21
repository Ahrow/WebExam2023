import axios from "axios";

const TrackService = (() => {
  const baseURL = "http://localhost:5292/api";
  const trackController = `${baseURL}/Tracks`;

  const getAllTracks = async () => {
    const response = await axios.get(trackController);
    return response.data;
  };

  const getById = async (id: number) => {
    const response = await axios.get(`${trackController}/${id}`);
    return response.data;
  };

  return {
    getAllTracks,
    getById,
  };
})();

export default TrackService;
