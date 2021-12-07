import { CIRCLE_FAILURE_CODES } from 'app/constants/contants';
import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';

const creditCardApi = api.injectEndpoints({
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
    deleteCreditCard: builder.mutation({
      query: (creditCardId: string) => ({
        url: `${endpoints.CREDIT_CARD}/${creditCardId}`,
        method: 'DELETE',
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

type DepositVerificationStatus =
  | 'notStarted'
  | 'pending'
  | 'submissionFailed'
  | 'awaitingVerification'
  | 'successful'
  | 'failed';

type Status = 'approved' | 'pending' | 'rejected' | 'needsDepositVerification';
export interface CreditCardData {
  id: string;
  name: string;
  time: string;
  billingInfo: Record<string, string>;
  status: Status;
  errorCode: string;
  depositVerificationStatus: DepositVerificationStatus;
  depositVerificationErrorCode: keyof typeof CIRCLE_FAILURE_CODES;
  data: Record<string, string> | null;
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
