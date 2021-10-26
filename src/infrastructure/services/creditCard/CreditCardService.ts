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
    getCreditCard: builder.mutation<CreditCardData, void>({
      query: () => `${endpoints.CREDIT_CARD}`,
      transformResponse: (response: CreditCardData) => response,
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

export const {
  useCreateCreditCardMutation,
  useGetCreditCardMutation,
  endpoints: {
    createCreditCard: { matchFulfilled: createCreditCardFulfiled, matchRejected: createCreditCardRejected },
    getCreditCard: { matchFulfilled: getCreditCardFulfiled, matchRejected: getCreditCardRejected },
  },
} = creditCardApi;
