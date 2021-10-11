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
    kyc: builder.mutation({
      query: (kyc: KycBody) => ({
        url: endpoints.KYC,
        method: 'POST',
        body: {
          fullLegalName: kyc.fullName,
          country: kyc.country,
          stateProvinceRegion: kyc.province,
          dateOfBirth: kyc.dateOfBirth,
          postalCode: kyc.postalCode,
          streetAddress: kyc.streetAddress,
        },
      }),
    }),
    cc: builder.mutation({
      query: (kyc: CcBody) => ({
        url: endpoints.CC,
        method: 'POST',
        body: kyc,
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
  province: string;
  dateOfBirth: string;
  postalCode: string;
  streetAddress: string;
}

interface CcBody {
  name: string;
  ccNumber: string;
  cvv: string;
  expiryMonth: string;
  expiryYear: string;
  country: string;
  district: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
}

interface SignupBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useKycMutation,
  useCcMutation,
  endpoints: {
    cc: { matchFulfilled: ccFulfiled },
    kyc: { matchFulfilled: kycFulfiled },
    login: { matchFulfilled: loginFulfiled },
    logout: { matchFulfilled: logoutFulfiled },
    signup: { matchFulfilled: signupFulfiled },
  },
} = authApi;
