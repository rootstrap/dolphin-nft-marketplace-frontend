import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';

const creditCardApi = api.injectEndpoints({
  endpoints: builder => ({
    createCreditCard: builder.mutation({
      query: (creditCard: CreditCardBody) => ({
        url: endpoints.CREDIT_CARD,
        method: 'POST',
        body: creditCard,
      }),
    }),
    getCreditCards: builder.mutation<CreditCardData[], void>({
      query: () => `${endpoints.CREDIT_CARD}`,
      transformResponse: (response: CreditCardData[]) => response,
    }),
    getCreditCardById: builder.mutation<CreditCardData, string>({
      query: (id: string) => `${endpoints.CREDIT_CARD}/${id}`,
      transformResponse: (response: CreditCardData) => response,
    }),
    getCreditCardFees: builder.mutation<FeeResult, void>({
      query: () => `${process.env.REACT_APP_FTX_API_URL}/cards/fees`,
      transformResponse: (response: Fee) => response.result,
    }),
  }),
});

interface CreditCardBody {
  name: string;
  ccNumber: number;
  cvv: number;
  expiryMonth: number;
  expiryYear: number;
  country: string;
  district: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
}

interface CreditCardData {
  billingInfo: BillingInfo;
  data: {
    mask: string;
  };
  depositVerificationErrorCode: string;
  depositVerificationStatus: string;
  errorCode: number | null;
  id: number;
  name: string;
  status: string;
}

interface BillingInfo {
  city: string;
  country: string;
  district: string;
  line1: string;
  line2: string;
  name: string;
  postalCode: string;
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
  endpoints: {
    createCreditCard: { matchFulfilled: createCreditCardFulfiled, matchRejected: createCreditCardRejected },
    getCreditCards: { matchFulfilled: getCreditCardFulfiled, matchRejected: getCreditCardRejected },
    getCreditCardById: {
      matchFulfilled: getCreditCardByIdFulfiled,
      matchRejected: getCreditCardByIdRejected,
    },
  },
} = creditCardApi;
