import { createSlice } from '@reduxjs/toolkit';
import { CreditCardData, getCreditCardsFulfiled } from 'infrastructure/services/creditCard/CreditCardService';

const initialState: CreditCardState = {
  creditCards: [],
  defaultCreditCard: {
    id: '',
    name: '',
    time: '',
    billingInfo: {
      city: '',
      name: '',
      line1: '',
      line2: '',
      country: '',
      district: '',
      postalCode: '',
    },
    depositVerificationStatus: 'notStarted',
    depositVerificationErrorCode: 'no_error',
    status: 'pending',
    data: {
      mask: '',
    },
    errorCode: null,
  },
};

const creditCardSlice = createSlice({
  name: 'creditCard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getCreditCardsFulfiled, (state, { payload }) => {
      state.creditCards = [...payload];
      state.defaultCreditCard = { ...payload[0] };
    });
  },
});

interface CreditCardState {
  creditCards: CreditCardData[];
  defaultCreditCard: CreditCardData;
}

export default creditCardSlice.reducer;
