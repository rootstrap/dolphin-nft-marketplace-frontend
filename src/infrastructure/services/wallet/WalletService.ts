import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';

const walletApi = api.injectEndpoints({
  endpoints: builder => ({
    verifyWallet: builder.mutation<IVerifyWalletResponse, string>({
      query: (address: string) => ({
        url: `${endpoints.WHITELIST}?address=${address}`,
      }),
      transformResponse: (data: IVerifyWalletResponse) => data,
    }),
  }),
});

export const { useVerifyWalletMutation } = walletApi;

interface IVerifyWalletResponse {
  address: string;
  authorized: boolean;
}
