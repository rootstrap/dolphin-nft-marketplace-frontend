import { endpoints } from 'app/constants/endpoints';
import { Country, Subregion } from 'app/interfaces/common/Country';
import { ILoginStatusResponse, LoginStatusResult } from 'app/interfaces/user/LoginStatus';
import { getFormData } from 'app/helpers/getFormData';
import { api } from '../Api';

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (user: LoginBody) => ({
        url: endpoints.SIGN_IN,
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
    }),
    editProfile: builder.mutation({
      query: (user: EditProfileBody) => ({
        url: endpoints.EDIT_PROFILE,
        method: 'PATCH',
        body: {
          firstName: user.firstName,
          lastName: user.lastName,
          twitterUrl: user.twitterUrl,
          discordUrl: user.discordUrl,
          avatarImg: user.avatarImg,
        },
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
    loginStatus: builder.mutation<LoginStatusResult, void>({
      query: () => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/login_status`,
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
      transformResponse: (data: ILoginStatusResponse) => data.result,
    }),
    kyc: builder.mutation({
      query: (kyc: KycBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/kyc/level_1`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
        body: getFormData(kyc),
      }),
    }),
    logout: builder.mutation({
      query: (user: LogoutBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/logout`,
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
    googleLogin: builder.mutation({
      query: (googleBody: GoogleLoginBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/users/google_login`,
        method: 'POST',
        body: {
          deviceId: googleBody.deviceId,
          googleIdToken: googleBody.googleIdToken,
        },
      }),
    }),
    changePassword: builder.mutation({
      query: (changePasswordBody: changePasswordBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/users/public_change_password`,
        method: 'POST',
        body: {
          email: changePasswordBody.email,
          deviceId: changePasswordBody.deviceId,
          captcha: {
            recaptcha_challenge: changePasswordBody.recaptcha,
          },
        },
      }),
    }),
    setAgreeSweepstakes: builder.mutation({
      query: (userAgreeBody: UserAgreeBody) => ({
        url: endpoints.ELIGIBLE,
        method: 'POST',
        body: {
          email: userAgreeBody.email,
          isEligible: userAgreeBody.isEligible,
        },
      }),
    }),
    getCountries: builder.mutation<Country[], string>({
      query: () => `${endpoints.COUNTRIES}`,
      transformResponse: (data: Country[]) => data,
    }),
    getSubregions: builder.mutation<Subregion[], string>({
      query: countryCode => `${endpoints.SUBREGIONS}?country=${countryCode}`,
      transformResponse: (data: Subregion[]) => data,
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

interface GoogleLoginBody {
  deviceId: string;
  googleIdToken: string;
}

interface LogoutBody {
  email: string;
}

interface changePasswordBody {
  email: string;
  deviceId: string;
  recaptcha: string;
}

interface KycBody {
  fullLegalName: string;
  country: string;
  stateProvinceRegion: string;
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

interface UserAgreeBody {
  email: string;
  isEligible: boolean;
}

interface EditProfileBody {
  firstName: string;
  lastName: string;
  twitterUrl: string;
  discordUrl: string;
  avatarImg: string;
}

export const {
  useLoginMutation,
  useLoginFTXMutation,
  useLoginStatusMutation,
  useLogoutMutation,
  useSignupMutation,
  useSignupFTXMutation,
  useGoogleLoginMutation,
  useSetAgreeSweepstakesMutation,
  useKycMutation,
  useGetCountriesMutation,
  useGetSubregionsMutation,
  useChangePasswordMutation,
  useEditProfileMutation,
  endpoints: {
    signup: { matchFulfilled: signupFulfiled },
    login: { matchFulfilled: loginFulfiled },
    logout: { matchFulfilled: logoutFulfiled, matchRejected: logoutRejected },
    loginStatus: { matchFulfilled: loginStatusFulfiled },
    signupFTX: { matchFulfilled: signupFTXFulfiled },
    loginFTX: { matchFulfilled: loginFTXFulfiled },
    googleLogin: { matchFulfilled: googleLoginFulfiled },
    kyc: { matchFulfilled: kycFulfiled, matchRejected: kycRejected },
    setAgreeSweepstakes: { matchFulfilled: setAgreeSweepstakesFulfiled },
    editProfile: { matchFulfilled: editProfileFulfiled },
  },
} = authApi;
