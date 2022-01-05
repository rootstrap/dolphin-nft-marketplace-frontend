export type Currency = 'USD' | 'SOL';

export interface BalanceResults {
  result: Balance[];
  success: boolean;
}

export interface Balance {
  coin: string;
  free: number;
  spotBorrow: number;
  total: number;
  usdValue: number;
  availableWithoutBorrow: number;
}

export interface ConvertBalanceResponse {
  success: boolean;
  result: ConvertBalanceResult;
}

export interface ConvertBalanceResult {
  quoteId: number;
}
export interface GetConvertResponse {
  success: boolean;
  result: GetConvertResult;
}

export interface GetConvertResult {
  baseCoin: string;
  cost: number;
  expired: boolean;
  expiry: number;
  filled: boolean;
  fromCoin: string;
  id: number;
  price: number;
  proceeds: number;
  quoteCoin: string;
  side: string;
  toCoin: string;
}

export interface GetCoinsResponse {
  success: boolean;
  result: GetCoinsResult[];
}

export interface GetCoinsResult {
  bep2Asset: null;
  canConvert: boolean;
  canDeposit: boolean;
  canWithdraw: boolean;
  collateral: boolean;
  collateralWeight: number;
  creditTo: null;
  erc20Contract: string;
  fiat: boolean;
  hasTag: boolean;
  id: string;
  isToken: boolean;
  methods: string[];
  spotMargin: boolean;
  name: string;
  nftQuoteCurrencyEligible: boolean;
  trc20Contract: string;
  usdFungible: boolean;
  splMint: null;
}
