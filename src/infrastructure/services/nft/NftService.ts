import { endpoints } from 'app/constants/endpoints';
import { api } from '../Api';
import { NFT } from 'app/interfaces/NFT/NFT';

const nftApi = api.injectEndpoints({
  endpoints: builder => ({
    getNfts: builder.mutation<NFT[], string>({
      query: issuer => `${endpoints.NFT}?issuer=${issuer}`,
      transformResponse: (data: { result: NFT[] }) => {
        return data.result.slice(0, 25);
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetNftsMutation,
  endpoints: {
    getNfts: { matchFulfilled: getNftsFulfiled },
  },
} = nftApi;
