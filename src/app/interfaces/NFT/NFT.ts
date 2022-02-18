export interface NFT {
  id: string;
  name: string;
  attributes: Attributes;
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

export interface Attributes {
  Athlete: string;
  Background: string;
  Collection: string;
  Signed: string;
  Sport: string;
  Tier: string;
  imageUrl: string;
}

export type nftPack = 'common' | 'bronze' | 'silver' | 'gold' | 'creatures';
