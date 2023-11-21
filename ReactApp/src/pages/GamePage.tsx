import { CarSelector } from "../components/game/car-selector";
import { DriverSelector } from "../components/game/driver-selector";
import { GameV2 } from "../components/game/gamev2";
import { SelectorContainer } from "../components/ui/selector-container";

export const GamePage = () => {
  return (
    <div>
      <SelectorContainer>
        <DriverSelector />
        <CarSelector />
      </SelectorContainer>
      <GameV2 />
    </div>
  );
};
