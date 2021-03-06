import { endpoints } from 'app/constants/endpoints';
import { CreaturesPackInfo } from 'app/interfaces/NFT/CreaturesNFT';
import { NFT, Attributes, FillsResult, IFillsResponse } from 'app/interfaces/NFT/NFT';
import { INftTrades, INftTradesResult } from 'app/interfaces/NFT/NFTCommons';
import { api } from '../Api';

export const nftApi = api.injectEndpoints({
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
    getNftsByUser: builder.mutation<IGetNftByUserData, any>({
      query: ({ start, end }) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/nft/balances_page`,
        params: {
          startInclusive: start,
          endExclusive: end,
          sortFunc: 'offer_asc',
          nft_filter_string: JSON.stringify({
            nftAuctionFilter: 'all',
            minPriceFilter: null,
            maxPriceFilter: null,
            seriesFilter: [],
            traitsFilter: {},
            mintSourceFilter: 'all',
            include_not_for_sale: true,
          }),
        },
        headers: {
          ftxAuthorization: 'yes',
        },
      }),
      transformResponse: (response: IGetNftByUserResponse) => response.result,
    }),
    getNftsHeroletesSecondary: builder.mutation<HeroletesNftsResult, NftsHeroletesSecondaryParams>({
      query: (param: NftsHeroletesSecondaryParams) => {
        let queryStringFilters: queryStringFiltersInterface = {
          issuer: 'Heroletes',
        };

        if (param.filters) {
          queryStringFilters = {
            ...queryStringFilters,
            traitsFilter: {
              ...(param.filters.athlete && { Athlete: [param.filters.athlete] }),
              ...(param.filters.sport && { Sport: [param.filters.sport] }),
              ...(param.filters.tier && { Tier: [param.filters.tier] }),
              ...(param.filters.background && { Background: [param.filters.background] }),
              ...(param.filters.signed && { Signed: [param.filters.signed] }),
            },
          };
        }

        return {
          url: `${process.env.REACT_APP_FTX_API_URL}/nft/nfts_filtered?startInclusive=${
            param.startInclusive
          }&endExclusive=${param.endExclusive}&nft_filter_string=${encodeURIComponent(
            JSON.stringify(queryStringFilters)
          )}`,
          headers: {
            ftxAuthorization: 'yes',
          },
        };
      },
      transformResponse: (response: IHeroletesNftsResponse) => response.result,
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
          quoteCurrency: buyNftBody.quoteCurrency ? buyNftBody.quoteCurrency : 'USD',
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
    getHeroletesAttributes: builder.mutation<Attributes[], void>({
      query: () => `${endpoints.HEROLETES_ATTRIBUTES}`,
    }),
    getUserTrades: builder.mutation<FillsResult, string>({
      query: (limit: string) => ({
        url: `${process.env.REACT_APP_FTX_API_URL}/nft/fills?limit=${limit}`,
        method: 'GET',
        headers: {
          ftxAuthorization: 'yes',
        },
        transformResponse: (data: IFillsResponse) => data.result,
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
  useGetNftsHeroletesSecondaryMutation,
  useBuyNftMutation,
  useBuyNftByPackMutation,
  useGetNftsByUserMutation,
  useGetNftPackInfoMutation,
  useSellNftMutation,
  useGetNftTradeHistoryMutation,
  useGetHeroletesAttributesMutation,
  useGetUserTradesMutation,
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
  quoteCurrency?: string;
}

interface SellNFT {
  nftId: string;
  price: number;
  quoteCurrency: string;
}

export interface NftsHeroletesSecondaryParams {
  startInclusive: number;
  endExclusive: number;
  filters: any;
}

interface IGetNftByUserData {
  count: number;
  nfts: NFT[];
}

interface IGetNftByUserResponse {
  success: boolean;
  result: IGetNftByUserData;
}

interface IHeroletesNftsResponse {
  success: boolean;
  result: HeroletesNftsResult;
}

interface HeroletesNftsResult {
  nfts: NFT[];
  count: number;
  total: number;
}

interface queryStringFiltersInterface {
  issuer: string;
  traitsFilter?: TraitsFilterInterface;
}

interface TraitsFilterInterface {
  Athlete?: string[];
  Background?: string[];
  Tier?: string[];
  Signed?: string[];
  Sport?: string[];
}
