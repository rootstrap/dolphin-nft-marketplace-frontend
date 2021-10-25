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
          stateProvinceRegion: kyc.state,
          dateOfBirth: kyc.dateOfBirth,
          postalCode: kyc.postalCode,
          streetAddress: kyc.streetAddress,
        },
      }),
    }),
    cc: builder.mutation({
      query: (cc: CcBody) => ({
        url: endpoints.CC,
        method: 'POST',
        body: cc,
      }),
    }),
    deposit: builder.mutation({
      query: (deposit: DepositBody) => ({
        url: endpoints.DEPOSIT,
        method: 'POST',
        body: deposit,
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

interface DepositBody {
  coin: string;
  size: number;
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

interface CcBody {
  name: string;
  ccNumber: number;
  cvv: number;
  expiryMonth: number;
  expiryYear: number;
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
    signup: { matchFulfilled: signupFulfiled },
    login: { matchFulfilled: loginFulfiled },
    cc: { matchFulfilled: ccFulfiled, matchRejected: ccRejected },
    kyc: { matchFulfilled: kycFulfiled, matchRejected: kycRejected },
    logout: { matchFulfilled: logoutFulfiled, matchRejected: logoutRejected },
    deposit: { matchFulfilled: depositFulfiled },
  },
} = authApi;
