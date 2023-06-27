import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountries } from '../api/continentSlice';
import CountryCard from '../components/CountryCard';
import SearchFilter from '../components/SearchFilter';

const ContinentDetails = () => {
  const { countries, loading, error } = useSelector((state) => state.continent);
  const { continent } = useParams();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const getContent = () => {
    let content = null;

    if (loading) {
      content = (
        <div className="h-[18rem] flex justify-center items-center">
          <p className="text-center text-2xl">Getting data...</p>
        </div>
      );
    } else if (!loading) {
      const filteredCountries = countries?.filter((country) => {
        const nameMatchesQuery = country.name.common
          .toLowerCase()
          .includes(query.toLowerCase());

        const queryIsEmpty = query === '';
        return queryIsEmpty || nameMatchesQuery;
      });

      content = (
        <>
          {filteredCountries.length === 0 ? (
            <p className="text-center text-2xl">No countries found</p>
          ) : (
            filteredCountries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))
          )}
        </>
      );
    } else if (error) {
      content = <p>{error}</p>;
    }

    return content;
  };

  useEffect(() => {
    dispatch(fetchCountries(continent));
  }, [dispatch, continent]);

  return (
    <>
      <div className="bg-slate-700 text-slate-100 w-full h-[14rem] shadow pl-3 py-5 flex items-center justify-center gap-x-4">
        <h3 className="text-2xl font-bold">
          {countries.length}
          {' '}
          Countries
        </h3>
      </div>

      <SearchFilter query={query} setQuery={setQuery} />

      <section className="px-8 py-5 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {getContent()}
      </section>
    </>
  );
};
export default ContinentDetails;
