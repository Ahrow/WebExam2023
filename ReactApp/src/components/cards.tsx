interface DriverCardProps {
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
    <div>
      <h1>{title}</h1>
      <img
        height={200}
        width={200}
        src={`src/assets/${imgUrl}`}
        alt={`Image of ${title}`}
      />
      <p>{age}</p>
      <p>{nationality}</p>
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
    <div>
      <h1>{grandprix}</h1>
      <p>{numberOfLaps}</p>
      <p>{winnerName}</p>
      <p>{winnerTime}</p>
    </div>
  );
};

export const TeamCard = ({ manufacturer, driver1, driver2 }: TeamCardProps) => {
  return (
    <div>
      <h1>{manufacturer}</h1>
      <p>{driver1}</p>
      <p>{driver2}</p>
    </div>
  );
};
