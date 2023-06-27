const BASE_URL = 'https://restcountries.com/v3.1';

export const continentLoader = async (region) => {
  const res = await fetch(`${BASE_URL}/region/${region}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};
