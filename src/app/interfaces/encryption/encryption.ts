export interface IEncryptedValue {
  encryptedData: string;
  keyId: string;
}

export interface ICardDetails {
  number?: number;
  cvv?: number;
}

export interface IDeposit {
  cvv: number;
}
