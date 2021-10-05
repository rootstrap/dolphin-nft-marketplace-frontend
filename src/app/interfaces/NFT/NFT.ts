export interface NFT {
  id: string;
  name: string;
  description: string;
  issuer: string;
  collection: string;
  series: string;
  solMintAddress?: string;
  ethContractAddress?: string;
  imageUrl: string;
  videoUrl: string;
  number: number;
  totalQuantity: null;
  redeemable: boolean;
  redeemed: boolean;
  offerPrice: number;
  donation: boolean;
  status: string;
  needsListingFee: boolean;
  featured: boolean;
  createdAt: string;
  created_at: string;
  quoteCurrency: string;
  depositMethods: string[];
  royaltyFeeRate: number;
  totalSellerFeeRate: number;
  withdrawalMethods: string[];
}
