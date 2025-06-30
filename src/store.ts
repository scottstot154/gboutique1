import { configureStore } from '@reduxjs/toolkit';
import { boutiqueApi } from './api/boutiqueApi';

export const store = configureStore({
  reducer: {
    [boutiqueApi.reducerPath]: boutiqueApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boutiqueApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
