import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoints } from 'app/constants/endpoints';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: (user: LoginBody) => ({
        url: endpoints.SIGN_IN,
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
    }),
  }),
});

interface LoginBody {
  email: string;
  password: string;
}

export const {
  useLoginMutation,
  endpoints: {
    login: { matchFulfilled: loginFulfiled },
  },
} = api;
