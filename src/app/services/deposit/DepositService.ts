import {
  GetCoinsResponse,
  GetConvertResponse,
  GetConvertResult,
  BalanceResults,
} from 'app/interfaces/common/Balance';
import { api } from '../Api';

const depositApi = api.injectEndpoints({
  endpoints: builder => ({
    createDeposit: builder.mutation({
      query: (deposit: CreateDepositBody) => ({
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
      query: (deposit: InitiateDepositBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/cards/deposit`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
        body: {
          cardId: deposit.cardId,
          coin: 'USD',
          encryptedData: deposit.encryptedData,
          keyId: deposit.keyId,
          size: deposit.size,
        },
      }),
    }),
    getCoins: builder.mutation<GetCoinsResponse, void>({
      query: () => `${process.env.REACT_APP_FTX_API_URL}/wallet/coins`,
    }),
    getBalance: builder.mutation<BalanceResults, void>({
      query: () => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/wallet/balances`,
        method: 'GET',
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
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
    getMarket: builder.mutation<number, string>({
      query: marketName => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/markets/${marketName}`,
        method: 'GET',
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
      transformResponse: (data: GetMarketResponse) => data.result.price,
    }),
  }),
});

interface CreateDepositBody {
  size: number;
  cardId: number;
}

interface InitiateDepositBody {
  cardId: string;
  encryptedData: string;
  keyId: string;
  size: number;
}

interface ConvertBody {
  fromCoin: string;
  toCoin: string;
  size: string;
}

interface GetMarketResponse {
  success: boolean;
  result: GetMarketResult;
}

interface GetMarketResult {
  name: string;
  enabled: boolean;
  postOnly: boolean;
  priceIncrement: number;
  sizeIncrement: number;
  minProvideSize: number;
  last: number;
  bid: number;
  ask: number;
  price: number;
  type: string;
  baseCurrency: string;
  quoteCurrency: string;
  underlying: null;
  restricted: boolean;
  highLeverageFeeExempt: boolean;
  largeOrderThreshold: number;
  change1h: number;
  change24h: number;
  changeBod: number;
  quoteVolume24h: number;
  volumeUsd24h: number;
}

export const {
  useCreateDepositMutation,
  useInitiateDepositMutation,
  useGetBalanceMutation,
  useGetCoinsMutation,
  useConvertBalanceMutation,
  useGetConvertBalanceMutation,
  useConfirmConvertBalanceMutation,
  useGetMarketMutation,
  endpoints: {
    getBalance: { matchFulfilled: getBalanceFulfiled },
  },
} = depositApi;
