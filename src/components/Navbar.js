import React from 'react';
import { BsCaretLeftFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const setTitle = () => {
    let title = '';
    switch (pathname) {
      case '/':
        title = 'Continents';
        break;
      case '/continent/africa':
        title = 'Africa';
        break;
      case '/continent/asia':
        title = 'Asia';
        break;
      case '/continent/europe':
        title = 'Europe';
        break;
      case '/continent/north%20america':
        title = 'North America';
        break;
      case '/continent/south%20america':
        title = 'South America';
        break;
      case '/continent/oceania':
        title = 'Oceania';
        break;
      default:
        title = 'Continents';
    }

    return title;
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
          onClick={() => navigate(-1)}
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
