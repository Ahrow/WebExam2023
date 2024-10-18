import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <div className="w-full sm:h-[300px] h-[120px] bg-slate-400 bg-[url('/assets/header-strong-fade-top.png')] bg-no-repeat bg-cover bg-center">
      <h1 className="absolute sm:top-32 sm:text-6xl top-10 text-2xl font-bold text-red-600 ml-1 sm:ml-4">
        Formula F1
      </h1>
      <h2 className="absolute top-16 sm:top-48 text-white ml-1 sm:ml-4 sm:text-5xl text-xl">
        Fast thrills
      </h2>
      <Navbar />
    </div>
  );
};
