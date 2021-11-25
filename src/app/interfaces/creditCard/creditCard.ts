export interface IPublicKeysResponse {
  success: boolean;
  result: PublicKeysResult;
}

export interface PublicKeysResult {
  keyId: string;
  publicKey: string;
}

export interface ICreditCardError {
  data: CreditCardError;
  status: number;
}

interface CreditCardError {
  error: string;
  success: boolean;
}
