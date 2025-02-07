import { HeroCard } from "./cards";

export const HeroContainer = () => {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <div className="h-[700px] w-[450px] bg-black bg-[url('/assets/line-teal-wide.svg')] bg-no-repeat bg-center"></div>
          <div className="hidden sm:block h-[700px] w-[450px] bg-black"></div>
          <div className="h-[700px] w-[450px] bg-black bg-[url('/assets/glow-red.svg')]"></div>
        </div>
        <div className="absolute mb-64">
          <HeroCard
            title={<span className="text-teal-400">Drivers</span>}
            imageSrc="hero-bottom.jpg"
            description="
        Welcome to the formula 1 website, here you can check out the F1API in action. Go to the drivers page to try out all the CRUD operations."
          />
        </div>
        <div className="flex">
          <div className="h-[700px] w-[450px] bg-black "></div>
          <div className="h-[700px] w-[450px] bg-black bg-[url('/assets/red-extended.svg')] bg-no-repeat bg-center"></div>
          <div className="h-[700px] w-[450px] bg-black "></div>
        </div>
      </div>
      <div className="flex justify-center">
        <HeroCard
          title={<span className="text-red-500">Game</span>}
          imageSrc="hero-top.jpg"
          description="In the game page you can try my very simple F1 game that interacts with the F1API."
        />
      </div>
    </div>
  );
};
