import { TeamCard } from "./cards";
import TeamService from "../services/TeamService";
import { useState, useEffect } from "react";

export const TeamList = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    getTeamsFromService();
  }, []);

  const getTeamsFromService = async () => {
    const teams = await TeamService.getAllTeams();
    setTeams(teams);
  };

  interface Team {
    id: number;
    manufacturer: string;
    driver1: string;
    driver2: string;
  }

  return (
    <div>
      {teams.map((teams) => (
        <TeamCard
          manufacturer={teams.manufacturer}
          driver1={teams.driver1}
          driver2={teams.driver2}
          key={teams.id}
        />
      ))}
    </div>
  );
};
