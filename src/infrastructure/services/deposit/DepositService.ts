import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';

const depositApi = api.injectEndpoints({
  endpoints: builder => ({
    createDeposit: builder.mutation({
      query: (deposit: DepositBody) => ({
        url: endpoints.DEPOSIT,
        method: 'POST',
        body: {
          amount: deposit.amount,
          cardId: deposit.cardId,
        },
      }),
    }),
  }),
});

interface DepositBody {
  amount: string;
  cardId: number;
}

export const { useCreateDepositMutation } = depositApi;
