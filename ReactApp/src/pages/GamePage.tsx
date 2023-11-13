import { Game } from "../components/game/game";
import { CarList } from "../components/car-list";
import { TrackList } from "../components/track-list";

export const GamePage = () => {
  return (
    <div>
      <h1>GAME PAGE</h1>
      <Game />
      <CarList />
      <TrackList />
    </div>
  );
};
