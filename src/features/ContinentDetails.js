import { useState, useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import africa from '../assets/africa.png';
import asia from '../assets/asia.png';
import europe from '../assets/europe.png';
import northAmerica from '../assets/north-america.png';
import oceania from '../assets/oceania.png';
import southAmerica from '../assets/south-america.png';
import CountryCard from '../components/CountryCard';
import SearchFilter from '../components/SearchFilter';

const ContinentDetails = () => {
  const countries = useLoaderData();
  const { pathname } = useLocation();
  const [query, setQuery] = useState('');

  const setTitle = () => {
    let title = '';
    let image = '';

    switch (pathname) {
      case '/continent/africa':
        title = 'Africa';
        image = africa;
        break;
      case '/continent/asia':
        title = 'Asia';
        image = asia;
        break;
      case '/continent/europe':
        title = 'Europe';
        image = europe;
        break;
      case '/continent/north%20america':
        title = 'North America';
        image = northAmerica;
        break;
      case '/continent/south%20america':
        title = 'South America';
        image = southAmerica;
        break;
      case '/continent/oceania':
        title = 'Oceania';
        image = oceania;
        break;
      default:
        return null;
    }

    return { title, image };
  };

  const filteredCountries = countries.filter((country) => {
    const nameMatchesQuery = country.name.common
      .toLowerCase()
      .includes(query.toLowerCase());

    const queryIsEmpty = query === '';
    return queryIsEmpty || nameMatchesQuery;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-slate-700 text-slate-100 w-full h-[14rem] shadow pl-3 py-5 flex items-center justify-center gap-x-4">
        <h3 className="text-2xl font-bold">
          {countries.length}
          {' '}
          Countries
        </h3>
        <div className="w-[10rem]">
          <img
            src={setTitle().image}
            alt={setTitle().name}
            className="object-contain"
          />
        </div>
      </div>

      <SearchFilter query={query} setQuery={setQuery} />

      <section className="px-8 py-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {filteredCountries.length === 0 ? (
          <p>No countries found</p>
        ) : (
          filteredCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))
        )}
      </section>
    </>
  );
};
export default ContinentDetails;
