export const Game = () => {
  interface DriverProps {
    name: string;
    skill: number;
    aggression: number;
  }

  interface CarProps {
    speed: number;
    handling: number;
    acceleration: number;
  }

  const calculatePerformance = (driver: DriverProps, car: CarProps) => {
    const skillWeight = 0.3;
    const aggressionWeight = 0.2;
    const speedWeight = 0.1;
    const accelerationWeight = 0.1;
    const handlingWeight = 0.1;
    const performance =
      driver.skill * skillWeight +
      driver.aggression * aggressionWeight +
      car.speed * speedWeight +
      car.acceleration * accelerationWeight +
      car.handling * handlingWeight;

    return performance;
  };

  const driver1: DriverProps = {
    name: "Driver1",
    skill: 80,
    aggression: 70,
  };

  const driver2: DriverProps = {
    name: "Driver2",
    skill: 60,
    aggression: 80,
  };

  const car1: CarProps = {
    speed: 80,
    handling: 70,
    acceleration: 60,
  };

  const car2: CarProps = {
    speed: 90,
    handling: 85,
    acceleration: 95,
  };

  const performance1 = calculatePerformance(driver1, car1);
  const performance2 = calculatePerformance(driver2, car2);

  console.log("Driver 1 Performance:", performance1);
  console.log("Driver 2 Performance:", performance2);

  // PerformaceScore * RaceScore = resultScore
  // setInterval(() =>{
  //     revealWinner();
  // }, 50000);

  return null;
};
