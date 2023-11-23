export interface DriverCardProps {
  title?: string;
  imgUrl?: string;
  age?: number;
  nationality?: string;
  skill?: number;
  aggression?: number;
  experience?: number;
}

export interface CarCardProps {
  name?: string;
  speed?: number;
  acceleration?: number;
  handling?: number;
  imgUrl?: string;
}

export interface TrackCardProps {
  name?: string;
  distance?: number;
  turns?: number;
  laps?: number;
  imgUrl?: string;
}

export const DriverCard = ({
  title,
  imgUrl,
  age,
  nationality,
}: DriverCardProps) => {
  return (
    <div className="bg-slate-900 rounded-md flex flex-col justify-center items-center text-white">
      <h3 className="text-xl font-semibold">{title}</h3>
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
      <h3 className="text-xl font-semibold">{title}</h3>
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
    <div className="bg-slate-900 h-[400px] rounded-md flex flex-col justify-center items-center text-white">
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="h-[300px] w-[300px]">
        <img
          className="h-[300px] w-[300px] rounded-2xl object-contain"
          src={`http://localhost:5292/images/${imgUrl}`}
          alt={`Image of a ${name} car.`}
        />
      </div>
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
      <h3>{name}</h3>
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
    <div className="sm:h-[300px] sm:w-[600px] h-[300px] w-[300px] bg-slate-900 text-white flex flex-col rounded-xl">
      <div>
        <h3 className="sm:text-2xl font-bold text-2xl text-center sm:p-4">
          {title}
        </h3>
        <p className="sm:text-xl text-base p-4">{description}</p>
      </div>
      <div>
        <img
          className="sm:h-[200px] sm:w-[600px] h-[150px] w-[400px] rounded-b-xl object-cover"
          src={`src/assets/${imageSrc}`}
          alt="Background image of a formula 1 car."
        />
      </div>
    </div>
  );
};
