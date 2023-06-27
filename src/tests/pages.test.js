import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../api/store';
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
});
