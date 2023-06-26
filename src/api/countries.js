export const continentLoader = async (region) => {
  const res = await fetch(`${BASE_URL}/region/${region}`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};
