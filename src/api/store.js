import { configureStore } from '@reduxjs/toolkit';
import continentSlice from './continentSlice';

const store = configureStore({
  reducer: {
    continent: continentSlice,
  },
});

export default store;
