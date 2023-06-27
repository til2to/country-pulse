import React from 'react';
import { BsCaretLeftFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const getCountry = () => {
    let country = '';
    const splitPathname = pathname.split('/');
    country = splitPathname[splitPathname.length - 1];
    return country;
  };

  const setTitle = () => {
    let title = '';
    if (pathname.includes('/continent')) {
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
    }

    title = getCountry();
    if (title.length > 20) {
      title = `${title.substring(0, 30)}...`;
    }

    if (title.includes('%20')) {
      title = title.replace(/%20/g, ' ');
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
      <nav
        className={`${
          pathname === '/'
            ? 'justify-center'
            : 'justify-between lg:justify-around items-center'
        } bg-slate-700 text-slate-100 px-4 py-2 flex`}
      >
        {pathname !== '/' && (
          <button
            type="button"
            className="p-2 rounded-full hover:bg-slate-800 transition-colors duration-300"
            onClick={() => navigate('/')}
          >
            <span>
              <BsCaretLeftFill />
            </span>
          </button>
        )}
        <p className="text-xl">{setTitle()}</p>
      </nav>
    </>
  );
};
export default Navbar;
