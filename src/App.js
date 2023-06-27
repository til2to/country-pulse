import { lazy } from 'react';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { continentLoader, countryLoader } from './api/countries';
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
        loader={({ params }) => continentLoader(params.continent)}
      />
      <Route
        path="/country/:country"
        element={<CountryDetails />}
        loader={({ params }) => countryLoader(params.country)}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
