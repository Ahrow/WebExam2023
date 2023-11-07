import axios from "axios";

const TeamService = (() => {
  const teamsController = "http://localhost:5292/api/Teams";

  const getAllTeams = async () => {
    const result = await axios.get(teamsController);
    return result.data;
  };

  return {
    getAllTeams,
  };
})();

export default TeamService;
