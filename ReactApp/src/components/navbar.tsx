import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-10 sm:h-20 w-full bg-black flex justify-evenly items-center text-sm sm:text-lg text-teal-500">
      <Link to="/">Home</Link>
      <Link to="/drivers">Drivers</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/races">Races</Link>
      <Link to="/game">Game</Link>
      <a href="http://localhost:5292/swagger/index.html">API docs</a>
    </nav>
  );
};
