import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';

const depositApi = api.injectEndpoints({
  endpoints: builder => ({
    createDeposit: builder.mutation({
      query: (deposit: DepositBody) => ({
        url: endpoints.DEPOSIT,
        method: 'POST',
        body: {
          size: deposit.size,
          cardId: deposit.cardId,
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
