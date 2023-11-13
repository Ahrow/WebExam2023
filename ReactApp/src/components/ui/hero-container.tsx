import { HeroCard } from "./cards";

export const HeroContainer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <div className="h-[700px] w-[450px] bg-black bg-[url('src/assets/line-teal-wide.svg')] bg-no-repeat bg-center"></div>
          <div className="h-[700px] w-[450px] bg-black"></div>
          <div className="h-[700px] w-[450px] bg-black bg-[url('src/assets/glow-red.svg')]"></div>
        </div>
        <div className="absolute mb-64">
          <HeroCard
            title={<span className="text-teal-400">Game</span>}
            imageSrc="hero-bottom.jpg"
            description="
        Welcome to the formula 1 website, here you can check out the F1API in action. Go to the drivers page to try out all the CRUD operations."
          />
        </div>
        <div className="flex">
          <div className="h-[700px] w-[450px] bg-black "></div>
          <div className="h-[700px] w-[450px] bg-black bg-[url('src/assets/vertical-line-red-big.svg')] bg-no-repeat bg-center"></div>
          <div className="h-[700px] w-[450px] bg-black "></div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <HeroCard
          title={<span className="text-red-500">Game</span>}
          imageSrc="hero-top.jpg"
          description="In the game page you can try my very simple F1 game that interacts with the F1API."
        />
      </div>
    </div>
  );
};
