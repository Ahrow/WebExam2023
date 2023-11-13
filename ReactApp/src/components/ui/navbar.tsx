import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className=" h-10 sm:h-20 w-full bg-black flex justify-evenly items-center text-sm sm:text-2xl font-semibold">
      <Link className="text-teal-400 hover:text-yellow-400" to="/">
        Home
      </Link>
      <Link
        className="bg-gradient-to-r from-teal-400 via-red-400 to-red-500 bg-clip-text text-transparent hover:text-yellow-400"
        to="/drivers"
      >
        Drivers
      </Link>
      <Link className="text-red-500 hover:text-yellow-400" to="/game">
        Game
      </Link>
    </nav>
  );
};
