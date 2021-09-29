import { configureStore } from '@reduxjs/toolkit';
import { api } from 'infrastructure/services/user/ApiService';
import { rootReducer } from './reducer';
import logger from 'redux-logger';

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware().concat(logger, api.middleware);

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
