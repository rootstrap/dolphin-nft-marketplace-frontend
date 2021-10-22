import { createSlice } from '@reduxjs/toolkit';
import { NFT } from 'app/interfaces/NFT/NFT';
import { getNftDetailsFulfiled } from 'infrastructure/services/nft/NftService';

const initialState: NFTState = {
  nfts: [],
};

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getNftDetailsFulfiled, (state, { payload }) => {
      state.nfts = payload;
    });
  },
});

interface NFTState {
  nfts: NFT[];
}

export default nftSlice.reducer;
