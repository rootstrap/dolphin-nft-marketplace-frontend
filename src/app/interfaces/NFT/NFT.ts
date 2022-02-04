export interface NFT {
  id: string;
  name: string;
  ftx_id: string;
  description: string;
  tier: string;
  issuer: string;
  collection: string;
  series: string;
  solMintAddress?: string;
  ethContractAddress?: string;
  imageUrl: string;
  videoUrl: string;
  animationUrl: string;
  number: number;
  totalQuantity: number;
  offerPrice: number;
  createdAt: string;
  created_at: string;
  quoteCurrency: string;
}

export interface FillsResult {
  fee: number;
  id: number;
  nft: NFT;
  price: number;
  quoteCurrency: string;
  royalty: number;
  side: string;
  time: string;
}
export interface IFillsResponse {
  success: boolean;
  result: FillsResult[];
}

export type nftPack = 'common' | 'bronze' | 'silver' | 'gold' | 'creatures';
