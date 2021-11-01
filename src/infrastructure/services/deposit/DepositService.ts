import { ftxEndpoints } from 'app/constants/endpoints';
import { api } from '../Api';

const depositApi = api.injectEndpoints({
  endpoints: builder => ({
    createDeposit: builder.mutation({
      query: (deposit: DepositBody) => ({
        url: `${ftxEndpoints.baseUrl}cards/${deposit.cardId}/deposit_verify_attempt`,
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
