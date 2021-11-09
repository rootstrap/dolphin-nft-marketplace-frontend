import { endpoints } from 'app/constants/endpoints';
import { Country } from 'app/interfaces/common/Country';
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
          recaptcha: user.recaptcha,
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
  recaptcha: string;
}

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useKycMutation,
  useGetCountriesMutation,
  endpoints: {
    signup: { matchFulfilled: signupFulfiled },
    login: { matchFulfilled: loginFulfiled },
    logout: { matchFulfilled: logoutFulfiled, matchRejected: logoutRejected },
    kyc: { matchFulfilled: kycFulfiled, matchRejected: kycRejected },
  },
} = authApi;
