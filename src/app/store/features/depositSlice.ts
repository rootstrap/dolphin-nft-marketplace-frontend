import { createSlice } from '@reduxjs/toolkit';
import { Balance } from 'app/interfaces/common/Balance';
import { getBalanceFulfiled } from 'app/services/deposit/DepositService';

const initialState: DepositState = {
  currentBalance: 0,
  balances: [],
};

const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getBalanceFulfiled, (state, { payload: { result } }) => {
      state.balances = result;
      state.currentBalance = result.length ? result[0].total : 0;
    });
  },
});

interface DepositState {
  currentBalance: number;
  balances: Balance[];
}

export default depositSlice.reducer;
