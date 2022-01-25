export interface INftTrades {
  success: boolean;
  result: INftTradesResult[];
}

export interface INftTradesResult {
  id: number;
  price: number;
  time: string;
  quoteCurrency: string;
}
