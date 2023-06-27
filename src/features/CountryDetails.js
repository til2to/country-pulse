import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
  const countryArray = useLoaderData();
  const country = countryArray[0];

  return (
    <>
      <section className="h-[35rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid place-content-center px-4">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="shadow-md w-full lg:h-[20rem] object-cover"
          />
        </div>
        <div className="md:grid place-content-center pl-16 sm:pl-0">
          <p className="text-xl mb-3">
            <span className="font-bold">Native Name: </span>
            {
              country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                .official
            }
          </p>
          <p className="text-xl mb-3">
            <span className="font-bold">Population: </span>
            {country.population.toLocaleString()}
          </p>
          <p className="text-xl mb-3">
            <span className="font-bold">Area: </span>
            {country.area.toLocaleString()}
            {' '}
            <span>
              km
              <sup>2</sup>
            </span>
          </p>
          <p className="text-xl mb-3">
            <span className="font-bold">Geolocation: </span>
            Latitude
            {' '}
            {country.latlng[0]}
            ,
            {' '}
            Longitude
            {' '}
            {country.latlng[1]}
          </p>
          <p className="text-xl mb-3">
            <span className="font-bold">Sub Region: </span>
            {country.subregion}
          </p>
          <p className="text-xl mb-3">
            <span className="font-bold">Region: </span>
            {country.region}
          </p>
          <p className="text-xl mb-3">
            <span className="font-bold">Capital: </span>
            {country.capital[0]}
          </p>
          <p className="text-xl mb-3">
            <span className="font-bold">Currency: </span>
            {country.currencies[Object.keys(country.currencies)[0]].name}
            {' - '}

            <span className="font-bold">
              {country.currencies[Object.keys(country.currencies)[0]].symbol}
            </span>
          </p>
        </div>
      </section>
    </>
  );
};
export default CountryDetails;
