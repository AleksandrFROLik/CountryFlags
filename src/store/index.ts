import { configureStore } from '@reduxjs/toolkit';
import { flagsApi } from './flags.api.ts/flags.api';

export const store = configureStore({
  reducer: {
    [flagsApi.reducerPath]: flagsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flagsApi.middleware)
})