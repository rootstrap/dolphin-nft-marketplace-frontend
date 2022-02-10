import { CIRCLE_FAILURE_CODES } from 'app/constants/constants';

export type Status = 'approved' | 'pending' | 'rejected' | 'needsDepositVerification';
export type DepositVerificationStatus =
  | 'notStarted'
  | 'pending'
  | 'submissionFailed'
  | 'awaitingVerification'
  | 'successful'
  | 'failed';

export interface ICreditCardsResponse {
  result: CreditCardData[];
  success: boolean;
}

export interface ICreditCardResponse {
  result: CreditCardData;
  success: boolean;
}

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

export interface ICreditCardError {
  data: CreditCardError;
  status: number;
}

interface CreditCardError {
  error: string;
  success: boolean;
}
