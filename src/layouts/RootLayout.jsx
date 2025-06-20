import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="text-pink-300 font-semibold tracking-widest text-3xl pl-3 mb-3 sm:text-4xl`">
        <span className="text-pink-400 font-bold text-5xl sm:text-6xl">L</span>
        ibrary
      </div>

      <ul className="bg-pink-200 h-10 font-semibold flex items-center  gap-4 text-pink-500 px-3 sm:h-13 sm:text-xl sm:gap-6 sm:px-4">
        <NavLink to="/">Book</NavLink>
        <NavLink to="visitor">Visitor</NavLink>
        <NavLink to="card">Card</NavLink>
        <NavLink to="statistic">Statistic</NavLink>
      </ul>
    </div>
  );
};

export default RootLayout;
