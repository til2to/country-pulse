import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => (
  <div className="relative rounded-md overflow-hidden shadow-lg">
    <div className="">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-[17rem]"
      />
    </div>
    <div className="p-4">
      <h1 className="text-2xl font-bold">{country.name.common}</h1>
      <p className="text-xl mt-4">
        <span className="font-semibold">Population:</span>
        {' '}
        {country.population.toLocaleString()}
      </p>
      <p className="text-xl">
        <span className="font-semibold">Capital:</span>
        {' '}
        {country.capital}
      </p>
      <div className="mt-6 mb-4">
        <Link
          to={`/country/${country.name.common}`}
          className="border border-slate-700 rounded-md px-4 py-2"
        >
          See Details
        </Link>
      </div>
    </div>
  </div>
);

CountryCard.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      png: PropTypes.string,
    }),
    name: PropTypes.shape({
      common: PropTypes.string,
    }),
    population: PropTypes.number,
    capital: PropTypes.string,
    cca3: PropTypes.string,
  }).isRequired,
};

export default CountryCard;
