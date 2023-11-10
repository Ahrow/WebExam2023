export interface DriverCardProps {
  title?: string;
  imgUrl?: string;
  age?: number;
  nationality?: string;
}

interface RaceCardProps {
  grandprix?: string;
  numberOfLaps?: number;
  winnerName?: string;
  winnerTime?: string;
}

interface TeamCardProps {
  manufacturer?: string;
  imgUrl?: string;
  driver1?: string;
  driver2?: string;
}

export const DriverCard = ({
  title,
  imgUrl,
  age,
  nationality,
}: DriverCardProps) => {
  return (
    <div className="bg-slate-900 rounded-md flex flex-col justify-center items-center text-white">
      <h1 className="text-xl font-semibold">{title}</h1>
      <img
        className="rounded-2xl"
        height={250}
        width={250}
        src={`http://localhost:5292/images/${imgUrl}`}
        alt={`Image of ${title}`}
      />
      <div>
        <p>
          <span className="font-semibold">Age:</span> {age}
        </p>
        <p>
          <span className="font-semibold">Country:</span> {nationality}
        </p>
      </div>
    </div>
  );
};

export const RaceCard = ({
  grandprix,
  numberOfLaps,
  winnerName,
  winnerTime,
}: RaceCardProps) => {
  return (
    <div className="flex gap-20">
      <h1>Grandprix: {grandprix}</h1>
      <p> Nr of laps: {numberOfLaps}</p>
      <p> Winner name: {winnerName}</p>
      <p> Winner time: {winnerTime}</p>
    </div>
  );
};

export const TeamCard = ({ manufacturer, driver1, driver2 }: TeamCardProps) => {
  return (
    <div className="flex gap-20 text-xl">
      <h1>Manufacturer: {manufacturer}</h1>
      <p>Driver 1: {driver1}</p>
      <p>Driver 2: {driver2}</p>
    </div>
  );
};

export const HeroCard = () => {
  return (
    <div className="h-[400px] w-[800px] bg-slate-900 text-white">
      <h1 className="text-white text-4xl text-center p-4">
        WELCOME to the Formula 1 API{" "}
      </h1>
      <p className="text-2xl p-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo
        nesciunt sapiente obcaecati similique est facilis quaerat consectetur
        eum earum provident harum sit labore voluptate aliquid nam, totam vel.
        Animi.
      </p>
    </div>
  );
};
