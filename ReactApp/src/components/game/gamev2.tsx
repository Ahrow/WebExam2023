import { useState } from "react";

export const GameV2 = () => {
  const selectedCar = JSON.parse(localStorage.getItem("selectedCar") || "{}");
  const selectedDriver = JSON.parse(
    localStorage.getItem("selectedDriver") || "{}"
  );

  interface DriverProps {
    name?: string;
    skill: number;
    aggression: number;
    experience: number;
  }

  interface CarProps {
    name?: string;
    speed: number;
    handling: number;
    acceleration: number;
  }

  const tracks = [
    {
      name: "Bahrain International Circuit",
      length: 5412,
      numberOfTurns: 15,
      laps: 60,
    },
    {
      name: "Jeddah Corniche Circuit",
      length: 6208,
      numberOfTurns: 27,
      laps: 50,
    },
  ];

  const [raceLog, setRaceLog] = useState<string[]>([]);

  const calculateRace = async (driver: DriverProps, car: CarProps) => {
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    const averageSpeed = (car.speed + car.acceleration) / 2;
    const averageTime = randomTrack.length / averageSpeed;

    const laps = randomTrack.laps;
    let score = 0;

    for (let lap = 1; lap <= laps; lap++) {
      const eventChance = Math.random();
      if (eventChance < 0.2) {
        const eventMessage = generateEvent(lap, driver, car);
        await sleep(Math.floor(Math.random() * 2000) + 1000);
        setRaceLog((prevLog) => [...prevLog, eventMessage]);

        if (eventMessage.includes("RENAULT")) {
          return { score: 0 };
        }
      }

      const lapTime = averageTime * (1 + Math.random() * 0.2);
      score += lapTime;
    }

    return { score };
  };

  const generateEvent = (lap: number, Driver: DriverProps, Car: CarProps) => {
    const eventChance = Math.floor(Math.random() * 6);
    switch (eventChance) {
      case 0:
        if (Driver.aggression > 5) {
          return `Event on lap ${lap}: ${Driver.name} is going agressive at that turn!`;
        }
        return `Event on lap ${lap}: ${Driver.name} is going defensive at that turn!`;
      case 1:
        if (Driver.experience > 70) {
          return `Event on lap ${lap}: ${Driver.name} is really using his experience!`;
        } else {
          return `Event on lap ${lap}: ${Driver.name} is really lacking experience, rookie mistakes!`;
        }
      case 2:
        if (Driver.skill > 70) {
          return `Event on lap ${lap}: ${Driver.name} is really showing his skill!`;
        } else {
          return `Event on lap ${lap}: ${Driver.name} is really lacking skill, rookie mistakes!`;
        }

      case 3:
        if (Car.handling > 70) {
          return `Event on lap ${lap}: Holy Cow! That ${Car.name} is really handeling well!!`;
        } else {
          return `Event on lap ${lap}: Oh no! That ${Car.name} is really handeling bad!!`;
        }

      case 4:
        if (Car.name === "renault") {
          return (
            <div>
              `Event on lap ${lap}:DEAR GOD! THE {Car.name} Lost its wheels!$
              RENAULT IS TERRIBLE!`
              <img
                src="src/assets/renault-in-action.gif"
                alt="A gif of a Renault losing its wheels"
              />
            </div>
          );
        }
        if (Car.speed > 70) {
          return `Event on lap ${lap}: Now that is some speed from that ${Car.name}!`;
        } else {
          return `Event on lap ${lap}: Oh no! That ${Car.name} is really slow!!`;
        }
      case 5:
        if (Car.acceleration > 70) {
          return `Event on lap ${lap}: That ${Car.name} is really accelerating well!`;
        }
        return `Event on lap ${lap}: Oh no! That ${Car.name} is really accelerating bad!!`;
      default:
        return `Event on lap ${lap}: No option triggered.`;
    }
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleStartRace = async () => {
    setRaceLog([]);
    const raceResult = await calculateRace(selectedDriver, selectedCar);
    console.log("Race Result:", raceResult);
  };

  return (
    <div className="flex flex-col items-center mt-20 bg-slate-900 text-white">
      <button
        className="text-white text-lg p-4 bg-yellow-400 rounded-lg mb-4"
        onClick={handleStartRace}
      >
        Start the Race
      </button>

      <div className="race-log-container">
        <h3>Race Log</h3>
        <ul>
          {raceLog.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
