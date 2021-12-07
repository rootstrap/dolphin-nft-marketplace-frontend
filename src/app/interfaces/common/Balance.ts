export interface Balance {
  coin: string;
  free: number;
  spotBorrow: number;
  total: number;
  usdValue: number;
  availableWithoutBorrow: number;
}
