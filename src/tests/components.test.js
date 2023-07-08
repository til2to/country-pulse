import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContinentCard from '../components/ContinentCard';
import CountryCard from '../components/CountryCard';
import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';

describe('Component Integration Tests', () => {
  it('renders ContinentCard component', () => {
    const continentLink = {
      name: 'Africa',
      path: '/continent/africa',
      image: 'africa.jpg',
    };
    const { getByText } = render(
      <MemoryRouter>
        <ContinentCard link={continentLink} />
      </MemoryRouter>,
    );
    expect(getByText('Africa')).toBeInTheDocument();
  });

  it('renders CountryCard component', () => {
    const country = {
      flags: { png: 'country.png' },
      name: { common: 'Country' },
      population: 1000000,
      capital: 'Capital',
      cca3: 'CCA3',
    };
    const { getByText } = render(
      <MemoryRouter>
        <CountryCard country={country} />
      </MemoryRouter>,
    );
    expect(getByText('Country')).toBeInTheDocument();
  });

  it('renders Navbar component', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(getByText('Country Pulse')).toBeInTheDocument();
  });

  it('renders SearchFilter component', () => {
    const query = '';
    const setQuery = jest.fn();
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SearchFilter query={query} setQuery={setQuery} />
      </MemoryRouter>,
    );
    expect(getByPlaceholderText('Search for a country...')).toBeInTheDocument();
  });
});
