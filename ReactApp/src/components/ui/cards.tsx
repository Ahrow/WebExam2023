import {
  DriverCardProps,
  CarCardProps,
  TrackCardProps,
} from "../../interfaces/card-props";

export const DriverCard = ({
  title,
  imgUrl,
  age,
  nationality,
}: DriverCardProps) => {
  return (
    <div className="bg-slate-900 rounded-md flex flex-col justify-center items-center text-white">
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="flex">
        <img
          className="rounded-2xl"
          height={300}
          width={300}
          src={`http://localhost:5292/images/${imgUrl}`}
          alt={`Image of ${title}`}
        />
      </div>
      <div className="">
        <div>
          <p>
            <span className="font-semibold">Age:</span> {age}
          </p>
          <p>
            <span className="font-semibold">Country:</span> {nationality}
          </p>
        </div>
      </div>
    </div>
  );
};

export const DriverGameCard = ({
  title,
  skill,
  aggression,
  experience,
  imgUrl,
}: DriverCardProps) => {
  return (
    <div className="bg-slate-900 rounded-md flex flex-col justify-center items-center text-white">
      <h1 className="text-xl font-semibold">{title}</h1>
      <img
        className="rounded-2xl"
        src={`http://localhost:5292/images/${imgUrl}`}
        alt={`Image of ${title}`}
        height={300}
        width={300}
      />
      <p>Skill:{skill}</p>
      <p>Aggression:{aggression}</p>
      <p>Experience:{experience}</p>
    </div>
  );
};

export const CarCard = ({
  name,
  speed,
  acceleration,
  handling,
  imgUrl,
}: CarCardProps) => {
  return (
    <div className="bg-slate-900 rounded-md flex flex-col justify-center items-center text-white">
      <h1 className="text-xl font-semibold">{name}</h1>
      <img
        height={300}
        width={300}
        src={`http://localhost:5292/images/${imgUrl}`}
        alt={`Image of a ${name} car.`}
      />
      <p>speed:{speed}</p>
      <p>acceleration:{acceleration}</p>
      <p>handling:{handling}</p>
    </div>
  );
};

export const TrackCard = ({
  name,
  distance,
  turns,
  laps,
  imgUrl,
}: TrackCardProps) => {
  return (
    <div className="flex bg-red-400">
      <h1>{name}</h1>
      <p>distance:{distance}</p>
      <p>turns:{turns}</p>
      <p>laps:{laps}</p>
      <img
        height={100}
        width={100}
        src={`http://localhost:5292/images/${imgUrl}`}
        alt={`Image the ${name}`}
      />
    </div>
  );
};

export const HeroCard = ({
  title,
  description,
  imageSrc,
}: {
  title: React.ReactElement;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className="sm:h-[400px] sm:w-[800px] h-[300px] w-[400px] bg-slate-900 text-white flex flex-col rounded-xl">
      <div>
        <h1 className="sm:text-4xl font-bold text-2xl text-center sm:p-4">
          {title}
        </h1>
        <p className="sm:text-2xl text-base p-8">{description}</p>
      </div>
      <div>
        <img
          className="sm:h-[200px] sm:w-[800px] h-[150px] w-[400px] rounded-b-xl object-cover"
          src={`src/assets/${imageSrc}`}
          alt="Background image of a teal and red formula 1 car."
        />
      </div>
    </div>
  );
};
