import axios from "axios";

const RaceService = (() => {
  const racesController = "http://localhost:5292/api/Races";

  const getAllRaces = async () => {
    const result = await axios.get(racesController);
    return result.data;
  };

  return {
    getAllRaces,
  };
})();

export default RaceService;
