import { lazy } from 'react';

import { Provider } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import store from './api/store';
import RootLayout from './layouts/RootLayout';

const Dashboard = lazy(() => import('./features/Dashboard'));
const ContinentDetails = lazy(() => import('./features/ContinentDetails'));
const CountryDetails = lazy(() => import('./features/CountryDetails'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route
        path="/continent/:continent"
        element={<ContinentDetails />}
      />
      <Route
        path="/country/:name"
        element={<CountryDetails />}
      />
    </Route>,
  ),
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
