import { api } from '../Api';

const depositApi = api.injectEndpoints({
  endpoints: builder => ({
    createDeposit: builder.mutation({
      query: (deposit: DepositBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/cards/${deposit.cardId}/deposit_verify_attempt`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
        body: {
          size: deposit.size,
        },
      }),
    }),
  }),
});

interface DepositBody {
  size: number;
  cardId: number;
}

export const { useCreateDepositMutation } = depositApi;
