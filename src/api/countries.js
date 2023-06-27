const BASE_URL = 'https://restcountries.com/v3.1';

export const countryLoader = async (country) => {
  const res = await fetch(`${BASE_URL}/name/${country}`);

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
