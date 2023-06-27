const BASE_URL = 'https://restcountries.com/v3.1';

export const countryLoader = async (cca3) => {
  const res = await fetch(`${BASE_URL}/alpha/${cca3}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

export const continentLoader = async (region) => {
  const res = await fetch(`${BASE_URL}/region/${region}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};
