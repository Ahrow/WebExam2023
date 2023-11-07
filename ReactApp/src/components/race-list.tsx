import { RaceCard } from "./cards";
import RaceService from "../services/RaceService";
import { useState, useEffect } from "react";

export const RacesList = () => {
  const [races, setRaces] = useState<Races[]>([]);

  useEffect(() => {
    getRacesFromService();
  }, []);

  const getRacesFromService = async () => {
    const races = await RaceService.getAllRaces();
    setRaces(races);
  };

  interface Races {
    id: number;
    grandprix: string;
    numberOfLaps: number;
    winnerName: string;
    winnerTime: string;
  }

  return (
    <div>
      {races.map((races) => (
        <RaceCard
          grandprix={races.grandprix}
          numberOfLaps={races.numberOfLaps}
          winnerName={races.winnerName}
          winnerTime={races.winnerTime}
        />
      ))}
    </div>
  );
};
