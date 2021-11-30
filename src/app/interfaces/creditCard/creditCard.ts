export interface ICreditCardError {
  data: CreditCardError;
  status: number;
}

interface CreditCardError {
  error: string;
  success: boolean;
}
