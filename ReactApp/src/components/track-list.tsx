import { TrackCard } from "./ui/cards";
import { useState, useEffect } from "react";
import TrackService from "../services/TrackService";

export const TrackList = () => {
  const [tracks, setTracks] = useState<Tracks[]>([]);

  useEffect(() => {
    getTracksFromService();
  }, []);

  const getTracksFromService = async () => {
    const tracks = await TrackService.getAllTracks();
    setTracks(tracks);
  };

  interface Tracks {
    id: number;
    name: string;
    distance: number;
    turns: number;
    laps: number;
    imgUrl: string;
  }

  return (
    <div className="mt-20 p-10">
      {tracks.map((tracks) => (
        <TrackCard
          name={tracks.name}
          distance={tracks.distance}
          turns={tracks.turns}
          laps={tracks.laps}
          imgUrl={tracks.imgUrl}
          key={tracks.id}
        />
      ))}
    </div>
  );
};
