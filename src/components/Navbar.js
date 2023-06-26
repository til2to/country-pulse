import React from 'react';
import { BsCaretLeftFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const setTitle = () => {
    switch (pathname) {
      case '/':
        return 'Continents';
      case '/continent/africa ':
        return 'Africa';
      case '/contient/asia':
        return 'Asia';
      case '/continent/europe':
        return 'Europe';
      case '/continent/north america':
        return 'North America';
      case '/continent/south america':
        return 'South America';
      default:
        return 'Continents';
    }
  };

  return (
    <>
      <header className="bg-slate-800 text-slate-100 p-4 text-xl">
        <div className="text-center font-bold">
          <Link to="/">
            Country
            <span className="text-orange-600">Pulse</span>
          </Link>
        </div>
      </header>
      <nav className="bg-slate-700 text-slate-100 px-4 py-2 flex justify-between lg:justify-around items-center">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-slate-800 transition-colors duration-300"
        >
          <span>
            <BsCaretLeftFill />
          </span>
        </button>
        <p className="text-xl">{setTitle()}</p>
      </nav>
    </>
  );
};
export default Navbar;
