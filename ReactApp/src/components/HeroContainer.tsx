import { HeroCard } from "./hero-card";

export const HeroContainer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
        <div className="h-[700px] w-[450px] bg-black bg-[url('src/assets/line-teal-wide.svg')] bg-no-repeat bg-center"></div>
        <div className="h-[700px] w-[450px] bg-black"></div>
        <div className="h-[700px] w-[450px] bg-black bg-[url('src/assets/glow-red.svg')]"></div>
      </div>
      <div className="absolute mb-64">
        <HeroCard />
      </div>
      <div className="flex">
        <div className="h-[700px] w-[450px] bg-black"></div>
        <div className="h-[700px] w-[450px] bg-black bg-[url('src/assets/vertical-line-red-big.svg')] bg-no-repeat bg-center"></div>
        <div className="h-[700px] w-[450px] bg-black"></div>
      </div>
    </div>
  );
};
