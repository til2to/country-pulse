import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../api/store';
import ContinentDetails from '../features/ContinentDetails';
import CountryDetails from '../features/CountryDetails';
import Dashboard from '../features/Dashboard';

describe('UI Tests', () => {
  it('should render Dashboard', () => {
    const tree = render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render Continent Details', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ContinentDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render Country Details', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <CountryDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
