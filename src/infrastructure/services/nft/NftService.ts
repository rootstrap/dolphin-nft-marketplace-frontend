import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';
import { NFT } from 'app/interfaces/NFT/NFT';

const nftApi = api.injectEndpoints({
  endpoints: builder => ({
    getNftsWithFilter: builder.mutation<NFT[], string>({
      query: issuer => `${endpoints.NFT}?issuer=${issuer}`,
      transformResponse: (data: { result: NFT[] }) => {
        return data.result.filter(nft => nft.offerPrice === 25.0);
      },
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
  useGetNftsWithFilterMutation,
  useGetNftDetailsMutation,
  endpoints: {
    getNftsWithFilter: { matchFulfilled: getNftsFulfiled },
    getNftDetails: { matchFulfilled: getNftDetailsFulfiled },
  },
} = nftApi;
