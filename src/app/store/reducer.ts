import { combineReducers } from 'redux';
import { api } from 'infrastructure/services/Api';
import userReducer from './features/userSlice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
});
