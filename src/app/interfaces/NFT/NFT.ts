export interface NFT {
  id: string;
  name: string;
  ftx_id: string;
  description: string;
  issuer: string;
  collection: string;
  series: string;
  solMintAddress?: string;
  ethContractAddress?: string;
  imageUrl: string;
  videoUrl: string;
  number: number;
  totalQuantity: number;
  offerPrice: number;
  createdAt: string;
  created_at: string;
  quoteCurrency: string;
 }
