import { CarSelector } from "../components/game/car-selector";
import { DriverSelector } from "../components/game/driver-selector";
import { SelectorContainer } from "../components/ui/selector-container";

export const GamePage = () => {
  return (
    <div>
      <h1>GAME PAGE</h1>
      <SelectorContainer>
        <DriverSelector />
        <CarSelector />
      </SelectorContainer>
    </div>
  );
};
