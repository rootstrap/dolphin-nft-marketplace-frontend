import { sortBy } from 'app/helpers/sortBy';
import {
  CreditCardData,
  ICreditCardsResponse,
  ICreditCardResponse,
} from 'app/interfaces/creditCard/creditCard';
import { api } from '../Api';

export const creditCardApi = api.injectEndpoints({
  endpoints: builder => ({
    createCreditCard: builder.mutation({
      query: (creditCard: CreditCardBody) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/cards`,
        method: 'POST',
        headers: { ftxAuthorization: 'yes' },
        body: {
          data: {
            mask: creditCard.ccNumber.toString().slice(creditCard.ccNumber.toString().length - 4),
          },
          expiryMonth: creditCard.expiryMonth,
          expiryYear: creditCard.expiryYear,
          keyId: creditCard.keyId,
          name: creditCard.name,
          encryptedData: creditCard.encryptedData,
          billingInfo: {
            name: creditCard.name,
            country: creditCard.country,
            district: creditCard.district,
            line1: creditCard.address1,
            line2: creditCard.address2,
            city: creditCard.city,
            postalCode: creditCard.postalCode,
          },
        },
      }),
    }),
    getCreditCards: builder.mutation<CreditCardData[], void>({
      query: () => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/cards`,
        method: 'GET',
        headers: { ftxAuthorization: 'yes' },
      }),
      transformResponse: (response: ICreditCardsResponse) => response.result.concat().sort(sortBy('status')),
    }),
    getCreditCardById: builder.mutation<CreditCardData, string>({
      query: (id: string) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/cards/${id}`,
        method: 'GET',
        headers: { ftxAuthorization: 'yes' },
      }),
      transformResponse: (response: ICreditCardResponse) => response.result,
    }),
    getCreditCardFees: builder.mutation<FeeResult, void>({
      query: () => `${process.env.REACT_APP_FTX_API_URL}/cards/fees`,
      transformResponse: (response: Fee) => response.result,
    }),
    deleteCreditCard: builder.mutation({
      query: (creditCardId: string) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/cards/${creditCardId}`,
        method: 'DELETE',
        headers: { ftxAuthorization: 'yes' },
      }),
    }),
  }),
});

interface CreditCardBody {
  name: string;
  ccNumber: number;
  cvv: number;
  encryptedData: string;
  expiryMonth: number;
  expiryYear: number;
  country: string;
  district: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
  publicKey: string;
  keyId: string;
}

interface FeeResult {
  fixed: number;
  variable: number;
}
interface Fee {
  result: FeeResult;
}

export const {
  useCreateCreditCardMutation,
  useGetCreditCardsMutation,
  useGetCreditCardByIdMutation,
  useGetCreditCardFeesMutation,
  useDeleteCreditCardMutation,
  endpoints: {
    createCreditCard: { matchFulfilled: createCreditCardFulfiled, matchRejected: createCreditCardRejected },
    getCreditCards: { matchFulfilled: getCreditCardsFulfiled, matchRejected: getCreditCardsRejected },
    getCreditCardById: {
      matchFulfilled: getCreditCardByIdFulfiled,
      matchRejected: getCreditCardByIdRejected,
    },
    deleteCreditCard: { matchFulfilled: deleteCreditCardFulfiled },
  },
} = creditCardApi;
