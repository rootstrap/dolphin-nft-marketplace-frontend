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
  endpoints: {
    getNftsSecondary: { matchFulfilled: getNftsSecondaryFulfiled },
    getNftsPrimary: { matchFulfilled: getNftsPrimaryFulfiled },
    getNftsFeatured: { matchFulfilled: getNftsFeaturedFulfiled },
    getNftDetails: { matchFulfilled: getNftDetailsFulfiled },
  },
} = nftApi;

interface BuyNFT {
  nftId: number;
  price: number;
}
