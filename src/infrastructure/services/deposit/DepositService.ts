import { endpoints } from 'app/constants/endpoints';
import {
  Balance,
  GetCoinsResponse,
  GetConvertResponse,
  GetConvertResult,
} from 'app/interfaces/common/Balance';
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
    getCoins: builder.mutation<GetCoinsResponse, void>({
      query: () => `${process.env.REACT_APP_FTX_API_URL}/wallet/coins`,
    }),
    getBalance: builder.mutation<Balance[], void>({
      query: () => `${endpoints.BALANCE}`,
    }),
    getConvertBalance: builder.mutation<GetConvertResult, void>({
      query: convertId => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/otc/quotes/${convertId}`,
        method: 'GET',
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
      transformResponse: (data: GetConvertResponse) => data.result,
    }),
    convertBalance: builder.mutation({
      query: (convert: ConvertBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/otc/quotes`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
        body: {
          fromCoin: convert.fromCoin,
          toCoin: convert.toCoin,
          size: Number(convert.size),
          whitelabel: 'dolphin',
        },
      }),
    }),
    confirmConvertBalance: builder.mutation({
      query: convertId => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/otc/quotes/${convertId}/accept`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
    }),
  }),
});

interface DepositBody {
  size: number;
  cardId: number;
  cvv?: number;
}

interface ConvertBody {
  fromCoin: string;
  toCoin: string;
  size: string;
}

export const {
  useCreateDepositMutation,
  useInitiateDepositMutation,
  useGetBalanceMutation,
  useGetCoinsMutation,
  useConvertBalanceMutation,
  useGetConvertBalanceMutation,
  useConfirmConvertBalanceMutation,
  endpoints: {
    getBalance: { matchFulfilled: getBalanceFulfiled },
  },
} = depositApi;
