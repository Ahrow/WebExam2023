import axios from "axios";

const TrackService = (() => {
  const baseURL = "http://localhost:5292/api";
  const trackController = `${baseURL}/Tracks`;

  const getAllTracks = async () => {
    const result = await axios.get(trackController);
    return result.data;
  };

  const getById = async (id: number) => {
    const result = await axios.get(`${trackController}/${id}`);
    return result.data;
  };

  return {
    getAllTracks,
    getById,
  };
})();

export default TrackService;
