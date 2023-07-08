import React from 'react';
import { BsCaretLeftFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
        <span className="text-xl">Country Pulse</span>
      </nav>
    </>
  );
};

export default Navbar;
