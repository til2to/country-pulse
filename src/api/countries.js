import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const countryLoader = async (country) => {
  const res = await axios.get(`${BASE_URL}/name/${country}`);

  return res.data;
};

export const continentLoader = async (region) => {
  const res = await axios.get(`${BASE_URL}/region/${region}`);

  return res.data;
};
