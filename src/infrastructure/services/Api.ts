import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'app/store/store';

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      const tokenFtx = (getState() as RootState).user.tokenFtx;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        headers.set('x-auth-token', tokenFtx);
      }

      if (headers.get('ftxAuthorization')) {
        headers.set('authorization', `Bearer ${tokenFtx}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
