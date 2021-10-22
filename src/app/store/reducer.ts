import { combineReducers } from 'redux';
import { api } from 'infrastructure/services/Api';
import userReducer from './features/userSlice';
import nftReducer from './features/nftSlice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
  nft: nftReducer,
});
