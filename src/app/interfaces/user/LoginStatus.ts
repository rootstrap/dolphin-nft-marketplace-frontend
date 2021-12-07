export interface ILoginStatusResponse {
  success: boolean;
  result: LoginStatusResult;
}

export interface LoginStatusResult {
  loggedIn: boolean;
  account: Account;
  user: User;
  subaccount: null;
  country: string;
  state: string;
  supportOnly: boolean;
  mfaRequired: string;
  requiresEmailLink: boolean;
  mfa: string;
  readOnly: boolean;
  restrictedToSubaccount: boolean;
  withdrawalEnabled: boolean;
  internalTransfersEnabled: boolean;
  onlyAllowSupportOnly: boolean;
}

export interface Account {
  username: string;
  collateral: number;
  freeCollateral: number;
  totalAccountValue: number;
  totalPositionSize: number;
  initialMarginRequirement: number;
  maintenanceMarginRequirement: number;
  marginFraction: null;
  openMarginFraction: null;
  liquidating: boolean;
  backstopProvider: boolean;
  positions: any[];
  takerFee: number;
  makerFee: number;
  leverage: number;
  positionLimit: null;
  positionLimitUsed: null;
  useFttCollateral: boolean;
  chargeInterestOnNegativeUsd: boolean;
  spotMarginEnabled: boolean;
  spotLendingEnabled: boolean;
}

export interface User {
  hkClientType: null;
  agreedToTrumpExtension: null;
  ukClientTypeResponse: null;
  defaultFiat: null;
  mobileHasTraded: null;
  paidNftListingFee: null;
  agreedToMarginAndLocAgreement: null;
  mobileHasDeposited: null;
  displayName: string;
  email: string;
  mid: string;
  kycApplicationStatus: string;
  kycLevel: number;
  kycType: string;
  referralCode: number;
  referred: boolean;
  referrerId: null;
  vip: number;
  mmLevel: number;
  feeTier: number;
  ftt: number;
  jurisdiction: string;
  monthlyVolume: number;
  monthlyMakerVolume: number;
  monthlyLtVolume: number;
  monthlyLeveragedTokenCreationVolume: number;
  monthlyLeveragedTokenRedemptionVolume: number;
  dailyVolume: number;
  dailyMakerVolume: number;
  dailyLeveragedTokenCreationVolume: number;
  dailyLeveragedTokenRedemptionVolume: number;
  mfa: null;
  requireMfaForWithdrawals: boolean;
  requireWithdrawalPassword: boolean;
  requireWhitelistedWithdrawals: boolean;
  whitelistedAddressDelayDays: null;
  randomSlug: string;
  showInLeaderboard: boolean;
  useRealNameInLeaderboard: boolean;
  chatUserId: null;
  useBodPriceChange: boolean;
  confirmTrades: boolean;
  cancelAllOrdersButtonEnabled: boolean;
  passedLtQuiz: boolean;
  ukClientType: string;
  hkStatus: string;
  hkStatusMobile: string;
  nuveiUploadedPof: boolean;
  neverRequireEmailLinks: boolean;
  chatApp: null;
  chatHandle: null;
  language: null;
  dailyLocInterestRate: number;
  optionsEnabled: boolean;
  canOtcTradeOptions: boolean;
}
