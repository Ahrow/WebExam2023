import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className=" h-10 sm:h-20 w-full bg-black flex justify-evenly items-center text-sm sm:text-2xl sm:font-semibold text-teal-400">
      <Link className="text-red-500 hover:text-yellow-400" to="/">
        Home
      </Link>
      <Link className="text-red-500 hover:text-yellow-400" to="/drivers">
        Drivers
      </Link>
      <Link className=" hover:text-yellow-400" to="/teams">
        Teams
      </Link>
      <Link className=" hover:text-yellow-400" to="/races">
        Races
      </Link>
      <Link className=" hover:text-yellow-400" to="/game">
        Game
      </Link>
    </nav>
  );
};
