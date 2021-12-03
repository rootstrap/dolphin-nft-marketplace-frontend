import { endpoints } from 'app/constants/endpoints';
import { Balance } from 'app/interfaces/common/Balance';
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
    initiateDeposit: builder.mutation({
      query: (deposit: DepositBody) => ({
        url: `${endpoints.DEPOSIT}/initiate-deposit`,
        method: 'POST',
        body: {
          size: deposit.size,
          cardId: deposit.cardId,
          cvv: deposit.cvv,
        },
      }),
    }),
    getBalance: builder.mutation<Balance[], void>({
      query: () => `${endpoints.BALANCE}`,
    }),
  }),
});

interface DepositBody {
  size: number;
  cardId: number;
  cvv?: number;
}

export const {
  useCreateDepositMutation,
  useInitiateDepositMutation,
  useGetBalanceMutation,
  endpoints: {
    getBalance: { matchFulfilled: getBalanceFulfiled },
  },
} = depositApi;
