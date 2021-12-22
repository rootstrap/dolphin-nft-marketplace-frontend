import { createSlice } from '@reduxjs/toolkit';
import { Balance } from 'app/interfaces/common/Balance';
import { getBalanceFulfiled } from 'infrastructure/services/deposit/DepositService';

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
      state.balances = payload;
      state.currentBalance = payload.length ? payload[0].total : 0;
    });
  },
});

interface DepositState {
  currentBalance: number;
  balances: Balance[];
}

export default depositSlice.reducer;
