import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="h-10 w-full bg-black flex justify-evenly items-center text-sm text-teal-500">
      <Link to="/">Home</Link>
      <Link to="/crud">CRUD</Link>
      <Link to="/game">Game</Link>
    </nav>
  );
};
