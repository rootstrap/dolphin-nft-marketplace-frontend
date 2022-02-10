import { api } from '../Api';

export const mfaApi = api.injectEndpoints({
  endpoints: builder => ({
    requestCode: builder.mutation({
      query: () => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/mfa/sms/request`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
    }),
    loginMfa: builder.mutation({
      query: (code: string) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/login_with_mfa`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
        body: {
          code,
        },
      }),
    }),
  }),
});

export const {
  useRequestCodeMutation,
  useLoginMfaMutation,
  endpoints: {
    loginMfa: { matchFulfilled: loginMfaFulfilled },
  },
} = mfaApi;
