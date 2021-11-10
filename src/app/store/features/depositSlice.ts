import { createSlice } from '@reduxjs/toolkit';
import { Balance, getBalanceFulfiled } from 'infrastructure/services/deposit/DepositService';

const initialState: DepositState = {
  currentBalance: 0,
  balances: [],
};

const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getBalanceFulfiled, (state, { payload }) => {
      state.balances = [...payload];
      state.currentBalance = payload[0].total;
    });
  },
});

interface DepositState {
  currentBalance: number;
  balances: Balance[];
}

export default depositSlice.reducer;
