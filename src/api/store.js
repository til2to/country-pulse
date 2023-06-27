import { configureStore } from '@reduxjs/toolkit';
import continentSlice from './continentSlice';
import countrySlice from './countrySlice';

const store = configureStore({
  reducer: {
    continent: continentSlice,
    country: countrySlice,
  },
});

export default store;
