import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (user: LoginBody) => ({
        url: endpoints.SIGN_IN,
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
    }),
    signup: builder.mutation({
      query: (user: SignupBody) => ({
        url: endpoints.SIGN_UP,
        method: 'POST',
        body: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

interface LoginBody {
  email: string;
  password: string;
}

interface SignupBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const {
  useLoginMutation,
  useSignupMutation,
  endpoints: {
    login: { matchFulfilled: loginFulfiled },
    signup: { matchFulfilled: signupFulfiled },
  },
} = authApi;
