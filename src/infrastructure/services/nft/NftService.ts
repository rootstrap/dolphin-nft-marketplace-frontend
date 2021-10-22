import { endpoints } from 'app/constants/endpoints';
import { NFT } from 'app/interfaces/NFT/NFT';
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
  }),
  overrideExisting: true,
});

export const {
  useGetNftsSecondaryMutation,
  useGetNftDetailsMutation,
  useGetNftsPrimaryMutation,
  useGetNftsFeaturedMutation,
  useGetNftByIdMutation,
  endpoints: {
    getNftsSecondary: { matchFulfilled: getNftsSecondaryFulfiled },
    getNftsPrimary: { matchFulfilled: getNftsPrimaryFulfiled },
    getNftsFeatured: { matchFulfilled: getNftsFeaturedFulfiled },
    getNftDetails: { matchFulfilled: getNftDetailsFulfiled },
  },
} = nftApi;
