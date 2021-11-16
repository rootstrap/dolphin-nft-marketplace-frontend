import { endpoints } from 'app/constants/endpoints';
import { Country } from 'app/interfaces/common/Country';
import { ILoginStatusResponse } from 'app/interfaces/user/LoginStatus';
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
    loginFTX: builder.mutation({
      query: (user: LoginFTXBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/users/login`,
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
          captcha: {
            recaptcha_challenge: user.recaptcha,
          },
        },
      }),
    }),
    loginStatus: builder.mutation<ILoginStatusResponse, void>({
      query: () => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/login_status`,
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
    }),
    kyc: builder.mutation({
      query: (kyc: KycBody) => ({
        url: endpoints.KYC,
        method: 'POST',
        body: {
          fullLegalName: kyc.fullName,
          country: kyc.country,
          stateProvinceRegion: kyc.state,
          dateOfBirth: kyc.dateOfBirth,
          postalCode: kyc.postalCode,
          streetAddress: kyc.streetAddress,
        },
      }),
    }),
    logout: builder.mutation({
      query: (user: LogoutBody) => ({
        url: endpoints.SIGN_OUT,
        method: 'POST',
        body: { email: user.email },
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
    signupFTX: builder.mutation({
      query: (user: signupFTXBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/users/create`,
        method: 'POST',
        body: {
          password: user.password,
          email: user.email,
          captcha: {
            recaptcha_challenge: user.recaptcha,
          },
        },
      }),
    }),
    getCountries: builder.mutation<Country[], string>({
      query: () => `${endpoints.COUNTRIES}`,
      transformResponse: (data: Country[]) => data,
    }),
  }),
  overrideExisting: true,
});

interface LoginBody {
  email: string;
  password: string;
}

interface LoginFTXBody {
  email: string;
  password: string;
  recaptcha: string;
}

interface LogoutBody {
  email: string;
}

interface KycBody {
  fullName: string;
  country: string;
  state: string;
  dateOfBirth: Date;
  postalCode: string;
  streetAddress: string;
  notCriminalRecord: boolean;
  notExposedPerson: boolean;
}

interface SignupBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface signupFTXBody {
  email: string;
  password: string;
  recaptcha: string;
}

export const {
  useLoginMutation,
  useLoginFTXMutation,
  useLoginStatusMutation,
  useLogoutMutation,
  useSignupMutation,
  useSignupFTXMutation,
  useKycMutation,
  useGetCountriesMutation,
  endpoints: {
    signup: { matchFulfilled: signupFulfiled },
    login: { matchFulfilled: loginFulfiled },
    logout: { matchFulfilled: logoutFulfiled, matchRejected: logoutRejected },
    loginStatus: { matchFulfilled: loginStatusFulfiled },
    signupFTX: { matchFulfilled: signupFTXFulfiled },
    loginFTX: { matchFulfilled: loginFTXFulfiled },
    kyc: { matchFulfilled: kycFulfiled, matchRejected: kycRejected },
  },
} = authApi;
