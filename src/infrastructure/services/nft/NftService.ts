import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';
import { NFT } from 'app/interfaces/NFT/NFT';

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
    getNftDetails: builder.mutation<NFT, string>({
      query: nftId => `${endpoints.NFT}/${nftId}`,
      transformResponse: (data: { result: NFT }) => {
        return data.result;
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetNftsSecondaryMutation,
  useGetNftDetailsMutation,
  useGetNftsPrimaryMutation,
  endpoints: {
    getNftsSecondary: { matchFulfilled: getNftsSecondaryFulfiled },
    getNftsPrimary: { matchFulfilled: getNftsPrimaryFulfiled },
    getNftDetails: { matchFulfilled: getNftDetailsFulfiled },
  },
} = nftApi;
