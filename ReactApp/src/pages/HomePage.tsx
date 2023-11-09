import { HeroContainer } from "../components/HeroContainer";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroContainer />
    </div>
  );
};
