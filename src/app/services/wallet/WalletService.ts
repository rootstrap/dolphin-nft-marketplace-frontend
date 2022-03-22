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
    withdrawNft: builder.mutation<any, withdrawNftBodyInterface>({
      query: (withdrawalNftBody: withdrawNftBodyInterface) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/wallet/withdrawals`,
        method: 'POST',
        body: {
          coin: 'SOL',
          address: withdrawalNftBody.address,
          tag: null,
          size: '',
          code: withdrawalNftBody.code,
          password: null,
          saveAddress: false,
          notes: null,
          nftId: withdrawalNftBody.id,
          wormhole: false,
        },
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
      transformResponse: (data: IVerifyWalletResponse) => data,
    }),
  }),
});

export const { useVerifyWalletMutation, useWithdrawNftMutation } = walletApi;

interface IVerifyWalletResponse {
  address: string;
  authorized: boolean;
}

interface withdrawNftBodyInterface {
  address: string;
  code: string;
  id: string;
}
