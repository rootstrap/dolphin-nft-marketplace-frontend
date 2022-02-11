import { endpoints } from 'app/constants/endpoints';
import { CreaturesPackInfo } from 'app/interfaces/NFT/CreaturesNFT';
import { NFT } from 'app/interfaces/NFT/NFT';
import { INftTrades, INftTradesResult } from 'app/interfaces/NFT/NFTCommons';
import { api } from '../Api';

const nftApi = api.injectEndpoints({
  endpoints: builder => ({
    getNftsSecondary: builder.mutation<NFT[], void>({
      query: () => `${endpoints.NFT}?secondary=true`,
      transformResponse: (data: NFT[]) => {
        return data;
      },
    }),
    getNftsPrimary: builder.mutation<NFT[], void>({
      query: () => `${endpoints.NFT}`,
      transformResponse: (data: NFT[]) => data,
    }),
    getNftsFeatured: builder.mutation<NFT[], void>({
      query: () => `${endpoints.NFT}?featured=true`,
      transformResponse: (data: NFT[]) => data,
    }),
    getNftDetails: builder.mutation<NFT[], string>({
      query: nftId => `${endpoints.NFT}/${nftId}`,
      transformResponse: (data: NFT[]) => data,
    }),
    getNftById: builder.mutation<NFT, string>({
      query: nftId => `${endpoints.NFT}?ftxId=${nftId}`,
      transformResponse: (data: NFT) => data,
    }),
    getNftsByUser: builder.mutation<NFT[], void>({
      query: () => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/nft/balances`,
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
      transformResponse: (response: IGetNftByUserResponse) => response.result,
    }),
    buyNft: builder.mutation({
      query: (buyNftBody: BuyNFT) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/nft/buy`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
        body: {
          nftId: buyNftBody.nftId,
          price: buyNftBody.price,
        },
      }),
    }),
    buyNftByPack: builder.mutation({
      query: (packId: string) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/nft/packs/${packId}/buy`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
    }),
    getNftPackInfo: builder.mutation<CreaturesPackInfo, string>({
      query: (packId: string) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/nft/packs/${packId}`,
        transformResponse: (data: CreaturesPackInfo) => data,
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
    }),
    sellNft: builder.mutation({
      query: (selNftBody: SellNFT) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/nft/offer`,
        method: 'POST',
        headers: {
          ftxAuthorization: 'yes',
        },
        body: {
          nftId: selNftBody.nftId,
          price: selNftBody.price,
          quoteCurrency: selNftBody.quoteCurrency,
        },
      }),
    }),
    getNftTradeHistory: builder.mutation<INftTradesResult[], string>({
      query: (nftId: string) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/nft/nft/${nftId}/trades`,
        headers: {
          ftxAuthorization: 'yes',
        },
        transformResponse: (data: INftTrades) => data.result,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetNftsSecondaryMutation,
  useGetNftDetailsMutation,
  useGetNftsPrimaryMutation,
  useGetNftsFeaturedMutation,
  useGetNftByIdMutation,
  useBuyNftMutation,
  useBuyNftByPackMutation,
  useGetNftsByUserMutation,
  useGetNftPackInfoMutation,
  useSellNftMutation,
  useGetNftTradeHistoryMutation,
  endpoints: {
    getNftsSecondary: { matchFulfilled: getNftsSecondaryFulfiled },
    getNftsPrimary: { matchFulfilled: getNftsPrimaryFulfiled },
    getNftsFeatured: { matchFulfilled: getNftsFeaturedFulfiled },
    getNftDetails: { matchFulfilled: getNftDetailsFulfiled },
  },
} = nftApi;

interface BuyNFT {
  nftId: string;
  price: number;
}

interface SellNFT {
  nftId: string;
  price: number;
  quoteCurrency: string;
}

export interface IGetNftByUserResponse {
  success: boolean;
  result: NFT[];
}